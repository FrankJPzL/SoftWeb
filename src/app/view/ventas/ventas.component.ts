import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm, FormArray, Form } from '@angular/forms';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VentasService } from 'src/app/service/ventas.service';
import { AgentecomercialService } from 'src/app/service/agentecomercial.service';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  listAgentes:any = [];
  listVentas:any = [];
  formFiltros: FormGroup = new FormGroup({});
  formFiltrosAsociados: FormGroup = new FormGroup({});
  formVentas: FormGroup = new FormGroup({});
  formListCLiente: FormGroup = new FormGroup({});
  @ViewChild('btnCerrarModalFacturarA') btnCerrarModalFacturarA: any;
  @ViewChild('btnCerrarModal') btnCerrarModal: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger1: Subject<any> = new Subject();

  constructor(private formBuilder: FormBuilder,
   private service:VentasService,
   private serviceAgente:AgentecomercialService,
    private renderer: Renderer2) { }

  ngOnInit(): void {

    this.formFiltros = this.formBuilder.group({
      txtAgente: new FormControl(''),
    });

    this.formVentas = this.formBuilder.group({
      slcAgente: new FormControl(''),
      txtproducto: new FormControl('')  ,
      txtmonto: new FormControl('')  

    });
    this.formVentas.controls.slcAgente.setValue(0);
    this.ListAgente();

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

  AddVentas() {
    let idagente = this.formVentas.controls.slcAgente.value;
    let producto = this.formVentas.controls.txtproducto.value;
    let monto = this.formVentas.controls.txtmonto.value;
    let idvendedor = 1;

    if(this.listAgentes.length == 0){
      alert("Es necesario, primero, registrar los agentes comerciales");
      return;
    }

    this.btnCerrarModal.nativeElement.click();
    this.service.postAddVentas(idvendedor,idagente,producto,monto).subscribe((data:any) => {
      console.log(data);     
      if(data.codigo == 200)
      this.OpenModalSuccess(true,data.resultado);
      this.ListVentas();
    },error=>{
      console.log(error); 
      alert(error.error.resultado);    
    });
  }

  ListAgente() {
    let dni = "";
    

    this.serviceAgente.postListAenteComercial(dni).subscribe((data:any) => {
      console.log(data);     
      this.listAgentes = data.resultado;
    },error=>{
      console.log(error); 
      alert(error.error.resultado);    
    });
  }


  ListVentas() {
    let ventas =  this.formFiltros.controls.txtAgente.value;;
    

    this.service.postVentas(ventas).subscribe((data:any) => {
      console.log(data);     
      this.listVentas = data.resultado;
      if(this.listVentas.length == 0){
        alert("No existen Ventas");
      }
    },error=>{
      console.log(error); 
      alert(error.error.resultado);    
    });
  }

}
