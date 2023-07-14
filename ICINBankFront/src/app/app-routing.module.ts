import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { NavabarComponent } from './navabar/navabar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'navabar', component:NavabarComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'add-primary', component:AddPrimaryAccountComponent},
  {path:'add-saving', component:AddSavingAccountComponent},
  {path:'deposit-primary', component:DepositPrimaryComponent},
  {path:'withdraw-primary', component:WithdrawPrimaryComponent},
  {path:'deposit-saving', component:DepositSavingComponent},
  {path:'withdraw-saving', component:WithdrawSavingComponent},
  {path:'transfer', component:TransferComponent},
  {path:'search-transactions', component:SearchTransactionComponent},
  {path:'transactions', component:TransactionsComponent},
  {path:'transactions/:id', component:TransactionsComponent},
  {path:'cheque-book-primary', component:AddChequeBookPrimaryComponent},
  {path:'search-primary-account', component:SearchPrimaryAccountComponent},
  {path:'search-saving-account', component:SearchSavingAccountComponent},
  {path:'account-primary-detail', component:AccountPrimaryDetailComponent},
  {path:'account-saving-detail', component:AccountSavingDetailComponent},
  {path:'account-primary-detail/:id', component:AccountPrimaryDetailComponent},
  {path:'account-saving-detail/:id', component:AccountSavingDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
