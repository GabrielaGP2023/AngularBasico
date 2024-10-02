import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { EjerciciosOneWayBindingComponent } from './ejercicios-one-way-binding/ejercicios-one-way-binding.component';
import { EjerciciosTwoWayBindingComponent } from './ejercicios-two-way-binding/ejercicios-two-way-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OneWayBindingComponent, TwoWayBindingComponent,
    EjerciciosOneWayBindingComponent, EjerciciosTwoWayBindingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentosAngular';
}
