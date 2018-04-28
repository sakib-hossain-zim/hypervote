import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { TransferShare } from '../org.acme.sample';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class TransferShareService {

	
		private NAMESPACE: string = 'TransferShare';
	



    constructor(private dataService: DataService<TransferShare>) {
    };

    public getAll(): Observable<TransferShare[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<TransferShare> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<TransferShare> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<TransferShare> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<TransferShare> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

