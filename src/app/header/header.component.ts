import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
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
  addButton = false;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.changeNavbarColor) {
      if (document.body.scrollTop > 40 ||     
      document.documentElement.scrollTop > 40) {
        document.getElementById('buyButton').classList.add('btn-primary');
        this.logoSrc = 'assets/images/logo-dark.png';
        // document.getElementById('paragraph').classList.add('green');
      } else {
        document.getElementById('buyButton').classList.remove('btn-primary');
        this.logoSrc = 'assets/images/logo-light.png';
      }
    }
  }

  ngOnInit(): void {

    // Menu
    $('.navbar-toggle').on('click', function (event) {
      $(this).toggleClass('open');
      $('#navigation').slideToggle(400);
    });

    $('.navigation-menu>li').slice(-1).addClass('last-elements');

    $('.menu-arrow,.submenu-arrow').on('click', function (e) {
      if ($(window).width() < 992) {
        e.preventDefault();
        $(this)
          .parent('li')
          .toggleClass('open')
          .find('.submenu:first')
          .toggleClass('open');
      }
    });

    $('.navigation-menu a').each(function () {
      if (this.href == window.location.href) {
        $(this).parent().addClass('active');
        $(this).parent().parent().parent().addClass('active');
        $(this).parent().parent().parent().parent().parent().addClass('active');
      }
    });
    
    $(function () {
      $(document).scroll(function () {
        var $nav = $('#topnav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    });


  }
}
