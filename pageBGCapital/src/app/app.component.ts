import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { ChartExampleComponent } from "./shared/components/chart-example/chart-example.component";
import { BannerComponent } from './shared/components/banner/banner.component';
import { BannerComponent2 } from "./shared/components/banner2/banner2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ChartExampleComponent, BannerComponent, BannerComponent2],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pageBGCapital';
}
