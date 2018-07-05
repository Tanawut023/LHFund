/* fastclick for touch screen, remove 300ms delay on click event  */
if (Modernizr.touch) {
  window.addEventListener('load', function() {
    new FastClick(document.body);
  }, false);
}

/* canvas menu */
//canvasmenu_button_init = function(status){
//  /* casvas menu button control */
//  if(status == 'close')
//  {
//    $('#exit-canvas').removeClass('expanded');
//    $('html,body').removeClass('expanded-right');
//    $('#page-container').removeClass('expanded-right');
//    $('#main-bg').removeClass('expanded-right');
//    $('#footer-wrapper').removeClass('expanded-right');
//    $('#canvas-menu-section').removeClass('expanded-right');
//    $('#canvas-menu-section').find('#mainmenu-list').find('li').removeClass('active');

//  }
//  else if(status == undefined)
//  {


//    $('#mobile-menu-trigger').on('click',function(){
//      $('#exit-canvas').toggleClass('expanded');
//      $('html,body').toggleClass('expanded-right');
//      $('#page-container').toggleClass('expanded-right');
//      $('#main-bg').toggleClass('expanded-right');
//      $('#footer-wrapper').toggleClass('expanded-right');
//      $('#canvas-menu-section').toggleClass('expanded-right');

//      return false;
//    });

//    $('#page-container').on('click','#exit-canvas',function(){
//      $(this).toggleClass('expanded');
//      $('html,body').toggleClass('expanded-right');
//      $('#page-container').toggleClass('expanded-right');
//      $('#main-bg').toggleClass('expanded-right');
//      $('#footer-wrapper').toggleClass('expanded-right');
//      $('#canvas-menu-section').toggleClass('expanded-right');

//      $('#canvas-menu-section').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
//        $(this).find('#mainmenu-list').find('li').removeClass('active');
//      });

//      return false;
//    });
//  }
//}

/*  main menu */
expandable_mainmenu_init = function(){

  $('#mainmenu-list').find('.main-submenu').parent().addClass('expandable');
}
mainmenu_pc_event = function(status){

  if(menuPcInitialize){

    var mainmenu_parent = $('#header-mainmenu-box').children().first();
    var mainmenu = $('#mainmenu-list').clone();
    if(mainmenu_parent.find('#mainmenu-list').length === 0 )
    {
      mainmenu.prependTo(mainmenu_parent);
    }

    menuPcInitialize = false;
  }//if

  // var mainmenu = $('#mainmenu-list');

  if(status == 'on')
  {

    $('#header-mainmenu-box').on('mouseover','#mainmenu-list > li',function(){
      $(this).addClass('active');
    }).on('mouseout','#mainmenu-list > li',function(){
      $(this).removeClass('active');
    });
    $('#header-mainmenu-box').on('mouseover','.mainmenu-lv2-list > li',function(){
      $(this).addClass('active').siblings().removeClass('active');
    }).on('mouseout','.mainmenu-lv2-list > li',function(){
      $(this).removeClass('active');
    });

  }
  else if(status == 'off')
  {
    $('#header-mainmenu-box').off('mouseover','#mainmenu-list > li').off('mouseout','#mainmenu-list > li');
    $('#header-mainmenu-box').off('mouseover','.mainmenu-lv2-list > li').off('mouseout','.mainmenu-lv2-list > li');
  }

}//end function
mainmenu_res_event = function(){
  var outcanvas = $('#canvas-menu-section');
  var mainmenu = $('#mainmenu-list').clone();
  var topmenu = $('#top-menu').clone();
  var switchlang = $('#switch-language').clone();
  var searchbox = $('#search-site').clone();
  var social = $('#top-social').clone();
  var enewsletter = $('#enewsletter').clone();
  var callcenter = $('#callcenter').clone();
  var sitestat = $('#site-stat').clone();

  if(outcanvas.find('#switch-language').length == 0 )
  {
    switchlang.appendTo(outcanvas.find('#canvas-language-box'));
  }

  if(outcanvas.find('#search-site').length == 0 )
  {
    searchbox.appendTo(outcanvas.find('#canvas-search-box'));
  }

  if(outcanvas.find('#top-menu').length == 0 )
  {
    topmenu.appendTo(outcanvas.find('#canvas-topmenu-box'));
  }

  if(outcanvas.find('#mainmenu-list').length == 0 )
  {
    mainmenu.appendTo(outcanvas.find('#canvas-mainmenu-box'));
  }

  if(outcanvas.find('#top-social').length == 0 )
  {
    social.appendTo(outcanvas.find('#canvas-socialmedia-box'));
  }

  if(outcanvas.find('#enewsletter').length == 0 )
  {
    enewsletter.appendTo(outcanvas.find('#canvas-enewsletter-box'));
  }

  if(outcanvas.find('#callcenter').length == 0 )
  {
    callcenter.appendTo(outcanvas.find('#canvas-callcenter-box'));
  }

  if(outcanvas.find('#site-stat').length == 0 )
  {
    sitestat.appendTo(outcanvas.find('#canvas-sitestat-box'));
  }

}//end function
offcanvas_mainmenu_event = function(status){

  if(status == 'on')
  {

    $('#canvas-menu-section').on('click','#mainmenu-list > li > span > a',function(){
      if($(this).closest('li').find('.mainmenu-lv2').length > 0)
      {
        // $(this).closest('ul').find('li').removeClass('active');
        if($(this).closest('li').is('.active'))
        {
          $(this).closest('li').find('li').removeClass('active');
        }
        $(this).closest('li').toggleClass('active');
      }
    });
    $('#canvas-menu-section').on('click','.mainmenu-lv2-list > li > span > a',function(){

    	if($(this).closest('li').find('.mainmenu-lv3').length > 0)
    	{
    		$(this).closest('li').toggleClass('active');
    	}
    });

  }
  else if(status == 'off')
  {
    $('#canvas-menu-section').off('click','#mainmenu-list > li > span > a');
    $('#canvas-menu-section').off('click','.mainmenu-lv2-list > li > span > a');
  }
}//end function

// Main Nav and Submenu
main_nav = function(){
 // $('a[href="#"]').on('click', function(e){
 //    e.preventDefault();
 //  });

 //  $('#menu > li').on('mouseover', function(e){
 //    $(this).find("ul:first").show();
 //    $(this).find('> a').addClass('active');
 //  }).on('mouseout', function(e){
 //    $(this).find("ul:first").hide();
 //    $(this).find('> a').removeClass('active');
 //  });

 //  $('#menu li li').on('mouseover',function(e){
 //    if($(this).has('ul').length) {
 //      $(this).parent().addClass('expanded');
 //    }
 //    $('ul:first',this).parent().find('> a').addClass('active');
 //    $('ul:first',this).show();
 //  }).on('mouseout',function(e){
 //    $(this).parent().removeClass('expanded');
 //    $('ul:first',this).parent().find('> a').removeClass('active');
 //    $('ul:first', this).hide();
 //  });
}

//Canvas Menu and Submenu
main_canvas = function(){
  // Navigation Menu Slider
  $('#nav-expander').on('click',function(e){
    e.preventDefault();
    $('body').toggleClass('nav-expanded');
  });
  $('#nav-close').on('click',function(e){
    e.preventDefault();
    $('body').removeClass('nav-expanded');
  });
}

$('#top-main-nav').children().clone().appendTo("#canvas_mainnav");
$('#bottom-main-nav').children().clone().appendTo("#canvas_mainnav");
// $('#top-menu').children().clone().appendTo("#top-canvas-menu");
// $('#searchBar').children().clone().appendTo("#top-canvas-search");


$(".main-menu").navgoco({
    caret: '<span class="caret"></span>',
    accordion: true,
    openClass: 'open',
    save: true,
    cookie: {
        name: 'navgoco',
        expires: false,
        path: '/'
    },
    slide: {
        duration: 300,
        easing: 'swing'
    }
});

selectric_render = function(){
  $('.selectric').selectric({disableOnMobile:false,inheritOriginalWidth:false,maxHeight: 200});
  $('.selectric-hover').selectric({
    openOnHover: true,
    hoverIntentTimeout: 200,
    disableOnMobile:false,
    inheritOriginalWidth:false,
    maxHeight: 200,
    optionsItemBuilder: function(itemData, element, index) {
      return element.val().length ? '<a href="test.aspx">' + itemData.text : itemData.text + '</a>';
    }

  });
}

//adjust footer
adjustFooter = function(){
  var fHeight = $('#footer-wrapper').outerHeight(true);
  $('#maincontainer-wrapper').css('paddingBottom',fHeight);
}

callLightbox = function(boxLink,boxWidth,boxHeight,boxType,boxPadding){

  /* ##################
	boxLink 	=	link to content
		if boxType set to 'iframe' use '../pathTo/iframe.html'
		if boxType set to 'inline' use element id '#targetElementID'
	boxWidth 	=	lightbox maxWidth
	boxHeight 	=	lightbox maxHeight
	boxType 	=	'iframe' or 'inline'
	boxPadding	=	lightbox padding
	######################*/

  //set default value
  if(!boxWidth){
    var boxWidth = 800;
  }
  if(!boxHeight){
    var boxWidth = 600;
  }
  if(!boxType){
    var boxType = 'iframe';
  }
  if(!boxPadding){
    var boxPadding = 15;
  }

  $.fancybox({
    padding : boxPadding,
    maxWidth	: boxWidth,
    maxHeight	: boxHeight,
    fitToView	: false,
    width		: '94%',
    height		: '94%',
    autoSize	: false,
    closeClick	: false,
    helpers: {
      overlay: {
        locked: false
      }
    },
    type : boxType,
    href : boxLink,
    afterClose: function() {
      window.location.hash = '!';
    }
  });

  return false;
}//end function


//side-nav focus function
sidenav_focus = function(focus_id){
  if(focus_id != ""){
      var checker = false;
      var icn_current = '<i class="fa fa-caret-left"></i>';
      $('#page-sidemenu').find('a').each(function(){
        if( ($(this).parent().attr('id') == focus_id)){
          focus_id = $(this);
          focus_id.addClass('current');

          // add icon to active menu nosub
          focus_id.addClass('current').append(icn_current);
          checker = true;
          return false;
        }
      });
      if(checker){
        // console.log(focus_id);
        if(focus_id.parent().is('.has-sub')){
          focus_id.parent().addClass('expanded').children('ul').show();
        }else{
          focus_id.parents('ul.side-nav-ul').show().parent('.has-sub').addClass('expanded');
        }
      }else{
        alert('sidemenu focus_id incorrect or not found!');
      }

    }// end if
}//end sidenav_focus

//side nav controller
sidemenu_init = function(){

  var icn_pre = '<i class="fa fa-caret-left"></i>';
  var icn_post = '<i class="fa fa-plus-circle"></i><i class="fa fa-minus-circle"></i>';
  // var icn_post_nosub = '<i class="fa fa-chevron-right"></i>';
  var icn_post_nosub = '<i class="fa fa-caret-right"></i>';

  $('#page-sidemenu').children('#page-sidemenu__list').find('li').each(function(){
    if($(this).children('ul').length > 0)
    {
      $(this).addClass('has-sub').children('a').append(icn_post);
      $(this).children('ul').children('li').children('a').prepend(icn_pre);
      $(this).children('ul').children('li').children('a');
    }
    else
    {
      // $(this).children('a').append(icn_post_nosub);
    }
  });//detect submenu and add essential classes

  $('#page-sidemenu').on('click','#page-sidemenu__list a',function(){

    if( $(this).parent().children('ul').length > 0 ){

            if($(this).parent().is('.expanded')){

                $(this).parent().removeClass('expanded').find('ul').slideUp().find('.expanded').removeClass('expanded');

            }else{
              // สำหรับกางทีละเมนู
              $(this).parent().siblings().removeClass('expanded').find('ul').slideUp().find('.expanded').removeClass('expanded');
              $(this).parent().addClass('expanded').children('ul').slideDown();

            }

        }//check if has sub menu

        if($(this).attr('href') == "#"){
            return false;
        }// check menu link

  });

  // var icn_current = '<i class="fa fa-caret-left"></i>';
  //   var myCurrent = document.getElementsByClassName("page-submenu");
  //   $(myCurrent).children('a').append(icn_current);

  //   var myCurrent = document.getElementsByClassName("current");
  //   $(myCurrent).children('a').append(icn_current);
    //detect submenu and add essential html icon

}//side nav controller

//tab-content focus function
tabFocus = function(groupId,tabId){
  var $targetTabGroup = $('.mod_tab-content[data-tab-group='+ groupId +']');
  var $targetTabBtn = $targetTabGroup.children('.header').find('.tab-btn[data-tab-id='+tabId+']');
  var $targetTabContent = $targetTabGroup.children('.content').find('.tab-content[data-tab-id='+ tabId +']');
  //console.log($targetTabBtn);
  if($targetTabContent.length > 0)
  {
    $targetTabContent.addClass('show');
    $targetTabBtn.addClass('active');
    //btn2stageFocus($targetTabBtn);

    if($targetTabContent.find('iframe').length > 0){
      var dataLink = $targetTabContent.find('iframe').data('src');
      $targetTabContent.find('iframe').attr('src',dataLink);
    }
  }
  else
  {
    window.console && console.log('tabFocus: Can not find groupId='+ groupId +' or tabId='+tabId+'.');
  }
}

tab_init = function(){

  /* tab content click */
  $('.mod_tab-content').children('.header').find('.tab-btn a').on('click',function(){
    var $tab = $(this).closest('.tab-btn');
    var tabId = $tab.data('tab-id');
    var $tabContent = $(this).closest('.header').siblings('.content').children();
    var $tabContentThis = $(this).closest('.header').siblings('.content').children('.tab-content[data-tab-id='+tabId+']');

    //alert(tabId);
    $tab.addClass('active').siblings('.tab-btn').removeClass('active');

    $tabContent.removeClass('show');
    $tabContentThis.addClass('show');

    if($tabContentThis.find('iframe').length > 0 && $tabContentThis.find('iframe').attr('src') == "" ){
      var dataLink = $tabContentThis.find('iframe').data('src');
      $tabContentThis.find('iframe').attr('src',dataLink);
    }
    boxWidth = $tabContentThis.width();
    $tabContentThis.find('iframe').css('width',boxWidth);

    return false;
  });

}

//list-group focus function
listgroup_focus = function(listgroup_focus_id){
  //alert(group_id);
  if(listgroup_focus_id != ""){
    if($('#'+listgroup_focus_id).length != 0){
      $('#'+listgroup_focus_id).find('.list-group-head').addClass('active').next().addClass('opened');
      //dotdotdot();
    }else{
      alert('listgroup_focus_id incorrect or not found!');
    }
  }
}

listgroup_init = function(lockOpenedHead,lockOpenedSiblings){

  /* ###################################################

	lockOpenedHead 		: if true, you can not click to close the opened item.
	lockOpenedSiblings 	: if true, when click any items, the opened siblings will not close automatically.

	*this 2 params value is set to false by default

	###################################################### */

  //set defualt
  if(!lockOpenedHead)
  {
    var lockOpenedHead = false;
  }
  if(!lockOpenedSiblings)
  {
    var lockOpenedSiblings = false;
  }

  //list-group with/without iframe content
  $('.list-group').find('.list-group-content').each(function () {
    if ($(this).is('.opened')) {
      if ($(this).find('iframe').attr('data-iframe') != undefined) {
        var datafile = $(this).find('iframe').attr('data-iframe');
        $(this).find('iframe').attr('src', datafile);
      }
    }
  });

  $('.list-group').on('click','.list-group-head',function(){

    if ($(this).is('.active')) {
      if(!lockOpenedHead) //close list by click itself
      {
        $(this).removeClass('active').next().slideUp();
      }
    } else {
      if(!lockOpenedSiblings)
      {
        $(this).parent().siblings().children('.active').removeClass('active').next().slideUp();
      }

      $(this).addClass('active').next().slideDown();

      if ($(this).next().find('iframe').attr('src') == undefined) {
        var datafile = $(this).next().find('iframe').attr('data-iframe');
        $(this).next().find('iframe').attr('src', datafile);
      }
    }
    return false;

  });
}

bgslider_init = function(){
  /* bg-slider */
  $('.slider-container').show();
  //console.log('123456');
  $('#foo').carouFredSel({
    responsive: true,
    width: '100%',
    // height: 'auto',
    auto: true,
    prev: '#foo_prev',
    next: '#foo_next',
    pagination: "#foo_pager",
    pagination: {
      container : "#foo_pager",
      anchorBuilder : function(item){
        // var word = [ 'test1','test2','test3','test4' ]
        return '<span class="pager_list"><a href="#"></a></span>';
      }
    },
    swipe: {
      onTouch: true
    },
    scroll: {
      fx          : "fade",
      easing      : "linear",
      pauseOnHover: true,
      duration    : 1000
    },
    items: {
      // start       : "random",
      height: 'auto',		//optionally resize item-height
      visible: {
        min:  1,
        max: 1
      }
    }
  });
  /* end bg-slider */
}
//fix caroufredsel
$(window).load( function(){ bgslider_init(); });
// bgslider_init();

/* banner-slide */
 $('.banner-slider-container').show();
 $('#foo1').carouFredSel({
     responsive: true,
     infinite: false,
     circular: false,
     auto: false,
     onCreate: null,
     //width: '100%',
       scroll: {
         items   : 1,
         pauseOnHover: true
       },
       swipe: {
         onTouch: true
       },
       items: {
        //width: 400,
        height: '50%',  //  optionally resize item-height
        visible: {
          min: 1,
          max: 4
        }
       },
       auto: false,
       align: "center",
       prev: '#foo1_prev',
       next: '#foo1_next'
 });

 $('#foo2').carouFredSel({
     responsive: true,
     infinite: false,
     circular: false,
     auto: false,
     onCreate: null,
     //width: '100%',
     scroll: {
         items: 1,
         pauseOnHover: true
     },
     swipe: {
         onTouch: true
     },
     items: {
         //width: 400,
         height: '50%',  //  optionally resize item-height
         visible: {
             min: 1,
             max: 1
         }
     },
     auto: false,
     align: "center",
     prev: '#foo2_prev',
     next: '#foo2_next'
 });
/* end banner-slide */

/* homepage content slide */
$('.trigger-text').on('click',function(){
  var $slideBox = $(this).closest('.content-slide-box');
  $slideBox.addClass('expanded').siblings().removeClass('expanded');
  $slideBox.appendTo($slideBox.parent());
  return false;
});

/* call lightbox */
$('.clightbox').on('click',function(){
  var dataLink = $(this).attr('href');
  var dataWidth = $(this).attr('data-width');
  var dataHeight = $(this).attr('data-height');

  callLightbox(dataLink,dataWidth,dataHeight);

  return false;
});

/* mainmenu */
var menuPcInitialize = true;
expandable_mainmenu_init();

/* sidemenu */
sidemenu_init();

selectric_render();

/* adjust content footer padding */
// adjustFooter();

/* init tab content */
tab_init();

$('.texteditor').children('table').each(function(){
  $(this).wrap('<div class=table_wrapper></div>');
});

truncated = function(){
    $('.article-item .text').dotdotdot({
        after: 'a.read-more'
    });
}

/* Accordion */
//$('#corporate-content-02').collapse("hide");
$('#accordion').collapse({
    toggle: false
});

$('.panel-collapse').on('show.bs.collapse', function () {

    var header = $(this).attr('aria-labelledby');

    $('#' + header + ' a span').html('<i class="fa fa-minus"></i>');

    setTimeout(function () {

        $('body').scrollTo($('#' + header), 500, { offset: { top: -95, left: 0 } });

    }, 500);

});

$('.panel-collapse').on('hide.bs.collapse', function () {

    var header = $(this).attr('aria-labelledby');

    $('#' + header + ' a span').html('<i class="fa fa-plus"></i>');

});


$(document).ready(function() {
    var navpos = $('#fixed-nav').offset();
  // console.log(navpos.top);
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > navpos.top) {
          $('#fixed-nav').addClass('fixed-top');
       }
       else {
          $('#fixed-nav').removeClass('fixed-top');
       }
    });
});

$(document).ready(function() {
  var $oe_menu    = $('#menu');
  var $oe_menu_items  = $oe_menu.children('li');
  var $oe_overlay   = $('#oe_overlay');

  $oe_menu_items.bind('mouseenter',function(){
    var $this = $(this);
    $this.addClass('slided selected');
    $this.children('div').css('z-index','9999').stop(true,true).slideDown(500,function(){
      $oe_menu_items.not('.slided').children('div').hide();
      $this.removeClass('slided');
    });
  }).bind('mouseleave',function(){
    var $this = $(this);

    // edit for one by one
    $this.removeClass('slided');
    $this.children('div').slideUp(500);
    // edit for one by one

    $this.removeClass('selected').children('div').css('z-index','1');
  });

  $oe_menu.bind('mouseenter',function(){
    var $this = $(this);
    $oe_overlay.stop(true,true).fadeTo(200, 0.6);
    $this.addClass('hovered');
  }).bind('mouseleave',function(){
    var $this = $(this);
    $this.removeClass('hovered');
    $oe_overlay.stop(true,true).fadeTo(200, 0);
    $oe_menu_items.children('div').hide();
  })
});

$(document).ready(function () {
    $(".header-clicker li").on('click', '.icon-toggle', function () {
        $(this).parent().removeClass('active');
        $(this).parent().toggleClass('active').siblings().removeClass('active');
        return false;
    });

    $(".button-close").click(function () {
        $(".header-clicker li").removeClass('active');
        return false;
    });
});

// $(window).resize(function () {
//     $('#main-slider').css('margin-top', parseInt($('#header-wrapper').css("height")));
// });

// $(window).load(function () {
//     $('#main-slider').css('margin-top', parseInt($('#header-wrapper').css("height")));
// });


