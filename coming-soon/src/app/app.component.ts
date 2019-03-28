import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coming Soon';
  constructor() { }

  ngOnInit() {
    var day = new Date();
    var time = day.getHours();
        gradient();
    //: Ändrar bakgrunden
    function gradient(){
        document.getElementById("body").className = "sky-gradient-" + time
    }
  }

}
