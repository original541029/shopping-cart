import { Injectable } from '@angular/core';
import * as project from '../assets/pros-list.json';
@Injectable({
  providedIn: 'root'
})
export class ShopCartService {
  aryDatas = project;
  constructor() { }
  aryItem() {
    return this.aryDatas;
  }
}
