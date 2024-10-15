import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { ChartExampleComponent } from "./shared/components/chart-example/chart-example.component";
import { BannerComponent } from './shared/components/banner/banner.component';
import { BannerComponent2 } from "./shared/components/banner2/banner2.component";
import { AboutComponent } from "./shared/components/about/about.component";
import { ServiciosComponent } from "./shared/components/servicios/servicios.component";
import { ObjetoSocialComponent } from "./shared/components/objeto-social/objeto-social.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { ChartExample2Component } from "./shared/components/chart-example2/chart-example2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ChartExampleComponent, BannerComponent,
     BannerComponent2, AboutComponent, ServiciosComponent, ObjetoSocialComponent, FooterComponent,
     ChartExample2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pageBGCapital';
}
