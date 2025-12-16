
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { UiCommonModule } from './uI-common/ui-common.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OwnerComponent,
  ],
  imports: [
    UiCommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'owner-page', component: OwnerComponent },
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

