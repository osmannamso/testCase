import {Component, Input, OnInit} from '@angular/core';
import {Apartment} from '../../interfaces/apartment';

@Component({
  selector: 'app-apartment-item',
  templateUrl: './apartment-item.component.html',
  styleUrls: ['./apartment-item.component.scss']
})
export class ApartmentItemComponent implements OnInit {
  @Input() apartment: Apartment;
  selectedImg = 0;

  constructor() { }

  ngOnInit() {
    this.apartment.ratingParts = [];
    for (let i = 1; i <= 5; i++) { // Половину с figma не смог взять)
      if (i <= this.apartment.averageRating) {
        this.apartment.ratingParts.push(1);
      } else {
        this.apartment.ratingParts.push(-1);
      }
    }
  }

  nextSlide(): void {
    if (this.selectedImg < this.apartment.images.length - 1) {
      this.selectedImg++;
    } else {
      this.selectedImg = 0;
    }
  }

  prevSlide(): void {
    if (this.selectedImg !== 0) {
      this.selectedImg--;
    } else {
      this.selectedImg = this.apartment.images.length - 1;
    }
  }
}
