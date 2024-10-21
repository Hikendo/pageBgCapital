// src/app/rendimientos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Rendimiento {
  id: number;
  serie: string;
  rendimiento_anual: string;
  rendimiento_acumulado: string;
  rendimiento_bimestral: string;
  ultimo_precio_accion: string;
  fecha_registro: string;
  ultima_modificacion: string;
}

@Injectable({
  providedIn: 'root'
})
export class RendimientosService {

  private apiUrl = 'https://pagebgcapital.onrender.com/rendimientos';  // Cambia esta URL por la real

  constructor(private http: HttpClient) { }

  getRendimientos(): Observable<Rendimiento[]> {
    return this.http.get<Rendimiento[]>(this.apiUrl);
  }
}
