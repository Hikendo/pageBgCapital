import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgFor, NgClass, NgStyle],
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.scss']
})
export class BannerComponent2 {
  texts: string[] = [
    'Su confianza, nuestro mayor activo.',
    'Innovación en la construcción de estrategias de inversión.',
    'Transparencia, confianza y resultados comprobables.',
    'Emisiones accionarias con objetivo específico.'
  ];

  currentIndex: number = 0;
  bars: { left: string, height: string }[] = []; // Array para almacenar las barras con altura

  ngOnInit() {
    this.generateBars(12); // Genera 12 barras al iniciar

    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    }, 3000);
  }

  generateBars(numberOfBars: number): void {
    const usedPositions = new Set<number>(); // Usar un conjunto para evitar duplicados
    this.bars = []; // Asegúrate de vaciar las barras antes de generar nuevas
    let initial=10;
    while (usedPositions.size < numberOfBars) {
      const position = Math.floor(Math.random() * numberOfBars); // Genera una posición aleatoria
      usedPositions.add(position); // Añade la posición al conjunto
    }

    usedPositions.forEach(position => {
      const randomHeight =  500; // Altura aleatoria entre 10 y 400

      this.bars.push({
        left: `${position * (100 / numberOfBars)}%`, // Distribución horizontal
        height: '10px' // Altura inicial en 0px, las barras comenzarán desde 0
      });

      // Retraso para actualizar la altura aleatoria después de un breve tiempo
      setTimeout(() => {
        this.bars[position].height = `${randomHeight}px`; // Actualizar la altura a la aleatoria
      }, 100); // Tiempo de 100ms para que la altura cambie desde 0px
    });
  }


}
