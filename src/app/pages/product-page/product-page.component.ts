import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  // products: IProduct[] = []
  loading = false
  // products$: Observable<IProduct[]>
  term = ''

  constructor(
    public productsService: ProductsService,
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
