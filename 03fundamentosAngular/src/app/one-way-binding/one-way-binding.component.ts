import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  standalone: true,
  imports: [],
  templateUrl: './one-way-binding.component.html',
  styleUrl: './one-way-binding.component.css'
})
export class OneWayBindingComponent {
  nombre:string="Juan López Ruiz";
  edad:number=21;
  mensajeError:string="Error en inicio de sesion";
  politicaSeguridad:boolean=true;
  
  pais:string="";

  mostrarMensaje():void{
    alert("haz presionado el botón");
  }
  recogerValor(evento:any):void{
    this.pais = evento.target.value;
  }
  
  

}
