import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definir la interfaz para los rendimientos anuales
export interface RendimientoAnual {
  id: number;
  serie: string;
  rendimiento: string;
  fecha_registro: string;
  ultima_modificacion: string;
}

@Injectable({
  providedIn: 'root'
})
export class RendimientosAnualesService {

  private apiUrl = 'https://pagebgcapital.onrender.com/rendimientos/anual';  // Cambia esta URL por la real

  constructor(private http: HttpClient) { }

  // Método para obtener los rendimientos anuales
  getRendimientosAnuales(): Observable<RendimientoAnual[]> {
    return this.http.get<RendimientoAnual[]>(this.apiUrl);
  }
}
