(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{"0156":function(e,t,a){"use strict";a("44bd")},3530:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"adminorder"}},[a("b-container",{attrs:{id:"admin"}}),a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-nav",{attrs:{pills:"",justified:""}},[a("b-nav-item",{attrs:{to:"/admin/products",exact:"","exact-active-class":"active"}},[e._v("教材管理")]),a("b-nav-item",{attrs:{to:"/admin/orders",exact:"","exact-active-class":"active"}},[e._v("會員管理")])],1)],1),a("b-col",{attrs:{cols:"12"}},[a("router-view")],1)],1)],1)},i=[],n=(a("0156"),a("2877")),o={},s=Object(n["a"])(o,r,i,!1,null,null,null);t["default"]=s.exports},"44bd":function(e,t,a){},8845:function(e,t,a){},aa93:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"adminproduct"}},[a("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-product",modifiers:{"modal-product":!0}}],staticClass:"my-3",attrs:{pill:"",block:"",variant:"success"}},[e._v("新增")]),a("b-table",{ref:"table",attrs:{items:e.products,fields:e.fields},scopedSlots:e._u([{key:"cell(image)",fn:function(t){return[t.item.image?a("img",{staticStyle:{height:"50px"},attrs:{src:t.item.image}}):e._e()]}},{key:"cell(sell)",fn:function(t){return[e._v(e._s(t.item.sell?"v":""))]}},{key:"cell(action)",fn:function(t){return[a("b-btn",{attrs:{variant:"success"},on:{click:function(a){return e.editProduct(t.index)}}},[e._v("編輯")])]}}])}),a("b-modal",{attrs:{id:"modal-product",title:e.form._id.length>0?"編輯商品":"新增商品",centered:"","ok-variant":"success","ok-title":"送出","cancel-variant":"danger","cancel-title":"取消","ok-disabled":e.modalSubmitting,"cancel-disabled":e.modalSubmitting},on:{ok:e.submitModal,hidden:e.resetForm}},[a("b-form-group",{attrs:{label:"日文單字","label-for":"input-name",description:"必填欄位","invalid-feedback":"日文單字必填",state:e.state.name}},[a("b-form-input",{attrs:{id:"input-name",type:"text",required:"",placeholder:"請輸入單字",state:e.state.name},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("b-form-group",{attrs:{label:"日檢級數","label-for":"input-category",description:"必填欄位","invalid-feedback":"級數必填",state:e.state.category}},[a("b-form-select",{attrs:{id:"input-category",required:"",options:e.categories,placeholder:"請輸入級數",state:e.state.category},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}})],1),a("b-form-group",{attrs:{label:"五十音","label-for":"input-description",description:"必填欄位","invalid-feedback":"五十音必填",state:e.state.description}},[a("b-form-textarea",{attrs:{id:"input-description",required:"",rows:"3","max-rows":"6",placeholder:"請輸入五十音"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),a("img-inputer",{attrs:{accept:"image/*",theme:"light",size:"large","bottom-text":"點選或拖拽圖片以修改","hover-text":"點選或拖拽圖片以修改",placeholder:"點選或拖拽選擇圖片","max-size":1024,"exceed-size-text":"檔案大小不能超過"},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1)],1)},i=[],n=a("5530"),o=a("1da1"),s=(a("96cf"),a("b0c0"),{data:function(){return{fields:[{key:"image",label:"圖片"},{key:"name",label:"單字"},{key:"category",label:"級數"},{key:"description",label:"五十音"},{key:"action",label:"操作"}],products:[],modalSubmitting:!1,categories:[{text:"請選擇等級",value:""},"N1","N2","N3","N4","N5"],form:{name:"",description:"",image:null,sell:!1,category:"",_id:"",index:-1}}},computed:{state:function(){return{name:0!==this.form.name.length||null,category:0!==this.form.category.length||null}}},methods:{submitModal:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,i,o,s,c,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.preventDefault(),t.state.name&&t.state.category){a.next=4;break}return t.$swal({icon:"error",title:"錯誤",text:"缺少必填欄位"}),a.abrupt("return");case 4:for(i in t.modalSubmitting=!0,r=new FormData,t.form)"_id"!==i&&r.append(i,t.form[i]);if(a.prev=7,0!==t.form._id.length){a.next=16;break}return a.next=11,t.api.post("/products",r,{headers:{authorization:"Bearer "+t.user.token}});case 11:o=a.sent,s=o.data,t.products.push(s.result),a.next=22;break;case 16:return a.next=18,t.api.patch("/products/"+t.form._id,r,{headers:{authorization:"Bearer "+t.user.token}});case 18:c=a.sent,l=c.data,t.products[t.form.index]=Object(n["a"])(Object(n["a"])({},t.form),{},{image:l.result.image}),t.$refs.table.refresh();case 22:t.$bvModal.hide("modal-product"),a.next=28;break;case 25:a.prev=25,a.t0=a["catch"](7),t.$swal({icon:"error",title:"錯誤",text:a.t0.response.data.message});case 28:t.modalSubmitting=!1;case 29:case"end":return a.stop()}}),a,null,[[7,25]])})))()},resetForm:function(e){this.modalSubmitting?e.preventDefault():this.form={name:"",description:"",image:null,sell:!1,category:"",_id:"",index:-1}},editProduct:function(e){this.form=Object(n["a"])(Object(n["a"])({},this.products[e]),{},{image:null,index:e}),this.$bvModal.show("modal-product")}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/products/all",{headers:{authorization:"Bearer "+e.user.token}});case 3:a=t.sent,r=a.data,e.products=r.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),c=s,l=a("2877"),u=Object(l["a"])(c,r,i,!1,null,null,null);t["default"]=u.exports},b0c0:function(e,t,a){var r=a("83ab"),i=a("5e77").EXISTS,n=a("e330"),o=a("9bf2").f,s=Function.prototype,c=n(s.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=n(l.exec),d="name";r&&!i&&o(s,d,{configurable:!0,get:function(){try{return u(l,c(this))[1]}catch(e){return""}}})},c732:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"text-center"},[e._v("請選擇管理項目")])},i=[],n=a("2877"),o={},s=Object(n["a"])(o,r,i,!1,null,null,null);t["default"]=s.exports},ec5c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"table"}},[a("b-input-group",{staticClass:"mt-3 mb-3",attrs:{size:"sm"}},[a("b-form-input",{attrs:{placeholder:"Search",type:"text"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),a("b-table",{attrs:{fields:e.fields,items:e.items,keyword:e.keyword}})],1)},i=[],n=(a("4de4"),a("d3b7"),a("caad"),a("2532"),{name:"table",data:function(){return{keyword:"",dataArray:[{"會員名":"aaaa","級數":"N2",email:"aaaa@gmail.com"},{"會員名":"zzz456","級數":"N1",email:"123456@example.com"},{"會員名":"asd897","級數":"N4",email:"sdaw@example.com"},{"會員名":"sdad","級數":"N1",email:"sdfasae@example.com"}],fields:[{key:"會員名",label:"會員名",sortable:!0},{key:"級數",label:"級數",sortable:!0},{key:"email",label:"Email",sortable:!0}]}},computed:{items:function(){var e=this;return this.keyword?this.dataArray.filter((function(t){return t.會員名.includes(e.keyword)||t.級數.includes(e.keyword)||t.email.includes(e.keyword)})):this.dataArray}}}),o=n,s=(a("ff0e"),a("2877")),c=Object(s["a"])(o,r,i,!1,null,null,null);t["default"]=c.exports},ff0e:function(e,t,a){"use strict";a("8845")}}]);
//# sourceMappingURL=admin.00a53005.js.map