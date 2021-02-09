import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {




constructor(
    public modal: NgbModal,
  ) {}



// tslint:disable-next-line: typedef
ngOnInit() {
  }



}
