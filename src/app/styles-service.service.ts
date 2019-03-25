import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesService {
  progress_circle_start:any=false;
  progress_bar:any=false;
  progress_circle_end_border:any=false;
  progress_circle_end:any=false;
  // card_header_name:any="Select a platform to import contacts"
  

  constructor() { 
    //  this.color="blue";
  }
}
