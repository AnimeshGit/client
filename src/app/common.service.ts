import { Injectable } from '@angular/core';
import { BaseURL } from './BaseURL';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CommonService {
  Api_url = '';
  
  constructor(private http: Http) { 
    this.Api_url = BaseURL.hostPath;
  } 

  public getCards(params) {
    return this.http.post(this.Api_url + '/getCards', params).map(data => data.json());
  }

  public withdrawAmount(params) {
    return this.http.post(this.Api_url + '/withdrawAmount', params).map(data => data.json());
  }

  public getAvailBalance(params){
    return this.http.get(this.Api_url + '/getAvailBalance/'+params).map(data => data.json());
  }

}
