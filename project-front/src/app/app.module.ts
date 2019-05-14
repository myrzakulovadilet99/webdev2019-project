import { BrowserModule } from '@angular/platform-browser';
import {ClassProvider, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProviderService} from './shared/services/provider.service';
import {AuthInterceptor} from './AuthInterceptor';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GymComponent } from './gym/gym.component';
import { LoginComponent } from './login/login.component';
import { AboutfitnessblitzComponent } from './aboutfitnessblitz/aboutfitnessblitz.component';
import { CoachComponent } from './coach/coach.component';
import { ExternalComponent } from './external/external.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { CoachinfoComponent } from './coachinfo/coachinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    FeedbackComponent,
    GymComponent,
    LoginComponent,
    AboutfitnessblitzComponent,
    CoachComponent,
    ExternalComponent,
    Header2Component,
    Header3Component,
    CoachinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProviderService,
    <ClassProvider> {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
