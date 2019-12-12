import { Component, OnInit } from '@angular/core';
import { ConexionService, Item } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  items: any;
  editarItem: any = {
    name: ''
  }

  constructor(private _conexion: ConexionService) {
    this._conexion.listaItems().subscribe(items => {
      this.items = items;
      console.log("Items: " + items);
    })
  }

  eliminar(item: Item) {
    this._conexion.eliminarItem(item);
  }

  editar(item: Item) {
    this.editarItem = item;
  }

  agregarItemEditado() {
    this._conexion.editarItem(this.editarItem);
  }

}
