import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { MakeVote } from '../org.acme.sample';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class MakeVoteService {

	
		private NAMESPACE: string = 'MakeVote';
	



    constructor(private dataService: DataService<MakeVote>) {
    };

    public getAll(): Observable<MakeVote[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<MakeVote> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<MakeVote> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<MakeVote> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<MakeVote> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

