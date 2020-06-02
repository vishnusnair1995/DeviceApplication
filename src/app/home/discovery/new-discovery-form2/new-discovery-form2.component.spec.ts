import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiscoveryForm2Component } from './new-discovery-form2.component';

describe('NewDiscoveryForm2Component', () => {
  let component: NewDiscoveryForm2Component;
  let fixture: ComponentFixture<NewDiscoveryForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDiscoveryForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiscoveryForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
