import{Aa as p,Ea as c,Ga as m,Ha as g,Ia as f,R as d,Ya as u,Za as b,la as r,sa as l,ta as s,ua as i,va as a}from"./chunk-MAEJGKCN.js";import"./chunk-AIZVJUQQ.js";var C=n=>({hidden:n});function y(n,t){if(n&1&&(i(0,"span",6),c(1),a()),n&2){let e=t.$implicit,o=t.index,x=p();s("ngClass",f(2,C,o!==x.currentIndex)),r(),m(" ",e," ")}}var _=class n{texts=["Su confianza, nuestro mayor activo.","Innovaci\xF3n en la construcci\xF3n de estrategias de inversi\xF3n.","Transparencia, confianza y resultados comprobables.","Emisiones accionarias con objetivo espec\xEDfico."];currentIndex=0;ngOnInit(){setInterval(()=>{this.currentIndex=(this.currentIndex+1)%this.texts.length},3e3)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=d({type:n,selectors:[["app-banner"]],standalone:!0,features:[g],decls:7,vars:1,consts:[[1,"relative","h-screen","overflow-hidden","bg-cover","bg-center",2,"background-image","url('assets/img/banner.jpg')","background-attachment","fixed"],[1,"animacion-grafica"],[1,"absolute","inset-0","bg-black","bg-opacity-50","flex","flex-col","justify-center","items-center"],[1,"text-6xl","text-white","font-bold","backdrop-blur-md","animate-pulse","p-10"],[1,"text-3xl","text-white","mt-4","backdrop-blur-md","p-5"],["class","letter block",3,"ngClass",4,"ngFor","ngForOf"],[1,"letter","block",3,"ngClass"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),c(4," Bienvenido a B&G Capital "),a(),i(5,"p",4),l(6,y,2,4,"span",5),a()()()()),e&2&&(r(6),s("ngForOf",o.texts))},dependencies:[b,u],styles:['@charset "UTF-8";.animacion-grafica[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;background-size:300% 300%;background-image:linear-gradient(-45deg,#ffff0080 0% 25%,#353639a7 51%,#ff357f80);-webkit-animation:_ngcontent-%COMP%_AnimateBG 20s ease infinite;animation:_ngcontent-%COMP%_AnimateBG 20s ease infinite}@-webkit-keyframes _ngcontent-%COMP%_AnimateBG{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}@keyframes _ngcontent-%COMP%_AnimateBG{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}@keyframes _ngcontent-%COMP%_fade-in{0%{opacity:0}to{opacity:1}}.animate-fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fade-in 1.5s ease-in forwards}.letter[_ngcontent-%COMP%]{display:inline-block;opacity:0;animation:_ngcontent-%COMP%_fade-in 1.5s ease forwards;animation-delay:var(--delay)}.hidden[_ngcontent-%COMP%]{display:none}.letter[_ngcontent-%COMP%]{transition:opacity 1.5s ease-in-out}']})};export{_ as BannerComponent};