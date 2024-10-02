import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicios-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicios-two-way-binding.component.html',
  styleUrl: './ejercicios-two-way-binding.component.css'
})
export class EjerciciosTwoWayBindingComponent {
  resultadoS: string = '';
  monto: number;
  monedaDestino: string;
  resultado: number = 0;

  constructor() {
    this.monto = 0;
    this.monedaDestino = 'Libra';
  }

  agregarNumero(numero: string): void {
    this.resultadoS += numero;
  }

  calcular(): void {
    try {
      this.resultadoS = eval(this.resultadoS);
    } catch (error) {
      this.resultadoS = 'Error';
    }
  }

  borrar(): void {
    this.resultadoS = '';
  }

  convertir(): void {
    switch (this.monedaDestino) {
      case 'Libra':
        this.resultado = this.monto * 0.86; // Tasa de conversión de Euros a Libras
        break;
      case 'Dólares':
        this.resultado = this.monto * 1.18; // Tasa de conversión de Euros a Dólares
        break;

      default:
    }
  }

 

}
