import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface User{
  id:string,
  username:string,
  password:string,
  email:string
}

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  private urlBase="http://localhost:8080/api/users"
  user:User={
    id: '',
    username: '',
    password: '',
    email: ''
  };

  authentified:boolean=false;
  constructor(private router:Router) { }

  isPresent():boolean{
    if (sessionStorage.getItem('credential')){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    sessionStorage.removeItem('credential');
    this.authentified=false;
    this.user={
      id: '',
      username: '',
      password: '',
      email: ''
    };
  }
  async login(username:string, password:string){
    sessionStorage.setItem('credential',JSON.stringify({username,password}));
    this.authentified=true;
    await this.mapUser(username);
    console.log(this.user);
    
  }

  async subscribe(user:Object){
    await axios.post(this.urlBase,user);
  }

  getCredential():string{
    let credential=sessionStorage.getItem("credential");

    if(credential){
      JSON.parse(credential);
      this.authentified=true;
      return btoa(JSON.parse(credential).username+":"+JSON.parse(credential).password)
     
    }
    return "";
  }

  async getUserId(username:string):Promise<User>{
    const user=await axios.get(this.urlBase+"/"+username);
    let data= user.data;
    return{
      id:data.id,
      username:data.username,
      password:data.password,
      email:data.password
    }
  }
  
  intercetor(){
    axios.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        console.log(this.getCredential());
        if (config.headers && config.method!=='get' && config.url!==this.urlBase){
          config.headers['Authorization'] = 'Basic '+this.getCredential();
        }
        return config;
      },
      (error: AxiosError) => {
        console.error('ERROR:', error);
        Promise.reject(error);
      }
    );
  }

  interceptorError(router:Router){
    axios.interceptors.response.use(
      (reponse: AxiosResponse) => {
        return reponse;
      },
      (error: AxiosError) => {
        if (error.response?.status===401)
          router.navigate(['connect/login'])
        Promise.reject(error);
      }
    );
  }

  async mapUser(uname:string){
    this.user=await this.getUserId(uname);
  }
}

