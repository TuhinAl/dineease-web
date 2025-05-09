import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Menu } from './Menu';

@Component({
  selector: 'app-layout',
  template: `
    <div>
      <app-header (menuToggled)="toggle()"></app-header>

      <mat-drawer-container>
        <mat-drawer mode="side" [opened]="opened">
          <app-menu-item [menu]="menu"></app-menu-item>
        </mat-drawer>

        <mat-drawer-content [class.margin-left]="opened">
          <router-outlet></router-outlet>
        </mat-drawer-content>
      </mat-drawer-container>
    </div>
  `,
  styleUrls: ['./LayoutComp.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComp {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'Function',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Entry',
          icon: 'money',
          link: '/meal-entry',
          color: '#ff7f0e',
        },
        {
          title: 'P. Entry',
          icon: 'money',
          link: '/purchase-entry',
          color: '#ff7f0e',
        }
      ],
    },
  ];
}
