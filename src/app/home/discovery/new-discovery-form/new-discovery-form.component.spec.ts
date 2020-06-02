import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiscoveryFormComponent } from './new-discovery-form.component';

describe('NewDiscoveryFormComponent', () => {
  let component: NewDiscoveryFormComponent;
  let fixture: ComponentFixture<NewDiscoveryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDiscoveryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiscoveryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
