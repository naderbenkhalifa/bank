/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PrimaryAccount } from '../models/primary-account';
@Injectable({
  providedIn: 'root',
})
class ParimaryAccountsService extends __BaseService {
  static readonly retrieveAllAccountsPath = '/ICINBank/accounts/primary';
  static readonly retrieveAccountBalancePath = '/ICINBank/accounts/primary/{accountNumber}/balance';
  static readonly depositPath = '/ICINBank/deposit/primary/{accNo}/{amount}';
  static readonly getAccountByAccountNumberPath = '/ICINBank/find/primary/{accNo}';
  static readonly savePath = '/ICINBank/primary-account/create';
  static readonly withdrawPath = '/ICINBank/withdraw/primary/{accNo}/{amount}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * return List of  available primary accounts in the system
   *
   * This method allows to return all available primary accounts in the system
   * @return The list of primaryAccount / An empty list
   */
  retrieveAllAccountsResponse(): __Observable<__StrictHttpResponse<Array<PrimaryAccount>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/accounts/primary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PrimaryAccount>>;
      })
    );
  }
  /**
   * return List of  available primary accounts in the system
   *
   * This method allows to return all available primary accounts in the system
   * @return The list of primaryAccount / An empty list
   */
  retrieveAllAccounts(): __Observable<Array<PrimaryAccount>> {
    return this.retrieveAllAccountsResponse().pipe(
      __map(_r => _r.body as Array<PrimaryAccount>)
    );
  }

  /**
   * Find the balance available for a given primary account
   *
   * This method allows to find the balance available for a given primary account
   * @param accountNumber undefined
   * @return balance value
   */
  retrieveAccountBalanceResponse(accountNumber: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/accounts/primary/${encodeURIComponent(String(accountNumber))}/balance`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * Find the balance available for a given primary account
   *
   * This method allows to find the balance available for a given primary account
   * @param accountNumber undefined
   * @return balance value
   */
  retrieveAccountBalance(accountNumber: number): __Observable<number> {
    return this.retrieveAccountBalanceResponse(accountNumber).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * deposit amount into primary account
   *
   * This method allows to deposit amount into primary account
   * @param params The `ParimaryAccountsService.DepositParams` containing the following parameters:
   *
   * - `amount`:
   *
   * - `accNo`:
   *
   * @return the operation is performed successfully
   */
  depositResponse(params: ParimaryAccountsService.DepositParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/deposit/primary/${encodeURIComponent(String(params.accNo))}/${encodeURIComponent(String(params.amount))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * deposit amount into primary account
   *
   * This method allows to deposit amount into primary account
   * @param params The `ParimaryAccountsService.DepositParams` containing the following parameters:
   *
   * - `amount`:
   *
   * - `accNo`:
   *
   * @return the operation is performed successfully
   */
  deposit(params: ParimaryAccountsService.DepositParams): __Observable<number> {
    return this.depositResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * find primary account by account Number
   *
   * This method allows to find primary account by account Number
   * @param accNo undefined
   * @return primary account was found in DB
   */
  getAccountByAccountNumberResponse(accNo: number): __Observable<__StrictHttpResponse<PrimaryAccount>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/find/primary/${encodeURIComponent(String(accNo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PrimaryAccount>;
      })
    );
  }
  /**
   * find primary account by account Number
   *
   * This method allows to find primary account by account Number
   * @param accNo undefined
   * @return primary account was found in DB
   */
  getAccountByAccountNumber(accNo: number): __Observable<PrimaryAccount> {
    return this.getAccountByAccountNumberResponse(accNo).pipe(
      __map(_r => _r.body as PrimaryAccount)
    );
  }

  /**
   * Register primary-account
   *
   * This method allows you to register primary-account
   * @param body undefined
   * @return The  primary-account is created
   */
  saveResponse(body?: PrimaryAccount): __Observable<__StrictHttpResponse<PrimaryAccount>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ICINBank/primary-account/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PrimaryAccount>;
      })
    );
  }
  /**
   * Register primary-account
   *
   * This method allows you to register primary-account
   * @param body undefined
   * @return The  primary-account is created
   */
  save(body?: PrimaryAccount): __Observable<PrimaryAccount> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as PrimaryAccount)
    );
  }

  /**
   * withdraw of amount from an primary account
   *
   * This method allows to withdraw of amount from an primary account
   * @param params The `ParimaryAccountsService.WithdrawParams` containing the following parameters:
   *
   * - `amount`:
   *
   * - `accNo`:
   *
   * @return the operation is performed successfully
   */
  withdrawResponse(params: ParimaryAccountsService.WithdrawParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/withdraw/primary/${encodeURIComponent(String(params.accNo))}/${encodeURIComponent(String(params.amount))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * withdraw of amount from an primary account
   *
   * This method allows to withdraw of amount from an primary account
   * @param params The `ParimaryAccountsService.WithdrawParams` containing the following parameters:
   *
   * - `amount`:
   *
   * - `accNo`:
   *
   * @return the operation is performed successfully
   */
  withdraw(params: ParimaryAccountsService.WithdrawParams): __Observable<number> {
    return this.withdrawResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }
}

module ParimaryAccountsService {

  /**
   * Parameters for deposit
   */
  export interface DepositParams {
    amount: number;
    accNo: number;
  }

  /**
   * Parameters for withdraw
   */
  export interface WithdrawParams {
    amount: number;
    accNo: number;
  }
}

export { ParimaryAccountsService }
