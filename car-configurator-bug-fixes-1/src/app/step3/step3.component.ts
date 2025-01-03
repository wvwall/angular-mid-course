import {Component, inject} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ConfiguratorService} from '../configurator.service';

@Component({
  selector: 'app-step3',
  standalone: true,
    imports: [
        CurrencyPipe,
        ReactiveFormsModule
    ],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component {

  service = inject(ConfiguratorService);

}
