import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
   }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);

    this.httpClientService.get<Product[]>({
      controller:"products"
    }).subscribe(data=>console.log(data));

    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name:"Kalem",
    //   stock:100,
    //   price:15
    // }).subscribe();

    // this.httpClientService.put({
    //   controller:"products"
    // },{
    //   id:"9c30a484-7348-418f-9b85-91bed7f2eb22",
    //   name:"Renkli Kalem",
    //   stock : 1500,
    //   print:5.50
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller:"products"
    // },"9c30a484-7348-418f-9b85-91bed7f2eb22")
    // .subscribe();

    this.httpClientService.get({
      fullEndPoint:"https://jsonplaceholder.typicode.com/posts",
    }).subscribe(data=>console.log(data));
  }

}
