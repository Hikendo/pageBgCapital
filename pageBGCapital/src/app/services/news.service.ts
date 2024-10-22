import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Article {
  title: string;
  date: string;
  content: string;
  tickers: string;
  image: string;
  link: string;
  author: string;
  site: string;
}

interface Pageable {
  pageSize: number;
  pageNumber: number;
  totalPages: number;
  totalElements: number;
}

interface ApiResponse {
  content: Article[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'https://financialmodelingprep.com/api/v3/fmp/articles';
  private apiKey = 'BqDnPFAGx2JFmx5Y82sLQpEfaq1Ah2E2'; // Puedes almacenar esto en un archivo de configuración

  constructor(private http: HttpClient) { }

  getArticles(page: number = 0, size: number = 5): Observable<ApiResponse> {
    // Crea los parámetros de la solicitud
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('apikey', this.apiKey);

    return this.http.get<ApiResponse>(this.baseUrl, { params });
  }
}
