import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class DescriptionSendDataComponentService {
dataSource = new BehaviorSubject<any>({})
data = this.dataSource.asObservable()

  constructor() { }

  changeData(newData: any){
    this.dataSource.next(newData)
  }

}
