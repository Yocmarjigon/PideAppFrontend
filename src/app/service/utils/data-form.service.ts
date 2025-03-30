import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataFormService {
  private sharedData = signal({});
  private eventShow = signal("")
  constructor() {}

  public getSharedData = this.sharedData.asReadonly();

  public updateSharedData(newValue: any) {
    this.sharedData.set(newValue);
  }
  public showToastRegister(eventData: string){
    this.eventShow.set(eventData)
  }
  public getShowToastRegister(){
    return this.eventShow.asReadonly()
  }
}
