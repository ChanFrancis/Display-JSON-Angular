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
    // Convert the id to a number before passing it to getTransactionById
    const numericId = id;
    
    this.transactionService.getTransactionById(numericId)
      .subscribe(
        (data: any) => {
          // Check if data is an array
          if (Array.isArray(data)) {
            this.transactions = data; // Assign data directly
          } else {
            // Convert object to array of values
            this.transactions = Object.values(data);
          }
        },
        (error: any) => {
          console.error('Error loading transactions:', error);
        }
      );
  }

} 
