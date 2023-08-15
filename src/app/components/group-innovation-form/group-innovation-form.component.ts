import { Component } from '@angular/core';
import { GroupMemberDetailsFormComponent } from '../group-member-details-form/group-member-details-form.component';

@Component({
  selector: 'app-group-innovation-form',
  templateUrl: './group-innovation-form.component.html',
  styleUrls: ['./group-innovation-form.component.css']
})
export class GroupInnovationFormComponent {
  newOrDerived: boolean = true;
  members: GroupMemberDetailsFormComponent[]=[]

  constructor(){
    this.members.push(new GroupMemberDetailsFormComponent )
  }

  onAddMember():void{
      this.members.push(new GroupMemberDetailsFormComponent);
  }

  onChange(event:any):void{
    let idea=event.target.value;
    if(idea=="new"){
      this.newOrDerived=true;
    }else{
      this.newOrDerived=false;
    }
  }

  removeMember(event:number):void{
    let index=event
    if (this.members.length>1) {
      this.members.splice(index,1)
    }
  }

}
