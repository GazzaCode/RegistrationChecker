import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Vehicle {
  id: number;
  Make: string;
  Model: string;
  RegistrationExpiry: string;
}

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Vehicle Registrations</h2>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Registration Expiry</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let vehicle of vehicles">
            <td>{{ vehicle.Make }}</td>
            <td>{{ vehicle.Model }}</td>
            <td>{{ vehicle.RegistrationExpiry | date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [
    `
      .container { padding: 20px; }
      table { width: 100%; border-collapse: collapse; }
      th, td { padding: 10px; border: 1px solid #ddd; }
      .expired { background-color: #ffcccc; }
    `
  ]
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Vehicle[]>('http://localhost:5100/api/cars')
      .subscribe(data => {
        this.vehicles = data;
      }, error => {
        console.error('Error fetching vehicle data', error);
      });
  }
}