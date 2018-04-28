import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Institution } from '../org.acme.sample';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class InstitutionService {

	
		private NAMESPACE: string = 'Institution';
	



    constructor(private dataService: DataService<Institution>) {
    };

    public getAll(): Observable<Institution[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getparticipant(id: any): Observable<Institution> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addParticipant(itemToAdd: any): Observable<Institution> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateParticipant(id: any, itemToUpdate: any): Observable<Institution> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteParticipant(id: any): Observable<Institution> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
