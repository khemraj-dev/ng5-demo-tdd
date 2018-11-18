import { Observable } from "rxjs";
import { of } from 'rxjs/observable/of';
import { RawRegisteredAccount } from '../../models/raw/raw-registered-account.model';

export class RegisteredAccountsRepository {
    constructor() { }
    public getRawRegisteredAccounts(): Observable<RawRegisteredAccount[]> {
        return of([]);
    }
}