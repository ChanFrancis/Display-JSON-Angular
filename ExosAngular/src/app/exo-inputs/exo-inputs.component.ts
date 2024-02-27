import { Component } from '@angular/core';
import { FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-exo-inputs',
  templateUrl: './exo-inputs.component.html',
  styleUrls: ['../app.component.css'],
})

export class ExoInputsComponent {
  title = 'ExosAngular';
  inputName: string = '';
  InputPolice: string = '';
  InputSize: string = '';
  InputAlign: string = '';
}