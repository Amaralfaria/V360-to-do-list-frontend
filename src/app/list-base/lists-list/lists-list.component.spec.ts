/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListsListComponent } from './lists-list.component';

describe('ListsListComponent', () => {
  let component: ListsListComponent;
  let fixture: ComponentFixture<ListsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
