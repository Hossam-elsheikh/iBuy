import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { AdminService } from 'src/app/Services/admin.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  product: Iproduct = {} as Iproduct;
  prdId: number = 0;
  constructor(
    private adminSrv: AdminService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private prdServ: ProductsService
  ) {}

  addProduct() {
    if(this.prdId === 0){
      this.adminSrv.addProduct(this.product).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/products']);
        },
      });
    }
    else {
      this.adminSrv.editProduct(this.product).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/products']);
        },
      })
    }
    
  }
  ngOnInit(): void {
    let id = this.activateRoute.snapshot.paramMap.get('id');
    this.prdId = id ? +id : 0;

    this.prdServ.getProductById(id).subscribe({
      next: (prod) => {
        this.product = prod;
        console.log(prod);
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
}
