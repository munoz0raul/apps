"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7680],{"./public/app/features/alerting/unified/Admin.tsx":(e,a,r)=>{r.r(a),r.d(a,{default:()=>U});var n,t=r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),s=r("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx"),l=r("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=r("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),o=r("./packages/grafana-ui/src/index.ts"),c=r("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts"),d=r("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts"),u=r("./public/app/features/alerting/unified/state/actions.ts"),p=r("./public/app/features/alerting/unified/utils/datasource.ts"),m=r("./public/app/features/alerting/unified/utils/redux.ts"),g=r("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx"),f=r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function h(){var e;const a=(0,i.useDispatch)(),[r,s]=(0,c.k)(),[l,h]=(0,t.useState)(!1),{loading:v}=(0,d._)((e=>e.deleteAMConfig)),{loading:b}=(0,d._)((e=>e.saveAMConfig)),j=!!r&&(0,p.RY)(r),y=(0,o.useStyles2)(x),A=(0,d._)((e=>e.amConfigs)),{result:C,loading:S,error:N}=r&&A[r]||m.oq;(0,t.useEffect)((()=>{r&&a((0,u.Yh)(r))}),[r,a]);const k=()=>{r&&a((0,u.Nc)(r)),h(!1)},_=(0,t.useMemo)((()=>({configJSON:C?JSON.stringify(C,null,2):""})),[C]),$=v||S||b;return(0,f.jsxs)("div",{className:y.container,children:[(0,f.jsx)(g.P,{current:r,onChange:s}),N&&!$&&(0,f.jsx)(o.Alert,{severity:"error",title:"Error loading Alertmanager configuration",children:N.message||"Unknown error."}),v&&r!==p.GC&&(n||(n=(0,f.jsx)(o.Alert,{severity:"info",title:"Resetting Alertmanager configuration",children:"It might take a while..."}))),r&&C&&(0,f.jsx)(o.Form,{defaultValues:_,onSubmit:e=>{r&&C&&a((0,u.mM)({newConfig:JSON.parse(e.configJSON),oldConfig:C,alertManagerSourceName:r,successMessage:"Alertmanager configuration updated.",refetch:!0}))},children:a=>{var n;let{register:t,errors:s}=a;return(0,f.jsxs)(f.Fragment,{children:[!j&&(0,f.jsx)(o.Field,{disabled:$,label:"Configuration",invalid:!!s.configJSON,error:null===(n=s.configJSON)||void 0===n?void 0:n.message,children:(0,f.jsx)(o.TextArea,Object.assign({},t("configJSON",{required:{value:!0,message:"Required."},validate:e=>{try{return JSON.parse(e),!0}catch(e){return e.message}}}),{id:"configuration",rows:25}))}),j&&(0,f.jsx)(o.Field,{label:"Configuration",children:(0,f.jsx)("pre",{"data-testid":"readonly-config",children:_.configJSON})}),!j&&(0,f.jsxs)(o.HorizontalGroup,{children:[e||(e=(0,f.jsx)(o.Button,{type:"submit",variant:"primary",disabled:$,children:"Save"})),(0,f.jsx)(o.Button,{type:"button",disabled:$,variant:"destructive",onClick:()=>h(!0),children:"Reset configuration"})]}),!!l&&(0,f.jsx)(o.ConfirmModal,{isOpen:!0,title:"Reset Alertmanager configuration",body:`Are you sure you want to reset configuration ${r===p.GC?"for the Grafana Alertmanager":`for "${r}"`}? Contact points and notification policies will be reset to their defaults.`,confirmText:"Yes, reset configuration",onConfirm:k,onDismiss:()=>h(!1)})]})}},_.configJSON)]})}const x=e=>({container:l.css`
    margin-bottom: ${e.spacing(4)};
  `});var v=r("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");const b=/\/api\/v[1|2]\/alerts/i;var j,y;const A=e=>{let{alertmanagers:a,onChangeAlertmanagerConfig:r,onClose:n}=e;const s=(0,o.useStyles2)(C),l=(0,t.useMemo)((()=>({alertmanagers:a})),[a]),i=(0,f.jsxs)("div",{className:s.modalTitle,children:[(0,f.jsx)(o.Icon,{name:"bell",className:s.modalIcon}),j||(j=(0,f.jsx)("h3",{children:"Add Alertmanager"}))]}),c=e=>{r(e.alertmanagers.map((e=>e.url.replace(/\/$/,"").replace(/\/api\/v[1|2]\/alerts/i,"")))),n()};return(0,f.jsxs)(o.Modal,{title:i,isOpen:!0,onDismiss:n,className:s.modal,children:[(0,f.jsx)("div",{className:s.description,children:"We use a service discovery method to find existing Alertmanagers for a given URL."}),(0,f.jsx)(o.Form,{onSubmit:c,defaultValues:l,children:e=>{let{register:a,control:r,errors:n}=e;return(0,f.jsxs)("div",{children:[(0,f.jsx)(o.FieldArray,{control:r,name:"alertmanagers",children:e=>{let{fields:r,append:t,remove:l}=e;return(0,f.jsxs)("div",{className:s.fieldArray,children:[(0,f.jsx)("div",{className:s.bold,children:"Source url"}),(0,f.jsx)("div",{className:s.muted,children:"Authentication can be done via URL (e.g. user:password@myalertmanager.com) and only the Alertmanager v2 API is supported. The suffix is added internally, there is no need to specify it."}),r.map(((e,r)=>{var t;return(0,f.jsx)(o.Field,{invalid:!(null==n||null===(t=n.alertmanagers)||void 0===t||!t[r]),error:"Field is required",children:(0,f.jsx)(o.Input,Object.assign({className:s.input,defaultValue:e.url},a(`alertmanagers.${r}.url`,{required:!0}),{placeholder:"http://localhost:9093",addonAfter:(0,f.jsx)(o.Button,{"aria-label":"Remove alertmanager",type:"button",onClick:()=>l(r),variant:"destructive",className:s.destroyInputRow,children:y||(y=(0,f.jsx)(o.Icon,{name:"trash-alt"}))})}))},`${e.id}-${r}`)})),(0,f.jsx)(o.Button,{type:"button",variant:"secondary",onClick:()=>t({url:""}),children:"Add URL"})]})}}),(0,f.jsx)("div",{children:(0,f.jsx)(o.Button,{onSubmit:()=>c,children:"Add Alertmanagers"})})]})}})]})};const C=e=>{const a=l.css`
    color: ${e.colors.text.secondary};
  `;return{description:(0,l.cx)(l.css`
        margin-bottom: ${e.spacing(2)};
      `,a),muted:a,bold:l.css`
      font-weight: ${e.typography.fontWeightBold};
    `,modal:l.css``,modalIcon:(0,l.cx)(a,l.css`
        margin-right: ${e.spacing(1)};
      `),modalTitle:l.css`
      display: flex;
    `,input:l.css`
      margin-bottom: ${e.spacing(1)};
      margin-right: ${e.spacing(1)};
    `,inputRow:l.css`
      display: flex;
    `,destroyInputRow:l.css`
      padding: ${e.spacing(1)};
    `,fieldArray:l.css`
      margin-bottom: ${e.spacing(4)};
    `}};var S,N,k,_,$,w;const I=[{value:"internal",label:"Only Internal"},{value:"external",label:"Only External"},{value:"all",label:"Both internal and external"}],O=()=>{var e;const a=(0,o.useStyles2)(M),r=(0,i.useDispatch)(),[n,s]=(0,t.useState)({open:!1,payload:[{url:""}]}),[c,d]=(0,t.useState)({open:!1,index:0}),p=function(){const e=(0,i.useSelector)((e=>{var a;return null===(a=e.unifiedAlerting.externalAlertmanagers.discoveredAlertmanagers.result)||void 0===a?void 0:a.data})),a=(0,i.useSelector)((e=>{var a;return null===(a=e.unifiedAlerting.externalAlertmanagers.alertmanagerConfig.result)||void 0===a?void 0:a.alertmanagers}));if(!e||!a)return[];const r=[],n=null==e?void 0:e.droppedAlertManagers.map((e=>({url:e.url.replace(b,""),status:"dropped",actualUrl:e.url})));for(const n of a)if(0===e.activeAlertManagers.length)r.push({url:n,status:"pending",actualUrl:""});else{let a=!1;for(const t of e.activeAlertManagers)t.url===`${n}/api/v2/alerts`&&(a=!0,r.push({url:t.url.replace(b,""),status:"active",actualUrl:t.url}));a||r.push({url:n,status:"pending",actualUrl:""})}return[...r,...n]}(),m=(0,i.useSelector)((e=>{var a;return null===(a=e.unifiedAlerting.externalAlertmanagers.alertmanagerConfig.result)||void 0===a?void 0:a.alertmanagersChoice})),g=(0,o.useTheme2)();(0,t.useEffect)((()=>{r((0,u.zy)()),r((0,u.wE)());const e=setInterval((()=>r((0,u.zy)())),5e3);return()=>{clearInterval(e)}}),[r]);const h=(0,t.useCallback)((e=>{const a=(null!=p?p:[]).filter(((a,r)=>r!==e)).map((e=>e.url));r((0,u.sx)({alertmanagers:a,alertmanagersChoice:null!=m?m:"all"})),d({open:!1,index:0})}),[p,r,m]),x=(0,t.useCallback)((()=>{const e=p?[...p]:[{url:""}];s((a=>Object.assign({},a,{open:!0,payload:e})))}),[s,p]),j=(0,t.useCallback)((()=>{s((e=>{const a=p?[...p,{url:""}]:[{url:""}];return Object.assign({},e,{open:!0,payload:a})}))}),[p]),y=(0,t.useCallback)((()=>{s((e=>Object.assign({},e,{open:!1})))}),[s]),C=e=>{switch(e){case"active":return g.colors.success.main;case"pending":return g.colors.warning.main;default:return g.colors.error.main}},O=0===(null==p?void 0:p.length);return(0,f.jsxs)("div",{children:[S||(S=(0,f.jsx)("h4",{children:"External Alertmanagers"})),(0,f.jsx)("div",{className:a.muted,children:"You can have your Grafana managed alerts be delivered to one or many external Alertmanager(s) in addition to the internal Alertmanager by specifying their URLs below."}),(0,f.jsx)("div",{className:a.actions,children:!O&&(0,f.jsx)(o.Button,{type:"button",onClick:j,children:"Add Alertmanager"})}),O?(0,f.jsx)(v.Z,{title:"You have not added any external alertmanagers",onClick:j,buttonTitle:"Add Alertmanager",buttonIcon:"bell-slash"}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("table",{className:(0,l.cx)("filter-table form-inline filter-table--hover",a.table),children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[N||(N=(0,f.jsx)("th",{children:"Url"})),k||(k=(0,f.jsx)("th",{children:"Status"})),(0,f.jsx)("th",{style:{width:"2%"},children:"Action"})]})}),(0,f.jsx)("tbody",{children:null==p?void 0:p.map(((r,n)=>(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{children:[(0,f.jsx)("span",{className:a.url,children:r.url}),r.actualUrl?(0,f.jsx)(o.Tooltip,{content:`Discovered ${r.actualUrl} from ${r.url}`,theme:"info",children:_||(_=(0,f.jsx)(o.Icon,{name:"info-circle"}))}):null]}),(0,f.jsx)("td",{children:(0,f.jsx)(o.Icon,{name:"heart",style:{color:C(r.status)},title:r.status})}),(0,f.jsx)("td",{children:(0,f.jsxs)(o.HorizontalGroup,{children:[e||(e=(0,f.jsx)(o.Button,{variant:"secondary",type:"button",onClick:x,"aria-label":"Edit alertmanager",children:$||($=(0,f.jsx)(o.Icon,{name:"pen"}))})),(0,f.jsx)(o.Button,{variant:"destructive","aria-label":"Remove alertmanager",type:"button",onClick:()=>d({open:!0,index:n}),children:w||(w=(0,f.jsx)(o.Icon,{name:"trash-alt"}))})]})})]},n)))})]}),(0,f.jsx)("div",{children:(0,f.jsx)(o.Field,{label:"Send alerts to",description:"Sets which Alertmanager will handle your alerts. Internal (Grafana built in Alertmanager), External (All Alertmanagers configured above), or both.",children:(0,f.jsx)(o.RadioButtonGroup,{options:I,value:m,onChange:e=>(e=>{r((0,u.sx)({alertmanagers:p.map((e=>e.url)),alertmanagersChoice:e}))})(e)})})})]}),(0,f.jsx)(o.ConfirmModal,{isOpen:c.open,title:"Remove Alertmanager",body:"Are you sure you want to remove this Alertmanager",confirmText:"Remove",onConfirm:()=>h(c.index),onDismiss:()=>d({open:!1,index:0})}),n.open&&(0,f.jsx)(A,{onClose:y,alertmanagers:n.payload,onChangeAlertmanagerConfig:e=>{r((0,u.sx)({alertmanagers:e,alertmanagersChoice:null!=m?m:"all"}))}})]})},M=e=>({url:l.css`
    margin-right: ${e.spacing(1)};
  `,muted:l.css`
    color: ${e.colors.text.secondary};
  `,actions:l.css`
    margin-top: ${e.spacing(2)};
    display: flex;
    justify-content: flex-end;
  `,table:l.css`
    margin-bottom: ${e.spacing(2)};
  `});var R;function U(){return R||(R=(0,f.jsxs)(s.J,{pageId:"alerting-admin",children:[(0,f.jsx)(h,{"test-id":"admin-alertmanagerconfig"}),(0,f.jsx)(O,{"test-id":"admin-externalalertmanagers"})]}))}},"./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":(e,a,r)=>{r.d(a,{J:()=>i});r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var n=r("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),t=r("./public/app/core/components/Page/Page.tsx"),s=r("./public/app/core/selectors/navModel.ts"),l=r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const i=e=>{let{children:a,pageId:r,isLoading:i}=e;const o=(0,s.h)((0,n.useSelector)((e=>e.navIndex)),r);return(0,l.jsx)(t.Z,{navModel:o,children:(0,l.jsx)(t.Z.Contents,{isLoading:i,children:a})})}},"./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":(e,a,r)=>{r.d(a,{k:()=>c});var n=r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),t=r("./public/app/core/hooks/useQueryParams.ts"),s=r("./public/app/core/store.ts"),l=r("./public/app/features/alerting/unified/utils/constants.ts"),i=r("./public/app/features/alerting/unified/utils/datasource.ts");function o(e){return e===i.GC||!!(0,i.aM)().find((a=>a.name===e))}function c(){const[e,a]=(0,t.K)(),r=(0,n.useCallback)((e=>{o(e)&&(e===i.GC?(s.Z.delete(l.de),a({[l.c4]:null})):(s.Z.set(l.de,e),a({[l.c4]:e})))}),[a]),c=e[l.c4];if(c&&"string"==typeof c)return o(c)?[c,r]:[void 0,r];const d=s.Z.get(l.de);return d&&"string"==typeof d&&o(d)?(r(d),[d,r]):[i.GC,r]}}}]);
//# sourceMappingURL=AlertingAdmin.b208037f6b1954dc031d.js.map