import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMemberDetailsFormComponent } from './group-member-details-form.component';

describe('GroupMemberDetailsFormComponent', () => {
  let component: GroupMemberDetailsFormComponent;
  let fixture: ComponentFixture<GroupMemberDetailsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupMemberDetailsFormComponent]
    });
    fixture = TestBed.createComponent(GroupMemberDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
