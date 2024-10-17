import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexTitleSubtitle, NgApexchartsModule, ChartType } from "ng-apexcharts";


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-chart-example',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './chart-example.component.html',
  styleUrl: './chart-example.component.scss'
})export class ChartExampleComponent implements OnInit, OnDestroy {

  chartOptions: ChartOptions;
  private intervalId: any;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22], // Comienza con 5 datos
      chart: {
        type: "donut" // Tipo inicial
      },
      title: {
        text: "Mi gráfico de donas"
      }
    };
  }

  ngOnInit(): void {
    // Agrega nuevos datos cada segundo hasta llegar a 15 elementos en la serie
    this.intervalId = setInterval(() => {
      if (this.chartOptions.series.length < 15) {
        const newValue = Math.floor(Math.random() * 100); // Genera un número aleatorio
        this.chartOptions.series.push(newValue);
      } else {
        clearInterval(this.intervalId); // Detén el intervalo cuando se agreguen 15 datos
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpia el intervalo
    }
  }

  // Método para cambiar el tipo de gráfico
  changeChartType(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;  // Asegúrate de que el target es un HTMLSelectElement
    const chartType = selectElement.value as ChartType;  // Convierte el valor a ChartType

    this.chartOptions.chart = {
      ...this.chartOptions.chart,
      type: chartType  // Actualiza el tipo de gráfico dinámicamente
    };
  }

}
