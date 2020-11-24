import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  windowScrolled: boolean;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }

  ngOnInit() {
    window.onscroll = function () {
      if (pageYOffset >= 1000) {
        document.getElementById('back-to-top').style.visibility = 'visible';
      } else {
        document.getElementById('back-to-top').style.visibility = 'hidden';
      }
    };
  }
}
