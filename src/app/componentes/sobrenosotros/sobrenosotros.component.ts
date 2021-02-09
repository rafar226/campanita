import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sobrenosotros',
  templateUrl: './sobrenosotros.component.html',
  styleUrls: ['./sobrenosotros.component.css']
})
export class SobrenosotrosComponent implements OnInit {

  constructor(
    public modal: NgbModal

  ) { }

  ngOnInit(): void {
  }



}
