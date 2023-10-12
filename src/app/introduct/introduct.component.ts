import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-introduct',
  templateUrl: './introduct.component.html',
  styleUrls: ['./introduct.component.scss']
})
export class IntroductComponent implements OnInit {
  @ViewChild('content')
  contentElemnt!: ElementRef;
  @ViewChild('cocau')
  cocauElement!: ElementRef;
  @ViewChild('chucnang')
  chucnangElemnt!: ElementRef;
  @ViewChild('cosovatchat')
  cosovatchatElement!: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  scrollToElement() {

    if (this.contentElemnt.nativeElement) {
      this.contentElemnt.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToElement1() {

    if (this.cocauElement.nativeElement) {
      this.cocauElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToElement2() {

    if (this.chucnangElemnt.nativeElement) {
      this.chucnangElemnt.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToElement3() {

    if (this.cosovatchatElement.nativeElement) {
      this.cosovatchatElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
