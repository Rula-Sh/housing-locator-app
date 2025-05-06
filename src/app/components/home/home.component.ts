import { Component } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { House } from '../../models/house';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private housingService: HousingService, private router: Router) {}
  houses: House[] = [
    {
      id: 0,
      name: '0',
      city: '0',
      state: '0',
      units: 0,
      wifi: true,
      laundry: false,
      image: '',
    },
  ];

  ngOnInit() {
    this.housingService.getAllHousingLocations().subscribe({
      next: (value) => {
        this.houses = value;
        console.log(value);
        console.log('Houses Loaded');
      },
      error: (err) => {
        console.log(`Error Loading Houses:  ${err}`);
      },
    });
  }

  viewHouse(id: number) {
    this.router.navigate([`locations/${id}`]);
  }
}
