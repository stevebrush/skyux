import {
  Injectable,
  OnDestroy,
  Renderer2,
  ElementRef
} from '@angular/core';

import {
  Subject
} from 'rxjs/Subject';

import {
  SkyLibResourcesService
} from '@skyux/i18n';

@Injectable()
export class SkyPhoneFieldAdapterService implements OnDestroy {

  private ngUnsubscribe = new Subject();

  constructor(
    private renderer: Renderer2,
    private resourcesService: SkyLibResourcesService
  ) { }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public addElementClass(elementRef: ElementRef, className: string): void {
    this.renderer.addClass(elementRef.nativeElement, className);
  }

  public setElementDisabledState(elementRef: ElementRef, disabled: boolean): void {
    this.renderer.setProperty(
      elementRef.nativeElement,
      'disabled',
      disabled
    );
  }

  public setElementPlaceholder(elementRef: ElementRef, placeholder: string): void {
    this.renderer.setAttribute(elementRef.nativeElement, 'placeholder', placeholder);
  }

  public setElementValue(elementRef: ElementRef, value: string): void {
    if (value) {
      this.renderer.setProperty(
        elementRef.nativeElement,
        'value',
        value
      );
    }
  }

  public setAriaLabel(element: ElementRef): void {
    if (!element.nativeElement.getAttribute('aria-label')) {
      this.resourcesService.getString('skyux_phone_field_default_label')
        .takeUntil(this.ngUnsubscribe)
        .subscribe((value: string) => {
          this.renderer.setAttribute(
            element.nativeElement,
            'aria-label',
            value
          );
        });
    }
  }

  public focusElement(element: ElementRef): void {
    element.nativeElement.focus();
  }

  public focusPhoneInput(element: ElementRef): void {
    const input = element.nativeElement.querySelector('.sky-phone-field-container input');
    input.focus();
  }

}