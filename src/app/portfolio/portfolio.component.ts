import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  // public images$: Observable<any> = new Observable<any>();
  public images: any[] = [];
  public apiUrl = '';

  private page = 0;
  private subscription: Subscription = new Subscription();

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.apiUrl = this.api.apiUrl;
    this.loadImages();
  }

  loadImages(): void {
    console.log('page', this.page);
    this.subscription = this.api.getImages(this.page).subscribe(images => {
      images.forEach((image: any) => this.images.push(image));
    });
    this.page += 21;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
