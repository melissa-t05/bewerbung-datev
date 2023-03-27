import { Component,OnInit } from '@angular/core';
import { Listenelement } from '../master-item';
import { MasterServiceService } from '../master-service.service';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css']
})
export class MasterListComponent {

  constructor(private masterSevice: MasterServiceService) {}

  loesungen : Listenelement[] = []

  getloesungen() {
    this.loesungen = this.masterSevice.getloesungen();  
  }

  ngOnInit(): void {
    this.getloesungen();
  }
  
}
