import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas-estructura',
  standalone: true,
  imports: [NgIf, FormsModule,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directivas-estructura.component.html',
  styleUrl: './directivas-estructura.component.css'
})
export class DirectivasEstructuraComponent {
  correoElectronico:string='';
  contrasena:string='';
  contresenaRepetir:string='';
  correcto:boolean=false;
  planetas: string[] = [
    "Mercurio",
    "Venus",
    "Tierra",
    "Marte",
    "Júpiter",
    "Saturno",
    "Urano",
    "Neptuno"
  ];
  estado: string = 'exito'; // Puede ser 'exito', 'error', o 'cargando'
  

  verificar():void {
    if(this.contrasena===this.contresenaRepetir){
        this.correcto=true;
    }else{
      this.correcto=false;
    }
  }

  usuarios =[
    {id:1,nombre:'Laura Flores'},
    {id:2,nombre:'Mar Gonzalez'},
    {id:3,nombre:'Luis García'}
  ]

}
