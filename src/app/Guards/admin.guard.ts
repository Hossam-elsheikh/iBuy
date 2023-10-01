import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem('userToken')
  if(token){
    return true
  } else{
    return false
  }
};
