import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContainerComponent } from './Components/container/container.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductComponent } from './Components/product/product.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { adminGuard } from './Guards/admin.guard';

const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch: 'full'},
  {path:'home', component: ContainerComponent},
  {path:'products', component: ContainerComponent},
  {path:'admin/insertproduct',canActivate:[adminGuard] ,component: NewProductComponent},
  {path:'admin/insertproduct/:id',canActivate:[adminGuard] , component: NewProductComponent},
  {path:'about', component: AboutUsComponent},
  {path:'product/:id', component: ProductComponent},
  {
    path: 'user', 
    loadChildren: () => import('./Components/user/user/user.module').then(m => m.UserModule),
  },
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
