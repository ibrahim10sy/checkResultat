import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  private currentUserKey = 'current_user';
    private currentUser!: any;

    constructor(private http: HttpClient) {}

    postConnexion(email: string,password: string): Observable<any> {
        return this.http.get('http://localhost:9000/diabiw/admin/login?email='+email+'&password='+password,{ headers: { 'Content-Type': 'application/json' } })
    }

    setCurrentUser(admin: any): void {
        this.currentUser = admin;
        localStorage.setItem(this.currentUserKey, JSON.stringify(admin));
      }
    
      getCurrentUser(): any {
        const storedUser = localStorage.getItem(this.currentUserKey);
        if (storedUser) {
          this.currentUser = JSON.parse(storedUser);
          return this.currentUser;
        }
      }
}
