import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiscoveryForm4Component } from './new-discovery-form4.component';

describe('NewDiscoveryForm4Component', () => {
  let component: NewDiscoveryForm4Component;
  let fixture: ComponentFixture<NewDiscoveryForm4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDiscoveryForm4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiscoveryForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
