import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'MealEntryComp',
    templateUrl: './MealEntryComp.html',
    styleUrls: ['./MealEntryComp.scss']
})
export class MealEntryComp implements OnInit {
    mealForm: FormGroup;

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
}
