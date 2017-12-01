import { Component ,OnInit,Input,Output,EventEmitter,ChangeDetectorRef,OnDestroy} from '@angular/core';

@Component({
  selector: 'countup-js',
  templateUrl: './countupjs.component.html'
 
})
export class CountUpJsComponent implements OnInit{
    // @Input()
    // myStartVal: number;

    // @Input()
    // myEndVal: number;
filter:string;
storageKey:string;
 newValue;
 newValues;

 IntervalId;
    constructor(private cd:ChangeDetectorRef){
   
    }
getcall()
{
  alert(1);
  this.storageKey='filter'; 
  let StoreValue=window.sessionStorage.getItem(this.storageKey);
  let store=  window.sessionStorage.setItem("name","sahir");
  this.newValue = window.sessionStorage.getItem("name");  
  
  // this.cd.detectChanges();
  console.log(this.newValue);

  // newValue= window.sessionStorage.setItem("names",StoreValue);

}

onGetRefresh(){
  alert("d");
  this.IntervalId= setInterval(() => {
    let stores=  window.sessionStorage.setItem("names","Sahir Interval");
    this.newValues = window.sessionStorage.getItem("names");  
    }, 5000);
}

ngOnInit(){

  let stores=  window.sessionStorage.setItem("names","sahirr");
  this.newValues = window.sessionStorage.getItem("names");   

  this.onGetRefresh();
}
ngOnDestroy(){
  if (this.IntervalId) {
    clearInterval(this.IntervalId);
console.log(this.IntervalId);
  }
}


}
