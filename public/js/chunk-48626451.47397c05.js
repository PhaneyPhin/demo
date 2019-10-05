(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48626451"],{"390e":function(s,e,t){},"3f06":function(s,e,t){"use strict";var n=t("390e"),v=t.n(n);v.a},8983:function(s,e,t){"use strict";t.r(e);var n=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{attrs:{id:"vuesax-grid-demo"}},[t("grid-overview"),t("grid-design-concept"),t("grid-column-offset"),t("grid-flex-layout"),t("grid-flex-alignment"),t("grid-flex-order"),t("grid-responsive-layout")],1)},v=[],l=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("vx-card",{attrs:{title:"Overview"}},[t("p",[s._v("Following is a brief look at how it works:")]),t("vx-list",{staticClass:"mt-5",attrs:{list:s.list}})],1)},r=[],i={data:function(){return{list:["Establish a set of column in the horizontal space defined by row (abbreviated col)","Your content elements should be placed directly in the col, and only col should be placed directly in row","The column grid system is a value from 1-12 to represent its range spans. For example, three columns of equal width can be created by .col-4 (33.3%)","If the sum of col spans in a row are more than 12, then the overflowing col as a whole will start a new line arrangement"]}}},o=i,c=t("2877"),a=Object(c["a"])(o,l,r,!1,null,null,null),f=a.exports,d=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("vx-card",{attrs:{title:"Design Concept","code-toggler":""}},[t("p",[s._v("With the directive "),t("code",[s._v("vs-w")]),s._v(" define the width of the column ("),t("code",[s._v("vs-col")]),s._v(") its value is "),t("strong",[s._v("1-12")]),s._v(" an example of sizes would be: "),t("strong",[s._v("12 = 100%, 6 = 50%, 4 = 25%")])]),t("div",{staticClass:"grid-demo__layout-container"},[t("vs-row",[t("vs-col",{staticClass:"p-4 sm:p-2",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"12"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("100%")])])],1),t("vs-row",s._l(2,function(e,n){return t("vs-col",{key:n,staticClass:"p-4 sm:p-2",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"6"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("50%")])])}),1),t("vs-row",s._l(3,function(e,n){return t("vs-col",{key:n,staticClass:"p-4 sm:p-2",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"4"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("33.3%")])])}),1),t("vs-row",s._l(4,function(e,n){return t("vs-col",{key:n,staticClass:"p-4 sm:p-2",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"3"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("25%")])])}),1),t("vs-row",s._l(6,function(e,n){return t("vs-col",{key:n,staticClass:"p-4 sm:p-2",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"2"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("16.6%")])])}),1),t("vs-row",s._l(12,function(e,n){return t("vs-col",{key:n,staticClass:"p-4 sm:p-2",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"1"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("8.3%")])])}),1)],1),t("template",{slot:"codeContainer"},[s._v('\n<vs-row>\n  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">\n    100%\n  </vs-col>\n</vs-row>\n\n<vs-row>\n  <vs-col :key="index" v-for="col,index in 2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">\n    50%\n  </vs-col>\n</vs-row>\n\n<vs-row>\n  <vs-col :key="index" v-for="col,index in 3" v-tooltip="\'col - 4\'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">\n    33.3%\n  </vs-col>\n</vs-row>\n\n<vs-row>\n  <vs-col :key="index" v-for="col,index in 4" v-tooltip="\'col - 3\'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">\n    25%\n  </vs-col>\n</vs-row>\n\n<vs-row>\n  <vs-col :key="index" v-for="col,index in 6" v-tooltip="\'col - 2\'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">\n    16.6%\n  </vs-col>\n</vs-row>\n\n<vs-row>\n  <vs-col :key="index" v-for="col,index in 12" v-tooltip="\'col - 1\'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">\n    8.3%\n  </vs-col>\n</vs-row>\n        ')])],2)},p=[],u={},y=Object(c["a"])(u,d,p,!1,null,null,null),x=y.exports,w=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("vx-card",{attrs:{title:"Column offset","code-toggler":""}},[t("p",[s._v("To give a distance with respect to the left we have the directive vs-offset that with the same measures 1-12 we add the space specified a serious example "),t("code",[s._v("12 = 100%")]),s._v(", "),t("code",[s._v("6 = 50%")]),s._v(", "),t("code",[s._v("4 = 25%")])]),t("div",{staticClass:"grid-demo__layout-container"},[t("vs-row",{attrs:{"vs-w":"12"}},[t("vs-col",{staticClass:"sm:p-2 p-4",attrs:{"vs-offset":"5","vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"6"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("offset - 6")])])],1),t("vs-row",[t("vs-col",{staticClass:"sm:p-2 p-4",attrs:{"vs-offset":"0","vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"2"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("offset - 2")])])],1),t("vs-row",[t("vs-col",{staticClass:"sm:p-2 p-4",attrs:{"vs-offset":"2","vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"8"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("offset - 8")])])],1),t("vs-row",[t("vs-col",{staticClass:"sm:p-2 p-4",attrs:{"vs-offset":"10","vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"2"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("offset - 7")])])],1),t("vs-row",[t("vs-col",{staticClass:"sm:p-2 p-4",attrs:{"vs-offset":"4","vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"4"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("offset - 4")])])],1)],1),t("template",{slot:"codeContainer"},[s._v('\n<vs-row vs-w="12">\n  <vs-col vs-offset="5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">\n    offset - 6\n  </vs-col>\n</vs-row>\n\n<vs-row>\n  <vs-col vs-offset="0" v-tooltip="\'col - 2\'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">\n    offset - 2\n  </vs-col>\n</vs-row>\n\n<vs-row>\n  <vs-col vs-offset="2" v-tooltip="\'col - 8\'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">\n    offset - 8\n  </vs-col>\n</vs-row>\n\n<vs-row>\n  <vs-col vs-offset="10" v-tooltip="\'col - 1\'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">\n    offset - 7\n  </vs-col>\n</vs-row>\n\n<vs-row>\n  <vs-col vs-offset="4" v-tooltip="\'col - 4\'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">\n    offset - 4\n  </vs-col>\n</vs-row>\n        ')])],2)},g=[],m={},_=Object(c["a"])(m,w,g,!1,null,null,null),h=_.exports,j=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("vx-card",{attrs:{title:"Flex layout","code-toggler":""}},[t("p",[s._v("If we need to align the elements horizontally, use the "),t("code",[s._v("vs-justify")]),s._v(" directive that uses CSS attributes as parameters: "),t("code",[s._v("flex-start")]),s._v(", "),t("code",[s._v("center")]),s._v(", "),t("code",[s._v("flex-end")]),s._v(", "),t("code",[s._v("space-around")]),s._v(", "),t("code",[s._v("space-between")])]),t("div",{staticClass:"grid-demo__layout-container"},[t("vs-row",{attrs:{"vs-w":"12"}},s._l(3,function(e,n){return t("vs-col",{key:n,staticClass:"sm:p-0 p-4 text-center",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"2"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("default")])])}),1),t("vs-row",{attrs:{"vs-type":"flex","vs-justify":"center"}},s._l(3,function(e,n){return t("vs-col",{key:n,staticClass:"sm:p-0 p-4 text-center",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"2"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("center")])])}),1),t("vs-row",{attrs:{"vs-type":"flex","vs-justify":"flex-end"}},s._l(3,function(e,n){return t("vs-col",{key:n,staticClass:"sm:p-0 p-4 text-center",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"2"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("flex-end")])])}),1),t("vs-row",{attrs:{"vs-type":"flex","vs-justify":"space-around"}},s._l(3,function(e,n){return t("vs-col",{key:n,staticClass:"sm:p-0 p-4 text-center",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"2"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("space-around")])])}),1),t("vs-row",{attrs:{"vs-type":"flex","vs-justify":"space-between"}},s._l(3,function(e,n){return t("vs-col",{key:n,staticClass:"sm:p-0 p-4 text-center",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"2"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("space-between")])])}),1)],1),t("template",{slot:"codeContainer"},[s._v('\n<vs-row vs-w="12">\n  <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">\n    default\n  </vs-col>\n</vs-row>\n\n<vs-row vs-type="flex" vs-justify="center">\n  <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">\n    center\n  </vs-col>\n</vs-row>\n\n<vs-row vs-type="flex" vs-justify="flex-end">\n  <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">\n    flex-end\n  </vs-col>\n</vs-row>\n\n\n<vs-row vs-type="flex" vs-justify="space-around">\n  <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">\n    space-around\n  </vs-col>\n</vs-row>\n\n<vs-row vs-type="flex" vs-justify="space-between">\n  <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">\n    space-between\n  </vs-col>\n</vs-row>\n        ')])],2)},C=[],b={},k=Object(c["a"])(b,j,C,!1,null,null,null),O=k.exports,E=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("vx-card",{attrs:{title:"Flex alignment"}},[t("p",[s._v("To align the elements vertically we have the directive "),t("code",[s._v("vs-align")]),s._v(" that as parameters the same known values of css: "),t("code",[s._v("center")]),s._v(", "),t("code",[s._v("flex-end")]),s._v(", "),t("code",[s._v("flex-start")]),s._v(".")]),t("div",{staticClass:"mt-5"},[t("flex-alignment-top"),t("flex-alignment-center"),t("flex-alignment-bottom")],1)])},F=[],$=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("vx-card",{attrs:{title:"Align Top","code-toggler":"","no-shadow":"","card-border":""}},[t("div",{staticClass:"grid-demo__layout-container--block"},[t("vs-row",{attrs:{"vs-align":"flex-start","vs-type":"flex","vs-justify":"center","vs-w":"12"}},s._l(4,function(e,n){return t("vs-col",{key:n,staticClass:"sm:p-2 p-4",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"2"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("col - 3")])])}),1)],1),t("template",{slot:"codeContainer"},[s._v('\n<div class="grid-layout-container alignment-block">\n  <vs-row\n    vs-align="flex-start"\n    vs-type="flex" vs-justify="center" vs-w="12">\n    <vs-col :key="index" v-for="col,index in 4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">\n      col - 3\n    </vs-col>\n  </vs-row>\n</div>\n        ')])],2)},A=[],G={},T=Object(c["a"])(G,$,A,!1,null,null,null),z=T.exports,I=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("vx-card",{attrs:{title:"Align Center","code-toggler":"","no-shadow":"","card-border":""}},[t("div",{staticClass:"grid-demo__layout-container--block"},[t("vs-row",{attrs:{"vs-align":"center","vs-type":"flex","vs-justify":"center","vs-w":"12"}},s._l(4,function(e,n){return t("vs-col",{key:n,staticClass:"sm:p-2 p-4",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"2"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("col - 3")])])}),1)],1),t("template",{slot:"codeContainer"},[s._v('\n<div class="grid-layout-container alignment-block">\n  <vs-row\n    vs-align="center"\n    vs-type="flex" vs-justify="center" vs-w="12">\n    <vs-col :key="index" v-for="col,index in 4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">\n      col - 3\n    </vs-col>\n  </vs-row>\n</div>\n        ')])],2)},B=[],D={},J=Object(c["a"])(D,I,B,!1,null,null,null),L=J.exports,R=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("vx-card",{attrs:{title:"Align Bottom","code-toggler":"","no-shadow":"","card-border":""}},[t("div",{staticClass:"grid-demo__layout-container--block"},[t("vs-row",{attrs:{"vs-align":"flex-end","vs-type":"flex","vs-justify":"center","vs-w":"12"}},s._l(4,function(e,n){return t("vs-col",{key:n,staticClass:"sm:p-2 p-4",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"2"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("col - 3")])])}),1)],1),t("template",{slot:"codeContainer"},[s._v('\n<div class="grid-layout-container alignment-block">\n  <vs-row\n    vs-align="flex-end"\n    vs-type="flex" vs-justify="center" vs-w="12">\n    <vs-col :key="index" v-for="col,index in 4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">\n      col - 3\n    </vs-col>\n  </vs-row>\n</div>\n        ')])],2)},S=[],q={},W=Object(c["a"])(q,R,S,!1,null,null,null),Y=W.exports,H={components:{FlexAlignmentTop:z,FlexAlignmentCenter:L,FlexAlignmentBottom:Y}},K=H,M=Object(c["a"])(K,E,F,!1,null,null,null),N=M.exports,P=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("vx-card",{attrs:{title:"Flex Order","code-toggler":""}},[t("p",[s._v("In some cases, we want to order the elements to our liking. To do this, use the directive "),t("code",[s._v("vs-order")]),s._v(" that has a parameter you just have to pass the number in which we want to order the "),t("code",[s._v("vs-col")]),s._v(" with respect to his brothers "),t("code",[s._v("vs-col")])]),t("div",{staticClass:"grid-demo__layout-container"},[t("vs-row",{attrs:{"vs-type":"flex"}},[t("vs-col",{staticClass:"sm:p-2 p-4",attrs:{"vs-order":"3","vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"3"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("1 / order ")]),t("span",[s._v("3")])]),t("vs-col",{staticClass:"sm:p-2 p-4",attrs:{"vs-order":"1","vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"3"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("2 / order ")]),t("span",[s._v("1")])]),t("vs-col",{staticClass:"sm:p-2 p-4",attrs:{"vs-order":"4","vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"3"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("3 / order ")]),t("span",[s._v("4")])]),t("vs-col",{staticClass:"sm:p-2 p-4",attrs:{"vs-order":"2","vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"3"}},[t("span",{staticClass:"sm:inline hidden"},[s._v("4 / order ")]),t("span",[s._v("2")])])],1)],1),t("template",{slot:"codeContainer"},[s._v('\n<vs-row vs-type="flex">\n  <vs-col\n    vs-order="3"\n    vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">\n      1 / order 3\n  </vs-col>\n  <vs-col\n    vs-order="1"\n    vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">\n      2 / order 1\n  </vs-col>\n  <vs-col\n    vs-order="4"\n    vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">\n      3 / order 4\n  </vs-col>\n  <vs-col\n    vs-order="2"\n    vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">\n      4 / order 2\n  </vs-col>\n</vs-row>\n        ')])],2)},Q=[],U={},V=Object(c["a"])(U,P,Q,!1,null,null,null),X=V.exports,Z=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("vx-card",{attrs:{title:"Responsive layout","code-toggler":""}},[t("p",{staticClass:"mb-5"},[s._v("There are some measures that can only be added in a specific size of the device, the directives are:")]),t("vx-list",{attrs:{list:s.list}}),t("div",{staticClass:"grid-demo__layout-container"},[t("vs-row",{attrs:{"vs-w":"12"}},[t("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-lg":"2","vs-sm":"4","vs-xs":"12"}},[s._v('\n                    vs-lg="2" ')]),t("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-lg":"8","vs-sm":"4","vs-xs":"12"}},[s._v('\n                    vs-lg="8" ')]),t("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-lg":"2","vs-sm":"4","vs-xs":"12"}},[s._v('\n                    vs-lg="2" ')])],1)],1),t("template",{slot:"codeContainer"},[s._v('\n\n<vs-row vs-w="12">\n  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12" >\n    vs-lg="2" \x3c!-- vs-sm="4" vs-xs="12" --\x3e\n  </vs-col>\n  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="4" vs-xs="12">\n    vs-lg="8" \x3c!-- vs-sm="4" vs-xs="12" --\x3e\n  </vs-col>\n  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12">\n    vs-lg="2" \x3c!-- vs-sm="4" vs-xs="12" --\x3e\n  </vs-col>\n</vs-row>\n\n        ')])],2)},ss=[],es={data:function(){return{list:["<code>vs-lg</code> : is for large devices such as desktops or laptops (large)","<code>vs-sm</code> : is for medium devices such as laptops or tablets","<code>vs-xs</code> : is for small devices such as tablets (small) and phones"]}}},ts=es,ns=Object(c["a"])(ts,Z,ss,!1,null,null,null),vs=ns.exports,ls={components:{GridOverview:f,GridDesignConcept:x,GridColumnOffset:h,GridFlexLayout:O,GridFlexAlignment:N,GridFlexOrder:X,GridResponsiveLayout:vs}},rs=ls,is=(t("3f06"),Object(c["a"])(rs,n,v,!1,null,null,null));e["default"]=is.exports}}]);
//# sourceMappingURL=chunk-48626451.47397c05.js.map