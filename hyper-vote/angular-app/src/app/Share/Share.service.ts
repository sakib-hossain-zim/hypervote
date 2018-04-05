import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Share } from '../org.acme.sample';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ShareService {

	
		private NAMESPACE: string = 'Share';
	



    constructor(private dataService: DataService<Share>) {
    };

    public getAll(): Observable<Share[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Share> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Share> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Share> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Share> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
