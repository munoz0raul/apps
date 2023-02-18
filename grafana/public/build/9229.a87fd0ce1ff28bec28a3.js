"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9229],{"./public/app/angular/AngularLocationWrapper.ts":(e,t,a)=>{a.d(t,{O:()=>r});var i=a("./packages/grafana-data/src/index.ts"),s=a("./packages/grafana-runtime/src/index.ts");const n={http:80,https:443,ftp:21};class r{constructor(){this.absUrl=this.wrapInDeprecationWarning(this.absUrl),this.hash=this.wrapInDeprecationWarning(this.hash),this.host=this.wrapInDeprecationWarning(this.host),this.path=this.wrapInDeprecationWarning(this.path),this.port=this.wrapInDeprecationWarning(this.port,"window.location"),this.protocol=this.wrapInDeprecationWarning(this.protocol,"window.location"),this.replace=this.wrapInDeprecationWarning(this.replace),this.search=this.wrapInDeprecationWarning(this.search),this.state=this.wrapInDeprecationWarning(this.state),this.url=this.wrapInDeprecationWarning(this.url)}wrapInDeprecationWarning(e,t){let a=this;return function(){return(0,i.deprecationWarning)("$location",e.name,t||"locationService"),e.apply(a,arguments)}}absUrl(){return`${window.location.origin}${this.url()}`}hash(e){if((0,s.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: hash"),e)throw new Error("AngularLocationWrapper method not implemented.");return s.locationService.getLocation().hash.slice(1)}host(){return new URL(window.location.href).hostname}path(e){(0,s.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: path");const t=s.locationService.getLocation();if(null!=e){let a=String(e);a=a.startsWith("/")?a:`/${a}`;const i=new URL(`${window.location.origin}${a}`);return s.locationService.push({pathname:i.pathname,search:i.search.length>0?i.search:t.search,hash:i.hash.length>0?i.hash:t.hash}),this}return null===e?(s.locationService.push("/"),this):t.pathname}port(){const e=new URL(window.location.href);return parseInt(e.port,10)||n[e.protocol]||null}protocol(){return new URL(window.location.href).protocol.slice(0,-1)}replace(){throw new Error("AngularLocationWrapper method not implemented.")}search(e,t){if((0,s.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: search"),!e)return s.locationService.getSearchObject();if(e&&arguments.length>1)return s.locationService.partial({[e]:t}),this;if(e){let t;t="object"==typeof e?Object.assign({},e):(0,s.locationSearchToObject)(e);for(const e of Object.keys(t))null!==t[e]&&void 0!==t[e]||delete t[e];const a=i.urlUtil.renderUrl(s.locationService.getLocation().pathname,t);s.locationService.push(a)}return this}state(e){throw(0,s.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: state"),new Error("AngularLocationWrapper method not implemented.")}url(e){if((0,s.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: url"),void 0!==e)return e.startsWith("#")?s.locationService.push(Object.assign({},s.locationService.getLocation(),{hash:e})):e.startsWith("?")?s.locationService.push(Object.assign({},s.locationService.getLocation(),{search:e})):0===e.trim().length?s.locationService.push("/"):s.locationService.push(e),s.locationService;const t=s.locationService.getLocation();return`${t.pathname}${t.search}${t.hash}`}}},"./public/app/angular/core_module.ts":(e,t,a)=>{a.d(t,{ZP:()=>o,hF:()=>n,rb:()=>r});var i=a("./.yarn/cache/angular-npm-1.8.2-307000482b-35ea81a23b.zip/node_modules/angular/index.js"),s=a.n(i);const n=s().module("grafana.core",["ngRoute"]),r=[n,s().module("grafana.controllers",[]),s().module("grafana.directives",[]),s().module("grafana.factories",[]),s().module("grafana.services",[]),s().module("grafana.filters",[]),s().module("grafana.routes",[])],o=n},"./public/app/angular/panel/metrics_panel_ctrl.ts":(e,t,a)=>{a.d(t,{k:()=>l});var i=a("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),s=a("./packages/grafana-data/src/index.ts"),n=a("./public/app/angular/panel/panel_ctrl.ts"),r=a("./public/app/features/dashboard/utils/panel.ts");function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class l extends n.q{constructor(e,t){super(e,t),o(this,"contextSrv",void 0),o(this,"datasourceSrv",void 0),o(this,"timeSrv",void 0),o(this,"templateSrv",void 0),o(this,"interval",void 0),o(this,"intervalMs",void 0),o(this,"resolution",void 0),o(this,"timeInfo",void 0),o(this,"skipDataOnInit",!1),o(this,"dataList",[]),o(this,"querySubscription",void 0),o(this,"useDataFrames",!1),o(this,"panelData",void 0),o(this,"panelDataObserver",{next:e=>{if(this.panelData=e,e.state===s.LoadingState.Error&&(this.loading=!1,this.processDataError(e.error)),e.state===s.LoadingState.Loading)return this.loading=!0,void this.angularDirtyCheck();if(e.request){const{timeInfo:t}=e.request;t&&(this.timeInfo=t)}if(e.timeRange&&(this.range=e.timeRange),this.useDataFrames)this.handleDataFrames(e.series);else{const t=e.series.map((e=>(0,s.toLegacyResponseData)(e)));this.handleQueryResult({data:t})}this.angularDirtyCheck()}}),this.contextSrv=t.get("contextSrv"),this.datasourceSrv=t.get("datasourceSrv"),this.timeSrv=t.get("timeSrv"),this.templateSrv=t.get("templateSrv"),this.panel.datasource=this.panel.datasource||null,this.events.on(s.PanelEvents.refresh,this.onMetricsPanelRefresh.bind(this)),this.events.on(s.PanelEvents.panelTeardown,this.onPanelTearDown.bind(this)),this.events.on(s.PanelEvents.componentDidMount,this.onMetricsPanelMounted.bind(this))}onMetricsPanelMounted(){const e=this.panel.getQueryRunner();this.querySubscription=e.getData({withTransforms:!0,withFieldConfig:!0}).subscribe(this.panelDataObserver)}onPanelTearDown(){this.querySubscription&&(this.querySubscription.unsubscribe(),this.querySubscription=null)}onMetricsPanelRefresh(){if(!this.otherPanelInFullscreenMode()){if(this.panel.snapshotData){this.updateTimeRange();let e=this.panel.snapshotData;return(0,i.isArray)(e)||(e=e.data),this.panelData={state:s.LoadingState.Done,series:e,timeRange:this.range},this.$timeout((()=>{this.events.emit(s.PanelEvents.dataSnapshotLoad,e)}))}return delete this.error,this.loading=!0,this.datasourceSrv.get(this.panel.datasource,this.panel.scopedVars).then(this.issueQueries.bind(this)).catch((e=>{this.processDataError(e)}))}}processDataError(e){e.cancelled?console.log("Panel request cancelled",e):(this.error=e.message||"Request Error",e.data&&(e.data.message?this.error=e.data.message:e.data.error&&(this.error=e.data.error)),this.angularDirtyCheck())}angularDirtyCheck(){this.$scope.$root.$$phase||this.$scope.$digest()}updateTimeRange(e){this.datasource=e||this.datasource,this.range=this.timeSrv.timeRange();const t=(0,r.W1)(this.panel,this.range);this.timeInfo=t.timeInfo,this.range=t.timeRange}issueQueries(e){this.updateTimeRange(e),this.datasource=e;const t=this.panel;return t.getQueryRunner().run({datasource:t.datasource,queries:t.targets,panelId:t.id,dashboardId:this.dashboard.id,timezone:this.dashboard.getTimezone(),timeInfo:this.timeInfo,timeRange:this.range,maxDataPoints:t.maxDataPoints||this.width,minInterval:t.interval,scopedVars:t.scopedVars,cacheTimeout:t.cacheTimeout,transformations:t.transformations})}handleDataFrames(e){this.loading=!1,this.dashboard&&this.dashboard.snapshot&&(this.panel.snapshotData=e.map((e=>(0,s.toDataFrameDTO)(e))));try{this.events.emit(s.PanelEvents.dataFramesReceived,e)}catch(e){this.processDataError(e)}}handleQueryResult(e){this.loading=!1,this.dashboard.snapshot&&(this.panel.snapshotData=e.data),e&&e.data||(console.log("Data source query result invalid, missing data field:",e),e={data:[]});try{this.events.emit(s.PanelEvents.dataReceived,e.data)}catch(e){this.processDataError(e)}}}},"./public/app/angular/panel/panel_ctrl.ts":(e,t,a)=>{a.d(t,{q:()=>h});var i=a("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),s=a("./packages/grafana-data/src/index.ts"),n=a("./public/app/angular/AngularLocationWrapper.ts"),r=a("./public/app/core/config.ts"),o=a("./public/app/core/core.ts");function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class h{constructor(e,t){var a,i;l(this,"panel",void 0),l(this,"error",void 0),l(this,"pluginName",""),l(this,"pluginId",""),l(this,"editorTabs",void 0),l(this,"$scope",void 0),l(this,"$injector",void 0),l(this,"$timeout",void 0),l(this,"editModeInitiated",!1),l(this,"containerHeight",void 0),l(this,"events",void 0),l(this,"loading",!1),l(this,"timing",void 0),l(this,"$location",void 0),l(this,"onPluginTypeChange",(e=>{})),this.panel=null!==(a=this.panel)&&void 0!==a?a:e.$parent.panel,this.dashboard=null!==(i=this.dashboard)&&void 0!==i?i:e.$parent.dashboard,this.$injector=t,this.$scope=e,this.$timeout=t.get("$timeout"),this.editorTabs=[],this.$location=new n.O,this.events=new s.EventBusSrv,this.timing={};const o=r.ZP.panels[this.panel.type];o&&(this.pluginId=o.id,this.pluginName=o.name),e.$on(s.PanelEvents.componentDidMount.name,(()=>this.panelDidMount()))}panelDidMount(){this.events.emit(s.PanelEvents.componentDidMount),this.events.emit(s.PanelEvents.initialized),this.dashboard.panelInitialized(this.panel)}renderingCompleted(){o.rv.renderingCompleted()}refresh(){this.panel.refresh()}publishAppEvent(e,t){this.$scope.$root.appEvent(e,t)}initEditMode(){this.editModeInitiated||(this.editModeInitiated=!0,this.events.emit(s.PanelEvents.editModeInitialized))}addEditorTab(e,t,a,s){const n={title:e,directiveFn:t,icon:s};(0,i.isString)(t)&&(n.directiveFn=()=>({templateUrl:t})),a?this.editorTabs.splice(a,0,n):this.editorTabs.push(n)}getExtendedMenu(){const e=[];return this.events.emit(s.PanelEvents.initPanelActions,e),e}async getAdditionalMenuItems(){return[]}otherPanelInFullscreenMode(){return this.dashboard.otherPanelInFullscreen(this.panel)}render(e){this.events.emit(s.PanelEvents.render,e)}}},"./public/app/plugins/panel/graph/data_processor.ts":(e,t,a)=>{a.d(t,{$:()=>h});var i=a("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),s=a("./packages/grafana-data/src/index.ts"),n=a("./packages/grafana-ui/src/index.ts"),r=a("./packages/grafana-ui/src/components/GraphNG/nullInsertThreshold.ts"),o=a("./public/app/core/config.ts"),l=a("./public/app/core/time_series2.ts");class h{constructor(e){this.panel=e,this.panel=e}getSeriesList(e){const t=[],{dataList:a,range:i}=e;if(!a||!a.length)return t;for(let e=0;e<a.length;e++){let n=a[e],{timeField:o}=(0,s.getTimeField)(n);if(o){n=(0,r.w)(n,o.name),o=(0,s.getTimeField)(n).timeField;for(let r=0;r<n.fields.length;r++){const l=n.fields[r];if(l.type!==s.FieldType.number)continue;const h=(0,s.getFieldDisplayName)(l,n,a),c=[];for(let e=0;e<n.length;e++)c.push([l.values.get(e),(0,s.dateTime)(o.values.get(e)).valueOf()]);t.push(this.toTimeSeries(l,h,e,r,c,t.length,i))}}}if("histogram"===this.panel.xaxis.mode&&!this.panel.stack&&t.length>1){const e=t[0];e.alias=e.aliasEscaped="Count";for(let a=1;a<t.length;a++)e.datapoints=e.datapoints.concat(t[a].datapoints);return[e]}return t}toTimeSeries(e,t,a,i,r,h,c){const p=h%n.colors.length,d=this.panel.aliasColors[t]||n.colors[p],u=new l.Z({datapoints:r||[],alias:t,color:(0,s.getColorForTheme)(d,o.ZP.theme),unit:e.config?e.config.unit:void 0,dataFrameIndex:a,fieldIndex:i});if(r&&r.length>0&&c){const e=r[r.length-1][1],t=c.from;if(e-t.valueOf()<-1e4){r[0][1]-t.valueOf()<-1e4&&(u.isOutsideRange=!0)}}return u}setPanelDefaultsForNewXAxisMode(){switch(this.panel.xaxis.mode){case"time":this.panel.bars=!1,this.panel.lines=!0,this.panel.points=!1,this.panel.legend.show=!0,this.panel.tooltip.shared=!0,this.panel.xaxis.values=[];break;case"series":this.panel.bars=!0,this.panel.lines=!1,this.panel.points=!1,this.panel.stack=!1,this.panel.legend.show=!1,this.panel.tooltip.shared=!1,this.panel.xaxis.values=["total"];break;case"histogram":this.panel.bars=!0,this.panel.lines=!1,this.panel.points=!1,this.panel.stack=!1,this.panel.legend.show=!1,this.panel.tooltip.shared=!1}}validateXAxisSeriesValue(){if("series"!==this.panel.xaxis.mode);else{if(0===this.panel.xaxis.values.length)return void(this.panel.xaxis.values=["total"]);const e=this.getXAxisValueOptions({});(0,i.find)(e,{value:this.panel.xaxis.values[0]})||(this.panel.xaxis.values=["total"])}}getXAxisValueOptions(e){return"series"===this.panel.xaxis.mode?[{text:"Avg",value:"avg"},{text:"Min",value:"min"},{text:"Max",value:"max"},{text:"Total",value:"total"},{text:"Count",value:"count"}]:[]}pluckDeep(e,t){const a=t.split(".");let i=e;for(let e=0;e<a.length;++e){if(!i[a[e]])return;i=i[a[e]]}return i}}}}]);
//# sourceMappingURL=9229.a87fd0ce1ff28bec28a3.js.map