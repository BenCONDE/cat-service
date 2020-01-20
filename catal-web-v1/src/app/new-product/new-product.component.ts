import { Component, OnInit} from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {Router} from "@angular/router";
import {Product} from "../models/Product";
import {observable} from "rxjs";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public produits:any;
  private currentProduct: Object;
  private mode: number =1;

  constructor(private catalogueService:CatalogueService,private router:Router) { }

  ngOnInit() {
  }

  onCreateProducts(){
    this.catalogueService.onCreateProducts(this.produits).subscribe(
      data=>{
        this.produits = data;
      },err=>{
        console.log("err")
      }
    )

  }

  onSaveProduct(data:any) {
    this.catalogueService.saveRessource(this.catalogueService.host + "/produits",data).subscribe(
      data=>{
        //this.router.navigateByUrl("/")
        this.currentProduct = data;
        this.mode = 2;
      },error => {
        console.log(error);
      }
    )

  }

  onNewProduct() {
    this.mode=1;
  }
}
