import { Component, Directive, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';

import { HelloComponent } from './hello.component';
import { ICoinCard } from '../crypto/coin/coin-card';
import { CoinService } from '../crypto/services/coin.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('myHello') hello: HelloComponent;

  shouldShowRed = true;
  coins: Array<ICoinCard>;

  constructor(public coinService: CoinService) {
    this.coinService.getCryptoCompareCoins()
    .subscribe(
      (coinList) => this.coins = coinList
    );
  }
}
