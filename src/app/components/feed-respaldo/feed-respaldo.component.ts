import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-feed-respaldo',
  templateUrl: './feed-respaldo.component.html',
  styleUrls: ['./feed-respaldo.component.css']
})
export class FeedRespaldoComponent implements OnInit {
  userLogged = this.authService.getUserLogger();
  
  constructor(private authService: AuthService) { }

  
  userLogOut() {
    this.authService.logout();
  }
  ngOnInit(): void {
  }

}
