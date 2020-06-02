import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryReportComponent } from './discovery-report.component';

describe('DiscoveryReportComponent', () => {
  let component: DiscoveryReportComponent;
  let fixture: ComponentFixture<DiscoveryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoveryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
