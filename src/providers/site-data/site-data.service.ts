import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {

  siteName = 'Dawson Technical Consulting';
  siteFooterName = 'Dawson Technical Consulting LLC';
  siteTagLine = 'Find A Local Physician';
  siteLogo = './assets/img/logo/medeviews_logo.jpg';
  siteKeywords = 'Mobile App, Mobile,' +
    'Marvin Dawson, Dawson Technical Consulting';
  year: number = new Date().getFullYear();

  constructor() {
  }
}
