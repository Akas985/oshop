import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private Auth:AuthService,router:Router, private userService:UserService){
  Auth.user$.subscribe(user=>{
    if(user){
userService.save(user);

     let returnUrl= localStorage.getItem('returnUrl');
      router.navigateByUrl(returnUrl);
    }
  })

 }
}
