(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c04c4"],{"40d6":function(t,e,l){"use strict";l.r(e);var n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"dialog-demo"}},[l("dialogs-alert"),l("dialogs-confirm"),l("dialogs-prompt")],1)},a=[],o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("vx-card",{attrs:{title:"Alert","code-toggler":""}},[l("p",[t._v("To generate a dialog we have the global function $vs.dialog the parameters to generate the dialog are")]),l("vs-list",[l("vs-list-item",{attrs:{title:"title",subtitle:"title of the dialogue - String"}}),l("vs-list-item",{attrs:{title:"text",subtitle:"internal text of the dialog - String"}}),l("vs-list-item",{attrs:{title:"color",subtitle:"color of the component - Colors, RGB, HEX"}}),l("vs-list-item",{attrs:{title:"accept",subtitle:"function that executes the user accept the dialog - Function"}}),l("vs-list-item",{attrs:{title:"cancel",subtitle:"function that executes the user to cancel the dialog (if it is a confirm type) - Function"}}),l("vs-list-item",{attrs:{title:"type",subtitle:"determines the type of dialog (alert or confirm) - alert, confirm"}}),l("vs-list-item",{attrs:{title:"buttonAccept",subtitle:"determines the type of accept button - Boolean"}}),l("vs-list-item",{attrs:{title:"buttonCancel",subtitle:"determines the type of cancel button - Boolean"}})],1),l("div",{staticClass:"demo-alignment"},[l("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(e){return t.openAlert("primary")}}},[t._v("Alert Primary")]),l("vs-button",{attrs:{color:"success",type:"flat"},on:{click:function(e){return t.openAlert("success")}}},[t._v("Alert Success")]),l("vs-button",{attrs:{color:"danger",type:"flat"},on:{click:function(e){return t.openAlert("danger")}}},[t._v("Alert Danger")]),l("vs-button",{attrs:{color:"warning",type:"flat"},on:{click:function(e){return t.openAlert("warning")}}},[t._v("Alert Warning")]),l("vs-button",{attrs:{color:"dark",type:"flat"},on:{click:function(e){return t.openAlert("dark")}}},[t._v("Alert Dark")]),l("vs-button",{attrs:{color:"primary",type:"gradient"},on:{click:function(e){return t.openAlert("#FF6F91")}}},[t._v("Alert Color RGB | HEX")])],1),l("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vs-button @click="openAlert(\'primary\')" color="primary" type="flat">Alert Primary</vs-button>\n  <vs-button @click="openAlert(\'success\')" color="success" type="flat">Alert Success</vs-button>\n  <vs-button @click="openAlert(\'danger\')" color="danger" type="flat">Alert Danger</vs-button>\n  <vs-button @click="openAlert(\'warning\')" color="warning" type="flat">Alert Warning</vs-button>\n  <vs-button @click="openAlert(\'dark\')" color="dark" type="flat">Alert Dark</vs-button>\n  <vs-button @click="openAlert(\'#FF6F91\')" color="primary" type="gradient">Alert Color RGB | HEX</vs-button>\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    colorAlert:\'primary\',\n    titleAlert:\'Alert\',\n    activeAlert:false,\n    valueInput:\'\',\n  }),\n  methods:{\n    openAlert(color){\n      this.colorAlert = color\n      this.$vs.dialog({\n        color:this.colorAlert,\n        title: `Dialog - ${this.colorAlert}`,\n        text: \'I love soufflé lollipop liquorice wafer jelly-o halvah sesame snaps. Pastry chocolate cake jelly-o carrot cake jelly topping croissant ice cream.\',\n        accept:this.acceptAlert\n      })\n    },\n    acceptAlert(){\n      this.$vs.notify({\n        color:this.colorAlert,\n        title:\'Accept Selected\',\n        text:\'Gingerbread soufflé biscuit oat cake.\'\n      })\n    }\n  }\n}\n<\/script>\n        ')])],2)},i=[],c={data:function(){return{colorAlert:"primary",titleAlert:"Alert",activeAlert:!1,valueInput:""}},methods:{openAlert:function(t){this.colorAlert=t,this.$vs.dialog({color:this.colorAlert,title:"Dialog - ".concat(this.colorAlert),text:"I love soufflé lollipop liquorice wafer jelly-o halvah sesame snaps. Pastry chocolate cake jelly-o carrot cake jelly topping croissant ice cream.",accept:this.acceptAlert})},acceptAlert:function(){this.$vs.notify({color:this.colorAlert,title:"Accept Selected",text:"Gingerbread soufflé biscuit oat cake."})}}},r=c,s=l("2877"),p=Object(s["a"])(r,o,i,!1,null,null,null),v=p.exports,u=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("vx-card",{attrs:{title:"Confirm","code-toggler":""}},[l("p",[t._v("If you need a dialog of type confirm you can do it just by changing the type as a parameter inside the main function")]),l("vs-alert",{staticClass:"my-4",attrs:{color:"primary",icon:"new_releases",active:"true"}},[l("p",[t._v("To do some action when the user approves or confirms we have the property accept:"),l("code",[t._v("myFunctionAccept")])])]),l("div",{staticClass:"demo-alignment"},[l("vs-button",{attrs:{color:"danger",type:"gradient"},on:{click:function(e){return t.openConfirm()}}},[t._v("Delete Image")])],1),l("template",{slot:"codeContainer"},[t._v("\n<template>\n  <vs-button @click=\"openConfirm()\" color=\"danger\" type=\"gradient\">Delete Image</vs-button>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    activeConfirm: false\n  }),\n  methods: {\n    openConfirm() {\n      this.$vs.dialog({\n        type: 'confirm',\n        color: 'danger',\n        title: `Confirm`,\n        text: 'Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups.',\n        accept: this.acceptAlert\n      })\n    },\n    acceptAlert() {\n      this.$vs.notify({\n        color: 'danger',\n        title: 'Deleted image',\n        text: 'The selected image was successfully deleted'\n      })\n    },\n  }\n}\n<\/script>\n        ")])],2)},d=[],m={data:function(){return{activeConfirm:!1}},methods:{openConfirm:function(){this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups.",accept:this.acceptAlert})},acceptAlert:function(){this.$vs.notify({color:"danger",title:"Deleted image",text:"The selected image was successfully deleted"})}}},f=m,h=Object(s["a"])(f,u,d,!1,null,null,null),g=h.exports,y=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("vx-card",{attrs:{title:"Prompt","code-toggler":""}},[l("p",[t._v("To add a dialog of type prompt we have a global function a completely independent component "),l("code",[t._v("vs-prompt")]),t._v(". This allows more flexibility with the input and ability to add any type of input and components")]),l("div",{staticClass:"my-3"},[l("span",[t._v("The properties of the component are equivalent to those of the global function only with the vs before each property something like")]),l("vx-list",{attrs:{list:["function: color","component = vsColor"]}})],1),l("div",{staticClass:"demo-alignment"},[l("vs-button",{attrs:{color:"primary",type:"border"},on:{click:function(e){t.activePrompt=!0}}},[t._v("Run prompt")]),l("vs-button",{attrs:{color:"primary",type:"border"},on:{click:function(e){t.activePrompt2=!0}}},[t._v("Run prompt inputs")]),l("div",{staticClass:"op-block"},[t._v("Security Code: "+t._s(null==t.val?"null":t.val))]),l("div",{staticClass:"op-block"},[t._v("\n\t\t\t\tName: "+t._s(t.valMultipe.value1)+" |\n\t\t\t\tLast Name: "+t._s(t.valMultipe.value2)+"\n\t\t\t")])],1),l("vs-prompt",{attrs:{"vs-active":t.activePrompt},on:{"vs-cancel":function(e){t.val=""},"vs-accept":t.acceptAlert,"vs-close":t.close,"update:vsActive":function(e){t.activePrompt=e},"update:vs-active":function(e){t.activePrompt=e}}},[l("div",{staticClass:"con-exemple-prompt"},[l("span",[t._v("Enter the security code")]),l("vs-input",{staticClass:"mt-3 w-full",attrs:{placeholder:"Code","vs-placeholder":"Code"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)]),l("vs-prompt",{attrs:{"vs-is-valid":t.validName,"vs-active":t.activePrompt2},on:{"vs-cancel":t.clearValMultiple,"vs-accept":t.acceptAlert,"vs-close":t.close,"update:vsActive":function(e){t.activePrompt2=e},"update:vs-active":function(e){t.activePrompt2=e}}},[l("div",{staticClass:"con-exemple-prompt"},[t._v("\n\t\t\t\tEnter your first and last name to "),l("b",[t._v("continue")]),t._v(".\n\t\t\t"),l("vs-input",{staticClass:"mt-4 mb-2 w-full",attrs:{placeholder:"Name"},model:{value:t.valMultipe.value1,callback:function(e){t.$set(t.valMultipe,"value1",e)},expression:"valMultipe.value1"}}),l("vs-input",{staticClass:"w-full",attrs:{placeholder:"Last Name"},model:{value:t.valMultipe.value2,callback:function(e){t.$set(t.valMultipe,"value2",e)},expression:"valMultipe.value2"}}),l("vs-alert",{staticClass:"mt-4",attrs:{active:!t.validName,color:"danger","vs-icon":"new_releases"}},[t._v("\n\t\t\t\tFields can not be empty please enter the data\n\t\t\t")])],1)]),l("template",{slot:"codeContainer"},[t._v('\n<template>\n    <div class="demo-alignment">\n      <vs-button @click="activePrompt = true" color="primary" type="border">Run prompt</vs-button>\n      <vs-button @click="activePrompt2 = true" color="primary" type="border">Run prompt inputs</vs-button>\n      <div class="op-block">Security Code: '+t._s("{{ val == null ? 'null' : val }}")+' </div>\n      <div class="op-block">\n        Name: '+t._s("{{ valMultipe.value1 }}")+" | Last Name: "+t._s("{{ valMultipe.value2 }}")+'\n      </div>\n\n    </div>\n\n    <vs-prompt\n      @vs-cancel="val=\'\'"\n      @vs-accept="acceptAlert"\n      @vs-close="close"\n      :vs-active.sync="activePrompt">\n      <div class="con-exemple-prompt">\n        <span>Enter the security code</span>\n      <vs-input placeholder="Code" vs-placeholder="Code" v-model="val" class="mt-3 w-full" />\n      </div>\n    </vs-prompt>\n\n    <vs-prompt\n      @vs-cancel="clearValMultiple"\n      @vs-accept="acceptAlert"\n      @vs-close="close"\n      :vs-is-valid="validName"\n      :vs-active.sync="activePrompt2">\n      <div class="con-exemple-prompt">\n        Enter your first and last name to <b>continue</b>.\n      <vs-input placeholder="Name" v-model="valMultipe.value1" class="mt-4 mb-2 w-full" />\n      <vs-input placeholder="Last Name" v-model="valMultipe.value2" class="w-full" />\n\n      <vs-alert :vs-active="!validName" color="danger" vs-icon="new_releases" >\n        Fields can not be empty please enter the data\n      </vs-alert>\n      </div>\n    </vs-prompt>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      activePrompt:false,\n      activePrompt2:false,\n      val:\'\',\n      valMultipe:{\n        value1:\'\',\n        value2:\'\'\n      },\n    }\n  },\n  computed:{\n    validName(){\n      return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)\n    }\n  },\n  methods:{\n    acceptAlert(){\n      this.clearValMultiple();\n      this.$vs.notify({\n        color:\'success\',\n        title:\'Accept Selected\',\n        text:\'Lorem ipsum dolor sit amet, consectetur\'\n      })\n    },\n    close(){\n      this.$vs.notify({\n        color:\'danger\',\n        title:\'Closed\',\n        text:\'You close a dialog!\'\n      })\n    },\n    clearValMultiple() {\n      this.valMultipe.value1 = "";\n      this.valMultipe.value2 = "";\n    }\n  }\n}\n<\/script>\n\t\t')])],2)},b=[],A={data:function(){return{activePrompt:!1,activePrompt2:!1,val:"",valMultipe:{value1:"",value2:""}}},computed:{validName:function(){return this.valMultipe.value1.length>0&&this.valMultipe.value2.length>0}},methods:{acceptAlert:function(){this.clearValMultiple(),this.$vs.notify({color:"success",title:"Accept Selected",text:"Lorem ipsum dolor sit amet, consectetur"})},close:function(){this.$vs.notify({color:"danger",title:"Closed",text:"You close a dialog!"})},clearValMultiple:function(){this.valMultipe.value1="",this.valMultipe.value2=""}}},k=A,_=Object(s["a"])(k,y,b,!1,null,null,null),C=_.exports,x={components:{DialogsAlert:v,DialogsConfirm:g,DialogsPrompt:C}},w=x,M=Object(s["a"])(w,n,a,!1,null,null,null);e["default"]=M.exports}}]);
//# sourceMappingURL=chunk-2d0c04c4.8e2557cf.js.map