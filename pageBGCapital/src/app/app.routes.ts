import { Routes } from '@angular/router';
import { BannerComponent2 } from './shared/components/banner2/banner2.component';

export const routes: Routes = [
  { path: 'news', loadComponent: () => import('./shared/components/news/news.component').then(c => c.NewsComponent) },
  { path: 'banner', loadComponent: () => import('./shared/components/banner/banner.component').then(c => c.BannerComponent) },

  { path: 'banner1', loadComponent: () => import('./shared/components/banner2/banner2.component').then(c => c.BannerComponent2) },

  { path: 'charts1', loadComponent: () => import('./shared/components/chart-example/chart-example.component').then(c => c.ChartExampleComponent) },
  { path: 'charts2', loadComponent: () => import('./shared/components/chart-example2/chart-example2.component').then(c => c.ChartExample2Component) },
  { path: 'rendimiento', loadComponent: () => import('./shared/components/rendimiento-grafica/rendimiento-grafica.component').then(c => c.RendimientoGraficaComponent) },


];
