import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexXAxis, ApexYAxis, ApexDataLabels, ApexStroke, ApexTitleSubtitle, NgApexchartsModule } from 'ng-apexcharts';
import { Rendimiento, RendimientosService } from '../../../services/rendimientos.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

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
  standalone: true,
  imports: [NgApexchartsModule, ReactiveFormsModule, NgFor],
  selector: 'app-rendimiento-grafica',
  templateUrl: './rendimiento-grafica.component.html',
  styleUrls: ['./rendimiento-grafica.component.scss']
})
export class RendimientoGraficaComponent implements OnInit {

  public chartOptions: Partial<ChartOptions> | any;
  rendimientos: Rendimiento[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder, private rendimientosService: RendimientosService) {
    // Inicializar el FormGroup con FormArray para múltiples series
    this.form = this.fb.group({
      serie: this.fb.array([this.fb.control('B')]), // Inicializamos con la serie "B"
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

  // Método para obtener el FormArray de series
  get serieArray(): FormArray {
    return this.form.get('serie') as FormArray;
  }

  // Método para actualizar la gráfica con múltiples series seleccionadas
  updateChart(): void {
    const seriesSeleccionadas = this.serieArray.value; // Obtener las series seleccionadas
    const tipoRendimiento = this.form.get('tipoRendimiento')?.value as keyof Rendimiento;

    const seriesData = seriesSeleccionadas.map((serie: string) => {
      const seriesFiltrada = this.rendimientos.filter(r => r.serie === serie);
      return {
        name: this.getRendimientoLabel(tipoRendimiento) + ` (${serie})`,
        data: seriesFiltrada.map(r => Number(r[tipoRendimiento]))
      };
    });

    // Configuración de la gráfica con los estilos
    this.chartOptions = {
      series: seriesData,
      chart: {
        type: 'area',
        height: 200,  // Altura de la gráfica
        width: '100%',  // Ancho completo
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true  // Ajuste automático del eje Y al hacer zoom
        },
        toolbar: {
          autoSelected: 'zoom'  // Herramienta de zoom seleccionada por defecto
        }
      },
      dataLabels: {
        enabled: false  // Desactivar las etiquetas de datos
      },
      stroke: {
        curve: 'straight'  // Línea recta para los gráficos de área
      },
      fill: {
        type: 'gradient',  // Tipo de relleno gradiente
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]  // Puntos de parada del gradiente
        }
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],  // Colores alternos en las filas
          opacity: 0.5  // Opacidad de las líneas de la cuadrícula
        }
      },
      xaxis: {
        labels: {
          show: false  // Ocultar etiquetas en el eje X
        },
        type: 'datetime',  // Tipo de eje X en formato de fecha
        categories: this.rendimientos
          .filter(r => seriesSeleccionadas.includes(r.serie))
          .map(r => r.fecha_registro)
      },
      yaxis: {
        labels: {
          show: false  // Ocultar etiquetas en el eje Y
        }
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

  // Método para agregar o eliminar una serie del FormArray
  onSerieChange(serie: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const isChecked = input.checked;

    if (isChecked) {
      this.serieArray.push(new FormControl(serie));
    } else {
      const index = this.serieArray.controls.findIndex(x => x.value === serie);
      this.serieArray.removeAt(index);
    }
  }


}
