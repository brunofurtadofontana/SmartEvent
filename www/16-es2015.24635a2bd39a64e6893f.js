(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{L6id:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class e{}var t=u("pMnS"),r=u("oBZk"),i=u("ZZ/e"),b=u("s7LF"),c=u("SVse"),s=u("hiW7");class a{constructor(l,n,u){this.todoService=l,this.navCtrl=n,this.router=u}go(){}ngOnInit(){this.todoService.getTodos().subscribe(l=>{console.log("todos",l),this.todos=l})}doRefresh(l){console.log("Begin async operation"),this.todoService.getTodos().subscribe(l=>{console.log("todos",l),this.todos=l}),setTimeout(()=>{console.log("Async operation has ended"),l.target.complete()},2e3)}goEventos(){this.navCtrl.navigateForward("/eventos",{state:this.todos})}}var h=u("iInd"),d=o.pb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}"]],data:{}});function p(l){return o.Jb(0,[(l()(),o.rb(0,0,null,null,19,"ion-card",[["class","welcome-card"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.goEventos()&&o),o}),r.Q,r.e)),o.qb(1,49152,null,0,i.l,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),o.rb(3,0,null,0,6,"ion-card-header",[],null,null,null,r.N,r.g)),o.qb(4,49152,null,0,i.n,[o.h,o.k,o.x],null,null),(l()(),o.rb(5,0,null,0,2,"ion-card-title",[],null,null,null,r.P,r.i)),o.qb(6,49152,null,0,i.p,[o.h,o.k,o.x],null,null),(l()(),o.Ib(7,0,["",""])),(l()(),o.rb(8,0,null,0,1,"ion-card-subtitle",[],null,null,null,r.O,r.h)),o.qb(9,49152,null,0,i.o,[o.h,o.k,o.x],null,null),(l()(),o.rb(10,0,null,0,9,"ion-card-content",[],null,null,null,r.M,r.f)),o.qb(11,49152,null,0,i.m,[o.h,o.k,o.x],null,null),(l()(),o.rb(12,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Ib(13,null,["",""])),(l()(),o.rb(14,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),o.Ib(15,null,["",""])),(l()(),o.rb(16,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.rb(17,0,null,0,2,"ion-button",[["color","primary"]],null,null,null,r.K,r.c)),o.qb(18,49152,null,0,i.j,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Ib(-1,0,["Detalhes"]))],(function(l,n){l(n,18,0,"primary")}),(function(l,n){l(n,2,0,o.vb(1,"",null==n.context.$implicit?null:n.context.$implicit.url,"")),l(n,7,0,null==n.context.$implicit?null:n.context.$implicit.titulo),l(n,13,0,n.context.$implicit.descricao),l(n,15,0,n.context.$implicit.data)}))}function g(l){return o.Jb(0,[(l()(),o.rb(0,0,null,null,10,"ion-header",[],null,null,null,r.W,r.o)),o.qb(1,49152,null,0,i.A,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.pb,r.H)),o.qb(3,49152,null,0,i.Bb,[o.h,o.k,o.x],null,null),(l()(),o.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.L,r.d)),o.qb(5,49152,null,0,i.k,[o.h,o.k,o.x],null,null),(l()(),o.rb(6,0,null,0,1,"ion-menu-button",[["contentId","content"]],null,null,null,r.fb,r.y)),o.qb(7,49152,null,0,i.Q,[o.h,o.k,o.x],null,null),(l()(),o.rb(8,0,null,0,2,"ion-title",[],null,null,null,r.ob,r.G)),o.qb(9,49152,null,0,i.zb,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,[" Home "])),(l()(),o.rb(11,0,null,null,14,"ion-content",[],null,null,null,r.S,r.k)),o.qb(12,49152,null,0,i.t,[o.h,o.k,o.x],null,null),(l()(),o.rb(13,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,u){var o=!0;return"ionRefresh"===n&&(o=!1!==l.component.doRefresh(u)&&o),o}),r.kb,r.B)),o.qb(14,49152,null,0,i.cb,[o.h,o.k,o.x],null,null),(l()(),o.rb(15,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Pull to refresh"],["refreshingSpinner","circles"],["refreshingText","Refreshing..."]],null,null,null,r.jb,r.C)),o.qb(16,49152,null,0,i.db,[o.h,o.k,o.x],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(l()(),o.rb(17,0,null,0,2,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),o.rb(18,0,null,null,0,"img",[["src","assets/icon/event.png"]],null,null,null,null,null)),(l()(),o.rb(19,0,null,null,0,"h3",[],null,null,null,null,null)),(l()(),o.rb(20,0,null,0,3,"ion-searchbar",[["animated",""]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Db(l,23)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Db(l,23)._handleInputEvent(u.target)&&e),e}),r.mb,r.E)),o.Fb(5120,null,b.d,(function(l){return[l]}),[i.Lb]),o.qb(22,49152,null,0,i.jb,[o.h,o.k,o.x],{animated:[0,"animated"]},null),o.qb(23,16384,null,0,i.Lb,[o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,p)),o.qb(25,278528,null,0,c.h,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,16,0,"arrow-dropdown","Pull to refresh","circles","Refreshing..."),l(n,22,0,""),l(n,25,0,u.todos)}),null)}function f(l){return o.Jb(0,[(l()(),o.rb(0,0,null,null,1,"app-home",[],null,null,null,g,d)),o.qb(1,114688,null,0,a,[s.a,i.Hb,h.m],null,null)],(function(l,n){l(n,1,0)}),null)}var m=o.nb("app-home",a,f,{},{},[]);u.d(n,"HomePageModuleNgFactory",(function(){return x}));var x=o.ob(e,[],(function(l){return o.Ab([o.Bb(512,o.j,o.Z,[[8,[t.a,m]],[3,o.j],o.v]),o.Bb(4608,c.k,c.j,[o.s,[2,c.q]]),o.Bb(4608,b.l,b.l,[]),o.Bb(4608,i.a,i.a,[o.x,o.g]),o.Bb(4608,i.Gb,i.Gb,[i.a,o.j,o.p]),o.Bb(4608,i.Jb,i.Jb,[i.a,o.j,o.p]),o.Bb(1073742336,c.b,c.b,[]),o.Bb(1073742336,b.k,b.k,[]),o.Bb(1073742336,b.b,b.b,[]),o.Bb(1073742336,i.Db,i.Db,[]),o.Bb(1073742336,h.p,h.p,[[2,h.u],[2,h.m]]),o.Bb(1073742336,e,e,[]),o.Bb(1024,h.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);