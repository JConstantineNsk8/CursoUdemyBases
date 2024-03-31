import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
           <h3>Contador {{ contador }}</h3>
          <hr>
          <button (click)="aumentar(1)"> + </button>
          <button (click)="reset(0)">Resetear</button>
          <button (click)="disminuir(1)"> - </button>

            `
})

export class CounterComponent {

  public contador = 1;
  constructor() { }

  public aumentar(incrementar :  number) : void {
      this.contador += incrementar;
  }

  public disminuir(incrementar :  number) : void {
    if(this.contador - incrementar < 0 ){

    }else{
      this.contador -= incrementar;
    }

  }

  public reset(resetear :  number) : void {
      this.contador = resetear;
  }


}
