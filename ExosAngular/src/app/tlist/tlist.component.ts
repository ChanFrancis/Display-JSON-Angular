import { Component, OnInit  } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { TransactionData } from '../transaction-data';

@Component({
  selector: 'app-tlist',
  templateUrl: './tlist.component.html',
  styleUrl: './tlist.component.css'
})
export class TlistComponent implements OnInit {
  transactions: TransactionData[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getTransaction()
      .subscribe(
        (data: TransactionData[]) => {
          this.transactions = data;
        },
        (error: any) => {
          console.error('Error loading transactions:', error);
        }
      );
  }

  SortColumn(column: keyof TransactionData): void {
    this.transactions.sort((a, b) => {
      if (typeof a[column] === 'string') {
        return a[column].localeCompare(b[column]);
      } else {
        return a[column] - b[column];
      }
    });
  }

}
