import { Injectable } from '@angular/core';
import * as project from '../assets/pros-list.json';
@Injectable({
  providedIn: 'root'
})
export class ShopCartService {
  data = project;
  arydata = [];

  constructor() {
  }
  totalPage() {
    return this.data;
  }
  aryItem(start) {
    const numStart = (start * 5) - 4;
    const numEnd = (start * 5) + 1;
    const aryTemp = [];
    for (let i = numStart; i < numEnd; i++) {
      if (i % 5 === 0) {
        for (let k = i; k < (i + 5); k++) {
          if (this.data['default'][k - 5] !== undefined) {
            aryTemp.push(this.data['default'][k - 5]);
            // console.log(`${i / 5}_____${k - 5}`);
          }
        }
      }
    }
    this.arydata = aryTemp;
    return this.arydata;
  }
}
