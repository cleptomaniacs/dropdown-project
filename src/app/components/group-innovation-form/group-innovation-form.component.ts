import { Component } from '@angular/core';

@Component({
  selector: 'app-group-innovation-form',
  templateUrl: './group-innovation-form.component.html',
  styleUrls: ['./group-innovation-form.component.css']
})
export class GroupInnovationFormComponent {
  newOrDerived: boolean = true;
  totalMembers: number = 1;
  //members: []=[]

  onAddMember():void{
    if (this.totalMembers<5) {
      this.totalMembers++;
    }else{
      this.totalMembers = this.totalMembers
    }
  }

  onChange(event:any):void{
    let idea=event.target.value;
    if(idea=="new"){
      this.newOrDerived=true;
    }else{
      this.newOrDerived=false;
    }
  }

}
