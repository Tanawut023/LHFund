import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  page = "home";
  test = "disabled";
  constructor() { }

  ngOnInit() {
    $('#bottom-main-nav li').find('a').removeClass('current');
    $('#bottom-main-nav li#profile').find('a').addClass('current');
    $('#answerC1').find('input[type="radio"]').attr("disabled", "disabled");
    $('#answerC2').find('input[type="radio"]').attr("disabled", "disabled");
    $('input[name="account-type"]').click(function() {
      console.log('ไม่ทำงานว่ะ');
      
    });
  }
  checkpage(page) {
    window.scroll(0,0);
    console.log(page)

    switch (page) {
      case 'suitability':
        this.page = "suitability";
        break;
      case 'suitability-score':
        this.page = "suitability-score";
        break;
      case 'home':
        this.page = "home";
        break;
      case 'over-view':
        this.page = "over-view";
        break;
      case 'change-password':
        this.page = "change-password";
        break;
      case 'setting':
      this.page = "setting";
      break;
      default:
        this.page = "home";
        console.log(this.page)
        break;
    }


  }

  checktype(event){
    // var Id = id;
    // console.log(event);
    console.log(event.srcElement.attributes.id);
    var idAttr = event.srcElement.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value);
    if(value == 'size10') {
        $('#personal').addClass('active');
        $('#answerC1').find('input[type="radio"]'). attr("disabled", "disabled");
        $('#answerC2').find('input[type="radio"]'). attr("disabled", "disabled");
        $('#answerC2').find('input[type="text"]'). attr("disabled", "disabled");
        // $('#answerC1').find('input[type="radio"]').removeAttr("checked");
        // $('#answerC2').find('input[type="radio"]').removeAttr("checked");
    }

    else {
        $('#personal').removeClass('active');
        $('#answerC1').find('input[type="radio"]').removeAttr("disabled");
        $('#answerC2').find('input[type="radio"]').removeAttr("disabled");
        $('#answerC2').find('input[type="text"]').removeAttr("disabled");
        // $('#answerC1').find('input[type="radio"]').removeAttr("checked");
        // $('#answerC2').find('input[type="radio"]').removeAttr("checked");        
        // $('#answer').find('input[type="radio"]').removeAttr("checked");
    }

    if(value == 'size15') {
        $('#company').addClass('active');
        $('#answerP1').find('input[type="radio"]'). attr("disabled", "disabled");
        $('#answerP2').find('input[type="radio"]'). attr("disabled", "disabled");
        // $('#answerP1').find('input[type="radio"]').removeAttr("checked");
        // $('#answerP2').find('input[type="radio"]').removeAttr("checked");

        // $('#answer1').find('input[type="radio"]').removeAttr("checked");
    }

    else {
        $('#company').removeClass('active');
        $('#answerP1').find('input[type="radio"]').removeAttr("disabled");
        $('#answerP2').find('input[type="radio"]').removeAttr("disabled");
        // $('#answerP1').find('input[type="radio"]').removeAttr("checked");
        // $('#answerP2').find('input[type="radio"]').removeAttr("checked");
        
    }
  }
}
