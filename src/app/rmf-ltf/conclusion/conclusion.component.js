"use strict";var __decorate=this&&this.__decorate||function(t,r,e,l){var n,o=arguments.length,s=o<3?r:null===l?l=Object.getOwnPropertyDescriptor(r,e):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,r,e,l);else for(var i=t.length-1;0<=i;i--)(n=t[i])&&(s=(o<3?n(s):3<o?n(r,e,s):n(r,e))||s);return 3<o&&s&&Object.defineProperty(r,e,s),s};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),operators_1=require("rxjs/operators"),ConclusionComponent=function(){function t(t,r,e){this.basedataservice=t,this.rmfltfservice=r,this.langservice=e,this.userall={},this.userselect={},this.unitholderno="init",this.balanceltf=0,this.balancermf=0,this.nolist=!1}return t.prototype.ngOnInit=function(){var r=this;this.getSelectListUnitholder(),$("#mutual-tab-menu").find("li").removeClass("current"),$("#mutual-tab-menu").find("li#menu2").addClass("current");for(var t=new Date,e=new Array,l=t.getFullYear();2011<=l;l--)e.push(l);this.Year=e,console.log(this.Year),this.years=t.getFullYear(),this.langservice.listen().subscribe(function(t){console.log(t),r.lang=t})},t.prototype.onChange=function(){for(var t=0;t<this.userall.unitholderlist.length;t++)this.userall.unitholderlist[t].UnitholderId==this.unitholderno.UnitholderId&&(this.userselect=this.userall.unitholderlist[t])},t.prototype.getSelectListUnitholder=function(){var r=this;this.basedataservice.getSelectListUnitholder().pipe(operators_1.first()).subscribe(function(t){setTimeout(function(){$(".selectpicker").selectpicker("refresh")},100),r.userall=t,r.unitholderno=r.userall.unitholderlist[0],r.userselect=r.userall.unitholderlist[0]},function(t){console.log(t)})},t.prototype.Onclick=function(){var r=this;this.nolist=!1;var t={UnitholderID:this.userselect.UnitholderId,Year:this.years};this.rmfltfservice.getorderrmfltfannual(t).pipe(operators_1.first()).subscribe(function(t){console.log(t),r.rmfltfannual=t,0==r.rmfltfannual.orderltflist.length&&0==r.rmfltfannual.orderrmflist.length&&(r.nolist=!0,console.log("notlist")),r.format()},function(t){console.log(t)})},t.prototype.format=function(){var t=new Array,r=new Array;console.log("test");for(var e=0,l=0,n=0,o=0;o<this.rmfltfannual.orderltflist.length;o++){console.log("fori");var s=0,i=0,a=0,f=0,u=0;e=this.rmfltfannual.orderltflist[o].Order.length;for(var d=0;d<this.rmfltfannual.orderltflist[o].Order.length;d++){console.log("fory"),l+=parseFloat(this.rmfltfannual.orderltflist[o].Order[d].AllotedAmount),s+=parseFloat(this.rmfltfannual.orderltflist[o].Order[d].AllotedNAV),i+=parseFloat(this.rmfltfannual.orderltflist[o].Order[d].AllotedUnit),a+=parseFloat(this.rmfltfannual.orderltflist[o].Order[d].AllotedAmount),c=this.rmfltfannual.orderltflist[o].Order[d],0!=u&&0!=f||this.rmfltfannual.orderltflist[o].FundID==c.FundID&&(c.FundName2=c.FundName,c.FundNameGroup=this.rmfltfannual.orderltflist[o].FundName,c.FundNameEngGroup=this.rmfltfannual.orderltflist[o].FundNameEng),d+1!=e&&9!=d||(c.nav=s,c.unit=i,c.amount=a,a=s=i=0),r.push(c),console.log(c),f++,0,10==++u&&(u=0)}}for(o=0;o<this.rmfltfannual.orderrmflist.length;o++){console.log("fori");s=0,i=0,a=0,f=0,u=0;e=this.rmfltfannual.orderrmflist[o].Order.length;for(d=0;d<this.rmfltfannual.orderrmflist[o].Order.length;d++){var c;console.log("fory"),n+=parseFloat(this.rmfltfannual.orderrmflist[o].Order[d].AllotedAmount),s+=parseFloat(this.rmfltfannual.orderrmflist[o].Order[d].AllotedNAV),i+=parseFloat(this.rmfltfannual.orderrmflist[o].Order[d].AllotedUnit),a+=parseFloat(this.rmfltfannual.orderrmflist[o].Order[d].AllotedAmount),c=this.rmfltfannual.orderrmflist[o].Order[d],0!=u&&0!=f||this.rmfltfannual.orderrmflist[o].FundID==c.FundID&&(c.FundName2=c.FundName,c.FundNameGroup=this.rmfltfannual.orderrmflist[o].FundName,c.FundNameEngGroup=this.rmfltfannual.orderrmflist[o].FundNameEng),d+1!=e&&9!=d||(c.nav=s,c.unit=i,c.amount=a,a=s=i=0),t.push(c),console.log(c),f++,0,10==++u&&(u=0)}}this.balanceltf=l,this.balancermf=n,this.ltflist=r,this.rmflist=t,console.log(this.ltflist),console.log(this.balanceltf)},t.prototype.print=function(){window.focus(),window.print()},t=__decorate([core_1.Component({selector:"app-conclusion",templateUrl:"./conclusion.component.html",styleUrls:["./conclusion.component.scss"]})],t)}();exports.ConclusionComponent=ConclusionComponent;