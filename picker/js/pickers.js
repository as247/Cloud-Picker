function googleApiLoaded(){cloudPicker.trigger("google_client_loaded")}var cloudPicker=_.extend({},CloudPicker.Events);!function(i){function e(i,e){e=(((e||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var t=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,o=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return i.replace(o,"").replace(t,function(i,t){return e.indexOf("<"+t.toLowerCase()+">")>-1?i:""})}function t(i,e,t,o){var n=screen.width/2-t/2,a=0;return window.a(i,e,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+t+", height="+o+", top="+a+", left="+n)}i.b="#cloud-picker",i.c="",i.d="single",i.e={},i.f=0,i.g={},i.h={},i.keys={},i.i=["dropbox","one_drive","google_drive","box"],i.j=function(){try{var i=JSON.parse($_GET.btn)}catch(e){}_.isArray(i)?this.k(i):_.isObject(i)&&(_.each(i,function(i,e){i=_.pick(i,"text","label","image"),(the_button=this.g[e])&&_.extend(the_button,i)},this),this.k(_.keys(i)))},i.k=function(i){_.isString(i)&&(i=[i]),this.i=i},i.l=function(i){this.keys=i},i.m=function(i){var e=i.n||this.c;i.values&&i.values[0]&&(i=i.values[0]),i[0]&&(i=i[0]);var t={};return t.link=i.link||i.url,t.name=i.name||i.fileName,t.o=i.bytes||i.sizeBytes||i.o||0,t.p=i.p||0,t.n=e,i.q&&(t.q=i.q),i.r&&(t.r=i.r),t},i.s=function(i){this.c=i,this.t({u:!0,v:{n:this.c}}),this.w()},i.x=function(i){i=this.m(i),this.t(i),this.y()},i.z=function(i){i=i||this.c,this.y(),this.t({A:!0,v:{n:i}})},i.B=function(i){i=i||{},_.defaults(i,{keys:{C:"mtf7p7hojjkln1m",D:"775113772902-vq593pat8kdl4anf61cuc8f2ptbpvd9e.apps.googleusercontent.com",F:"0000000048196A30",G:"r8v113ijj541yu1jm8utyju6qs72zj4a"},g:["dropbox","one_drive","google_drive","box"]}),this.l(i.keys),this.k(i.g),this.H(),this.I(),this.J(),this.j()},i.K=function(){$_GET.google_picker?this.L():(this.M(),this.N(),this.O())},i.L=function(){function e(){i.P.find(".center").width("100%"),i.P.find(".center").width(i.Q.width())}i.P=$('<div><div class="center"><span class="text">Loading...</span></div></div>').attr("id","gp-loading").appendTo("body"),i.Q=i.P.find(".text"),i.P.find(".center").width(i.Q.width()),this.on("google_client_loaded",function(){return"undefined"!=typeof history&&history.replaceState&&history.replaceState({},document.R,window.location.S.split("#")[0]),window.opener&&window.opener.cloudPicker?(i.Q.html("Initializing..."),void new o({T:this.keys.D,U:function(i){i.n="google_drive",window.opener&&window.opener.cloudPicker.V(),window.opener&&window.opener.cloudPicker.x(i),window.close()}})):(i.Q.html("This page can't be opened this directly!"),e(),!1)},this),this.W("google_drive")},i.H=function(){this.X("dropbox",{Y:"https://www.dropbox.com/static/api/2/dropins.js",p:"dropboxjs",Z:"%key%"}),this.X("google_drive",{Y:"https://apis.google.com/js/client.js?onload=googleApiLoaded",$:function(){}}),this.X("one_drive",{Y:"https://js.live.net/v6.0/OneDrive.js",p:"onedrive-js",_:"%key%"}),this.X("box",{Y:"https://app.box.com/js/static/select.js"})},i.I=function(){this.aa("dropbox",{R:"Select from Dropbox",ba:"images/dropbox-24.png",ca:"Browse..."}),this.aa("google_drive",{R:"Select from Google Drive",ba:"images/google_drive-24.png",ca:"Browse..."}),this.aa("one_drive",{R:"Select from One Drive",ba:"images/onedrive-blue.png",ca:"Browse..."}),this.aa("box",{R:"Select from Box",ba:"images/box-24.png",ca:"Browse..."})},i.J=function(){var i=this;this.da("dropbox",function(){Dropbox.choose({ea:function(e){e.n="dropbox",i.x(e)},z:function(){i.z("dropbox")},fa:"preview",ga:!1}),i.s("dropbox")}),this.da("google_drive",function(){var e=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height;200>e&&(e=screen.height-100),i.ha=t("?google_picker=true","_blank",640,e),i.ia(),i.s("google_drive")}),this.da("one_drive",function(){var e={fa:"webLink",ja:!1,ka:!0,ea:function(e){e.n="one_drive",i.x(e)},z:function(){i.z("one_drive")},la:function(i){}};OneDrive.a(e),i.s("one_drive")}),this.da("box",function(e){var t={T:i.keys.G,fa:"shared",ga:!1};if(!i.ma){var o=i.ma=new BoxSelect(t);o.ea(function(e){e.n="box",i.x(e)}),o.z(function(){i.z("box")})}i.ma.launchPopup(),i.s("box")})},i.O=function(){var i=_.pick(this.e,this.i);this.f=_.o(i),_.each(i,function(i,e){this.W(e)},this)},i.W=function(i){var e=this.e[i],t=this;e&&(e=_.mapObject(e,function(e){return _.isString(e)&&(e=e.replace("%key%",this.keys[i])),e},this),$.getScript(e,function(){t.trigger("service_loaded",i),--t.f<=0&&t.trigger("services_loaded"),e.$&&e.$.call(t,i)},function(){}))},i.N=function(){"all"==this.d?this.on("services_loaded",function(){this.na.removeClass("picker-loading"),this.na.find("button").removeClass("hidden")},this):(this.na.removeClass("picker-loading"),this.on("service_loaded",function(i){this.na.find("button."+i).removeClass("hidden")},this))},i.oa=function(i,t){var o=i.ba,n=i.ca,a=(i.pa,$("<button>"));if(this.h[t]&&a.on("click",this.h[t]),i.R&&a.attr("title",i.R),o){var s=$("<img>");s.attr("src",o),s.addClass("cloud-icon"),a.append(s)}else a.addClass("nci");if(n){n=e(n);var r=document.createElement("span");r.qa=n,r.ra="btn-label",a.append(r)}return a.addClass("hidden"),t&&a.addClass(t),a},i.M=function(){var i=this.na=$(this.b);i&&_(this.i).each(function(e){this.g[e]&&i.append(this.oa(this.g[e],e))},this)},i.aa=function(i,e){this.g[i]=e},i.da=function(i,e){this.h[i]=e},i.sa=function(i){var e=this.h[i];return"function"==typeof e?e:function(){console&&console.la("no handler for "+i)}},i.X=function(i,e){this.e[i]=e},i.w=function(i){"undefined"==typeof i&&(i=!0);for(var e=document.getElementsByTagName("button"),t=0;t<e.length;t++)e[t].ta=i},i.y=function(){this.w(!1)},i.t=function(i){return window.parent?(i.ua=window.location.hash.substr(1),void("undefined"!=typeof origin?window.parent.postMessage(i,origin):window.parent.postMessage(i,"*"))):(alert("Cloud picker should be placed in a frame"),window.close(),!0)},i.ia=function(){var i=this;i.ha&&!i.va&&(i.va=setInterval(function(){i.ha.closed&&(i.z("google_drive"),i.V())},100))},i.V=function(){this.va&&clearInterval(this.va),this.va=null},i.B();var o=function(i){this.T=i.T,this.wa=["https://www.googleapis.com/auth/drive"],this.U=i.U,this.xa=i.xa,this.ya=!1,this.za=!1,gapi.load("auth",{pa:_.bind(this.Aa,this)}),gapi.client.load("drive","v3",_.bind(this.Ba,this)),gapi.load("picker",{pa:_.bind(this.Ca,this)})};o.prototype={a:function(){var i=gapi.auth.getToken();this.za&&this.ya&&i&&this.Da()},Ea:function(){var i="https://accounts.google.com/o/oauth2/auth?response_type=token&client_id="+this.T+"&redirect_uri="+encodeURI(window.location.S.split("#")[0])+"&scope="+this.wa.join(",");window.location.S=i},Da:function(){if(cloudPicker.Q&&cloudPicker.Q.html("Working..."),gapi.auth.getToken())var i=gapi.auth.getToken().access_token;var e=(new google.picker.DocsView).setParent("root").setIncludeFolders(!0),t=(new google.picker.PickerBuilder).hideTitleBar().addView(e).addView(new google.picker.DocsUploadView).setOAuthToken(i).setCallback(_.bind(this.Fa,this)).build();t.setVisible(!0)},Fa:function(i){if(i[google.picker.Response.ACTION]==google.picker.Action.CANCEL&&(this.xa&&this.xa(),window.close()),i[google.picker.Response.ACTION]==google.picker.Action.PICKED){var e=i[google.picker.Response.DOCUMENTS][0],t=e[google.picker.Document.ID],o=gapi.client.drive.permissions.create({Ga:{Ha:"anyone",Ia:"reader"},Ja:t,Ka:"id"});o.execute(_.bind(function(){this.La(e)},this))}},La:function(i){this.U&&this.U(i)},Ca:function(){this.ya=!0,this.a()},Ba:function(){this.za=!0,this.a()},Aa:function(){var i=this;this.Ma(function(){var e=gapi.auth.getToken();e?i.a():i.Ea()})},Ma:function(i){gapi.auth.authorize({Na:this.T,Oa:this.wa,Pa:!0},i)}}}(cloudPicker);