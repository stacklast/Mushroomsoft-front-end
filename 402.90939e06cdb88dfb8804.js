(self.webpackChunkapp=self.webpackChunkapp||[]).push([[402],{402:(t,e,n)=>{"use strict";n.r(e),n.d(e,{HomeModule:()=>d});var r=n(116),o=n(143),i=n(619);function s(t,e,n,r,o,i,s){try{var c=t[i](s),a=c.value}catch(p){return void n(p)}c.done?e(a):Promise.resolve(a).then(r,o)}var c=n(878),a=n(599),p=n(693);let h=(()=>{class t{constructor(t){this.http=t}getGiphyByCategory(t){return this.gyphys?(0,c.of)(this.gyphys):this.http.get(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(t)}&limit=10&api_key=hx8ngPDZJp5IJrMaO2FmzVL0Va3DyD1D`).pipe((0,a.b)(t=>this.gyphys=t))}getGiphyByCategoryAsync(t){return(e=function*(){const e=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(t)}&limit=10&api_key=hx8ngPDZJp5IJrMaO2FmzVL0Va3DyD1D`,n=yield fetch(e);return yield n.json()},function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function c(t){s(i,r,o,c,a,"next",t)}function a(t){s(i,r,o,c,a,"throw",t)}c(void 0)})})();var e}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(p.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=n(195);const y=[{path:"",component:(()=>{class t{constructor(t){this.service=t}ngOnInit(){this.service.getGiphyByCategory("Batman").subscribe(({data:t})=>{console.log(t)}),this.service.getGiphyByCategoryAsync("Batman").then(({data:t})=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(h))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-home"]],decls:10,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-md-12","text-center","mt-3"],[1,"col-md-6"]],template:function(t,e){1&t&&(i._UZ(0,"app-navbar"),i.TgZ(1,"div",0),i.TgZ(2,"div",1),i.TgZ(3,"div",2),i.TgZ(4,"h1"),i._uU(5,"Welcome! Mushroomsoft-IT APP"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(6,"div",0),i.TgZ(7,"div",1),i._UZ(8,"div",3),i._UZ(9,"div",3),i.qZA(),i.qZA())},directives:[u.S],styles:[""]}),t})()}];let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.Bz.forChild(y)],o.Bz]}),t})();var v=n(425);let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[r.ez,l,v.m]]}),t})()}}]);