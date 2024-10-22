import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Article, NewsService } from '../../../services/news.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, RouterLink, RouterLinkActive],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  currentIndex = 0;
  articles: Article[] = []; // Array para almacenar los artículos

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.newsService.getArticles().subscribe({
      next: (response) => {
        this.articles = response.content; // Asigna los artículos al array
      },
      error: (err) => {
        console.error('Error al cargar artículos:', err);
      },
    });
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.articles.length;
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.articles.length) % this.articles.length;
  }
}
