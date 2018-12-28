import { Component, OnInit } from '@angular/core';
import { SedeService } from 'src/app/services/sede.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sede } from 'src/app/models/sede';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleados } from 'src/app/models/empelado';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Aempleado } from 'src/app/models/emp';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers: [
    SedeService,
    EmpleadoService,
    NgbModal,
  ]
})
export class EmpleadoComponent implements OnInit {

  modal: NgbModalRef;
  sedes: Sede;
  empleados: Empleados;
  usuarios: string;
  Empl: Aempleado;

  constructor(
    private modalService: NgbModal,
    private empleadoService: EmpleadoService,
    private sedeService: SedeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.usuarios = 'Lista empleados';
    this.Empl = new Aempleado;
  }

  openC(contentConfirm) {
    this.modal = this.modalService.open(contentConfirm, { size: 'lg', backdropClass: 'light-blue-backdrop' });
  }

  cerrar() {
    this.modal.close();
  }

  ngOnInit() {
    this.getSede();
    this.getEmpleado();
  }

  onSubmit() {
    this.AddEmpleado();
  }

  getSede() {
    this.sedeService.getSede().subscribe(Response => {
      if (Response.code === 200) {
        this.sedes = Response.data;
      }
    });
  }

  getEmpleado() {
    this.empleadoService.getEmpledo().subscribe(result => {
      if (result.code === 200) {
        this.empleados = result.data;
      }
    });
  }

  AddEmpleado() {
    this.empleadoService.Addempleado(this.Empl).subscribe(Response => {
      if (Response.code === 200) {
        this.Empl = new Aempleado;
        this.getEmpleado();
        this.modal.close();
      } else {
        console.log(Response);
      }
    });
  }

}
