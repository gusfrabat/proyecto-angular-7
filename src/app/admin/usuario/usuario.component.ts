import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Empleados } from 'src/app/models/empelado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RegUsu } from 'src/app/models/reguser';
import { FlitroUsu } from 'src/app/models/filtro';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [
    RolService,
    NgbModal,
    EmpleadoService,
    UsuarioService,
  ]
})
export class UsuarioComponent implements OnInit {
  modal: NgbModalRef;
  titulo: string;
  usuario: string;
  roles: Rol;
  empleados: Empleados;
  usuarios: Usuarios;
  User: RegUsu;
  Filtro: FlitroUsu;
  constructor(
    private empleadoService: EmpleadoService,
    private rolService: RolService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private usuarioService: UsuarioService,
  ) {
    this.titulo = 'Agregar Usuarios';
    this.usuario = 'Lista Usuarios';
    this.User = new RegUsu;
    this.Filtro = new FlitroUsu;
  }
  open(content) {
    this.modal = this.modalService.open(content, { size: 'lg' , backdropClass: 'light-blue-backdrop' });
  }
  openC(contentConfirm) {
    this.modal = this.modalService.open(contentConfirm, { size: 'sm', backdropClass: 'light-blue-backdrop' });
  }
  cerrar() {
    this.modal.close();
  }
  ngOnInit() {
    this.getRol();
    this.getEmpleado();
    this.getUsuarios();
  }
  OnSubmit() {
    this.addUsuarios();
  }
  filtro() {
    this.getUsuarios();
    this.Filtro = new FlitroUsu;
  }
  addUsuarios() {
    this.usuarioService.addUsuarios(this.User).subscribe(
      response => {
        if (response.code === 200) {
          this.User = new RegUsu;
          this.getUsuarios();
          this.modal.close();
        } else {
          console.log(response);
          this.User = new RegUsu;
        }
      });
  }
  getRol() {
    this.rolService.getRole().subscribe(result => {
      if (result.code === 200) {
        this.roles = result.data;
      }
    });
  }
  getUsuarios() {
    this.usuarioService.getUsuarios(this.Filtro).subscribe(Response => {
      if (Response.code === 200) {
        this.usuarios = Response.data;
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
}
