import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-introduct',
  templateUrl: './introduct.component.html',
  styleUrls: ['./introduct.component.scss']
})
export class IntroductComponent implements OnInit {
  @ViewChild('cocau')
  cocauElement!: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  scrollToElement() {
    if (this.cocauElement.nativeElement) {
      this.cocauElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
