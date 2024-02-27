import { Component } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-nav-time',
  templateUrl: './nav-time.component.html',
  styleUrl: './nav-time.component.css'
})
export class NavTimeComponent {
  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.ActualTime();
    });
  }
  
  ActualTime() {
    let date =  new Date();
    return date
  }
}
