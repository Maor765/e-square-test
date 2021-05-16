import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageKey } from 'src/app/enums/local-storage-key.enum';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  ngOnInit(): void {
  }

  value1: string = '';

  login(){
    localStorage.setItem(LocalStorageKey.username, this.value1);
    this.router.navigate(['./search']);

  }
}
