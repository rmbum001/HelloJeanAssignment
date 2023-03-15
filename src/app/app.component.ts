import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import { PostComponent } from './post/post.component';
import{GetApiService} from './get-api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
public data = [];
public apiData: any;

 
  title = 'HelloWord'
   

  firstNumber!: string;

  secondNumber!: string;
  
  result!: number;
  api: any;
  AddNumber()
  {
     this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
  }
  constructor (private service: GetApiService){

  }
 
apiCall()
{
  this.service.apiCall().subscribe((results) => {
    console.log('Data is returned',results);
    
  })
}


  // apiCall(){
  //   this.service.apiCall().subscribe((this.result) =>{
  //     console.log('This is retrieving data', this.result);
  //     this.data = this.result.result,
  //   })
  // }
   
  
}

