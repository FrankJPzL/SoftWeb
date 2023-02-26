
import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import Urls from 'src/app/constans/Urls';
import { UsuarioService } from 'src/app/service/usuario.service';
import { E_Usuario } from 'src/app/models/usuario.model';
import { E_Token } from 'src/app/models/tokenn.model';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,  private usuarioservice: UsuarioService,
    private router: Router, private cdr: ChangeDetectorRef) { }

  loading = false;
  langInput: ElementRef | any;
  //private readonly RequiereValidacion2Vias:boolean = environment.RequiereValidacion2Vias;

  @ViewChild('sitioconfianza') modalsitioconfianza: any;

  formLoginn: FormGroup = new FormGroup({});
  formvalidacion: FormGroup = new FormGroup({});

  @ViewChild('captchaLogin')
  //captchaLogin: ReCaptcha2Component | any;

  theme: 'light' | 'dark' = 'light';
  size: 'compact' | 'normal' = 'normal';
  lang = 'en';
  type: 'image' | 'audio' | any;
  email: String = '';

  conteoerror: number = 1;
  noAutenticado: boolean = true;
  noValidado: boolean = false;
  telefono: String = '';
  codigovalidacion: any = '';
  configuracionInicial: any | null;
  username: String = '';
  datosUsuario: any | null;
  ipLocal: string = '';
  tiempovalidez: number = 0;
  subscription: Subscription | undefined;


  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;
  public ObjUsuario: E_Usuario[] = Array();
  public ObjToken: E_Token = new E_Token();


  ngOnInit(): void {

    

    this.formLoginn = this.formBuilder.group({
      username: new FormControl(''),
      password: new FormControl('')
     
    });

    this.formvalidacion = this.formBuilder.group({
      codigovalidacion: new FormControl(''),
      verificarSitio: new FormControl('')
    });  

  }

  loginclick() {
    let _E_Token: E_Token = new E_Token();
    //let _E_Usuario: E_Usuario = new E_Usuario(0,"","","","",_E_Token);
    let _E_Usuario: E_Usuario = new E_Usuario();
    
   
    let uname = this.formLoginn.controls.username.value;
    let pwd = this.formLoginn.controls.password.value;
    _E_Usuario.usuario = uname;
    _E_Usuario.clave = pwd;
    _E_Usuario.ApellidosNombres = "Gladiador";
    _E_Usuario.idUsuario = 1;
    _E_Token.UsuarioId = 0;
    _E_Token.estado = "";
    _E_Token.token = "0";
    
    this.usuarioservice.postLoginUsuario(_E_Usuario.usuario ,_E_Usuario.clave,_E_Usuario.ApellidosNombres,_E_Usuario.idUsuario , _E_Token).subscribe((data:any) => {
      console.log(data);
     // const respuesta = JSON.parse(data);
      console.log(data.codigo);
      //const codigo = JSON.parse(JSON.stringify(data.codigo));
      //const _token = JSON.parse(JSON.stringify(data.data));
      if(data.codigo == 200){
        localStorage.setItem('token', data.data);
         this.router.navigate([Urls.DASHBOARD]);
      }

    });
  }

}
