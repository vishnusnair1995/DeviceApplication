import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryHomeComponent } from './discovery-home.component';

describe('DiscoveryHomeComponent', () => {
  let component: DiscoveryHomeComponent;
  let fixture: ComponentFixture<DiscoveryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoveryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
