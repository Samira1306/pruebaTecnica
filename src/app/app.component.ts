import { Component, OnInit } from '@angular/core';
import { PruebaService } from './servicioprueba/prueba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pruebafiltro-ng';
  animales: any[] = [];

  constructor(private pruebaService: PruebaService) {}

  ngOnInit(): void {
    this.pruebaService
      .getAnimales()
      .subscribe((data) => (this.animales = data));
  }
}
