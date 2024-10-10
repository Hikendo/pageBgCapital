import { NgClass, NgFor } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  standalone:true,
  imports: [NgFor, NgClass],
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent   {
  texts: string[] = [
    'Su confianza, nuestro mayor activo.',
    'Innovación en la construcción de estrategias de inversión.',
    'Transparencia, confianza y resultados comprobables.',
    'Emisiones accionarias con objetivo específico.'
  ];
  currentIndex: number = 0;

  ngOnInit() {
    // Cambia el texto cada 3 segundos
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    }, 3000);
  }

}
