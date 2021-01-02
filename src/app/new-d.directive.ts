import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNewD]'
})
export class NewDDirective {

  constructor(private AR:ElementRef) { 
    AR.nativeElement.style.color="red"
  }

}
