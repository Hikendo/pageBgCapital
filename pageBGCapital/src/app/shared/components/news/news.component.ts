import { Component, OnInit } from '@angular/core';
import { Article, NewsService } from '../../../services/news.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  currentIndex = 0; // Índice actual del artículo
  articles: Article[] = [];
  transitioning = false; // Estado para controlar la transición
  isPaused = false; // Estado para saber si la transición está en pausa
  interval: any; // Guardar el intervalo

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadArticles();
    // Iniciar la transición automática de artículos
    this.startAutoTransition();
  }

  loadArticles(): void {
    this.newsService.getArticles().subscribe({
      next: (response) => {
        this.articles = response.content;
      },
      error: (err) => {
        console.error('Error al cargar artículos:', err);
      },
    });
  }

  // Iniciar la transición automática de artículos
  startAutoTransition(): void {
    this.interval = setInterval(() => {
      if (!this.isPaused) {
        this.startTransition();
      }
    }, 10000); // Cambia cada 10 segundos
  }

  // Pausar/Reanudar la transición automática
  togglePause(): void {
    this.isPaused = !this.isPaused;
  }

  // Método para detener y reiniciar el intervalo
  resetInterval(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.startAutoTransition(); // Reiniciar el intervalo
  }

  // Método para pasar al siguiente artículo
  nextArticle(): void {
    if (this.articles.length > 0) {
      this.startTransition();
      this.resetInterval(); // Reiniciar el contador de tiempo al presionar "Next"
    }
  }

  // Método para ir al artículo anterior
  previousArticle(): void {
    if (this.articles.length > 0) {
      this.transitioning = true;

      setTimeout(() => {
        this.transitioning = false;

        // Si estamos en el primer artículo, volvemos al último
        this.currentIndex =
          (this.currentIndex - 1 + this.articles.length) % this.articles.length;
      }, 800); // Tiempo de desvanecimiento

      this.resetInterval(); // Reiniciar el contador de tiempo al presionar "Previous"
    }
  }

  // Método para iniciar la transición entre artículos
  startTransition(): void {
    this.transitioning = true;

    setTimeout(() => {
      this.transitioning = false;

      // Cambiar el índice al siguiente artículo
      this.currentIndex = (this.currentIndex + 1) % this.articles.length;
    }, 800); // Tiempo de desvanecimiento
  }
}
