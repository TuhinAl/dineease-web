import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'PurchaseEntryComp',
    templateUrl: './PurchaseEntryComp.html',
    styleUrls: ['./PurchaseEntryComp.scss']
})
export class PurchaseEntryComp implements OnInit {
    mealForm: FormGroup;

    itemList: any = [];
    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm(): void {
        this.mealForm = this.fb.group({
            mealDate: [new Date(), Validators.required],
            breakfast: [1, [Validators.min(0), Validators.max(100)]],
            lunch: [1, [Validators.min(0), Validators.max(100)]],
            dinner: [1, [Validators.min(0), Validators.max(100)]]
        });
    }

    onSubmit(): void {
        if (this.mealForm.valid) {
            console.log('Form submitted:', this.mealForm.value);
            // Add your API call or data processing logic here
        } else {
            this.mealForm.markAllAsTouched();
        }
    }

    addItem(): void {
        // Create a new item - this is just a placeholder example

        const newItem = { 
            itemName: `New Item ${this.itemList.length + 1}`, 
            price: parseFloat((Math.random() * 20 + 50).toFixed(2)) // Random price between 50-70
        };
        this.itemList.push(newItem);
        console.log('Adding new item', this.itemList);
    }

    removeItem(index: number): void {
        this.itemList.splice(index, 1);
    }
}
