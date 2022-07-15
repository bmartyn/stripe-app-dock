(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{406:function(e,t,a){e.exports=a(532)},411:function(e,t,a){},507:function(e,t,a){},530:function(e,t,a){},531:function(e,t,a){},532:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(67),l=a.n(o);a(411),a(412),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(97),i=a(31),u=a(42),s=a(252),m=a(112),d=a(256),E=a(545),v=a(538),f=a(549),p=a(550),h=a(268),g=a(390),b=a(281),y=a.n(b),_=a(87),k=a(361),x=a.n(k),O="".concat(window.location.protocol,"//").concat(window.location.hostname,":").concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).PORT||3e3),w=function(e,t,a,n,r){x.a.post(O+e,t,n?{headers:{Authorization:n}}:{}).then(a).catch(function(e){j(e),r&&r(!1)})},j=function(e){console.log(e);var t={message:"There was an error."};if(!e.response)return e.data,void g.a.error({message:"There was an error.",description:e.message?e.message:e});var a=e.response;a.data&&(console.log(typeof a.data.error),a.data.raw&&a.data.raw.message?t.description=a.data.raw.message:a.data.error&&a.data.error.message?t.description=a.data.error.message:"string"===typeof a.data.error?t.description=a.data.error:Array.isArray(a.data.error)?a.data.error.forEach(function(e){t.description+=e+"."}):a.message&&(t.description=a.message)),g.a.error(t)},A=function(e){var t=new Date(1970,0,1);return t.setSeconds(e),t},C=function(e){var t=!1;switch(e){case"paid":t="green";break;case"invoiced_in_error":t="volcano";break;case"waiver":case"voucher":t="geekblue";break;case"refund":t="orange";break;case"uncollectible":t="magenta";break;case"open":t="cyan"}return t},I=a(544),Y=function(e){var t=e.status,a=e.faint;return r.a.createElement(I.a,{style:{opacity:a?"0.4":"1"},color:C(t)},t?t.toUpperCase():"None")},N=a(298),S=function(e,t,a,n){w("/invoices/update/".concat(e),{invoice_id:t},function(e){200==e.status?n():j(e)},a)},M=function(e,t,a,n){w("/invoices/update/label/".concat(e),{invoice_id:t},function(e){200==e.status?n():j(e)},a)},D=function(e,t,a){return r.a.createElement(s.a,{items:[{key:1,label:r.a.createElement(c.b,{to:"/sheet/invoice/view/"+e},r.a.createElement(m.a,{type:"dashed",icon:r.a.createElement(f.a,null),block:!0},"View Invoice"))},{key:2,label:"Mark Invoice",children:[{key:"2.1",label:r.a.createElement(m.a,{block:!0,type:"dashed",onClick:function(){return M("paid",e,t,a)}},"Paid")},{key:"2.2",label:r.a.createElement(m.a,{block:!0,type:"dashed",onClick:function(){return M("invoiced_in_error",e,t,a)}},"Invoiced in error")},{key:"2.3",label:r.a.createElement(m.a,{block:!0,type:"dashed",onClick:function(){return M("waiver",e,t,a)}},"Waiver")},{key:"2.4",label:r.a.createElement(m.a,{block:!0,type:"dashed",onClick:function(){return M("voucher",e,t,a)}},"Voucher")},{key:"2.5",label:r.a.createElement(m.a,{block:!0,type:"dashed",onClick:function(){return M("refund",e,t,a)}},"Refund")},{key:"2.6",label:r.a.createElement(m.a,{block:!0,type:"dashed",onClick:function(){return M("uncollectible",e,t,a)}},"Uncollectible")}]},{key:3,label:"Change Status",children:[{key:"3.1",label:r.a.createElement(m.a,{block:!0,onClick:function(){return S("paid",e,t,a)}},"Paid")},{key:"3.2",label:r.a.createElement(m.a,{block:!0,onClick:function(){return S("invoiced_in_error",e,t,a)}},"Invoiced in error")},{key:"3.3",label:r.a.createElement(m.a,{block:!0,onClick:function(){return S("waiver",e,t,a)}},"Waiver")},{key:"3.4",label:r.a.createElement(m.a,{block:!0,onClick:function(){return S("voucher",e,t,a)}},"Voucher")},{key:"3.5",label:r.a.createElement(m.a,{block:!0,onClick:function(){return S("refund",e,t,a)}},"Refund")},{key:"3.6",label:r.a.createElement(m.a,{block:!0,onClick:function(){return S("uncollectible",e,t,a)}},"Uncollectible")}]},{key:4,label:r.a.createElement(m.a,{type:"primary",danger:!0,icon:r.a.createElement(p.a,null),block:!0,onClick:function(){return S("uncollectible",e,t,a)}},"Refund")}],onClick:function(e){return console.log(e)}})},T=function(e,t,a,n){console.log("params",e,t,a,n)},F=function(){var e=Object(_.c)(),t=Object(n.useState)([]),a=Object(u.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(!1),i=Object(u.a)(c,2),s=i[0],f=i[1],p=function(){f(!0),w("/invoices/list",{},function(e){var t=e.data.data.data;t.forEach(function(e,t){e.created_verbose=N.prettyPrint(A(e.created),{showTime:!0}),e.key=t}),f(!1),l(t)},e(),f)},g=[{title:"Offering",dataIndex:"account_name",key:"account_name"},{title:"Email",dataIndex:"customer_email",key:"customer_email"},{title:"Amount",dataIndex:"amount_due",key:"amount_due",align:"center",render:function(e,t){return r.a.createElement("span",null,function(e){return"".concat(y()(e.currency)).concat(Math.round(e.amount_due/100))}(t))}},{title:"Marked for",dataIndex:"metadata.marked_status",key:"marked_status",align:"center",render:function(e,t){if(t.metadata.marked_status)return r.a.createElement(Y,{faint:!0,status:t.metadata.marked_status})},filters:[{text:"Draft",value:"draft"},{text:"Invoiced in error",value:"invoiced_in_error"},{text:"Waiver",value:"waiver"},{text:"Voucher",value:"voucher"},{text:"Refund",value:"refund"},{text:"Uncollectible",value:"uncollectible"},{text:"Open",value:"open"},{text:"Paid",value:"paid"}],onFilter:function(e,t){return t.status===e}},{title:"Current status",dataIndex:"status",key:"status",align:"center",render:function(e,t){return r.a.createElement(Y,{status:t.metadata.hasOwnProperty("custom_status")?t.metadata.custom_status:e})},filters:[{text:"Draft",value:"draft"},{text:"Invoiced in error",value:"invoiced_in_error"},{text:"Waiver",value:"waiver"},{text:"Voucher",value:"voucher"},{text:"Refund",value:"refund"},{text:"Uncollectible",value:"uncollectible"},{text:"Open",value:"open"},{text:"Paid",value:"paid"}],onFilter:function(e,t){return t.status===e}},{title:"Created",dataIndex:"created_verbose",key:"created_verbose"},{title:"Action",dataIndex:"id",key:"action",render:function(t){return r.a.createElement(d.a,{arrow:!1,overlay:D(t,e(),p),placement:"bottomRight"},r.a.createElement(m.a,null,r.a.createElement(E.b,null,"Actions",r.a.createElement(h.a,null))))}}];return Object(n.useEffect)(function(){p()},[]),r.a.createElement("div",{className:"sheet"},r.a.createElement(E.b,null),r.a.createElement("h1",null,"Invoices "),r.a.createElement(v.a,{loading:s,dataSource:o,columns:g,onChange:T}))},R=a(551),P=a(552),L=a(546),G=a(547),B=a(540),W=a(541),$=a(543),U=a(542),H=(a(507),a(92)),V=a.n(H),z=a(508),q=function(){var e=Object(n.useRef)(),t=Object(n.useState)([]),a=Object(u.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(!1),i=Object(u.a)(c,2),s=i[0],m=i[1],d=Object(n.useState)(!0),E=Object(u.a)(d,2),v=E[0],f=E[1],p=Object(n.useState)([]),h=Object(u.a)(p,2),g=h[0],b=h[1],y=Object(n.useState)(!1),k=Object(u.a)(y,2),x=k[0],O=k[1],j=Object(n.useState)(!0),A=Object(u.a)(j,2),C=A[0],I=A[1],Y=Object(n.useState)([]),N=Object(u.a)(Y,2),S=N[0],M=N[1],D=Object(n.useState)(!1),T=Object(u.a)(D,2),F=T[0],H=T[1],q=Object(n.useState)(!0),J=Object(u.a)(q,2),K=J[0],Q=J[1],X=Object(n.useState)([]),Z=Object(u.a)(X,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(!1),ne=Object(u.a)(ae,2),re=ne[0],oe=ne[1],le=Object(n.useState)(!0),ce=Object(u.a)(le,2),ie=ce[0],ue=ce[1],se=Object(_.c)(),me=function(e){return s?s[e]:0},de=function(e){return x?x[e]:0},Ee=function(e){return F?F[e]:0},ve=function(e){return re?re[e]:0};Object(n.useEffect)(function(){!function(){var e=V()().subtract(1,"day"),t=e.startOf("day").unix(),a=e.endOf("day").unix();w("/reports/dashboard/day",{start:t,end:a},function(e){var t=e.data.data,a=0,n=0;t.forEach(function(e){var t=new Date;t.setHours(e._id.hour),e.total_amount/=100,e.hour=V()(t).format("hh a"),n+=e.count,a+=e.total_amount,delete e._id}),m({amount:a,count:n,amount_avg:Math.round(a/t.length),count_avg:Math.round(n/t.length)}),console.log("YESTERDAY AGGREGATE DATA",t),l(t)},se())}(),function(){var e=V()().subtract(1,"week"),t=e.startOf("day").unix(),a=e.endOf("day").unix();w("/reports/dashboard/week",{start:t,end:a},function(e){var t=e.data.data,a=0,n=0;t.forEach(function(e){e.date="".concat(e._id.year,"/").concat(e._id.month,"/").concat(e._id.day),e.total_amount/=100,n+=e.count,a+=e.total_amount,delete e._id}),console.log(t),O({amount:a,count:n,amount_avg:Math.round(a/t.length),count_avg:Math.round(n/t.length)}),console.log("LAST WEEK AGGREGATE DATA",t),b(t)},se())}(),function(){var e=V()().subtract(1,"month"),t=e.startOf("day").unix(),a=e.endOf("day").unix();w("/reports/dashboard/week",{start:t,end:a},function(e){var t=e.data.data,a=0,n=0;t.forEach(function(e){e.date="".concat(e._id.year,"/").concat(e._id.month,"/").concat(e._id.day),e.total_amount/=100,n+=e.count,a+=e.total_amount,delete e._id}),console.log(t),H({amount:a,count:n,amount_avg:Math.round(a/t.length),count_avg:Math.round(n/t.length)}),console.log("LAST MONTH AGGREGATE DATA",t),M(t)},se())}(),function(){var e=V()().subtract(1,"month"),t=e.startOf("day").unix(),a=e.endOf("day").unix();w("/reports/dashboard/year",{start:t,end:a},function(e){var t=e.data.data,a=0,n=0;t.forEach(function(e){e.date="".concat(e._id.year,"/").concat(e._id.month),e.total_amount/=100,n+=e.count,a+=e.total_amount,delete e._id}),oe({amount:a,count:n,amount_avg:Math.round(a/t.length),count_avg:Math.round(n/t.length)}),console.log("LAST YEAR AGGREGATE DATA",t),te(t)},se())}()},[]);var fe={stroke:"rgb(80, 80, 80)",lineDash:[10,5],lineWidth:2,opacity:.75},pe={fill:"l(270) 0:#af7bb4b2 1:#165481ad"},he={xField:"hour",yField:"total_amount",annotations:[{type:"text",position:["min",me("amount_avg")],content:"Average Amount : $".concat(z(me("amount_avg"))),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",me("amount_avg")],end:["max",me("amount_avg")],style:fe}],meta:{hour:{alias:"Time",formatter:function(e){return"0"==e[0]?e.substring(1):e}},total_amount:{alias:"Amount",formatter:function(e){return"$ ".concat(z(e))}}},xAxis:{tickCount:24},smooth:!0,areaStyle:pe},ge={xField:"hour",yField:"count",annotations:[{type:"text",position:["min",me("count_avg")],content:"Average Count : ".concat(z(me("count_avg"))," Invoices"),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",me("count_avg")],end:["max",me("count_avg")],style:fe}],meta:{hour:{alias:"Time",formatter:function(e){return"0"==e[0]?e.substring(1):e}},count:{alias:"Invoice Count",formatter:function(e){return"".concat(e," Invoices")}}},xAxis:{tickCount:24},smooth:!0},be={xField:"date",yField:"total_amount",annotations:[{type:"text",position:["min",de("amount_avg")],content:"Average Amount : $".concat(z(de("amount_avg"))),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",de("amount_avg")],end:["max",de("amount_avg")],style:fe}],meta:{date:{alias:"Date",formatter:function(e){return V()(e,"YYYY/M/D").format("dddd, Do MMMM")}},total_amount:{alias:"Total Amount",formatter:function(e){return"$ ".concat(z(e))}}},smooth:!0,areaStyle:pe},ye={xField:"date",yField:"count",annotations:[{type:"text",position:["min",de("count_avg")],content:"Average Count : ".concat(z(de("count_avg"))," Invoices"),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",de("count_avg")],end:["max",de("count_avg")],style:fe}],meta:{date:{alias:"Date",formatter:function(e){return V()(e,"YYYY/M/D").format("dddd, DD MMMM")}},count:{alias:"Invoice Count",formatter:function(e){return"".concat(e," Invoices")}}},smooth:!0,areaStyle:pe},_e={xField:"date",yField:"total_amount",annotations:[{type:"text",position:["min",Ee("amount_avg")],content:"Average Amount : $".concat(z(Ee("amount_avg"))),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",Ee("amount_avg")],end:["max",Ee("amount_avg")],style:fe}],meta:{date:{alias:"Date",formatter:function(e){return V()(e,"YYYY/M/D").format("Do MMM, YYYY (ddd)")}},total_amount:{alias:"Total Amount",formatter:function(e){return"$ ".concat(z(e))}}},smooth:!0,areaStyle:pe},ke={xField:"date",yField:"count",annotations:[{type:"text",position:["min",Ee("count_avg")],content:"Average Count : ".concat(z(Ee("count_avg"))," Invoices"),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",Ee("count_avg")],end:["max",Ee("count_avg")],style:fe}],meta:{date:{alias:"Date",formatter:function(e){return V()(e,"YYYY/M/D").format("MMMM d, YYYY (dddd)")}},count:{alias:"Invoice Count",formatter:function(e){return"".concat(e," Invoices")}}},smooth:!0,areaStyle:pe},xe={xField:"date",yField:"total_amount",annotations:[{type:"text",position:["min",ve("amount_avg")],content:"Average Amount : $".concat(z(ve("amount_avg"))),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",ve("amount_avg")],end:["max",ve("amount_avg")],style:fe}],meta:{date:{alias:"Date",formatter:function(e){return V()(e,"YYYY/M").format("Do MMM, YYYY (ddd)")}},total_amount:{alias:"Total Amount",formatter:function(e){return"$ ".concat(z(e))}}},smooth:!0,areaStyle:pe},Oe={xField:"date",yField:"count",annotations:[{type:"text",position:["min",ve("count_avg")],content:"Average Count : ".concat(z(ve("count_avg"))," Invoices"),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",ve("count_avg")],end:["max",ve("count_avg")],style:fe}],meta:{date:{alias:"Date",formatter:function(e){return V()(e,"YYYY/M").format("MMMM d, YYYY (dddd)")}},count:{alias:"Invoice Count",formatter:function(e){return"".concat(e," Invoices")}}},smooth:!0,areaStyle:pe};return r.a.createElement("div",{className:" statistic-wrapper sheet",style:{minHeight:"90vh"}},r.a.createElement(L.a,null,r.a.createElement(G.a,{span:6},r.a.createElement("div",{className:"statistic-card sheet"},r.a.createElement("h3",null,"Yesterday"),r.a.createElement("div",{className:"statistic-container",onMouseOver:function(){return e.current.goTo(0)}},r.a.createElement(L.a,{gutter:16,justify:"space-between"},r.a.createElement(G.a,null,r.a.createElement(B.a,{loading:!s,title:"Amount",prefix:r.a.createElement(R.a,null),value:s&&z(s.amount)})),r.a.createElement(G.a,null,r.a.createElement(B.a,{loading:!s,title:"Invoices",prefix:r.a.createElement(P.a,null),value:s&&z(s.count)})))))),r.a.createElement(G.a,{span:6},r.a.createElement("div",{className:"statistic-card sheet"},r.a.createElement("h3",null,"Last Week"),r.a.createElement("div",{className:"statistic-container",onMouseOver:function(){return e.current.goTo(1)}},r.a.createElement(L.a,{gutter:16,justify:"space-between"},r.a.createElement(G.a,null,r.a.createElement(B.a,{loading:!x,title:"Amount",prefix:r.a.createElement(R.a,null),value:x&&z(x.amount)})),r.a.createElement(G.a,null,r.a.createElement(B.a,{loading:!x,title:"Invoices",prefix:r.a.createElement(P.a,null),value:x&&z(x.count)})))))),r.a.createElement(G.a,{span:6},r.a.createElement("div",{className:"statistic-card sheet"},r.a.createElement("h3",null,"Last Month"),r.a.createElement("div",{className:"statistic-container",onMouseOver:function(){return e.current.goTo(2)}},r.a.createElement(L.a,{gutter:16,justify:"space-between"},r.a.createElement(G.a,null,r.a.createElement(B.a,{loading:!F,title:"Amount",prefix:r.a.createElement(R.a,null),value:F&&z(F.amount)})),r.a.createElement(G.a,null,r.a.createElement(B.a,{loading:!F,title:"Invoices",prefix:r.a.createElement(P.a,null),value:F&&z(F.count)})))))),r.a.createElement(G.a,{span:6},r.a.createElement("div",{className:"statistic-card sheet"},r.a.createElement("h3",null,"Last Yar"),r.a.createElement("div",{className:"statistic-container",onMouseOver:function(){return e.current.goTo(3)}},r.a.createElement(L.a,{gutter:16,justify:"space-between"},r.a.createElement(G.a,null,r.a.createElement(B.a,{loading:!re,title:"Amount",prefix:r.a.createElement(R.a,null),value:re&&z(re.amount)})),r.a.createElement(G.a,null,r.a.createElement(B.a,{loading:!re,title:"Invoices",prefix:r.a.createElement(P.a,null),value:re&&z(re.count)}))))))),r.a.createElement("div",{className:"sheet"},r.a.createElement(W.a,{ref:function(t){return e.current=t},dotPosition:"top",autoplay:!0,autoplaySpeed:5e3},r.a.createElement("div",{className:"carousel-container"},r.a.createElement("div",{className:"sheet menu"},r.a.createElement("div",null,r.a.createElement("h2",null,"Yesterday's Hourly Data")),r.a.createElement($.a,{options:["Amount","Count"],onChange:function(e){return f("Amount"===e)}})),v?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Amount vs Hour"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(U.a,Object.assign({data:o},he)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Invoice Count vs Hour"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(U.a,Object.assign({data:o},ge)))),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"carousel-container"},r.a.createElement("div",{className:"sheet menu"},r.a.createElement("div",null,r.a.createElement("h2",null,"Last Weeks's Data")),r.a.createElement($.a,{options:["Amount","Count"],onChange:function(e){return I("Amount"===e)}})),C?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Amount vs Date"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(U.a,Object.assign({data:g},be)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Invoice Count vs Date"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(U.a,Object.assign({data:g},ye)))),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"carousel-container"},r.a.createElement("div",{className:"sheet menu"},r.a.createElement("div",null,r.a.createElement("h2",null,"Last Month's Data")),r.a.createElement($.a,{options:["Amount","Count"],onChange:function(e){return Q("Amount"===e)}})),K?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Amount vs Date"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(U.a,Object.assign({data:S},_e)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Invoice Count vs Date"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(U.a,Object.assign({data:S},ke)))),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"carousel-container"},r.a.createElement("div",{className:"sheet menu"},r.a.createElement("div",null,r.a.createElement("h2",null,"Last Year's Data")),r.a.createElement($.a,{options:["Amount","Count"],onChange:function(e){return ue("Amount"===e)}})),ie?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Amount vs Date"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(U.a,Object.assign({data:ee},xe)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Invoice Count vs Date"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(U.a,Object.assign({data:ee},Oe)))),r.a.createElement("div",null),r.a.createElement("div",null)))))},J=(a(527),a(530),a(537)),K=a(281),Q=a(298);var X=function(e){for(var t=0,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);var n="#";for(a=0;a<3;a++){n+=("00"+(t>>8*a&255).toString(16)).substr(-2)[0]+"0"}return function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(!t)return null;var a=parseInt(t[1],16),n=parseInt(t[2],16),r=parseInt(t[3],16);return{r:a=Math.round(a/15),g:n=Math.round(n/15),b:r=Math.round(r/15)}}(n)},Z=[{title:"No.",dataIndex:"dummy",key:"dummy",render:function(e,t,a){return a+1}},{title:"Description",dataIndex:"description",key:"description"},{title:"Type",dataIndex:"price",render:function(e){var t=e.type.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()});return t=t.replaceAll("_"," ")},key:"type"},{title:"Quantity",dataIndex:"quantity",key:"quantity"},{title:"Amount",dataIndex:"amount",key:"amount",render:function(e,t){return K(t.currency)+Math.round(e/100)}}],ee=function(){var e=Object(_.c)(),t=Object(i.h)().invoice_id,a=Object(n.useState)({}),o=Object(u.a)(a,2),l=o[0],c=o[1],s=Object(n.useState)([]),d=Object(u.a)(s,2),E=d[0],f=d[1],h=X("invoickjasbdakjsbde_id"),g="rgba(".concat(3*h.r,", ").concat(3*h.g,", ").concat(3*h.b,")"),b="rgba(".concat(h.r,", ").concat(h.g,", ").concat(h.b,")"),y={background:"linear-gradient(to top, ".concat(b,", ").concat(g,")"),minHeight:"200px",borderRadius:"8px"};return Object(n.useEffect)(function(){w("/invoices/retrieve",{invoice_id:t},function(e){var t=e.data.data;c(t),f(t.lines.data)},e())},[]),r.a.createElement("div",{className:"sheet"},r.a.createElement("div",{className:"sheet envelope no-margin",style:y},l.id&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,l.customer_name?"".concat(l.customer_name.split(" ")[0],"'s Invoice"):"Invoice"," "),r.a.createElement("h3",null,l.number," for ",K(l.currency)+l.amount_due,"  "),r.a.createElement("h3",null,"Due in ",Q.relativeTime(A(l.due_date)),".  ")),r.a.createElement("div",{className:"envelope"},r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Invoice ID :"),r.a.createElement("div",null,r.a.createElement(I.a,{color:g},l.id))),r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Charge Date : "),r.a.createElement("div",null,r.a.createElement(I.a,{color:g},Q.prettyPrint(A(l.created),{showTime:!0})))),r.a.createElement("div",{className:"row",style:{marginTop:"1.2em",display:"flex",justifyContent:"flex-end",marginRight:"0.2em"}},r.a.createElement(m.a,{size:"huge",type:"primary",danger:!0,icon:r.a.createElement(p.a,null)},"Refund"))))),l.id&&r.a.createElement("div",{className:"sheet no-margin invoice-container"},r.a.createElement(L.a,{gutter:16},r.a.createElement(G.a,{span:8},r.a.createElement("h2",null,"From"),r.a.createElement("div",{className:"bulky-divider",style:{backgroundColor:{dark:b}}}),r.a.createElement("h3",null,l.account_name)),r.a.createElement(G.a,{span:8},r.a.createElement("h2",null,"To"),r.a.createElement("div",{className:"bulky-divider",style:{backgroundColor:{dark:b}}}),l.customer_name&&r.a.createElement("h4",null,"Name : ",l.customer_name),l.customer_email&&r.a.createElement("h4",null,"Email : ",l.customer_email),l.customer_address&&r.a.createElement("h4",null,"Address : ",l.customer_address),l.customer_phone&&r.a.createElement("h4",null,"Phone : ",l.customer_phone)),r.a.createElement(G.a,{span:8},r.a.createElement("h2",null,"Details"),r.a.createElement("div",{className:"bulky-divider",style:{backgroundColor:{dark:b}}}),r.a.createElement("h4",null,"Invoice total : ",K(l.currency),Math.round(l.amount_due/100)),r.a.createElement("h4",null,"Status : ",r.a.createElement(Y,{status:l.status})))),r.a.createElement(J.a,null),r.a.createElement(v.a,{columns:Z,dataSource:E})),r.a.createElement(J.a,null))},te=function(){return r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"",element:r.a.createElement(q,null)}),r.a.createElement(i.b,{path:"invoice/list",element:r.a.createElement(F,null)}),r.a.createElement(i.b,{path:"invoice/view/:invoice_id",element:r.a.createElement(ee,null)}))},ae=(a(531),a(539)),ne=a(385),re=a(548),oe=a(553),le=a(554),ce=a(265),ie=a(555),ue=a(556),se=a(388),me=function(){var e=Object(n.useState)("hrushikeshchapke@gmail.com"),t=Object(u.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)("password"),c=Object(u.a)(l,2),s=c[0],d=c[1],v=Object(n.useState)(""),f=Object(u.a)(v,2),p=f[0],h=f[1],g=Object(n.useState)(""),b=Object(u.a)(g,2),y=b[0],k=b[1],x=Object(n.useState)(""),O=Object(u.a)(x,2),j=O[0],A=O[1],C=Object(n.useState)([]),I=Object(u.a)(C,2),Y=I[0],N=I[1],S=Object(n.useState)([]),M=Object(u.a)(S,2),D=M[0],T=M[1],F=Object(_.d)(),R=Object(i.g)();return r.a.createElement("div",{className:"login-container"},r.a.createElement(se.a,{fill:"#7a7a7a2f",paused:!1,options:{height:360,amplitude:40,speed:.15,points:8},style:{position:"absolute",bottom:"0px",top:"0px",zIndex:"2 !important"}}),r.a.createElement("div",{className:"sheet login"},r.a.createElement(ae.a,{tabPosition:"bottom"},r.a.createElement(ae.a.TabPane,{tab:"Login",key:1},r.a.createElement(E.b,{direction:"vertical",align:"center",className:"fields-container"},r.a.createElement("h2",{style:{textDecoration:"underline"}},"Login"),r.a.createElement(ne.a,{onChange:function(e){return o(e.target.value)},type:"email",placeholder:"Enter E-mail",prefix:r.a.createElement(oe.a,null)}),r.a.createElement(ne.a,{onChange:function(e){return d(e.target.value)},type:"password",placeholder:"Enter password",prefix:r.a.createElement(le.a,null)}),r.a.createElement("a",{className:"forgot-btn",href:"#"},"Forgot Password?"),Y.map(function(e,t){return r.a.createElement(re.a,{icon:r.a.createElement(ce.a,null),showIcon:!0,style:{fontSize:"0.8em"},message:e,key:t,type:"error"})}),r.a.createElement("br",null),r.a.createElement(m.a,{type:"primary",onClick:function(){return function(){var e=[];a||e.push("Please enter a valid e-mail."),s||e.push("Please enter your password."),e.length>0?N(e):w("/auth/login",{email:a,password:s},function(e,t){console.log("LOGIN CALL RESPONSE",e,t),R("/sheet/"),e.data.token&&F({token:e.data.token,expiresIn:86400,tokenType:"Bearer",authState:e.data.user})})}()},icon:r.a.createElement(ie.a,null)},"Login"),r.a.createElement("br",null))),r.a.createElement(ae.a.TabPane,{tab:"Register",key:2},r.a.createElement(E.b,{direction:"vertical",align:"center",className:"fields-container"},r.a.createElement("h2",{style:{textDecoration:"underline"}},"Register"),r.a.createElement(ne.a,{onChange:function(e){return h(e.target.value)},type:"email",placeholder:"Enter E-mail",prefix:r.a.createElement(oe.a,null)}),r.a.createElement(ne.a,{onChange:function(e){return k(e.target.value)},type:"password",placeholder:"Enter password",prefix:r.a.createElement(le.a,null)}),r.a.createElement(ne.a,{onChange:function(e){return A(e.target.value)},type:"password",placeholder:"Confirm password",prefix:r.a.createElement(le.a,null)}),D.map(function(e,t){return r.a.createElement(re.a,{icon:r.a.createElement(ce.a,null),showIcon:!0,style:{fontSize:"0.8em"},message:e,key:t,type:"error"})}),r.a.createElement("br",null),r.a.createElement(m.a,{onClick:function(){return function(){var e=[];p||e.push("Please enter a valid e-mail."),y||e.push("Please enter your password."),j||e.push("Please confirm your password."),y!==j&&e.push("Your passwords don't match, please try again."),e.length>0?T(e):w("/auth/register",{email:p,password:y},function(e,t){console.log("REGISTER CALL RESPONSE",e,t),R("/sheet/"),e.data.token&&F({token:e.data.token,expiresIn:86400,tokenType:"Bearer",authState:e.data.user})})}()},type:"primary",icon:r.a.createElement(ue.a,null)},"Register"),r.a.createElement("br",null))))))},de=function(){return r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"",element:r.a.createElement(me,null)}))};l.a.render(r.a.createElement(_.a,{authType:"cookie",authName:"_auth",expiresIn:86400,cookieDomain:window.location.hostname,cookieSecure:"https:"===window.location.protocol},r.a.createElement(c.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",element:r.a.createElement(de,null)}),r.a.createElement(i.b,{path:"sheet/*",element:r.a.createElement(_.b,{loginPath:"/"},r.a.createElement(te,null))})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[406,1,2]]]);
//# sourceMappingURL=main.8ac4b9b4.chunk.js.map