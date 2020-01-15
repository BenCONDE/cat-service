import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host : string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {
  }

  public getProducts() {
    return this.httpClient.get(this.host + "/produits");
  }
  public onCreateProducts(p){

    return this.httpClient.post("http://localhost:8080/produits" + p,{observer : "response"});
  }

  public getProductsByKeyword(mc:string) {
    return this.httpClient.get(this.host + "/produits/search/byDesignationPage?mc=" + mc);
  }


  public deleteRessource(url) {
    return this.httpClient.delete(url);
  }
  public saveRessource(url,data) {
    return this.httpClient.post(url,data);
  }
}
