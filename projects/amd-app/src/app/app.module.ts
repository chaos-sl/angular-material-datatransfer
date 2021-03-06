import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialDatatransferModule, AngularMaterialDatatransferComponent } from 'projects/amd-lib/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialDatatransferModule
  ],
  providers: [AngularMaterialDatatransferComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
