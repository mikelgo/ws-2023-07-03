import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {injectSubscriptionService, provideSubscriptionService} from "../mem-leak/inject-subscription.service";

@Component({
  selector: 'app-some',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      some works!
    </p>
  `,
  styleUrls: ['./some.component.css'],
  providers: [provideSubscriptionService()]
})
export class SomeComponent {
  subService = injectSubscriptionService()
}
