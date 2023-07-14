/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Admin } from '../models/admin';
@Injectable({
  providedIn: 'root',
})
class AdminsService extends __BaseService {
  static readonly findAllPath = '/ICINBank/admins/all';
  static readonly savePath = '/ICINBank/admins/create';
  static readonly deletePath = '/ICINBank/admins/delete/{idadmin}';
  static readonly findByEmailPath = '/ICINBank/admins/find/{email}';
  static readonly findByIdPath = '/ICINBank/admins/find/{id}';
  static readonly findByEmailAndPasswordPath = '/ICINBank/admins/get/{email}/{password}';
  static readonly findByPasswordPath = '/ICINBank/admins/{password}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns the list of administrators
   *
   * This method allows you to search and return the list of administrators that existin the DB
   * @return The list of administrators / An empty list
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<Admin>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/admins/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Admin>>;
      })
    );
  }
  /**
   * Returns the list of administrators
   *
   * This method allows you to search and return the list of administrators that existin the DB
   * @return The list of administrators / An empty list
   */
  findAll(): __Observable<Array<Admin>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<Admin>)
    );
  }

  /**
   * Register an administrator
   *
   * This method allows you to register an administrator
   * @param body undefined
   * @return The administrator object is created
   */
  saveResponse(body?: Admin): __Observable<__StrictHttpResponse<Admin>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ICINBank/admins/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Admin>;
      })
    );
  }
  /**
   * Register an administrator
   *
   * This method allows you to register an administrator
   * @param body undefined
   * @return The administrator object is created
   */
  save(body?: Admin): __Observable<Admin> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as Admin)
    );
  }

  /**
   * Delete an administrator
   *
   * This method allows you to delete an administrator by ID
   * @param idadmin undefined
   */
  deleteResponse(idadmin: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/ICINBank/admins/delete/${encodeURIComponent(String(idadmin))}`,
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
   * Delete an administrator
   *
   * This method allows you to delete an administrator by ID
   * @param idadmin undefined
   */
  delete(idadmin: number): __Observable<null> {
    return this.deleteResponse(idadmin).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Search the list of administrators by email
   *
   * This method allows to Search the list of administrators by email
   * @param email undefined
   * @return The list of administrators /empty list
   */
  findByEmailResponse(email: string): __Observable<__StrictHttpResponse<Admin>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/admins/find/${encodeURIComponent(String(email))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Admin>;
      })
    );
  }
  /**
   * Search the list of administrators by email
   *
   * This method allows to Search the list of administrators by email
   * @param email undefined
   * @return The list of administrators /empty list
   */
  findByEmail(email: string): __Observable<Admin> {
    return this.findByEmailResponse(email).pipe(
      __map(_r => _r.body as Admin)
    );
  }

  /**
   * Search for an administrator by ID
   *
   * This method allows you to search for an administrator by his ID
   * @param id undefined
   * @return The administrator was found in the DB
   */
  findByIdResponse(id: number): __Observable<__StrictHttpResponse<Admin>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/admins/find/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Admin>;
      })
    );
  }
  /**
   * Search for an administrator by ID
   *
   * This method allows you to search for an administrator by his ID
   * @param id undefined
   * @return The administrator was found in the DB
   */
  findById(id: number): __Observable<Admin> {
    return this.findByIdResponse(id).pipe(
      __map(_r => _r.body as Admin)
    );
  }

  /**
   * Find an administrator by email and password
   *
   * This method allows you to search for an administrator by his email and password
   * @param params The `AdminsService.FindByEmailAndPasswordParams` containing the following parameters:
   *
   * - `password`:
   *
   * - `email`:
   *
   * @return The administrator was found in the DB
   */
  findByEmailAndPasswordResponse(params: AdminsService.FindByEmailAndPasswordParams): __Observable<__StrictHttpResponse<Admin>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/admins/get/${encodeURIComponent(String(params.email))}/${encodeURIComponent(String(params.password))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Admin>;
      })
    );
  }
  /**
   * Find an administrator by email and password
   *
   * This method allows you to search for an administrator by his email and password
   * @param params The `AdminsService.FindByEmailAndPasswordParams` containing the following parameters:
   *
   * - `password`:
   *
   * - `email`:
   *
   * @return The administrator was found in the DB
   */
  findByEmailAndPassword(params: AdminsService.FindByEmailAndPasswordParams): __Observable<Admin> {
    return this.findByEmailAndPasswordResponse(params).pipe(
      __map(_r => _r.body as Admin)
    );
  }

  /**
   * Search the list of administrators by password
   *
   * This method allows to Search the list of administrators by password
   * @param password undefined
   * @return The list of administrators/empty list
   */
  findByPasswordResponse(password: string): __Observable<__StrictHttpResponse<Admin>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/admins/${encodeURIComponent(String(password))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Admin>;
      })
    );
  }
  /**
   * Search the list of administrators by password
   *
   * This method allows to Search the list of administrators by password
   * @param password undefined
   * @return The list of administrators/empty list
   */
  findByPassword(password: string): __Observable<Admin> {
    return this.findByPasswordResponse(password).pipe(
      __map(_r => _r.body as Admin)
    );
  }
}

module AdminsService {

  /**
   * Parameters for findByEmailAndPassword
   */
  export interface FindByEmailAndPasswordParams {
    password: string;
    email: string;
  }
}

export { AdminsService }
