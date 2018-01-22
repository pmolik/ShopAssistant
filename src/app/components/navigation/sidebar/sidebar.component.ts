//Komponent zawierjący boczne menu, w któym zawrte są ścieżki z app.routes.ts
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
