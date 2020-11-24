import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  changeNavbarColor = false;
  logoSrc = 'assets/images/logo-light.png';

  constructor(private router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (this.router.url !== '/') {
          this.changeNavbarColor = true;
          this.logoSrc = 'assets/images/logo-dark.png';
        } else {
          this.changeNavbarColor = false;
          this.logoSrc = 'assets/images/logo-light.png';
        }
      }
    });
  }

  ngOnInit(): void {
    $(function () {
      $(document).scroll(function () {
        var $nav = $('#topnav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        console.log('hi', $(this).scrollTop() > $nav.height())
        if ($(this).scrollTop() > $nav.height()) {
          this.logoSrc = 'assets/images/logo-dark.png';
          console.log(this.logoSrc);
        } else {
          this.logoSrc = 'assets/images/logo-light.png';
        }
      });
    });
  }
}
