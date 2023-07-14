/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { ParimaryAccountsService } from './services/parimary-accounts.service';
import { SavingAccountsService } from './services/saving-accounts.service';
import { TransactionsService } from './services/transactions.service';
import { AdminsService } from './services/admins.service';
import { ChequeBooksService } from './services/cheque-books.service';
import { UsersService } from './services/users.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    ParimaryAccountsService,
    SavingAccountsService,
    TransactionsService,
    AdminsService,
    ChequeBooksService,
    UsersService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
