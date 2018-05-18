import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductContainerComponent} from './components/products/product-container/product-container.component';
import {ProductDetailsComponent} from './components/products/product-details/product-details.component';
import {LoginComponent} from './components/user/login/login.component';
import {InformationComponent} from './components/user/information/information.component';
import {OrdersComponent} from './components/user/orders/orders.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductContainerComponent
  },
  {
    path: 'producto/:id',
    children: [
      {path: 'detalles', component: ProductDetailsComponent},
      {path: '', redirectTo: 'detalles', pathMatch: 'full'}
    ]
  },
  {
    path: 'details',
    component: ProductDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'usuario/:id',
    children: [
      {path: 'informacion', component: InformationComponent},
      {path: 'pedidos', component: OrdersComponent},
      {path: '', redirectTo: 'informacion', pathMatch: 'full'}
    ]
  },
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
