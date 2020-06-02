import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudConnectorComponent } from './cloud-connector.component';

describe('CloudConnectorComponent', () => {
  let component: CloudConnectorComponent;
  let fixture: ComponentFixture<CloudConnectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudConnectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
