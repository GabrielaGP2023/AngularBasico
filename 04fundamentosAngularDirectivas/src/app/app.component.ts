import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivaAtributoComponent } from './directiva-atributo/directiva-atributo.component';
import { DirectivasEstructuraComponent } from './directivas-estructura/directivas-estructura.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DirectivaAtributoComponent, DirectivasEstructuraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '04fundamentosAngularDirectivas';
}
