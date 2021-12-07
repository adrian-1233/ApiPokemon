import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent {
  constructor() {}
  @ViewChild('txtBuscar')
  txtBuscar!: ElementRef<HTMLInputElement>;

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    // this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
