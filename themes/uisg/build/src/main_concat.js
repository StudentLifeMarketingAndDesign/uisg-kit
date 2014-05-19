$(window).load(function() {

	var $meetings = $(".main-content table");
	$meetings.attr('id', function (index) {
	    return 'meeting-' + index;
	});
	
	var $showMore = $(".main-content .showMore");
	$showMore.attr('id', function (index) {
		return 'showMore-' + index;
	});
	
	var general = $("#meeting-0 .table-page").size();
	
	var generalMore = 3

	if (general > 1) {
		$('#meeting-0 .table-page').hide();
		$('#meeting-0 .table-start').show();
		$('#showMore-0').append("<button type='button' class='page-button'>Show More</button");
		$('.page-button').on("click", function() {
			$('#meeting-0 .table-page:lt(' + generalMore + ')').show("easing");
			generalMore++;
			if (generalMore > general) {
				$('#showMore-0').hide();
			}
		});
		
	}	
	
	var committee = $("#meeting-1 .table-page").size();
	
	var committeeMore = 3

	if (committee > 1) {
		$('#meeting-1 .table-page').hide();
		$('#meeting-1 .table-start').show();
		$('#showMore-1').append("<button type='button' class='page-button'>Show More</button");
		$('.page-button').on("click", function() {
			$('#meeting-1 .table-page:lt(' + committeeMore + ')').show("easing");
			committeeMore++;
			if (committeeMore > committee) {
				$('#showMore-1').hide();
			}
		});
		
	}	
	
})
	




$(window).load(function(){$(".search-toggle").click(function(){$(this).toggleClass("active");$(".division-search").slideToggle();return!1});$(".directory-toggle").click(function(){$(this).toggleClass("active");$(".division-directory").slideToggle();return!1});$(".division-menu").on("click",".has-subnav a",function(){if($(this).next("ul").is(":visible")){$(this).next("ul").slideUp("fast");$(this).removeClass("active")}else{$(this).closest("ul").find(".active").next("ul").slideUp("fast");$(this).closest("ul").find(".active").removeClass("active");$(this).next().slideToggle("fast");$(this).addClass("active")}})});
$(window).load(function() {	


    $('.search-toggle').click(function() {
        $(this).toggleClass('active');
        $('.division-search').slideToggle();
        return false;
    });

	$('.directory-toggle').click(function() {
		$(this).toggleClass("active");
		$('.division-directory').slideToggle();
		return false;
	});

    $('.division-menu').on('click', '.has-subnav a', function() {
        $(this).next().slideToggle('slow');
        $(this).toggleClass('active');

    });

});
$(window).load(function(){$(".nav-title a").click(function(){$(".nav-main-wrapper").toggleClass("expand");return!1});$(".module .media").fitVids()});
$(window).load(function() {
	// add js class to body if javascript enabled
    //$('body').addClass('js');

	// Flexslider
	// $('.flexslider').flexslider({
	// 	slideshow: false
	// });
	
	if ($('.flexslider').length){

		$('.flexslider').show();

		 //Flexslider
		$('.flexslider').flexslider({
			animation: "slide",
			animationLoop: true,
			itemMargin: 0,
			minItems: 1,
			maxItems: 1,
			itemWidth: 500,
		});
	}

	$('.nav-title a').click(function() {
		$('.nav-main-wrapper').toggleClass('expand');
		return false;
	})

	/* FitVids */
	$(".module .media").fitVids();

});
   
//@codekit-append "vendor/jquery.fitvids.min.js"
//@codekit-append "vendor/jquery.flexslider-min.js"
/* **********************************************
     Begin jquery.fitvids.min.js
********************************************** *//*global jQuery *//*jshint multistr:true browser:true *//*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/(function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null},r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return r.className="fit-vids-style",r.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",i.parentNode.insertBefore(r,i),t&&e.extend(n,t),this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com']","object","embed"];n.customSelector&&t.push(n.customSelector);var r=e(this).find(t.join(","));r.each(function(){var t=e(this);if(!("embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),i=n/r;if(!t.attr("id")){var s="fitvid"+Math.floor(999999*Math.random());t.attr("id",s)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*i+"%"),t.removeAttr("height").removeAttr("width")}})})}})(jQuery);(function(e){e.flexslider=function(t,n){var r=e(t),i=e.extend({},e.flexslider.defaults,n),s=i.namespace,o="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,u=o?"touchend":"click",a="vertical"===i.direction,f=i.reverse,l=0<i.itemWidth,c="fade"===i.animation,h=""!==i.asNavFor,p={};e.data(t,"flexslider",r);p={init:function(){r.animating=!1;r.currentSlide=i.startAt;r.animatingTo=r.currentSlide;r.atEnd=0===r.currentSlide||r.currentSlide===r.last;r.containerSelector=i.selector.substr(0,i.selector.search(" "));r.slides=e(i.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=0<e(i.sync).length;"slide"===i.animation&&(i.animation="swing");r.prop=a?"top":"marginLeft";r.args={};r.manualPause=!1;var t=r,n;if(n=!i.video)if(n=!c)if(n=i.useCSS)e:{n=document.createElement("div");var s=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],u;for(u in s)if(void 0!==n.style[s[u]]){r.pfx=s[u].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";n=!0;break e}n=!1}t.transitions=n;""!==i.controlsContainer&&(r.controlsContainer=0<e(i.controlsContainer).length&&e(i.controlsContainer));""!==i.manualControls&&(r.manualControls=0<e(i.manualControls).length&&e(i.manualControls));i.randomize&&(r.slides.sort(function(){return Math.round(Math.random())-.5}),r.container.empty().append(r.slides));r.doMath();h&&p.asNav.setup();r.setup("init");i.controlNav&&p.controlNav.setup();i.directionNav&&p.directionNav.setup();i.keyboard&&(1===e(r.containerSelector).length||i.multipleKeyboard)&&e(document).bind("keyup",function(e){e=e.keyCode;!r.animating&&(39===e||37===e)&&(e=39===e?r.getTarget("next"):37===e?r.getTarget("prev"):!1,r.flexAnimate(e,i.pauseOnAction))});i.mousewheel&&r.bind("mousewheel",function(e,t){e.preventDefault();var n=0>t?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,i.pauseOnAction)});i.pausePlay&&p.pausePlay.setup();i.slideshow&&(i.pauseOnHover&&r.hover(function(){!r.manualPlay&&!r.manualPause&&r.pause()},function(){!r.manualPause&&!r.manualPlay&&r.play()}),0<i.initDelay?setTimeout(r.play,i.initDelay):r.play());o&&i.touch&&p.touch();(!c||c&&i.smoothHeight)&&e(window).bind("resize focus",p.resize);setTimeout(function(){i.start(r)},200)},asNav:{setup:function(){r.asNav=!0;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(s+"active-slide").eq(r.currentItem).addClass(s+"active-slide");r.slides.click(function(t){t.preventDefault();var t=e(this),n=t.index();!e(i.asNavFor).data("flexslider").animating&&!t.hasClass("active")&&(r.direction=r.currentItem<n?"next":"prev",r.flexAnimate(n,i.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){r.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var t=1,n;r.controlNavScaffold=e('<ol class="'+s+"control-nav "+s+("thumbnails"===i.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<r.pagingCount)for(var a=0;a<r.pagingCount;a++)n="thumbnails"===i.controlNav?'<img src="'+r.slides.eq(a).attr("data-thumb")+'"/>':"<a>"+t+"</a>",r.controlNavScaffold.append("<li>"+n+"</li>"),t++;r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);p.controlNav.set();p.controlNav.active();r.controlNavScaffold.delegate("a, img",u,function(t){t.preventDefault();var t=e(this),n=r.controlNav.index(t);t.hasClass(s+"active")||(r.direction=n>r.currentSlide?"next":"prev",r.flexAnimate(n,i.pauseOnAction))});o&&r.controlNavScaffold.delegate("a","click touchstart",function(e){e.preventDefault()})},setupManual:function(){r.controlNav=r.manualControls;p.controlNav.active();r.controlNav.live(u,function(t){t.preventDefault();var t=e(this),n=r.controlNav.index(t);t.hasClass(s+"active")||(n>r.currentSlide?r.direction="next":r.direction="prev",r.flexAnimate(n,i.pauseOnAction))});o&&r.controlNav.live("click touchstart",function(e){e.preventDefault()})},set:function(){r.controlNav=e("."+s+"control-nav li "+("thumbnails"===i.controlNav?"img":"a"),r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(s+"active").eq(r.animatingTo).addClass(s+"active")},update:function(t,n){1<r.pagingCount&&"add"===t?r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>")):1===r.pagingCount?r.controlNavScaffold.find("li").remove():r.controlNav.eq(n).closest("li").remove();p.controlNav.set();1<r.pagingCount&&r.pagingCount!==r.controlNav.length?r.update(n,t):p.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+s+'direction-nav"><li><a class="'+s+'prev" href="#">'+i.prevText+'</a></li><li><a class="'+s+'next" href="#">'+i.nextText+"</a></li></ul>");r.controlsContainer?(e(r.controlsContainer).append(t),r.directionNav=e("."+s+"direction-nav li a",r.controlsContainer)):(r.append(t),r.directionNav=e("."+s+"direction-nav li a",r));p.directionNav.update();r.directionNav.bind(u,function(t){t.preventDefault();t=e(this).hasClass(s+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(t,i.pauseOnAction)});o&&r.directionNav.bind("click touchstart",function(e){e.preventDefault()})},update:function(){var e=s+"disabled";1===r.pagingCount?r.directionNav.addClass(e):i.animationLoop?r.directionNav.removeClass(e):0===r.animatingTo?r.directionNav.removeClass(e).filter("."+s+"prev").addClass(e):r.animatingTo===r.last?r.directionNav.removeClass(e).filter("."+s+"next").addClass(e):r.directionNav.removeClass(e)}},pausePlay:{setup:function(){var t=e('<div class="'+s+'pauseplay"><a></a></div>');r.controlsContainer?(r.controlsContainer.append(t),r.pausePlay=e("."+s+"pauseplay a",r.controlsContainer)):(r.append(t),r.pausePlay=e("."+s+"pauseplay a",r));p.pausePlay.update(i.slideshow?s+"pause":s+"play");r.pausePlay.bind(u,function(t){t.preventDefault();e(this).hasClass(s+"pause")?(r.manualPause=!0,r.manualPlay=!1,r.pause()):(r.manualPause=!1,r.manualPlay=!0,r.play())});o&&r.pausePlay.bind("click touchstart",function(e){e.preventDefault()})},update:function(e){"play"===e?r.pausePlay.removeClass(s+"pause").addClass(s+"play").text(i.playText):r.pausePlay.removeClass(s+"play").addClass(s+"pause").text(i.pauseText)}},touch:function(){function e(e){p=a?s-e.touches[0].pageY:s-e.touches[0].pageX;v=a?Math.abs(p)<Math.abs(e.touches[0].pageX-o):Math.abs(p)<Math.abs(e.touches[0].pageY-o);if(!v||500<Number(new Date)-d)e.preventDefault(),!c&&r.transitions&&(i.animationLoop||(p/=0===r.currentSlide&&0>p||r.currentSlide===r.last&&0<p?Math.abs(p)/h+2:1),r.setProps(u+p,"setTouch"))}function n(){t.removeEventListener("touchmove",e,!1);if(r.animatingTo===r.currentSlide&&!v&&null!==p){var a=f?-p:p,l=0<a?r.getTarget("next"):r.getTarget("prev");r.canAdvance(l)&&(550>Number(new Date)-d&&50<Math.abs(a)||Math.abs(a)>h/2)?r.flexAnimate(l,i.pauseOnAction):c||r.flexAnimate(r.currentSlide,i.pauseOnAction,!0)}t.removeEventListener("touchend",n,!1);u=p=o=s=null}var s,o,u,h,p,d,v=!1;t.addEventListener("touchstart",function(c){r.animating?c.preventDefault():1===c.touches.length&&(r.pause(),h=a?r.h:r.w,d=Number(new Date),u=l&&f&&r.animatingTo===r.last?0:l&&f?r.limit-(r.itemW+i.itemMargin)*r.move*r.animatingTo:l&&r.currentSlide===r.last?r.limit:l?(r.itemW+i.itemMargin)*r.move*r.currentSlide:f?(r.last-r.currentSlide+r.cloneOffset)*h:(r.currentSlide+r.cloneOffset)*h,s=a?c.touches[0].pageY:c.touches[0].pageX,o=a?c.touches[0].pageX:c.touches[0].pageY,t.addEventListener("touchmove",e,!1),t.addEventListener("touchend",n,!1))},!1)},resize:function(){!r.animating&&r.is(":visible")&&(l||r.doMath(),c?p.smoothHeight():l?(r.slides.width(r.computedW),r.update(r.pagingCount),r.setProps()):a?(r.viewport.height(r.h),r.setProps(r.h,"setTotal")):(i.smoothHeight&&p.smoothHeight(),r.newSlides.width(r.computedW),r.setProps(r.computedW,"setTotal")))},smoothHeight:function(e){if(!a||c){var t=c?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(i.sync).data("flexslider"),s=r.animatingTo;switch(t){case"animate":n.flexAnimate(s,i.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}}};r.flexAnimate=function(t,n,u,v,g){h&&1===r.pagingCount&&(r.direction=r.currentItem<t?"next":"prev");if(!r.animating&&(r.canAdvance(t,g)||u)&&r.is(":visible")){if(h&&v){if(u=e(i.asNavFor).data("flexslider"),r.atEnd=0===t||t===r.count-1,u.flexAnimate(t,!0,!1,!0,g),r.direction=r.currentItem<t?"next":"prev",u.direction=r.direction,Math.ceil((t+1)/r.visible)-1===r.currentSlide||0===t)return r.currentItem=t,r.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),!1;r.currentItem=t,r.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),t=Math.floor(t/r.visible)}r.animating=!0;r.animatingTo=t;i.before(r);n&&r.pause();r.syncExists&&!g&&p.sync("animate");i.controlNav&&p.controlNav.active();l||r.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide");r.atEnd=0===t||t===r.last;i.directionNav&&p.directionNav.update();t===r.last&&(i.end(r),i.animationLoop||r.pause());if(c)o?(r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1}),r.slides.eq(t).css({opacity:1,zIndex:2}),r.slides.unbind("webkitTransitionEnd transitionend"),r.slides.eq(r.currentSlide).bind("webkitTransitionEnd transitionend",function(){i.after(r)}),r.animating=!1,r.currentSlide=r.animatingTo):(r.slides.eq(r.currentSlide).fadeOut(i.animationSpeed,i.easing),r.slides.eq(t).fadeIn(i.animationSpeed,i.easing,r.wrapup));else{var y=a?r.slides.filter(":first").height():r.computedW;l?(t=i.itemWidth>r.w?2*i.itemMargin:i.itemMargin,t=(r.itemW+t)*r.move*r.animatingTo,t=t>r.limit&&1!==r.visible?r.limit:t):t=0===r.currentSlide&&t===r.count-1&&i.animationLoop&&"next"!==r.direction?f?(r.count+r.cloneOffset)*y:0:r.currentSlide===r.last&&0===t&&i.animationLoop&&"prev"!==r.direction?f?0:(r.count+1)*y:f?(r.count-1-t+r.cloneOffset)*y:(t+r.cloneOffset)*y;r.setProps(t,"",i.animationSpeed);if(r.transitions){if(!i.animationLoop||!r.atEnd)r.animating=!1,r.currentSlide=r.animatingTo;r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(y)})}else r.container.animate(r.args,i.animationSpeed,i.easing,function(){r.wrapup(y)})}i.smoothHeight&&p.smoothHeight(i.animationSpeed)}};r.wrapup=function(e){!c&&!l&&(0===r.currentSlide&&r.animatingTo===r.last&&i.animationLoop?r.setProps(e,"jumpEnd"):r.currentSlide===r.last&&0===r.animatingTo&&i.animationLoop&&r.setProps(e,"jumpStart"));r.animating=!1;r.currentSlide=r.animatingTo;i.after(r)};r.animateSlides=function(){r.animating||r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.playing=!1;i.pausePlay&&p.pausePlay.update("play");r.syncExists&&p.sync("pause")};r.play=function(){r.animatedSlides=setInterval(r.animateSlides,i.slideshowSpeed);r.playing=!0;i.pausePlay&&p.pausePlay.update("pause");r.syncExists&&p.sync("play")};r.canAdvance=function(e,t){var n=h?r.pagingCount-1:r.last;return t?!0:h&&r.currentItem===r.count-1&&0===e&&"prev"===r.direction?!0:h&&0===r.currentItem&&e===r.pagingCount-1&&"next"!==r.direction?!1:e===r.currentSlide&&!h?!1:i.animationLoop?!0:r.atEnd&&0===r.currentSlide&&e===n&&"next"!==r.direction?!1:r.atEnd&&r.currentSlide===n&&0===e&&"next"===r.direction?!1:!0};r.getTarget=function(e){r.direction=e;return"next"===e?r.currentSlide===r.last?0:r.currentSlide+1:0===r.currentSlide?r.last:r.currentSlide-1};r.setProps=function(e,t,n){var s,o=e?e:(r.itemW+i.itemMargin)*r.move*r.animatingTo;s=-1*function(){if(l)return"setTouch"===t?e:f&&r.animatingTo===r.last?0:f?r.limit-(r.itemW+i.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:o;switch(t){case"setTotal":return f?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return f?e:r.count*e;case"jumpStart":return f?r.count*e:e;default:return e}}()+"px";r.transitions&&(s=a?"translate3d(0,"+s+",0)":"translate3d("+s+",0,0)",n=void 0!==n?n/1e3+"s":"0s",r.container.css("-"+r.pfx+"-transition-duration",n));r.args[r.prop]=s;(r.transitions||void 0===n)&&r.container.css(r.args)};r.setup=function(t){if(c)r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(o?r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+i.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2}):r.slides.eq(r.currentSlide).fadeIn(i.animationSpeed,i.easing)),i.smoothHeight&&p.smoothHeight();else{var n,u;"init"===t&&(r.viewport=e('<div class="'+s+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container),r.cloneCount=0,r.cloneOffset=0,f&&(u=e.makeArray(r.slides).reverse(),r.slides=e(u),r.container.empty().append(r.slides)));i.animationLoop&&!l&&(r.cloneCount=2,r.cloneOffset=1,"init"!==t&&r.container.find(".clone").remove(),r.container.append(r.slides.first().clone().addClass("clone")).prepend(r.slides.last().clone().addClass("clone")));r.newSlides=e(i.selector,r);n=f?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;a&&!l?(r.container.height(200*(r.count+r.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},"init"===t?100:0)):(r.container.width(200*(r.count+r.cloneCount)+"%"),r.setProps(n*r.computedW,"init"),setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});i.smoothHeight&&p.smoothHeight()},"init"===t?100:0))}l||r.slides.removeClass(s+"active-slide").eq(r.currentSlide).addClass(s+"active-slide")};r.doMath=function(){var e=r.slides.first(),t=i.itemMargin,n=i.minItems,s=i.maxItems;r.w=r.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();l?(r.itemT=i.itemWidth+t,r.minW=n?n*r.itemT:r.w,r.maxW=s?s*r.itemT:r.w,r.itemW=r.minW>r.w?(r.w-t*n)/n:r.maxW<r.w?(r.w-t*s)/s:i.itemWidth>r.w?r.w:i.itemWidth,r.visible=Math.floor(r.w/(r.itemW+t)),r.move=0<i.move&&i.move<r.visible?i.move:r.visible,r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1),r.last=r.pagingCount-1,r.limit=1===r.pagingCount?0:i.itemWidth>r.w?(r.itemW+2*t)*r.count-r.w-t:(r.itemW+t)*r.count-r.w-t):(r.itemW=r.w,r.pagingCount=r.count,r.last=r.count-1);r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();l||(e<r.currentSlide?r.currentSlide+=1:e<=r.currentSlide&&0!==e&&(r.currentSlide-=1),r.animatingTo=r.currentSlide);if(i.controlNav&&!r.manualControls)if("add"===t&&!l||r.pagingCount>r.controlNav.length)p.controlNav.update("add");else if("remove"===t&&!l||r.pagingCount<r.controlNav.length)l&&r.currentSlide>r.last&&(r.currentSlide-=1,r.animatingTo-=1),p.controlNav.update("remove",r.last);i.directionNav&&p.directionNav.update()};r.addSlide=function(t,n){var s=e(t);r.count+=1;r.last=r.count-1;a&&f?void 0!==n?r.slides.eq(r.count-n).after(s):r.container.prepend(s):void 0!==n?r.slides.eq(n).before(s):r.container.append(s);r.update(n,"add");r.slides=e(i.selector+":not(.clone)",r);r.setup();i.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;isNaN(t)?e(t,r.slides).remove():a&&f?r.slides.eq(r.last).remove():r.slides.eq(t).remove();r.doMath();r.update(n,"remove");r.slides=e(i.selector+":not(.clone)",r);r.setup();i.removed(r)};p.init()};e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};e.fn.flexslider=function(t){void 0===t&&(t={});if("object"==typeof t)return this.each(function(){var n=e(this),r=n.find(t.selector?t.selector:".slides > li");1===r.length?(r.fadeIn(400),t.start&&t.start(n)):void 0==n.data("flexslider")&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:"number"==typeof t&&n.flexAnimate(t,!0)}}})(jQuery);
//@codekit-append "vendor/jquery.fitvids.min.js"