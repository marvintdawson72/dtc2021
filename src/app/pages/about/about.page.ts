import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  pageTitle = 'About Page';
  public teamMembers = [
    {
      thumbnailImg: true,
      linkPath: '/categories/allergies',
      linkImage: '../../assets/img/site/med_categories/allergies2.jpg',
      linkText: 'Marvin Dawson'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/alternative-medicine',
      linkImage: '../../assets/img/site/med_categories/alternative_med.jpg',
      linkText: 'Charles Dawson'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/anesthesiology',
      linkImage: '../../assets/img/site/med_categories/anesthesiology.jpeg',
      linkText: 'Demitrius Burgin'
    },
    /*{
      thumbnailImg: true,
      linkPath: '/categories/digestive',
      linkImage: '../../assets/img/site/med_categories/digestive.jpg',
      linkText: 'Colon and Rectal Surgery'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/dental',
      linkImage: './assets/img/site/med_categories/dental2.jpg',
      linkText: 'Dental'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/dermatology',
      linkImage: '../../assets/img/site/med_categories/dermatology.jpeg',
      linkText: 'Dermatology'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/dietitian',
      linkImage: '../../assets/img/site/med_categories/dietary2.jpg',
      linkText: 'Dietitian'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/emergency-medicine',
      linkImage: '../../assets/img/site/med_categories/emergency2.jpg',
      linkText: 'Emergency Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/family-medicine',
      linkImage: '../../assets/img/site/med_categories/family_med.jpg',
      linkText: 'Family Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/internal-medicine',
      linkImage: '../../assets/img/site/med_categories/internal_med.jpg',
      linkText: 'Internal Medicine'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/medical-facilitation',
      linkImage: '../../assets/img/site/med_categories/med_facilitation.jpg',
      linkText: 'Medical Facilitation'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/genetics',
      linkImage: '../../assets/img/site/med_categories/genetics2.jpg',
      linkText: 'Genetics and Genomics'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/cosmetics',
      linkImage: '../../../assets/img/site/doctors/doctor2.jpeg',
      linkText: 'Cosmetic'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/pharmaceutical',
      linkImage: '../../assets/img/site/med_categories/pharmaceutical.jpg',
      linkText: 'Pharmaceutical'
    },
    {
      thumbnailImg: true,
      linkPath: '/categories/ophthalmology',
      linkImage: '../../assets/img/site/med_categories/ophthalmology.jpg',
      linkText: 'Ophthalmology'
    }*/
  ];
  constructor() { }

  ngOnInit() {
  }

}
