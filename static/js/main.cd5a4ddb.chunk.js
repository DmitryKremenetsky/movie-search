(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(9),i=c.n(a),r=(c(15),c(3)),o=c(4),l=c(5),j=c(10),u=(c(23),c(0));var b=function(e){var t=e.searchQuery,c=e.setSearchQuery,s=e.setMovies;return Object(u.jsxs)("div",{className:"search-bar",children:[Object(u.jsx)(j.DebounceInput,{type:"text",placeholder:"Search...",value:t,debounceTimeout:300,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)(o.a,{className:"backspace-icon",icon:l.c,onClick:function(){c(""),s([])}})]})},h=(c(25),function(e){var t=e.movies,c=e.searchQuery;return e.isFetching?Object(u.jsx)("div",{className:"title",children:"Loading..."}):c.length>3&&0===t.length?Object(u.jsx)("div",{className:"title",children:"No results found:("}):Object(u.jsx)("div",{className:"movies",children:t.map((function(e){return Object(u.jsx)("div",{className:"movie",children:Object(u.jsx)("img",{src:e.Poster,alt:"movie"})},e.imdbID)}))})}),d=(c(26),function(e){var t=e.totalPages,c=e.page,s=e.setPage,n=c>1,a=t-c>0;return Object(u.jsxs)("div",{className:"movie-pages",children:[n&&Object(u.jsx)("button",{className:"ButtonPage",onClick:function(){return s(c-1)},children:Object(u.jsx)(o.a,{className:"iconButtonPage",icon:l.a})}),a&&Object(u.jsx)("button",{className:"ButtonPage",onClick:function(){return s(c+1)},children:Object(u.jsx)(o.a,{className:"iconButtonPage",icon:l.b})})]})}),O=(c(27),function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("h1",{className:"title",children:"MovieSearchApp"})})}),f=(c(28),function(){return Object(u.jsx)("footer",{class:"site-footer",children:Object(u.jsx)("div",{class:"container",children:Object(u.jsxs)("div",{class:"row",children:[Object(u.jsx)("div",{class:"col-md-8 col-sm-6 col-xs-12",children:Object(u.jsxs)("p",{class:"copyright-text",children:["Copyright \xa9 2017 All Rights Reserved by",Object(u.jsx)("a",{href:"#",children:"    Dmitry & Kirill"}),"."]})}),Object(u.jsx)("div",{class:"col-md-4 col-sm-6 col-xs-12",children:Object(u.jsxs)("ul",{class:"social-icons",children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{class:"facebook",href:"#",children:Object(u.jsx)("i",{class:"fa fa-facebook"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{class:"twitter",href:"#",children:Object(u.jsx)("i",{class:"fa fa-twitter"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{class:"instagram",href:"#",children:Object(u.jsx)("i",{class:"fa fa-instagram"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{class:"youtube",href:"#",children:Object(u.jsx)("i",{class:"fa fa-youtube"})})})]})})]})})})});c(29);var x=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(1),i=Object(r.a)(a,2),o=i[0],l=i[1],j=function(e,t){var c=Object(s.useState)([]),n=Object(r.a)(c,2),a=n[0],i=n[1],o=Object(s.useState)(!1),l=Object(r.a)(o,2),j=l[0],u=l[1],b=Object(s.useState)(0),h=Object(r.a)(b,2),d=h[0],O=h[1];return Object(s.useEffect)((function(){if(e.trim().length<3)return i([]);i([]),u(!0),O(0),fetch("https://www.omdbapi.com/?&apikey=35def29d&s=".concat(e,"&page=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.Response,c=e.Search,s=e.totalResults;i("True"===t?c:[]),O("True"===t?Math.round(s/10):0)})).catch((function(e){console.log(e),i([]),O(0)})).finally((function(){return u(!1)}))}),[e,t]),{movies:a,totalPages:d,isFetching:j,setMovies:i}}(c,o),x=j.movies,m=j.totalPages,v=j.isFetching,g=j.setMovies;return Object(u.jsxs)("main",{children:[Object(u.jsx)(O,{}),Object(u.jsx)(b,{searchQuery:c,setSearchQuery:n,setMovies:g}),Object(u.jsx)(d,{totalPages:m,page:o,setPage:l}),Object(u.jsx)(h,{movies:x,searchQuery:c,isFetching:v}),Object(u.jsx)(f,{})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),m()}],[[30,1,2]]]);
//# sourceMappingURL=main.cd5a4ddb.chunk.js.map