/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SavingsAccount } from '../models/savings-account';
@Injectable({
  providedIn: 'root',
})
class SavingAccountsService extends __BaseService {
  static readonly retrieveAllAccountsPath = '/ICINBank/accounts/saving';
  static readonly retrieveAccountBalancePath = '/ICINBank/accounts/saving/{accountNumber}/balance';
  static readonly depositPath = '/ICINBank/deposit/saving/{accNo}/{amount}';
  static readonly getAccountByAccountNumberPath = '/ICINBank/find/saving/{accNo}';
  static readonly savePath = '/ICINBank/saving-account/create';
  static readonly withdrawPath = '/ICINBank/withdraw/saving/{accNo}/{amount}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * return List of  available saving accounts in the system
   *
   * This method allows to return all available saving accounts in the system
   * @return The list of Saving Accounts / An empty list
   */
  retrieveAllAccountsResponse(): __Observable<__StrictHttpResponse<Array<SavingsAccount>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/accounts/saving`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SavingsAccount>>;
      })
    );
  }
  /**
   * return List of  available saving accounts in the system
   *
   * This method allows to return all available saving accounts in the system
   * @return The list of Saving Accounts / An empty list
   */
  retrieveAllAccounts(): __Observable<Array<SavingsAccount>> {
    return this.retrieveAllAccountsResponse().pipe(
      __map(_r => _r.body as Array<SavingsAccount>)
    );
  }

  /**
   * Find the balance available for a given saving account
   *
   * This method allows to find the balance available for a given saving account
   * @param accountNumber undefined
   * @return balance value
   */
  retrieveAccountBalanceResponse(accountNumber: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/accounts/saving/${encodeURIComponent(String(accountNumber))}/balance`,
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
   * Find the balance available for a given saving account
   *
   * This method allows to find the balance available for a given saving account
   * @param accountNumber undefined
   * @return balance value
   */
  retrieveAccountBalance(accountNumber: number): __Observable<number> {
    return this.retrieveAccountBalanceResponse(accountNumber).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * deposit amount into saving account
   *
   * This method allows to deposit amount into saving account
   * @param params The `SavingAccountsService.DepositParams` containing the following parameters:
   *
   * - `amount`:
   *
   * - `accNo`:
   *
   * @return the operation is performed successfully
   */
  depositResponse(params: SavingAccountsService.DepositParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/deposit/saving/${encodeURIComponent(String(params.accNo))}/${encodeURIComponent(String(params.amount))}`,
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
   * deposit amount into saving account
   *
   * This method allows to deposit amount into saving account
   * @param params The `SavingAccountsService.DepositParams` containing the following parameters:
   *
   * - `amount`:
   *
   * - `accNo`:
   *
   * @return the operation is performed successfully
   */
  deposit(params: SavingAccountsService.DepositParams): __Observable<number> {
    return this.depositResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * find saving account by account Number
   *
   * This method allows to find saving account by account Number
   * @param accNo undefined
   * @return saving account was found in DB
   */
  getAccountByAccountNumberResponse(accNo: number): __Observable<__StrictHttpResponse<SavingsAccount>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/find/saving/${encodeURIComponent(String(accNo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SavingsAccount>;
      })
    );
  }
  /**
   * find saving account by account Number
   *
   * This method allows to find saving account by account Number
   * @param accNo undefined
   * @return saving account was found in DB
   */
  getAccountByAccountNumber(accNo: number): __Observable<SavingsAccount> {
    return this.getAccountByAccountNumberResponse(accNo).pipe(
      __map(_r => _r.body as SavingsAccount)
    );
  }

  /**
   * Register saving-account
   *
   * This method allows you to register saving-account
   * @param body undefined
   * @return The  saving-account is created
   */
  saveResponse(body?: SavingsAccount): __Observable<__StrictHttpResponse<SavingsAccount>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ICINBank/saving-account/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SavingsAccount>;
      })
    );
  }
  /**
   * Register saving-account
   *
   * This method allows you to register saving-account
   * @param body undefined
   * @return The  saving-account is created
   */
  save(body?: SavingsAccount): __Observable<SavingsAccount> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as SavingsAccount)
    );
  }

  /**
   * withdraw of amount from an saving account
   *
   * This method allows to withdraw of amount from an saving account
   * @param params The `SavingAccountsService.WithdrawParams` containing the following parameters:
   *
   * - `amount`:
   *
   * - `accNo`:
   *
   * @return the operation is performed successfully
   */
  withdrawResponse(params: SavingAccountsService.WithdrawParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/withdraw/saving/${encodeURIComponent(String(params.accNo))}/${encodeURIComponent(String(params.amount))}`,
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
   * withdraw of amount from an saving account
   *
   * This method allows to withdraw of amount from an saving account
   * @param params The `SavingAccountsService.WithdrawParams` containing the following parameters:
   *
   * - `amount`:
   *
   * - `accNo`:
   *
   * @return the operation is performed successfully
   */
  withdraw(params: SavingAccountsService.WithdrawParams): __Observable<number> {
    return this.withdrawResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }
}

module SavingAccountsService {

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

export { SavingAccountsService }
