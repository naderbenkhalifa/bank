/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Transaction } from '../models/transaction';
@Injectable({
  providedIn: 'root',
})
class TransactionsService extends __BaseService {
  static readonly retrieveAccountTransactionsPath = '/ICINBank/accounts/{accountId}/transactions';
  static readonly createTransactionPath = '/ICINBank/transactions/create';
  static readonly transferMoneyPath = '/ICINBank/transfer/create';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * return List of transactions for a given bank account
   *
   * This method allows to  return List of transactions for a given bank account in the DB
   * @param accountId undefined
   * @return The list of transactions / An empty list
   */
  retrieveAccountTransactionsResponse(accountId: number): __Observable<__StrictHttpResponse<Array<Transaction>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/accounts/${encodeURIComponent(String(accountId))}/transactions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Transaction>>;
      })
    );
  }
  /**
   * return List of transactions for a given bank account
   *
   * This method allows to  return List of transactions for a given bank account in the DB
   * @param accountId undefined
   * @return The list of transactions / An empty list
   */
  retrieveAccountTransactions(accountId: number): __Observable<Array<Transaction>> {
    return this.retrieveAccountTransactionsResponse(accountId).pipe(
      __map(_r => _r.body as Array<Transaction>)
    );
  }

  /**
   * register a trnsaction
   *
   * This method allows you to register a transaction
   * @param body undefined
   * @return The transaction object is created
   */
  createTransactionResponse(body?: Transaction): __Observable<__StrictHttpResponse<Transaction>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ICINBank/transactions/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Transaction>;
      })
    );
  }
  /**
   * register a trnsaction
   *
   * This method allows you to register a transaction
   * @param body undefined
   * @return The transaction object is created
   */
  createTransaction(body?: Transaction): __Observable<Transaction> {
    return this.createTransactionResponse(body).pipe(
      __map(_r => _r.body as Transaction)
    );
  }

  /**
   * register a transfer
   *
   * This method allows you to register a transfer
   * @param body undefined
   * @return The transfer object is created
   */
  transferMoneyResponse(body?: Transaction): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ICINBank/transfer/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * register a transfer
   *
   * This method allows you to register a transfer
   * @param body undefined
   * @return The transfer object is created
   */
  transferMoney(body?: Transaction): __Observable<{}> {
    return this.transferMoneyResponse(body).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module TransactionsService {
}

export { TransactionsService }
