import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../services/prueba.service';
import { ModeloPrueba } from './modelo.prueba';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
  providers: [PruebaService]
})
export class PruebaComponent implements OnInit {

  prueba: ModeloPrueba;
  constructor(
    private pruebaService: PruebaService,
  ) { }

  ngOnInit() {
    this.pruebaService.getPrueba().subscribe(Result => {
      this.prueba = Result.data;
      console.log(this.prueba);
    });
    console.log(this.prueba);
  }
}
