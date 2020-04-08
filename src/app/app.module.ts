import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { AppComponent } from './app.component';
import { ConfirmEqualValidatorDirective } from './directive/confirm-matching-validator';
import { OnlynumberDirective } from './directive/onlynumberDirective';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmEqualValidatorDirective,
    OnlynumberDirective,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
