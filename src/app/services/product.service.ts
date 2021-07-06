import { Injectable } from '@angular/core';

import {Product} from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products: Product[] = [
    new Product(1,"Light Blue Record Player","A record Player ", 200,"https://target.scene7.com/is/image/Target/GUEST_11d7bb45-2249-4749-90a8-ca7ae882273b?wid=488&hei=488&fmt=pjpeg","RecordPlayer"),
    new Product(2,"Yellow Record Player","A record Player ", 200,"https://target.scene7.com/is/image/Target/GUEST_11d7bb45-2249-4749-90a8-ca7ae882273b?wid=488&hei=488&fmt=pjpeg" ,"RecordPlayer"),
    new Product(3,"Green Record Player","A record Player ", 200,"https://target.scene7.com/is/image/Target/GUEST_11d7bb45-2249-4749-90a8-ca7ae882273b?wid=488&hei=488&fmt=pjpeg" ,"RecordPlayer"),
    new Product(4,"Red Record Player","A record Player ", 200,"https://target.scene7.com/is/image/Target/GUEST_11d7bb45-2249-4749-90a8-ca7ae882273b?wid=488&hei=488&fmt=pjpeg" ,"RecordPlayer"),
    new Product(5,"Jorja Smith","A record Player ", 50,"https://target.scene7.com/is/image/Target/GUEST_11d7bb45-2249-4749-90a8-ca7ae882273b?wid=488&hei=488&fmt=pjpeg" ,"Record"),
    new Product(6,"Omar Apollo","A record Player ", 40,"https://target.scene7.com/is/image/Target/GUEST_11d7bb45-2249-4749-90a8-ca7ae882273b?wid=488&hei=488&fmt=pjpeg" ,"Record"),
    new Product(7,"Estelle","A record Player ", 35,"https://target.scene7.com/is/image/Target/GUEST_11d7bb45-2249-4749-90a8-ca7ae882273b?wid=488&hei=488&fmt=pjpeg" ,"Record"),
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
