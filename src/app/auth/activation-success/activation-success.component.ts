import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-activation-success',
  templateUrl: './activation-success.component.html',
  styleUrls: ['./activation-success.component.css']
})
export class ActivationSuccessComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(data => {
        this.authService.activateUser(data)
          .subscribe(returnData => console.log(returnData));
      });
  }

}
