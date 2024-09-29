import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/shared/Animation-Service/animation.service';
import { SharedService } from 'src/app/shared/services/shared.service';
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
export class HomeComponent implements OnInit {
  // dataHomePage:any;

  constructor(private sharedService : SharedService) {}

  ngOnInit(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    // this.sharedService.homepage().pipe().subscribe({
    //   next: (data) => {
    //     this.dataHomePage = data.data;
    //     console.log(this.dataHomePage);
    //   },
    //   error: (err) => {
    //     console.error(err);
    //     this.sharedService.setIsLoading(false);
    //   }
    // });
  }

  // isVisible = true; // أو false حسب الحاجة
  // toggleVisibility() {
  //   this.isVisible = !this.isVisible;
  // }
}
