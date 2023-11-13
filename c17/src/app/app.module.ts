import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptor } from './core/log.interceptor';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService, {
    provide: HTTP_INTERCEPTORS,
    useClass: LogInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
