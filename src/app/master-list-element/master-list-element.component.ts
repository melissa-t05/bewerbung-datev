import { Component,Input } from '@angular/core';
import { Listenelement } from '../master-item';
import { MasterServiceService } from '../master-service.service';

@Component({
  selector: 'app-master-list-element',
  templateUrl: './master-list-element.component.html',
  styleUrls: ['./master-list-element.component.css']
})
export class MasterListElementComponent {

  constructor(private masterService: MasterServiceService) {
    masterService.aktuellesElement$.subscribe();
  }

 @Input() element?: Listenelement;

 zeigeDetails(titel: string){
  this.masterService.zeigeDetail(titel)
 }

}
