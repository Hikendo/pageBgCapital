import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

// Importa los estilos de Swiper en el archivo de estilos global o directamente en el componente si es necesario
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.scss'
})
export class CarruselComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Inicializa Swiper después de que la vista haya sido renderizada
    const swiper = new Swiper('.swiper', {
      // Configura los módulos
      modules: [Navigation, Pagination],
      // Otros parámetros opcionales
      direction: 'horizontal',  // 'vertical' para deslizamiento vertical
      loop: true,  // Activar el loop infinito
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
