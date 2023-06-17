import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
=======
import { Product } from 'src/app/interfaces/product';
>>>>>>> 1f8f509 (Generacion de rutas, vistas y formulario en el frontend)

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css'],
})
export class AddEditProductComponent implements OnInit {
  form: FormGroup;
<<<<<<< HEAD
  loading: boolean = false;
  paramId!: number;
  operacion: string = 'Agregar ';

  constructor(
    private fb: FormBuilder,
    private _productService: ProductService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
=======
  constructor(private fb: FormBuilder) {
>>>>>>> 1f8f509 (Generacion de rutas, vistas y formulario en el frontend)
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required],
    });
<<<<<<< HEAD
    this.paramId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.paramId !== 0) {
      this.operacion = 'Editar ';
      this.getProductById(this.paramId);
    }
  }

  getProductById(id: number) {
    this.loading = true;
    this._productService.getProduct(id).subscribe((data: Product) => {
      console.log(data);
      this.loading = false;
      this.form.setValue({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
      });
    });
  }

  
=======
  }

  ngOnInit(): void {}
>>>>>>> 1f8f509 (Generacion de rutas, vistas y formulario en el frontend)

  addProduct() {
    /* console.log(this.form.value.name);
    console.log(this.form.get('name')?.value); */

    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock,
    };
<<<<<<< HEAD
    this.loading = true;
    if (this.paramId !== 0) {
      //Editar producto
      
      this._productService.updateProduct(this.paramId, product).subscribe(()=>{
        this.toastr.info(`Producto ${product.name} modificado exitosamente.`, 'Producto Actualizado');
        this.loading = false;
        this.form.reset();
        this.router.navigate(['/products']);
      })

    }else{
      //Agregar producto
      this._productService.saveProduct(product).subscribe(() => {
        this.toastr.success(`Producto ${product.name} agregado exitosamente.`, 'Producto Nuevo');
        this.loading = false;
        this.form.reset();
        this.router.navigate(['/products']);
      });
    }

   
=======
    console.log(product)
>>>>>>> 1f8f509 (Generacion de rutas, vistas y formulario en el frontend)
  }
}
