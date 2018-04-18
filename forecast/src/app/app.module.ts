import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForecastPortalModule } from './forecast-portal/forecast-portal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ForecastPortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
