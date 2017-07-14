import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product-service';
import { HomeComponent } from './home/home.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ProductListComponent,
    HomeComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
          { path: 'home', component: HomeComponent },
          { path: 'product-list', component: ProductListComponent },
          { path: 'product-add', component: ProductAddComponent },
          { path: 'product-edit', component: ProductEditComponent },
          { path: 'product-details', component: ProductDetailsComponent },
          { path: '**', redirectTo: 'home' }
      ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
