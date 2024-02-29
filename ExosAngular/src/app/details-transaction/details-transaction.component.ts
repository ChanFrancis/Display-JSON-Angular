import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { TransactionData } from '../transaction-data';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details-transaction',
  templateUrl: './details-transaction.component.html',
  styleUrl: './details-transaction.component.css'
})
export class DetailsTransactionComponent implements OnInit{
  transactions: TransactionData[] = [];
  id: any= "";

  constructor(private route: ActivatedRoute, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.id = id;
        this.loadTransactions(id);
      }
    });
    console.log(this.id)
   
  }

  loadTransactions(id: string): void {
    const numericId = id;
    
    this.transactionService.getTransactionById(numericId)
      .subscribe(
        (data: any) => {

          if (Array.isArray(data)) {
            this.transactions = data; 
          } else {
            this.transactions = Object.values(data);
          }
        },
        (error: any) => {
          console.error('Error loading transactions:', error);
        }
      );
  }

} 
