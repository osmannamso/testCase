import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { UserProfileItemComponent } from './components/user-profile-item/user-profile-item.component';
import { UserCommentComponent } from './components/user-comment-item/user-comment-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApartmentItemComponent } from './components/apartment-item/apartment-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserProfileItemComponent,
    UserCommentComponent,
    FooterComponent,
    ApartmentItemComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
