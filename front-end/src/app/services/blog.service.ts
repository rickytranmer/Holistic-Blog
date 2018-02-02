import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class BlogService {

  baseUrl = 'http://localhost:3000';

  constructor( private http: Http ) { }

  getAllBlogs() {
    // console.log('hit getallblog function');
		return this.http.get(`${this.baseUrl}/api/blogs`);
	}



}

