import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-group-member-details-form',
  templateUrl: './group-member-details-form.component.html',
  styleUrls: ['./group-member-details-form.component.css']
})
export class GroupMemberDetailsFormComponent {

  @Input() groupMemberId:number = 0;
  @Output() memberID: EventEmitter<number>
  constructor(){
    this.memberID=new EventEmitter();
  }

  onClickRemove(id:number){
    this.memberID.emit(id);
  }

}
