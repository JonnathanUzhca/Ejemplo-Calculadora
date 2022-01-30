import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {


 
  operadorA!: number;
  operadorB!: number;

  @Output() resultadoSuma = new EventEmitter<number>();

  onSuma(): void {
   let resultado = this.operadorA + this.operadorB;
   this.resultadoSuma.emit(resultado);
  }
}
