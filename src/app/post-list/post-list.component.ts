import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {




  title = 'HelloWord'
  firstNumber!: string;

  secondNumber!: string;
  
  result!: number;
  AddNumber()
  {
     this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
  }

  // @Input() fromPostParent:string | undefined;
  
  // postArray: Array<string> = ['post1', 'post2','post3','post4','post5'];
  // constructor()

  //    {
  //     for(let i = 0; i<this.postArray.length;i++){
  //       console.log(this.postArray[i]);
  //     }
  //    }
  //  ngOnInit(): void {
     
   }        

