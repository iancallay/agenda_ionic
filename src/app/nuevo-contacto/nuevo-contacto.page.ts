import { LoginService } from './../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactosService } from '../services/contactos/contactos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.page.html',
  styleUrls: ['./nuevo-contacto.page.scss'],
  standalone: false,
})
export class NuevoContactoPage implements OnInit {

  usuario: any;
  id: string = '';
  nombre_contacto: string = '';
  apellido_contacto: string = '';
  telefono_contacto: string = '';
  correo_contacto: string = '';

  constructor(
    private contactosService: ContactosService,
    private router: Router,
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private loginService: LoginService
  ) { }

  ngOnInit() {


  }

  guardar() {

    let data = {
      cod_persona: 39,
      nombre_contacto: this.nombre_contacto,
      apellido_contacto: this.apellido_contacto,
      telefono_contacto: this.telefono_contacto,
      correo_contacto: this.correo_contacto,
      accion: 'insertar'
    };
    console.log(data);
    this.contactosService.guardar(data).subscribe(
      async (resp) => {
        if (resp.estado) {
          this.presentAlert(resp.response);
          this.backPage();
        } else {
          this.presentAlert(resp.response);
        }
      },
      (resp) => {
        this.presentAlert(resp.response);
      }
    );
  }

  backPage() {
    this.router.navigate(['/listar-contactos']);
  }

  async presentAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Atención',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
