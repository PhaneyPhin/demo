(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d2aa0c4"],{"3af3":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"data-list-container",attrs:{id:"data-list-thumb-view"}},[s("add-new-data-sidebar",{attrs:{isSidebarActive:t.addNewDataSidebar},on:{closeSidebar:function(e){t.addNewDataSidebar=!1}}}),s("vs-table",{ref:"table",attrs:{multiple:"",pagination:"","max-items":t.itemsPerPage,search:"",data:t.users},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data;return[s("tbody",t._l(r,function(e,r){return s("vs-tr",{key:r,attrs:{data:e}},[s("vs-td",{staticClass:"img-container"},[s("img",{staticClass:"product-img",attrs:{src:e.img}})]),s("vs-td",[s("p",{staticClass:"product-name font-medium"},[t._v(t._s(e.name))])]),s("vs-td",[s("p",{staticClass:"product-category"},[t._v(t._s(e.category))])]),s("vs-td",[s("vs-progress",{staticClass:"shadow-md",attrs:{percent:Number(e.popularity),color:t.getPopularityColor(Number(e.popularity))}})],1),s("vs-td",[s("vs-chip",{staticClass:"product-order-status",attrs:{color:t.getOrderStatusColor(e.order_status)}},[t._v(t._s(e.order_status))])],1),s("vs-td",[s("p",{staticClass:"product-price"},[t._v("$"+t._s(e.price))])])],1)}),1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"flex flex-wrap-reverse items-center"},[s("vs-dropdown",{staticClass:"cursor-pointer mr-4 mb-4",attrs:{"vs-trigger-click":""}},[s("div",{staticClass:"p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32"},[s("span",{staticClass:"mr-2"},[t._v("Actions")]),s("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),s("vs-dropdown-menu",[s("vs-dropdown-item",[s("span",[t._v("Delete")])]),s("vs-dropdown-item",[s("span",[t._v("Archive")])]),s("vs-dropdown-item",[s("span",[t._v("Print")])]),s("vs-dropdown-item",[s("span",[t._v("Another Action")])])],1)],1),s("div",{staticClass:"p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary",on:{click:function(e){t.addNewDataSidebar=!0}}},[s("feather-icon",{attrs:{icon:"PlusIcon",svgClasses:"h-4 w-4"}}),s("span",{staticClass:"ml-2 text-base text-primary"},[t._v("Add New")])],1)],1),s("vs-dropdown",{staticClass:"cursor-pointer mb-4 mr-4",attrs:{"vs-trigger-click":""}},[s("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[s("span",{staticClass:"mr-2"},[t._v(t._s(t.currentPage*t.itemsPerPage-(t.itemsPerPage-1))+" - "+t._s(t.users.length-t.currentPage*t.itemsPerPage>0?t.currentPage*t.itemsPerPage:t.users.length)+" of "+t._s(t.users.length))]),s("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),s("vs-dropdown-menu",[s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=4}}},[s("span",[t._v("4")])]),s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=10}}},[s("span",[t._v("10")])]),s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=15}}},[s("span",[t._v("15")])]),s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=20}}},[s("span",[t._v("20")])])],1)],1)],1),s("template",{slot:"thead"},[s("vs-th",[t._v("Image")]),s("vs-th",{attrs:{"sort-key":"name"}},[t._v("Name")]),s("vs-th",{attrs:{"sort-key":"category"}},[t._v("Category")]),s("vs-th",{attrs:{"sort-key":"popularity"}},[t._v("Popularity")]),s("vs-th",{attrs:{"sort-key":"order_status"}},[t._v("Order Status")]),s("vs-th",{attrs:{"sort-key":"price"}},[t._v("Price")])],1)],2)],1)},a=[],o=(s("c5f6"),s("ac6a"),s("cadf"),s("456d"),s("a04c")),n={components:{AddNewDataSidebar:o["a"]},data:function(){return{selected:[],users:[],itemsPerPage:4,isMounted:!1,addNewDataSidebar:!1}},computed:{currentPage:function(){return this.isMounted?this.$refs.table.currentx:0}},methods:{getOrderStatusColor:function(t){return"on hold"==t?"warning":"delivered"==t?"success":"canceled"==t?"danger":"primary"},getPopularityColor:function(t){return t>90?"success":t>70?"primary":t>=50?"warning":t<50?"danger":"primary"},formatData:function(t){var e=t.map(function(t){for(var e=t.fields,s={},r=Object.keys(e),a=0;a<r.length;a++){var o=r[a];s[o]=Number(e[o].integerValue)||Number(e[o].doubleValue)||e[o].stringValue}return s});return e}},created:function(){var t=this;this.$http.get("https://firestore.googleapis.com/v1/projects/vuesax-admin/databases/(default)/documents/products/?pageSize=100").then(function(e){t.users=t.formatData(e.data.documents)}).catch(function(e){t.$vs.notify({title:"Error",text:e,color:"danger",iconPack:"feather",icon:"icon-alert-circle"})})},mounted:function(){this.isMounted=!0}},i=n,c=(s("89ea1"),s("2877")),d=Object(c["a"])(i,r,a,!1,null,null,null);e["default"]=d.exports},"89ea1":function(t,e,s){"use strict";var r=s("a218"),a=s.n(r);a.a},a218:function(t,e,s){}}]);
//# sourceMappingURL=chunk-8d2aa0c4.aef8d3d8.js.map