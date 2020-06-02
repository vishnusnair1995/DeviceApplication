import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiscoveryForm3Component } from './new-discovery-form3.component';

describe('NewDiscoveryForm3Component', () => {
  let component: NewDiscoveryForm3Component;
  let fixture: ComponentFixture<NewDiscoveryForm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDiscoveryForm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiscoveryForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
