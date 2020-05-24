import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'corona-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent implements OnInit, OnDestroy {
  appTitle = 'Corona Tracker';
  icon: string;
  isNightMode: boolean;

  constructor(private themeService: ThemeService) {
    this.isNightMode = false;
  }

  ngOnInit(): void {
    this.themeService.setLightTheme();
    this.toggleDarkMode();
  }

  toggleDarkMode(): void {
    const isLight = 'light';
    const isDark = 'dark';

    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
      this.themeService.subject.next(isLight);
    } else {
      this.themeService.setDarkTheme();
      this.themeService.subject.next(isDark);
    }

    this.setIcon();
  }

  setIcon(): void {
    const sunnyIcon = 'wb_sunny';
    const darkIcon = 'nights_stay';

    this.isNightMode = !this.isNightMode;
    this.icon = this.isNightMode ? sunnyIcon : darkIcon;
  }

  ngOnDestroy(): void {
    this.themeService.subject.unsubscribe();
  }
}
