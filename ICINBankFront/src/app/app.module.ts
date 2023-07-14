import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavabarComponent } from './navabar/navabar.component';

import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AddPrimaryAccountComponent } from './add-primary-account/add-primary-account.component';
import { AddSavingAccountComponent } from './add-saving-account/add-saving-account.component';
import { DepositPrimaryComponent } from './deposit-primary/deposit-primary.component';
import { WithdrawPrimaryComponent } from './withdraw-primary/withdraw-primary.component';
import { DepositSavingComponent } from './deposit-saving/deposit-saving.component';
import { WithdrawSavingComponent } from './withdraw-saving/withdraw-saving.component';
import { TransferComponent } from './transfer/transfer.component';
import { SearchTransactionComponent } from './search-transaction/search-transaction.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddChequeBookPrimaryComponent } from './add-cheque-book-primary/add-cheque-book-primary.component';
import { SearchPrimaryAccountComponent } from './search-primary-account/search-primary-account.component';
import { AccountPrimaryDetailComponent } from './account-primary-detail/account-primary-detail.component';
import { SearchSavingAccountComponent } from './search-saving-account/search-saving-account.component';
import { AccountSavingDetailComponent } from './account-saving-detail/account-saving-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
   
    LoginComponent,
   
  
    HomeComponent,
  
    
    RegisterComponent,
    AddPrimaryAccountComponent,
    AddSavingAccountComponent,
    DepositPrimaryComponent,
    WithdrawPrimaryComponent,
    DepositSavingComponent,
    WithdrawSavingComponent,
    TransferComponent,
    SearchTransactionComponent,
    TransactionsComponent,
    AddChequeBookPrimaryComponent,
    SearchPrimaryAccountComponent,
    AccountPrimaryDetailComponent,
    SearchSavingAccountComponent,
    AccountSavingDetailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
