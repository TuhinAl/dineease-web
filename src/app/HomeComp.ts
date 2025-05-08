import { Component } from '@angular/core';

@Component({
  template: `
    <app-page-header icon="home">
      <h2>Your Name</h2>

      <button
        routerLink="/sales"
        mat-flat-button
        color="primary"
        class="action"
      >
        <mat-icon class="mr-2">add</mat-icon>
        <span>New sale</span>
      </button>
    </app-page-header>

    <div style="padding: 20px">
      <div class="row">
        <div class="col-md-6">
          <mat-card class="example-card card-with-shadow" appearance="outlined">
            <mat-card-content>
              <h3><strong>Today</strong></h3>
              <p>Lunch</p>
              <p>Morning</p>
              <p>Dinner</p>
              <button
        routerLink="/sales"
        mat-flat-button
        color="primary"
        class="action">
        <!-- <mat-icon class="mr-2">add</mat-icon> -->
        <span>Add Your Info</span>
      </button>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-md-6">
          <mat-card class="example-card card-with-shadow" appearance="outlined">
            <mat-card-content>
              <h3><strong>Today Summary</strong></h3>
              <p>Lunch</p>
              <p>Morning</p>
              <p>Dinner</p>
              <button
        routerLink="/sales"
        mat-flat-button
        color="primary"
        class="action">
        <!-- <mat-icon class="mr-2">add</mat-icon> -->
        <span>Today Summary</span>
      </button>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>

    <MemberListComp></MemberListComp>

  `,
  styles: [`
  .example-card {
  max-width: 400px;
}

.example-card-footer {
  padding: 16px;
}
    .row {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
    }
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
      padding: 0 10px;
      box-sizing: border-box;
    }
    mat-card {
      margin-bottom: 20px;
      height: 100%;
    }
    .card-with-shadow {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06) !important;
      transition: box-shadow 0.3s ease-in-out;
    }
    .card-with-shadow:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1) !important;
    }
    @media (max-width: 768px) {
      .col-md-6 {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
  `]
})
export class HomeComp { }