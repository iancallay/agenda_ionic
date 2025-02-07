import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';
import { ContactosService } from '../services/contactos/contactos.service';

@Component({
  selector: 'app-listar-contactos',
  templateUrl: './listar-contactos.page.html',
  styleUrls: ['./listar-contactos.page.scss'],
  standalone: false,
})
export class ListarContactosPage implements OnInit {

  usuarios: any = null;
  contactos: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController,
    private contactoService: ContactosService

  ) { }

  ngOnInit() {
    this.todos();
  }

  todos() {
    let data = {
      accion: 'todosContactos',
      cod_persona: 39
    }

    this.contactoService.todos(data).subscribe({
      next: (resp) => {
        if (resp.estado) {
          this.contactos = resp.data;
          console.log(this.contactos);
        }
      },
      error: (resp) => {
        console.log(resp.response);
      }
    });

  }

  nuevo() {
    this.router.navigate(['/nuevo-contacto']);
  }

  editar(id: string) { }

  eliminar(id: string) {
    console.log(id);
    let data = {
      accion: 'eliminar',
      cod_contacto: id
    }

    this.contactoService.eliminar(data).subscribe(
      async (resp) => {
        if (resp.estado) {
          await this.presentAlert(resp.response);
          this.todos();
        }
      },
    );
  }

  buscar(event: any) { }

  salir() { }

  backPage() {
    this.router.navigate(['/menu'], { state: { userData: this.usuarios } });
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
