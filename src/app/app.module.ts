import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { RouterModule } from '@angular/router'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent,canActivate:[AuthGuardService] },
      { path: 'shopping-cart', component: ShoppingCartComponent ,canActivate:[AuthGuardService] },
      { path: 'check-out', component: CheckOutComponent , canActivate:[AuthGuardService]},
      { path: 'order-success', component: OrderSuccessComponent ,canActivate:[AuthGuardService]},
      { path: 'my/orders', component: MyOrdersComponent ,canActivate:[AuthGuardService]},
      { path: 'login', component: LoginComponent,canActivate:[AuthGuardService] },
      { path: 'admin/products',
       component: AdminProductsComponent 
      ,canActivate:[AuthGuardService,AdminAuthGuardService]},
      { path: 'admin/products/new',
       component: ProductFormComponent 
      ,canActivate:[AuthGuardService,AdminAuthGuardService]},
      { path: 'admin/products/:id',
      component: ProductFormComponent 
     ,canActivate:[AuthGuardService,AdminAuthGuardService]},
      { path: 'admin/orders', component: AdminOrdersComponent,canActivate:[AuthGuardService,AdminAuthGuardService] }
    
      
    ])    
  ],
  providers: [AuthService,
  AuthGuardService,UserService, AdminAuthGuardService, CategoryService
, ProductService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
