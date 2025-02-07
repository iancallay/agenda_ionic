import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MenuPage implements OnInit {
  userData: any;
  usuario: any = []
  miusuario: any = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['usuario']) {
      this.usuario = navigation.extras.state['usuario'];
      console.log('Datos del usuario menu:', this.usuario);
    } else {
      console.log('Nada en menu.');
    }
    // Obtener los datos del usuario desde la navegación
    if (this.router.getCurrentNavigation()?.extras.state?.['userData']) {
      this.userData = this.router.getCurrentNavigation()?.extras.state?.['userData'];
      window.location.reload();
      console.log('Datos del usuario desde navegación:', this.userData);
    } else {
      // Intentar recuperar desde localStorage si no vienen en la navegación
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        this.userData = JSON.parse(storedUserData);
        console.log('Datos del usuario desde localStorage:', this.userData);
      }
    }
  }

  irPerfil() {
    this.router.navigate(['/perfil']); // Navegar a la página de perfil
  }

  cerrarSesion() {
    localStorage.removeItem('userData'); // Eliminar datos de sesión
    this.router.navigate(['/login']); // Redirigir al login
  }

  contactos() {
    this.router.navigate(['/listar-contactos'], { state: { usuarios: this.usuario } });
  }
}


