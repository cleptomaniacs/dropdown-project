import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProblemFormComponent } from './components/problem-form/problem-form.component';
import { UindividualInnovationFormComponent } from './components/uindividual-innovation-form/uindividual-innovation-form.component';
import { IndividualInnovationFormComponent } from './components/individual-innovation-form/individual-innovation-form.component';
import { GroupInnovationFormComponent } from './components/group-innovation-form/group-innovation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemFormComponent,
    UindividualInnovationFormComponent,
    IndividualInnovationFormComponent,
    GroupInnovationFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
