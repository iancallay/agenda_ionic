import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private apiURL = environment.apiURL;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: ActivatedRoute,
    private alertCtrl: AlertController
  ) { }

  todos(data: any): Observable<any> {
    console.log("aqui");
    return this.http.post<any>(`${this.apiURL}contacto.php`, data);
  }

  unContacto(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}contacto.php`, data);
  }

  eliminar(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}contacto.php`, data);
  }

}
