import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
} from '@angular/router';

import {
  filter,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  // TODO Unsubscribe from all listeners
  private subscriptions = [];

  @ViewChild('navigation') navigationElement: ElementRef | undefined;
  @ViewChild('mobileNavToggle') mobileNavToggle: ElementRef | undefined;
  showOverlay = false;
  urls = [
    {
      path: '/',
      label: 'home',
    },
    {
      path: '/stocks',
      label: 'stock prices',
    },
  ];
  constructor(private router: Router, private renderer: Renderer2) {
    this.router.events
      .pipe(
        filter((val) => val instanceof NavigationEnd),
        tap((val: unknown) => {
          this.selectedIndex = this.urls.findIndex(
            (url) => url.path === (val as NavigationEnd).url
          );
        })
      )
      .subscribe();
  }
  selectedIndex: number = 0;

  ngAfterViewInit() {}

  setSelectedIndex(index: number) {
    this.selectedIndex = index;
  }

  toggleSideNave() {
    const isDataVisible =
      this.navigationElement?.nativeElement.getAttribute('data-visible');
    if (isDataVisible === 'false') {
      this.navigationElement?.nativeElement.setAttribute('data-visible', true);
      this.mobileNavToggle?.nativeElement.setAttribute('aria-expanded', true);
      this.showOverlay = true;
    } else {
      this.navigationElement?.nativeElement.setAttribute('data-visible', false);
      this.mobileNavToggle?.nativeElement.setAttribute('aria-expanded', false);
      this.showOverlay = false;
    }
  }
}
