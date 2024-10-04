import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado-dinamico',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleado-dinamico.component.html',
  styleUrl: './empleado-dinamico.component.css'
})
export class EmpleadoDinamicoComponent {
  genero:string="";
  generos:string[]=["Mujer","Hombre","Otros"];
  nacionalidad:string="";
  nacionalidades:string[]=["Española","Norteamericana","Rusa","Mexicana"];
  lenguajesProgramacion:string[]=["C++","Java","JS","Python"];
  lenguajesProgramacionR:boolean[]=[false, false, false, false];



  mostrarInfo():void {
    let mensaje:string ='';
    for (let index = 0; index < this.lenguajesProgramacion.length; index++) {
       mensaje += this.lenguajesProgramacion[index]+' '+this.lenguajesProgramacionR[index]+'\n';     
    }
    mensaje+=`Genero : ${this.genero}
    Nacionalidad :${this.nacionalidad}`;
    alert(mensaje);
  }

}
