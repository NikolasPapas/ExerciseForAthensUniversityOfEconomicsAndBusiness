import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltip } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatChipsModule } from '@angular/material/chips';

import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    CustomErrorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatTooltip,
    MatTabsModule,
    MatToolbarModule,
    MatSelectModule,
    MatExpansionModule,
    CdkDropList,
    CdkDrag,
    MatSliderModule,
    MatCheckboxModule,
    MatGridListModule,
    MatRippleModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ClipboardModule,
    MatListModule,
    ScrollingModule,
    MatSnackBarModule,
    MatChipsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatTableModule,
    MatAutocompleteModule,
    TranslateModule.forRoot({
      isolate: false,
      fallbackLang: 'en',
      lang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      })
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LanguageInterceptor, multi: true }
  ],
  exports: [
    CustomErrorComponent,
    BrowserModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatTooltip,
    MatTabsModule,
    MatToolbarModule,
    MatSelectModule,
    TranslateModule,
    HttpClientModule,
    MatExpansionModule,
    CdkDropList,
    CdkDrag,
    MatSliderModule,
    MatCheckboxModule,
    MatGridListModule,
    MatRippleModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ClipboardModule,
    MatListModule,
    ScrollingModule,
    MatSnackBarModule,
    MatChipsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatTableModule,
    MatAutocompleteModule
  ]
}) export class UiCommonModule { }




