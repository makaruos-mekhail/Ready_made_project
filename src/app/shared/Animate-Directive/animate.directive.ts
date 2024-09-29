import { AfterViewInit, Directive, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { AnimationService } from '../Animation-Service/animation.service';

@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective  implements AfterViewInit, OnDestroy {

  constructor(private el: ElementRef, private animationService: AnimationService) { }

  ngAfterViewInit(): void {
    // أضف العنصر إلى خدمة الأنيميشن
    this.animationService.addElement(this.el);
    // تحديث العناصر عند التمرير الأولي
    this.animationService.onScroll();
  }

  ngOnDestroy(): void {
    // إزالة العنصر من خدمة الأنيميشن عند تدمير الـ Directive
    this.animationService.removeElement(this.el);
  }


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // تحديث العناصر عند التمرير
    this.animationService.onScroll();
  }
}