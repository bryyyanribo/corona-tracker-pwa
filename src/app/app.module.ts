import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { MDCModule } from './utils/mdc.module';
import { LeafletComponent } from './components/leaflet/leaflet.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardDetailComponent,
    LeafletComponent,
    AppBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MDCModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
