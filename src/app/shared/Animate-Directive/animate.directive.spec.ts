import { AnimateDirective } from './animate.directive';
import { ElementRef } from '@angular/core';
import { AnimationService } from '../Animation-Service/animation.service';

describe('AnimateDirective', () => {
  let directive: AnimateDirective;
  let mockElementRef: ElementRef;
  let mockAnimationService: AnimationService;

  beforeEach(() => {
    // إنشاء Mock لـ ElementRef
    mockElementRef = {
      nativeElement: document.createElement('div')
    } as ElementRef;

    // إنشاء Mock لـ AnimationService
    mockAnimationService = {
      // أضف هنا الدوال والخصائص التي يستخدمها الـ Directive
      someMethod: jasmine.createSpy('someMethod')
    } as any;

    // إنشاء مثيل الـ Directive مع الـ Mocks
    directive = new AnimateDirective(mockElementRef, mockAnimationService);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  // أضف اختبارات إضافية هنا
});
