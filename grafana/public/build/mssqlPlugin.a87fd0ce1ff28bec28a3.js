"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5032],{"./public/app/angular/AngularLocationWrapper.ts":(t,e,a)=>{a.d(e,{O:()=>i});var r=a("./packages/grafana-data/src/index.ts"),n=a("./packages/grafana-runtime/src/index.ts");const s={http:80,https:443,ftp:21};class i{constructor(){this.absUrl=this.wrapInDeprecationWarning(this.absUrl),this.hash=this.wrapInDeprecationWarning(this.hash),this.host=this.wrapInDeprecationWarning(this.host),this.path=this.wrapInDeprecationWarning(this.path),this.port=this.wrapInDeprecationWarning(this.port,"window.location"),this.protocol=this.wrapInDeprecationWarning(this.protocol,"window.location"),this.replace=this.wrapInDeprecationWarning(this.replace),this.search=this.wrapInDeprecationWarning(this.search),this.state=this.wrapInDeprecationWarning(this.state),this.url=this.wrapInDeprecationWarning(this.url)}wrapInDeprecationWarning(t,e){let a=this;return function(){return(0,r.deprecationWarning)("$location",t.name,e||"locationService"),t.apply(a,arguments)}}absUrl(){return`${window.location.origin}${this.url()}`}hash(t){if((0,n.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: hash"),t)throw new Error("AngularLocationWrapper method not implemented.");return n.locationService.getLocation().hash.slice(1)}host(){return new URL(window.location.href).hostname}path(t){(0,n.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: path");const e=n.locationService.getLocation();if(null!=t){let a=String(t);a=a.startsWith("/")?a:`/${a}`;const r=new URL(`${window.location.origin}${a}`);return n.locationService.push({pathname:r.pathname,search:r.search.length>0?r.search:e.search,hash:r.hash.length>0?r.hash:e.hash}),this}return null===t?(n.locationService.push("/"),this):e.pathname}port(){const t=new URL(window.location.href);return parseInt(t.port,10)||s[t.protocol]||null}protocol(){return new URL(window.location.href).protocol.slice(0,-1)}replace(){throw new Error("AngularLocationWrapper method not implemented.")}search(t,e){if((0,n.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: search"),!t)return n.locationService.getSearchObject();if(t&&arguments.length>1)return n.locationService.partial({[t]:e}),this;if(t){let e;e="object"==typeof t?Object.assign({},t):(0,n.locationSearchToObject)(t);for(const t of Object.keys(e))null!==e[t]&&void 0!==e[t]||delete e[t];const a=r.urlUtil.renderUrl(n.locationService.getLocation().pathname,e);n.locationService.push(a)}return this}state(t){throw(0,n.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: state"),new Error("AngularLocationWrapper method not implemented.")}url(t){if((0,n.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: url"),void 0!==t)return t.startsWith("#")?n.locationService.push(Object.assign({},n.locationService.getLocation(),{hash:t})):t.startsWith("?")?n.locationService.push(Object.assign({},n.locationService.getLocation(),{search:t})):0===t.trim().length?n.locationService.push("/"):n.locationService.push(t),n.locationService;const e=n.locationService.getLocation();return`${e.pathname}${e.search}${e.hash}`}}},"./public/app/angular/panel/metrics_panel_ctrl.ts":(t,e,a)=>{a.d(e,{k:()=>l});var r=a("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),n=a("./packages/grafana-data/src/index.ts"),s=a("./public/app/angular/panel/panel_ctrl.ts"),i=a("./public/app/features/dashboard/utils/panel.ts");function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class l extends s.q{constructor(t,e){super(t,e),o(this,"contextSrv",void 0),o(this,"datasourceSrv",void 0),o(this,"timeSrv",void 0),o(this,"templateSrv",void 0),o(this,"interval",void 0),o(this,"intervalMs",void 0),o(this,"resolution",void 0),o(this,"timeInfo",void 0),o(this,"skipDataOnInit",!1),o(this,"dataList",[]),o(this,"querySubscription",void 0),o(this,"useDataFrames",!1),o(this,"panelData",void 0),o(this,"panelDataObserver",{next:t=>{if(this.panelData=t,t.state===n.LoadingState.Error&&(this.loading=!1,this.processDataError(t.error)),t.state===n.LoadingState.Loading)return this.loading=!0,void this.angularDirtyCheck();if(t.request){const{timeInfo:e}=t.request;e&&(this.timeInfo=e)}if(t.timeRange&&(this.range=t.timeRange),this.useDataFrames)this.handleDataFrames(t.series);else{const e=t.series.map((t=>(0,n.toLegacyResponseData)(t)));this.handleQueryResult({data:e})}this.angularDirtyCheck()}}),this.contextSrv=e.get("contextSrv"),this.datasourceSrv=e.get("datasourceSrv"),this.timeSrv=e.get("timeSrv"),this.templateSrv=e.get("templateSrv"),this.panel.datasource=this.panel.datasource||null,this.events.on(n.PanelEvents.refresh,this.onMetricsPanelRefresh.bind(this)),this.events.on(n.PanelEvents.panelTeardown,this.onPanelTearDown.bind(this)),this.events.on(n.PanelEvents.componentDidMount,this.onMetricsPanelMounted.bind(this))}onMetricsPanelMounted(){const t=this.panel.getQueryRunner();this.querySubscription=t.getData({withTransforms:!0,withFieldConfig:!0}).subscribe(this.panelDataObserver)}onPanelTearDown(){this.querySubscription&&(this.querySubscription.unsubscribe(),this.querySubscription=null)}onMetricsPanelRefresh(){if(!this.otherPanelInFullscreenMode()){if(this.panel.snapshotData){this.updateTimeRange();let t=this.panel.snapshotData;return(0,r.isArray)(t)||(t=t.data),this.panelData={state:n.LoadingState.Done,series:t,timeRange:this.range},this.$timeout((()=>{this.events.emit(n.PanelEvents.dataSnapshotLoad,t)}))}return delete this.error,this.loading=!0,this.datasourceSrv.get(this.panel.datasource,this.panel.scopedVars).then(this.issueQueries.bind(this)).catch((t=>{this.processDataError(t)}))}}processDataError(t){t.cancelled?console.log("Panel request cancelled",t):(this.error=t.message||"Request Error",t.data&&(t.data.message?this.error=t.data.message:t.data.error&&(this.error=t.data.error)),this.angularDirtyCheck())}angularDirtyCheck(){this.$scope.$root.$$phase||this.$scope.$digest()}updateTimeRange(t){this.datasource=t||this.datasource,this.range=this.timeSrv.timeRange();const e=(0,i.W1)(this.panel,this.range);this.timeInfo=e.timeInfo,this.range=e.timeRange}issueQueries(t){this.updateTimeRange(t),this.datasource=t;const e=this.panel;return e.getQueryRunner().run({datasource:e.datasource,queries:e.targets,panelId:e.id,dashboardId:this.dashboard.id,timezone:this.dashboard.getTimezone(),timeInfo:this.timeInfo,timeRange:this.range,maxDataPoints:e.maxDataPoints||this.width,minInterval:e.interval,scopedVars:e.scopedVars,cacheTimeout:e.cacheTimeout,transformations:e.transformations})}handleDataFrames(t){this.loading=!1,this.dashboard&&this.dashboard.snapshot&&(this.panel.snapshotData=t.map((t=>(0,n.toDataFrameDTO)(t))));try{this.events.emit(n.PanelEvents.dataFramesReceived,t)}catch(t){this.processDataError(t)}}handleQueryResult(t){this.loading=!1,this.dashboard.snapshot&&(this.panel.snapshotData=t.data),t&&t.data||(console.log("Data source query result invalid, missing data field:",t),t={data:[]});try{this.events.emit(n.PanelEvents.dataReceived,t.data)}catch(t){this.processDataError(t)}}}},"./public/app/angular/panel/panel_ctrl.ts":(t,e,a)=>{a.d(e,{q:()=>h});var r=a("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),n=a("./packages/grafana-data/src/index.ts"),s=a("./public/app/angular/AngularLocationWrapper.ts"),i=a("./public/app/core/config.ts"),o=a("./public/app/core/core.ts");function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class h{constructor(t,e){var a,r;l(this,"panel",void 0),l(this,"error",void 0),l(this,"pluginName",""),l(this,"pluginId",""),l(this,"editorTabs",void 0),l(this,"$scope",void 0),l(this,"$injector",void 0),l(this,"$timeout",void 0),l(this,"editModeInitiated",!1),l(this,"containerHeight",void 0),l(this,"events",void 0),l(this,"loading",!1),l(this,"timing",void 0),l(this,"$location",void 0),l(this,"onPluginTypeChange",(t=>{})),this.panel=null!==(a=this.panel)&&void 0!==a?a:t.$parent.panel,this.dashboard=null!==(r=this.dashboard)&&void 0!==r?r:t.$parent.dashboard,this.$injector=e,this.$scope=t,this.$timeout=e.get("$timeout"),this.editorTabs=[],this.$location=new s.O,this.events=new n.EventBusSrv,this.timing={};const o=i.ZP.panels[this.panel.type];o&&(this.pluginId=o.id,this.pluginName=o.name),t.$on(n.PanelEvents.componentDidMount.name,(()=>this.panelDidMount()))}panelDidMount(){this.events.emit(n.PanelEvents.componentDidMount),this.events.emit(n.PanelEvents.initialized),this.dashboard.panelInitialized(this.panel)}renderingCompleted(){o.rv.renderingCompleted()}refresh(){this.panel.refresh()}publishAppEvent(t,e){this.$scope.$root.appEvent(t,e)}initEditMode(){this.editModeInitiated||(this.editModeInitiated=!0,this.events.emit(n.PanelEvents.editModeInitialized))}addEditorTab(t,e,a,n){const s={title:t,directiveFn:e,icon:n};(0,r.isString)(e)&&(s.directiveFn=()=>({templateUrl:e})),a?this.editorTabs.splice(a,0,s):this.editorTabs.push(s)}getExtendedMenu(){const t=[];return this.events.emit(n.PanelEvents.initPanelActions,t),t}async getAdditionalMenuItems(){return[]}otherPanelInFullscreenMode(){return this.dashboard.otherPanelInFullscreen(this.panel)}render(t){this.events.emit(n.PanelEvents.render,t)}}},"./public/app/angular/panel/query_ctrl.ts":(t,e,a)=>{a.d(e,{G:()=>s});var r=a("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class s{constructor(t,e){var a,s,i,o,l;n(this,"target",void 0),n(this,"datasource",void 0),n(this,"panelCtrl",void 0),n(this,"panel",void 0),n(this,"hasRawMode",void 0),n(this,"error",void 0),n(this,"isLastQuery",void 0),this.$scope=t,this.$injector=e,this.$scope=t,this.$injector=e,this.panelCtrl=null!==(a=this.panelCtrl)&&void 0!==a?a:t.ctrl.panelCtrl,this.target=null!==(s=this.target)&&void 0!==s?s:t.ctrl.target,this.datasource=null!==(i=this.datasource)&&void 0!==i?i:t.ctrl.datasource,this.panel=null!==(o=null===(l=this.panelCtrl)||void 0===l?void 0:l.panel)&&void 0!==o?o:t.ctrl.panelCtrl.panel,this.isLastQuery=(0,r.indexOf)(this.panel.targets,this.target)===this.panel.targets.length-1}refresh(){this.panelCtrl.refresh()}}},"./public/app/features/datasources/utils/passwordHandlers.ts":(t,e,a)=>{let r;a.d(e,{HX:()=>r,Xr:()=>n,wP:()=>s}),function(t){t.Password="password",t.BasicAuthPassword="basicAuthPassword"}(r||(r={}));const n=(t,e)=>a=>{a.preventDefault(),t.current[e]=void 0,t.current.secureJsonFields[e]=!1,t.current.secureJsonData=t.current.secureJsonData||{},t.current.secureJsonData[e]=""},s=(t,e)=>a=>{t.current.secureJsonData=t.current.secureJsonData||{},t.current.secureJsonData[e]=a.currentTarget.value}},"./public/app/plugins/datasource/mssql/module.ts":(t,e,a)=>{a.r(e),a.d(e,{plugin:()=>E});var r=a("./packages/grafana-data/src/index.ts"),n=a("./public/app/features/datasources/utils/passwordHandlers.ts");function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class i{constructor(t){s(this,"onPasswordReset",void 0),s(this,"onPasswordChange",void 0),s(this,"showUserCredentials",!1),s(this,"showTlsConfig",!1),s(this,"showCertificateConfig",!1),this.current=t.ctrl.current,this.current.jsonData.encrypt=this.current.jsonData.encrypt||"false",this.current.jsonData.sslRootCertFile=this.current.jsonData.sslRootCertFile||"",this.current.jsonData.tlsSkipVerify=this.current.jsonData.tlsSkipVerify||!1,this.current.jsonData.serverName=this.current.jsonData.serverName||"",this.current.jsonData.authenticationType=this.current.jsonData.authenticationType||"SQL Server Authentication",this.onPasswordReset=(0,n.Xr)(this,n.HX.Password),this.onPasswordChange=(0,n.wP)(this,n.HX.Password),this.onAuthenticationTypeChange(),this.onEncryptChange()}onAuthenticationTypeChange(){"Windows Authentication"===this.current.jsonData.authenticationType&&(this.current.user="",this.current.password=""),this.showUserCredentials="Windows Authentication"!==this.current.jsonData.authenticationType}onEncryptChange(){this.showTlsConfig="true"===this.current.jsonData.encrypt,this.showCertificateConfig=this.showTlsConfig&&!1===this.current.jsonData.tlsSkipVerify}}i.$inject=["$scope"],s(i,"templateUrl","partials/config.html");var o=a("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),l=a("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js"),h=a("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js"),c=a("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js"),u=a("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js"),p=a("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js"),d=a("./packages/grafana-runtime/src/index.ts"),m=a("./packages/grafana-runtime/src/utils/queryResponse.ts"),g=a("./public/app/features/templating/template_srv.ts");class v{transformMetricFindResponse(t){const e=(0,d.toDataQueryResponse)(t).data;if(!e||!e.length)return[];const a=e[0],r=[],n=a.fields.find((t=>"__text"===t.name)),s=a.fields.find((t=>"__value"===t.name));if(n&&s)for(let t=0;t<n.values.length;t++)r.push({text:""+n.values.get(t),value:""+s.values.get(t)});else r.push(...a.fields.flatMap((t=>t.values.toArray())).map((t=>({text:t}))));return Array.from(new Set(r.map((t=>t.text)))).map((t=>{var e;return{text:t,value:null===(e=r.find((e=>e.text===t)))||void 0===e?void 0:e.value}}))}async transformAnnotationResponse(t,e){const a=(0,d.toDataQueryResponse)({data:e}).data;if(!a||!a.length)return[];const r=a[0],n=r.fields.find((t=>"time"===t.name));if(!n)return Promise.reject({message:"Missing mandatory time column (with time column alias) in annotation query."});const s=r.fields.find((t=>"timeend"===t.name)),i=r.fields.find((t=>"text"===t.name)),o=r.fields.find((t=>"tags"===t.name)),l=[];for(let e=0;e<r.length;e++){const a=s&&s.values.get(e)?Math.floor(s.values.get(e)):void 0;l.push({annotation:t.annotation,time:Math.floor(n.values.get(e)),timeEnd:a,text:i&&i.values.get(e)?i.values.get(e):"",tags:o&&o.values.get(e)?o.values.get(e).trim().split(/\s*,\s*/):[]})}return l}}function f(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class b extends d.DataSourceWithBackend{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,g.J)();super(t),f(this,"id",void 0),f(this,"name",void 0),f(this,"responseParser",void 0),f(this,"interval",void 0),this.templateSrv=e,this.templateSrv=e,this.name=t.name,this.id=t.id,this.responseParser=new v;const a=t.jsonData||{};this.interval=a.timeInterval||"1m"}interpolateVariable(t,e){if("string"==typeof t)return e.multi||e.includeAll?"'"+t.replace(/'/g,"''")+"'":t;if("number"==typeof t)return t;return(0,o.map)(t,(e=>"number"==typeof t?t:"'"+e.replace(/'/g,"''")+"'")).join(",")}interpolateVariablesInQueries(t,e){let a=t;return t&&t.length>0&&(a=t.map((t=>Object.assign({},t,{datasource:this.getRef(),rawSql:this.templateSrv.replace(t.rawSql,e,this.interpolateVariable),rawQuery:!0})))),a}applyTemplateVariables(t,e){return{refId:t.refId,datasource:this.getRef(),rawSql:this.templateSrv.replace(t.rawSql,e,this.interpolateVariable),format:t.format}}async annotationQuery(t){if(!t.annotation.rawQuery)return Promise.reject({message:"Query missing in annotation definition"});const e={refId:t.annotation.name,datasource:this.getRef(),rawSql:this.templateSrv.replace(t.annotation.rawQuery,t.scopedVars,this.interpolateVariable),format:"table"};return(0,l.n)((0,d.getBackendSrv)().fetch({url:"/api/ds/query",method:"POST",data:{from:t.range.from.valueOf().toString(),to:t.range.to.valueOf().toString(),queries:[e]},requestId:t.annotation.name}).pipe((0,c.U)((async e=>await this.responseParser.transformAnnotationResponse(t,e.data)))))}filterQuery(t){return!t.hide}metricFindQuery(t,e){var a,r,n,s;let i="tempvar";e&&e.variable&&e.variable.name&&(i=e.variable.name);const o=null==e?void 0:e.range,p={refId:i,datasource:this.getRef(),rawSql:this.templateSrv.replace(t,{},this.interpolateVariable),format:"table"};return(0,l.n)((0,d.getBackendSrv)().fetch({url:"/api/ds/query",method:"POST",data:{from:null==o||null===(a=o.from)||void 0===a||null===(r=a.valueOf())||void 0===r?void 0:r.toString(),to:null==o||null===(n=o.to)||void 0===n||null===(s=n.valueOf())||void 0===s?void 0:s.toString(),queries:[p]},requestId:i}).pipe((0,c.U)((t=>this.responseParser.transformMetricFindResponse(t))),(0,u.K)((t=>(0,h.of)([])))))}testDatasource(){return(0,l.n)((0,d.getBackendSrv)().fetch({url:"/api/ds/query",method:"POST",data:{from:"5m",to:"now",queries:[{refId:"A",intervalMs:1,maxDataPoints:1,datasource:this.getRef(),rawSql:"SELECT 1",format:"table"}]}}).pipe((0,p.h)({status:"success",message:"Database Connection OK"}),(0,u.K)((t=>(0,h.of)((0,m.Gw)(t))))))}targetContainsTemplate(t){const e=t.rawSql.replace("$__","");return this.templateSrv.containsTemplate(e)}}var w=a("./public/app/plugins/sdk.ts");function y(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class S extends w.QueryCtrl{constructor(t,e){super(t,e),y(this,"formats",void 0),y(this,"lastQueryMeta",void 0),y(this,"lastQueryError",void 0),y(this,"showHelp",!1),this.target.format=this.target.format||"time_series",this.target.alias="",this.formats=[{text:"Time series",value:"time_series"},{text:"Table",value:"table"}],this.target.rawSql||("table"===this.panelCtrl.panel.type?(this.target.format="table",this.target.rawSql="SELECT 1"):this.target.rawSql="SELECT\n  $__timeEpoch(<time_column>),\n  <value column> as value,\n  <series name column> as metric\nFROM\n  <table name>\nWHERE\n  $__timeFilter(time_column)\nORDER BY\n  <time_column> ASC"),this.panelCtrl.events.on(r.PanelEvents.dataReceived,this.onDataReceived.bind(this),t),this.panelCtrl.events.on(r.PanelEvents.dataError,this.onDataError.bind(this),t)}onDataReceived(t){var e;this.lastQueryError=void 0,this.lastQueryMeta=null===(e=t[0])||void 0===e?void 0:e.meta}onDataError(t){if(t.data&&t.data.results){const e=t.data.results[this.target.refId];e&&(this.lastQueryError=e.error)}}}S.$inject=["$scope","$injector"],y(S,"templateUrl","partials/query.editor.html");class D{constructor(t){this.annotation=t.ctrl.annotation,this.annotation.rawQuery=this.annotation.rawQuery||"SELECT\n    <time_column> as time,\n    <text_column> as text,\n    <tags_column> as tags\n  FROM\n    <table name>\n  WHERE\n    $__timeFilter(time_column)\n  ORDER BY\n    <time_column> ASC"}}var P,C,j;D.$inject=["$scope"],j="partials/annotations.editor.html",(C="templateUrl")in(P=D)?Object.defineProperty(P,C,{value:j,enumerable:!0,configurable:!0,writable:!0}):P[C]=j;const E=new r.DataSourcePlugin(b).setQueryCtrl(S).setConfigCtrl(i).setAnnotationQueryCtrl(D)},"./public/app/plugins/sdk.ts":(t,e,a)=>{a.r(e),a.d(e,{MetricsPanelCtrl:()=>h,PanelCtrl:()=>l,QueryCtrl:()=>c,loadPluginCss:()=>n.loadPluginCss});var r=a("./packages/grafana-data/src/index.ts"),n=a("./packages/grafana-runtime/src/index.ts"),s=a("./public/app/angular/panel/metrics_panel_ctrl.ts"),i=a("./public/app/angular/panel/panel_ctrl.ts"),o=a("./public/app/angular/panel/query_ctrl.ts");const l=(0,r.makeClassES5Compatible)(i.q),h=(0,r.makeClassES5Compatible)(s.k),c=(0,r.makeClassES5Compatible)(o.G)}}]);
//# sourceMappingURL=mssqlPlugin.a87fd0ce1ff28bec28a3.js.map