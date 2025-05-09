import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { MemberRegistrationComp } from './MemberRegistrationComp';
import { MemberRegistrationCompService } from './MemberRegistrationCompService';

@NgModule({
    declarations: [
        MemberRegistrationComp
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatCardModule
    ],
    exports: [
        MemberRegistrationComp
    ],
    providers: [
        MemberRegistrationCompService
    ]
})
export class MemberRegistrationModule { }
