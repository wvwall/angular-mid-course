import {Component, inject} from '@angular/core';
import {Step1Component} from './step1/step1.component';
import {ConfiguratorService} from './configurator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Step1Component],
  templateUrl: "app.component.html",
})
export class AppComponent {
  service = inject(ConfiguratorService);

}
