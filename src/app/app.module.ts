import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavComponent } from './Components/nav/nav.component';
import { ContainerComponent } from './Components/container/container.component';
import { ProductsComponent } from './Components/products/products.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './Components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';

=======
import { MadraComponent } from './mahmoud/madra/madra.component';
>>>>>>> origin/mahmoud

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavComponent,
    ContainerComponent,
    ProductsComponent,
    AboutUsComponent,
    NotFoundComponent,
    ProductComponent,
    NewProductComponent,
    ContactUsComponent,
=======
    MadraComponent
>>>>>>> origin/mahmoud
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
