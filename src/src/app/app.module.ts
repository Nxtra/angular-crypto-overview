import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CryptoModule } from '../crypto/crypto.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CryptoModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
