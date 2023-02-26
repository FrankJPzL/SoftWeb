// import { Directive, HostListener } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})
export class OnlyNumbersDirective {

  // OnlyNumber: boolean = true;
  // regexStr = '^[0-9]*$';

  // @HostListener('keydown', ['$event'])
  // onKeyDown(event: KeyboardEvent) {
  //   let e = <KeyboardEvent>event;
  //   console.log(e.keyCode);
  //   if (this.OnlyNumber) {
  //     if (
  //       [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
  //       // Allow: Ctrl+A
  //       (e.keyCode == 65 && e.ctrlKey === true) ||
  //       // Allow: Ctrl+C
  //       (e.keyCode == 67 && e.ctrlKey === true) ||
  //       // Allow: Ctrl+V
  //       (e.keyCode == 86 && e.ctrlKey === true) ||
  //       // Allow: Ctrl+X
  //       (e.keyCode == 88 && e.ctrlKey === true) ||
  //       // Allow: home, end, left, right
  //       (e.keyCode >= 35 && e.keyCode <= 39)
  //     ) {
  //       // let it happen, don't do anything
  //       return;
  //     }

  //     let ch = String.fromCharCode(e.keyCode);
  //     let regEx = new RegExp(this.regexStr);
  //     if (regEx.test(ch)) return;
  //     else e.preventDefault();
  //   }
  // }

  private regex: RegExp = new RegExp(/^\d*$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-',
  'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) return;

    let current: string = this.el.nativeElement.value;

    const position = this.el.nativeElement.selectionStart;
    const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');

    if (next && !String(next).match(this.regex))
      event.preventDefault();
  }

}
