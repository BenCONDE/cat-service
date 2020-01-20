import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host : string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {
  }

  public getProducts(page:number,size:number) {
    return this.httpClient.get(this.host + "/produits?page=" + page + "&size=" +size);
  }
  public onCreateProducts(p){

    return this.httpClient.post("http://localhost:8080/produits" + p,{observer : "response"});
  }

  public getProductsByKeyword(mc:string,page:number,size:number) {
    return this.httpClient.get(this.host + "/produits/search/byDesignationPage?mc=" + mc + "&page =" + page +"&size=" +size);
  }


  public deleteRessource(url) {
    return this.httpClient.delete(url);
  }
  public saveRessource(url,data:Observable<Product>) {
    return this.httpClient.post(url,data);
  }
  public updateRessource(data){
    return this.httpClient.put(this.host ,this.updateRessource(data));
  }
}
