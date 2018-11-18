import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';


import { RegisteredAccount } from '../models/registered-account.model';
import { RegisteredAccountsRepository } from '../repositories/registered-accounts/registered-accounts.repository';
import { map, catchError } from 'rxjs/operators';
import { RawRegisteredAccount } from '../models/raw/raw-registered-account.model';


@Injectable()
export class RegisteredAccountsService {

  constructor(private repository: RegisteredAccountsRepository) { }

  public getRegisteredAccounts(): Observable<RegisteredAccount[]> {
    return this.repository.getRawRegisteredAccounts().pipe(
      map(this.toListOfRegisteredAccounts)
    );
  }

  private toListOfRegisteredAccounts = (accounts: RawRegisteredAccount[]): RegisteredAccount[] => {
    return accounts
      .filter(account => account.active)
      .map(this.toRegisteredAccount);
  }

  private toRegisteredAccount = (account: RawRegisteredAccount): RegisteredAccount => {
    return {
      displayName: account.account_name,
      accountNumber: account.number,
      bankName: account.bank
    }
  }
}
