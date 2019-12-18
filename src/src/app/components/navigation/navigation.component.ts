import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonManagementService } from 'src/app/services/button-management.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private bM: ButtonManagementService)
  {
    
  }

  ngOnInit() {
  }

  returnToStartPage(): void
  {
    this.router.navigate(["/"]);
  }

  changeNavigationButton(): void
  {
    // Damit der "Navigation starten" Button klickbar wird.
    this.bM.navigationButtonDisabled = false;

    this.returnToStartPage();
  }

}