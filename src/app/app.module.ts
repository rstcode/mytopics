import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Str2objPipe } from './pipes/str2obj.pipe';
import { DescMinPipe } from './pipes/desc-min.pipe';
import { TopicComponent } from './components/topic/topic.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { PopupModelComponent } from './components/popup-mdl/popup-mdl.component';
import { ToastrModule } from 'ngx-toastr';
import { ErrorConnectionComponent } from './components/error-connection/error-connection.component';
import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderDirective } from './directive/slider.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ShowDirective } from './directive/show.directive';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { RduplicatesPipe } from './pipes/rduplicates.pipe';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
      'pinch': { enable: false },
      'rotate': { enable: false }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    Str2objPipe,
    DescMinPipe,
    TopicComponent,
    PopupModelComponent,
    ErrorConnectionComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    SliderDirective,
    SpinnerComponent,
    ShowDirective,
    RduplicatesPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot({
      timeOut: 1100,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    DatePipe,
    { provide: HAMMER_GESTURE_CONFIG,useClass: MyHammerConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }