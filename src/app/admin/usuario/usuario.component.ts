import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [
    RolService,
    EmpleadoService,
  ]
})
export class UsuarioComponent implements OnInit {

  titulo: string;
  usuario: string;
  roles: Rol;
  empleados: Empleado;

  constructor(
    private empleadoService: EmpleadoService,
    private rolService: RolService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.titulo = 'Agregar Usuarios';
    this.usuario = 'Lista Usuarios';
  }
  ngOnInit() {
    this.getRol();
    this.getEmpleado();
  }
  getRol() {
    this.rolService.getRole().subscribe(result => {
      if (result.code === 200) {
        this.roles = result.data;
      }
    });
  }

  getEmpleado() {
    this.empleadoService.getEmpleados().subscribe(result => {
      if (result.code === 200) {
        this.empleados = result.data;
      }
    });
  }
}
