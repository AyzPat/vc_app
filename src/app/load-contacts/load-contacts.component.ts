import { Component, OnInit } from '@angular/core';
import { MainService } from '../main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-contacts',
  templateUrl: './load-contacts.component.html',
  styleUrls: ['./load-contacts.component.css']
})
export class LoadContactsComponent implements OnInit {

  constructor(public ms:MainService,public router:Router) { 
    this.ms.manage_wrpr = false;
  }

  ngOnInit() {
  }

  redirectTo(){
    this.router.navigate(['/contacts']);
  }
}
