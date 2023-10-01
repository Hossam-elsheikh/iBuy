import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  id: number = 0;
  product: Iproduct | undefined;
  products: Iproduct[] = [];
  productsIds: number[] = [];
  currentIndex: number = 0;
  // product = this.productsList.find((p)=> p.id == +this.id) || {name:"test"}
  constructor(
    private prdServ: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.product = undefined;
  }
  ngOnInit(): void {
    let prdId = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = prdId ? +prdId : 0;
    // this.product = this.prdServ.getProductDetails(this.id)

    // this.productsIds = this.prdServ.productsList.map((p)=> p.id)

    this.prdServ.getProductById(prdId).subscribe({
      next: (prod) => {
        this.product = prod;
        console.log(prod);
      },
      error: (err) => {
        console.log(err.message);
      },
    });
    this.prdServ.getAllProducts().subscribe({
      next: (prods) => {
        this.productsIds = prods.map((p) => p.id);
      },
      error: (err) => {
        console.log(err.message);
      },
    });
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id') ? Number(paramMap.get('id')) : 0;

      this.prdServ.getProductById(this.id).subscribe((data)=>{
        if(data){
          this.product = data;
        }else{
          this.router.navigate(['**']);
        }
      });
    });
  }

  prevHandler() {
    this.currentIndex = this.productsIds.indexOf(this.id);
    this.router.navigate(['/product', this.productsIds[--this.currentIndex]]);
  }

  nextHandler() {
    this.currentIndex = this.productsIds.indexOf(this.id);
    this.router.navigate(['/product', this.productsIds[++this.currentIndex]]);
  }
}
