import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexXAxis, ApexYAxis, ApexDataLabels, ApexStroke, ApexTitleSubtitle, NgApexchartsModule } from 'ng-apexcharts';
import { Rendimiento, RendimientosService } from '../../../services/rendimientos.service';
import { RendimientoAnual, RendimientosAnualesService } from '../../../services/rendimientos-anuales.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

export type ChartOptions = {
  series: any[];
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
};

@Component({
  standalone:true,
  imports:[NgApexchartsModule, ReactiveFormsModule],
  selector: 'app-rendimiento-grafica',
  templateUrl: './rendimiento-grafica.component.html',
  styleUrls: ['./rendimiento-grafica.component.css']
})
export class RendimientoGraficaComponent implements OnInit {

  public chartOptions: Partial<ChartOptions> | any;
  rendimientos: Rendimiento[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder, private rendimientosService: RendimientosService) {
    // Inicializar el FormGroup en el constructor
    this.form = this.fb.group({
      serie: ['B'], // Valor inicial "B"
      tipoRendimiento: ['rendimiento_anual'] // Valor inicial "rendimiento_anual"
    });
  }

  ngOnInit(): void {
    // Cargar los datos desde el servicio
    this.rendimientosService.getRendimientos().subscribe((data: Rendimiento[]) => {
      this.rendimientos = data;
      this.updateChart(); // Crear la gráfica al inicio
    });

    // Suscribirse a los cambios del formulario
    this.form.valueChanges.subscribe(() => {
      this.updateChart();
    });
  }

  // Método para actualizar la gráfica
  updateChart(): void {
    const serieSeleccionada = this.form.get('serie')?.value;
    const tipoRendimiento = this.form.get('tipoRendimiento')?.value as keyof Rendimiento;  // Aseguramos que es una clave válida

    const seriesFiltrada = this.rendimientos.filter(r => r.serie === serieSeleccionada);

    this.chartOptions = {
      series: [
        {
          name: this.getRendimientoLabel(tipoRendimiento),
          data: seriesFiltrada.map(r => Number(r[tipoRendimiento])) // Esto ya es seguro
        }
      ],
      chart: {
        type: 'line',
        height: 350
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: seriesFiltrada.map(r => r.fecha_registro),
        labels: {
          show: false
        }
      },
      title: {
        text: `Rendimientos de la Serie ${serieSeleccionada}`
      }
    };
  }



  // Método auxiliar para obtener el nombre del tipo de rendimiento
  getRendimientoLabel(tipo: string): string {
    switch (tipo) {
      case 'rendimiento_anual':
        return 'Rendimiento Anual';
      case 'rendimiento_acumulado':
        return 'Rendimiento Acumulado';
      case 'rendimiento_bimestral':
        return 'Rendimiento Bimestral';
      default:
        return '';
    }
  }
}
