import { Component } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.scss']
})
export class TopNavigationBarComponent {

  constructor(
    private router: Router
  ) { }

  onMenuItemClick(path:string[]){
    console.log(path)
    this.router.navigate(path)
  }

}
