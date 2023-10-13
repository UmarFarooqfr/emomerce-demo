import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent  {
  
  dataStream :any[]= [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

  constructor (private router :Router){}
  detailImage(){
    console.log("its working")
this.router.navigate(['/detailpage'])
  }
}
