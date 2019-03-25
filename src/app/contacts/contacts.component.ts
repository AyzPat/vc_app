import { Component, OnInit } from '@angular/core';
import { MainService } from '../main-service.service';
import { StylesService } from '../styles-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  sidebar:any=false;
  sidebar_header:any="";
  sidebar_desc:any="";
  search_visible:any=false;
  family:any=false;
  data_display:any=true;
  contact:any={};
  relation_list:any=["Father", "Mother", "Spouse", "Son", "Daughter", "Brother", "Sister","Friend", "Colleague", "Cousin", "Nephew","Niece"];
  temp_index:any=undefined;
  rel_type:any=undefined;
  sidebar_header_temp:any=undefined;

  constructor(public ms: MainService, public ss: StylesService,public router:Router) {
    this.ms.card_header_text = "Choose your family members from the list of contacts you have updated";
    this.ss.progress_circle_start = true;
    this.ss.progress_bar = true;
    this.ss.progress_circle_end_border = true;
    this.ss.progress_circle_end = false;
    this.ms.manage_wrpr= true;
   }

  ngOnInit() {
  }
  sidebarOpen(id){
    if(id=='1'){
      this.sidebar_header="Family Members";
      this.search_visible=true;
      this.sidebar_desc=undefined;
      this.family=true
    }
    else if(id == '2'){
      this.sidebar_header="Unidentified";
      this.sidebar_desc="Click a contact and select who is to you";
      this.search_visible=false;
      this.family=false
    }
    this.sidebar=!this.sidebar;
  }
  dataDisplay(contact,i){
    this.data_display=false;
    this.sidebar_header_temp = this.sidebar_header;
    this.sidebar_header=contact.first_name+' '+contact.last_name;
    this.contact=contact;
    this.temp_index=i;
  }
  addRelType(id){
   this.rel_type=id + 1;
  }
  saveRelType(){
    let dt=this.ms.fullData[this.temp_index];
    dt.rel_type = this.relation_list[this.rel_type - 1];
    this.ms.family_contacts.push(this.ms.fullData[this.temp_index]);
    this.ms.fullData.splice(this.temp_index,1);
    this.sidebar=false;
    this.contact=undefined;
    this.temp_index=undefined;
    this.rel_type=undefined;
    this.data_display=true;
  }
  close_overlay(){
    this.data_display = true;
    this.sidebar_header=this.sidebar_header_temp;
    this.sidebar_header_temp=undefined;
  }
  redirectToListing(){
    this.ms.manage_wrpr = false;
    this.router.navigate(['/contacts-list']);
  }
}
