import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[NoPaste]'
})
export class NoPasteDirective {

  constructor() { }
  @HostListener('keydown',['$event'])
  onKeyPress(event: KeyboardEvent) {
      if((event.ctrlKey || event.metaKey) && event.keyCode == 86){
        event.preventDefault()
      }

  }

}
