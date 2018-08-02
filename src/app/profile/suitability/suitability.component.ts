import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suitability',
  templateUrl: './suitability.component.html',
  styleUrls: ['./suitability.component.scss']
})
export class SuitabilityComponent implements OnInit {
  page = "over-view";

  constructor() { }

  ngOnInit() {

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu2').addClass('current');      
  }

  checkpage(page) {
    window.scroll(0,0);
    console.log(page)

    switch (page) {
      case 'suitability-test':
        this.page = "suitability-test";
        break;
      case 'suitability-score':
        this.page = "suitability-score";
        break;
      case 'over-view':
        this.page = "over-view";
        break;
      default:
        this.page = "over-view";
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
  disable(){
    console.log("test");
    $('#answerC1').find('input[type="radio"]').attr("disabled", "disabled");
    $('#answerC2').find('input[type="radio"]').attr("disabled", "disabled");
    $('#answerP1').find('input[type="radio"]'). attr("disabled", "disabled");
    $('#answerP2').find('input[type="radio"]'). attr("disabled", "disabled");
  }

}
