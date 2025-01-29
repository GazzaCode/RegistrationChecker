import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './VehicleListComponent.component';

const routes: Routes = [
    { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
    { path: 'vehicles', component: VehicleListComponent },
];

@NgModule({
    declarations: [
        VehicleListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [VehicleListComponent]
})
export class AppModule { }