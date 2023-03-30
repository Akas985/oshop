import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

import { map } from 'rxjs/operator/map'

@Injectable()
export class AuthGuardService {

  constructor( private Auth :AuthService,private router:Router) { }

canActivate( route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
  const currentUser = this.Auth.user$
  // return this.Auth.user$.map(user=>{
    if(currentUser) return true;
    this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
    return false;


  // });

}

}
