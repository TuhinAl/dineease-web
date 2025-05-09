import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'PurchaseListComp',
    templateUrl: './PurchaseListComp.html',
    styleUrls: ['./PurchaseListComp.scss']
})
export class PurchaseListComp implements OnInit {

    constructor(private fb: FormBuilder) { 

    }
    
    ngOnInit(): void {
    }

    displayedColumns = ['item', 'cost'];
    transactions: Transaction[] = [
      {item: 'Beach ball', cost: 4},
      {item: 'Towel', cost: 5},
      {item: 'Frisbee', cost: 2},
      {item: 'Sunscreen', cost: 4},
      {item: 'Cooler', cost: 25},
      {item: 'Swim suit', cost: 15},
    ];
  
    /** Gets the total cost of all transactions. */
    getTotalCost() {
      return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }
 
}

export interface Transaction {
    item: string;
    cost: number;
  }