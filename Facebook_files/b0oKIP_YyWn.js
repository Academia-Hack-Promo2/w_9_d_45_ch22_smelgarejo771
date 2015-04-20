/*!CK:1707132682!*//*1429198944,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["09wwW"]); }

__d("BirthdayRemindersCounterEvent",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={OPEN_MODAL:"open_modal",PHOTO_FLOW_WITHOUT_PERSONALIZED:"photo_flow_without_personalized",PHOTO_FLOW_WITH_PERSONALIZED:"photo_flow_with_personalized",ADD_PERSONALIZED_PHOTO:"add_personalized_photo",CLICK_ALBUM:"click_album",ADD_ALBUM_PHOTO:"add_album_photo",SELFIE_FLOW:"selfie_flow",ADD_SELFIE:"add_selfie",ADD_UPLOADED:"add_uploaded",POST_WITH_PHOTO:"post_with_photo",POST_WITHOUT_PHOTO:"post_without_photo",POST_NON_SCHEDULED:"post_non_scheduled",POST_SCHEDULED:"post_scheduled",CANCEL_SCHEDULED_MODAL:"cancel_scheduled_modal",CANCEL_SCHEDULED_TIMELINE:"cancel_scheduled_timeline"};},null);
__d("CalendarUI",["Event","Arbiter","AsyncRequest","CSS","DOM","DOMQuery","DOMScroll","Hovercard","Parent","Run","ScrollAwareDOM","Style","UIPagelet","Vector","ViewportBounds","$","copyProperties","ge","goURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){b.__markCompiled&&b.__markCompiled();function z(){}w(z,{EVENT_ACTION:'EVENT_ACTION',_todayButton:null,_todayElement:null,_upPager:null,_months:[],_timestamp:null,_registeredReminders:false,init:function(){h.subscribe(this.EVENT_ACTION,function(ba,ca){s.loadFromEndpoint('CalendarHeaderPagelet','pagelet_calendar_header',JSON.parse(ca.actioncontext));});var aa=u.addTop(function(){var ba=x('pagelet_calendar_header');if(ba&&r.isFixed(ba.firstChild)){var ca=ba.firstChild.getBoundingClientRect();return ca.bottom;}return 0;});p.onLeave(function(){aa.remove();});},initGridItem:function(aa,ba){g.listen(aa,'click',function(event){if(o.byTag(event.getTarget(),'a'))return;i.bootstrap(ba,aa);return;});},pageUp:function(){j.removeClass(this._upPager.parentNode,'fbCalendarNoPadding');j.addClass(this._upPager.parentNode,'pvl');if(this._upPager)this._upPager.click();},getScrollFunction:function(aa){var ba=this;return function(event){var ca=o.byClass(event.getTarget(),'fbCalendarBox'),da=ba._months.indexOf(ca);if(aa&&da===0){ba.pageUp();}else ba.scrollTo(ba._months[da+(aa?-1:1)],true);};},registerArrowHandlers:function(aa,ba){g.listen(aa,'click',this.getScrollFunction(true));g.listen(ba,'click',this.getScrollFunction(false));},initScrollItem:function(aa,ba){g.listen(aa,'click',this.scrollTo.bind(this,ba));},scrollTo:function(aa,ba){aa=l.isNode(aa)?aa:x(aa);var ca=0,da=40;if(aa){var ea=t.getElementPosition(v('fbCalendarWrapper')).y,fa;if(document.getElementById('headerArea')){fa=t.getElementDimensions(v('headerArea')).y;}else{fa=0;da=12;}var ga=t.getElementPosition(aa).y;ca=ga-ea-fa+da;}else ca=t.getElementPosition(v('bottomContent')).y;m.scrollTo(new t(0,ca,'document'),ba!==false);},initUnhide:function(aa,ba){g.listen(aa,'click',function(event){var ca=o.byClass(ba,'fbCalendarItem');k.remove(ba);j.removeClass(k.find(ca,'.fbHiddenCalendarItem'),'fbHiddenCalendarItem');});},registerMonth:function(aa,ba){if(!this._timestamp||ba>this._timestamp){this._months.push(aa);}else this._months.unshift(aa);this._timestamp=ba;},registerHomepageReminders:function(){if(!this._registeredReminders){h.subscribe(this.EVENT_ACTION,function(aa,ba){if(x('pagelet_reminders'))s.loadFromEndpoint('RemindersPagelet','pagelet_reminders');});this._registeredReminders=true;}},registerTodayClickHandler:function(){this._todayButton.onclick=null;g.listen(this._todayButton,'click',this.scrollTo.bind(this,this._todayElement));},registerUpPagerButton:function(aa){var ba=l.isNode(aa)?aa:x(aa);j.removeClass(ba,'pvl');j.removeClass(ba,'hidden_elem');j.addClass(ba,'fbCalendarNoPadding');if(ba){this._upPager=v(ba.getElementsByTagName('a')[0]);}else this._upPager=null;},registerTodayElement:function(aa){this._todayElement=l.isNode(aa)?aa:x(aa);this._todayButton&&this.registerTodayClickHandler();},registerTodayButton:function(aa){this._todayButton=aa;this._todayElement&&this.registerTodayClickHandler();},registerEventLink:function(aa,ba){h.subscribe(this.EVENT_ACTION,function(ca,da){if(da.eid===ba)switch(da.action){case 'GOING':j.removeClass(aa.parentNode,"hidden_elem");j.addClass(aa,"fbCalendarEventGoing");break;case 'MAYBE':j.removeClass(aa.parentNode,"hidden_elem");j.removeClass(aa,"fbCalendarEventGoing");break;case 'DECLINED':case 'HIDDEN':n.hide(true);j.addClass(aa.parentNode,"hidden_elem");break;case 'EDITED':if(da.name)k.setContent(aa,da.name);if(da.day){var ea=x("pagelet_calendar_day_"+da.day);if(ea){var fa=l.find(ea,".fbCalendarGridEventList");if(l.scry(fa,"li").length>=4){j.addClass(aa.parentNode,"hidden_elem");s.loadFromEndpoint("CalendarDayPagelet","pagelet_calendar_day_"+da.day,{day:da.timestamp});}else k.prependContent(fa,aa.parentNode);}else j.addClass(aa.parentNode,"hidden_elem");}break;}});},informEventGoing:function(aa,ba){h.inform(this.EVENT_ACTION,{eid:aa,action:'GOING',actioncontext:ba});},informEventMaybe:function(aa,ba){h.inform(this.EVENT_ACTION,{eid:aa,action:'MAYBE',actioncontext:ba});},informEventDeclined:function(aa,ba){h.inform(this.EVENT_ACTION,{eid:aa,action:'DECLINED',actioncontext:ba});},informEventHidden:function(aa,ba){h.inform(this.EVENT_ACTION,{eid:aa,action:'HIDDEN',actioncontext:ba});},informEventEdited:function(aa,ba,ca,da){h.inform(this.EVENT_ACTION,{eid:aa,action:'EDITED',name:ba,day:ca,timestamp:da});},removeCalendarListHeader:function(aa){var ba=k.scry(aa,"^.fbCalendarOverlay .fbCalendarItem"),ca=k.find(aa,"^.fbCalendarItem");if(ba.length==1)ca=k.find(aa,"^.fbCalendarOverlay");k.remove(ca);},reloadPage:function(){y(window.location);},unhide:function(aa){setTimeout(function(){q.monitor(aa.nextSibling,j.show.bind(null,aa));},0);}});e.exports=z;},null);
__d("ComposerXNUX",["AsyncRequest","ComposerXDragDrop","CSS","DOM","Event","SubscriptionsHandler","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o={},p={};function q(s,t,u){var v=u.dataTransfer.items;if(v){var w=h.filterImages(v);if(!w.length)return;}r.acknowledgeDialog(s,t);}var r={CAMERA_NUX:'camera_nux_seen',ADD_MORE_NUX:'add_more_nux_seen',HMU_NUX:'hmu_nux_seen',HMU_POST_NUX:'hmu_post_nux_seen',FACEREC_SUGGESTIONS_NUX:'facerec_suggestions_nux_seen',TAGGING_FLYOUT_NUX:'tagging_flyout_nux_seen',OGCOMPOSER_NEW_ICON_PICKER_NUX:'minutiae_icon_picker_nux_seen',SHARER_MINUTIAE_NUX:'sharer_minutiae_nux_seen',ADD_STICKERS_NUX:'add_stickers_nux_seen',UPCOMING_BIRTHDAYS_NUX:'upcoming_birthdays_nux_seen',onInit:function(s,t,u){if(o[u])return;p[u]=p[u]||new l();var v=p[u];v.engage();var w=s.getRoot();i.addClass(w,"_4bka");var x=j.scry(w,"._3o-a");x.forEach(function(y){v.addSubscriptions(k.listen(y,'click',r.acknowledgeDialog.bind(null,u,s)));});if(u==r.CAMERA_NUX)v.addSubscriptions(k.listen(document,'dragenter',q.bind(null,u,s)));v.addSubscriptions(s.subscribe('cancel',r.sendMarkSeenRequest.bind(null,u)),s.subscribe('hide',v.release.bind(v)));s.setContext(t).show();},acknowledgeDialog:function(s,t){r.sendMarkSeenRequest(s);t.hide();},sendMarkSeenRequest:function(s){if(!o[s]){new g('/ajax/photos/composer/mark_nux_seen.php').setData({type:s}).send();o[s]=true;}},onCleanup:function(s){s.hide();}};e.exports=r;},null);
__d("XEventReminderImpressionLoggerAsyncController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/events\/ajax\/reminder\/impression\/",{acontext:{type:"StringToStringMap",required:true},data:{type:"StringToStringMap"}});},null);
__d("EventReminderController",["Arbiter","AsyncRequest","DOM","DOMQuery","Event","Scroll","ScrollableArea","XEventReminderImpressionLoggerAsyncController"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o={registerReminder:function(p,q){this._firstOpen=true;var r=p.getDialog(),s=m.getInstance(j.scry(r.getRoot(),'.uiScrollableArea')[0]),t=null;if(s){t=i.find(s.getElement(),'div.uiScrollableAreaWrap');s.subscribe('scroll',function(){return g.inform('EventReminderDialog/scroll',{rect:t.getBoundingClientRect(),scrollTop:l.getTop(t)});});}k.listen(p.getRoot(),'click',function(event){event.preventDefault();});r.subscribe('show',function(){var u=n.getURIBuilder().setStringToStringMap('acontext',q).setStringToStringMap('data',{first_open:this._firstOpen}).getURI();new h(u).send();this._firstOpen=false;var v={};if(t)v={rect:t.getBoundingClientRect()};g.inform('EventReminderDialog/show',v);}.bind(this));r.subscribe('hide',function(){return g.inform('EventReminderDialog/hide');});}};e.exports=o;},null);
__d("RequestListController",["Arbiter","ChannelConstants","CSS","DOM"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(l){"use strict";this.$RequestListController0=l;this.$RequestListController1=0;this.$RequestListController2={};g.subscribe(h.getArbiterType('jewel_requests_remove_old'),this.$RequestListController3.bind(this));this.fromDom();}k.prototype.$RequestListController4=function(l){"use strict";var m=l.match(/^(\d+)_(\d+)/);return (m)?{requester:m[1],type:m[2]}:(void 0);};k.prototype.$RequestListController5=function(l){"use strict";var m=l?this.$RequestListController4(l):(void 0),n;if(m&&m.requester){n=parseInt(m.requester,10);if(isNaN(n))n=(void 0);}var o;if(m&&m.type){o=parseInt(m.type,10);if(isNaN(o))o=(void 0);}return {requester:n,type:o};};k.prototype.fromDom=function(){"use strict";j.scry(this.$RequestListController0,'.fbRequestList li.objectListItem').forEach(function(l){var m=l.getAttribute('id');if(m){var n=this.$RequestListController5(m);if(n.requester)this.$RequestListController2[n.requester]={id:m,item:l};++this.$RequestListController1;}}.bind(this));this.$RequestListController6();};k.prototype.$RequestListController3=function(l,m){"use strict";var n=this.$RequestListController2[m.obj.from];if(n){j.remove(n.item);delete this.$RequestListController2[m.obj.from];--this.$RequestListController1;this.$RequestListController6();}};k.prototype.$RequestListController6=function(){"use strict";j.scry(this.$RequestListController0,'li.empty').forEach(function(l){i.conditionShow(l,this.$RequestListController1<=0);}.bind(this));};e.exports=k;},null);
__d("FlexibleScrollableArea",["DataStore","DOM","DOMDimensions","Event","Parent","Run","Style","Vector","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=30,q=100;function r(s,t,u,v,w){"use strict";this._element=s;this._tight=t;this._measureFrom=u;this._minHeight=v;this._margin=w;g.set(this._element,'FlexibleScrollableArea',this);l.onLeave(this.cleanup.bind(this));this._listener=j.listen(window,'resize',o(this.poke,q,this));this.poke();}r.prototype.poke=function(){"use strict";var s=h.find(this._element,'.uiScrollableAreaBody'),t=n.getElementDimensions(s).y+i.measureElementBox(s,'height',true,true,true),u;if(this._tight){var v=this.getMaxHeight();if(t<v+p)v+=p;u=Math.max(Math.min(t,v),this._minHeight);}else u=Math.max(this.getMaxHeight(),this._minHeight);m.set(this._element,'height',u+'px');};r.prototype.getMaxHeight=function(){"use strict";if(this._measureFrom==='bottom'){var s=n.getViewportDimensions().y,t=n.getElementPosition(this._element,'viewport').y,u=s-t;return u-this._margin;}var v=n.getElementPosition(this._element,'viewport').y+n.getElementDimensions(this._element).y;return v-this._margin;};r.prototype.cleanup=function(){"use strict";this._listener&&this._listener.remove();};r.getInstance=function(s){"use strict";var t=k.byClass(s,'flexibleScrollableArea');return t?g.get(t,'FlexibleScrollableArea'):null;};e.exports=r;},null);
__d("LoadRecommendations",["Event","AsyncRequest"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={loadOnClick:function(j){g.listen(j,'click',function(){new h().setURI('/ajax/pages/reminder/recommendations').send();});}};e.exports=i;},null);
__d("ReminderStory",["AsyncRequest","Arbiter","DOMQuery","Event","FlexibleScrollableArea","LayerAutoFocus","ScrollableArea","SubscriptionsHandler","UIPagelet","getActiveElement"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();function q(r,s,t,u,v){"use strict";this.$ReminderStory0=false;this.$ReminderStory1=s;this.$ReminderStory2=r;j.listen(r,'click',function(event){if(t&&i.contains(t,event.target))return;s.show();if(u)new g('/growth/reminder/logging.php').setData({context_data:u,first_click:!this.$ReminderStory0}).send();this.$ReminderStory0=true;}.bind(this));if(v)s.subscribeOnce('show',function(){o.loadFromEndpoint(v,s.getContent());});s.disableBehavior(l);s.subscribe('aftershow',function(){var w=s.getRoot(),x=i.scry(w,'#SuggestBelowInvite')[0];if(x)new g('/ajax/pages/reminder/recommendations').send();var y=s.hide.bind(s);this.$ReminderStory3=new n();this.$ReminderStory3.addSubscriptions(j.listen(window,'resize',y),j.listen(window,'scroll',y));var z=i.scry(w,'.inlineReplyTextArea');z[0]&&z[0].focus();var aa=i.scry(w,'.jewelItemNew'),ba=[];aa.forEach(function(fa){var ga=aa[fa].getAttribute('id');if(ga&&ga.endsWith('_1_req'))ba=ba.concat(ga.replace('_1_req',''));});if(ba.length>0)new g('/friends/requests/log_impressions').setData({ids:ba.join(','),ref:'reminder_box'}).send();var ca=m.getInstance(i.scry(s.getRoot(),'.uiScrollableArea')[0]),da=k.getInstance(i.scry(s.getRoot(),'.flexibleScrollableArea')[0]),ea=function(){if(da)da.poke();if(ca){ca.poke();j.fire(i.scry(s.getRoot(),'.scrollable')[0],'scroll');}};ea();h.subscribe('reflow',function(){var fa=i.scry(w,'.fbRemindersBirthdayList');if(z&&fa)for(var ga=0;ga<z.length;++ga)if(z[ga]==p()&&i.contains(fa[0],z[ga]))ea();});}.bind(this));s.subscribe('beforehide',function(){if(this.$ReminderStory3){this.$ReminderStory3.release();this.$ReminderStory3=null;}}.bind(this));}q.prototype.getDialog=function(){"use strict";return this.$ReminderStory1;};q.prototype.getRoot=function(){"use strict";return this.$ReminderStory2;};e.exports=q;},null);
__d("XBirthdayRemindersCounterController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/birthday\/reminder\/counter\/",{event:{type:"Enum",required:true,enumType:1}});},null);
__d("BirthdayRemindersCounter",["AsyncSignal","XBirthdayRemindersCounterController"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={logEvent:function(event){var j=h.getURIBuilder().setEnum('event',event).getURI();(new g(j)).send();}};e.exports=i;},null);
__d("XBirthdayRemindersCameraPreviewController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/birthday\/reminder\/camera\/preview\/",{photo_fbid:{type:"Int",required:true},target_id:{type:"Int",required:true}});},null);
__d("BirthdayModal",["AsyncRequest","BirthdayRemindersCounter","BirthdayRemindersCounterEvent","Button","ComposerXNUX","CSS","DataStore","DOM","Event","FileInputUploader","Focus","Layer","Parent","XBirthdayRemindersCameraPreviewController","csx","cx","goURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){b.__markCompiled&&b.__markCompiled();var x=null,y={},z,aa,ba={init:function(ca,da){z=da;o.listen(ca,'click',function(){h.logEvent(i.OPEN_MODAL);da.show();});},addComposers:function(ca,da){if(!da||(da!==x))y={};x=da;for(var ea in ca)if(ca.hasOwnProperty(ea))this._addComposer(n.find(ca[ea],"._5j0b"),ea);},_showInput:function(ca){var da=n.scry(ca,"._u48").pop();if(!da)return;var ea=n.find(ca,"._4ovy"),fa=n.find(ea,'.inlineReplyTextArea');l.hide(da);l.show(ea);q.set(fa);},_addComposer:function(ca,da){y[da]=ca;var ea=n.scry(ca,"._4ovw").pop();if(!ea)return;var fa=this;['click','focus'].forEach(function(ha){o.listen(ea,ha,function(event){var ia=event.getTarget();if(s.byClass(ia,"_260q"))return;fa._showInput(ca);});});var ga=n.find(ca,"._4ow2");this._addRemoveButton(ga,da);return true;},addUpcomingBirthdays:function(ca,da){o.listen(da.firstChild,'click',function(event){l.show(ca);l.hide(da);});},attachPhoto:function(ca,da,ea){var fa=y[ea];if(!fa)return;var ga=n.find(fa,"._4ovz");l.removeClass(ga,"._4ow0");var ha=n.find(fa,"._4ow1");ha.appendChild(da);n.appendContent(ga,ca);var ia=n.find(fa,"._4ow2");l.show(ia);this._showInput(fa);var ja=n.find(fa,"._30e4");j.setEnabled(ja,true);},initUploader:function(ca,da,ea,fa){var ga=ca.getInput();ca.subscribe('change',this._uploadPhoto.bind(this,ga,fa,ea));},_uploadPhoto:function(ca,da,ea){var fa=y[ea];if(!fa)return;h.logEvent(i.ADD_UPLOADED);this._showInput(fa);var ga=n.find(fa,"._4ow3"),ha=n.find(fa,"._4ow4");l.show(ga);l.hide(ha);var ia=new p(ca);ia.setURI(da.uploadURI).setData(da.uploadData).setAllowCrossOrigin(true).setUploadInParallel(true).setFiles(ca.files).send();var ja=n.find(fa,"._30e4");j.setEnabled(ja,false);var ka=r.getTopmostLayer();if(ka)ka.hide();},getCameraPreview:function(ca,da){var ea=y[da];if(!ea)return;h.logEvent(i.ADD_SELFIE);this._showInput(ea);var fa=n.find(ea,"._4ow3"),ga=n.find(ea,"._4ow4");l.show(fa);l.hide(ga);var ha=t.getURIBuilder().setInt('target_id',da).setInt('photo_fbid',ca).getURI();new g(ha).send();var ia=n.find(ea,"._30e4");j.setEnabled(ia,false);},showPhotoPicker:function(ca){ca.subscribeOnce(['show'],function(){l.addClass(z.getContentRoot(),"_30e3");}.bind(this));ca.subscribeOnce(['hide'],function(){z.show();l.removeClass(z.getContentRoot(),"_30e3");}.bind(this));},addPhotoItem:function(ca,da,ea,fa,ga){var ha=y[fa];if(!ha)return;o.listen(ca,'click',function(){h.logEvent(ga);var ia=n.find(ha,"._4ow3"),ja=n.find(ha,"._4ovz"),ka=n.find(ha,"._4ow4");l.show(ia);l.hide(ka);l.removeClass(ja,"._4ow0");var la=n.find(ha,"._4ow1");la.appendChild(ea);n.appendContent(ja,da);var ma=n.find(ha,"._4ow2");l.show(ma);this._showInput(ha);var na=r.getTopmostLayer();if(na)na.hide();}.bind(this));},_addRemoveButton:function(ca,da){var ea=y[da];if(!ea)return;o.listen(ca,'click',function(fa){fa.kill();l.hide(ca);var ga=n.find(ea,"._4ow3"),ha=n.find(ea,"._4ovz"),ia=n.find(ea,"._4ow4");l.hide(ga);l.show(ia);l.addClass(ha,"._4ow0");if(ha.firstChild)n.remove(ha.firstChild);n.scry(ea,"._4ow5").forEach(function(ja){n.remove(ja);});}.bind(this));},_resetComposer:function(ca){var da=n.find(ca,"._4ow2");da.click();var ea=n.find(ca,".uiMentionsInput");m.get(ea,'MentionsInput').reset();},finishPosting:function(ca,da,ea){if(ea)return w(window.location.href,true);var fa=y[da];if(!fa)return;this._resetComposer(fa);l.addClass(fa,"_4dgh");},cancelScheduled:function(ca,da){if(da)return w(window.location.href,true);var ea=y[ca];if(!ea)return;l.removeClass(ea,"_4dgh");},setPhotoAlbumView:function(ca){aa=ca;},setPhotoView:function(ca){if(!aa)return;var da=n.find(aa,"._5r32");if(da){l.hide(da);}else return;var ea=n.find(aa,"._375u");ea.appendChild(ca);var fa=n.find(ca,"._375v");o.listen(fa,'click',function(){l.show(da);var ga=n.find(aa,"._375w");n.remove(ga);}.bind(this));},attachFlyout:function(ca){var da=ca.getContext(),ea=n.find(ca.getContentRoot(),"._21xo"),fa=n.scry(ca.getContentRoot(),"._15p7").pop(),ga=function(){l.conditionClass(da,"_21xn",ca.isShown());};ga();ca.subscribe(['show','hide'],ga);o.listen(da,'click',function(ha){ca.conditionShow(!ca.isShown());ha.kill();});o.listen(ea,'click',function(){ca.hide();});if(fa)o.listen(fa,'click',function(){ca.hide();});},initMegaphone:function(ca,da){o.listen(da,'click',function(){n.remove(ca);k.sendMarkSeenRequest(k.UPCOMING_BIRTHDAYS_NUX);});}};e.exports=ba;},null);