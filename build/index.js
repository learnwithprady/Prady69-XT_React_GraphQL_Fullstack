!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=30)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@babel/runtime/helpers/taggedTemplateLiteral")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("@babel/runtime/helpers/assertThisInitialized")},function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,t){e.exports=require("@material-ui/core")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(16),a=new r.Schema({id:{type:Number},name:{type:String},image:{type:String},species:{type:String},status:{type:String},gender:{type:String},created:{type:Date},origin:{name:{type:String},url:{type:String}},location:{name:{type:String},url:{type:String}}}),i=r.model("Character",a)},function(e,t){e.exports=require("apollo-server-express")},function(e,t){e.exports=require("mongoose")},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("@material-ui/lab")},function(e,t){e.exports=require("@babel/runtime/helpers/typeof")},function(e,t){e.exports=require("@material-ui/icons/Close")},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";n.r(t),function(e){var t=n(12),r=n.n(t),a=n(13),i=n.n(a),o=n(16),c=n(27),l=n(28),u=c.get("Characters.dbConfig");o.Promise=global.Promise;var s=function(){var e=i()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.connect(u.mongodbURI,{useFindAndModify:!1,useUnifiedTopology:!0,useCreateIndex:!0,useNewUrlParser:!0});case 3:console.log("DB connected at ".concat(u.mongodbURI)),l(u.maxPages),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e.exports=s}.call(this,n(17)(e))},function(e,t){e.exports=require("config")},function(e,t,n){"use strict";n.r(t),function(e){var t=n(12),r=n.n(t),a=n(13),i=n.n(a),o=n(14),c=n(29),l=function(){var e=i()(r.a.mark((function e(t){var n,a,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.countDocuments();case 2:if(n=e.sent,a=1,i=[],n){e.next=21;break}console.log("Loading data ...");case 7:if(!(a<=t)){e.next=17;break}return e.next=10,c.get("https://rickandmortyapi.com/api/character/?page=".concat(a));case 10:l=e.sent,console.log("Completed ".concat(20*a)),a++,i=(i=i.concat(l.data.results)).filter((function(e,t,n){return t===n.findIndex((function(t){return t.id===e.id}))})),e.next=7;break;case 17:return console.log("########### Data loading completed. #############"),i=i.map((function(e){return{id:e.id,name:e.name,image:e.image,species:e.species,status:e.status,created:e.created,origin:e.origin,location:e.location}})),e.next=21,o.a.insertMany(i);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e.exports=l}.call(this,n(17)(e))},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";n.r(t);var r=n(12),a=n.n(r),i=n(13),o=n.n(i),c=n(15),l=n(18),u=n(19),s=n.n(u),f=n(0),p=n.n(f),d=n(20),m=n.n(d),g=n(14),h={Query:{charactersAll:function(){return g.a.find()}}},v=n(1),b=n.n(v);function y(){var e=b()(["\n  type Query {\n    charactersAll: [CharacterType!]!\n  }\n\n  type CharacterType {\n    name: String!\n  }\n"]);return y=function(){return e},e}var x=Object(c.gql)(y()),E=n(8),S=n.n(E),F=n(9),R=n.n(F),k=n(3),C=n.n(k),w=n(10),O=n.n(w),P=n(11),j=n.n(P),D=n(6),q=n.n(D),T=n(4),z=n.n(T),L=n(5),G=n(21),N=n(22),I=n.n(N);function _(e,t){var n,r,a,i=(n=e,r={},Object.keys(n).map((function(e){if("object"==I()(n[e]))for(var t in n[e])null!==n[e][t]&&(t.includes("Species")?r.species=n[e][t]:t.includes("Gender")?r.gender=n[e][t]:t.includes("Location")&&(r.status=n[e][t]));else null!==n[e]&&(r.name=n[e])})),Object.keys(r).length?r:"");return i=""!==i?"(page:".concat(t.currentPage,", filter:").concat((a=i,JSON.stringify(a).replace(/"([^"]+)":/g,"$1:")),")"):"(page:".concat(t.currentPage,")"),"query {\n        characters".concat(i," {\n            info {\n                count\n                pages\n            }\n            results {\n                id\n                name\n                image\n                status\n                species\n                gender\n                location{\n                    name\n                }\n                created\n                origin{\n                    name\n                }\n            }\n        }\n    }")}function A(e,t,n){var r=t;return fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:_(r,n)})})}function M(e,t){var n,r,a=t;return fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:(n=a,r="(filter:{name:".concat(JSON.stringify(n),"})"),"query {\n    characters".concat(r," {\n        results {\n            name\n        }\n    }\n}"))})})}var U=n(2),V=n.n(U);function H(){var e=b()(["\n    color: #000;\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin: 0;\n    padding-bottom: 0.5rem;\n    width: 100%;\n"]);return H=function(){return e},e}function B(){var e=b()(["\n    border: 1px solid #000;\n    margin-top: 1rem;\n    padding: 0.7rem;\n    background: #fff;\n"]);return B=function(){return e},e}var J=V.a.div(B()),K=V.a.h4(H());function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=q()(e);if(t){var a=q()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j()(this,n)}}var Q=function(e){O()(n,e);var t=Y(n);function n(){var e;S()(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),z()(C()(e),"selectedOption",""),z()(C()(e),"handleChange",(function(t){e.selectedOption=t.target.value,e.props.addFilter(t.target.value,t.target.name)})),z()(C()(e),"removeFilterHandler",(function(){e.selectedOption=""})),e}return R()(n,[{key:"render",value:function(){var e=this.props.filterResponse,t=e.key,n=e.value;return p.a.createElement(J,{className:"filter-wrapper"},p.a.createElement(L.Grid,{container:!0,item:!0,xs:12,sm:12},p.a.createElement(K,null,t),p.a.createElement(L.FormControl,null,p.a.createElement(L.RadioGroup,{"aria-label":t,name:t,value:this.selectedOption,onChange:this.handleChange},n.map((function(e,t){return p.a.createElement(L.FormControlLabel,{key:t,value:e,control:p.a.createElement(L.Radio,null),label:e})}))))))}}]),n}(f.Component),$=n(7),W=n.n($);function X(){var e=b()(["\n    color: rgb(255, 152, 0);\n    text-align: right;\n    width: 70%;\n    display: inline-block;\n    font-size: 0.9rem;\n    padding-left: 0.8rem;\n    box-sizing: border-box;\n    font-weight: 400;\n    vertical-align: middle;\n"]);return X=function(){return e},e}function Z(){var e=b()(["\n    text-transform: uppercase;\n    color: rgb(158,158,158);\n    text-align: left;\n    width: 30%;\n    display: inline-block;\n    font-size: 0.7rem;\n    padding-right: 0.8rem;\n    box-sizing: border-box;\n    font-weight: 400;\n    vertical-align: middle;\n"]);return Z=function(){return e},e}function ee(){var e=b()(["\n    padding: 0.75rem 0px 0.375rem;\n    border-bottom: 1px solid rgb(68, 68, 68);\n    margin: 0;\n"]);return ee=function(){return e},e}function te(){var e=b()(["\n    list-style: none;\n    padding: 0;\n    margin: 0;\n"]);return te=function(){return e},e}function ne(){var e=b()(["\n    background-color: rgba(51,51,51,1);\n    color: rgb(255, 152, 0);\n    padding: 1.2rem;\n    height: 100%;\n"]);return ne=function(){return e},e}function re(){var e=b()(["\n    font-size: 0.7rem;\n    color: rgb(245,245,245);\n    padding: 0;\n    margin: 0;\n"]);return re=function(){return e},e}function ae(){var e=b()(["\n    color: rgb(245,245,245);\n    font-size: 1.2rem;\n    display: block;\n    font-weight: 400;\n    margin: 0;\n    padding:0;\n"]);return ae=function(){return e},e}function ie(){var e=b()(["\n    width: 100%;\n    height: 13rem;\n    background-size: cover;\n"]);return ie=function(){return e},e}function oe(){var e=b()(["\n    background-color: rgba(32,35,41,0.8);\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding: 0.3rem 0.5rem;\n    box-sizing: border-box;\n"]);return oe=function(){return e},e}function ce(){var e=b()(["\n    max-height: 13rem;\n    position: relative;\n"]);return ce=function(){return e},e}function le(){var e=b()(["\n    border-radius: 0.625rem;\n    margin-bottom: 0.625rem;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n    overflow: hidden;\n    height: 100%;\n"]);return le=function(){return e},e}var ue=V.a.div(le()),se=V.a.div(ce()),fe=V.a.div(oe()),pe=V.a.div(ie()),de=V.a.h3(ae()),me=V.a.span(re()),ge=V.a.div(ne()),he=V.a.ul(te()),ve=V.a.li(ee()),be=V.a.span(Z()),ye=V.a.span(X()),xe=function(e){var t,n,r=e.characerList,a=r.id,i=r.name,o=r.image,c=r.status,l=r.species,u=r.gender,s=r.created,f=r.location,d=r.origin;return p.a.createElement(L.Grid,{item:!0,xs:6,sm:4,md:3},p.a.createElement(ue,null,p.a.createElement(se,null,p.a.createElement(pe,{style:{backgroundImage:"url(".concat(o,")")}}),p.a.createElement(fe,null,p.a.createElement(de,null,i),p.a.createElement(me,null,"id:"," ",a," ","created "," ",(t=new Date(s),n=(new Date).getFullYear()-t.getFullYear(),n+="".concat(1===n?"Year":"Years"," ago"))))),p.a.createElement(ge,null,p.a.createElement(he,null,p.a.createElement(ve,null,p.a.createElement(be,null,"Status"),p.a.createElement(ye,null,c)),p.a.createElement(ve,null,p.a.createElement(be,null,"Species"),p.a.createElement(ye,null,l)),p.a.createElement(ve,null,p.a.createElement(be,null,"Gender"),p.a.createElement(ye,null,u)),p.a.createElement(ve,null,p.a.createElement(be,null,"Origin"),p.a.createElement(ye,null,d.name)),p.a.createElement(ve,null,p.a.createElement(be,null,"Last Location"),p.a.createElement(ye,null,f.name))))))};xe.propTypes={characerList:W.a.shape({id:W.a.string,name:W.a.string,image:W.a.string,status:W.a.string,species:W.a.string,gender:W.a.string,created:W.a.string,location:W.a.object,origin:W.a.object})};var Ee=xe;function Se(){var e=b()(["\n    color: #fff;\n    font-size: 2rem;\n    font-weight: 400;\n"]);return Se=function(){return e},e}var Fe=V.a.h2(Se()),Re=function(){return p.a.createElement(Fe,null,"No Result Found")},ke=function(e){var t=e.data;return null===t.characters?p.a.createElement(Re,null):p.a.createElement(L.Grid,{container:!0,spacing:1},Object.keys(t.characters.results).map((function(e){return p.a.createElement(Ee,{key:e,index:e,characerList:t.characters.results[e]})})))};ke.propTypes={data:W.a.shape({characters:W.a.object})};var Ce=ke;function we(){var e=b()(["\n    border-bottom: 1px solid #ccc;\n    padding: 0.3rem 0;\n    font-size: 1rem;\n    cursor: pointer;\n"]);return we=function(){return e},e}function Oe(){var e=b()(["\n    position: absolute;\n    top: 100%;\n    margin: 0;\n    padding: 0.5rem;\n    list-style: none;\n    background: #fff;\n    z-index: 2;\n    width: 100%;\n    box-sizing: border-box;\n    border: 1px solid #ccc;\n    max-height: 15rem;\n    overflow: auto;\n"]);return Oe=function(){return e},e}var Pe=V.a.ul(Oe()),je=V.a.li(we());function De(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=q()(e);if(t){var a=q()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j()(this,n)}}var qe=function(e){O()(n,e);var t=De(n);function n(){return S()(this,n),t.apply(this,arguments)}return R()(n,[{key:"render",value:function(){var e=this,t=this.props.data;return p.a.createElement(p.a.Fragment,null,p.a.createElement(Pe,null,Object.keys(t).map((function(n){return p.a.createElement(je,{key:n,onClick:function(){return e.props.handleClick(t[n].name)}},t[n].name)}))))}}]),n}(f.Component),Te={ENDPOINT_URL:"https://rickandmortyapi.com/graphql/"};function ze(){var e=b()(["\n  padding: 0.63rem 1rem;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: top;\n  border-left: 0;\n  cursor: pointer;\n  width: 5rem;\n"]);return ze=function(){return e},e}function Le(){var e=b()(["\n    border: 1px solid #ccc;\n    padding: 0.62rem;\n    color: #000;\n    box-shadow: none;\n    width: calc(100% - 5rem);\n    box-sizing: border-box;\n"]);return Le=function(){return e},e}function Ge(){var e=b()(["\n    font-size: 1rem;\n    color: rgb(51,51,51);\n"]);return Ge=function(){return e},e}function Ne(){var e=b()(["\n  position: relative;\n"]);return Ne=function(){return e},e}var Ie=V.a.div(Ne()),_e=V.a.p(Ge()),Ae=V.a.input(Le()),Me=V.a.button(ze());function Ue(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=q()(e);if(t){var a=q()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j()(this,n)}}var Ve=function(e){O()(n,e);var t=Ue(n);function n(){var e;S()(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),z()(C()(e),"state",{typingTimeout:null,suggestion:null}),z()(C()(e),"_handleKeyDown",(function(t){"Enter"===t.key&&e.sendData()})),z()(C()(e),"sendData",(function(){var t=e.refs.searchInputBox.value;""!==t?e.props.parentCallback(t):e.props.parentCallback("")})),z()(C()(e),"onFieldChange",(function(t){var n=t.target.value;clearTimeout(e.state.typingTimeout),e.state.typingTimeout=setTimeout((function(){e.setState({suggestion:null}),M(Te.ENDPOINT_URL,n).then((function(e){return e.json()})).then((function(t){t.data.characters&&e.setState({suggestion:t.data.characters.results})}))}),300)})),z()(C()(e),"onSelect",(function(t){e.refs.searchInputBox.value=t,e.setState({suggestion:null}),e.sendData()})),e}return R()(n,[{key:"render",value:function(){return p.a.createElement(Ie,null,p.a.createElement(_e,null,"Search by Name"),p.a.createElement(Ae,{type:"text",name:"Search",placeholder:"Search Keyword","aria-label":"Search",ref:"searchInputBox",autoComplete:"off",onKeyDown:this._handleKeyDown,onChange:this.onFieldChange}),p.a.createElement(Me,{type:"submit",onClick:this.sendData},"Search"),this.state.suggestion?p.a.createElement(qe,{data:this.state.suggestion,handleClick:this.onSelect}):"")}}]),n}(f.Component);function He(){var e=b()(["\n    max-width: 12rem;\n    width: 100%;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    float: right;\n    background: #fff;\n"]);return He=function(){return e},e}var Be=V.a.div(He());function Je(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=q()(e);if(t){var a=q()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j()(this,n)}}var Ke=function(e){O()(n,e);var t=Je(n);function n(){var e;S()(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),z()(C()(e),"selectedValue",""),z()(C()(e),"handleChange",(function(t){e.selectedValue=t.target.value,e.props.SortCharacterListFn(e.selectedValue)})),e}return R()(n,[{key:"render",value:function(){return p.a.createElement(Be,{id:"select-wrapper"},p.a.createElement(L.FormControl,{variant:"filled",style:{width:"100%"}},p.a.createElement(L.InputLabel,{htmlFor:"sort-character-list"},"Sort"),p.a.createElement(L.Select,{native:!0,value:this.selectedValue,onChange:this.handleChange,inputProps:{name:"sort",id:"sort-character-list"}},p.a.createElement("option",{value:"asc"},"Ascending"),p.a.createElement("option",{value:"dec"},"Descending"))))}}]),n}(f.Component),Ye=n(23),Qe=n.n(Ye);function $e(){var e=b()(["\ndisplay: inline-block;\nvertical-align: middle;\nline-height: 1;\npadding-left: 0.3rem;\ncursor: pointer;\n"]);return $e=function(){return e},e}function We(){var e=b()(["\ndisplay: inline-block;\nbackground-color: #000;\ncolor: #fff;\npadding: 0.4rem 0.5rem;\nbox-sizing: border-box;\nborder-radius: 0.5rem;\ntext-align: center;\nvertical-align: middle;\nfont-size: 1rem;\nmargin-right: 1rem;\n"]);return We=function(){return e},e}function Xe(){var e=b()(["\nlist-style: none;\nmargin: 0;\npadding: 0;\n"]);return Xe=function(){return e},e}function Ze(){var e=b()(["\ncolor: #000000;\nfont-size: 1.4rem;\nfont-weight: 600;   \ndisplay: block;\nmargin-bottom: 0.8rem;\n"]);return Ze=function(){return e},e}var et=V.a.h3(Ze()),tt=V.a.ul(Xe()),nt=V.a.li(We()),rt=V.a.span($e());function at(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=q()(e);if(t){var a=q()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j()(this,n)}}var it=function(e){O()(n,e);var t=at(n);function n(){var e;S()(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),z()(C()(e),"handleClick",(function(t){var n=t;n.includes("Species")?n="speciesRef":n.includes("Gender")?n="genderRef":n.includes("Location")&&(n="locationRef"),e.props.removeFilter(t,n)})),e}return R()(n,[{key:"render",value:function(){var e=this;return(null!=this.props.selectedFilters.selectedSpeciesFilter||null!=this.props.selectedFilters.selectedGenderFilter||null!=this.props.selectedFilters.selectedLocationFilter)&&p.a.createElement("div",{className:"selected-filter-wrapper"},p.a.createElement(et,null,"Selected Filters"),p.a.createElement(tt,null,Object.keys(this.props.selectedFilters).map((function(t){return null!==e.props.selectedFilters[t]?p.a.createElement(nt,{key:t,index:t},e.props.selectedFilters[t],p.a.createElement(rt,null,p.a.createElement(Qe.a,{style:{fontSize:20},onClick:function(){return e.handleClick(t,e.props.selectedFilters[t])}}))):""}))))}}]),n}(f.Component);function ot(){var e=b()(["\n  background: rgb(32, 35, 41);\n  padding: 0.5rem;\n  height: calc(100% - 8.5rem);\n  font-size: 10rem;\n"]);return ot=function(){return e},e}function ct(){var e=b()(["\n  color: red;\n  font-size: 1.4rem;\n  font-weight: 600;\n"]);return ct=function(){return e},e}var lt=V.a.h2(ct()),ut=V.a.div(ot());function st(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=q()(e);if(t){var a=q()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j()(this,n)}}var ft=function(e){O()(n,e);var t=st(n);function n(){var e;S()(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),z()(C()(e),"state",{loading:!1,data:null,filtersObject:{selectedFilters:{selectedSpeciesFilter:null,selectedGenderFilter:null,selectedLocationFilter:null},searchValue:null},pageSetting:{pageCount:null,pages:null,currentPage:1}}),z()(C()(e),"speciesFilterResponse",{key:"Species",value:["Human","Mytholog","Alien"]}),z()(C()(e),"genderFilterResponse",{key:"Human",value:["Male","Female"]}),z()(C()(e),"originFilterResponse",{key:"Status",value:["Alive","Dead","Unknown"]}),z()(C()(e),"fetchData",(function(t){e.setState({loading:!0},(function(){A(Te.ENDPOINT_URL,t,e.state.pageSetting).then((function(e){return e.json()})).then((function(t){var n=e.state.pageSetting;if(t.data.characters){var r=Math.round(t.data.characters.info.count/20);n.pages=t.data.characters.info.pages||0,n.pageCount=r}else n.pageCount=0;e.setState({loading:!1,data:t.data,pageSetting:n})}))}))})),z()(C()(e),"addFilter",(function(t,n){var r=e.state.filtersObject;n===e.speciesFilterResponse.key?r.selectedFilters.selectedSpeciesFilter=t:n===e.genderFilterResponse.key?r.selectedFilters.selectedGenderFilter=t:n===e.originFilterResponse.key&&(r.selectedFilters.selectedLocationFilter=t);var a=e.state.pageSetting;a.currentPage=1,e.setState({filtersObject:r,loading:!1,pageSetting:a}),e.fetchData(e.state.filtersObject)})),z()(C()(e),"removeFilter",(function(t,n){var r=e.state.filtersObject;r.selectedFilters[t]=null,e.resetFilterValue(n);var a=e.state.pageSetting;a.currentPage=1,e.setState({filtersObject:r,loading:!1,pageSetting:a}),e.fetchData(e.state.filtersObject)})),z()(C()(e),"resetFilterValue",(function(t){"speciesRef"===t?e.refs.speciesRef.removeFilterHandler():"genderRef"===t?e.refs.genderRef.removeFilterHandler():"locationRef"===t&&e.refs.locationRef.removeFilterHandler()})),z()(C()(e),"searchCharacterFn",(function(t){var n=e.state.filtersObject;n.searchValue=t,e.setState({loading:!1,filtersObject:n}),e.fetchData(e.state.filtersObject)})),z()(C()(e),"sortCharacterList",(function(t){var n=e.state.data;n.characters.results.reverse(),e.setState({data:n})})),z()(C()(e),"handlePagination",(function(t){var n=e.state.pageSetting;n.currentPage=t,e.setState({pageSetting:n}),e.fetchData(e.state.filtersObject)})),e}return R()(n,[{key:"componentDidMount",value:function(){this.fetchData(this.state.filtersObject)}},{key:"render",value:function(){return p.a.createElement(L.Container,null,p.a.createElement(L.Grid,{container:!0,spacing:4},p.a.createElement(L.Grid,{item:!0,xs:12,sm:3,md:2},p.a.createElement(lt,null,"Filters"),p.a.createElement("div",{className:"filter-wrapper"},p.a.createElement(Q,{filterResponse:this.speciesFilterResponse,addFilter:this.addFilter,ref:"speciesRef"}),p.a.createElement(Q,{filterResponse:this.genderFilterResponse,addFilter:this.addFilter,ref:"genderRef"}),p.a.createElement(Q,{filterResponse:this.originFilterResponse,addFilter:this.addFilter,ref:"locationRef"}))),p.a.createElement(L.Grid,{item:!0,xs:12,sm:9,md:10},p.a.createElement(L.Grid,{container:!0},p.a.createElement(L.Grid,{item:!0,xs:12,sm:12},p.a.createElement(it,{selectedFilters:this.state.filtersObject.selectedFilters,removeFilter:this.removeFilter})),p.a.createElement(L.Grid,{item:!0,xs:12,sm:6,md:4},p.a.createElement(Ve,{parentCallback:this.searchCharacterFn})),p.a.createElement(L.Grid,{item:!0,xs:12,sm:6,md:8},p.a.createElement(Ke,{SortCharacterListFn:this.sortCharacterList}))),p.a.createElement(ut,null,!this.state.loading&&this.state.data?p.a.createElement(p.a.Fragment,null,p.a.createElement(Ce,{data:this.state.data}),this.state.pageSetting.pageCount>0?p.a.createElement(G.Pagination,{id:"pagination",count:this.state.pageSetting.pageCount,page:this.state.pageSetting.currentPage,defaultPage:1,boundaryCount:5,color:"secondary",variant:"outlined",onChange:this.handlePagination}):""):p.a.createElement(L.CircularProgress,{color:"secondary"})))))}}]),n}(f.Component),pt=(n(24),n(25)),dt=n(26);(function(){var e=o()(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=pt(),n=new c.ApolloServer({typeDefs:x,resolvers:h}),e.next=4,dt();case 4:t.use("/static",pt.static(m.a.resolve(__dirname,"../build/public"))),t.use(pt.json()),t.use("*",(function(e,t){try{var n=Object(l.renderToString)(p.a.createElement(ft,null));s.a.readFile("./src/client/index.html",{encoding:"utf8"},(function(e,r){console.log("*******************Entered**************"),console.log(n),t.send(r.replace('<div id="root"></div>','<div id="root">'.concat(n,"</div>")))}))}catch(e){console.log(e),t.send("Server error")}})),t.listen({port:4e3},(function(){return console.log("🚀 Server ready at http://localhost:4000".concat(n.graphqlPath))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}]);