import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.scss'],
})
export class SquaresComponent {
  // @Input() value: 'X' | 'O';
  rando = Math.random();
}
