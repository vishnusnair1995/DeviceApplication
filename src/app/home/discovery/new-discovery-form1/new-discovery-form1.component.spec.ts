import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiscoveryForm1Component } from './new-discovery-form1.component';

describe('NewDiscoveryForm1Component', () => {
  let component: NewDiscoveryForm1Component;
  let fixture: ComponentFixture<NewDiscoveryForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDiscoveryForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiscoveryForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
