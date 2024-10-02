import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01SinPruebasComponent } from './componente01-sin-pruebas/componente01-sin-pruebas.component';
import { SinestilosComponent } from './sinestilos/sinestilos.component';
import { SinPlantillaComponent } from './sin-plantilla/sin-plantilla.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [RouterOutlet,Componente01SinPruebasComponent,SinestilosComponent,SinPlantillaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentosComponentes';
}
