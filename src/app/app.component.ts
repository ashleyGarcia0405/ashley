import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { PageSeo } from '../data/site-meta';
import { SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DarkModeToggleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.applySeo());

    this.applySeo();
  }

  private applySeo(): void {
    const leaf = this.getLeafRoute(this.route);
    const seo = leaf.snapshot.data['seo'] as PageSeo | undefined;
    const path = this.router.url.split('?')[0].split('#')[0];
    this.seo.update(seo, path);
  }

  private getLeafRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
