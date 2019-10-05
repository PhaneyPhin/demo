(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-712344dd"],{1048:function(t,e,s){},"416e":function(t,e,s){"use strict";var a=s("1048"),r=s.n(a);r.a},9639:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vx-col w-full mb-base"},[s("vs-popup",{staticClass:"holamundo",attrs:{title:"edit user",active:t.popupActive},on:{"update:active":function(e){t.popupActive=e}}},[s("div",{staticClass:"w-full mt-3"},[s("label",[t._v(t._s(t.$t("first_name")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"firstname",type:"text",placeholder:"first name"},model:{value:t.user.first_name,callback:function(e){t.$set(t.user,"first_name",e)},expression:"user.first_name"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("firstname")))])],1),s("div",{staticClass:"w-full mt-3"},[s("label",[t._v(t._s(t.$t("last_name")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"lastname",type:"text",placeholder:"last name"},model:{value:t.user.last_name,callback:function(e){t.$set(t.user,"last_name",e)},expression:"user.last_name"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("lastname")))])],1),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/2"},[s("div",{staticClass:"mt-3"},[s("label",[t._v("date of birth")]),s("datepicker",{attrs:{placeholder:"Select Date"},model:{value:t.user.date_of_birth,callback:function(e){t.$set(t.user,"date_of_birth",e)},expression:"user.date_of_birth"}})],1)]),s("div",{staticClass:"vx-col md:w-1/2 mt-3"},[s("label",[t._v(t._s(t.$t("tel")))]),s("vs-input",{ref:"tel",staticClass:"w-full",attrs:{type:"tel","data-vv-validate-on":"tel",name:"tel",placeholder:"tel"},model:{value:t.user.tel,callback:function(e){t.$set(t.user,"tel",e)},expression:"user.tel"}})],1)]),s("div",{staticClass:"w-full mt-3"},[s("label",[t._v(t._s(t.$t("address")))]),s("vs-input",{ref:"address",staticClass:"w-full",attrs:{type:"text","data-vv-validate-on":"blur",name:"address",placeholder:"address"},model:{value:t.user.address,callback:function(e){t.$set(t.user,"address",e)},expression:"user.address"}})],1),s("div",{staticClass:"w-full mt-3"},[s("label",[t._v(t._s(t.$t("status")))]),s("vs-select",{staticClass:"w-full",model:{value:t.user.flag,callback:function(e){t.$set(t.user,"flag",e)},expression:"user.flag"}},t._l(t.status,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.flag_id,text:t.en_name}})}),1)],1),s("div",{staticClass:"w-full mt-3"},[s("label",[t._v(t._s(t.$t("username")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"username",placeholder:"Username",disabled:""},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("username")))])],1),s("div",{staticClass:"w-full mt-3"},[s("label",[t._v(t._s(t.$t("password")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],ref:"password",staticClass:"w-full mt-3",attrs:{type:"password","data-vv-validate-on":"blur",name:"password",placeholder:"Password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("password")))])],1),s("div",{staticClass:"w-full mt-3"},[s("label",[t._v(t._s(t.$t("confirm_password")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|max:10|confirmed:password",expression:"'min:6|max:10|confirmed:password'"}],staticClass:"w-full",attrs:{type:"password","data-vv-validate-on":"blur","data-vv-as":"password",name:"confirm_password",placeholder:"Confirm Password"},model:{value:t.user.confirm_password,callback:function(e){t.$set(t.user,"confirm_password",e)},expression:"user.confirm_password"}}),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("confirm_password")))])],1),s("vs-button",{staticClass:"mt-5 mr-4",attrs:{color:"success",type:"border",disabled:!t.validateForm},on:{click:function(e){return t.save()}}},[t._v("save")]),s("vs-button",{staticClass:"mt-5",attrs:{color:"danger",type:"border"},on:{click:function(e){t.popupActive=!1}}},[t._v("close")])],1),t.view_file?t._e():s("vx-card",[s("vs-table",{attrs:{pagination:"","max-items":"10",search:"",data:t.users},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,function(e,a){return s("vs-tr",{key:a,attrs:{data:e}},[s("vs-td",{attrs:{data:e.username}},[t._v("\n                        "+t._s(e.username)+"\n                      ")]),s("vs-td",{attrs:{data:e.first_name}},[t._v("\n                        "+t._s(e.first_name)+"\n                      ")]),s("vs-td",{attrs:{data:e.last_name}},[t._v("\n                        "+t._s(e.last_name)+"\n                      ")]),s("vs-td",{attrs:{data:e.date_of_birth}},[t._v("\n                        "+t._s(e.date_of_birth)+"\n                      ")]),s("vs-td",{attrs:{data:e.address}},[t._v("\n                        "+t._s(e.address)+"\n                      ")]),s("vs-td",{attrs:{data:e.tel}},[t._v("\n                        "+t._s(e.tel)+"\n                      ")]),s("vs-td",{attrs:{data:e.en_name}},[t._v("\n                        "+t._s(e.en_name)+"\n                      ")]),s("vs-td",{attrs:{data:e.flag}},["1"==e.flag?s("vs-button",{attrs:{color:"success",type:"border"},on:{click:function(s){return t.approve(e)}}},[t._v("approve")]):t._e()],1),s("vs-td",{attrs:{data:e.username}},[s("feather-icon",{staticClass:"cursor-pointer w-6 h-6",attrs:{icon:"FileTextIcon",size:"small"},on:{click:function(s){return t.view(e)}}})],1),s("vs-td",[s("feather-icon",{staticClass:"cursor-pointer w-6 h-6",attrs:{icon:"EditIcon",size:"small"},on:{click:function(s){return t.edit(e)}}})],1),s("vs-td",[s("feather-icon",{staticClass:"cursor-pointer w-6 h-6",attrs:{icon:"Trash2Icon",size:"small"},on:{click:function(s){return t.delete_user(e)}}})],1)],1)})}}],null,!1,2418509886)},[s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"username"}},[t._v(t._s(t.$t("username")))]),s("vs-th",{attrs:{"sort-key":"first_name"}},[t._v(t._s(t.$t("first_name")))]),s("vs-th",{attrs:{"sort-key":"last_name"}},[t._v(t._s(t.$t("last_name")))]),s("vs-th",{attrs:{"sort-key":"operating_unit_name"}},[t._v(t._s(t.$t("dob")))]),s("vs-th",{attrs:{"sort-key":"operating_unit_name"}},[t._v(t._s(t.$t("address")))]),s("vs-th",{attrs:{"sort-key":"operating_unit_name"}},[t._v(t._s(t.$t("tel")))]),s("vs-th",{attrs:{"sort-key":"operating_unit_name"}},[t._v(t._s(t.$t("status")))]),s("vs-th",[t._v(t._s(t.$t("approve")))]),s("vs-th",[t._v(t._s(t.$t("view_file")))]),s("vs-th",[t._v(t._s(t.$t("edit")))]),s("vs-th",[t._v(t._s(t.$t("delete")))])],1)],2)],1),t.view_file?s("vx-card",[s("vs-table",{attrs:{pagination:"","max-items":"10",search:"",data:t.files},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,function(e,a){return s("vs-tr",{key:a,attrs:{data:e}},[s("vs-td",{attrs:{data:e.username}},[t._v("\n                        "+t._s(e.username)+"\n                      ")]),s("vs-td",{attrs:{data:e.file_name}},[t._v("\n                        "+t._s(e.file_name)+"\n                      ")]),s("vs-td",{attrs:{data:e.upload_date}},[t._v("\n                        "+t._s(e.upload_date)+"\n                      ")]),s("vs-td",{staticClass:"text-center"},[s("feather-icon",{staticClass:"cursor-pointer w-6 h-6",attrs:{icon:"DownloadIcon",size:"small"},on:{click:function(s){return t.download(e)}}})],1),s("vs-td",[s("feather-icon",{staticClass:"cursor-pointer w-6 h-6",attrs:{icon:"Trash2Icon",size:"small"},on:{click:function(s){return t.delete_file(e)}}})],1)],1)})}}],null,!1,2992647122)},[s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"username"}},[t._v(t._s(t.$t("username")))]),s("vs-th",{attrs:{"sort-key":"file_name"}},[t._v(t._s(t.$t("file_name")))]),s("vs-th",{attrs:{"sort-key":"upload_date"}},[t._v(t._s(t.$t("upload_date")))]),s("vs-th",{staticClass:"text-center"},[t._v(t._s(t.$t("download")))]),s("vs-th",[t._v(t._s(t.$t("delete")))])],1)],2),s("div",{staticClass:"mt-5"},[s("vs-button",{attrs:{color:"warning"},on:{click:function(e){t.view_file=!1}}},[t._v("back")]),s("br"),s("br")],1)],1):t._e()],1)},r=[],n=(s("551c"),s("fa33")),i=s("67cf"),l=s("c1df"),o=s.n(l),u={components:{Datepicker:n["a"]},data:function(){return{view_file:!1,tableList:["vs-th: Component","vs-tr: Component","vs-td: Component","thread: Slot","tbody: Slot","header: Slot"],popupActive:!1,renderComponent:!0,users:[],status:[],files:[],user:{}}},computed:{validateForm:function(){return!this.errors.any()&&""!=this.user.username&&""!=this.user.first_name&&""!=this.user.last_name&&""!=this.user.password&&""!=this.user.confirm_password}},created:function(){var t=this;i["a"].getData("/get_status").then(function(e){t.status=e}),this.get_user()},methods:{get_user:function(){var t=this;i["a"].getData("/get_user").then(function(e){t.users=e.map(function(t){return t.date_of_birth=""==t.date_of_birth?"":o()(t.date_of_birth).format("DD/MM/YYYY"),t})})},delete_user:function(t){var e=this;this.$swal({title:"Are you sure to delete this user?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"delete"}).then(function(s){console.log(s),s.value&&i["a"].postData("delete_user",{username:t.username}).then(function(t){e.$swal("successfull!","user has been deleted.","success").then(function(t){e.get_user()})})})},edit:function(t){this.user=t,this.user.password="",this.user.password="",this.popupActive=!0},save:function(){var t=this;this.validateForm&&i["a"].postData("edit_user",this.user).then(function(e){t.popupActive=!1,t.$swal("successfull!","user has been updated.","success").then(function(e){t.get_user()})})},approve:function(t){var e=this;this.$swal({title:"Are you sure to approvice this user?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"apprivce"}).then(function(s){console.log(s),s.value&&i["a"].postData("approve",{username:t.username}).then(function(t){e.$swal("successfull!","user has been approved.","success").thenI(function(t){e.get_user()})})})},download:function(t){var e=window.open("http://localhost:3000/files/"+t.file_name,"_blank");e.focus()},delete_file:function(t){var e=this;this.$swal({title:"Are you sure to delete this file?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"delete"}).then(function(s){console.log(s),s.value&&i["a"].postData("delete_file",{file_id:t.file_id}).then(function(t){e.$swal("file was deleted","","success").then(function(t){e.forceRerender()})})})},view:function(t){var e=this;this.view_file=!0,i["a"].postData("get_file",{username:t.username}).then(function(t){e.files=t})}},watch:{}},c=u,d=(s("416e"),s("2877")),v=Object(d["a"])(c,a,r,!1,null,"8d73f88e",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-712344dd.305ed0ee.js.map