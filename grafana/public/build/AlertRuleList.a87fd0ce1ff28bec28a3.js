"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4286],{"./public/app/features/alerting/AlertRuleList.tsx":(e,a,t)=>{t.r(a),t.d(a,{AlertRuleListUnconnected:()=>B,default:()=>F});var n,r=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),s=t("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),i=t("./packages/grafana-runtime/src/index.ts"),l=t("./packages/grafana-ui/src/index.ts"),c=t("./public/app/core/app_events.ts"),o=t("./public/app/core/components/Page/Page.tsx"),u=t("./public/app/core/selectors/navModel.ts"),d=t("./public/app/types/events.ts"),p=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function h(e){let{onDismiss:a}=e;return(0,p.jsx)(l.Modal,{title:"Adding an Alert",isOpen:!0,onDismiss:a,onClickBackdrop:a,children:n||(n=(0,p.jsxs)(l.VerticalGroup,{spacing:"sm",children:[(0,p.jsx)("img",{src:"public/img/alert_howto_new.png",alt:"link to how to alert image"}),(0,p.jsx)("p",{children:"Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."}),(0,p.jsx)("p",{children:"Remember to save the dashboard to persist your alert rule changes."})]}))})}var g=t("./.yarn/__virtual__/react-highlight-words-virtual-d2265e757c/0/cache/react-highlight-words-npm-0.17.0-880b4a18ed-41b3d0e451.zip/node_modules/react-highlight-words/dist/main.js"),f=t.n(g);const m=e=>{let{rule:a,search:t,onTogglePause:n}=e;const s=`${a.url}?editPanel=${a.panelId}&tab=alert`,i=(0,r.useCallback)((e=>(0,p.jsx)(f(),{highlightClassName:"highlight-search-match",textToHighlight:e,searchWords:[t]},e)),[t]);return(0,p.jsxs)(l.Card,{children:[(0,p.jsx)(l.Card.Heading,{children:i(a.name)}),(0,p.jsx)(l.Card.Figure,{children:(0,p.jsx)(l.Icon,{size:"xl",name:a.stateIcon,className:`alert-rule-item__icon ${a.stateClass}`})}),(0,p.jsxs)(l.Card.Meta,{children:[(0,p.jsxs)("span",{children:[(0,p.jsxs)("span",{className:`${a.stateClass}`,children:[i(a.stateText)," "]},"text"),"for ",a.stateAge]},"state"),a.info?i(a.info):null]}),(0,p.jsxs)(l.Card.Actions,{children:[(0,p.jsx)(l.Button,{variant:"secondary",icon:"paused"===a.state?"play":"pause",onClick:n,children:"paused"===a.state?"Resume":"Pause"},"play"),(0,p.jsx)(l.LinkButton,{variant:"secondary",href:s,icon:"cog",children:"Edit alert"},"edit")]})]})};var v,x,b=t("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js");const j=()=>{const[e,a]=(0,b.Z)("grafana.legacyalerting.unifiedalertingpromo",!0);return e?(0,p.jsxs)(l.Alert,{severity:"info",title:"Try out the Grafana 8 alerting!",onRemove:()=>a(!1),children:[v||(v=(0,p.jsxs)("p",{children:["You are using the legacy Grafana alerting.",(0,p.jsx)("br",{}),"While we have no plans of deprecating it any time soon, we invite you to give the improved Grafana 8 alerting a try."]})),x||(x=(0,p.jsxs)("p",{children:["See"," ",(0,p.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/difference-old-new/",children:"What’s New with Grafana 8 alerting"})," ","to learn more about what‘s new in Grafana 8 alerting or learn"," ",(0,p.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/opt-in/",children:"how to enable the new Grafana 8 alerting feature"}),"."]}))]}):null};var y=t("./public/app/features/alerting/state/actions.ts"),w=t("./public/app/features/alerting/state/reducers.ts");const S=e=>e.searchQuery,_=e=>{const a=new RegExp(e.alertRules.searchQuery,"i");return e.alertRules.items.filter((e=>a.test(e.name)||a.test(e.stateText)||a.test(e.info)))};var k,A,C,R;function P(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const N={getAlertRulesAsync:y.Au,setSearchQuery:w.ql,togglePauseAlertRule:y.en},T=(0,s.connect)((function(e){return{navModel:(0,u.h)(e.navIndex,"alert-list"),alertRules:_(e),search:S(e.alertRules),isLoading:e.alertRules.isLoading}}),N);class B extends r.PureComponent{constructor(){super(...arguments),P(this,"stateFilters",[{label:"All",value:"all"},{label:"OK",value:"ok"},{label:"Not OK",value:"not_ok"},{label:"Alerting",value:"alerting"},{label:"No data",value:"no_data"},{label:"Paused",value:"paused"},{label:"Pending",value:"pending"}]),P(this,"onStateFilterChanged",(e=>{i.locationService.partial({state:e.value})})),P(this,"onOpenHowTo",(()=>{c.Z.publish(new d.Dn({component:h}))})),P(this,"onSearchQueryChange",(e=>{this.props.setSearchQuery(e)})),P(this,"onTogglePause",(e=>{this.props.togglePauseAlertRule(e.id,{paused:"paused"!==e.state})})),P(this,"alertStateFilterOption",(e=>{let{text:a,value:t}=e;return(0,p.jsx)("option",{value:t,children:a},t)}))}componentDidMount(){this.fetchRules()}componentDidUpdate(e){e.queryParams.state!==this.props.queryParams.state&&this.fetchRules()}async fetchRules(){await this.props.getAlertRulesAsync({state:this.getStateFilter()})}getStateFilter(){var e;return null!==(e=this.props.queryParams.state)&&void 0!==e?e:"all"}render(){const{navModel:e,alertRules:a,search:t,isLoading:n}=this.props;return(0,p.jsx)(o.Z,{navModel:e,children:(0,p.jsxs)(o.Z.Contents,{isLoading:n,children:[(0,p.jsxs)("div",{className:"page-action-bar",children:[(0,p.jsx)("div",{className:"gf-form gf-form--grow",children:(0,p.jsx)(l.FilterInput,{placeholder:"Search alerts",value:t,onChange:this.onSearchQueryChange})}),(0,p.jsxs)("div",{className:"gf-form",children:[k||(k=(0,p.jsx)("label",{className:"gf-form-label",htmlFor:"alert-state-filter",children:"States"})),(0,p.jsx)("div",{className:"width-13",children:(0,p.jsx)(l.Select,{inputId:"alert-state-filter",menuShouldPortal:!0,options:this.stateFilters,onChange:this.onStateFilterChanged,value:this.getStateFilter()})})]}),A||(A=(0,p.jsx)("div",{className:"page-action-bar__spacer"})),i.config.unifiedAlertingEnabled&&(C||(C=(0,p.jsx)(l.LinkButton,{variant:"primary",href:"alerting/ng/new",children:"Add NG Alert"}))),(0,p.jsx)(l.Button,{variant:"secondary",onClick:this.onOpenHowTo,children:"How to add an alert"})]}),R||(R=(0,p.jsx)(j,{})),(0,p.jsx)(l.VerticalGroup,{spacing:"none",children:a.map((e=>(0,p.jsx)(m,{rule:e,search:t,onTogglePause:()=>this.onTogglePause(e)},e.id)))})]})})}}const F=T(B)},"./public/app/features/alerting/state/actions.ts":(e,a,t)=>{t.d(a,{Au:()=>l,C2:()=>o,c1:()=>d,en:()=>c,fA:()=>p,fg:()=>u,tk:()=>h});var n=t("./packages/grafana-runtime/src/index.ts"),r=t("./public/app/core/actions/index.ts"),s=t("./public/app/core/copy/appNotification.ts"),i=t("./public/app/features/alerting/state/reducers.ts");function l(e){return async a=>{a((0,i.gz)());const t=await(0,n.getBackendSrv)().get("/api/alerts",e);a((0,i.Oc)(t))}}function c(e,a){return async t=>{await(0,n.getBackendSrv)().post(`/api/alerts/${e}/pause`,a);t(l({state:(n.locationService.getSearchObject().state||"all").toString()}))}}function o(e){return async a=>{try{await(0,n.getBackendSrv)().post("/api/alert-notifications",e),a((0,r.$l)((0,s.AT)("Notification created"))),n.locationService.push("/alerting/notifications")}catch(e){a((0,r.$l)((0,s.t_)(e.data.error)))}}}function u(e){return async a=>{try{await(0,n.getBackendSrv)().put(`/api/alert-notifications/${e.id}`,e),a((0,r.$l)((0,s.AT)("Notification updated")))}catch(e){a((0,r.$l)((0,s.t_)(e.data.error)))}}}function d(e){return async(a,t)=>{const r=t().notificationChannel.notificationChannel;await(0,n.getBackendSrv)().post("/api/alert-notifications/test",Object.assign({id:r.id},e))}}function p(){return async e=>{const a=(await(0,n.getBackendSrv)().get("/api/alert-notifiers")).sort(((e,a)=>e.name>a.name?1:-1));e((0,i.T2)(a))}}function h(e){return async a=>{await a(p());const t=await(0,n.getBackendSrv)().get(`/api/alert-notifications/${e}`);a((0,i.K)(t))}}}}]);
//# sourceMappingURL=AlertRuleList.a87fd0ce1ff28bec28a3.js.map