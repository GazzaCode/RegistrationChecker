import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { VehicleListComponent } from './VehicleListComponent.component';

const routes: Routes = [
    { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
    { path: 'vehicles', component: VehicleListComponent },
];

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideZoneChangeDetection()
    ]
};

