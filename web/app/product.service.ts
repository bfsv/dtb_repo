import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Product } from './product';
import { Configuration } from './app.constants'
@Injectable()
export class ProductService {

	private productsUrl: string;
	private headers: Headers;

	constructor(private http: Http, configuration: Configuration) {
		this.productsUrl = configuration.Server + 'produits/pub';
		this.headers = new Headers();
		this.headers.append('Content-Type', 'application/json');
	}

	getProducts(): Observable<Product[]> {
		console.log(">>>>>> getProdcuts :" + this.productsUrl);
		return this.http.get(this.productsUrl)
			.map((res: Response) => <Product[]>res.json())
			.catch(this.handleError);
	}

	search(term: String[]): Observable<Product[]> {
		const url = `${this.productsUrl}/search/${term}`;
		return this.http
			.post(url, JSON.stringify(term), { headers: this.headers })
			.map((res: Response) => <Product[]>res.json()).catch(this.handleError);
	}

	getProductsCategories(): Observable<String[]> {
		console.log(">>>>>> Get Products Categories :" + this.productsUrl);
		const url = `${this.productsUrl}/categories`;
		return this.http.get(url)
			.map((res: Response) => <String[]>res.json())
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred in ProductService : ', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}