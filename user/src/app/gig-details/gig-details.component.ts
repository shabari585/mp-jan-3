import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-gig-details',
  templateUrl: './gig-details.component.html',
  styleUrls: ['./gig-details.component.css']
})
export class GigDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $('.zoom').click(function(){
    //   $(this).addClass('zoom-after');
    //   $('.zoom').css({'border':'1px solid green'})
    // });
  }


  zoom(cat){
   switch (cat) {
     case 'sta':
       $('#sta').css({"border":"0.5px solid green"});
       $('#pre').css({"border":"0.5px solid #ddd"});
       $('#pro').css({"border":"0.5px solid #ddd"});
       $('#sta').addClass('zoom-after');
       $('#pro').removeClass('zoom-after');
       $('#pre').removeClass('zoom-after');
       break;
       case 'pre':
       $('#sta').css({"border":"0.5px solid #ddd"});
       $('#pre').css({"border":"0.5px solid green"});
       $('#pro').css({"border":"0.5px solid #ddd"});
       $('#pre').addClass('zoom-after');
       $('#sta').removeClass('zoom-after');
       $('#pro').removeClass('zoom-after');
       break;
       case 'pro':
       $('#sta').css({"border":"0.5px solid #ddd"});
       $('#pre').css({"border":"0.5px solid #ddd"});
       $('#pro').css({"border":"0.5px solid green"});
       $('#pro').addClass('zoom-after');
       $('#sta').removeClass('zoom-after');
       $('#pre').removeClass('zoom-after');
       
       break;
   
     default:
       break;
   }
    };

}
