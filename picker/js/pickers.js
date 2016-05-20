function googleApiLoaded(){cloudPicker.trigger("google_client_loaded")}var cloudPicker=_.extend({},CloudPicker.Events);!function(e){function t(e,t){t=(((t||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var i=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,o=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return e.replace(o,"").replace(i,function(e,i){return t.indexOf("<"+i.toLowerCase()+">")>-1?e:""})}function i(e,t,i,o){var n=screen.width/2-i/2,s=0;return window.open(e,t,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+i+", height="+o+", top="+s+", left="+n)}e.el="#cloud-picker",e.current="",e.buttonDisplay="single",e.services={},e.service_queue=0,e.buttons={},e.handlers={},e.keys={},e.selectedButtons=["dropbox","one_drive","google_drive","box"],e.setValuesFromRequest=function(){try{var e=JSON.parse($_GET.btn)}catch(t){}_.isArray(e)?this.selectButtons(e):_.isObject(e)&&(_.each(e,function(e,t){e=_.pick(e,"text","label","image"),(the_button=this.buttons[t])&&_.extend(the_button,e)},this),this.selectButtons(_.keys(e)))},e.selectButtons=function(e){_.isString(e)&&(e=[e]),this.selectedButtons=e},e.setKeys=function(e){this.keys=e},e.process=function(e){e.values&&e.values[0]&&(e=e.values[0]),e[0]&&(e=e[0]);var t={};return t.link=e.link||e.url,t.name=e.name||e.fileName,t.size=e.bytes||e.sizeBytes||e.size||0,t.id=e.id||0,t.cloud=this.current,e.serviceId&&(t.serviceId=e.serviceId),t},e.start=function(e){this.current=e,this.send({_start:!0,data:{cloud:this.current}}),this.disable()},e.picked=function(e){e=this.process(e),this.send(e),this.enable()},e.cancel=function(){this.enable(),this.send({_cancel:!0,data:{cloud:this.current}}),this.current=""},e.init=function(e){e=e||{},_.defaults(e,{keys:{dropbox:"mtf7p7hojjkln1m",google_drive:"775113772902-vq593pat8kdl4anf61cuc8f2ptbpvd9e.apps.googleusercontent.com",one_drive:"0000000048196A30",box:"r8v113ijj541yu1jm8utyju6qs72zj4a"},buttons:["dropbox","one_drive","google_drive","box"]}),this.setKeys(e.keys),this.selectButtons(e.buttons),this.defaultServices(),this.defaultButtons(),this.defaultHandlers(),this.setValuesFromRequest()},e.run=function(){$_GET.google_picker?this.serveGoogleDrive():(this.renderButtons(),this.registerEvents(),this.loadServices())},e.serveGoogleDrive=function(){this.on("google_client_loaded",function(){"undefined"!=typeof history&&history.replaceState&&history.replaceState({},document.title,window.location.href.split("#")[0]),window.opener&&window.opener.cloudPicker.stopMonitor(),window.noCancel=!1,new FilePicker({clientId:this.keys.google_drive,onSelect:function(e){window.opener&&window.opener.cloudPicker.picked(e),window.noCancel=!0,window.close()}}),window.onbeforeunload=function(){window.noCancel||window.opener&&window.opener.cloudPicker.cancel()}},this),this.loadService("google_drive")},e.defaultServices=function(){this.addService("dropbox",{src:"https://www.dropbox.com/static/api/2/dropins.js",id:"dropboxjs","data-app-key":"%key%"}),this.addService("google_drive",{src:"https://apis.google.com/js/client.js?onload=googleApiLoaded",onload:function(){}}),this.addService("one_drive",{src:"https://js.live.net/v6.0/OneDrive.js",id:"onedrive-js","client-id":"%key%"}),this.addService("box",{src:"https://app.box.com/js/static/select.js"})},e.defaultButtons=function(){this.addButton("dropbox",{title:"Select from Dropbox",image:"images/dropbox-24.png",text:"Browse..."}),this.addButton("google_drive",{title:"Select from Google Drive",image:"images/google_drive-24.png",text:"Browse..."}),this.addButton("one_drive",{title:"Select from One Drive",image:"images/onedrive-blue.png",text:"Browse..."}),this.addButton("box",{title:"Select from Box",image:"images/box-24.png",text:"Browse..."})},e.defaultHandlers=function(){var e=this;this.addHandler("dropbox",function(){Dropbox.choose({success:function(t){e.picked(t)},cancel:function(){e.cancel()},linkType:"preview",multiselect:!1}),e.start("dropbox")}),this.addHandler("google_drive",function(){var t=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height;200>t&&(t=screen.height-100),e.gdw=i("?google_picker=true","_blank",640,t),e.gdw.onbeforeunload=function(){e.cancel()},e.start("google_drive")}),this.addHandler("one_drive",function(){var t={linkType:"webLink",multiSelect:!1,openInNewWindow:!0,success:function(t){e.picked(t)},cancel:function(){e.cancel()},error:function(){}};OneDrive.open(t),e.start("one_drive")}),this.addHandler("box",function(){var t={clientId:e.keys.box,linkType:"shared",multiselect:!1};if(!e._boxSelect){var i=e._boxSelect=new BoxSelect(t);i.success(function(t){e.picked(t)}),i.cancel(function(){e.cancel()})}e._boxSelect.launchPopup(),e.start("box")})},e.loadServices=function(){var e=_.pick(this.services,this.selectedButtons);this.service_queue=_.size(e),_.each(e,function(e,t){this.loadService(t)},this)},e.loadService=function(e){var t=this.services[e],i=this;t&&(t=_.mapObject(t,function(t){return _.isString(t)&&(t=t.replace("%key%",this.keys[e])),t},this),$.getScript(t,function(){i.trigger("service_loaded",e),--i.service_queue>0||i.trigger("services_loaded"),t.onload&&t.onload.call(i,e)},function(){}))},e.registerEvents=function(){"all"==this.buttonDisplay?this.on("services_loaded",function(){this.$el.removeClass("picker-loading"),this.$el.find("button").removeClass("hidden")},this):(this.$el.removeClass("picker-loading"),this.on("service_loaded",function(e){this.$el.find("button."+e).removeClass("hidden")},this))},e.createButton=function(e,i){var o=e.image,n=e.text,s=(e.callback,$("<button>"));if(this.handlers[i]&&s.on("click",this.handlers[i]),e.title&&s.attr("title",e.title),o){var c=$("<img>");c.attr("src",o),c.addClass("cloud-icon"),s.append(c)}else s.addClass("nci");if(n){n=t(n);var r=document.createElement("span");r.innerHTML=n,r.className="btn-label",s.append(r)}return s.addClass("hidden"),i&&s.addClass(i),s},e.renderButtons=function(){var e=this.$el=$(this.el);e&&_(this.selectedButtons).each(function(t){this.buttons[t]&&e.append(this.createButton(this.buttons[t],t))},this)},e.addButton=function(e,t){this.buttons[e]=t},e.addHandler=function(e,t){this.handlers[e]=t},e.getHandler=function(e){var t=this.handlers[e];return"function"==typeof t?t:function(){console&&console.error("no handler for "+e)}},e.addService=function(e,t){this.services[e]=t},e.disable=function(e){void 0===e&&(e=!0);for(var t=document.getElementsByTagName("button"),i=0;i<t.length;i++)t[i].disabled=e},e.enable=function(){this.disable(!1)},e.send=function(e){return window.parent?(e._id=window.location.hash.substr(1),void("undefined"!=typeof origin?window.parent.postMessage(e,origin):window.parent.postMessage(e,"*"))):(alert("Cloud picker should be placed in a frame"),window.close(),!0)},e.monitor=function(){var e=this;e.gdw&&!e._m&&(e._m=setInterval(function(){e.gdw.closed&&(e.cancel(),e.stopMonitor())},100))},e.stopMonitor=function(){this._m&&clearInterval(this._m),this._m=null},e.init()}(cloudPicker);var FilePicker=window.FilePicker=function(e){this.clientId=e.clientId,this.scopes=["https://www.googleapis.com/auth/drive"],this.onSelect=e.onSelect,this.onCancel=e.onCancel,this.pickerReady=!1,this.driveReady=!1,gapi.load("auth",{callback:_.bind(this._authLoaded,this)}),gapi.client.load("drive","v3",_.bind(this._driveApiLoaded,this)),gapi.load("picker",{callback:_.bind(this._pickerApiLoaded,this)})};FilePicker.prototype={open:function(){var e=gapi.auth.getToken();this.driveReady&&this.pickerReady&&e&&this._showPicker()},_showLogin:function(){window.noCancel=!0,window.opener&&window.opener.cloudPicker.monitor();var e="https://accounts.google.com/o/oauth2/auth?response_type=token&client_id="+this.clientId+"&redirect_uri="+encodeURI(window.location.href.split("#")[0])+"&scope="+this.scopes.join(",");window.location.href=e},_showPicker:function(){if(gapi.auth.getToken())var e=gapi.auth.getToken().access_token;var t=(new google.picker.DocsView).setParent("root").setIncludeFolders(!0),i=(new google.picker.PickerBuilder).hideTitleBar().addView(t).addView(new google.picker.DocsUploadView).setOAuthToken(e).setCallback(_.bind(this._pickerCallback,this)).build();i.setVisible(!0)},_pickerCallback:function(e){if(e[google.picker.Response.ACTION]==google.picker.Action.CANCEL&&(this.onCancel&&this.onCancel(),window.close()),e[google.picker.Response.ACTION]==google.picker.Action.PICKED){var t=e[google.picker.Response.DOCUMENTS][0],i=t[google.picker.Document.ID],o=gapi.client.drive.permissions.create({resource:{type:"anyone",role:"reader"},fileId:i,fields:"id"});o.execute(_.bind(function(){this._fileGetCallback(t)},this))}},_fileGetCallback:function(e){this.onSelect&&this.onSelect(e)},_pickerApiLoaded:function(){this.pickerReady=!0,this.open()},_driveApiLoaded:function(){this.driveReady=!0,this.open()},_authLoaded:function(){var e=this;this._doAuth(function(){var t=gapi.auth.getToken();t?e.open():e._showLogin()})},_doAuth:function(e){gapi.auth.authorize({client_id:this.clientId,scope:this.scopes,immediate:!0},e)}};