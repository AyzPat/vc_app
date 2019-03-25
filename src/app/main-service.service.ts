import { Injectable } from '@angular/core';
import {json_data} from './generated'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  card_header_text:any=""
  fullData:any= json_data;
  family_contacts:any=[];
  manage_wrpr:any = true;
  temp_router:any=undefined;
  constructor() {
   }
  
  setData(type,id){
    if(type === 'family'){
      this.family_contacts.push(this.fullData[id]) 
      this.fullData.slice(id,1)
    }
  }
}
