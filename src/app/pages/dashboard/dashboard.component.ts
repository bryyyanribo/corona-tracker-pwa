import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoronaApiService } from 'src/app/services/corona-api/corona-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  cardData: any;
  countryData: any;
  constructor(private apiService: CoronaApiService) {}

  ngOnInit(): void {
    this.getCoronaBriefData();
    this.getCoronaLatestData();
  }

  getCoronaBriefData(): void {
    this.subscription = this.apiService
      .getCoronaBriefData()
      .subscribe((data) => {
        this.cardData = data;
      });
  }

  getCoronaLatestData(): void {
    this.subscription = this.apiService
      .getCoronaLatestData()
      .subscribe((data) => {
        this.countryData = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
