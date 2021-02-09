import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolUiModule } from '@toolsy/tool-ui';
import { ToolOverlayModule } from '@toolsy/tool-overlay';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { LogoComponent } from './components/logo/logo.component';
import { ToolDialogComponent } from './components/tool-dialog/tool-dialog.component';
import { OverlayscrollbarsModule } from "overlayscrollbars-ngx";
import { AngularStickyThingsModule } from '@w11k/angular-sticky-things';
@NgModule({
  declarations: [AppComponent, SearchResultsComponent, HomeComponent, CategoriesComponent, LogoComponent, ToolDialogComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, AppRoutingModule, ToolUiModule, AngularStickyThingsModule, ToolOverlayModule.forRoot(), AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule, OverlayscrollbarsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
