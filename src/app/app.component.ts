import { NavbarComponent } from './navbar/navbar.component';
import { Component, AfterViewInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';

declare var bootstrap: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterOutlet,
    HeroSectionComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
   
    if (typeof bootstrap !== 'undefined') {
      new bootstrap.ScrollSpy(document.body, {
        target: '#navbar',
        offset: 74
      });
    }
  }
}
