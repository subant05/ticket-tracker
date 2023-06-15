import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRulesComponent } from './delete-rules.component';

describe('DeleteRulesComponent', () => {
  let component: DeleteRulesComponent;
  let fixture: ComponentFixture<DeleteRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
