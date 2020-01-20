import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  public produits : any;
  public size : number = 5;
  public currentPage : number = 0;
  public totalPages : number ;
  public pages : Array<number>;

  constructor(private catalogueService:CatalogueService,private router:Router) { }

  ngOnInit() {
  }

  onGetProducts() {
    this.catalogueService.getProducts(this.currentPage,this.size).subscribe(
      data => {
        this.totalPages = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.produits = data;
      },err=>{
        console.log("err");
      })
  }

  onChercher(form: any) {
    this.catalogueService.getProductsByKeyword(form.keyword,this.currentPage,this.size).subscribe(
      data => {
        this.totalPages = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.produits = data;
      },err=>{
        console.log("err");
      })

  }

  onDeleteProduct(p){
    alert ("sure ?");
this.catalogueService.deleteRessource(p._links.self.href).subscribe(
  data=>{
   this.onGetProducts();
  },error => {
    console.log(error);
  }
)

  }


  onPageProduct(i: number) {
    this.currentPage = i;
    this.onGetProducts();
  }

  onEditProduct(p: any) {
    this.router.navigateByUrl("/edit-product/" + p.id);
    //this.catalogueService.updateRessource(p);
  }
}
