import { Component } from '@angular/core';

@Component({
  selector: 'app-individual-innovation-form',
  templateUrl: './individual-innovation-form.component.html',
  styleUrls: ['./individual-innovation-form.component.css']
})
export class IndividualInnovationFormComponent {
  newOrDerived: boolean = true;

  onChange(event:any):void{
    let idea=event.target.value;
    if(idea=="new"){
      this.newOrDerived=true;
    }else{
      this.newOrDerived=false;
    }
  }

}
