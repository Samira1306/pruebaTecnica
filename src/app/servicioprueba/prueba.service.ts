import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PruebaModel, pruebaModel } from '../Parametros/prueba.model';
import { Observable } from 'rxjs';

const API_URL = 'https://crudcrud.com/api/6dac21d357fe47a583d0268cc12536eb';

@Injectable({
  providedIn: 'root',
})
export class PruebaService {
  url = 'app/json/prueba.json';
  constructor(private http: HttpClient) {
    console.log('Hola');
  }

  getAnimales = () => {
    return this.http.get<any[]>(`${API_URL}/animales`);
  };

  agregarAnimal = (animal: PruebaModel) => {
    return this.http.post(`${API_URL}/animales`, animal);
  };

  // getPrueba(){
  //  let header = new HttpHeaders()
  //   .set('Type.content' , 'aplication/json')

  //   return this.http.get(this.url,{
  //     headers: header
  //   })
  // }

  // AgregarAnimal(info: pruebaModel): Observable<pruebaModel> {
  //   return this.http.post<pruebaModel>(`${this.url}/json`, {
  //     id: info.id,
  //     tipo:info.tipo,
  //     nombre: info.nombre,
  //     observacion: info.observacion
  //   });
  // }
}
