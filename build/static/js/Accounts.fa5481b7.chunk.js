(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1472:function(e,t,a){"use strict";a.d(t,"a",function(){return b});var n=a(1483),r=a.n(n),c=a(2),o=a.n(c),s=a(31),l=a(6),i=a(15),d=a(14),u=a(21),g=a(20),m=a(22),p=a(0),f=a.n(p),A=a(16);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach(function(t){Object(s.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(g.a)(t).call(this,e))).loadDatas=Object(l.a)(o.a.mark(function e(){var t,n,r,c,s=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0<s.length&&void 0!==s[0]?s[0]:1,n=1<s.length&&void 0!==s[1]?s[1]:40,r=a.state.filter,e.next=5,A.b.getTokens(h({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=h({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(h({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange&&a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props,t=e.tableData,n=(e.filterDropdownVisible,a.state.searchText),r=new RegExp(n,"gi");a.setState({filterDropdownVisible:!1,filtered:!!n,data:t.map(function(e){return e.name.match(r)?h({},e,{name:f.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(n,")|(?=").concat(n,")"),"i")).map(function(e,t){return e.toLowerCase()===n.toLowerCase()?f.a.createElement("span",{key:t,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var a={},n=[],r=!0,c=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var i=s.value;if(i.sorter&&!i.filterDropdown){var d={sorter:t(i.key)};n.push(h({},i,{},d))}else if(!i.sorter&&i.filterDropdown){var u=h({},a);n.push(h({},i,{},u))}else if(i.sorter&&i.filterDropdown){var g=h({sorter:t(i.key)},a);n.push(h({},i,{},g))}else n.push(i)}}catch(e){c=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(c)throw o}}return n},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:h({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,c=e.column,o=e.bordered,s=e.pagination,l=void 0===s||s,i=e.scroll,d=e.Footer,u=e.locale,g=e.addr,m=e.transfers,p=e.nopadding,A=(e.contractAddress,e.isPaddingTop,this.setColumn(c)),E=l?h({total:t},this.state.pagination):l;return f.a.createElement("div",null," ",g?f.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==m?" transfer-mt-100":" transfer-pt-100")+(p?" transfer-mp-0":"")},f.a.createElement(r.a,{bordered:o,columns:A,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,footer:d,pagination:E,loading:a,onChange:this.handleTableChange})," "):f.a.createElement("div",{className:"card table_pos"},f.a.createElement(r.a,{bordered:o,columns:A,footer:d,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,pagination:E,loading:a,onChange:this.handleTableChange})," ")," ")}}]),t}(p.Component)},1473:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAolBMVEUAAAD9/f3///////////////////////////////////////////////////////////////////////////////////////////////////////////////+1tbW9vb35+fn29vbz8/Pu7u7U1NTw8PDj4+PQ0NDCwsK/v7/IyMjX19fn5+fd3d3Gxsa6urrh4eHZ2dnKysrExMTp6enMzMwjnaLvAAAAHXRSTlMA/QjdudlbT0oQzu7mtYxy4JchHBflm4tx8bTLntSLMkcAAAH3SURBVEjHxZbZeoIwEEYbC2LdcN/aMSAgICri8v6v1khiGCSCeuN/443nOzMTsnx9Kj9GV9NbhLR0rWv8VP+/Vu8QQCFavVYOmGMoZGyWQI1vUOa78UjRh4fpK0WjXyhJc1QkBllR6uIG98SwBxXpDe/6aEJlmvl+JvBEJrnpwlNpoLLuWveiwHVUI8hKmwGKtd4sr9kfrAIzk5IxErh0eQvFKg9Y2jdNHQtksMranQK4pi4QjQOOFODEruP49LTjVWpifxCOxMsHob4skPD9Y4BAAiWwX+MxGCkyBR668iJRWnECXsJ/uymykMj9ADZCYK331Ic0nRTRJSLWMeSCyJNzD3Y28OgpMs8QHsJUUnBgArQ8rRQBhIhY1OZz95mAs2KspAxhgpMUrNwTRuZFxKa26EAUSo9nXJiusgSZIAqDhLG4/YUCiZNMcOECPOSuqjCLj1cKyBkvpaFEmGDPBLI40b6R+yypjZAt6n7Lut8S+Vmijz/2vayXWAqSMIykX8tvMedCb5vXoo4QHKUgt8Vq7Vs9u4C6Dl+XtAMsEBu5eFw4/lVFqCU7wDGLh5LY5/QS+2GY2MpDCR99WBUet6qj7+UD9u+NY/z1y+LdKwln1Cy/+N69Xt+/xLHIbBeBtlmreJBoigdJ9bNn2uHPns6UPXs+lH/GLsFEEcCdEQAAAABJRU5ErkJggg=="},2361:function(e,t){e.exports="data:image/png;base64,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"},2400:function(e,t,a){var n={"./Binance.svg":2401,"./Bitfinex.svg":2402,"./Bittrex.svg":2403,"./Gate.svg":2404,"./Huobi.svg":2405,"./Kucoin.svg":2406,"./Okex.svg":2407,"./Poloniex.svg":2408};function r(e){var t=c(e);return a(t)}function c(e){if(a.o(n,e))return n[e];var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return Object.keys(n)},r.resolve=c,(e.exports=r).id=2400},2401:function(e,t,a){e.exports=a.p+"static/media/Binance.8ad2ef29.svg"},2402:function(e,t,a){e.exports=a.p+"static/media/Bitfinex.855e320a.svg"},2403:function(e,t,a){e.exports=a.p+"static/media/Bittrex.e077d3ec.svg"},2404:function(e,t,a){e.exports=a.p+"static/media/Gate.5b007056.svg"},2405:function(e,t,a){e.exports=a.p+"static/media/Huobi.97a18450.svg"},2406:function(e,t,a){e.exports=a.p+"static/media/Kucoin.299068b8.svg"},2407:function(e,t,a){e.exports=a.p+"static/media/Okex.e8b6d34b.svg"},2408:function(e,t,a){e.exports=a.p+"static/media/Poloniex.8bf89480.svg"},3501:function(e,t,a){"use strict";a.r(t);var n=a(1483),r=a.n(n),c=a(81),o=a.n(c),s=a(115),l=a.n(s),i=a(57),d=a.n(i),u=a(272),g=a.n(u),m=a(2),p=a.n(m),f=a(31),A=a(6),E=a(15),h=a(14),b=a(21),v=a(20),I=a(22),C=a(0),B=a.n(C),y=a(30),k=a(18),O=a(3),x=a(11),Q=a(23),S=a(4),w=a(139),H=a(93),_=a(273),j=(a(12),a(16)),D=a(63);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var L=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(b.a)(this,Object(v.a)(t).call(this))).loadAccounts=Object(A.a)(p.a.mark(function t(){var a,n,r,c,o,s,l,i,d,u,g,m=arguments;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=0<m.length&&void 0!==m[0]?m[0]:1,n=1<m.length&&void 0!==m[1]?m[1]:20,r=e.state.sort,e.setState({loading:!0}),t.next=6,j.b.getAccounts({sort:r,limit:n,start:(a-1)*n}).catch(function(e){return console.log(e)});case 6:return c=t.sent,o=c.accounts,s=c.total,l=c.rangeTotal,i=c.contractMap,o.forEach(function(e){i&&(i[e.address]?e.ownerIsContract=!0:e.ownerIsContract=!1)}),t.next=14,j.a.getAccountOverviewStats({days:1}).catch(function(e){return console.log(e)});case 14:d=t.sent,u=d.data,g=0,o.map(function(e,t){e.index=g+1+(a-1)*n,g++}),e.setState({loading:!1,accounts:o,total:s,rangeTotal:l,newAddressSeen:u&&u[0]&&u[0].newAddressSeen,pagination:N({},e.state.pagination,{total:s})});case 19:case"end":return t.stop()}},t)})),e.onChange=function(t,a){e.loadAccounts(t,a)},e.onSearchFieldChangeHandler=function(t){e.setState({searchString:t.target.value})},e.customizedColumn=function(){var t=e.props.intl,n=e.state.sortColumn;return[{title:g()(t.formatMessage({id:"account_rank"})),dataIndex:"index",key:"index",align:"center",width:"8%",render:function(e){return e}},{title:g()(t.formatMessage({id:"accounts"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"35%",render:function(e,n){return B.a.createElement("div",{className:"d-flex"},B.a.createElement("div",{style:{width:"240px"}},B.a.createElement("span",{className:"d-flex"},n.ownerIsContract?B.a.createElement("span",{className:"d-flex"},B.a.createElement(l.a,{placement:"top",title:g()(t.formatMessage({id:"transfersDetailContractAddress"}))},B.a.createElement(d.a,{type:"file-text",style:{verticalAlign:0,color:"#77838f",lineHeight:1.4}})),B.a.createElement(Q.a,{address:e,isContract:!0})):B.a.createElement(Q.a,{address:e}))),B.a.createElement("div",{style:{marginLeft:"10px"}},B.a.createElement("span",{style:{whiteSpace:"nowrap"}},n.addressTag?B.a.createElement("span",{className:"address-tag"},function(e){if(e){var t="";return S.e.map(function(a){-1<e.indexOf(a)&&(t=a)}),t&&B.a.createElement("img",{src:a(2400)("./".concat(t,".svg"))})}}(n.addressTag),B.a.createElement("span",null,n.addressTag)):""," ")))}},{title:g()(t.formatMessage({id:"account_balance"})),dataIndex:"balance",key:"balance",sorter:!0,defaultSortOrder:"descend",sortOrder:"balance"==n.columnKey&&n.order,sortDirections:["descend","ascend"],align:"left",className:"ant_table",render:function(e){return B.a.createElement(w.b,{amount:parseInt(e)/S.H})}},{title:B.a.createElement("div",null,g()(t.formatMessage({id:"account_percent"})),B.a.createElement("span",{className:"ml-2"},B.a.createElement(_.a,{placement:"top",text:"account_percent_tip"}))),dataIndex:"balance",key:"supply",sorter:!0,sortOrder:"supply"==n.columnKey&&n.order,sortDirections:["descend","ascend"],align:"left",className:"ant_table",width:"12%",render:function(e){return B.a.createElement("div",null,B.a.createElement(x.c,{value:parseInt(e)/S.H/S.i*100,minimumFractionDigits:8,maximumFractionDigits:8})," %")}},{title:g()(t.formatMessage({id:"account_power"})),dataIndex:"power",key:"power",sorter:!0,sortOrder:"power"==n.columnKey&&n.order,sortDirections:["descend","ascend"],align:"left",render:function(e){return B.a.createElement("span",null,e?B.a.createElement(x.c,{value:parseInt(e)/S.H}):0==e?0:"-")}},{title:B.a.createElement("div",null,g()(t.formatMessage({id:"account_trade_count"})),B.a.createElement("span",{className:"ml-2"},B.a.createElement(_.a,{placement:"top",text:"account_trade_count_tip"}))),dataIndex:"totalTransactionCount",key:"totalTransactionCount",sorter:!0,sortOrder:"totalTransactionCount"==n.columnKey&&n.order,sortDirections:["descend","ascend"],align:"left",render:function(e,t){return B.a.createElement("span",null,t.totalTransactionCount?B.a.createElement(x.c,{value:t.totalTransactionCount}):0==t.totalTransactionCount?0:"-")}}]},e.handleTableChange=function(t,a,n){var r=N({},e.state.pagination);r.current=t.current,r.pageSize=t.pageSize,void 0===n.order&&(n.order="descend"),e.setState({pagination:r,sort:"".concat("descend"===n.order?"-":"").concat(n.order?n.field:""),sortColumn:{order:n.order,columnKey:n.columnKey}},function(){return e.loadAccounts(r.current,r.pageSize)})},e.state={loading:!0,searchString:"",accounts:[],total:0,exchangeFlag:[{name:"binance",addressList:{Cold:["TMuA6YqfCeX8EhbfYEg5y7S4DqzSJireY9","TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb"],Hot:["TAUN6FwrnwwmaEqYcckffC7wYmbaS6cBiX"]}}],pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},newAddressSeen:0,sort:"-balance",sortColumn:{order:"descend",columnKey:"balance"}},e}return Object(I.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"componentDidUpdate",value:function(){}},{key:"filteredAccounts",value:function(){var e=this.props.accounts,t=this.state.searchString;return 0<(t=t.toUpperCase()).length&&(e=o()(e,function(e){return-1!==e.address.toUpperCase().indexOf(t)})),e}},{key:"renderAccounts",value:function(){var e=this.state.accounts;if(0!==e.length)return B.a.createElement(C.Fragment,null,B.a.createElement("div",{className:"table-responsive"},B.a.createElement("table",{className:"table table-striped m-0"},B.a.createElement("thead",{className:"thead-dark"},B.a.createElement("tr",null,B.a.createElement("th",null,Object(O.c)("address")),B.a.createElement("th",{className:"d-md-table-cell"},Object(O.c)("supply")),B.a.createElement("th",{className:"d-md-table-cell"},Object(O.c)("power")),B.a.createElement("th",null,Object(O.c)("balance")))),B.a.createElement("tbody",null,e.map(function(e,t){return B.a.createElement("tr",{key:e.address},B.a.createElement("th",null,B.a.createElement(Q.a,{address:e.address})),B.a.createElement("td",{className:"d-md-table-cell text-nowrap"},B.a.createElement(x.c,{value:e.balance/S.H/S.i*100,minimumFractionDigits:8,maximumFractionDigits:8})," %"),B.a.createElement("td",{className:"text-nowrap d-md-table-cell"},B.a.createElement(x.c,{value:e.power/S.H})),B.a.createElement("td",{className:"text-nowrap"},B.a.createElement(w.b,{amount:e.balance/S.H})))})))))}},{key:"render",value:function(){var e=this.props,t=(e.match,e.intl),a=this.state,n=a.total,c=a.loading,o=a.rangeTotal,s=void 0===o?0:o,l=a.newAddressSeen,i=a.accounts,d=a.pagination,u=this.customizedColumn();return t.formatMessage({id:"view_total"}),t.formatMessage({id:"account_unit"}),t.formatMessage({id:"table_info_big"}),t.formatMessage({id:"view_total"}),t.formatMessage({id:"table_info_account_tip2"}),B.a.createElement("main",{className:"container header-overlap pb-3 token_black account_main"},B.a.createElement("div",{className:"row"},B.a.createElement("div",{className:"d-flex col-md-12 justify-content-end my-2"},B.a.createElement(D.a,{to:"/data/stats#address"},Object(O.c)("account_more"),">")),B.a.createElement("div",{className:"d-flex col-md-12 panel"},B.a.createElement("div",{className:"card h-100 widget-icon accout_unit"},B.a.createElement("div",{className:"card-body"},B.a.createElement("h3",{className:"text-primary"},l?B.a.createElement(x.c,{value:l}):"-"),Object(O.c)("account_lastDay_count"))),B.a.createElement("div",{className:"card h-100 widget-icon accout_total"},B.a.createElement("div",{className:"card-body"},B.a.createElement("h3",{className:"text-primary"},s?B.a.createElement(x.c,{value:s}):"-"),Object(O.c)("account_realTime_count"))))),c&&B.a.createElement("div",{className:"loading-style"},B.a.createElement(H.b,null)),B.a.createElement("div",{className:"row mt-2"},B.a.createElement("div",{className:"col-md-12 table_pos"},n?B.a.createElement("div",{className:"d-none d-md-block mt-2 mb-2",style:{color:"#999",fontSize:"16px"}},B.a.createElement("div",null,Object(O.c)("account_total_tip"))):"",B.a.createElement(r.a,{bordered:!0,columns:u,rowKey:function(e,t){return t},dataSource:i,scroll:scroll,pagination:d,loading:c,onChange:this.handleTableChange}))))}}]),t}(C.Component),J={loadAccounts:k.r};t.default=Object(y.connect)(function(e){return{accounts:e.app.accounts}},J)(Object(x.h)(L))},3544:function(e,t,a){"use strict";a.r(t);var n,r=a(1483),c=a.n(r),o=a(272),s=a.n(o),l=a(39),i=a.n(l),d=a(2),u=a.n(d),g=a(31),m=a(6),p=a(15),f=a(14),A=a(21),E=a(20),h=a(22),b=a(1479),v=a.n(b),I=a(0),C=a.n(I),B=a(30),y=a(18),k=a(3),O=a(11),x=a(23),Q=a(4),S=a(139),w=a(93),H=a(16),_=a(10),j=a(52),D=a(142),M=a(1472),N=Object(B.connect)(function(e){return{account:e.app.account,wallet:e.app.wallet,tokenBalances:e.account.tokens,trxBalance:e.account.trxBalance||e.account.balance}},{reloadWallet:j.c})(n=Object(O.h)(n=Object(D.a)(n=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(A.a)(this,Object(E.a)(t).call(this,e))).hideModal=function(){var e=a.props.onHide;e&&e()},a.customizedColumn=function(){var e=a.props.intl;return[{title:s()(e.formatMessage({id:"propose_number"})),dataIndex:"index",align:"left",render:function(e,t,a){return C.a.createElement("div",null,a+1)}},{title:s()(e.formatMessage({id:"developers_contribution_link"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"80%",render:function(e,t){return C.a.createElement(x.e,{href:t.url,target:"_blank",className:"text-muted"},C.a.createElement("span",{style:{wordBreak:"break-all"}},t.url))}},{title:s()(e.formatMessage({id:"developers_earn_points"})),dataIndex:"balance",key:"supply",align:"left",className:"ant_table",render:function(e,t){return C.a.createElement("div",null,C.a.createElement(O.c,{value:t.points}))}}]},a.state={loading:!1},a}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.loading,t=this.props,a=(t.intl,t.notes),n=a.length,r=this.customizedColumn();return C.a.createElement(_.c,{isOpen:!0,toggle:this.hideModal,fade:!1,className:"modal-dialog-centered _freezeContent developers_note"},C.a.createElement(_.f,{className:"text-center _freezeHeader",toggle:this.hideModal},Object(k.c)("developers_points_details")),C.a.createElement(_.d,{className:"text-center _freezeBody token_black"},C.a.createElement(M.a,{bordered:!0,loading:e,column:r,data:a,total:n,position:"bottom"})))}}]),t}(C.a.PureComponent))||n)||n)||n;function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach(function(t){Object(g.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Y=v.a.Search,Z=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(A.a)(this,Object(E.a)(t).call(this))).loadAccounts=Object(m.a)(u.a.mark(function t(){var a,n,r,c,o,s,l,i,d=arguments;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=0<d.length&&void 0!==d[0]?d[0]:1,n=1<d.length&&void 0!==d[1]?d[1]:20,r=e.state,c=r.searchCriteria,o=r.filter,e.setState({loading:!0}),t.next=6,H.b.getUserList(J({search:c,pageSize:n,page:a},o));case 6:s=t.sent,l=s.data,i=s.total,l.map(function(e,t){e.index=t+1,e.extraData=new Function("return "+e.extra)()}),e.setState({loading:!1,developers:l,total:i,pagination:J({},e.state.pagination,{total:i})});case 11:case"end":return t.stop()}},t)})),e.handleTableChange=function(t,a,n){var r=J({},e.state.pagination);r.current=t.current,r.pageSize=t.pageSize,e.setState({pagination:r,filter:J({},e.state.filter,{sortField:{currentYear:"currentYear",currentQuarter:"currentQuarter",currentMonth:"currentMonth"}[n.columnKey]||"currentMonth",userSort:{descend:-1,ascend:1}[n.order]||"-1",order_current:n.order})},function(){return e.loadAccounts(r.current,r.pageSize)})},e.hideModal=function(){e.setState({modal:null})},e.showNote=function(t){var a=new Function("return "+e.state.developers[t].note)();e.setState({modal:C.a.createElement(N,{notes:a,onHide:e.hideModal})})},e.onChange=function(t,a){e.loadAccounts(t,a)},e.onSearchChange=function(t){e.setState({searchCriteria:i()(t)},function(){e.loadAccounts()})},e.customizedColumn=function(){var t=e.props.intl,n=e.state.filter,r=a(1473);return[{title:s()(t.formatMessage({id:"developers_username"})),dataIndex:"name",key:"name",align:"left",className:"ant_table",width:"40%",render:function(e,t){return C.a.createElement("div",null,t.extraData&&"null"!==t.extraData.imgUrl?C.a.createElement("div",null,C.a.createElement("img",{src:t.extraData.imgUrl,width:"20",height:"20",alt:"@"+t.name,onError:function(e){e.target.onerror=null,e.target.src=r}}),C.a.createElement("span",{className:"ml-2"},t.name)):C.a.createElement("div",null,C.a.createElement("img",{src:a(2361),width:"20",height:"20",alt:"@"+t.name}),C.a.createElement("span",{className:"ml-2"},t.name)))}},{title:s()(t.formatMessage({id:"developers_current_year"})),dataIndex:"currentYear",key:"currentYear",align:"center",className:"ant_table",sorter:!0,sortOrder:"currentYear"===n.sortField&&n.order_current,render:function(e,t){return C.a.createElement("div",null,C.a.createElement(O.c,{value:t.currentYear}))}},{title:s()(t.formatMessage({id:"developers_current_quarter"})),dataIndex:"currentQuarter",key:"currentQuarter",align:"center",sorter:!0,sortOrder:"currentQuarter"===n.sortField&&n.order_current,render:function(e,t){return C.a.createElement("div",null,C.a.createElement(O.c,{value:t.currentQuarter}))}},{title:s()(t.formatMessage({id:"developers_current_month"})),dataIndex:"currentMonth",key:"currentMonth",align:"center",className:"ant_table",sorter:!0,sortOrder:"currentMonth"===n.sortField&&n.order_current,render:function(e,t){return C.a.createElement("div",null,C.a.createElement(O.c,{value:t.currentMonth}))}},{title:s()(t.formatMessage({id:"trc20_cur_order_header_action"})),dataIndex:"action",key:"action",align:"right",className:"ant_table",render:function(t,a,n){return C.a.createElement("a",{href:"javascript:;",onClick:function(){e.showNote(n)}},Object(k.c)("developers_view_points"))}}]},e.state={modal:null,loading:!0,searchString:"",developers:[],total:0,searchCriteria:"",pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},filter:{sortField:"currentMonth",userSort:-1,order_current:"descend"}},e}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"renderAccounts",value:function(){var e=this.state.developers;if(0!==e.length)return C.a.createElement(I.Fragment,null,C.a.createElement("div",{className:"table-responsive"},C.a.createElement("table",{className:"table table-striped m-0"},C.a.createElement("thead",{className:"thead-dark"},C.a.createElement("tr",null,C.a.createElement("th",null,Object(k.c)("address")),C.a.createElement("th",{className:"d-md-table-cell"},Object(k.c)("supply")),C.a.createElement("th",{className:"d-md-table-cell"},Object(k.c)("power")),C.a.createElement("th",null,Object(k.c)("balance")))),C.a.createElement("tbody",null,e.map(function(e,t){return C.a.createElement("tr",{key:e.address},C.a.createElement("th",null,C.a.createElement(x.a,{address:e.address})),C.a.createElement("td",{className:"d-md-table-cell text-nowrap"},C.a.createElement(O.c,{value:e.balance/Q.H/Q.i*100,minimumFractionDigits:8,maximumFractionDigits:8})," ","%"),C.a.createElement("td",{className:"text-nowrap d-md-table-cell"},C.a.createElement(O.c,{value:e.power/Q.H})),C.a.createElement("td",{className:"text-nowrap"},C.a.createElement(S.b,{amount:e.balance/Q.H})))})))))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.intl),n=this.state,r=n.total,o=n.loading,s=(n.rangeTotal,n.developers),l=n.modal,i=this.customizedColumn();return a.formatMessage({id:"view_total"}),a.formatMessage({id:"account_unit"}),a.formatMessage({id:"table_info_big"}),a.formatMessage({id:"table_info_account_tip1"}),a.formatMessage({id:"table_info_account_tip2"}),C.a.createElement("main",{className:"container header-overlap pb-3 token_black"},l,o&&C.a.createElement("div",{className:"loading-style"},C.a.createElement(w.b,null)),C.a.createElement("div",{className:"row mt-2"},r?C.a.createElement("p",{className:"developers_reward_tip"},Object(k.c)("developers_reward_tip")):"",C.a.createElement("div",{className:"col-md-12 table_pos trc20-ad-bg"},r?C.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},C.a.createElement("div",null,Object(k.c)("view_total")," ",r," ",Object(k.c)("developers_account"))):"",C.a.createElement("div",{className:"table_pos_search",style:{right:"15px"}},C.a.createElement(Y,{placeholder:a.formatMessage({id:"developers_search"}),enterButton:a.formatMessage({id:"search"}),size:"large",onSearch:function(t){return e.onSearchChange(t)}})),C.a.createElement("div",{className:"card table_pos table_pos_addr table_pos_addr_data"},C.a.createElement(c.a,{columns:i,rowKey:function(e,t){return t},dataSource:s,loading:o,onChange:this.handleTableChange,pagination:this.state.pagination,bordered:!0,rowClassName:function(e){if(e.index<6)return"trc20-star-ad"}})))))}}]),t}(I.Component),P={loadAccounts:y.r};t.default=Object(B.connect)(function(e){return{accounts:e.app.accounts}},P)(Object(O.h)(Z))}}]);