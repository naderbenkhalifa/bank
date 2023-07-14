/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ChequeBook } from '../models/cheque-book';
@Injectable({
  providedIn: 'root',
})
class ChequeBooksService extends __BaseService {
  static readonly ChequeBookRequestFalsePath = '/ICINBank/admins/confirmChequeFalse/{id}';
  static readonly ChequeBookRequestTruePath = '/ICINBank/admins/confirmChequeTrue/{id}';
  static readonly AllChequeBooksPath = '/ICINBank/chequeBooks/all';
  static readonly createPath = '/ICINBank/chequeBooks/create';
  static readonly findByIdPath = '/ICINBank/chequeBooks/find/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * refuse a cheque-book by ID
   *
   * This method allows you to refuse a cheque-book by its ID
   * @param id undefined
   */
  ChequeBookRequestFalseResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/admins/confirmChequeFalse/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * refuse a cheque-book by ID
   *
   * This method allows you to refuse a cheque-book by its ID
   * @param id undefined
   */
  ChequeBookRequestFalse(id: number): __Observable<null> {
    return this.ChequeBookRequestFalseResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * confirm a  cheque-book by ID
   *
   * This method allows you to confirm a cheque-book book by its ID
   * @param id undefined
   */
  ChequeBookRequestTrueResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/admins/confirmChequeTrue/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * confirm a  cheque-book by ID
   *
   * This method allows you to confirm a cheque-book book by its ID
   * @param id undefined
   */
  ChequeBookRequestTrue(id: number): __Observable<null> {
    return this.ChequeBookRequestTrueResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns the list of Cheque-books
   *
   * this method allows you to search and return the list of Cheque-books  that existin the DB
   * @return The list of Cheque-books / An empty list
   */
  AllChequeBooksResponse(): __Observable<__StrictHttpResponse<Array<ChequeBook>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/chequeBooks/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ChequeBook>>;
      })
    );
  }
  /**
   * Returns the list of Cheque-books
   *
   * this method allows you to search and return the list of Cheque-books  that existin the DB
   * @return The list of Cheque-books / An empty list
   */
  AllChequeBooks(): __Observable<Array<ChequeBook>> {
    return this.AllChequeBooksResponse().pipe(
      __map(_r => _r.body as Array<ChequeBook>)
    );
  }

  /**
   * create a cheque-book
   *
   * This method is used to create a cheque-book
   * @param body undefined
   * @return The Cheque-book object is created
   */
  createResponse(body?: ChequeBook): __Observable<__StrictHttpResponse<ChequeBook>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ICINBank/chequeBooks/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChequeBook>;
      })
    );
  }
  /**
   * create a cheque-book
   *
   * This method is used to create a cheque-book
   * @param body undefined
   * @return The Cheque-book object is created
   */
  create(body?: ChequeBook): __Observable<ChequeBook> {
    return this.createResponse(body).pipe(
      __map(_r => _r.body as ChequeBook)
    );
  }

  /**
   * Search a cheque-book by ID
   *
   * This method allows you to search for a cheque-book by its ID
   * @param id undefined
   * @return cheque-book was found in the database
   */
  findByIdResponse(id: number): __Observable<__StrictHttpResponse<ChequeBook>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/chequeBooks/find/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChequeBook>;
      })
    );
  }
  /**
   * Search a cheque-book by ID
   *
   * This method allows you to search for a cheque-book by its ID
   * @param id undefined
   * @return cheque-book was found in the database
   */
  findById(id: number): __Observable<ChequeBook> {
    return this.findByIdResponse(id).pipe(
      __map(_r => _r.body as ChequeBook)
    );
  }
}

module ChequeBooksService {
}

export { ChequeBooksService }
