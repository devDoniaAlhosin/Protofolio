import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      imgSrc: '../../assets/img/p-4.png',
      title: 'TimeZone Template',
      demoLink: 'https://devdoniaalhosin.github.io/TimeZone/',
    },
    {
      imgSrc: '../../assets/img/p-5.png',
      title: 'Ecommerce VanillaJS Project',
      demoLink:
        'https://devdoniaalhosin.github.io/Javascript_Project/products.html',
    },
    {
      imgSrc: '../../assets/img/p-3.png',
      title: 'Engage Template (HTML & CSS)',
      demoLink: 'https://devdoniaalhosin.github.io/engageProject/',
    },
  ];
}
