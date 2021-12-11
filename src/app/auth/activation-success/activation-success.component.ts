import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-activation-success',
  templateUrl: './activation-success.component.html',
  styleUrls: ['./activation-success.component.css']
})
export class ActivationSuccessComponent implements OnInit {

  private userId: string;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(data => {
        this.userId = data.id;
        console.log(data);
        this.authService.activateUser(data)
          .subscribe(returnData => console.log(returnData));
      });
  }

}
