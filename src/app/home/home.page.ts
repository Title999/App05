import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail: NavController) {}

items=[
  {
    id:1,
    name:'Product A',
    price:1000,
    detail:'this is a Product',
    imageURL: 'https://down-th.img.susercontent.com/file/sg-11134201-22120-kqq6vx059qkvbc'
  },
  {
    id:2,
    name:'Product B',
    price:2000,
    detail:'this is a Product',
    imageURL: 'https://down-co.img.susercontent.com/file/sg-11134201-7rbl6-lm24k5j51xsbeb'
  },
  {
    id:3,
    name:'Product C',
    price:3000,
    detail:'this is a Product',
    imageURL: 'https://cf.shopee.co.th/file/th-11134207-7r98s-ly6x7ayd7ywxe2'
  },
  {
    id:4,
    name:'Product D',
    price:4000,
    detail:'this is a Product',
    imageURL: 'https://media.shopat24.com/original/lfc_red.jpg'
  },
]

gotoDetail(i:any){
  this.detail.navigateForward('/detail',{state:{i}})
}

}
