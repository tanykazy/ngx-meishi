import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'ngx-meishi';
  destroyed = new Subject<void>();
  orientation: 'landscape' | 'portrait' = 'landscape';

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe(Object.values(Breakpoints))
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        if (breakpointObserver.isMatched('(orientation: landscape)')) {
          this.orientation = 'landscape';
        } else if (breakpointObserver.isMatched('(orientation: portrait)')) {
          this.orientation = 'portrait';
        }
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            // console.log(result.breakpoints[query]);
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
