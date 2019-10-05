(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b49d"],{beae:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pagination-demo"}},[n("pagination-default"),n("pagination-icon"),n("pagination-links-limit"),n("pagination-go-to"),n("pagination-color"),n("pagination-programmatic-inc-dec")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vx-card",{attrs:{title:"Default","code-toggler":""}},[n("p",[t._v("The pagination component consists of several elements, all of which are optional. So with no extra class, your pagination links will look as follow")]),n("div",{staticClass:"my-5"},[n("vs-pagination",{attrs:{total:40},model:{value:t.currentx,callback:function(e){t.currentx=e},expression:"currentx"}})],1),n("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vs-pagination :total="40" v-model="currentx"></vs-pagination>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    currentx: 14\n  })\n}\n<\/script>\n        ')])],2)},i=[],l={data:function(){return{currentx:14}}},c=l,s=n("2877"),u=Object(s["a"])(c,r,i,!1,null,null,null),p=u.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vx-card",{attrs:{title:"Icon","code-toggler":""}},[n("p",[t._v("To customize the previous and next page icons change the value of the prev-icon and prev-icon directives. By default, their values are respectively arrow_back and arrow_forward")]),n("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("p",[t._v("Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official "),n("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[t._v("Material Icons page")]),t._v(".")]),n("p",[t._v("FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.")])]),n("div",{staticClass:"my-5"},[n("vs-pagination",{attrs:{total:100,"prev-icon":"arrow_back","next-icon":"arrow_forward"},model:{value:t.currentx,callback:function(e){t.currentx=e},expression:"currentx"}})],1),n("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vs-pagination :total="100" v-model="currentx" prev-icon="arrow_back" next-icon="arrow_forward"></vs-pagination>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    currentx: 64\n  })\n}\n<\/script>\n        ')])],2)},d=[],m={data:function(){return{currentx:64}}},x=m,g=Object(s["a"])(x,v,d,!1,null,null,null),f=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vx-card",{attrs:{title:"Limit the amount of links shown","code-toggler":""}},[n("p",[t._v("By default Vuesax will show a maximum of 9 links. This default behaviour can be changed by setting the "),n("code",[t._v("max")]),t._v(" directive to a different integer value")]),n("vs-alert",{staticClass:"my-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("p",[t._v("The amount given to the "),n("code",[t._v("max")]),t._v(' directive should take into account the first and last pages plus the ellipses "..."')])]),n("vs-alert",{attrs:{icon:"warning",active:"true",color:"warning"}},[n("span",[t._v("Setting the "),n("code",[t._v("max")]),t._v(" directive to a value lesser then "),n("code",[t._v("5")]),t._v(" when the "),n("code",[t._v("total")]),t._v(" is greater then that will result in the pagination only showing the previous/next buttons as well as the first and last links")])]),n("div",{staticClass:"my-5"},[n("vs-pagination",{attrs:{total:30,max:13},model:{value:t.currentx,callback:function(e){t.currentx=e},expression:"currentx"}})],1),n("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vs-pagination :total="30" v-model="currentx" :max="13"></vs-pagination>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    currentx: 17\n  })\n}\n<\/script>\n        ')])],2)},h=[],w={data:function(){return{currentx:17}}},b=w,y=Object(s["a"])(b,_,h,!1,null,null,null),k=y.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vx-card",{attrs:{title:"GoTo","code-toggler":""}},[n("p",[t._v("The "),n("code",[t._v("goto")]),t._v(" directive will allow users to directly jump to a desired page")]),n("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("p",[t._v("If the value given is lower than "),n("strong",[t._v("1")]),t._v(" it will jump to page "),n("strong",[t._v("1")]),t._v(". However if the value is greater than total it will jump to the last page")])]),n("div",{staticClass:"mt-5"},[n("vs-pagination",{attrs:{total:20,goto:""},model:{value:t.currentx,callback:function(e){t.currentx=e},expression:"currentx"}})],1),n("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vs-pagination :total="20" v-model="currentx" goto></vs-pagination>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    currentx: 14\n  })\n}\n<\/script>\n        ')])],2)},j=[],P={data:function(){return{currentx:8}}},E=P,I=Object(s["a"])(E,C,j,!1,null,null,null),O=I.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vx-card",{attrs:{title:"Color","code-toggler":""}},[n("p",[t._v("You can change the color of the component with the property color, you can use the Main colors or RGB and HEX colors")]),n("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[n("span",[t._v("Only "),n("strong",[t._v("RGB")]),t._v(" and "),n("strong",[t._v("HEX")]),t._v(" colors are supported.")])]),n("div",{staticClass:"flex justify-center items-center mt-5"},[n("vs-pagination",{attrs:{color:t.colorx,total:20},model:{value:t.currentx,callback:function(e){t.currentx=e},expression:"currentx"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.colorx,expression:"colorx"}],staticClass:"input-color ml-4",attrs:{type:"color"},domProps:{value:t.colorx},on:{input:function(e){e.target.composing||(t.colorx=e.target.value)}}})],1),n("template",{slot:"codeContainer"},[t._v('\n<template>\n  <div class="flex justify-center items-center">\n      <vs-pagination :color="colorx" :total="20" v-model="currentx"></vs-pagination>\n      <input class="input-color ml-4" v-model="colorx" type="color">\n  </div>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    colorx: \'#f91f43\',\n    currentx: 7\n  })\n}\n<\/script>\n        ')])],2)},$=[],D={data:function(){return{colorx:"#f91f43",currentx:7}}},G=D,B=Object(s["a"])(G,T,$,!1,null,null,null),F=B.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vx-card",{attrs:{title:"Programmatic Inc/Dec","code-toggler":""}},[n("p",[t._v("You can also update page number from outside of pagination component.")]),n("div",{staticClass:"my-5"},[n("p",{staticClass:"mb-3"},[t._v("Current Page: "+t._s(t.currentx))]),n("vs-button",{on:{click:function(e){t.currentx++}}},[t._v("Increment")]),n("vs-button",{staticClass:"ml-4 mb-4",on:{click:function(e){t.currentx--}}},[t._v("Decrement")]),n("vs-pagination",{attrs:{total:20},model:{value:t.currentx,callback:function(e){t.currentx=e},expression:"currentx"}})],1),n("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vs-pagination :total="20" v-model="currentx"></vs-pagination>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    currentx: 5\n  })\n}\n<\/script>\n    ')])],2)},L=[],M={data:function(){return{currentx:5}}},S=M,Y=Object(s["a"])(S,H,L,!1,null,null,null),A=Y.exports,J={components:{PaginationDefault:p,PaginationIcon:f,PaginationLinksLimit:k,PaginationGoTo:O,PaginationProgrammaticIncDec:A,PaginationColor:F}},R=J,V=Object(s["a"])(R,a,o,!1,null,null,null);e["default"]=V.exports}}]);
//# sourceMappingURL=chunk-2d21b49d.06a5ad49.js.map