import { Component, OnInit } from '@angular/core';
import { SedeService } from 'src/app/services/sede.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sede } from 'src/app/models/sede';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers: [SedeService]
})
export class EmpleadoComponent implements OnInit {

  sedes: Sede;

  constructor(
    private sedeService: SedeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSede();
  }

  getSede() {
    this.sedeService.getSede().subscribe(Response => {
      if (Response.code === 200) {
        this.sedes = Response.data;
      }
    });
  }

}
