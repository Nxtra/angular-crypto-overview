import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinComponent } from './coin/coin.component';
import { CounterComponent } from './counter/counter.component';
import { CoinService } from './services/coin.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    CounterComponent,
    CoinComponent
  ],
  exports: [
    CounterComponent,
    CoinComponent
  ],
  providers: [
    CoinService
  ]
})
export class CryptoModule {
}