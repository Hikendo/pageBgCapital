import { NgFor } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, NgApexchartsModule, ChartType } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-chart-example2',
  standalone: true,
  imports: [NgApexchartsModule, NgFor],
  templateUrl: './chart-example2.component.html',
  styleUrls: ['./chart-example2.component.scss']
})
export class ChartExample2Component implements OnInit, OnDestroy {

  chartOptions: ChartOptions[]; // Arreglo para soportar múltiples gráficos
  private intervalId: any;

  constructor() {
    this.chartOptions = [
      this.createChartOptions("line"),
      this.createChartOptions("bar"),
      this.createChartOptions("area"),


    ];
  }

  ngOnInit(): void {
    // Inyectar un nuevo dato cada segundo en todos los gráficos
    this.intervalId = setInterval(() => {
      this.chartOptions.forEach((chartOption) => {
        const newValue = Math.floor(Math.random() * 100); // Genera un número aleatorio
        const newDataPoint = {
          x: this.formatDate(new Date()), // Formatear la fecha como dd/mm/yyyy
          y: newValue // Valor Y
        };

        // Verificar si el gráfico es de un tipo que requiere un formato más complejo
        if (chartOption.chart.type === 'candlestick') {
          // Estructura de datos para Candlestick (apertura, alto, bajo, cierre)
          const candlestickData = {
            x: this.formatDate(new Date()), // Formatear la fecha como dd/mm/yyyy
            y: [
              newValue - 10, // Apertura
              newValue,      // Alto
              newValue - 20, // Bajo
              newValue - 5   // Cierre
            ]
          };

          // Agregar el nuevo dato a la serie de candlestick
          (chartOption.series[0].data as any[]).push(candlestickData);
        } else if (chartOption.chart.type === 'boxPlot') {
          // Estructura de datos para BoxPlot (mínimo, Q1, mediana, Q3, máximo)
          const boxPlotData = {
            x: `Data ${chartOption.series[0].data.length + 1}`, // Etiqueta para el eje X
            y: [
              newValue - 20, // Mínimo
              newValue - 10, // Primer cuartil (Q1)
              newValue,      // Mediana
              newValue + 10, // Tercer cuartil (Q3)
              newValue + 20  // Máximo
            ]
          };

          // Forzar el tipo de datos como any[] para evitar el error de tipos
          (chartOption.series[0].data as any[]).push(boxPlotData);

        } else {
          // Para gráficos que requieren solo valores numéricos (como 'bar', 'line', 'area', etc.)
          if (chartOption.chart.type === 'bar' || chartOption.chart.type === 'line' || chartOption.chart.type === 'area') {
            // Crear el punto de datos con x (tiempo) y y (valor)
            const newDataPoint = {
              x: this.formatDate(new Date()), // Formatear la fecha como dd/mm/yyyy
              y: newValue // Valor Y
            };
            (chartOption.series[0].data as any[]).push(newDataPoint);
          } else {
            // Para otros gráficos que solo aceptan números directamente en la serie
            (chartOption.series[0].data as number[]).push(newValue);
          }
        }
      });
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpia el intervalo
    }
  }
  private formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son indexados desde 0
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
  // Método para crear opciones de gráfico
  private createChartOptions(chartType: ChartType): ChartOptions {
    const initialData = Array.from({ length: 10 }, (_, i) => ({
      x: new Date().getTime() + (i * 1000), // Establece un valor x (tiempo)
      y: Math.floor(Math.random() * 100) // Valor y aleatorio
    }));

    return {
      series: [{
        name: "Valor de activos",
        data: initialData // Usar datos iniciales para el gráfico
      }],
      chart: {
        type: chartType, // Tipo de gráfico basado en el parámetro
        height: 350,
      },
      title: {
        text: `Gráfico de tipo ${chartType}`
      }
    };
  }

  // Método para cambiar el tipo de gráfico
  changeChartType(event: Event): void {
    const selectElement = event.target as HTMLSelectElement; // Asegúrate de que el target es un HTMLSelectElement
    const chartType = selectElement.value as ChartType; // Convierte el valor a ChartType

    this.chartOptions.forEach(chartOption => {
      chartOption.chart.type = chartType; // Actualiza el tipo de gráfico dinámicamente
    });
  }
}
