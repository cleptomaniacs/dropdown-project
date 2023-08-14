import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualInnovationFormComponent } from './individual-innovation-form.component';

describe('IndividualInnovationFormComponent', () => {
  let component: IndividualInnovationFormComponent;
  let fixture: ComponentFixture<IndividualInnovationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualInnovationFormComponent]
    });
    fixture = TestBed.createComponent(IndividualInnovationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
