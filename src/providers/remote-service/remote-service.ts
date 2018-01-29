//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import { HttpHeaders } from '@angular/common/http';
//import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
let apiUrl = 'http://localhost:6162/';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

 /* constructor(public http: HttpClient) {
    console.log('Hello RemoteServiceProvider Provider');
  } */
  constructor(public http: Http) {}
  
 login(credentials) {
    
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl+'login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
    
  }

  register(data) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization','Bearer ZpMhRv1mliisece4D1C2GG2cehVWJs8BWfwZo0qSZELzDs1vmIKMS9siBxvA2ZwuwvUd2AiWbCWUqlGJOwlXX4DKZ1jmJxG3a2eJ-U7Z3OzmmNiKUngbjpEjN9yq103_U85sOBonuyjZFTKFMyOp5L3ZpBBJd-t06u348owxQlvyWEEKPFF9Hx9vUCa0S2bDBsTrIRfTyViGfQWXLNjnZ1JrMJ3s3YKB_VawVyudT2Q');
        console.log(data);
        this.http.post(apiUrl+'api/Kullanici', data, {headers: headers})
          .subscribe(res => {
            resolve(res.json());
            console.log(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('X-Auth-Token', localStorage.getItem('token'));

        this.http.post(apiUrl+'logout', {}, {headers: headers})
          .subscribe(res => {
            localStorage.clear();
          }, (err) => {
            reject(err);
          });
    });
  } 
}
