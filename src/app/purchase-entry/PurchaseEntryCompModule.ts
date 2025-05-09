import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
// Import these specific card components

import { PurchaseEntryComp } from './PurchaseEntryComp';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [PurchaseEntryComp],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatTableModule
    ],
    exports: [PurchaseEntryComp]
})
export class PurchaseEntryCompModule { }
