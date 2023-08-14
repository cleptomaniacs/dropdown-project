import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-member-details-form',
  templateUrl: './group-member-details-form.component.html',
  styleUrls: ['./group-member-details-form.component.css']
})
export class GroupMemberDetailsFormComponent {

  @Input() groupMemberId:number = 0;

}
