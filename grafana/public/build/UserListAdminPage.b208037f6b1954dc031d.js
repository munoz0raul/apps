"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8580],{"./public/app/features/admin/UserListAdminPage.tsx":(e,s,a)=>{a.r(s),a.d(s,{addExtraFilters:()=>$,default:()=>S});var n,i,l,t,r,c,o,d,m,h,u,p,g=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),x=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),j=a("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),b=a("./packages/grafana-ui/src/index.ts"),f=a("./public/app/core/components/Page/Page.tsx"),v=a("./public/app/core/components/TagFilter/TagBadge.tsx"),N=a("./public/app/core/core.ts"),y=a("./public/app/core/components/PageLoader/PageLoader.tsx"),L=a("./public/app/core/selectors/navModel.ts"),A=a("./public/app/types/index.ts"),w=a("./public/app/features/admin/state/actions.ts"),P=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const k=[],$=e=>{k.push(e)},_={fetchUsers:w.uh,changeQuery:w.R5,changePage:w.oO,changeFilter:w.M6},I=(0,j.connect)((e=>({navModel:(0,L.h)(e.navIndex,"global-users"),users:e.userListAdmin.users,query:e.userListAdmin.query,showPaging:e.userListAdmin.showPaging,totalPages:e.userListAdmin.totalPages,page:e.userListAdmin.page,filters:e.userListAdmin.filters,isLoading:e.userListAdmin.isLoading})),_),T=e=>`Edit user's ${e} details`,F=(0,x.memo)((e=>{var s;let{user:a,showLicensedRole:n}=e;const i=(0,b.useStyles2)(E),l=`admin/users/edit/${a.id}`;return(0,P.jsxs)("tr",{children:[(0,P.jsx)("td",{className:"width-4 text-center link-td",children:(0,P.jsx)("a",{href:l,"aria-label":`Edit user's ${a.name} details`,children:(0,P.jsx)("img",{className:"filter-table__avatar",src:a.avatarUrl,alt:`Avatar for user ${a.name}`})})}),(0,P.jsx)("td",{className:"link-td max-width-10",children:(0,P.jsx)("a",{className:"ellipsis",href:l,title:a.login,"aria-label":T(a.name),children:a.login})}),(0,P.jsx)("td",{className:"link-td max-width-10",children:(0,P.jsx)("a",{className:"ellipsis",href:l,title:a.email,"aria-label":T(a.name),children:a.email})}),(0,P.jsx)("td",{className:"link-td max-width-10",children:(0,P.jsx)("a",{className:"ellipsis",href:l,title:a.name,"aria-label":T(a.name),children:a.name})}),(0,P.jsxs)("td",{className:i.row,title:null!==(s=a.orgs)&&void 0!==s&&s.length?`The user is a member of the following organizations: ${a.orgs.map((e=>e.name)).join(",")}`:void 0,children:[(0,P.jsx)(R,{units:a.orgs,icon:"building"}),a.isAdmin&&(0,P.jsx)("a",{href:l,"aria-label":T(a.name),children:h||(h=(0,P.jsx)(b.Tooltip,{placement:"top",content:"Grafana Admin",children:(0,P.jsx)(b.Icon,{name:"shield"})}))})]}),n&&(0,P.jsx)("td",{className:(0,g.cx)("link-td",i.iconRow),children:(0,P.jsx)("a",{className:"ellipsis",href:l,title:a.name,"aria-label":T(a.name),children:"None"===a.licensedRole?(0,P.jsxs)("span",{className:i.disabled,children:["Not assigned"," ",u||(u=(0,P.jsx)(b.Tooltip,{placement:"top",content:"A licensed role will be assigned when this user signs in",children:(0,P.jsx)(b.Icon,{name:"question-circle"})}))]}):a.licensedRole})}),(0,P.jsx)("td",{className:"link-td",children:a.lastSeenAtAge&&(0,P.jsx)("a",{href:l,"aria-label":`Last seen at ${a.lastSeenAtAge}. Follow to edit user's ${a.name} details.`,children:"10 years"===a.lastSeenAtAge?(0,P.jsx)("span",{className:i.disabled,children:"Never"}):a.lastSeenAtAge})}),(0,P.jsx)("td",{className:"text-right",children:Array.isArray(a.authLabels)&&a.authLabels.length>0&&(0,P.jsx)(v.e,{label:a.authLabels[0],removeIcon:!1,count:0})}),(0,P.jsx)("td",{className:"text-right",children:a.isDisabled&&(p||(p=(0,P.jsx)("span",{className:"label label-tag label-tag--gray",children:"Disabled"})))})]},a.id)}));F.displayName="UserListItem";const R=e=>{let{units:s,icon:a}=e;const n=(0,b.useStyles2)(E);return null!=s&&s.length?s.length>1?(0,P.jsx)(b.Tooltip,{placement:"top",content:(0,P.jsx)("div",{className:n.unitTooltip,children:null==s?void 0:s.map((e=>(0,P.jsx)("a",{href:e.url,className:n.link,title:e.name,"aria-label":`Edit ${e.name}`,children:e.name},e.name)))}),children:(0,P.jsxs)("div",{className:n.unitItem,children:[(0,P.jsx)(b.Icon,{name:a})," ",(0,P.jsx)("span",{children:s.length})]})}):(0,P.jsxs)("a",{href:s[0].url,className:n.unitItem,title:s[0].name,"aria-label":`Edit ${s[0].name}`,children:[(0,P.jsx)(b.Icon,{name:a})," ",s[0].name]},s[0].name):null},E=e=>({table:g.css`
      margin-top: ${e.spacing(3)};
    `,filter:g.css`
      margin: 0 ${e.spacing(1)};
    `,iconRow:g.css`
      svg {
        margin-left: ${e.spacing(.5)};
      }
    `,row:g.css`
      display: flex;
      align-items: center;
      height: 100% !important;

      a {
        padding: ${e.spacing(.5)} 0 !important;
      }
    `,unitTooltip:g.css`
      display: flex;
      flex-direction: column;
    `,unitItem:g.css`
      cursor: pointer;
      padding: ${e.spacing(.5)} 0;
      margin-right: ${e.spacing(1)};
    `,disabled:g.css`
      color: ${e.colors.text.disabled};
    `,link:g.css`
      color: inherit;
      cursor: pointer;
      text-decoration: underline;
    `}),S=I((e=>{var s;let{fetchUsers:a,navModel:h,query:u,changeQuery:p,users:j,showPaging:v,totalPages:L,page:w,changePage:$,changeFilter:_,filters:I,isLoading:T}=e;const R=(0,b.useStyles2)(E);(0,x.useEffect)((()=>{a()}),[a]);const S=(0,x.useMemo)((()=>j.some((e=>e.licensedRole))),[j]);return(0,P.jsx)(f.Z,{navModel:h,children:(0,P.jsxs)(f.Z.Contents,{children:[(0,P.jsxs)("div",{className:"page-action-bar",children:[(0,P.jsxs)("div",{className:"gf-form gf-form--grow",children:[(0,P.jsx)(b.FilterInput,{placeholder:"Search user by login, email, or name.",autoFocus:!0,value:u,onChange:p}),(0,P.jsx)(b.RadioButtonGroup,{options:[{label:"All users",value:!1},{label:"Active last 30 days",value:!0}],onChange:e=>_({name:"activeLast30Days",value:e}),value:null===(s=I.find((e=>"activeLast30Days"===e.name)))||void 0===s?void 0:s.value,className:R.filter}),k.map(((e,s)=>(0,P.jsx)(e,{filters:I,onChange:_,className:R.filter},s)))]}),N.Vt.hasPermission(A.bW.UsersCreate)&&(n||(n=(0,P.jsx)(b.LinkButton,{href:"admin/users/create",variant:"primary",children:"New user"})))]}),T?i||(i=(0,P.jsx)(y.Z,{})):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:(0,g.cx)(R.table,"admin-list-table"),children:(0,P.jsxs)("table",{className:"filter-table form-inline filter-table--hover",children:[(0,P.jsx)("thead",{children:(0,P.jsxs)("tr",{children:[l||(l=(0,P.jsx)("th",{})),t||(t=(0,P.jsx)("th",{children:"Login"})),r||(r=(0,P.jsx)("th",{children:"Email"})),c||(c=(0,P.jsx)("th",{children:"Name"})),o||(o=(0,P.jsx)("th",{children:"Belongs to"})),S&&(0,P.jsxs)("th",{children:["Licensed role"," ",(0,P.jsx)(b.Tooltip,{placement:"top",content:(0,P.jsxs)(P.Fragment,{children:["Licensed role is based on a user's Org role (i.e. Viewer, Editor, Admin) and their dashboard/folder permissions."," ",(0,P.jsx)("a",{className:R.link,target:"_blank",rel:"noreferrer noopener",href:"https://grafana.com/docs/grafana/next/enterprise/license/license-restrictions/#active-users-limit",children:"Learn more"})]}),children:d||(d=(0,P.jsx)(b.Icon,{name:"question-circle"}))})]}),m||(m=(0,P.jsxs)("th",{children:["Last active ",(0,P.jsx)(b.Tooltip,{placement:"top",content:"Time since user was seen using Grafana",children:(0,P.jsx)(b.Icon,{name:"question-circle"})})]})),(0,P.jsx)("th",{style:{width:"1%"}})]})}),(0,P.jsx)("tbody",{children:j.map((e=>(0,P.jsx)(F,{user:e,showLicensedRole:S},e.id)))})]})}),v&&(0,P.jsx)(b.Pagination,{numberOfPages:L,currentPage:w,onNavigate:$})]})]})})}))}}]);
//# sourceMappingURL=UserListAdminPage.b208037f6b1954dc031d.js.map