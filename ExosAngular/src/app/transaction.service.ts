import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {TransactionData} from './transaction-data';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransaction(): Observable<any> {
    return this.http.get<any>('assets/data/transactions.json');
  }

  getTransactionById(id:string): Observable<any> {
    return this.http.get<any>('assets/data/'+id+'.json');
  }

}
