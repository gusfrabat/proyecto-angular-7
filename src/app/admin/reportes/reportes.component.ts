import { Component, OnInit } from '@angular/core';
import { SedeService } from 'src/app/services/sede.service';
import { Sede } from 'src/app/models/sede';
import { ReportFilt } from 'src/app/models/filtroreporte';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { ReportE } from 'src/app/models/reporteEmpelados';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
  providers: [
    SedeService,
    EmpleadoService
  ]
})

export class ReportesComponent implements OnInit {
  SedeShow: boolean;
  DocuShow: boolean;
  DocuFechShow: boolean;
  DocuFechShowF: boolean;
  TShow: boolean;
  checkDF = false;
  checkD = false;
  checkS = false;
  checkDFF = false;
  checkT: boolean;
  empleado: string;
  sedes: Sede;
  FilR: ReportFilt;
  Sed = new Sede;
  empleadosR: ReportE;

  marked = false;
  theCheckbox = false;
  showBut: boolean;

  constructor(
    private sedeService: SedeService,
    private empleadoService: EmpleadoService,
  ) {
    this.Sed = new Sede;
    this.empleado = 'Lista empleados';
    this.FilR = new ReportFilt;
    this.getSede();
    this.getEmpleadosR();
  }

  ngOnInit() {
  }

  OnSubmit() {
    this.getEmpleadosR();
    this.FilR = new ReportFilt;
  }

  getEmpleadosR() {
    this.empleadoService.GetEmpleadosReporte(this.FilR).subscribe(Response => {
      if (Response.code === 200) {
        this.empleadosR = Response.data;
      }
    });
  }

  getSede() {
    this.sedeService.getSede().subscribe(Response => {
      if (Response.code === 200) {
        this.sedes = Response.data;
      }
    });
  }

  ShowSede(e) {
    this.SedeShow = e.target.checked;
    this.showBut = e.target.checked;
  }
  ShowDocumento(e) {
    this.DocuShow = e.target.checked;
    this.showBut = e.target.checked;
  }
  ShowDocuFech(e) {
    this.DocuFechShow = e.target.checked;
    this.showBut = e.target.checked;
  }
  ShowDocuFechF(e) {
    this.DocuFechShowF = e.target.checked;
    this.showBut = e.target.checked;
  }
  ShowT(e) {
    this.DocuFechShowF = e.target.checked;
    this.DocuFechShow = e.target.checked;
    this.DocuShow = e.target.checked;
    this.SedeShow = e.target.checked;
    this.showBut = e.target.checked;
    this.checkD = false;
    this.checkDF = false;
    this.checkDFF = false;
    this.checkS = false;
  }








}
