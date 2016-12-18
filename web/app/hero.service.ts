import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Hero } from './hero';
import { Configuration } from './app.constants'
@Injectable()
export class HeroService {

	private heroesUrl: string;
	private headers: Headers;

	constructor(private http: Http, configuration: Configuration) {
		this.heroesUrl = configuration.ServerWithApiUrl + '/heroes';
		this.headers = new Headers();
		this.headers.append('Content-Type', 'application/json');
	}

	getHeroes(): Observable<Hero[]> {
		console.log(">>>>>> getHeroes :" + this.heroesUrl);
		return this.http.get(this.heroesUrl)
			.map((res: Response) => <Hero[]>res.json())
			.catch(this.handleError);
	}
	getHero(id: String): Observable<Hero> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.get(url)
			.map((res: Response) => <Hero>res.json())
			.catch(this.handleError);
	}
	delete(id: String): Promise<void> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.delete(url, { headers: this.headers })
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}
	create(name: string): Observable<Hero> {
		return this.http
			.post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
			.map((response: Response) => <Hero>response.json())
			.catch(this.handleError);
	}
	update(hero: Hero): Promise<Hero> {
		const url = `${this.heroesUrl}/${hero._id}`;
		return this.http
			.put(url, JSON.stringify(hero), { headers: this.headers })
			.toPromise()
			.then(() => hero)
			.catch(this.handleError);
	}
	search(term: string): Observable<Hero[]> {
		const url = `${this.heroesUrl}/?name=${term}`;
		return this.http
			.get(url)
			.map((r: Response) => r.json().data as Hero[]);
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred in HeroService : ', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}