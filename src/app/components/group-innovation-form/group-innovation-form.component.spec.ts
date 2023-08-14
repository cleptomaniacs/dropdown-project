import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupInnovationFormComponent } from './group-innovation-form.component';

describe('GroupInnovationFormComponent', () => {
  let component: GroupInnovationFormComponent;
  let fixture: ComponentFixture<GroupInnovationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupInnovationFormComponent]
    });
    fixture = TestBed.createComponent(GroupInnovationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
