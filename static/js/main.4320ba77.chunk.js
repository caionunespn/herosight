(window.webpackJsonpsitedeherois=window.webpackJsonpsitedeherois||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.139f0638.png"},36:function(e,t,a){e.exports=a.p+"static/media/menu.86595150.svg"},38:function(e,t,a){e.exports=a.p+"static/media/user.b752764f.png"},39:function(e,t,a){e.exports=a(81)},44:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(32),r=a.n(l),s=(a(44),a(6)),i=a(8),o=a(19),m=a(9),u=a(18),E=a.n(u),p=a(36),d=a.n(p);a(60);function v(e,t){t.history;var a="menu-container",l="pesquisa-container",r="hidden-xs",i="nav-menu-mobile",o="show-xs",u=Object(n.useState)(!1),p=Object(m.a)(u,2),v=p[0],f=p[1];return c.a.createElement("div",{className:"app-container"},c.a.createElement("header",null,c.a.createElement("div",{className:"cabecalho-container"},c.a.createElement("div",{className:"logo-container"},c.a.createElement("img",{className:"logo",src:E.a,alt:""}),c.a.createElement("strong",null,"HERO SIGHT")),c.a.createElement("div",{className:"".concat(i," ").concat(o)},c.a.createElement("button",{onClick:function(){return f(!v)},type:"button","aria-label":"Menu"},c.a.createElement("img",{src:d.a,alt:""})),v?c.a.createElement("nav",{className:"nav-mobile"},c.a.createElement("div",{className:"nav-mobile-container"},c.a.createElement(s.b,{onClick:function(){return f(!1)},to:"/"},"INICIO"),c.a.createElement(s.b,{onClick:function(){return f(!1)},to:"/equipe"},"EQUIPE"),c.a.createElement(s.b,{onClick:function(){return f(!1)},to:"/contato"},"CONTATO"))):null),c.a.createElement("div",{className:"".concat(a," ").concat(r)},c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(s.b,{to:"/"},"INICIO")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/equipe"},"EQUIPE")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/contato"},"CONTATO")))))),c.a.createElement("div",{className:"".concat(l," ").concat(r)},c.a.createElement("input",{placeholder:"Pesquisa",type:"text"}),c.a.createElement("button",{type:"submit"},"PESQUISAR"))),e.children,c.a.createElement("footer",null,c.a.createElement("div",{className:"redes"},c.a.createElement("div",null,c.a.createElement("strong",null,"HERO SIGHT")),c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,"FACEBOOK"),c.a.createElement("li",null,"TWITTER"),c.a.createElement("li",null,"INSTAGRAM"))))),c.a.createElement("div",{className:"charme"},c.a.createElement("img",{className:"logo",src:E.a,alt:""}))))}var f=a(11),b=a.n(f),g=a(13),N=(a(62),a(63),a(37)),h=a.n(N).a.create({baseURL:"https://newsapi.org/v2/"}),w=a(38),y=a.n(w);function O(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)(function(){function e(){return(e=Object(g.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("everything?language=pt&sortBy=publishedAt&pageSize=10&apiKey=e732893c048b46488389b15301b0a51d&q=Marvel");case 2:t=e.sent,r(t.data.articles);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[e.pagina]),c.a.createElement("div",{className:"news"},l.length>0?l.map(function(e,t){return c.a.createElement("div",{key:t,className:"news-card"},c.a.createElement("div",{className:"news-img-container"},c.a.createElement("img",{className:"news-img",alt:"",src:e.urlToImage})),c.a.createElement("p",{className:"news-titulo"},e.title),c.a.createElement("div",{className:"news-autor"},c.a.createElement("div",{className:"news-autor-img-container"},c.a.createElement("img",{alt:"",src:y.a})),c.a.createElement("p",null,"Por: ",e.author.substring(0,20),"  ",new Date(e.publishedAt).toLocaleDateString("pt-BR"))),c.a.createElement("div",{className:"news-body"},c.a.createElement("p",null,e.description)),c.a.createElement("div",{className:"news-tags"},c.a.createElement("ul",null,c.a.createElement("li",null,"Tags:\xa0"),c.a.createElement("li",null,"Herois,\xa0"),c.a.createElement("li",null,"Marvel"))))}):c.a.createElement("p",null,"Sem Not\xedcias"))}function I(e){e.history;var t="topNews-container",a="hidden-xs",l=Object(n.useState)([]),r=Object(m.a)(l,2),s=r[0],i=r[1];return Object(n.useEffect)(function(){function e(){return(e=Object(g.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("everything?language=pt&sortBy=relevancy&pageSize=25&apiKey=e732893c048b46488389b15301b0a51d&q=Marvel");case 2:t=e.sent,i(t.data.articles);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),c.a.createElement("div",{className:"corpo-container"},c.a.createElement(O,null),c.a.createElement("div",{className:"".concat(t," ").concat(a)},c.a.createElement("div",{className:"topNews-header"},c.a.createElement("strong",null,"Em Destaque")),s.length>0?s.map(function(e,t){return c.a.createElement("div",{key:t,className:"topNews-card"},c.a.createElement("div",{className:"topNews-img-container"},c.a.createElement("img",{className:"topNews-img",alt:"",src:e.urlToImage})),c.a.createElement("strong",{className:"topNews-titulo"},e.title))}):c.a.createElement("p",null," Sem noticias em destaque")))}a(80);function x(){return c.a.createElement("div",{class:"equipe-container"},c.a.createElement("div",{class:"membro-card"},c.a.createElement("div",{class:"membro-card-img"},c.a.createElement("img",{src:"https://avatars3.githubusercontent.com/u/20321685?v=4",alt:""})),c.a.createElement("div",{class:"membro-card-text"},c.a.createElement("h1",null,"Caio Nunes"),c.a.createElement("p",null,"N\xe3o tinha nada pra fazer da\xed resolvi criar esse app."))))}function S(){return c.a.createElement("div",null,c.a.createElement("p",null,"Aqui fica o Contato"))}function T(){function e(e){return Object(o.b)(e,{stiffness:330,damping:22})}var t={atEnter:{opacity:0,scale:1.2},atLeave:{opacity:e(0),scale:e(.8)},atActive:{opacity:e(1),scale:e(1)}};return c.a.createElement(s.a,null,c.a.createElement(v,null,c.a.createElement(o.a,{atEnter:t.atEnter,atLeave:t.atLeave,atActive:t.atActive,mapStyles:function(e){return{opacity:e.opacity,transform:"scale(".concat(e.scale,")")}},className:"route-wrapper"},c.a.createElement(i.b,{path:"/",exact:!0,render:function(){return c.a.createElement(i.a,{to:"/herosight"})}}),c.a.createElement(i.b,{path:"/herosight",component:I}),c.a.createElement(i.b,{path:"/equipe",component:x}),c.a.createElement(i.b,{path:"/contato",component:S}))))}r.a.render(c.a.createElement(function(){return c.a.createElement(T,null)},null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.4320ba77.chunk.js.map