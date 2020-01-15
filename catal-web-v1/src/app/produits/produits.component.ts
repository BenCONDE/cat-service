import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  public produits:any;
  constructor(private catalogueService:CatalogueService) { }

  ngOnInit() {
  }

  onGetProducts() {
    this.catalogueService.getProducts().subscribe(
      data => {
        this.produits = data;
      },err=>{
        console.log("err");
      })
  }


  onChercher(form: any) {
    this.catalogueService.getProductsByKeyword(form.keyword).subscribe(
      data => {
        this.produits = data;
      },err=>{
        console.log("err");
      })

  }

  onDeleteProducts(p){
    alert ("sure ?");
this.catalogueService.deleteRessource(p._links.self.href).subscribe(
  data=>{
    this.onGetProducts();
  },error => {
    console.log(error);
  }
)

  }
}
