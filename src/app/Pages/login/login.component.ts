import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from '../../Service/core.service';
import { AdministrateurService } from '../../Service/administrateur.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  creatingTweet = false;

  constructor(
    private router:Router,
    private fb: FormBuilder,
    private adminService : AdministrateurService,
    private core: CoreService
  ){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.creatingTweet = true;
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.adminService.postConnexion(email, password).subscribe(
      (response) => {
        console.log('login component', response);
        this.creatingTweet = false;
        this.adminService.setCurrentUser(response);
        this.router.navigate(['/dashboard',]);
      },
      (error: any) => {
        this.creatingTweet = false;
        this.core.openSnackBar("Email ou Mot de passe incorrecte");
        console.log("erreur", error);
      }
    );
  }


}
