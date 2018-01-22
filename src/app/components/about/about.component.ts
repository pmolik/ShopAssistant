//Plik zawiera component w którym zawarty jest mock dotyczący przesyłania opinii
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  send() {
    window.alert('To tylko mock, ale dziękuję za sprawdznie tego przycisku')
  }

}
