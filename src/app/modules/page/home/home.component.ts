import {Component} from '@angular/core';
// import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [
  //   trigger('fadeInOut', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('300ms', style({ opacity: 1 }))
  //     ]),
  //     transition(':leave', [
  //       animate('300ms', style({ opacity: 0 }))
  //     ])
  //   ])
  // ]
})
export class HomeComponent {
  ngOnInit(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    }

  // isVisible = true; // أو false حسب الحاجة
  // toggleVisibility() {
  //   this.isVisible = !this.isVisible;
  // }
}
