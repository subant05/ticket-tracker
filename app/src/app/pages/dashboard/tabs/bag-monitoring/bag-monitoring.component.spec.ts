import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagMonitoringComponent } from './bag-monitoring.component';

describe('BagMonitoringComponent', () => {
  let component: BagMonitoringComponent;
  let fixture: ComponentFixture<BagMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
