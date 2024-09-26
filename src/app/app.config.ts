import {
  ApplicationConfig,
  importProvidersFrom,
  LOCALE_ID,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    provideAnimations(),
    importProvidersFrom(
      HttpClientModule,
    ),
    provideFirestore(() => getFirestore()),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideHttpClient(),
    importProvidersFrom(
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }),
      FlatpickrModule.forRoot()
    ),
    provideAnimationsAsync(),
  ],
};
