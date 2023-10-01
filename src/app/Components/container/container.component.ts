import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  listFilter: string =''
  categories: Icategory[] = []
  cart:Iproduct[]=[]
  total: number =0
  constructor(private productsServ : ProductsService) { }
  addToCart(product: Iproduct){
    let isThere = this.cart.find((prd)=>prd.id===product.id)
    if(isThere) {
      isThere.quantity += 1
      this.total += isThere.price
    } else{
      this.cart.push(product);
      this.total += product.price
    }
  }

  ngOnInit():void {
    this.productsServ.getAllCategories().subscribe({
      next:(res)=>{
        this.categories = res
      },
      error:(err)=>{
        console.log(err.message);
        
      }
    })
  }

}
