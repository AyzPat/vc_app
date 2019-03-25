import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MainService} from '../main-service.service'
import { StylesService } from '../styles-service.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  change_router:any=false;
  constructor( public router:Router,public ms:MainService,public ss:StylesService) { 
    this.ms.card_header_text='Fetching Contacts';
    this.ss.progress_circle_start=false;
    this.ss.progress_bar=false;
    this.ss.progress_circle_end_border=false;
    this.ss.progress_circle_end = false;
    this.ms.manage_wrpr= true;
  }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigate(['/contacts'], { replaceUrl: true });
    },3000)
  }

  ngOnDestroy(){
    clearTimeout();
  }

}
