import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { Password } from 'src/app/models/password';
import { TipoDocumentoComboBox } from 'src/app/models/tipo-documento';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TipoDocumentoService } from 'src/app/services/tipo-documento/tipo-documento.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  objCliente: Cliente = {
    id_cliente: 0,
    nombres: '',
    apellidos: '',
    email: '',
    fecha_nacimiento: new Date(),
    id_doc_identidad: 1,
    numero_doc_identidad: ''
  }

  objPassword: Password = {
    id_cliente: 0,
    valor: '',
    confirmacion: ''
  }

  lstTipoDocumento_ComboBox: TipoDocumentoComboBox[] = []

  constructor(
    private objTipoDocumentoService: TipoDocumentoService,
    private objClienteService: ClienteService
  ) {
  }

  ngOnInit(): void {
    this.CargarTipoDocumento_Combobox()  
  }

  CargarTipoDocumento_Combobox():void {
    this.objTipoDocumentoService.ListarComboBox().subscribe(
      result=>{
        this.lstTipoDocumento_ComboBox = result
      }
    )
  }

  btnRegistrar_OnClick():void {
    this.objClienteService.Modificar(this.objCliente).subscribe(
      result=>{
        this.objCliente = result
      }
    )
  }
}
