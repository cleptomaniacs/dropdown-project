import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdown-project';
  displayProblemForm = false;
  displayIndividualInnovationForm = false;
  displayGroupInnovationForm = false;
  innovationOrProblem = false;

  constructor(){
    this.innovationOrProblem=false
    this.displayProblemForm = false
    this.displayIndividualInnovationForm = false
    this.displayGroupInnovationForm = false
  }

  onChangeInnovationOrProblem(event: any): void {
    let field = event.target.value
    if (field=="problem") {
      this.innovationOrProblem=false
      this.displayIndividualInnovationForm = false
      this.displayGroupInnovationForm = false
      this.displayProblemForm = true
    }else if (field=="innovation"){
      this.innovationOrProblem=true
      this.displayIndividualInnovationForm = false
      this.displayGroupInnovationForm = false
      this.displayProblemForm = false
    }else{
      this.innovationOrProblem=false
      this.displayIndividualInnovationForm = false
      this.displayGroupInnovationForm = false
      this.displayProblemForm = false
    }
  }

  onChangeIndividualOrGroup(event:any): void {
    let field = event.target.value
    if (field=="group") {
      this.displayProblemForm = false
      this.displayIndividualInnovationForm = false
      this.displayGroupInnovationForm = true
    }
    else if (field=="individual") {
      this.displayProblemForm = false
      this.displayGroupInnovationForm = false
      this.displayIndividualInnovationForm = true
    }else{
      this.displayProblemForm = false
      this.displayGroupInnovationForm = false
      this.displayIndividualInnovationForm = false
    }
  }
}
