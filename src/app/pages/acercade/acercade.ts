import { Component } from '@angular/core';

@Component({
  selector: 'app-acercade',
  imports: [],
  templateUrl: './acercade.html',
  styleUrl: './acercade.css'
})
export class Acercade {
  verInfo = false;
  myName = 'Omar';

  information = {
    age: 20,
    emial: 'omar@gmail.com',
    phone: '951234',
    nationality: 'Mexican',
    favorite_framework: 'Nest'
  }

  bandas = ['Imagine Dragos', 'Maroon 5', 'Sabrina Carpenter', 'Red Hot Chili Pepper'];

  verInformacion(){
    this.verInfo = !this.verInfo;
  }
}
