import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faRightFromBracket, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/auth-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:any=sessionStorage.getItem('usuario');
  rol:any=sessionStorage.getItem('ROLE')

  constructor(private authService: AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  logout(){ console.log(this.user);
    this.authService.logout();
  }

  salir= faRightFromBracket;
  usuario=faUserAlt;

}
