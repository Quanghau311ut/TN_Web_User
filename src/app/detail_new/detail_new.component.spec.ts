/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Detail_newComponent } from './detail_new.component';

describe('Detail_newComponent', () => {
  let component: Detail_newComponent;
  let fixture: ComponentFixture<Detail_newComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detail_newComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail_newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
