webpackJsonp([0],{663:function(e,t,i){i(755);var n=i(253)(i(687),i(738),null,null);e.exports=n.exports},686:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{name:"wuyi"}},computed:{username:function(){var e=JSON.parse(localStorage.getItem("pdaUserMess")).userName;return e||this.name}},methods:{handleCommand:function(e){"loginout"==e&&(localStorage.removeItem("pdaUserMess"),this.$router.push("/login"))}}}},687:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(728),o=i.n(n),a=i(729),s=i.n(a);t.default={components:{vHead:o.a,vSidebar:s.a}}},688:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{items:[{icon:"el-icon-document",index:"readme",title:"功能简述"},{icon:"el-icon-menu",index:"2",title:"资产查询",subs:[{index:"pdaready",title:"已盘点查询"},{index:"pdanoready",title:"未盘点查询"},{index:"pdamess",title:"全部资产查询"},{index:"pdanew",title:"新增资产查询"}]},{icon:"el-icon-circle-check",index:"3",title:"盘亏盘盈报表",subs:[{index:"padfoyear",title:"年度盘亏盘盈汇总"},{index:"pdalose",title:"盘亏数据详情"},{index:"pdawin",title:"盘盈数据详情"}]},{icon:"el-icon-information",index:"4",title:"盘点汇总",subs:[{index:"padallfoyear",title:"年度盘点数据统计"},{index:"pdaallmess",title:"盘点数据详情"}]},{icon:"el-icon-setting",index:"7",title:"管理员管理",subs:[{index:"usermanage",title:"数据同步"},{index:"downlode",title:"数据下载"}]}],pids:[],datas:[]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},mounted:function(){},methods:{}}},711:function(e,t,i){t=e.exports=i(99)(void 0),t.push([e.i,".header[data-v-5094702a]{position:relative;box-sizing:border-box;width:100%;height:70px;font-size:22px;line-height:70px;color:#fff}.header .logo[data-v-5094702a]{float:left;width:250px;text-align:center}.user-info[data-v-5094702a]{float:right;padding-right:50px;font-size:16px;color:#fff}.user-info .el-dropdown-link[data-v-5094702a]{position:relative;display:inline-block;padding-left:50px;color:#fff;cursor:pointer;vertical-align:middle}.user-info .user-logo[data-v-5094702a]{position:absolute;left:0;top:15px;width:40px;height:40px;border-radius:50%}.el-dropdown-menu__item[data-v-5094702a]{text-align:center}",""])},712:function(e,t,i){t=e.exports=i(99)(void 0),t.push([e.i,".content{margin-top:30px;border-top:1px solid #eee}",""])},715:function(e,t,i){t=e.exports=i(99)(void 0),t.push([e.i,".sidebar[data-v-7ad8d124]{display:block;position:absolute;width:250px;left:0;top:70px;bottom:0}.sidebar>ul[data-v-7ad8d124]{height:100%}.el-menu-vertical-demo[data-v-7ad8d124]{margin-top:30px;margin-left:20px;margin-bottom:20px;background:#fff;border:1px solid #eee}.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active[data-v-7ad8d124],.el-menu-item.is-active[data-v-7ad8d124]{color:#20a0ff;border-right:2px solid}",""])},726:function(e,t,i){e.exports=i.p+"static/img/img.2aab7b4.jpg"},728:function(e,t,i){i(754);var n=i(253)(i(686),i(737),"data-v-5094702a",null);e.exports=n.exports},729:function(e,t,i){i(758);var n=i(253)(i(688),i(741),"data-v-7ad8d124",null);e.exports=n.exports},737:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"logo"},[e._v("PDA资产盘点报表")]),e._v(" "),n("div",{staticClass:"user-info"},[n("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[n("img",{staticClass:"user-logo",attrs:{src:i(726)}}),e._v("\n                "+e._s(e.username)+"\n            ")]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"loginout"}},[e._v("退出")])],1)],1)],1)])},staticRenderFns:[]}},738:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("v-head"),e._v(" "),i("v-sidebar"),e._v(" "),i("div",{staticClass:"content"},[i("transition",{attrs:{name:"move",mode:"out-in"}},[i("router-view")],1)],1),e._v(" "),i("div",{staticStyle:{height:"30px",width:"100%"}})],1)},staticRenderFns:[]}},741:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sidebar"},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.onRoutes,"unique-opened":"",router:""}},[e._l(e.items,function(t){return[t.subs?[i("el-submenu",{attrs:{index:t.index}},[i("template",{slot:"title"},[i("i",{class:t.icon}),e._v(e._s(t.title))]),e._v(" "),e._l(t.subs,function(t,n){return i("el-menu-item",{key:n,attrs:{index:t.index}},[e._v(e._s(t.title)+"\n                    ")])})],2)]:[i("el-menu-item",{attrs:{index:t.index}},[i("i",{class:t.icon}),e._v(e._s(t.title)+"\n                ")])]]})],2)],1)},staticRenderFns:[]}},754:function(e,t,i){var n=i(711);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(254)("65654e22",n,!0)},755:function(e,t,i){var n=i(712);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(254)("147fd9fd",n,!0)},758:function(e,t,i){var n=i(715);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(254)("37c9e9cd",n,!0)}});