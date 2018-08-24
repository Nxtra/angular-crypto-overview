import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ICoinCard } from './coin-card';
@Component({
  selector: 'ryan-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent {

  @Output() onButtonClick: EventEmitter<ICoinCard> = new EventEmitter();

  @Input()
  hasRedBackground = false;
  
  @Input()
  coin: ICoinCard = {
    algorithmName: 'SDA',
    coinName: 'Ripple',
    imgUrl: 'https://bitcoin.org/img/icons/opengraph.png?1534982756',
    totalMarketCap: '1000000'
  };

  test(): void {
    this.onButtonClick.emit(this.coin);
  }
}