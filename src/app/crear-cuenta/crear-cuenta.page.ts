import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PersonaService } from '../services/persona/persona.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
  standalone: false
})
export class CrearCuentaPage {
  nombre: string = '';
  apellido: string = '';
  cedula: string = '';
  correo: string = '';
  clave: string = '';
  confirmPassword: string = '';

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private alertController: AlertController
  ) { }

  async registrarUsuario() {
    if (!this.nombre || !this.apellido || !this.cedula || !this.correo || !this.clave || !this.confirmPassword) {
      this.showAlert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    if (this.clave !== this.confirmPassword) {
      this.showAlert('Error', 'Las contraseñas no coinciden.');
      return;
    }
    this.personaService.verificar_cedula(this.cedula).subscribe(async response => {
      if (response.estado) {
        this.showAlert('Error', 'La cédula ya está registrada.');
      } else {
        this.personaService.verificar_correo(this.correo).subscribe(async response => {
          if (response.estado) {
            this.showAlert('Error', 'El correo ya está registrado.');
          } else {
            const datos = {
              nombre: this.nombre,
              apellido: this.apellido,
              cedula: this.cedula,
              correo: this.correo,
              clave: this.clave
            };
            this.personaService.registrar(datos).subscribe(async response => {
              if (response.estado) {
                this.showAlert('Éxito', response.response);
                this.router.navigate(['/login']);
              } else {
                this.showAlert('Error', response.response);
              }
            }, error => {
              this.showAlert('Error', response.response);
            });
          }
        }, error => {
          this.showAlert('Error', response.response);
        });
      }
    }, error => {
      this.showAlert('Error', 'No se pudo conectar con el servidor.');
    });


  }

  async showAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  volverLogin() {
    this.router.navigate(['/login']);
  }
}

