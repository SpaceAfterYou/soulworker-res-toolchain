(function(t){function n(n){for(var e,r,a=n[0],v=n[1],o=n[2],c=0,f=[];c<a.length;c++)r=a[c],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&f.push(u[r][0]),u[r]=0;for(e in v)Object.prototype.hasOwnProperty.call(v,e)&&(t[e]=v[e]);l&&l(n);while(f.length)f.shift()();return s.push.apply(s,o||[]),i()}function i(){for(var t,n=0;n<s.length;n++){for(var i=s[n],e=!0,r=1;r<i.length;r++){var a=i[r];0!==u[a]&&(e=!1)}e&&(s.splice(n--,1),t=v(v.s=i[0]))}return t}var e={},r={app:0},u={app:0},s=[];function a(t){return v.p+"js/"+({}[t]||t)+"."+{"chunk-7088fdb0":"049476c8"}[t]+".js"}function v(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,v),i.l=!0,i.exports}v.e=function(t){var n=[],i={"chunk-7088fdb0":1};r[t]?n.push(r[t]):0!==r[t]&&i[t]&&n.push(r[t]=new Promise((function(n,i){for(var e="css/"+({}[t]||t)+"."+{"chunk-7088fdb0":"33fbf2ed"}[t]+".css",u=v.p+e,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var o=s[a],c=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===e||c===u))return n()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){o=f[a],c=o.getAttribute("data-href");if(c===e||c===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var e=n&&n.target&&n.target.src||u,s=new Error("Loading CSS chunk "+t+" failed.\n("+e+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=e,delete r[t],l.parentNode.removeChild(l),i(s)},l.href=u;var d=document.getElementsByTagName("head")[0];d.appendChild(l)})).then((function(){r[t]=0})));var e=u[t];if(0!==e)if(e)n.push(e[2]);else{var s=new Promise((function(n,i){e=u[t]=[n,i]}));n.push(e[2]=s);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,v.nc&&c.setAttribute("nonce",v.nc),c.src=a(t);var f=new Error;o=function(n){c.onerror=c.onload=null,clearTimeout(l);var i=u[t];if(0!==i){if(i){var e=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+e+": "+r+")",f.name="ChunkLoadError",f.type=e,f.request=r,i[1](f)}u[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(n)},v.m=t,v.c=e,v.d=function(t,n,i){v.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},v.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},v.t=function(t,n){if(1&n&&(t=v(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(v.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)v.d(i,e,function(n){return t[n]}.bind(null,e));return i},v.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return v.d(n,"a",n),n},v.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},v.p="/soulworker-res-toolchain/",v.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var f=0;f<o.length;f++)n(o[f]);var l=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,n,i){t.exports=i("cd49")},"10dd":function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint8("id").uint32("v5").uint32("v6").uint32("v7").uint32("v8").uint32("v9").uint32("v10").uint32("v11").uint32("v12").uint32("v13").uint32("v14").swstring("v15").swstring("v16").swstring("v17").swstring("v18").swstring("v19").swstring("v20").swstring("v21").swstring("v22").swstring("v23").swstring("v24").uint32("v25").uint32("v26").uint32("v27").uint32("v28").uint32("v29").uint32("v30").uint32("v31").uint32("v32").uint32("v33").uint32("v34")}},"1f78":function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint16("id").uint32("v1").uint32("v2").uint32("v3").uint32("v4").uint32("v5").uint32("v6").swstring("v7")}},3065:function(t,n,i){},"33f8":function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint8("id").uint16("v5").uint16("v6").uint16("v7").uint16("v8").uint16("v9").swstring("v10").swstring("v11").swstring("v12").swstring("v13").swstring("v14")}},4842:function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint8("id").uint16("v5").uint16("v6").uint16("v7").uint16("v8").uint16("v9").swstring("v10").swstring("v11").swstring("v12").swstring("v13").swstring("v14")}},4928:function(t,n,i){},4993:function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint32("Id").uint16("s1").uint8("b1").swstring("str1").uint32("i2").uint32("i3").uint32("i4").uint32("i5").uint32("i6").uint8("b2").uint32("i7").uint8("b3").uint8("b4").uint32("i8").uint8("b5").uint32("i9").uint8("b6").uint32("i10").uint16("s2").uint16("s3").uint16("s4").uint8("b7").uint8("b8").uint8("b9").uint8("b10").uint8("b11").uint8("b12").uint16("s5").uint16("s6").uint16("s7").swstring("str2").uint8("b13").uint32("i11").uint32("i12").swstring("str3").uint16("s8").uint16("s9").uint16("s10").uint16("s11").uint16("s12").uint16("s13").uint16("s14").uint16("s15").uint16("s16").uint16("s17").uint16("s18").uint16("s19").uint16("s20").uint16("s21").uint16("s22").uint16("s23").swstring("str4").swstring("str5").swstring("str6").swstring("str7").swstring("str8")}},"5a58":function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint32("id").uint32("v5").uint8("v6").uint8("v7").uint16("v8").uint32("v9").uint32("v10").uint32("v11").uint32("v12").uint16("v13").uint8("v14").uint32("v15").uint32("v16").uint32("v17").uint16("v18").uint8("v19").uint8("v20").uint8("v21").uint8("v22").uint32("v23").swstring("v24").uint8("v25").uint8("v26").uint32("v27").uint32("v28").uint32("v29").uint32("v30").uint32("v31").uint32("v32").uint8("v33").uint8("v34").uint8("v35").uint8("v36").uint8("v37").uint32("v38").uint32("v39").uint32("v40").uint32("v41").uint32("v42").int32("v43").int32("v44").int32("v45").int32("v46").int32("v47").uint32("v48").uint32("v49").uint32("v50").uint16("v51").uint32("v52").uint32("v53").uint32("v54").uint16("v55").uint32("v56").uint16("v57").uint32("v58").uint8("v59").uint16("v60").uint32("v61").uint16("v62").uint8("v63").uint8("v64").uint32("v65").uint8("v66").uint32("v67").uint8("v68").uint8("v69").uint32("v70").uint32("v71")}},"5c4b":function(t,n,i){},"5f46":function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint8("id").uint32("v5").uint32("v6").uint32("v7").uint32("v8").uint32("v9").uint32("v10").uint32("v11").uint32("v12").uint32("v13").uint32("v14").swstring("v15").swstring("v16").swstring("v17").swstring("v18").swstring("v19").swstring("v20").swstring("v21").swstring("v22").swstring("v23").swstring("v24").uint32("v25").uint32("v26").uint32("v27").uint32("v28").uint32("v29").uint32("v30").uint32("v31").uint32("v32").uint32("v33").uint32("v34")}},7192:function(t,n,i){"use strict";i("7438")},7438:function(t,n,i){},"74d9":function(t,n,i){"use strict";i("5c4b")},8503:function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint32("id").swstring("v5").swstring("v6").swstring("v7").int16("v8").uint16("v9").uint16("v10").uint16("v11").swstring("v12").uint8("v13")}},"8dc2":function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint32("id").uint8("unknown1").swstring("str1")}},"908c":function(t,n,i){"use strict";var e=i("fe3a");n["a"]=function(){return(new e["Parser"]).endianess("little").uint16("id").uint8("u1").uint16("u2").uint16("u3").uint8("u4").uint8("u5")}},"9ecb":function(t,n,i){"use strict";i("4928")},"9f58":function(t,n,i){"use strict";(function(t){i("99af"),i("a15b"),i("d81d"),i("b0c0"),i("b64b"),i("d3b7"),i("07ac"),i("3ca3"),i("ddb0"),i("2b3d"),i("96cf");var e=i("1da1"),r=i("fe3a"),u=i("7a23"),s=i("8dc2"),a=i("908c"),v=i("8503"),o=i("5a58"),c=i("fadd"),f=i("1f78"),l=i("f621"),d=i("eaba"),g=i("10dd"),b=i("a185"),w=i("5f46"),p=i("33f8"),_=i("e15a"),h=i("4842"),m=i("e033"),P=i("b444"),j=i("c442"),O=i("bbef"),y=i("4993"),S=i("df7c");n["a"]=Object(u["h"])({name:"app",methods:{convertToCSV:function(){var t=Object.keys(this.file.parsed.rows[0]).join(),n=this.file.parsed.rows.map((function(t){return Object.values(t).join()})).join("\n");this.downloadFile("".concat(t,"\n").concat(n),"".concat(this.file.filename,".csv"))},downloadFile:function(t,n){var i=t,e=new Blob([i],{type:"application/csv;charset=utf-16;"}),r=document.createElement("a"),u=URL.createObjectURL(e);r.href=u,r.style.visibility="hidden",r.download=n,document.body.appendChild(r),r.click(),document.body.removeChild(r)},onSelectFile:function(n){var i=this,e=n.target;if(!(e.files.length<1)){this.file=null;var r=e.files[0],u=new FileReader;u.onload=function(n){return i.file=i.resParse(Object(S["basename"])(r.name.toLowerCase(),".res"),t.from(n.target.result))},u.readAsArrayBuffer(r)}},resParse:function(t,n){if(!(t in this.parsers))return null;var i=this.parsers[t];return{filename:t,parsed:i.parse(n)}},resRegisterParser:function(t,n){var i=t.toLowerCase();this.parsers[i]=(new r["Parser"]).endianess("little").uint32("count").array("rows",{length:"count",type:n(new r["Parser"])}).uint16("crcLen").string("crc",{length:"crcLen"})}},data:function(){return{parsers:{},file:null}},created:function(){var t=this;return Object(e["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.resRegisterParser("tb_UI_String",s["a"]),t.resRegisterParser("tb_Option_String",a["a"]),t.resRegisterParser("tb_item_model",v["a"]),t.resRegisterParser("tb_item",o["a"]),t.resRegisterParser("tb_Appearance",c["a"]),t.resRegisterParser("tb_Create_Cloth",f["a"]),t.resRegisterParser("tb_CreateOption",l["a"]),t.resRegisterParser("tb_Customize_Info",d["a"]),t.resRegisterParser("tb_Customize_Eyes",g["a"]),t.resRegisterParser("tb_Customize_Hair",b["a"]),t.resRegisterParser("tb_Customize_Skin",w["a"]),t.resRegisterParser("tb_Customize_View_Ani",p["a"]),t.resRegisterParser("tb_Customize_View_Ani",p["a"]),t.resRegisterParser("tb_Customize_View_Costume",_["a"]),t.resRegisterParser("tb_Customize_View_Sound",h["a"]),t.resRegisterParser("tb_Customize_View_Weapon",m["a"]),t.resRegisterParser("tb_Event_Condition",P["a"]),t.resRegisterParser("tb_CashBilling_Info",j["a"]),t.resRegisterParser("tb_CashShop",O["a"]),t.resRegisterParser("tb_NPC",y["a"]);case 20:case"end":return n.stop()}}),n)})))()},components:{TableComponent:Object(u["g"])((function(){return i.e("chunk-7088fdb0").then(i.bind(null,"1ea4"))}))}})}).call(this,i("b639").Buffer)},a185:function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint8("id").uint32("v5").uint32("v6").uint32("v7").uint32("v8").uint32("v9").uint32("v10").uint32("v11").uint32("v12").uint32("v13").uint32("v14").uint32("v15").uint32("v16").uint32("v17").uint32("v18").uint32("v19").uint32("v20").uint32("v21").uint32("v22").uint32("v23").uint32("v24").uint32("v25").uint32("v26").uint32("v27").uint32("v28").uint32("v29").uint32("v30").uint32("v31").uint32("v32").uint32("v33").uint32("v34").swstring("v35").swstring("v36").swstring("v37").swstring("v38").swstring("v39").swstring("v40").swstring("v41").swstring("v42").swstring("v43").swstring("v44").uint32("v45").uint32("v46").uint32("v47").uint32("v48").uint32("v49").uint32("v50").uint32("v51").uint32("v52").uint32("v53").uint32("v54")}},b444:function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint32("id").uint16("v6").uint8("v7").uint8("v8").uint32("v9").uint32("v10")}},bbef:function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint32("Shop_Index").uint16("MainTab_ID").uint16("SubTab_ID").uint8("Sell_Active").uint32("SellItem_ID").uint8("Need_Slot").uint8("Sell_Type").uint8("Item_Gift").uint32("Sell_priority").uint8("Limit_Type").swstring("Limit_Start_Date").swstring("Limit_End_Date").uint8("Sell_Number_Type").uint16("Sell_Number_Value").uint8("Sell_Level").uint16("BillingInfo_ID").uint16("Mileage_ID").uint8("Hot_Icon").uint8("New_Icon").swstring("Unknown1")}},bf4a:function(t,n,i){"use strict";i("3065")},c442:function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint16("id").uint32("Item_ID_1st").uint32("Item_ID_2nd").uint32("Item_ID_3rd").uint32("Item_ID_4th").uint32("Item_ID_5th").uint32("Value_1st").uint32("Value_2nd").uint32("Value_3rd").uint32("Value_4th").uint32("Value_5th").uint32("B_Price_1st").uint32("B_Price_2nd").uint32("B_Price_3rd").uint32("B_Price_4th").uint32("B_Price_5th").uint32("S_Price_1st").uint32("S_Price_2nd").uint32("S_Price_3rd").uint32("S_Price_4th").uint32("S_Price_5th")}},cd49:function(t,n,i){"use strict";i.r(n);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("7a23"),r=Object(e["o"])("data-v-078803a2");Object(e["k"])("data-v-078803a2");var u={class:"sidebar"},s={class:"upload-button"},a=Object(e["f"])("label",{class:"upload-res",for:"upload-res"},"Import RES file",-1),v=Object(e["f"])("div",{class:"sidebar-block"},[Object(e["e"])("Tested on KR files ver "),Object(e["f"])("span",{class:"red"},"1.7.50.11")],-1),o=Object(e["f"])("a",{target:"_blank",class:"how-to",href:"https://digitalreadymarketing.com/open-chinese-japanese-encoding-gwmt-csv-file/"}," How To: correct open japanese files in excel ",-1),c={class:"sidebar-block"},f=Object(e["f"])("h3",null,"Supports files",-1),l={class:"main"};Object(e["j"])();var d=r((function(t,n,i,r,d,g){var b=Object(e["m"])("TableComponent");return Object(e["i"])(),Object(e["c"])(e["a"],null,[Object(e["f"])("aside",u,[Object(e["f"])("div",s,[a,Object(e["f"])("input",{type:"file",accept:".res",id:"upload-res",onChange:n[1]||(n[1]=function(){return t.onSelectFile&&t.onSelectFile.apply(t,arguments)})},null,32)]),v,t.file?(Object(e["i"])(),Object(e["c"])(e["a"],{key:0},[Object(e["f"])("div",{class:"convert-to-csv",onClick:n[2]||(n[2]=function(){return t.convertToCSV&&t.convertToCSV.apply(t,arguments)})},"Export CSV file"),o],64)):Object(e["d"])("",!0),Object(e["f"])("div",c,[f,(Object(e["i"])(!0),Object(e["c"])(e["a"],null,Object(e["l"])(t.parsers,(function(t,n){return Object(e["i"])(),Object(e["c"])("div",{class:"supports-name",key:n},Object(e["n"])(n),1)})),128))])]),Object(e["f"])("main",l,[null!==t.file?(Object(e["i"])(),Object(e["c"])(b,{key:0,table:t.file.parsed},null,8,["table"])):Object(e["d"])("",!0)])],64)})),g=i("9f58");i("74d9"),i("7192"),i("bf4a"),i("9ecb");g["a"].render=d,g["a"].__scopeId="data-v-078803a2";var b=g["a"];Object(e["b"])(b).mount("#app")},e033:function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint8("id").uint32("v5").uint32("v6").uint32("v7").uint32("v8").uint32("v9")}},e15a:function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint8("id").uint32("v5").uint32("v6").uint32("v7").uint32("v8").uint32("v9").uint32("v10").uint32("v11").uint32("v12").uint32("v13").uint32("v14").uint32("v15").uint32("v16").swstring("v17")}},eaba:function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint8("id").uint8("v1").uint8("v2").uint8("v3").uint8("v4").uint8("v5").uint8("v6").uint8("v7").uint8("v8").uint8("v9").uint8("v10").uint8("v11").swstring("v12").swstring("v13").swstring("v4").swstring("v15").swstring("v16")}},f621:function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint16("id").uint8("v1").uint8("v2").uint8("v3").uint8("v4").uint8("v5").uint32("v6").uint8("v7").uint8("v8").uint8("v9").uint8("v10").uint32("v11").uint8("v12").uint32("v13")}},f7f2:function(t,n,i){"use strict";var e=i("fe3a"),r=(i("ac1f"),i("5319"),function(t){return t.replace(/\\n/gi,"<br/>")}),u=function(t){return function(){return 2*this[t]}};e["Parser"].prototype.swstring=function(t){var n="".concat(t,"Len");return this.uint16(n).string(t,{encoding:"utf-16",length:u(n),formatter:r})}},fadd:function(t,n,i){"use strict";var e=i("fe3a");i("f7f2");n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new e["Parser"];return t.endianess("little").uint32("id").uint8("v1").uint8("v2").uint16("v3").uint16("v4").swstring("v5").uint8("v6")}}});