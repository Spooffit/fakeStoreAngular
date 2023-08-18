import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HeaderComponent} from "./components/header/header.component";
import { ProductComponent } from './components/product/product.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {GlobalErrorComponent} from "./components/global-error/global-error.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    AboutPageComponent,
    FilterProductsPipe,
    GlobalErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    ProductComponent,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ProductPageComponent},
      {path: 'about', component: AboutPageComponent},
    ]),
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
