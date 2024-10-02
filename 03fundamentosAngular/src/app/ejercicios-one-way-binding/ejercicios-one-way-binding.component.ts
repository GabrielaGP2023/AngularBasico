import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicios-one-way-binding',
  standalone: true,
  imports: [],
  templateUrl: './ejercicios-one-way-binding.component.html',
  styleUrl: './ejercicios-one-way-binding.component.css'
})
export class EjerciciosOneWayBindingComponent {
restablecer() {
this.contador=0;
}
recibirDato(event: any) {
  this.contador = event.target.value;
}
incrementar():void {
this.contador++;
}
decrementar():void {
    this.contador--;
}
  numero1:number = 5;
  numero2:number = 6;
  color:string="pink";
  deshabilitado:boolean = true;
  valorPlaceHolder:string="Desde atributo";
  contador:number = 0;
  habilitado:boolean=true;

}
