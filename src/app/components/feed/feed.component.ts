import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  
  userLogged = this.authService.getUserLogger();
  
  constructor(private authService: AuthService) { }

  userLogOut() {
    this.authService.logout();
  }
  ngOnInit(): void {
  }

}
