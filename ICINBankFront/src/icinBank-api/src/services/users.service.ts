/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
class UsersService extends __BaseService {
  static readonly findByEmailPath = '/ICINBank/user/find/{email}';
  static readonly findAllPath = '/ICINBank/users/all';
  static readonly savePath = '/ICINBank/users/create';
  static readonly deletePath = '/ICINBank/users/delete/{iduser}';
  static readonly findByIdPath = '/ICINBank/users/find/{id}';
  static readonly findByEmailAndPasswordPath = '/ICINBank/users/get/{email}/{password}';
  static readonly addUserLoginPath = '/ICINBank/users/login/create';
  static readonly findByPasswordPath = '/ICINBank/users/{password}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Search the list of users by email
   *
   * This method allows to Search the list of users by email
   * @param email undefined
   * @return The list of users/empty list
   */
  findByEmailResponse(email: string): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/user/find/${encodeURIComponent(String(email))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Search the list of users by email
   *
   * This method allows to Search the list of users by email
   * @param email undefined
   * @return The list of users/empty list
   */
  findByEmail(email: string): __Observable<User> {
    return this.findByEmailResponse(email).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Returns the list of users
   *
   * This method allows to search and return the list of users that existin the DB
   * @return The list of users / An empty list
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/users/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * Returns the list of users
   *
   * This method allows to search and return the list of users that existin the DB
   * @return The list of users / An empty list
   */
  findAll(): __Observable<Array<User>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * Register a user
   *
   * This method allows you to register a user
   * @param body undefined
   * @return The user object is created
   */
  saveResponse(body?: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ICINBank/users/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Register a user
   *
   * This method allows you to register a user
   * @param body undefined
   * @return The user object is created
   */
  save(body?: User): __Observable<User> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Delete a user
   *
   * This method allows you to delete a user by ID
   * @param iduser undefined
   */
  deleteResponse(iduser: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/ICINBank/users/delete/${encodeURIComponent(String(iduser))}`,
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
   * Delete a user
   *
   * This method allows you to delete a user by ID
   * @param iduser undefined
   */
  delete(iduser: number): __Observable<null> {
    return this.deleteResponse(iduser).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Find a user by ID
   *
   * This method allows you to search for a user by his ID
   * @param id undefined
   * @return User was found in DB
   */
  findByIdResponse(id: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/users/find/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Find a user by ID
   *
   * This method allows you to search for a user by his ID
   * @param id undefined
   * @return User was found in DB
   */
  findById(id: number): __Observable<User> {
    return this.findByIdResponse(id).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Search for a user by email and password
   *
   * This method allows you to search for a user by his email and password
   * @param params The `UsersService.FindByEmailAndPasswordParams` containing the following parameters:
   *
   * - `password`:
   *
   * - `email`:
   *
   * @return User was found in DB
   */
  findByEmailAndPasswordResponse(params: UsersService.FindByEmailAndPasswordParams): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/users/get/${encodeURIComponent(String(params.email))}/${encodeURIComponent(String(params.password))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Search for a user by email and password
   *
   * This method allows you to search for a user by his email and password
   * @param params The `UsersService.FindByEmailAndPasswordParams` containing the following parameters:
   *
   * - `password`:
   *
   * - `email`:
   *
   * @return User was found in DB
   */
  findByEmailAndPassword(params: UsersService.FindByEmailAndPasswordParams): __Observable<User> {
    return this.findByEmailAndPasswordResponse(params).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Register userlogin
   *
   * This method allows to save a userlogin
   * @param body undefined
   * @return The userlogin object is created
   */
  addUserLoginResponse(body?: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ICINBank/users/login/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Register userlogin
   *
   * This method allows to save a userlogin
   * @param body undefined
   * @return The userlogin object is created
   */
  addUserLogin(body?: User): __Observable<User> {
    return this.addUserLoginResponse(body).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Search the list of users by password
   *
   * This method allows to Search the list of users by password
   * @param password undefined
   * @return The list of users /empty list
   */
  findByPasswordResponse(password: string): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ICINBank/users/${encodeURIComponent(String(password))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Search the list of users by password
   *
   * This method allows to Search the list of users by password
   * @param password undefined
   * @return The list of users /empty list
   */
  findByPassword(password: string): __Observable<User> {
    return this.findByPasswordResponse(password).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module UsersService {

  /**
   * Parameters for findByEmailAndPassword
   */
  export interface FindByEmailAndPasswordParams {
    password: string;
    email: string;
  }
}

export { UsersService }
