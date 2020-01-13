import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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


}
