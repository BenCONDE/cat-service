import { Component, OnInit} from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public produits:any;
  private router: any;
  constructor(private catalogueService:CatalogueService) { }

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
       this.onSaveProduct(data);
      },error => {
        console.log(error);
      }
    )

  }
}
