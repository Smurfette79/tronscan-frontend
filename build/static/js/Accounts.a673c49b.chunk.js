webpackJsonp([30],{2331:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var c=t[r](l),o=c.value}catch(e){return void a(e)}if(!c.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{accounts:e.app.accounts}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(93),i=n(s),d=a(11),f=n(d),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(185);var p=a(0),b=n(p),E=a(18),h=a(91),v=a(14),g=a(12),_=a(17),y=a(23),N=a(20),w=a(41),k=a(47),x=n(k),T=a(21),O=a(75),A=a(29),C=(n(A),a(16)),F=function(e){function t(){var e=this;l(this,t);var a=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.loadAccounts=function(){var t=r(f.default.mark(function t(){var n,r,l,c,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,C.Client.getAccounts({sort:"-balance",limit:u,start:(o-1)*u});case 3:n=e.sent,r=n.accounts,l=n.total,c=n.rangeTotal,a.setState({loading:!1,accounts:r,total:l,rangeTotal:c});case 8:case"end":return e.stop()}},t,e)}));return function(){return t.apply(this,arguments)}}(),a.onChange=function(e,t){a.loadAccounts(e,t)},a.onSearchFieldChangeHandler=function(e){a.setState({searchString:e.target.value})},a.customizedColumn=function(){var e=a.props.intl;return[{title:(0,_.upperFirst)(e.formatMessage({id:"address"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"40%",render:function(t,a,n){return 2==a.accountType?b.default.createElement("span",{className:"d-flex"},b.default.createElement(i.default,{placement:"top",title:e.formatMessage({id:"contracts"})},b.default.createElement("span",null,b.default.createElement("i",{className:"far fa-file mr-1"}))),b.default.createElement(y.AddressLink,{address:t,isContract:2==a.toAddressType})):b.default.createElement(y.AddressLink,{address:t})}},{title:(0,_.upperFirst)(e.formatMessage({id:"supply"})),dataIndex:"balance",key:"supply",align:"left",className:"ant_table",render:function(e,t,a){return b.default.createElement("div",null,b.default.createElement(g.FormattedNumber,{value:parseInt(e)/N.ONE_TRX/N.CIRCULATING_SUPPLY*100,minimumFractionDigits:8,maximumFractionDigits:8})," %")}},{title:(0,_.upperFirst)(e.formatMessage({id:"power"})),dataIndex:"power",key:"power",align:"center",render:function(e,t,a){return b.default.createElement(g.FormattedNumber,{value:parseInt(e)/N.ONE_TRX})}},{title:(0,_.upperFirst)(e.formatMessage({id:"balance"})),dataIndex:"balance",key:"balance",align:"right",className:"ant_table",render:function(e,t,a){return b.default.createElement(w.TRXPrice,{amount:parseInt(e)/N.ONE_TRX})}}]},a.state={loading:!0,searchString:"",accounts:[],total:0},a}return o(t,e),m(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"componentDidUpdate",value:function(){}},{key:"filteredAccounts",value:function(){var e=this.props.accounts,t=this.state.searchString;return t=t.toUpperCase(),t.length>0&&(e=(0,_.filter)(e,function(e){return-1!==e.address.toUpperCase().indexOf(t)})),e}},{key:"renderAccounts",value:function(){var e=this.state.accounts;if(0!==e.length)return b.default.createElement(p.Fragment,null,b.default.createElement("div",{className:"table-responsive"},b.default.createElement("table",{className:"table table-striped m-0"},b.default.createElement("thead",{className:"thead-dark"},b.default.createElement("tr",null,b.default.createElement("th",null,(0,v.tu)("address")),b.default.createElement("th",{className:"d-md-table-cell"},(0,v.tu)("supply")),b.default.createElement("th",{className:"d-md-table-cell"},(0,v.tu)("power")),b.default.createElement("th",null,(0,v.tu)("balance")))),b.default.createElement("tbody",null,e.map(function(e,t){return b.default.createElement("tr",{key:e.address},b.default.createElement("th",null,b.default.createElement(y.AddressLink,{address:e.address})),b.default.createElement("td",{className:"d-md-table-cell text-nowrap"},b.default.createElement(g.FormattedNumber,{value:e.balance/N.ONE_TRX/N.CIRCULATING_SUPPLY*100,minimumFractionDigits:8,maximumFractionDigits:8})," %"),b.default.createElement("td",{className:"text-nowrap d-md-table-cell"},b.default.createElement(g.FormattedNumber,{value:e.power/N.ONE_TRX})),b.default.createElement("td",{className:"text-nowrap"},b.default.createElement(w.TRXPrice,{amount:e.balance/N.ONE_TRX})))})))))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.intl),n=this.state,r=n.total,l=n.loading,c=n.rangeTotal,o=void 0===c?0:c,u=n.accounts,s=this.customizedColumn(),i=(a.formatMessage({id:"view_total"}),a.formatMessage({id:"account_unit"}),a.formatMessage({id:"table_info_big"}),a.formatMessage({id:"table_info_account_tip1"})+" "+o+" "+a.formatMessage({id:"table_info_account_tip2"}));return b.default.createElement("main",{className:"container header-overlap pb-3 token_black"},b.default.createElement("div",{className:"row"},b.default.createElement("div",{className:"col-md-12"},b.default.createElement("div",{className:"card h-100 text-center widget-icon accout_unit"},b.default.createElement("div",{className:"card-body"},b.default.createElement("h3",{className:"text-primary"},b.default.createElement(g.FormattedNumber,{value:o})),(0,v.tu)("total_accounts"))))),l&&b.default.createElement("div",{className:"loading-style"},b.default.createElement(T.TronLoader,null)),b.default.createElement("div",{className:"row mt-2"},b.default.createElement("div",{className:"col-md-12 table_pos"},r?b.default.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},b.default.createElement("div",null,(0,v.tu)("view_total")," ",o," ",(0,v.tu)("account_unit")," ",b.default.createElement(O.QuestionMark,{placement:"top",info:i})," ",b.default.createElement("br",null)," ",b.default.createElement("span",null,"(",(0,v.tu)("table_info_big"),")"))):"",b.default.createElement(x.default,{bordered:!0,loading:l,column:s,data:u,total:r,onPageChange:function(t,a){e.loadAccounts(t,a)}}))))}}]),t}(p.Component),M={loadAccounts:h.loadAccounts};t.default=(0,E.connect)(u,M)((0,g.injectIntl)(F))}});