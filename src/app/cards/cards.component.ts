import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  quantity: any = 0;
  dataStream: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  constructor(private router: Router) { }
  detailImage() {
    console.log("its working")
    this.router.navigate(['/detailpage'])
  }
  addToCart() {
    if (localStorage.getItem('Cart')) {
      this.quantity = localStorage.getItem('Cart')
      this.quantity++;
      localStorage.setItem('Cart', JSON.stringify(this.quantity))
    } else {
      this.quantity++
      localStorage.setItem('Cart', JSON.stringify(this.quantity))

    }
  }
}
