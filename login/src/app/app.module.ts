import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatButtonModule, MatToolbarModule, MatIcon, MatIconModule, MatSidenavModule, MatDividerModule, MatListModule, MatCardModule, MatRippleModule, MatMenuModule, MatPaginatorModule, MatGridListModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
