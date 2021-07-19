import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-left',
  templateUrl: './content-left.component.html',
  styleUrls: ['./content-left.component.scss'],
})
export class ContentLeftComponent implements OnInit {

  imgRight = '../../assets/img/site/customer_service.jpg';
  constructor() { }

  ngOnInit() {}

}
