import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
import { Flight } from '../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
      // public flights? : AviationState[];
      @Input() flights? : Flight[];
  constructor(private authService: AuthService, private api : ApiService){}
  logout(){
    this.authService.logOut();
    console.log("User logged out");
    
  }

  
    public ngOnInit(): void {
        this.api.getFlights().subscribe((results)=> {
          this.flights= results.data;
          console.log(results.data);
          
        })
  
        
    }
}
