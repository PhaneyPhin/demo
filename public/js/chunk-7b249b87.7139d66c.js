(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b249b87"],{"0360":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"dashboard-analytics"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full lg:w-1/2 mb-base"},[s("vx-card",{staticClass:"text-center bg-primary-gradient greet-user",attrs:{slot:"no-body"},slot:"no-body"},[s("img",{staticClass:"decore-left",attrs:{src:e("8ee6"),alt:"Decore Left",width:"200"}}),s("img",{staticClass:"decore-right",attrs:{src:e("ee15"),alt:"Decore Right",width:"175"}}),s("feather-icon",{staticClass:"p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow",attrs:{icon:"AwardIcon",svgClasses:"h-8 w-8"}}),s("h1",{staticClass:"mb-6 text-white"},[t._v("Congratulations John,")]),s("p",{staticClass:"xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white"},[t._v("You have done "),s("strong",[t._v("57.6%")]),t._v(" more sales today. Check your new badge in your profile.")])],1)],1),s("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[s("statistics-card-line",{attrs:{icon:"UsersIcon",statistic:"92.6k",statisticTitle:"Subscribers Gained",chartData:t.analyticsData.subscribersGained,type:"area"}})],1),s("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[s("statistics-card-line",{attrs:{icon:"ShoppingBagIcon",statistic:"97.5K",statisticTitle:"Orders Received",chartData:t.analyticsData.ordersRecevied,color:"warning",type:"area"}})],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full md:w-1/2 mb-base"},[s("vx-card",[s("div",{staticClass:"vx-row flex-col-reverse lg:flex-row"},[s("div",{staticClass:"vx-col w-full lg:w-1/2 xl:w-1/2 flex flex-col justify-between"},[s("div",[s("h2",{staticClass:"mb-1 font-bold"},[t._v("2.7K")]),s("span",{staticClass:"font-medium"},[t._v("Avg Sessions")]),s("p",{staticClass:"mt-2 text-xl font-medium"},[s("span",{staticClass:"text-success"},[t._v("+5.2%")]),t._v(" vs last 7 days")])]),s("vs-button",{staticClass:"shadow-md w-full lg:mt-0 mt-4",attrs:{"icon-pack":"feather",icon:"icon-chevrons-right","icon-after":""}},[t._v("View Details")])],1),s("div",{staticClass:"vx-col w-full lg:w-1/2 xl:w-1/2 flex flex-col lg:mb-0 mb-base"},[s("change-time-duration-dropdown",{staticClass:"self-end"}),s("vue-apex-charts",{attrs:{type:"bar",height:"200",options:t.analyticsData.salesBar.chartOptions,series:t.analyticsData.salesBar.series}})],1)]),s("vs-divider",{staticClass:"my-6"}),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-1/2 mb-3"},[s("p",[t._v("Goal: $100000")]),s("vs-progress",{staticClass:"block mt-1",attrs:{percent:50,color:"primary"}})],1),s("div",{staticClass:"vx-col w-1/2 mb-3"},[s("p",[t._v("Users: 100K")]),s("vs-progress",{staticClass:"block mt-1",attrs:{percent:60,color:"warning"}})],1),s("div",{staticClass:"vx-col w-1/2 mb-3"},[s("p",[t._v("Retention: 90%")]),s("vs-progress",{staticClass:"block mt-1",attrs:{percent:70,color:"danger"}})],1),s("div",{staticClass:"vx-col w-1/2 mb-3"},[s("p",[t._v("Duration: 1yr")]),s("vs-progress",{staticClass:"block mt-1",attrs:{percent:90,color:"success"}})],1)])],1)],1),s("div",{staticClass:"vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base"},[s("vx-card",{attrs:{title:"Support Tracker"}},[s("template",{slot:"actions"},[s("change-time-duration-dropdown")],1),s("div",{attrs:{slot:"no-body"},slot:"no-body"},[s("div",{staticClass:"vx-row text-center"},[s("div",{staticClass:"vx-col sm:w-1/5 w-full flex flex-col justify-between mb-4"},[s("div",{staticClass:"ml-6 mt-6"},[s("h1",{staticClass:"font-bold text-5xl"},[t._v("163")]),s("small",[t._v("Tickets")])])]),s("div",{staticClass:"vx-col sm:w-4/5 justify-center mx-auto"},[s("vue-apex-charts",{attrs:{type:"radialBar",height:"250",options:t.analyticsData.supportTrackerRadialBar.chartOptions,series:t.analyticsData.supportTrackerRadialBar.series}})],1)]),s("div",{staticClass:"flex flex-row justify-between px-8 pb-4"},[s("p",{staticClass:"text-center"},[s("span",{staticClass:"block"},[t._v("New Tickets")]),s("span",{staticClass:"text-4xl"},[t._v("29")])]),s("p",{staticClass:"text-center"},[s("span",{staticClass:"block"},[t._v("Open Tickets")]),s("span",{staticClass:"text-4xl"},[t._v("63")])]),s("p",{staticClass:"text-center"},[s("span",{staticClass:"block"},[t._v("Response Time")]),s("span",{staticClass:"text-4xl"},[t._v("1d")])])])])],2)],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base"},[s("vx-card",{attrs:{title:"Product Orders"}},[s("template",{slot:"actions"},[s("change-time-duration-dropdown")],1),s("div",{attrs:{slot:"no-body"},slot:"no-body"},[s("vue-apex-charts",{attrs:{type:"radialBar",height:"370",options:t.analyticsData.productOrdersRadialBar.chartOptions,series:t.analyticsData.productOrdersRadialBar.series}})],1),s("ul",t._l(t.analyticsData.productOrdersRadialBar.analyticsData,function(a){return s("li",{key:a.orderType,staticClass:"flex mb-3 justify-between"},[s("span",{staticClass:"flex items-center"},[s("span",{staticClass:"inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid",class:"border-"+a.color}),s("span",{staticClass:"font-semibold"},[t._v(t._s(a.orderType))])]),s("span",[t._v(t._s(a.counts))])])}),0)],2)],1),s("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base"},[s("vx-card",{attrs:{title:"Sales Stats",subtitle:"Last 6 Months"}},[s("template",{slot:"actions"},[s("feather-icon",{attrs:{icon:"MoreVerticalIcon",svgClasses:"w-6 h-6 text-grey"}})],1),s("div",{staticClass:"flex"},[s("span",{staticClass:"flex items-center"},[s("div",{staticClass:"h-3 w-3 rounded-full mr-1 bg-primary"}),s("span",[t._v("Sales")])]),s("span",{staticClass:"flex items-center ml-4"},[s("div",{staticClass:"h-3 w-3 rounded-full mr-1 bg-success"}),s("span",[t._v("Visits")])])]),s("div",{attrs:{slot:"no-body-bottom"},slot:"no-body-bottom"},[s("vue-apex-charts",{attrs:{type:"radar",height:"400",options:t.analyticsData.statisticsRadar.chartOptions,series:t.analyticsData.statisticsRadar.series}})],1)],2)],1),s("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base"},[s("vx-card",{attrs:{title:"Activity Timeline"}},[s("ul",{staticClass:"activity-timeline"},[s("li",[s("div",{staticClass:"timeline-icon bg-primary"},[s("feather-icon",{attrs:{icon:"PlusIcon",svgClasses:"text-white stroke-current w-5 h-5"}})],1),s("div",{staticClass:"timeline-info"},[s("p",{staticClass:"font-semibold"},[t._v("Client Meeting")]),s("span",{staticClass:"activity-desc"},[t._v("Bonbon macaroon jelly beans gummi bears jelly lollipop apple")])]),s("small",{staticClass:"text-grey activity-e-time"},[t._v("25 mins ago")])]),s("li",[s("div",{staticClass:"timeline-icon bg-warning"},[s("feather-icon",{attrs:{icon:"AlertCircleIcon",svgClasses:"text-white stroke-current w-5 h-5"}})],1),s("div",{staticClass:"timeline-info"},[s("p",{staticClass:"font-semibold"},[t._v("Email Newsletter")]),s("span",{staticClass:"activity-desc"},[t._v("Cupcake gummi bears soufflé caramels candy")])]),s("small",{staticClass:"text-grey activity-e-time"},[t._v("15 days ago")])]),s("li",[s("div",{staticClass:"timeline-icon bg-danger"},[s("feather-icon",{attrs:{icon:"CheckIcon",svgClasses:"text-white stroke-current w-5 h-5"}})],1),s("div",{staticClass:"timeline-info"},[s("p",{staticClass:"font-semibold"},[t._v("Plan Webinar")]),s("span",{staticClass:"activity-desc"},[t._v("Candy ice cream cake. Halvah gummi bears")])]),s("small",{staticClass:"text-grey activity-e-time"},[t._v("20 days ago")])]),s("li",[s("div",{staticClass:"timeline-icon bg-success"},[s("feather-icon",{attrs:{icon:"CheckIcon",svgClasses:"text-white stroke-current w-5 h-5"}})],1),s("div",{staticClass:"timeline-info"},[s("p",{staticClass:"font-semibold"},[t._v("Launch Website")]),s("span",{staticClass:"activity-desc"},[t._v("Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.")])]),s("small",{staticClass:"text-grey activity-e-time"},[t._v("25 days ago")])]),s("li",[s("div",{staticClass:"timeline-icon bg-primary"},[s("feather-icon",{attrs:{icon:"CheckIcon",svgClasses:"text-white stroke-current w-5 h-5"}})],1),s("div",{staticClass:"timeline-info"},[s("p",{staticClass:"font-semibold"},[t._v("Marketing")]),s("span",{staticClass:"activity-desc"},[t._v("Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.")])]),s("small",{staticClass:"text-grey activity-e-time"},[t._v("28 days ago")])])])])],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vx-card",{attrs:{title:"Dispatched Orders"}},[s("div",{staticClass:"mt-4",attrs:{slot:"no-body"},slot:"no-body"},[s("vs-table",{attrs:{data:t.users},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.data;return t._l(r,function(a,o){return s("vs-tr",{key:o},[s("vs-td",{attrs:{data:r[o].orderNo}},[s("span",[t._v("#"+t._s(r[o].orderNo))])]),s("vs-td",{attrs:{data:r[o].status}},[s("span",{staticClass:"flex items-center px-2 py-1 rounded"},[s("div",{staticClass:"h-3 w-3 rounded-full mr-2",class:"bg-"+r[o].statusColor}),t._v(t._s(r[o].status))])]),s("vs-td",{attrs:{data:r[o].orderNo}},[s("ul",{staticClass:"users-liked user-list"},t._l(r[o].usersLiked,function(t,a){return s("li",{key:a},[s("vx-tooltip",{attrs:{text:t.name,position:"bottom"}},[s("vs-avatar",{staticClass:"border-2 border-white border-solid -m-1",attrs:{src:e("60db")("./"+t.img),size:"30px"}})],1)],1)}),0)]),s("vs-td",{attrs:{data:r[o].orderNo}},[s("span",[t._v(t._s(r[o].location))])]),s("vs-td",{attrs:{data:r[o].orderNo}},[s("span",[t._v(t._s(r[o].distance))]),s("vs-progress",{attrs:{percent:r[o].distPercent,color:r[o].statusColor}})],1),s("vs-td",{attrs:{data:r[o].orderNo}},[s("span",[t._v(t._s(r[o].startDate))])]),s("vs-td",{attrs:{data:r[o].orderNo}},[s("span",[t._v(t._s(r[o].estDelDate))])])],1)})}}])},[s("template",{slot:"thead"},[s("vs-th",[t._v("ORDER NO.")]),s("vs-th",[t._v("STATUS")]),s("vs-th",[t._v("OPERATORS")]),s("vs-th",[t._v("LOCATION")]),s("vs-th",[t._v("DISTANCE")]),s("vs-th",[t._v("START DATE")]),s("vs-th",[t._v("EST DELIVERY DATE")])],1)],2)],1)])],1)])])},r=[],o=e("1321"),i=e.n(o),n=e("43ca"),l=e("da24"),c=e("5f88"),d={data:function(){return{analyticsData:l["a"],isImp:!1,navbarSearchAndPinList:this.$store.state.navbarSearchAndPinList,show:!1,items:[1,2,3,4,5,6,7,8,9],nextNum:10,tableList:["vs-th: Component","vs-tr: Component","vs-td: Component","thread: Slot","tbody: Slot","header: Slot"],users:[{orderNo:879985,status:"Moving",statusColor:"success",operator:"Cinar Knowles",operatorImg:"avatar-s-2.png",usersLiked:[{name:"Vennie Mostowy",img:"avatar-s-5.png"},{name:"Elicia Rieske",img:"avatar-s-7.png"},{name:"Julee Rossignol",img:"avatar-s-10.png"},{name:"Darcey Nooner",img:"avatar-s-8.png"}],location:"Anniston, Alabama",distance:"130 km",distPercent:80,startDate:"14:58 26/07/2018",estDelDate:"28/07/2018"},{orderNo:156897,status:"Pending",statusColor:"warning",operator:"Britany Ryder",operatorImg:"avatar-s-4.png",usersLiked:[{name:"Trina Lynes",img:"avatar-s-1.png"},{name:"Lilian Nenez",img:"avatar-s-2.png"},{name:"Alberto Glotzbach",img:"avatar-s-3.png"}],location:"Cordova, Alaska",distance:"234 km",distPercent:60,startDate:"14:58 26/07/2018",estDelDate:"28/07/2018"},{orderNo:568975,status:"Moving",statusColor:"success",operator:"Kishan Ashton",operatorImg:"avatar-s-1.png",usersLiked:[{name:"Lai Lewandowski",img:"avatar-s-6.png"},{name:"Elicia Rieske",img:"avatar-s-7.png"},{name:"Darcey Nooner",img:"avatar-s-8.png"},{name:"Julee Rossignol",img:"avatar-s-10.png"},{name:"Jeffrey Gerondale",img:"avatar-s-9.png"}],location:"Florence, Alabama",distance:"168 km",distPercent:70,startDate:"14:58 26/07/2018",estDelDate:"28/07/2018"},{orderNo:245689,status:"Canceled",statusColor:"danger",operator:"Anabella Elliott",operatorImg:"avatar-s-6.png",usersLiked:[{name:"Vennie Mostowy",img:"avatar-s-5.png"},{name:"Elicia Rieske",img:"avatar-s-7.png"}],location:"Clifton, Arizona",distance:"125 km",distPercent:95,startDate:"14:58 26/07/2018",estDelDate:"28/07/2018"}]}},components:{VueApexCharts:i.a,StatisticsCardLine:n["a"],ChangeTimeDurationDropdown:c["a"]}},p=d,g=(e("47f6"),e("2877")),h=Object(g["a"])(p,s,r,!1,null,null,null);a["default"]=h.exports},"040a":function(t,a,e){t.exports=e.p+"img/avatar-s-10.7be10c57.png"},"126e":function(t,a,e){t.exports=e.p+"img/avatar-s-8.2579bd6d.png"},"1eb1":function(t,a,e){t.exports=e.p+"img/avatar-s-7.9241b5d6.png"},"26ff":function(t,a,e){t.exports=e.p+"img/avatar-s-1.8edbcded.png"},"42b1":function(t,a,e){t.exports=e.p+"img/avatar-s-16.88e40556.png"},"43ca":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("vx-card",{staticClass:"overflow-hidden"},[e("div",{attrs:{slot:"no-body"},slot:"no-body"},[e("div",{staticClass:"p-6 pb-0",class:{"flex justify-between flex-row-reverse items-center":t.iconRight}},[e("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+t.color,{"mb-4":!t.iconRight}],style:{background:"rgba(var(--vs-"+t.color+"),.15)"},attrs:{icon:t.icon}}),e("div",[e("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t.statistic))]),e("span",[t._v(t._s(t.statisticTitle))])])],1),e("div",{staticClass:"line-area-chart",attrs:{id:t.chartData.id}},[e("vue-apex-charts",{ref:"apexChart",attrs:{type:t.type,height:"100",width:"100%",options:t.chartData.chartOptions,series:t.chartData.series}})],1)])])},r=[],o=(e("6b54"),e("28a5"),e("c5f6"),e("1321")),i=e.n(o),n={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},chartData:{type:Object,required:!0},color:{type:String,default:"primary"},chartType:{type:String,default:"line-chart"},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex()}}})}},computed:{themePrimaryColor:function(){return this.$store.state.themePrimaryColor}},methods:{getHex:function(){var t=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(this.color));return t=t.split(","),"#"+((1<<24)+(Number(t[0])<<16)+(Number(t[1])<<8)+Number(t[2])).toString(16).slice(1)}},components:{VueApexCharts:i.a},created:function(){"area"==this.type&&(this.chartData.chartOptions["theme"]={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}})}},l=n,c=e("2877"),d=Object(c["a"])(l,s,r,!1,null,null,null);a["a"]=d.exports},"47f6":function(t,a,e){"use strict";var s=e("84e8"),r=e.n(s);r.a},"5c35":function(t,a,e){t.exports=e.p+"img/avatar-s-3.a718f09a.png"},"5f88":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[e("small",{staticClass:"flex cursor-pointer"},[t._v("Last 7 days "),e("feather-icon",{staticClass:"ml-1",attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),e("vs-dropdown-menu",{staticClass:"w-32"},[e("vs-dropdown-item",{on:{click:function(a){return t.$emit("timeDurationChanged","last-28-days")}}},[t._v("Last 28 days")]),e("vs-dropdown-item",{on:{click:function(a){return t.$emit("timeDurationChanged","last-month")}}},[t._v("Last Month")]),e("vs-dropdown-item",{on:{click:function(a){return t.$emit("timeDurationChanged","last-year")}}},[t._v("Last Year")])],1)],1)},r=[],o=e("2877"),i={},n=Object(o["a"])(i,s,r,!1,null,null,null);a["a"]=n.exports},"60db":function(t,a,e){var s={"./avatar-s-1.png":"26ff","./avatar-s-10.png":"040a","./avatar-s-11.png":"ce9f","./avatar-s-12.png":"9872","./avatar-s-13.png":"7153","./avatar-s-14.png":"eb36","./avatar-s-15.png":"71a4","./avatar-s-16.png":"42b1","./avatar-s-17.png":"60ff","./avatar-s-18.png":"db71","./avatar-s-19.png":"98bf","./avatar-s-2.png":"b054","./avatar-s-20.png":"6302","./avatar-s-21.png":"c7cc","./avatar-s-22.png":"915d","./avatar-s-23.png":"b2fc","./avatar-s-24.png":"dba0","./avatar-s-25.png":"7613","./avatar-s-26.png":"d76a","./avatar-s-3.png":"5c35","./avatar-s-4.png":"d864c","./avatar-s-5.png":"8002","./avatar-s-6.png":"fd76","./avatar-s-7.png":"1eb1","./avatar-s-8.png":"126e","./avatar-s-9.png":"fdf2"};function r(t){var a=o(t);return e(a)}function o(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=o,t.exports=r,r.id="60db"},"60ff":function(t,a,e){t.exports=e.p+"img/avatar-s-17.a92e96b2.png"},6302:function(t,a,e){t.exports=e.p+"img/avatar-s-20.aa019f1d.png"},7153:function(t,a,e){t.exports=e.p+"img/avatar-s-13.1875411a.png"},"71a4":function(t,a,e){t.exports=e.p+"img/avatar-s-15.30fed846.png"},7613:function(t,a,e){t.exports=e.p+"img/avatar-s-25.d1c0b48d.png"},8002:function(t,a,e){t.exports=e.p+"img/avatar-s-5.73b9c8f8.png"},"84e8":function(t,a,e){},"8ee6":function(t,a,e){t.exports=e.p+"img/decore-left.2d9d23e0.png"},"915d":function(t,a,e){t.exports=e.p+"img/avatar-s-22.350e5390.png"},9872:function(t,a,e){t.exports=e.p+"img/avatar-s-12.cec148fe.png"},"98bf":function(t,a,e){t.exports=e.p+"img/avatar-s-19.908c8b78.png"},b054:function(t,a,e){t.exports=e.p+"img/avatar-s-2.93c7a17a.png"},b2fc:function(t,a,e){t.exports=e.p+"img/avatar-s-23.5e55f949.png"},c7cc:function(t,a,e){t.exports=e.p+"img/avatar-s-21.5aee13d8.png"},ce9f:function(t,a,e){t.exports=e.p+"img/avatar-s-11.51a23c07.png"},d76a:function(t,a,e){t.exports=e.p+"img/avatar-s-26.d1c0b48d.png"},d864c:function(t,a,e){t.exports=e.p+"img/avatar-s-4.88863dbb.png"},da24:function(t,a,e){"use strict";a["a"]={siteTraffic:{series:[{name:"Traffic Rate",data:[150,200,125,225,200,250]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#7367F0"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#A9A2F6"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},activeUsers:{series:[{name:"Active Users",data:[750,1e3,900,1250,1e3,1200,1100]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#28C76F"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#55DD92"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},newsletter:{series:[{name:"Newsletter",data:[365,390,365,400,375,400]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#FF9F43"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#ffc085"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},revenueComparisonLine:{series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],chartOptions:{chart:{toolbar:{show:!1}},stroke:{curve:"smooth",dashArray:[0,8],width:[4,2]},grid:{borderColor:"#e7e7e7"},legend:{show:!1},colors:["#F97794","#b8c2cc"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0","#b8c2cc"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(t){return t>999?(t/1e3).toFixed(1)+"k":t}}},tooltip:{x:{show:!1}}}},subscribersGained:{series:[{name:"Subscribers",data:[28,40,36,52,38,60,55]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},quarterlySales:{series:[{name:"Sales",data:[10,15,7,12,3,16]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},revenueGenerated:{series:[{name:"Revenue",data:[350,275,400,300,350,300,450]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},ordersRecevied:{series:[{name:"Orders",data:[10,15,8,15,7,12,8]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},salesBar:{series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"bar",sparkline:{enabled:!0},toolbar:{show:!1}},states:{hover:{filter:"none"}},colors:["#e6edf7","#e6edf7","#7367f0","#e6edf7","#e6edf7","#e6edf7"],plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}}}},goalOverviewRadialBar:{series:[83],chartOptions:{plotOptions:{radialBar:{size:110,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:"#bfc5cc",strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{offsetY:18,color:"#99a2ac",fontSize:"4rem"}}}},colors:["#00db89"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b5b5"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},supportTrackerRadialBar:{chartData:{totalTickets:163,openTickets:103,lastResponse:"1d"},series:[83],chartOptions:{plotOptions:{radialBar:{size:150,offsetY:15,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{value:{offsetY:30,color:"#99a2ac",fontSize:"2rem"}}}},colors:["#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#7367F0"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},chart:{sparkline:{}},labels:["Completed Tickets"]}},statisticsRadar:{series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],chartOptions:{labels:["Jan","Feb","Mar","Apr","May","Jun"],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},chart:{dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0}}},sessionsByDeviceDonut:{analyticsData:[{device:"Dekstop",icon:"MonitorIcon",color:"primary",sessionsPercentgae:58.6,comparedResultPercentage:2},{device:"Mobile",icon:"SmartphoneIcon",color:"warning",sessionsPercentgae:34.9,comparedResultPercentage:8},{device:"Tablet",icon:"TabletIcon",color:"danger",sessionsPercentgae:6.5,comparedResultPercentage:-5}],comparedResult:[2,-3,8],series:[58.6,34.9,6.5],chartOptions:{labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},chart:{offsetY:30,type:"donut",toolbar:{show:!1}},stroke:{width:0},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},productOrdersRadialBar:{analyticsData:[{orderType:"Finished",counts:23043,color:"primary"},{orderType:"Pending",counts:14658,color:"warning"},{orderType:"Rejected ",counts:4758,color:"danger"}],series:[70,52,26],chartOptions:{labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:165,offsetY:30,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15},dataLabels:{show:!0,name:{fontSize:"18px"},value:{fontSize:"16px",color:"#636a71",offsetY:11},total:{show:!0,label:"Total",formatter:function(){return 42459}}}}},responsive:[{breakpoint:576,options:{plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15}}}}}],colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:.5,gradientToColors:["#9c8cfc","#FFC085","#f29292"],inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},customersPie:{analyticsData:[{customerType:"New",counts:890,color:"primary"},{customerType:"Returning",counts:258,color:"warning"},{customerType:"Referrals ",counts:149,color:"danger"}],series:[690,258,149],chartOptions:{labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},chart:{type:"pie",offsetY:30,dropShadow:{enabled:!1,blur:5,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:5},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},salesLine:{series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],chartOptions:{chart:{toolbar:{show:!1},dropShadow:{enabled:!0,top:20,left:2,blur:6,opacity:.2}},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebebeb"},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(t){return t>999?(t/1e3).toFixed(1)+"k":t}}},tooltip:{x:{show:!1}}}},clientRetentionBar:{series:[{name:"New Clients",data:[175,125,225,175,160,189,206,134,159,216,148,123]},{name:"Retained Clients",data:[-144,-155,-141,-167,-122,-143,-158,-107,-126,-131,-140,-137]}],chartOptions:{grid:{borderColor:"#ebebeb",padding:{left:0,right:0}},legend:{show:!1},dataLabels:{enabled:!1},chart:{stacked:!0,type:"bar",toolbar:{show:!1}},colors:["#7367F0","#EA5455"],plotOptions:{bar:{columnWidth:"10%"}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"}}},tooltip:{x:{show:!1}}}},browserAnalytics:[{id:1,name:"Google Chrome",ratio:73,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"800"},{id:3,name:"Opera",ratio:8,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-200"},{id:2,name:"Firefox",ratio:19,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"100"},{id:4,name:"Internet Explorer",ratio:27,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-450"}]}},db71:function(t,a,e){t.exports=e.p+"img/avatar-s-18.6f5c3253.png"},dba0:function(t,a,e){t.exports=e.p+"img/avatar-s-24.13572d01.png"},eb36:function(t,a,e){t.exports=e.p+"img/avatar-s-14.9ab8c514.png"},ee15:function(t,a,e){t.exports=e.p+"img/decore-right.da0ab5cd.png"},fd76:function(t,a,e){t.exports=e.p+"img/avatar-s-6.6b63817c.png"},fdf2:function(t,a,e){t.exports=e.p+"img/avatar-s-9.ec990ac1.png"}}]);
//# sourceMappingURL=chunk-7b249b87.7139d66c.js.map