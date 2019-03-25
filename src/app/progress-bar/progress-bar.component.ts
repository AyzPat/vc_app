import { Component, OnInit } from '@angular/core';
import {StylesService} from '../styles-service.service'
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor(public style_service: StylesService) { }

  ngOnInit() {
  }

}
