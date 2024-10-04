import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva-atributo',
  standalone: true,
  imports: [NgStyle,NgClass,NgIf,NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor],
  templateUrl: './directiva-atributo.component.html',
  styleUrl: './directiva-atributo.component.css'
})
export class DirectivaAtributoComponent {
  esActivo: boolean = false;
  status:string="activo";
  estaAutenticado:boolean = true;
  rolUsuario:string="admin";
  // Componente TypeScript
tareas: string[] = ['Comprar leche', 'Limpiar la casa', 'Pagar las facturas'];


}
