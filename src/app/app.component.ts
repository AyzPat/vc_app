import { Component } from '@angular/core';
import {StylesService} from './styles-service.service'
import {MainService} from './main-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public style_service: StylesService,public ms:MainService) { }
}
