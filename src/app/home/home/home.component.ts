import { Component } from '@angular/core';
import { EquipmentDataService } from 'src/app/core/services/equipment-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  equipments: Array<Equipment> = [] as any;
  subscriptions: Array<Subscription> = [] as any;
  constructor(private eventService: EquipmentDataService) { }
  
  ngOnInit(): void {
    this.subscriptions.push(
        this.eventService.getData().subscribe(data => {
      this.equipments = data;
    })
    );
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => {
      s.unsubscribe();
    });
  }
}
