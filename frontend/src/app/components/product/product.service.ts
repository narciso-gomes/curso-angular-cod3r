import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Product} from "./product.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    baseUrl = 'http://localhost:3001/products'

    constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {
    }

    showMessage(msg: string) {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
        })
    }

    create(product: Product): Observable<Product> {
        return this.httpClient.post<Product>(this.baseUrl, product)
    }

    read(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.baseUrl)
    }

    readById(id: string): Observable<Product> {
        return this.httpClient.get<Product>(`${this.baseUrl}/${id}`)
    }

    update(product: Product): Observable<Product>{
        return this.httpClient.put<Product>(this.baseUrl, product)
    }
}
