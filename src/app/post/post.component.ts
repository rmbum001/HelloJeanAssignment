import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  title: string = " List of Posts";
  messagePost: string = 'Message Post';
   postParentMessage: string ='Message comimng from the post parent';
   childMessage : string = 'From the Child component';
   outputChildMessage: String = 'My output from child component'
  @Input() fromParent: string | undefined;
  @Output() messageEvent = new EventEmitter<String>
  
  constructor() {

  }
   ngOnInit(): void{
    
   }
   sendMessage(){
      this.messageEvent.emit(this.outputChildMessage);
   }
}
