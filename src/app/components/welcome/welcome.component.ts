import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageKey } from 'src/app/enums/local-storage-key.enum';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  welcomeForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService:LoginService,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.welcomeForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  login(){
    localStorage.setItem(LocalStorageKey.username, this.welcomeForm.value.username);
    this.loginService.isLogin.next(true);
    this.router.navigate(['./search']);
  }
}
