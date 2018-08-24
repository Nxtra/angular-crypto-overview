import { Injectable } from '@angular/core';
import { ICoinCard } from '../coin/coin-card';
import { CryptoCompareCoin } from './crypto-compare-coin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';
@Injectable()
export class CoinService {

  private coins: ICoinCard[] = [];

  constructor(private http: HttpClient) {
  }

  getCoinList(): Array<ICoinCard> {
    return this.coins;
  }

  getCryptoCompareCoins(): Observable<ICoinCard[]> {
    return this.http
      .get('/api/data/coinlist/')
      .pipe(
        map((responseJSON:{Data: any}) => {
          const data = responseJSON.Data;
          return Object.keys(data).map(key => {
            return data[key];
          }).splice(0, 100);
        }),
        map((list: Array<CryptoCompareCoin>) => {
          return list.map(item => {
            let coinCard : ICoinCard = {
              algorithmName: item.Algorithm,
              coinName: item.CoinName,
              imgUrl: 'https://www.cryptocompare.com' + item.ImageUrl,
              totalMarketCap: item.TotalCoinSupply
            }
            return coinCard;
          });
        })
      );
  }
}
