import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm, FormArray, Form } from '@angular/forms';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AgentecomercialService } from 'src/app/service/agentecomercial.service';

@Component({
  selector: 'app-agentecomercial',
  templateUrl: './agentecomercial.component.html',
  styleUrls: ['./agentecomercial.component.css']
})
export class AgentecomercialComponent implements OnInit {
  formFiltros: FormGroup = new FormGroup({});
  formFiltrosAsociados: FormGroup = new FormGroup({});
  formAgenteComercial: FormGroup = new FormGroup({});
  formListCLiente: FormGroup = new FormGroup({});
  @ViewChild('btnCerrarModalFacturarA') btnCerrarModalFacturarA: any;
  @ViewChild('btnCerrarModal') btnCerrarModal: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger1: Subject<any> = new Subject();

  listAgentes:any = [];
  constructor(private formBuilder: FormBuilder,
   private service:AgentecomercialService,
    private renderer: Renderer2) { }

  ngOnInit(): void {

    this.formFiltros = this.formBuilder.group({
      txtCliente: new FormControl(''),
    });


    this.formAgenteComercial = this.formBuilder.group({
      txtDni: new FormControl(''),
      txNombres: new FormControl('')  

    });

    this.formListCLiente = this.formBuilder.group({
      txtcodigofacturaruc: new FormControl(''),
      txtdescripcionfact: new FormControl(''),
    });

  }
  IsEditar: boolean = false;
  showModalSuccess: boolean = false;
  mensajeModal: string='';
  OpenModalSuccess(open: boolean, mensaje: string) {
    this.mensajeModal = mensaje;
    this.showModalSuccess = open;
  }

  ngOnDestroy(): void {
    this.dtTrigger1.unsubscribe();

  }

  AddAgente() {
    let dni = this.formAgenteComercial.controls.txtDni.value;
    let nombres = this.formAgenteComercial.controls.txNombres.value;

    this.service.postAddAgenteComercial(dni,nombres).subscribe((data:any) => {
      console.log(data);     
     
    });
  }

  ListAgente() {
    let dni = "";
    

    this.service.postListAenteComercial(dni).subscribe((data:any) => {
      console.log(data);     
      this.listAgentes = data.resultado;
    });
  }


}
