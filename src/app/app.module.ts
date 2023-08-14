import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProblemFormComponent } from './components/problem-form/problem-form.component';
import { IndividualInnovationFormComponent } from './components/individual-innovation-form/individual-innovation-form.component';
import { GroupInnovationFormComponent } from './components/group-innovation-form/group-innovation-form.component';
import { GroupMemberDetailsFormComponent } from './components/group-member-details-form/group-member-details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemFormComponent,
    IndividualInnovationFormComponent,
    GroupInnovationFormComponent,
    GroupMemberDetailsFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
