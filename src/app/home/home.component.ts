import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLE } from 'src/globals';


@Component({
  selector: 'rca-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle(`${PAGE_TITLE} - Products`)
  }

}
