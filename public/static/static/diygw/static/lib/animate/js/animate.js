!function(i){"function"==typeof define&&define.amd?define(["jquery"],i):i("object"==typeof exports?require("jquery"):jQuery)}(function(i){function n(n){this.opt=i.extend({},{el:!1,hide:!1,effects:!1,callback:!1},n),this.effects=this.opt.effects,this.el=this.opt.el,this.indx=0,this.callback=this.opt.callback,i(this.el).data("effects",this.effects),this.next=function(){var n=this.effects[this.indx];n.once=!0,n.indx=this.indx;var t=this;return n.callback=function(){t.indx++,"undefined"!=typeof t.effects[t.indx]?(t.opt.hide&&i(t.el).css("visibility","hidden"),t.next()):(t.opt.hide&&i(t.el).css("visibility","hidden"),"undefined"!=typeof t.callback&&i.isFunction(t.callback)&&t.callback(t.el,t.effects))},i(this.el).animateCSS(n),this},this.destroy=function(){var n=i(this),t=n.data("effects");n.removeClass("animated"),"hidden"===n.css("visibility")&&n.css("visibility","visible"),n.is(":hidden")&&n.show(),_.each(t,function(i){n.removeClass(i.effect)}),n.removeData("bs.animateSequence")}}function t(t){var a=null,e=this.each(function(){var e=i(this),o=e.data("bs.animateSequence");if(!o){t=i.extend({},t);var s=i(this).data("animate");if(s&&(t.effects=t.effects||JSON.parse(s)),!i.isArray(t.effects))return!1;e.data("bs.animateSequence",o=new n({el:this,effects:t.effects,callback:t.callback}).next())}"string"==typeof t&&(a=o[t].call(e))});return a?a:e}function a(n){var t=null,a=this.each(function(){var a=i(this),o=a.data("bs.animateBox");o||a.data("bs.animateBox",o=new e(this)),"string"==typeof n&&(t=o[n].call(a))});return null!=t?t:a}i.fn.extend({animateCSS:function(n){var t,a,e,o,s,c,u,f,r;return u={once:!0,effect:"",delay:0,indx:0,count:1,hide:!1,animationClass:"animated",callback:null,duration:1e3,debug:!1},f="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",u=i.extend(u,n),s=function(i){return a(i)},a=function(i){if(0===parseInt(u.count)&&(u.count=" infinite"),0==u.indx)return c(i),setAnimation(i),r(i),t(i),o(i);var n=u.delay;return u.delay=0,setTimeout(function(){return c(i),setAnimation(i),r(i),t(i),o(i)},1e3*parseInt(n))},t=function(i){return i.addClass(u.effect+" "+u.animationClass+" ")},r=function(i){if("hidden"===i.css("visibility")&&i.css("visibility","visible"),i.is(":hidden"))return i.show()},c=function(i){return i.removeClass(u.effect+" "+u.animationClass)},removeAnimation=function(i){return i.css({"-webkit-animation-delay":"","-moz-animation-delay":"","-o-animation-delay":"","animation-delay":"","-webkit-animation-duration":"","-moz-animation-duration":"","-o-animation-duration":"","animation-duration":"","-webkit-animation-iteration-count":"","-moz-animation-iteration-count":"","-o-animation-iteration-count":"","animation-iteration-count":""})},setAnimation=function(i){return i.css({"-webkit-animation-duration":u.duration,"-moz-animation-duration":u.duration,"-o-animation-duration":u.duration,"animation-duration":u.duration,"-webkit-animation-delay":u.delay,"-moz-animation-delay":u.delay,"-o-animation-delay":u.delay,"animation-delay":u.delay,"-webkit-animation-iteration-count":u.count,"-moz-animation-iteration-count":u.count,"-o-animation-iteration-count":u.count,"animation-iteration-count":u.count})},e=function(i){if("infinite"!=u.count&&u.once===!0&&c(i),u.hide&&i.css("visibility","hidden"),removeAnimation(i),"function"==typeof u.callback)return u.callback(i,u.effect)},o=function(i){return i.one(f,function(){return e(i)})},this.each(function(){return s(i(this))})}}),i.fn.animateSequence=t,i.fn.animateSequence.Constructor=n;var e=function(n){this.container=i(n),this.init()};e.prototype={namespace:"animated",init:function(){this.setBoxs(),this.loadBoxs()},setBoxs:function(){var n=this;n.boxs=this.container.find(".animate"),n.boxs.each(function(){i(this).css("opacity",0)})},loadBoxs:function(){var n=this;i(window).bind("scroll."+this.namespace,function(){n.showBoxs()}),n.showBoxs()},showBoxs:function(){var n=this;n.boxs.each(function(){i(this).isVisable()&&(i(this).css("opacity",1),i(this).animateSequence({effects:i(this).data("animate")}))})},hideBoxs:function(){var n=this;this.boxs.each(function(){i(this).unbind(n.namespace)})}},i.fn.animateBox=a,i.fn.animateBox.Constructor=e,i(window).on("load",function(){i('[data-ride="animate"]').each(function(){t.call(i(this))}),i('[data-ride="animatebox"]').each(function(){a.call(i(this))})})});