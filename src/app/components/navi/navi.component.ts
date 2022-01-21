import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  items!: MenuItem[];

  activeItem!: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home' ,routerLink:"/home" },
      {label: 'Rental', icon: 'pi pi-fw pi-car', routerLink:"/car"},
      {label: 'Car Added', icon: 'pi pi-fw pi-pencil' ,routerLink:"/cars/add" },
      {label: 'Rentals', icon: 'pi pi-credit-card' ,routerLink:"/rentals"},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
  ];

  this.activeItem = this.items[0];
  }

}
