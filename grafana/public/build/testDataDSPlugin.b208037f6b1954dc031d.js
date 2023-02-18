"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[319],{"./public/app/plugins/datasource/testdata/module.tsx":(e,a,t)=>{t.r(a),t.d(a,{plugin:()=>we});var r,n=t("./packages/grafana-data/src/index.ts"),s=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),l=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");class i extends s.PureComponent{render(){return r||(r=(0,l.jsx)("div",{}))}}var o=t("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js"),d=t("./packages/grafana-e2e-selectors/src/index.ts"),u=t("./packages/grafana-ui/src/index.ts");const c=[{label:"Speed (ms)",id:"speed",placeholder:"value",min:10,step:10},{label:"Spread",id:"spread",placeholder:"value",min:.5,step:.1},{label:"Noise",id:"noise",placeholder:"value",min:0,step:.1},{label:"Bands",id:"bands",placeholder:"bands",min:0,step:1}],p=[{value:"signal",label:"Signal"},{value:"logs",label:"Logs"},{value:"fetch",label:"Fetch"}],m=e=>{var a,t,r;let{onChange:n,query:s}=e;const i=e=>{const{name:a,value:t}=e.target;n({target:{name:a,value:Number(t)}})};return(0,l.jsxs)(u.InlineFieldRow,{children:[(0,l.jsx)(u.InlineField,{label:"Type",labelWidth:14,children:(0,l.jsx)(u.Select,{menuShouldPortal:!0,width:32,onChange:e=>{let{value:a}=e;n({target:{name:"type",value:a}})},defaultValue:p[0],options:p})}),"signal"===(null==s||null===(a=s.stream)||void 0===a?void 0:a.type)&&c.map((e=>{var a;let{label:t,id:r,min:n,step:o,placeholder:d}=e;return(0,l.jsx)(u.InlineField,{label:t,labelWidth:14,children:(0,l.jsx)(u.Input,{width:32,type:"number",id:`stream.${r}-${s.refId}`,name:r,min:n,step:o,value:null===(a=s.stream)||void 0===a?void 0:a[r],placeholder:d,onChange:i})},r)})),"fetch"===(null==s||null===(t=s.stream)||void 0===t?void 0:t.type)&&(0,l.jsx)(u.InlineField,{label:"URL",labelWidth:14,grow:!0,children:(0,l.jsx)(u.Input,{type:"text",name:"url",id:`stream.url-${s.refId}`,value:null==s||null===(r=s.stream)||void 0===r?void 0:r.url,placeholder:"Fetch URL",onChange:n})})]})},h=[{label:"Series count",id:"seriesCount",placeholder:"1",min:1,step:1},{label:"Start value",id:"startValue",placeholder:"auto",step:1},{label:"Min",id:"min",placeholder:"none",step:.1},{label:"Max",id:"max",placeholder:"none",step:.1},{label:"Spread",id:"spread",placeholder:"1",min:.5,step:.1},{label:"Noise",id:"noise",placeholder:"0",min:0,step:.1},{label:"Drop (%)",id:"drop",placeholder:"0",min:0,max:100,step:1,tooltip:"Exclude some percent (chance) points"}],v=d.wl.components.DataSource.TestData.QueryTab,g=e=>{let{onChange:a,query:t}=e;return(0,l.jsx)(u.InlineFieldRow,{children:h.map((e=>{let{label:r,id:n,min:s,step:i,placeholder:o,tooltip:d}=e;const c=null==v?void 0:v[n];return(0,l.jsx)(u.InlineField,{label:r,labelWidth:14,"aria-label":c,tooltip:d,children:(0,l.jsx)(u.Input,{width:32,name:n,type:"number",id:`randomWalk-${n}-${t.refId}`,min:s,step:i,value:t[n]||o,placeholder:o,onChange:a})},n)}))})},b=e=>{var a;let{onChange:t,query:r}=e;const n=e=>{t(Object.assign({},r,{csvContent:e}))};return(0,l.jsx)(u.CodeEditor,{height:300,language:"csv",value:null!==(a=r.csvContent)&&void 0!==a?a:"",onBlur:n,onSave:n,showMiniMap:!1,showLineNumbers:!0})},f=e=>{let{onChange:a,query:t}=e;const r=["flight_info_by_state.csv","population_by_state.csv","gdp_per_capita.csv","js_libraries.csv","ohlc_dogecoin.csv","weight_height.csv","browser_marketshare.csv"].map((e=>({label:e,value:e})));return(0,l.jsx)(u.InlineFieldRow,{children:(0,l.jsx)(u.InlineField,{label:"File",labelWidth:14,children:(0,l.jsx)(u.Select,{menuShouldPortal:!0,width:32,onChange:e=>{let{value:r}=e;a(Object.assign({},t,{csvFileName:r}))},placeholder:"Select csv file",options:r,value:r.find((e=>e.value===t.csvFileName))})})})},y={timeStep:60,onCount:3,onValue:2,offCount:3,offValue:1},F=[{timeStep:60,valuesCSV:"0,0,2,2,1,1"}],x={scenarioId:"random_walk",refId:""};function w(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class j extends s.PureComponent{constructor(){super(...arguments),w(this,"onFieldChange",(e=>a=>{const{value:t}=a.target;this.props.onChange(this.props.index,Object.assign({},this.props.wave,{[e]:t}))})),w(this,"onNameChange",this.onFieldChange("name")),w(this,"onLabelsChange",this.onFieldChange("labels")),w(this,"onCSVChange",this.onFieldChange("valuesCSV")),w(this,"onTimeStepChange",(e=>{const a=e.target.valueAsNumber;this.props.onChange(this.props.index,Object.assign({},this.props.wave,{timeStep:a}))}))}render(){const{wave:e,last:a}=this.props;let t=this.props.onAdd;return a||(t=()=>{this.props.onChange(this.props.index,void 0)}),(0,l.jsxs)(u.InlineFieldRow,{children:[(0,l.jsx)(u.InlineField,{label:"Values",grow:!0,tooltip:"Comma separated values. Each value may be an int, float, or null and must not be empty. Whitespace and trailing commas are removed",children:(0,l.jsx)(u.Input,{value:e.valuesCSV,placeholder:"CSV values",onChange:this.onCSVChange,autoFocus:!0})}),(0,l.jsx)(u.InlineField,{label:"Step",tooltip:"The number of seconds between datapoints.",children:(0,l.jsx)(u.Input,{value:e.timeStep,type:"number",placeholder:"60",width:6,onChange:this.onTimeStepChange})}),(0,l.jsx)(u.InlineField,{label:"Labels",children:(0,l.jsx)(u.Input,{value:e.labels,placeholder:"labels",width:12,onChange:this.onLabelsChange})}),(0,l.jsx)(u.InlineField,{label:"Name",children:(0,l.jsx)(u.Input,{value:e.name,placeholder:"name",width:10,onChange:this.onNameChange})}),(0,l.jsx)(u.Button,{icon:a?"plus":"minus",variant:"secondary",onClick:t})]})}}class C extends s.PureComponent{constructor(){super(...arguments),w(this,"onChange",((e,a)=>{var t;let r=[...null!==(t=this.props.waves)&&void 0!==t?t:F];a?r[e]=Object.assign({},a):r.splice(e,1),this.props.onChange(r)})),w(this,"onAdd",(()=>{var e;const a=[...null!==(e=this.props.waves)&&void 0!==e?e:F];a.push(Object.assign({},F[0])),this.props.onChange(a)}))}render(){var e;let a=null!==(e=this.props.waves)&&void 0!==e?e:F;return a.length||(a=F),(0,l.jsx)(l.Fragment,{children:a.map(((e,t)=>(0,l.jsx)(j,{wave:e,index:t,onAdd:this.onAdd,onChange:this.onChange,last:t===a.length-1},`${t}/${e.valuesCSV}`)))})}}const I=[{label:"Server panic",value:"server_panic"},{label:"Frontend exception",value:"frontend_exception"},{label:"Frontend observable",value:"frontend_observable"}],S=e=>{let{query:a,onChange:t}=e;return(0,l.jsx)(u.InlineFieldRow,{children:(0,l.jsx)(u.InlineField,{labelWidth:14,label:"Error type",children:(0,l.jsx)(u.Select,{options:I,value:a.errorType,onChange:e=>{t(Object.assign({},a,{errorType:e.value}))}})})})},_=[{label:"random-2s-stream",value:"random-2s-stream",description:"Random stream with points every 2s"},{label:"random-flakey-stream",value:"random-flakey-stream",description:"Stream that returns data in random intervals"},{label:"random-labeled-stream",value:"random-labeled-stream",description:"Value with moving labels"},{label:"random-20Hz-stream",value:"random-20Hz-stream",description:"Random stream with points in 20Hz"}],T=e=>{let{onChange:a,query:t}=e;return(0,l.jsx)(u.InlineFieldRow,{children:(0,l.jsx)(u.InlineField,{label:"Channel",labelWidth:14,children:(0,l.jsx)(u.Select,{menuShouldPortal:!0,width:32,onChange:e=>{let{value:r}=e;a(Object.assign({},t,{channel:r}))},placeholder:"Select channel",options:_,value:_.find((e=>e.value===t.channel))})})})};function N(e){var a,t;let{query:r,onChange:n}=e;const s=(null===(a=r.nodes)||void 0===a?void 0:a.type)||"random";return(0,l.jsxs)(u.InlineFieldRow,{children:[(0,l.jsx)(u.InlineField,{label:"Data type",labelWidth:14,children:(0,l.jsx)(u.Select,{options:D.map((e=>({label:e,value:e}))),value:D.find((e=>e===s)),onChange:e=>n(Object.assign({},r.nodes,{type:e.value})),width:32})}),"random"===s&&(0,l.jsx)(u.InlineField,{label:"Count",labelWidth:14,children:(0,l.jsx)(u.Input,{type:"number",name:"count",value:null===(t=r.nodes)||void 0===t?void 0:t.count,width:32,onChange:e=>n(Object.assign({},r.nodes,{count:e.currentTarget.value?parseInt(e.currentTarget.value,10):0})),placeholder:"10"})})]})}const D=["random","response"],q=[{label:"Step",id:"timeStep",placeholder:"60",tooltip:"The number of seconds between datapoints."},{label:"On Count",id:"onCount",placeholder:"3",tooltip:"The number of values within a cycle, at the start of the cycle, that should have the onValue."},{label:"Off Count",id:"offCount",placeholder:"6",tooltip:"The number of offValues within the cycle."},{label:"On Value",id:"onValue",placeholder:"1",tooltip:'The value for "on values", may be an int, float, or null.'},{label:"Off Value",id:"offValue",placeholder:"1",tooltip:'The value for "off values", may be a int, float, or null.'}],k=e=>{let{onChange:a,query:t}=e;const r=e=>{const{name:t,value:r}=e.target;a({target:{name:t,value:Number(r)}})};return(0,l.jsx)(u.InlineFieldRow,{children:q.map((e=>{var a;let{label:n,id:s,placeholder:i,tooltip:o}=e;return(0,l.jsx)(u.InlineField,{label:n,labelWidth:14,tooltip:o,children:(0,l.jsx)(u.Input,{width:32,type:"number",name:s,id:`pulseWave.${s}-${t.refId}`,value:null===(a=t.pulseWave)||void 0===a?void 0:a[s],placeholder:i,onChange:r})},s)}))})};var A=t("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),O=t("./packages/grafana-runtime/src/index.ts");const M=e=>{var a;let{onChange:t,query:r}=e;const[i,o]=(0,s.useState)(),[d,c]=(0,s.useState)(),p=e=>{try{const s=JSON.parse(e);if((0,A.isArray)(s))return o(void 0),c(void 0),void t(Object.assign({},r,{rawFrameContent:e}));let l;if((0,A.isArray)(s.series)&&s.state)l=s.series.map((e=>(0,n.toDataFrameDTO)((0,n.toDataFrame)(e))));else{var a;const e=(0,O.toDataQueryResponse)({data:s});null!==(a=e.data)&&void 0!==a&&a.length&&!e.error&&(l=e.data.map((e=>(0,n.dataFrameToJSON)(e))))}if(l)return console.log("Original",s),console.log("Save",l),o(void 0),c("Converted to direct frame result"),void t(Object.assign({},r,{rawFrameContent:JSON.stringify(l,null,2)}));o("Unable to read dataframes in text")}catch(e){console.log("Error parsing json",e),o("Enter JSON array of data frames (or raw query results body)"),c(void 0)}};return(0,l.jsxs)(l.Fragment,{children:[i&&(0,l.jsx)(u.Alert,{title:i,severity:"error"}),d&&(0,l.jsx)(u.Alert,{title:d,severity:"warning"}),(0,l.jsx)(u.CodeEditor,{height:300,language:"json",value:null!==(a=r.rawFrameContent)&&void 0!==a?a:"[]",onBlur:p,onSave:p,showMiniMap:!0,showLineNumbers:!0})]})};function $(e){let{query:a,onChange:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(u.InlineFieldRow,{children:[(0,l.jsx)(u.InlineField,{labelWidth:14,label:"Mode",children:(0,l.jsx)(u.Select,{menuShouldPortal:!0,options:V,onChange:e=>{t(Object.assign({},a,{mode:e.value}))},width:32,value:V.find((e=>e.value===a.mode))})}),(0,l.jsx)(u.InlineField,{label:"Period",children:(0,l.jsx)(u.Input,{value:a.period,placeholder:"30m",onChange:e=>{t(Object.assign({},a,{period:e.currentTarget.value}))}})})]}),(0,l.jsxs)(u.InlineFieldRow,{children:[(0,l.jsx)(u.InlineField,{labelWidth:14,label:"Fields",children:(0,l.jsx)(u.MultiSelect,{menuShouldPortal:!0,options:G,onChange:e=>{t(Object.assign({},a,{fields:e.map((e=>e.value))}))},width:32,placeholder:"all",value:a.fields})}),(0,l.jsx)(u.InlineField,{label:"States",grow:!0,children:(0,l.jsx)(u.MultiSelect,{menuShouldPortal:!0,options:E,onChange:e=>{t(Object.assign({},a,{states:e.map((e=>e.value))}))},placeholder:"all",value:a.states})})]})]})}const V=["values-as-rows","values-as-fields","values-as-labeled-fields","timeseries","timeseries-wide"].map((e=>({label:e,value:e}))),G=["foo","bar","baz"].map((e=>({label:e,value:e}))),E=["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","MD","MA","MI","MN","MS","MO","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"].map((e=>({label:e,value:e})));var W=t("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Observable.js"),L=t("./public/app/features/dashboard/dashgrid/liveTimer.ts"),R=t("./public/app/features/live/data/StreamingDataFrame.ts");let P=0;function z(){return P=(P+Math.floor(5*Math.random()))%Q.length,Q[P]}const Q=["At","vero","eos","et","accusamus","et","iusto","odio","dignissimos","ducimus","qui","blanditiis","praesentium","voluptatum","deleniti","atque","corrupti","quos","dolores","et","quas","molestias","excepturi","sint","occaecati","cupiditate","non","provident","similique","sunt","in","culpa","qui","officia","deserunt","mollitia","animi","id","est","laborum","et","dolorum","fuga","Et","harum","quidem","rerum","facilis","est","et","expedita","distinctio","Nam","libero","tempore","cum","soluta","nobis","est","eligendi","optio","cumque","nihil","impedit","quo","minus","id","quod","maxime","placeat","facere","possimus","omnis","voluptas","assumenda","est","omnis","dolor","repellendus","Temporibus","autem","quibusdam","et","aut","officiis","debitis","aut","rerum","necessitatibus","saepe","eveniet","ut","et","voluptates","repudiandae","sint","et","molestiae","non","recusandae","Itaque","earum","rerum","hic","tenetur","a","sapiente","delectus","ut","aut","reiciendis","voluptatibus","maiores","alias","consequatur","aut","perferendis","doloribus","asperiores","repellat"],H={type:"signal",speed:250,spread:3.5,noise:2.2,bands:1};function U(e,a){const t=(0,A.defaults)(e.stream,H);if("signal"===t.type)return function(e,a,t){return new W.y((r=>{var s;const l=`signal-${t.panelId}-${e.refId}`,i=t.maxDataPoints||1e3,o={refId:e.refId,fields:[{name:"time",type:n.FieldType.time},{name:null!==(s=e.alias)&&void 0!==s?s:"value",type:n.FieldType.number}]},{spread:d,speed:u,bands:c=0,noise:p}=a;for(let e=0;e<c;e++){const a=c>1?` ${e+1}`:"";o.fields.push({name:"Min"+a,type:n.FieldType.number}),o.fields.push({name:"Max"+a,type:n.FieldType.number})}const m=R.Av.fromDataFrameJSON({schema:o},{maxLength:i});let h=100*Math.random(),v=null,g=-1;const b=e=>{h+=(Math.random()-.5)*d;const a={values:[[e],[h]]};let t=h,r=h;for(let e=0;e<c;e++)t-=Math.random()*p,r+=Math.random()*p,a.values.push([t]),a.values.push([r]);const n={data:a};return m.push(n)};{let e=Date.now()-i*u;for(let a=0;a<i;a++)b(e),e+=u}const f=()=>{b(Date.now());(L.A.lastUpdate-g>1e3||L.A.ok)&&(r.next({data:[m],key:l,state:n.LoadingState.Streaming}),g=L.A.lastUpdate),v=setTimeout(f,u)};return setTimeout(f,5),()=>{console.log("unsubscribing to stream "+l),clearTimeout(v)}}))}(e,t,a);if("logs"===t.type)return function(e,a,t){return new W.y((r=>{const s=`logs-${t.panelId}-${e.refId}`,l=t.maxDataPoints||1e3,i=new n.CircularDataFrame({append:"tail",capacity:l});i.refId=e.refId,i.name=e.alias||"Logs "+e.refId,i.addField({name:"line",type:n.FieldType.string}),i.addField({name:"time",type:n.FieldType.time}),i.meta={preferredVisualisationType:"logs"};const{speed:o}=a;let d=null;const u=()=>{i.fields[0].values.add(Date.now()),i.fields[1].values.add(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,a=z();for(;a.length<e;)a+=" "+z();return a}()),r.next({data:[i],key:s}),d=setTimeout(u,o)};return setTimeout(u,5),()=>{console.log("unsubscribing to stream "+s),clearTimeout(d)}}))}(e,t,a);if("fetch"===t.type)return function(e,a,t){return new W.y((r=>{const s=`fetch-${t.panelId}-${e.refId}`,l=t.maxDataPoints||1e3;let i,o=new n.CircularDataFrame({append:"tail",capacity:l});o.refId=e.refId,o.name=e.alias||"Fetch "+e.refId;const d=new n.CSVReader({callback:{onHeader:a=>{o.fields.length&&(o=new n.CircularDataFrame({append:"tail",capacity:l}),o.refId=e.refId,o.name="Fetch "+e.refId);for(const e of a)o.addField(e)},onRow:e=>{o.add(e)}}}),u=e=>{if(e.value){const a=(new TextDecoder).decode(e.value);d.readCSV(a)}return r.next({data:[o],key:s,state:e.done?n.LoadingState.Done:n.LoadingState.Streaming}),e.done?(console.log("Finished stream"),void r.complete()):i.read().then(u)};if(!a.url)throw new Error("query.url is not defined");return fetch(new Request(a.url)).then((e=>{e.body&&(i=e.body.getReader(),i.read().then(u))})),()=>{console.log("unsubscribing to stream "+s)}}))}(e,t,a);throw new Error(`Unknown Stream Type: ${t.type}`)}var B,J,K,Y;const Z=["random_walk","predictable_pulse"],X=[{value:"datasources",label:"Data Sources"},{value:"search",label:"Search"},{value:"annotations",label:"Annotations"}],ee=d.wl.components.DataSource.TestData.QueryTab;var ae;class te extends s.PureComponent{constructor(e){super(e)}render(){return ae||(ae=(0,l.jsxs)("div",{children:["See github for more information about setting up a reproducible test environment.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)(u.LinkButton,{variant:"secondary",href:"https://github.com/grafana/grafana/tree/main/devenv",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),(0,l.jsx)("br",{})]}))}}var re=t("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js"),ne=t("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js"),se=t("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js"),le=t("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js"),ie=t("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/delay.js"),oe=t("./public/app/features/variables/utils.ts");function de(e,a){const t=["A","B","C"],r=[];if(a>5)return[];for(const n of t){const t=`${e}${n}`;r.push({name:t,children:de(t,a+1)})}return r}function ue(e,a,t){if(t>=a.length)return e;if("*"===a[t])return e;const r=a[t];let n=[],s=[r];r.startsWith("{")&&(s=r.replace(/\{|\}/g,"").split(","));for(const r of e)for(const e of s)if(-1!==e.indexOf("*")){const s=e.replace("*","");new RegExp(`^${s}.*`,"gi").test(r.name)&&(n=n.concat(ue([r],a,t+1)))}else r.name===e&&(n=n.concat(ue(r.children,a,t+1)));return n}function ce(e){if(0===e.indexOf("value"))return[{name:e,children:[]}];return ue(de("",0),e.split("."),0)}const pe={fields:[{name:n.NodeGraphDataFrameFieldNames.id,type:n.FieldType.string,config:{links:[{title:"Traces/All",url:"",internal:{query:{queryType:"getTraceSummaries",query:'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}"))'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/OK",url:"",internal:{query:{queryType:"getTraceSummaries",query:'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { ok = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/Errors",url:"",internal:{query:{queryType:"getTraceSummaries",query:'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { error = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/Faults",url:"",internal:{query:{queryType:"getTraceSummaries",query:'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { fault = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}}]},values:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{name:n.NodeGraphDataFrameFieldNames.title,type:n.FieldType.string,config:{displayName:"Name"},values:["auth","products","customers","orders","products","orders","api","shipping","orders","execute-api","shipping","www","api","www","products"]},{name:n.NodeGraphDataFrameFieldNames.subTitle,type:n.FieldType.string,config:{displayName:"Type"},values:["Compute","SQL","SQL","SQL","remote","Function","Compute","Function","Function","remote","Function","Compute","client","client","Compute"]},{name:n.NodeGraphDataFrameFieldNames.mainStat,type:n.FieldType.number,config:{unit:"ms/t",displayName:"Average response time"},values:[3.5394042646735553,15.906441318223264,4.913011921591567,7.4163203042094095,1092,22.85961441405067,56.135855729084696,4.45946191601527,12.818300278280843,4.25,12.565442646791492,77.63447512700567,40.387096774193544,77.63447512700567,27.648950187374872]},{name:n.NodeGraphDataFrameFieldNames.secondaryStat,type:n.FieldType.number,config:{unit:"t/min",displayName:"Transactions per minute"},values:[50.56317154501667,682.4,512.8416666666667,125.64444444444445,.005585812037424941,137.59722222222223,300.0527777777778,30.582348853370394,125.77222222222223,.028706417080318163,30.582348853370394,165.675,.100021510002151,165.675,162.33055555555555]},{name:n.NodeGraphDataFrameFieldNames.arc+"success",type:n.FieldType.number,config:{color:{mode:n.FieldColorModeId.Fixed,fixedColor:"green"},displayName:"Sucesss"},values:[.9338865684765882,1,1,1,.5,1,.9901128505170387,.9069260134520997,1,0,.9069260134520997,.9624432037288534,0,.9624432037288534,.9824945669843769]},{name:n.NodeGraphDataFrameFieldNames.arc+"faults",type:n.FieldType.number,config:{color:{mode:n.FieldColorModeId.Fixed,fixedColor:"red"},displayName:"Faults"},values:[0,0,0,0,.5,0,.009479813736472288,0,0,0,0,.017168821152524185,0,.017168821152524185,.01750543301562313]},{name:n.NodeGraphDataFrameFieldNames.arc+"errors",type:n.FieldType.number,config:{color:{mode:n.FieldColorModeId.Fixed,fixedColor:"semi-dark-yellow"},displayName:"Errors"},values:[.06611343152341174,0,0,0,0,0,.0004073357464890436,.09307398654790038,0,1,.09307398654790038,.02038797511862247,1,.02038797511862247,0]},{name:n.NodeGraphDataFrameFieldNames.arc+"throttled",type:n.FieldType.number,config:{color:{mode:n.FieldColorModeId.Fixed,fixedColor:"purple"},displayName:"Throttled"},values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}],meta:{preferredVisualisationType:"nodeGraph"},name:"nodes"},me={fields:[{name:n.NodeGraphDataFrameFieldNames.id,type:n.FieldType.string,config:{links:[{title:"Traces/All",url:"",internal:{query:{queryType:"getTraceSummaries",query:'edge("${__data.fields.sourceName}", "${__data.fields.targetName}")'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/OK",url:"",internal:{query:{queryType:"getTraceSummaries",query:'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { ok = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/Errors",url:"",internal:{query:{queryType:"getTraceSummaries",query:'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { error = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/Faults",url:"",internal:{query:{queryType:"getTraceSummaries",query:'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { fault = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}}]},values:["0__2","5__8","6__0","6__5","6__9","6__2","6__14","6__4","8__3","10__7","11__0","11__6","12__6","13__11","14__1","14__2","14__10"]},{name:n.NodeGraphDataFrameFieldNames.source,type:n.FieldType.string,config:{},values:[0,5,6,6,6,6,6,6,8,10,11,11,12,13,14,14,14]},{name:"sourceName",type:n.FieldType.string,config:{},values:["auth","orders","api","api","api","api","api","api","orders","shipping","www","www","api","www","products","products","products"]},{name:n.NodeGraphDataFrameFieldNames.target,type:n.FieldType.string,config:{},values:[2,8,0,5,9,2,14,4,3,7,0,6,6,11,1,2,10]},{name:"targetName",type:n.FieldType.string,config:{},values:["customers","orders","auth","orders","execute-api","customers","products","products","orders","shipping","auth","api","api","www","products","customers","shipping"]},{name:n.NodeGraphDataFrameFieldNames.mainStat,type:n.FieldType.string,config:{displayName:"Response percentage"},values:["Success 100.00%","Success 100.00%","Success 100.00%","Success 100.00%","Errors 100.00%","Success 100.00%","Faults 1.75%","Faults 50.00%","Success 100.00%","Errors 9.31%","Errors 6.62%","Faults 1.13%","Errors 100.00%","Faults 1.72%","Success 100.00%","Success 100.00%","Faults 9.30%"]},{name:n.NodeGraphDataFrameFieldNames.secondaryStat,type:n.FieldType.number,config:{unit:"t/min",displayName:"Transactions per minute"},values:[50.56317154501667,125.77222222222223,.03333333333333333,137.59722222222223,.022222222222222223,299.96666666666664,162.33055555555555,.005555555555555556,125.64444444444445,30.582348853370394,50.51111111111111,299.9166666666667,.100021510002151,165.675,682.4,162.33055555555555,30.558333333333334]}],meta:{preferredVisualisationType:"nodeGraph"},name:"edges"};function he(e){const a=Math.random(),t=1-a;return{id:e.toString(),title:`service:${e}`,subTitle:"service",success:a,error:t,stat1:Math.random(),stat2:Math.random(),edges:[]}}class ve extends n.StandardVariableSupport{toDataQuery(e){return{refId:"TestDataDataSource-QueryVariable",stringInput:e.query,scenarioId:"variables-query",csvWave:void 0}}}class ge extends O.DataSourceWithBackend{constructor(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,O.getTemplateSrv)();var t,r,n;super(e),n=void 0,(r="scenariosCache")in(t=this)?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,this.templateSrv=a,this.templateSrv=a,this.variables=new ve}query(e){const a=[],t=[];for(const r of e.targets)if(!r.hide)switch(this.resolveTemplateVariables(r,e.scopedVars),r.scenarioId){case"live":t.push(ye(r,e));break;case"streaming_client":t.push(U(r,e));break;case"grafana_api":t.push(be(r,e));break;case"annotations":t.push(this.annotationDataTopicTest(r,e));break;case"variables-query":t.push(this.variablesQuery(r,e));break;case"node_graph":t.push(this.nodesQuery(r,e));break;case"raw_frame":t.push(this.rawFrameQuery(r,e));break;case"server_error_500":const n=this.serverErrorQuery(r,e);n?t.push(n):a.push(r);break;case"manual_entry":{let e="Time,Value\n";if(r.points)for(const a of r.points)e+=`${a[1]},${a[0]}\n`;r.scenarioId="csv_content",r.csvContent=e}default:a.push(r)}if(a.length){const r=Object.assign({},e,{targets:a});t.push(super.query(r))}return 0===t.length?(0,re.of)({data:[]}):(0,ne.T)(...t)}resolveTemplateVariables(e,a){e.labels&&(e.labels=this.templateSrv.replace(e.labels,a)),e.alias&&(e.alias=this.templateSrv.replace(e.alias,a)),e.scenarioId&&(e.scenarioId=this.templateSrv.replace(e.scenarioId,a)),e.stringInput&&(e.stringInput=this.templateSrv.replace(e.stringInput,a)),e.csvContent&&(e.csvContent=this.templateSrv.replace(e.csvContent,a)),e.rawFrameContent&&(e.rawFrameContent=this.templateSrv.replace(e.rawFrameContent,a))}annotationDataTopicTest(e,a){const t=this.buildFakeAnnotationEvents(a.range,50),r=new n.ArrayDataFrame(t);return r.meta={dataTopic:n.DataTopic.Annotations},(0,re.of)({key:e.refId,data:[r]}).pipe((0,ie.g)(100))}buildFakeAnnotationEvents(e,a){let t=e.from.valueOf();const r=[],n=(e.to.valueOf()-t)/a;for(let e=0;e<a;e++)r.push({time:t,text:'This is the text, <a href="https://grafana.com">Grafana.com</a>',tags:["text","server"]}),t+=n;return r}annotationQuery(e){return Promise.resolve(this.buildFakeAnnotationEvents(e.range,10))}getQueryDisplayText(e){var a;const t=null!==(a=e.scenarioId)&&void 0!==a?a:"Default scenario";return e.alias?t+" as "+e.alias:t}testDatasource(){return Promise.resolve({status:"success",message:"Data source is working"})}getScenarios(){return this.scenariosCache||(this.scenariosCache=this.getResource("scenarios")),this.scenariosCache}variablesQuery(e,a){var t;const r=null!==(t=e.stringInput)&&void 0!==t?t:"",s=ce(this.templateSrv.replace(r,(0,oe._6)({query:r,wildcardChar:"*",options:a.scopedVars}))).map((e=>({value:e.name,text:e.name}))),l=new n.ArrayDataFrame(s);return(0,re.of)({data:[l]}).pipe((0,ie.g)(100))}nodesQuery(e,a){var t,r;const s=(null===(t=e.nodes)||void 0===t?void 0:t.type)||"random";let l;switch(s){case"random":l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;const a=[],t={id:"0",title:"root",subTitle:"client",success:1,error:0,stat1:Math.random(),stat2:Math.random(),edges:[]};a.push(t);const r=[t],s=3;for(let t=1;t<e;t++){const e=he(t);a.push(e);const n=Math.floor(Math.random()*Math.floor(r.length-1)),l=r[n];l.edges.push(e.id),l.edges.length>=s&&r.splice(n,1),r.push(e)}const l=Math.floor(e/2);for(let e=0;e<=l;e++){const e=Math.floor(Math.random()*Math.floor(a.length-1));e!==Math.floor(Math.random()*Math.floor(a.length-1))&&"0"!==a[e].id&&"0"!==a[e].id&&a[e].edges.push(a[e].id)}const i={[n.NodeGraphDataFrameFieldNames.id]:{values:new n.ArrayVector,type:n.FieldType.string},[n.NodeGraphDataFrameFieldNames.title]:{values:new n.ArrayVector,type:n.FieldType.string},[n.NodeGraphDataFrameFieldNames.subTitle]:{values:new n.ArrayVector,type:n.FieldType.string},[n.NodeGraphDataFrameFieldNames.mainStat]:{values:new n.ArrayVector,type:n.FieldType.number,config:{displayName:"Transactions per second"}},[n.NodeGraphDataFrameFieldNames.secondaryStat]:{values:new n.ArrayVector,type:n.FieldType.number,config:{displayName:"Average duration"}},[n.NodeGraphDataFrameFieldNames.arc+"success"]:{values:new n.ArrayVector,type:n.FieldType.number,config:{color:{fixedColor:"green",mode:n.FieldColorModeId.Fixed},displayName:"Success"}},[n.NodeGraphDataFrameFieldNames.arc+"errors"]:{values:new n.ArrayVector,type:n.FieldType.number,config:{color:{fixedColor:"red",mode:n.FieldColorModeId.Fixed},displayName:"Errors"}}},o=new n.MutableDataFrame({name:"nodes",fields:Object.keys(i).map((e=>Object.assign({},i[e],{name:e}))),meta:{preferredVisualisationType:"nodeGraph"}}),d={[n.NodeGraphDataFrameFieldNames.id]:{values:new n.ArrayVector,type:n.FieldType.string},[n.NodeGraphDataFrameFieldNames.source]:{values:new n.ArrayVector,type:n.FieldType.string},[n.NodeGraphDataFrameFieldNames.target]:{values:new n.ArrayVector,type:n.FieldType.string}},u=new n.MutableDataFrame({name:"edges",fields:Object.keys(d).map((e=>Object.assign({},d[e],{name:e}))),meta:{preferredVisualisationType:"nodeGraph"}}),c=new Set;for(const e of a){i.id.values.add(e.id),i.title.values.add(e.title),i.subTitle.values.add(e.subTitle),i.mainStat.values.add(e.stat1),i.secondaryStat.values.add(e.stat2),i.arc__success.values.add(e.success),i.arc__errors.values.add(e.error);for(const a of e.edges){const t=`${e.id}--${a}`;c.has(t)||(c.add(t),d.id.values.add(`${e.id}--${a}`),d.source.values.add(e.id),d.target.values.add(a))}}return[o,u]}(null===(r=e.nodes)||void 0===r?void 0:r.count);break;case"response":l=[new n.MutableDataFrame(pe),new n.MutableDataFrame(me)];break;default:throw new Error(`Unknown node_graph sub type ${s}`)}return(0,re.of)({data:l}).pipe((0,ie.g)(100))}rawFrameQuery(e,a){try{var t;const a=JSON.parse(null!==(t=e.rawFrameContent)&&void 0!==t?t:"[]").map((a=>{const t=(0,n.toDataFrame)(a);return t.refId=e.refId,t}));return(0,re.of)({data:a,state:n.LoadingState.Done}).pipe((0,ie.g)(100))}catch(e){return(0,re.of)({data:[],error:e}).pipe((0,ie.g)(100))}}serverErrorQuery(e,a){var t;const{errorType:r}=e;if(console.log("we're here!",e),"server_panic"===r)return null;if(""===(null!==(t=e.stringInput)&&void 0!==t?t:"")){if("frontend_exception"===r)throw new Error("Scenario threw an exception in the frontend because the input was empty.");return(0,se._)((()=>new Error("Scenario returned an error because the input was empty.")))}return null}}function be(e,a){const t=`/api/${e.stringInput}`;return(0,le.D)((0,O.getBackendSrv)().get(t).then((e=>{const a=new n.ArrayDataFrame(e);return{state:n.LoadingState.Done,data:[a]}})))}let fe=1e3;function ye(e,a){if(!e.channel)throw new Error("Missing channel config");return(0,O.getGrafanaLiveSrv)().getDataStream({addr:{scope:n.LiveChannelScope.Plugin,namespace:"testdata",path:e.channel},key:"testStream."+fe++})}function Fe(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class xe{constructor(){Fe(this,"annotation",void 0)}}Fe(xe,"template","<h2>Annotation scenario</h2>");const we=new n.DataSourcePlugin(ge).setConfigEditor(i).setQueryEditor((e=>{var a,t;let{query:r,datasource:n,onChange:i,onRunQuery:d}=e;r=Object.assign({},x,r);const{loading:c,value:p}=(0,o.Z)((async()=>{if("manual_entry"===r.scenarioId&&r.points){let e="Time,Value\n";for(const a of r.points)e+=`${a[1]},${a[0]}\n`;i({refId:r.refId,datasource:r.datasource,scenarioId:"csv_content",csvContent:e})}return n.getScenarios()}),[]),h=e=>{i(e),d()},v=(0,s.useMemo)((()=>null==p?void 0:p.find((e=>e.id===r.scenarioId))),[p,r]),w=null==v?void 0:v.id,j=null==v?void 0:v.description,I=e=>{const{name:a,value:t,type:n}=e.target;let s=t;"number"===n&&(s=Number(t)),"levelColumn"===a&&(s=e.target.checked),h(Object.assign({},r,{[a]:s}))},_=e=>a=>{const{name:t,value:n,type:s}=a.target;let l=n;"number"===s&&(l=Number(n)),h(Object.assign({},r,{[e]:Object.assign({},r[e],{[t]:l})}))},D=_("stream"),q=_("pulseWave"),A=(0,s.useMemo)((()=>(p||[]).map((e=>({label:e.name,value:e.id}))).sort(((e,a)=>e.label.localeCompare(a.label)))),[p]),O=(0,s.useMemo)((()=>{var e;return Z.includes(null!==(e=r.scenarioId)&&void 0!==e?e:"")}),[r]);return c?null:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(u.InlineFieldRow,{"aria-label":ee.scenarioSelectContainer,children:[(0,l.jsx)(u.InlineField,{labelWidth:14,label:"Scenario",children:(0,l.jsx)(u.Select,{inputId:`test-data-scenario-select-${r.refId}`,menuShouldPortal:!0,options:A,value:A.find((e=>e.value===r.scenarioId)),onChange:e=>{const a=null==p?void 0:p.find((a=>a.id===e.value));if(!a)return;const t={scenarioId:e.value,refId:r.refId,alias:r.alias,datasource:r.datasource};switch(a.stringInput&&(t.stringInput=a.stringInput),a.id){case"grafana_api":t.stringInput="datasources";break;case"streaming_client":t.stream=H;break;case"live":t.channel="random-2s-stream";break;case"predictable_pulse":t.pulseWave=y;break;case"predictable_csv_wave":t.csvWave=F;break;case"usa":t.usa={mode:V[0].value}}h(t)},width:32})}),(null==v?void 0:v.stringInput)&&(0,l.jsx)(u.InlineField,{label:"String Input",children:(0,l.jsx)(u.Input,{width:32,id:`stringInput-${r.refId}`,name:"stringInput",placeholder:r.stringInput,value:r.stringInput,onChange:I})}),(0,l.jsx)(u.InlineField,{label:"Alias",labelWidth:14,children:(0,l.jsx)(u.Input,{width:32,id:`alias-${r.refId}`,type:"text",placeholder:"optional",pattern:'[^<>&\\\\"]+',name:"alias",value:r.alias,onChange:I})}),O&&(0,l.jsx)(u.InlineField,{label:"Labels",labelWidth:14,tooltip:(0,l.jsxs)(l.Fragment,{children:["Set labels using a key=value syntax:",B||(B=(0,l.jsx)("br",{})),'{ key = "value", key2 = "value" }',J||(J=(0,l.jsx)("br",{})),'key="value", key2="value"',K||(K=(0,l.jsx)("br",{})),"key=value, key2=value",Y||(Y=(0,l.jsx)("br",{}))]}),children:(0,l.jsx)(u.Input,{width:32,id:`labels-${r.refId}`,name:"labels",onChange:I,value:null===(a=r)||void 0===a?void 0:a.labels,placeholder:"key=value, key2=value2"})})]}),"random_walk"===w&&(0,l.jsx)(g,{onChange:I,query:r}),"streaming_client"===w&&(0,l.jsx)(m,{onChange:D,query:r}),"live"===w&&(0,l.jsx)(T,{onChange:h,query:r}),"raw_frame"===w&&(0,l.jsx)(M,{onChange:h,query:r}),"csv_file"===w&&(0,l.jsx)(f,{onChange:h,query:r}),"csv_content"===w&&(0,l.jsx)(b,{onChange:h,query:r}),"logs"===w&&(0,l.jsxs)(u.InlineFieldRow,{children:[(0,l.jsx)(u.InlineField,{label:"Lines",labelWidth:14,children:(0,l.jsx)(u.Input,{type:"number",name:"lines",value:r.lines,width:32,onChange:I,placeholder:"10"})}),(0,l.jsx)(u.InlineField,{label:"Level",labelWidth:14,children:(0,l.jsx)(u.InlineSwitch,{onChange:I,name:"levelColumn",value:!!r.levelColumn})})]}),"usa"===w&&(0,l.jsx)($,{onChange:e=>{h(Object.assign({},r,{usa:e}))},query:null!==(t=r.usa)&&void 0!==t?t:{}}),"grafana_api"===w&&(0,l.jsx)(u.InlineField,{labelWidth:14,label:"Endpoint",children:(0,l.jsx)(u.Select,{menuShouldPortal:!0,options:X,onChange:e=>{let{value:a}=e;h(Object.assign({},r,{stringInput:a}))},width:32,value:X.find((e=>e.value===r.stringInput))})}),"arrow"===w&&(0,l.jsx)(u.InlineField,{grow:!0,children:(0,l.jsx)(u.TextArea,{name:"stringInput",value:r.stringInput,rows:10,placeholder:"Copy base64 text data from query result",onChange:I})}),"predictable_pulse"===w&&(0,l.jsx)(k,{onChange:q,query:r}),"predictable_csv_wave"===w&&(0,l.jsx)(C,{onChange:e=>{h(Object.assign({},r,{csvWave:e}))},waves:r.csvWave}),"node_graph"===w&&(0,l.jsx)(N,{onChange:e=>i(Object.assign({},r,{nodes:e})),query:r}),"server_error_500"===w&&(0,l.jsx)(S,{onChange:h,query:r}),j&&(0,l.jsx)("p",{children:j})]})})).setAnnotationQueryCtrl(xe).addConfigPage({title:"Setup",icon:"list-ul",body:te,id:"setup"})}}]);
//# sourceMappingURL=testDataDSPlugin.b208037f6b1954dc031d.js.map