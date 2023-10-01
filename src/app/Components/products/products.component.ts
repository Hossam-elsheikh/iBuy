import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { AdminService } from 'src/app/Services/admin.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  filteredProducts : Iproduct[]= []
  @Input() set productsFilter(value:string){
    this.filteredProducts = this.performFilter(value);
  }
  constructor(private ProductsServ:ProductsService,private router:Router,private adminServ:AdminService) { 
    
  }
  
  ngOnInit():void {
    this.ProductsServ.getAllProducts().subscribe({
      next:(res)=>{
        this.filteredProducts = res
      },
      error:(err)=>{
        console.log(err.message);
        
      }
    })
  }
  @Output() addPrdEvent: EventEmitter<Iproduct> = new EventEmitter<Iproduct>();
  addToCart (product: Iproduct){
    this.addPrdEvent.emit(product);
  }
  navigateToProduct(id:number){    
    this.router.navigate(['/product',id])
    
  }
  navigateToEditProduct(id:number){
    this.router.navigate(['/admin/insertproduct',id])
  }
  performFilter(filterValue: string): Iproduct[] {
    if(!filterValue){ return this.filteredProducts}
    return this.filteredProducts.filter((p)=> p.categoryID == +filterValue)
  }

  deleteProduct(id:number){
    this.adminServ.deleteProduct(id).subscribe({
      next:(data)=>{
        this.router.navigate(['/products'])
      }
    })
  }

}
