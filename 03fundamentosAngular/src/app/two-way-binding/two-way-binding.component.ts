import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styles: ``
})
export class TwoWayBindingComponent {
  nombre: string="";
  java:boolean=false;
  python:boolean=false;
  javaScript:boolean=false;
  genero:string="";
  estudios:string="";
  


}
