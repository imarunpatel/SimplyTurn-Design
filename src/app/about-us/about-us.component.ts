import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  developing = true;
  database = false;
  security = false;
  webDesigning = false;
  tabArray = [true, false, false, false];

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(name) {
    if (name == 'developing')
      this.developing = true;
  }
}
