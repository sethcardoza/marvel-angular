import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MarvelService implements OnInit {

  API_KEY = 'fbf4d857b72ff92e788de34cba928a37';
  baseUrl = 'http://gateway.marvel.com';
  basePath = '/v1/public/';

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  buildUrl(path) {
    let url = '';

    url = this.baseUrl +
      this.basePath +
      path;

    return url;
  }

  getParams(additionalParams) {
    const defaultParams = {
      apikey: this.API_KEY
    };
    const params = {};

    _.merge(params, defaultParams, additionalParams);

    return params;
  }

  getList(type, additionalParams) {
    let params;
    const url = this.buildUrl(type);

    params = this.getParams(additionalParams);

    console.log(type);
    console.log(url);
    return this.http.get(url, {params});
  }

  getItem(type, id) {
    let params;
    let url = this.buildUrl(type + '/' + id);

    params = this.getParams({});

    return this.http.get(url, {params});
  }
}
