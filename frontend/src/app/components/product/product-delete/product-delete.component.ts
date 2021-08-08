import {Component, OnInit} from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-product-delete',
    templateUrl: './product-delete.component.html',
    styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

    product: Product = {id: 0, name: '', price: 0}

    constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const id: any = this.route.snapshot.paramMap.get('id');
        this.productService.readById(id).subscribe(
            product => {
                this.product = product
            }
        )
    }


    deleteProduct() {
        this.productService.delete(this.product.id).subscribe(
            response => {
                this.productService.showMessage('Produto apagado com sucesso!')
                this.router.navigate(['/products'])
            }
        )
    }

    cancel() {
        this.router.navigate(['/products'])
    }
}
