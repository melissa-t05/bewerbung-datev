import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Listenelement } from './master-item';
import { Loesungen } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor() { }

  private aktuellesElementSource = new Subject<string>();           // Observable string Source
  aktuellesElement$ = this.aktuellesElementSource.asObservable();   // Observable string Stream

  zeigeDetail(detailAnsicht: string) {
    this.aktuellesElementSource.next(detailAnsicht);
  }

  getloesungen(): Listenelement[] {
    return Loesungen;
  }

}
