import { Component, OnInit } from '@angular/core';
import { Button } from '../../interfaces/button';
import { NavbarButtons } from '../../data/consts/navbar-btns';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  buttons: {[key: string]: Button} = NavbarButtons;

  constructor() { }

  ngOnInit(): void {
  }

}
