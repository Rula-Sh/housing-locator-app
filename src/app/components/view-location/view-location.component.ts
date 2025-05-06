import { Component } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { House } from '../../models/house';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-location',
  imports: [CommonModule, RouterModule],
  templateUrl: './view-location.component.html',
  styleUrl: './view-location.component.scss',
})
export class ViewLocationComponent {
  house: House = {
    id: 0,
    name: '0',
    city: '0',
    state: '0',
    units: 0,
    wifi: true,
    laundry: false,
    image: '',
  };

  constructor(
    private router: ActivatedRoute,
    private housingService: HousingService
  ) {}
  ngOnInit() {
    var userId = Number(this.router.snapshot.paramMap.get('id'));
    console.log(userId);

    this.housingService.getHousingLocationById(userId).subscribe({
      next: (value) => {
        this.house = value;
        console.log('House Retrieved');
      },
      error: (err) => {
        console.log('Error Viewing House:' + err);
      },
    });
  }
}
