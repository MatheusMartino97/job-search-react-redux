(this["webpackJsonpsearch-profissions"]=this["webpackJsonpsearch-profissions"]||[]).push([[0],{35:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(19),i=n.n(s),c=(n(35),n(29)),o=n(3),u=n(7),l=n(8),j=n(10),h=n(9),b=n(12),d=n(1),f=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Sua vaga de emprego est\xe1 aqui!"}),Object(d.jsx)("footer",{children:Object(d.jsx)(b.b,{to:"/register",className:"nav-link",children:"Buscar emprego"})})]})}}]),n}(r.a.Component),p=n(16),O=n.n(p),v=n(22),m=n(21),x=n(14),k=[{value:"AC",name:"Acre"},{value:"AL",name:"Alagoas"},{value:"AP",name:"Amap\xe1"},{value:"AM",name:"Amazonas"},{value:"BA",name:"Bahia"},{value:"CE",name:"Cear\xe1"},{value:"DF",name:"Distrito Federal"},{value:"ES",name:"Esp\xedrito Santo"},{value:"GO",name:"Goi\xe1s"},{value:"MA",name:"Maranh\xe3o"},{value:"MT",name:"Mato Grosso"},{value:"MS",name:"Mato Grosso do Sul"},{value:"MG",name:"Minas Gerais"},{value:"PA",name:"Par\xe1"},{value:"PB",name:"Para\xedba"},{value:"PR",name:"Paran\xe1"},{value:"PE",name:"Pernambuco"},{value:"PI",name:"Piau\xed"},{value:"RJ",name:"Rio de Janeiro"},{value:"RN",name:"Rio Grande do Norte"},{value:"RS",name:"Rio Grande do Sul"},{value:"RO",name:"Rond\xf4nia"},{value:"RR",name:"Roraima"},{value:"SC",name:"Santa Catarina"},{value:"SP",name:"S\xe3o Paulo"},{value:"SE",name:"Sergipe"},{value:"TO",name:"Tocantins"}],y=function(e){return{type:"CHANGE_PROFESSIONS_LIST",professionsList:e}},S=function(e){return{type:"GET_WORKER_INFO",workerInfo:e}},g=n(13),E=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={shouldRedirect:"",isLoading:"",city:"",entity:"",job:"",stateShort:"AC"},a.fetchProfessions=a.fetchProfessions.bind(Object(x.a)(a)),a.handleChange=a.handleChange.bind(Object(x.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"fetchProfessions",value:function(){var e=Object(v.a)(O.a.mark((function e(t){var n,a,r,s,i,c,o,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({shouldRedirect:!1}),n=t.city,a=t.stateShort,r=this.props,s=r.searchProfessionList,i=r.getWorkerInfo,"ddd70c32-fc98-4618-b494-a9698f824353",c="https://cors-anywhere.herokuapp.com/http://lb-aws-1105894158.sa-east-1.elb.amazonaws.com/profissao/".concat(a,"/").concat(n,"?api-key=").concat("ddd70c32-fc98-4618-b494-a9698f824353"),e.next=8,fetch(c);case 8:return o=e.sent,e.next=11,o.json();case 11:(u=e.sent).message?i([]):i(t),s(u),this.setState({shouldRedirect:!0}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),alert(e.t0);case 20:case"end":return e.stop()}}),e,this,[[0,17]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Registro"}),Object(d.jsxs)("form",{action:"",onChange:this.handleChange,children:[Object(d.jsxs)("fieldset",{children:[Object(d.jsx)("legend",{children:"Informa\xe7\xf5es pessoais"}),Object(d.jsxs)("label",{htmlFor:"city-input",children:["Cidade:",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",name:"city",id:"city-input"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{htmlFor:"states-input",children:["Estado:",Object(d.jsx)("br",{}),Object(d.jsx)("select",{name:"stateShort",id:"states-input",children:k.map((function(e){var t=e.value,n=e.name;return Object(d.jsx)("option",{value:t,children:n},t)}))})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{htmlFor:"job-input",children:["Profiss\xe3o:",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",name:"job",id:"job-input"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{htmlFor:"job-input",children:["Entidade:",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",name:"entity",id:"entity-input"})]})]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"button",onClick:function(){e.fetchProfessions(e.state)},children:"Buscar resultados"})]}),Object(d.jsx)("footer",{children:Object(d.jsx)(b.b,{to:"/",className:"nav-link",children:"Voltar para Home"})}),!0===this.state.shouldRedirect?Object(d.jsx)(o.a,{to:"/results"}):null]})}}]),n}(r.a.Component),w=Object(g.b)(null,(function(e){return{searchProfessionList:function(t){return e(y(t))},getWorkerInfo:function(t){return e(S(t))}}}))(E),R=function(e){return{type:"GET_LIST_ENTITIES",entitiesList:e}},C=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("h1",{children:"Cidade n\xe3o informada"})}}]),n}(a.Component),I=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{id:"job-container",children:this.props.workerInfo.city?this.props.professionsList.map((function(t){var n=t.profissao;return Object(d.jsx)("div",{children:Object(d.jsx)("button",{value:n,onClick:e.props.handleClick,children:n})},n)})):null})}}]),n}(a.Component),L=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={selectedJob:"",isLoading:"",shoulRedirect:!1},a.fetchEntities=a.fetchEntities.bind(Object(x.a)(a)),a.handleClick=a.handleClick.bind(Object(x.a)(a)),a}return Object(l.a)(n,[{key:"fetchEntities",value:function(){var e=Object(v.a)(O.a.mark((function e(t){var n,a,r,s,i,c,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),n=this.props.workerInfo,a=n.city,r=n.stateShort,s=this.props.listEntities,"4b94dba2-5524-4632-939b-92df1c50a645",i="https://cors-anywhere.herokuapp.com/http://lb-aws-1105894158.sa-east-1.elb.amazonaws.com/entidade/".concat(t,"/").concat(r,"/").concat(a,"?api-key=").concat("4b94dba2-5524-4632-939b-92df1c50a645"),e.next=7,fetch(i);case 7:return c=e.sent,e.next=10,c.json();case 10:o=e.sent,s(o),this.setState({isLoading:!1});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(e){this.setState({selectedJob:e.target.value,shoulRedirect:!0}),this.fetchEntities(e.target.value)}},{key:"render",value:function(){var e=this.props,t=e.professionsList,n=e.workerInfo;return Object(d.jsxs)("div",{children:[n.city?Object(d.jsx)("h1",{children:"Resultados para ".concat(n.stateShort,", ").concat(n.city.toUpperCase())}):Object(d.jsx)(C,{}),n.city?Object(d.jsx)("em",{children:"Clique um uma profiss\xe3o para ver as entidades que oferecem os cargos"}):null,Object(d.jsx)(I,{workerInfo:n,professionsList:t,handleClick:this.handleClick}),Object(d.jsx)("footer",{children:Object(d.jsx)(b.b,{to:"/register",className:"nav-link",children:"Registro"})}),this.state.shoulRedirect?Object(d.jsx)(o.a,{to:"/entities/".concat(this.state.selectedJob)}):null]})}}]),n}(r.a.Component),P=Object(g.b)((function(e){return{professionsList:e.listProfessionsReducer.professionsList,workerInfo:e.workerInfoReducer}}),(function(e){return{listEntities:function(t){return e(R(t))}}}))(L),_=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.entitiesList,n=e.workerInfo;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Entidades"}),Object(d.jsx)("div",{id:"entities-container",onClick:this.searchEntity,children:t.map((function(e){var t=e.NomeFantasia,a=e.RazaoSocial;return Object(d.jsx)("a",{href:"https://www.google.com/search?q=".concat(a,"%20").concat(n.city.toUpperCase()),target:"_blank",rel:"noreferrer",children:Object(d.jsx)("div",{class:"entity",children:"".concat(a," (").concat(t,")")},t)})}))}),Object(d.jsx)("footer",{children:Object(d.jsx)(b.b,{to:"/",className:"nav-link",children:"Home"})})]})}}]),n}(r.a.Component),T=Object(g.b)((function(e){return{entitiesList:e.listEntitiesReducer.entitiesList,workerInfo:e.workerInfoReducer}}))(_);var N=function(){return Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{path:"/entities/:job",render:function(e){return Object(d.jsx)(T,Object(c.a)({},e))}}),Object(d.jsx)(o.b,{path:"/results",component:P}),Object(d.jsx)(o.b,{path:"/register",component:w}),Object(d.jsx)(o.b,{exact:!0,path:"/",component:f})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))},A=n(18),G={professionsList:[]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PROFESSIONS_LIST":return{professionsList:t.professionsList};default:return e}},B={workerInfo:{}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WORKER_INFO":return{city:t.workerInfo.city,entity:t.workerInfo.entity,job:t.workerInfo.job,stateShort:t.workerInfo.stateShort};default:return e}},J={entitiesList:[]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LIST_ENTITIES":return{entitiesList:t.entitiesList};default:return e}},z=Object(A.b)({listProfessionsReducer:M,workerInfoReducer:D,listEntitiesReducer:q}),H=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),U=Object(A.c)(z,H);i.a.render(Object(d.jsx)(g.a,{store:U,children:Object(d.jsx)(b.a,{children:Object(d.jsx)(N,{})})}),document.getElementById("root")),F()}},[[43,1,2]]]);
//# sourceMappingURL=main.114a3592.chunk.js.map