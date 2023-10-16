import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
Quantity :any = 0;
constructor(){
  this.Quantity = localStorage.getItem('Cart')
}
}
