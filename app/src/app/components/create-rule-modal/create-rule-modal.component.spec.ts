import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRuleModalComponent } from './create-rule-modal.component';

describe('CreateRuleModalComponent', () => {
  let component: CreateRuleModalComponent;
  let fixture: ComponentFixture<CreateRuleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRuleModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRuleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
