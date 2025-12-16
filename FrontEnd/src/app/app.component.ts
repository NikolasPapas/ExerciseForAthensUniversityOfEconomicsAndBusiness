import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  standalone: false,
  selector: 'app-root',
  template: `
  <div class="row">
    <router-outlet></router-outlet>
</div>
  `,
})
export class AppComponent {
  constructor() {
  }


}
