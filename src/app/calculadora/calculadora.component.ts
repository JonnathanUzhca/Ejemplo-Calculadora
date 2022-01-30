import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent implements OnInit {
  
  titulo ='Aplicacion Calculadora'
 
  resultadoPadre!: number;
  
  ngOnInit(): void {
  }
  procesarResultado(resultado: number ){
      this.resultadoPadre = resultado;
  }
 

}
