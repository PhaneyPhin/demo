(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-faf4cdca"],{1869:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"ecommerce-wishlist-demo"}},[t.wishListitems.length?s("div",{staticClass:"items-grid-view vx-row match-height",attrs:{appear:""}},t._l(t.wishListitems,function(e){return s("div",{key:e.objectID,staticClass:"vx-col lg:w-1/4 md:w-1/3 sm:w-1/2 w-full"},[s("item-grid-view",{attrs:{item:e}},[s("template",{slot:"action-buttons"},[s("div",{staticClass:"flex flex-wrap"},[s("div",{staticClass:"item-view-primary-action-btn p-3 flex flex-grow items-center justify-center cursor-pointer",on:{click:function(s){return t.removeItemFromWishList(e)}}},[s("feather-icon",{attrs:{icon:"XIcon",svgClasses:"h-4 w-4"}}),s("span",{staticClass:"text-sm font-semibold ml-2"},[t._v("REMOVE")])],1),s("div",{staticClass:"item-view-secondary-action-btn bg-primary p-3 flex flex-grow items-center justify-center text-white cursor-pointer",on:{click:function(s){return t.cartButtonClicked(e)}}},[s("feather-icon",{attrs:{icon:"ShoppingBagIcon",svgClasses:"h-4 w-4"}}),t.isInCart(e.objectID)?s("span",{staticClass:"text-sm font-semibold ml-2"},[t._v("VIEW IN CART")]):s("span",{staticClass:"text-sm font-semibold ml-2"},[t._v("MOVE TO CART")])],1)])])],2)],1)}),0):s("vx-card",{attrs:{title:"You don't have any items in your wish list."}},[s("vs-button",{on:{click:function(e){return t.$router.push("/apps/eCommerce/shop")}}},[t._v("Browse Shop")])],1)],1)},n=[],r=function(){return s.e("chunk-57042d24").then(s.bind(null,"d772"))},o={components:{ItemGridView:r},computed:{wishListitems:function(){return this.$store.state.eCommerce.wishList.slice().reverse()},isInCart:function(){var t=this;return function(e){return t.$store.getters["eCommerce/isInCart"](e)}},isInWishList:function(){var t=this;return function(e){return t.$store.getters["eCommerce/isInWishList"](e)}}},methods:{removeItemFromWishList:function(t){this.$store.dispatch("eCommerce/toggleItemInWishList",t)},cartButtonClicked:function(t){this.isInCart(t.objectID)?this.$router.push("/apps/eCommerce/checkout"):(this.additemInCart(t),this.removeItemFromWishList(t))},additemInCart:function(t){this.$store.dispatch("eCommerce/additemInCart",t)}}},c=o,a=(s("2925"),s("2877")),m=Object(a["a"])(c,i,n,!1,null,"7d465533",null);e["default"]=m.exports},2925:function(t,e,s){"use strict";var i=s("d420"),n=s.n(i);n.a},d420:function(t,e,s){}}]);
//# sourceMappingURL=chunk-faf4cdca.8a9c2e98.js.map