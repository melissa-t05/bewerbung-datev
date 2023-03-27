import { Component, OnDestroy} from '@angular/core';
import { MasterServiceService } from '../master-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnDestroy{

  aktuelleDetailAnsicht = "";
  subscription: Subscription;

  constructor(private masterService: MasterServiceService){
    this.subscription = masterService.aktuellesElement$.subscribe(
      titel => {
        this.aktuelleDetailAnsicht = titel;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

 
}
