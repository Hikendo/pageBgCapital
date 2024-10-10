import { Component } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexTitleSubtitle, NgApexchartsModule } from "ng-apexcharts";

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
})
export class ChartExampleComponent {

  chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut"
      },
      title: {
        text: "Mi gráfico de donas"
      }
    };
  }
}
