import { Component, OnInit } from '@angular/core';
import { SedeService } from 'src/app/services/sede.service';
import { Sede } from 'src/app/models/sede';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
  providers: [SedeService]
})

export class ReportesComponent implements OnInit {
  SedeShow: boolean;
  DocuShow: boolean;
  DocuFechShow: boolean;
  checkDF = false;
  checkD = false;
  checkS = false;
  sedes: Sede;
  Sed = new Sede;

  constructor(
    private sedeService: SedeService,
  ) {
    this.Sed = new Sede;
    this.SedeShow = false;
  }

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

  ShowSede(e) {
    this.SedeShow = e.target.checked;
    this.DocuShow = false;
    this.DocuFechShow = false;
    this.checkDF = false;
    this.checkD = false;
  }
  ShowDocumento(e) {
    this.DocuShow = e.target.checked;
    this.SedeShow = false;
    this.DocuFechShow = false;
    this.checkDF = false;
    this.checkS = false;
  }
  ShowDocuFech(e) {
    this.DocuFechShow = e.target.checked;
    this.SedeShow = false;
    this.DocuShow = false;
    this.checkD = false;
    this.checkS = false;
  }



}
