import { Component, OnInit } from '@angular/core';
import { MainService } from '../main-service.service'
import { StylesService } from '../styles-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public ms: MainService, public ss: StylesService, public router: Router) {
    this.ss.progress_circle_start = false;
    this.ss.progress_bar = false;
    this.ss.progress_circle_end_border = false;
    this.ss.progress_circle_end = false;
    this.ms.manage_wrpr = true;
    this.ms.card_header_text = "Select a platform to import contacts";
    // let dt = false;
    // for (let i = 0; i < this.router.config.length; i++) {
    //   if (this.router.config[i].path == "loader") {
    //     this.ms.temp_router = this.router.config[i];
    //     dt = true;
    //   }
    // }
    // if (dt == false) {
    //   this.router.config.push(this.ms.temp_router)
    // }
  }

  ngOnInit() {
    // let dt = false;
    // for (let i = 0; i < this.router.config.length; i++) {
    //   if (this.router.config[i].path == "loader") {
    //     this.ms.temp_router = this.router.config[i];
    //     dt = true;
    //   }
    // }
    // if (dt == false) {
    //   this.router.config.push(this.ms.temp_router)
    // }
  }

}
