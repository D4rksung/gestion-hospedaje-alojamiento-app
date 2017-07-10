import { Component, OnInit } from '@angular/core';

class NavItem {
  constructor(public label: string, public link: any[]) { }
}

@Component({
  selector: 'gha-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navItems:NavItem[];

  constructor() { }

  ngOnInit() {
    this.navItems = [
      {label:'Gestionar Plan Alimenticio',link:['/planesAlimenticios']},
      {label:'Recoger Mascota',link:['/recogerMascota']}
    ];
  }

}
