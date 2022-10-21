import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=["Angular", "React", "Vue"];

  userModel:{name:string, email:string, phone:number, topic:string, timepreference:string, subscribe:boolean} ={name:"Sam", email:"sam@gmail.com", phone:5455484789748, topic:"Angular", timepreference:"morning", subscribe:false}

  onClick(a:boolean, b:boolean, fieldName:string){
      if(a && b)
        alert(`Pleased enter ${fieldName}`)
  }
}