(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{FJi0:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("JzyJ"),o=n("vOnD"),c=n("wBNj"),l=n("KTcv"),m=o.b.section.withConfig({componentId:"jjvxkv-0"})(["background-image:linear-gradient( 0deg,rgba(0,0,0,.5) 40%,transparent),url(",");background-size:cover;background-repeat:no-repeat;"],(function(e){return e.theme.about.hero.background})),u=o.b.div.withConfig({componentId:"jjvxkv-1"})(["position:relative;height:60vh;display:flex;justify-content:flex-start;align-items:center;"]),d=o.b.h1.withConfig({componentId:"jjvxkv-2"})(["position:relative;color:#fff;padding:1rem;text-align:left;margin:0;width:100%;font-weight:300;@media(min-width:576px){text-align:left;width:50vw;}"]),s=(o.b.img.withConfig({componentId:"jjvxkv-3"})(["width:50vw;height:100%;object-fit:cover;object-position:center;"]),function(){Object(a.useContext)(l.a).about;return r.a.createElement(m,null,r.a.createElement(c.Container,null,r.a.createElement(u,null,r.a.createElement(d,null,"Noticias"))))}),p=n("v162"),f=o.b.section.withConfig({componentId:"sc-53dvip-0"})([""]),g=o.b.nav.withConfig({componentId:"sc-53dvip-1"})(["display:flex;justify-content:center;align-items:center;padding:2rem 0;"]),b=o.b.button.withConfig({componentId:"sc-53dvip-2"})(["background:transparent;border:none;cursor:pointer;transition:250ms ease;"]),h=Object(o.b)(b).withConfig({componentId:"sc-53dvip-3"})(["width:30px;height:30px;border-radius:50%;color:#919191;margin:0 1rem;&:hover{color:#fff;background-color:",";}"],(function(e){return e.theme.main.primaryColor})),w=o.b.svg.withConfig({componentId:"sc-53dvip-4"})(["fill:#919191;transition:250ms ease;",":hover &{fill:",";}"],b,(function(e){return e.theme.main.primaryColor})),E=o.b.nav.withConfig({componentId:"sc-53dvip-5"})(["display:flex;align-items:center;margin:2rem 0;"]),x=o.b.span.withConfig({componentId:"sc-53dvip-6"})(["color:#919191;"]),v=o.b.ul.withConfig({componentId:"sc-53dvip-7"})(["list-style:none;margin:0 1rem;padding:0;display:flex;"]),C=o.b.button.withConfig({componentId:"sc-53dvip-8"})(["background-color:",";transition:250ms ease;color:",";border:none;cursor:pointer;width:58px;height:34px;border-radius:15px;@media(min-width:768px){width:106px;height:34px;border-radius:25px;}"],(function(e){return e.active?e.theme.main.primaryColor:"transparent"}),(function(e){return e.active?"#fff":"#000"})),I=function(){Object(a.useContext)(l.a).office.officeId;var e=Object(a.useContext)(l.a).news.items,t=Object(a.useState)([]),n=t[0],i=t[1],o=Object(a.useState)("TODAS"),m=o[0],u=o[1];return Object(a.useEffect)((function(){switch(m){case"TODAS":return i(e);case"LEGALES":return i(e.filter((function(e){return"Legales"===e.tag})));case"NOTICIAS":return i(e.filter((function(e){return"Noticias"===e.tag})));default:return i(e)}}),[m]),r.a.createElement(f,null,r.a.createElement(c.Container,null,r.a.createElement(c.Row,null,r.a.createElement(c.Col,{xs:12},r.a.createElement(E,null,r.a.createElement(x,null,"Categorias: "),r.a.createElement(v,null,r.a.createElement("li",null,r.a.createElement(C,{onClick:function(){return u("TODAS")},active:"TODAS"===m},"Todas")),r.a.createElement("li",null,r.a.createElement(C,{onClick:function(){return u("LEGALES")},active:"LEGALES"===m},"Legales")),r.a.createElement("li",null,r.a.createElement(C,{onClick:function(){return u("NOTICIAS")},active:"NOTICIAS"===m},"Noticias"))))),n.map((function(e){return r.a.createElement(c.Col,{key:e.id,xs:12,md:4,style:{margin:"1rem 0"}},r.a.createElement(p.a,e))})),r.a.createElement(c.Col,{xs:12},r.a.createElement(g,null,r.a.createElement(b,null,r.a.createElement(w,{width:"8",height:"14",fill:"none",version:"1.1",viewBox:"0 0 8 14"},r.a.createElement("path",{d:"m0.28783 6.3069 6.0345-6.0196c0.38387-0.38312 1.0062-0.38312 1.3899 0 0.38371 0.38278 0.38371 1.0036 0 1.3863l-5.3396 5.3264 5.3394 5.3262c0.38371 0.383 0.38371 1.0037 0 1.3865-0.38371 0.3829-1.006 0.3829-1.3899 0l-6.0345-6.0197c-0.19186-0.19148-0.28767-0.44217-0.28767-0.69299 0-0.25094 0.096005-0.50181 0.28783-0.6932z"}))),r.a.createElement(h,null,"1"),r.a.createElement(h,null,"2"),r.a.createElement(h,null,"3"),r.a.createElement(h,null,"4"),r.a.createElement(h,null,"5"),r.a.createElement(b,null,r.a.createElement(w,{width:"8",height:"14",fill:"none",version:"1.1",viewBox:"0 0 8 14"},r.a.createElement("path",{d:"m7.7122 7.6931-6.0345 6.0196c-0.38387 0.3831-1.0062 0.3831-1.3899 0-0.38371-0.3828-0.38371-1.0036 0-1.3864l5.3396-5.3264-5.3394-5.3262c-0.38371-0.38293-0.38371-1.0037 0-1.3865 0.38371-0.38293 1.0061-0.38293 1.3899 0l6.0345 6.0197c0.19185 0.19148 0.28767 0.44217 0.28767 0.69299 0 0.25094-0.096 0.50181-0.28783 0.6932z"}))))))))},j=n("nrwI");t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s,null),r.a.createElement(I,null),r.a.createElement(c.Container,null,r.a.createElement(c.Row,null,r.a.createElement(c.Col,{xs:12},r.a.createElement(j.a,null)))))}},nrwI:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("vOnD"),o=n("wBNj"),c=n("KTcv"),l=n("qTur"),m=n("rxVv"),u=n("Wbzz"),d=i.b.div.withConfig({componentId:"sc-5j4wy4-0"})(["margin-top:",";padding:2rem 0;"],(function(e){return e.noMargin?0:"4rem"})),s=(i.b.div.withConfig({componentId:"sc-5j4wy4-1"})([""]),i.b.p.withConfig({componentId:"sc-5j4wy4-2"})(["text-align:left;@media(min-width:768px){font-size:1.2rem;}"])),p=i.b.div.withConfig({componentId:"sc-5j4wy4-3"})(["display:flex;justify-content:center;align-items:center;width:100%;"]);t.a=function(e){var t=e.noMargin,n=Object(a.useContext)(c.a).home.contact.title;return r.a.createElement(a.Fragment,null,r.a.createElement(d,{noMargin:t},r.a.createElement(o.Container,null,r.a.createElement(o.Row,{align:"center",justify:"center"},r.a.createElement(o.Col,{xs:12,md:9},r.a.createElement(p,null,r.a.createElement(s,null,n))),r.a.createElement(o.Col,{xs:12,md:3},r.a.createElement(p,null,r.a.createElement(l.a,{primary:!0,block:!0,onClick:function(){return Object(u.c)("/contact")}},"Contáctanos",r.a.createElement(m.a,{style:{marginLeft:8}}))))))))}},rxVv:function(e,t,n){"use strict";var a=n("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},i=n("6VBw"),o=function(e,t){return a.createElement(i.a,Object.assign({},e,{ref:t,icon:r}))};o.displayName="ArrowRightOutlined";t.a=a.forwardRef(o)},v162:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return y}));var a=n("q1tI"),r=n.n(a),i=n("KTcv"),o=n("fHS2"),c=n("vOnD"),l=n("c+WK"),m=c.b.div.withConfig({componentId:"sc-1bfeezo-0"})(["background-color:#fff;display:flex;flex-direction:column;align-items:center;border:1px solid #EBEBEB;height:500px;transition:250ms ease;box-shadow:0px 2px 10px rgba(0,0,0,0.108337);width:100%;&:hover{box-shadow:0px 1px 1px rgba(0,0,0,.12),0px 2px 2px rgba(0,0,0,.12),0px 4px 4px rgba(0,0,0,.12),0px 8px 8px rgba(0,0,0,.12),0px 16px 16px rgba(0,0,0,.12),0px 32px 32px rgba(0,0,0,.12);}@media(min-width:768px){margin:0 1rem;}"]),u=c.b.div.withConfig({componentId:"sc-1bfeezo-1"})(['background-image:url("','");background-position:center;background-size:cover;background-repeat:none;width:100%;padding-top:75%;'],(function(e){return e.src})),d=c.b.div.withConfig({componentId:"sc-1bfeezo-2"})(["padding:1rem 1rem 1.5rem 1rem;width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;color:#212121;"]),s=c.b.ul.withConfig({componentId:"sc-1bfeezo-3"})(["list-style:none;padding:0;margin:0;font-size:14px;"]),p=c.b.li.withConfig({componentId:"sc-1bfeezo-4"})(["font-size:1.2rem;margin-bottom:.5rem;font-weight:bold;"]),f=c.b.li.withConfig({componentId:"sc-1bfeezo-5"})(["color:",";font-size:1.2rem;font-weight:bold;margin-bottom:.5rem;"],(function(e){return e.theme.main.primaryColor})),g=c.b.span.withConfig({componentId:"sc-1bfeezo-6"})([""]),b=c.b.ul.withConfig({componentId:"sc-1bfeezo-7"})(["list-style:none;color:#919191;font-size:14px;"]),h=c.b.li.withConfig({componentId:"sc-1bfeezo-8"})(["margin-bottom:.5rem;"]),w=(c.b.span.withConfig({componentId:"sc-1bfeezo-9"})(["height:1px;width:100%;background-color:#EBEBEB;"]),function(e){var t=e.mainImage,n=e.title,c=e.value,w=e.currency,E=e.code,x=e.ubication,v=e.characteristics,C=e._id,I=Object(a.useContext)(i.a).builderId;return r.a.createElement(o.a,{to:"/property?builderId="+I+"&propertyId="+C,title:"Ver propiedad"},r.a.createElement(m,null,r.a.createElement(u,{src:t}),r.a.createElement(d,null,r.a.createElement(s,null,r.a.createElement(p,null,Object(l.g)(n,30)),r.a.createElement(f,null,w+" "+Object(l.a)(w,c)),r.a.createElement("li",{style:{margin:"1rem 0"}},r.a.createElement(g,null,"Venta - "),r.a.createElement("span",null,"cod ",E))),r.a.createElement(b,null,r.a.createElement(h,null,Object(l.g)(x.address,30)),v.slice(0,2).map((function(e,t){return r.a.createElement(h,{key:t},r.a.createElement("span",null,e.name," ",e.value," ","Sup. Total"===e.name&&"mt2"))}))))))}),E=c.b.div.withConfig({componentId:"sc-1bg8bqe-0"})(["background-color:#fff;border:1px solid #EBEBEB;"]),x=c.b.img.withConfig({componentId:"sc-1bg8bqe-1"})(["object-fit:cover;object-position:center;width:100%;"]),v=c.b.span.withConfig({componentId:"sc-1bg8bqe-2"})(["width:86px;height:27px;border-radius:20px;background-color:",";color:#fff;display:flex;justify-content:center;align-items:center;"],(function(e){return e.theme.main.primaryColor})),C=c.b.div.withConfig({componentId:"sc-1bg8bqe-3"})(["padding:1rem;"]),I=c.b.p.withConfig({componentId:"sc-1bg8bqe-4"})(["font-weight:bold;"]),j=c.b.span.withConfig({componentId:"sc-1bg8bqe-5"})(["color:#919191;font-size:14px;"]),y=function(e){var t=e.image,n=e.title,a=e.tag,i=e.date;return r.a.createElement(o.a,{to:"/new"},r.a.createElement(E,null,r.a.createElement(x,{src:t,alt:n}),r.a.createElement(C,null,r.a.createElement(v,null,a),r.a.createElement(I,null,n),r.a.createElement(j,null,i))))}}}]);
//# sourceMappingURL=component---src-pages-news-js-b6efa803ba8ab37d8e95.js.map