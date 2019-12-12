import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.scss']
})
export class ListaAddComponent implements OnInit {

  item: any = {
    name: ''
  }

  constructor(private _conexion: ConexionService) { }

  ngOnInit() {
  }

  agregar() {
    this._conexion.addItem(this.item);
    this.item.name = '';
  }

}
