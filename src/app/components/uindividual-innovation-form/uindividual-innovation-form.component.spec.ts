import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UindividualInnovationFormComponent } from './uindividual-innovation-form.component';

describe('UindividualInnovationFormComponent', () => {
  let component: UindividualInnovationFormComponent;
  let fixture: ComponentFixture<UindividualInnovationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UindividualInnovationFormComponent]
    });
    fixture = TestBed.createComponent(UindividualInnovationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
