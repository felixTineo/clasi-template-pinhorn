(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{J7O4:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),o=t("Ff2n"),i=t("ODXe"),l=Object(a.createContext)(null),c=l.Provider;function s(){var e=Object(a.useContext)(l);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var u=t("4R65");function m(e){var n=e.children,t=e.className,l=e.id,s=e.placeholder,m=e.style,d=e.whenCreated,p=Object(o.a)(e,["children","className","id","placeholder","style","whenCreated"]),f=Object(a.useRef)(null),b=function(e,n){var t=Object(a.useState)(null),r=Object(i.a)(t,2),o=r[0],l=r[1];return Object(a.useEffect)((function(){if(null!==e.current&&null===o){var t=new u.Map(e.current,n);null!=n.center&&null!=n.zoom?t.setView(n.center,n.zoom):null!=n.bounds&&t.fitBounds(n.bounds,n.boundsOptions),null!=n.whenReady&&t.whenReady(n.whenReady),l(t)}}),[e,o,n]),o}(f,p),g=Object(a.useRef)(!1);Object(a.useEffect)((function(){null!=b&&!1===g.current&&null!=d&&(g.current=!0,d(b))}),[b,d]);var h=Object(a.useMemo)((function(){return b?{__version:1,map:b}:null}),[b]),E=h?r.a.createElement(c,{value:h},n):null!=s?s:null;return r.a.createElement("div",{ref:f,className:t,id:l,style:m},E)}t("i8i4");function d(e){function n(n,t){var o=e(n).current,i=o.instance,l=o.context;return Object(a.useImperativeHandle)(t,(function(){return i})),null==n.children?null:r.a.createElement(c,{value:l},n.children)}return Object(a.forwardRef)(n)}function p(e){function n(n,t){var r=e(n).current.instance;return Object(a.useImperativeHandle)(t,(function(){return r})),null}return Object(a.forwardRef)(n)}function f(e,n){return null==n?function(n,t){return Object(a.useRef)(e(n,t))}:function(t,r){var o=Object(a.useRef)(e(t,r)),i=Object(a.useRef)(t),l=o.current.instance;return Object(a.useEffect)((function(){i.current!==t&&(n(l,t,i.current),i.current=t)}),[l,t,r]),o}}function b(e,n){var t=Object(a.useRef)(n);Object(a.useEffect)((function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n}),[e,n])}function g(e,n){var t=Object(a.useRef)();Object(a.useEffect)((function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}}),[e,n])}var h=t("rePB");function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){Object(h.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e,n){var t,a=null!=(t=e.pane)?t:n.pane;return a?w(w({},e),{},{pane:a}):e}function O(e,n){Object(a.useEffect)((function(){var t,a=null!=(t=n.layerContainer)?t:n.map;return a.addLayer(e.instance),function(){a.removeLayer(e.instance)}}),[n,e])}function y(e){return function(n){var t=s(),a=e(v(n,t),t);return b(t.map,n.attribution),g(a.current,n.eventHandlers),O(a.current,t),a}}var x=p(y(f((function(e,n){var t=e.url,a=Object(o.a)(e,["url"]);return{instance:new u.TileLayer(t,v(a,n)),context:n}}),(function(e,n,t){var a=n.opacity,r=n.zIndex;null!=a&&a!==t.opacity&&e.setOpacity(a),null!=r&&r!==t.zIndex&&e.setZIndex(r)}))));function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){Object(h.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var I=function(e,n){return d(y(f(e,n)))}((function(e,n){var t=e.position,a=Object(o.a)(e,["position"]),r=new u.Marker(t,a);return{instance:r,context:j(j({},n),{},{overlayContainer:r})}}),(function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())}));n.a=function(e){var n=e.lat,t=e.lng,a=e.height,o=e.zoom;return"undefined"!=typeof window?r.a.createElement(m,{center:{lat:n,lng:t},zoom:o,scrollWheelZoom:!1,style:{height:a}},r.a.createElement(x,{url:"https://api.mapbox.com/styles/v1/felixtineo/ckkigaae20ubv17pelsiz47wg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZmVsaXh0aW5lbyIsImEiOiJja2IwdTYzaHQwMDYyMnZvOHltYXJrdmIwIn0.P0lczMOjIif3MGlqroU__A",attribution:'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}),r.a.createElement(I,{position:[n,t]})):r.a.createElement("span",null,"a")}},pIcT:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),o=t("KTcv"),i=t("vOnD"),l=t("wBNj"),c=t("qTur"),s=t("Wbzz"),u=i.b.div.withConfig({componentId:"ihy4rf-0"})(["margin:8rem 0 0;"]),m=i.b.p.withConfig({componentId:"ihy4rf-1"})(["margin:0;font-weight:bold;font-size:1.5rem;"]);n.a=function(){Object(a.useContext)(o.a);return r.a.createElement(l.Container,null,r.a.createElement(u,null,r.a.createElement(l.Row,{align:"center"},r.a.createElement(l.Col,{xs:9},r.a.createElement(m,null,"¿Estás buscando una asesoría completa y eficaz para vender, arrendar o comprar una propiedad?")),r.a.createElement(l.Col,{xs:3},r.a.createElement(c.a,{block:!0,primary:!0,onClick:function(){return Object(s.navigate)("/contact")}},"Contáctanos")))))}},wCYt:function(e,n,t){"use strict";t.r(n),t.d(n,"query",(function(){return N}));var a=t("q1tI"),r=t.n(a),o=t("JzyJ"),i=t("vOnD"),l=t("wBNj"),c=t("KTcv"),s=i.b.section.withConfig({componentId:"sc-1oyhaur-0"})(['background-image:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url("/602bbc5b11626.jpg");background-size:cover;background-repeat:no-repeat;']),u=i.b.div.withConfig({componentId:"sc-1oyhaur-1"})(["position:relative;height:100vh;padding-top:157px;display:flex;justify-content:flex-start;align-items:center;"]),m=i.b.h1.withConfig({componentId:"sc-1oyhaur-2"})(["position:relative;color:#fff;padding:1rem;text-align:left;margin:0;width:100%;font-weight:300;@media(min-width:576px){text-align:left;width:50vw;}"]),d=(i.b.img.withConfig({componentId:"sc-1oyhaur-3"})(["width:50vw;height:100%;object-fit:cover;object-position:center;"]),function(){Object(a.useContext)(c.a).about;return r.a.createElement(s,null,r.a.createElement(l.Container,null,r.a.createElement(u,null,r.a.createElement(m,null,"Manejamos una cartera selecta y reducida de propiedades para entregar un servicio de excelencia."))))}),p=t("mZMQ"),f=t("jhfD"),b=t("rxVv"),g=(t("hmtA"),t("J7O4")),h=[{title:"PÚBLICO EXIGENTE",description:"Se dirigen a un público exigente y acotado, a menudo amigos, conocidos o personas que han escuchado de la corredora como consecuencia del boca a boca, o a través de las páginas web o redes sociales."},{title:"POCAS PROPIEDADES",description:"Trabajan con pocas propiedades a la vez para poder concentrarse en las demandas específicas de cada uno de los clientes."},{title:"TRATO PERSONALIZADO",description:"Ofrecen un trato personalizado y servicio de asesoría hasta que se termina la operación. Se crea una relación cercana y de comunicación constante hasta el final."}],E=i.b.section.withConfig({componentId:"sc-4xtwqh-0"})(["padding:6rem 0;padding-bottom:0;@media(min-width:576px){}"]),w=i.b.div.withConfig({componentId:"sc-4xtwqh-1"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;margin:1rem 0;@media(min-width:576px){padding:6rem 0;justify-content:center;width:100%;}"]),v=i.b.h2.withConfig({componentId:"sc-4xtwqh-2"})(["color:",";font-weight:900;border-bottom:4px solid ",";span{font-weight:lighter;color:rgba(0,0,0,.5)}"],(function(e){return e.theme.main.primaryColor}),(function(e){return e.theme.main.primaryColor})),O=(i.b.div.withConfig({componentId:"sc-4xtwqh-3"})([""]),i.b.div.withConfig({componentId:"sc-4xtwqh-4"})(["position:relative;height:250px;margin-top:4rem;background-color:",";@media(min-width:768px){height:100%;margin-top:0;}"],(function(e){return e.theme.main.primaryColor})),i.b.img.withConfig({componentId:"sc-4xtwqh-5"})(["width:100%;object-fit:cover;object-position:center;top:0;@media(min-width:768px){height:100%;margin-top:0;}"])),y=Object(i.b)(p.c).withConfig({componentId:"sc-4xtwqh-6"})(["width:100%;"]),x=i.b.div.withConfig({componentId:"sc-4xtwqh-7"})(["position:absolute;bottom:-2rem;right:3rem;@media(min-width:768px){bottom:0;}button{background:transparent;border:none;color:hsl(22,81%,57%);font-size:1.7rem;transition:250ms ease;&:hover{color:hsl(22,81%,67%);}&:disabled{color:gray;}}"]),C=Object(i.b)(p.a).withConfig({componentId:"sc-4xtwqh-8"})(["margin-right:2rem;"]),j=Object(i.b)(p.b).withConfig({componentId:"sc-4xtwqh-9"})([""]),I=i.b.div.withConfig({componentId:"sc-4xtwqh-10"})(["width:100%;"]),z=i.b.p.withConfig({componentId:"sc-4xtwqh-11"})(["font-weight:bold;"]),R=i.b.p.withConfig({componentId:"sc-4xtwqh-12"})([""]),q=(i.b.div.withConfig({componentId:"sc-4xtwqh-13"})(["display:flex;"]),i.b.div.withConfig({componentId:"sc-4xtwqh-14"})(["margin:2rem 0;display:flex;flex-direction:column;align-items:flex-start;"])),A=i.b.h2.withConfig({componentId:"sc-4xtwqh-15"})(["color:",";margin:0;"],(function(e){return e.theme.main.primaryColor})),P=(i.b.p.withConfig({componentId:"sc-4xtwqh-16"})([""]),i.b.ul.withConfig({componentId:"sc-4xtwqh-17"})(["list-style:initial;padding:0 2rem;color:gray;li{color:",";margin-bottom:1rem;span{color:gray;}strong{color:#212121;}}"],(function(e){return e.theme.main.primaryColor}))),S=Object(i.b)(q).withConfig({componentId:"sc-4xtwqh-18"})(["background-color:",";padding:1rem;"],(function(e){return e.theme.main.primaryColor})),D=i.b.p.withConfig({componentId:"sc-4xtwqh-19"})(["font-size:1.2rem;margin:0;color:#fff;"]),L=function(e){e.id;var n=e.title,t=e.description;return r.a.createElement(I,null,r.a.createElement(z,null,n),r.a.createElement(R,null,t))},T=function(){var e=Object(a.useContext)(c.a).home.services.items,n=Object(a.useContext)(c.a).office,t=n.lat,o=n.lng;return r.a.createElement(E,null,r.a.createElement(l.Container,null,r.a.createElement(l.Row,null,r.a.createElement(l.Hidden,{xs:!0},r.a.createElement(l.Col,{xs:12,md:6},r.a.createElement(O,{src:"/602bbcf7a3f0d.jpg",alt:"historia"}))),r.a.createElement(l.Col,{xs:12,md:6},r.a.createElement(w,null,r.a.createElement(v,null,"Corredora ",r.a.createElement("span",null,"Boutique")),r.a.createElement(y,{naturalSlideWidth:100,isIntrinsicHeight:!0,totalSlides:e.length,visibleSlides:1,orientation:"horizontal",isPlaying:!0,infinite:!0},r.a.createElement(p.f,null,h.map((function(e,n){return r.a.createElement(p.e,{key:e.id,index:n},r.a.createElement(L,e))}))),r.a.createElement(x,null,r.a.createElement(C,null,r.a.createElement(f.a,null)),r.a.createElement(j,null,r.a.createElement(b.a,null)))))),r.a.createElement(l.Col,{xs:12,md:12},r.a.createElement(q,null,r.a.createElement(A,null,"VENTAS")),r.a.createElement(P,null,r.a.createElement("li",null,r.a.createElement("span",null,"Valorización comercial de su propiedad.")),r.a.createElement("li",null,r.a.createElement("span",null,"Visitas guiadas y asistidas siempre.")),r.a.createElement("li",null,r.a.createElement("span",null,"Fotografías profesionales.")),r.a.createElement("li",null,r.a.createElement("span",null,"Asesoría Legal.")),r.a.createElement("li",null,r.a.createElement("span",null,"Estudio de títulos y redacción de escritura sin costo. por medio de nuestros abogados (Alianza LEGAL BROKER).")),r.a.createElement("li",null,r.a.createElement("span",null,"Convenio de publicación con los más importantes portales inmobiliarios.")),r.a.createElement("li",null,r.a.createElement("span",null,"Nuestra comisión solamente se paga una vez finalizada la operación.")),r.a.createElement("li",null,r.a.createElement("span",null,"Servicios complementarios por medio de nuestros asociados (remodelaciones, mudanzas,, repisas para bodegas, informe de tasación).")),r.a.createElement("li",null,r.a.createElement("span",null,"Alianza LATAM Pass.")),r.a.createElement("li",null,r.a.createElement("strong",null,"PROMOCIÓN DE REDES SOCIALES"),r.a.createElement("br",null),r.a.createElement("span",null,"Publicamos su propiedad en nuestras plataformas de redes sociales, incluidas Instagram y Facebook, y también pagamos para promover las publicaciones para que lleguen no solo a nuestros seguidores sino a decenas de miles más.")),r.a.createElement("li",null,r.a.createElement("strong",null,"TOUR VIRTUAL 3D"),r.a.createElement("br",null),r.a.createElement("span",null,"Trabajamos con MATTERPORT 3D para crear un recorrido virtual tridimensional de su propiedad, lo que permite a los posibles compradores de todo el mundo caminar virtualmente por su hogar. También creamos una vista de arriba hacia abajo para cada nivel de la casa, lo que permite a los usuarios una vista clara del diseño de la propiedad ")))),r.a.createElement(l.Col,{xs:12,md:12},r.a.createElement(q,null,r.a.createElement(A,null,"ARRIENDOS")),r.a.createElement(P,null,r.a.createElement("li",null,r.a.createElement("span",null,"Valorización comercial de su propiedad.")),r.a.createElement("li",null,r.a.createElement("span",null,"Visitas guiadas y asistidas siempre.")),r.a.createElement("li",null,r.a.createElement("span",null,"Fotografías profesionales.")),r.a.createElement("li",null,r.a.createElement("span",null,"Asesoría Legal.")),r.a.createElement("li",null,r.a.createElement("span",null,"Estudio de títulos y redacción de escritura sin costo. por medio de nuestros abogados (Alianza LEGAL BROKER).")),r.a.createElement("li",null,r.a.createElement("span",null,"Convenio de publicación con los más importantes portales inmobiliarios.")),r.a.createElement("li",null,r.a.createElement("span",null,"Nuestra comisión solamente se paga una vez finalizada la operación.")),r.a.createElement("li",null,r.a.createElement("span",null,"Servicios complementarios por medio de nuestros asociados (remodelaciones, mudanzas,, repisas para bodegas, informe de tasación).")))),r.a.createElement(l.Col,{xs:12,md:12},r.a.createElement(q,null,r.a.createElement(A,null,"ADMINISTRACIONES")),r.a.createElement(P,null,r.a.createElement("li",null,r.a.createElement("span",null,"Valorización comercial de su propiedad.")),r.a.createElement("li",null,r.a.createElement("span",null,"Visitas guiadas y asistidas siempre.")),r.a.createElement("li",null,r.a.createElement("span",null,"Fotografías profesionales.")),r.a.createElement("li",null,r.a.createElement("span",null,"Asesoría Legal.")),r.a.createElement("li",null,r.a.createElement("span",null,"Estudio de títulos y redacción de escritura sin costo. por medio de nuestros abogados (Alianza LEGAL BROKER).")),r.a.createElement("li",null,r.a.createElement("span",null,"Convenio de publicación con los más importantes portales inmobiliarios.")),r.a.createElement("li",null,r.a.createElement("span",null,"Nuestra comisión solamente se paga una vez finalizada la operación.")))),r.a.createElement(l.Col,{xs:12},r.a.createElement(S,null,r.a.createElement(D,null,"Encuéntranos en Av. Presidente Riesco N° 5037 – Las Condes.")),t&&r.a.createElement(g.a,{lat:parseFloat(t),lng:parseFloat(o),height:300,zoom:18})))))},k=(t("mBU7"),i.b.div.withConfig({componentId:"y1r3pv-0"})([""]),i.b.img.withConfig({componentId:"y1r3pv-1"})(["object-position:center;object-fit:cover;width:100%;height:100%;"]),i.b.div.withConfig({componentId:"y1r3pv-2"})(["background-color:#F7F7F7;min-height:99%;@media(min-width:768px){}"]),i.b.div.withConfig({componentId:"y1r3pv-3"})(["position:relative;"]),i.b.section.withConfig({componentId:"rvmdmb-0"})(["@media(min-width:768px){}"]),i.b.h2.withConfig({componentId:"rvmdmb-1"})(["color:",";font-weight:300;margin-bottom:4rem;text-align:left;@media(min-width:768px){padding:4rem 0;font-size:50px;}"],(function(e){return e.theme.main.primaryColor})),i.b.div.withConfig({componentId:"rvmdmb-2"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;margin-bottom:4rem;@media(min-width:768px){}"]),i.b.img.withConfig({componentId:"rvmdmb-3"})(["width:10rem;height:10rem;border-radius:50%;object-fit:cover;object-position:cover;"]),i.b.p.withConfig({componentId:"rvmdmb-4"})(["color:",";margin-top:2rem;font-weight:bold;"],(function(e){return e.theme.main.primaryColor})),i.b.p.withConfig({componentId:"rvmdmb-5"})(["height:100px;overflow:hidden;text-align:left;"]),i.b.ul.withConfig({componentId:"rvmdmb-6"})(["color:",";list-style:none;padding:0;margin:0;"],(function(e){return e.theme.main.primaryColor})),i.b.li.withConfig({componentId:"rvmdmb-7"})(["font-weight:bold;text-align:left;"]),t("pIcT")),N=(n.default=function(e){var n=e.data;return r.a.createElement(o.a,{data:JSON.parse(n.initial.data)},r.a.createElement(d,null),r.a.createElement(T,null),r.a.createElement(k.a,null))},"2000464556")}}]);
//# sourceMappingURL=component---src-pages-services-js-c6632faf012c757735d3.js.map