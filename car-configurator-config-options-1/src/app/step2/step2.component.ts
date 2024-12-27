import { Component, inject, Signal } from '@angular/core';
import { ConfiguratorService } from '../configurator.service';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss',
})
export class Step2Component {
  service = inject(ConfiguratorService);
  configByCar = this.service.currentCar()?.code
    ? this.service.getConfigById(this.service.currentCar()!.code)
    : undefined;

  ngOnInit() {
    console.log(this.configByCar);
  }
}
