import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit
{

  constructor(private router: Router)
  {
    
  }

  ngOnInit()
  {

  }

  returnToStartPage(): void
  {
    this.notifyStartPage();
    this.router.navigate(["/"]);
  }

  // Damit der "Navigation starten" Button klickbar wird.
  notifyStartPage(): void
  {

  }
  
}
