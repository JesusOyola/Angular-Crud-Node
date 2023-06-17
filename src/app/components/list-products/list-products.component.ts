import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
=======
import { Product } from 'src/app/interfaces/product';
>>>>>>> 1f8f509 (Generacion de rutas, vistas y formulario en el frontend)

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
<<<<<<< HEAD
  listProducts: Product[] = [];
  loading: boolean = false;

  constructor(private _productService: ProductService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this._productService.getListProducts().subscribe((data) => {
      this.listProducts = data;
      this.loading = false;
    });
  }

  removeProduct(id: number) {
    this.loading = true;
    this._productService.deleteProduct(id).subscribe(() => {
      this.getProducts();
      this.toastr.warning('El producto fué eliminado exitosamente!', 'Producto Eliminado')
    });
  }
=======
  listProducts: Product[] = [
    {
      id: 1,
      name: 'Coca cola',
      description: ' Bebida con azucar',
      price: 4,
      stock: 200,
    },
    {
      id: 2,
      name: 'Corona',
      description: ' Bebida con alcohol',
      price: 5,
      stock: 300,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
>>>>>>> 1f8f509 (Generacion de rutas, vistas y formulario en el frontend)
}
