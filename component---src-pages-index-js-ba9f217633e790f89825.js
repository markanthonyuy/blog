webpackJsonp([35783957827783],{"./node_modules/babel-runtime/core-js/object/assign.js":function(e,o,t){e.exports={default:t("./node_modules/core-js/library/fn/object/assign.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/keys.js":function(e,o,t){e.exports={default:t("./node_modules/core-js/library/fn/object/keys.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/extends.js":function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0;var r=t("./node_modules/babel-runtime/core-js/object/assign.js"),n=s(r);o.default=n.default||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}},"./node_modules/babel-runtime/helpers/objectWithoutProperties.js":function(e,o){"use strict";o.__esModule=!0,o.default=function(e,o){var t={};for(var s in e)o.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}},"./node_modules/core-js/library/fn/object/assign.js":function(e,o,t){t("./node_modules/core-js/library/modules/es6.object.assign.js"),e.exports=t("./node_modules/core-js/library/modules/_core.js").Object.assign},"./node_modules/core-js/library/fn/object/keys.js":function(e,o,t){t("./node_modules/core-js/library/modules/es6.object.keys.js"),e.exports=t("./node_modules/core-js/library/modules/_core.js").Object.keys},"./node_modules/core-js/library/modules/_object-assign.js":function(e,o,t){"use strict";var s=t("./node_modules/core-js/library/modules/_object-keys.js"),r=t("./node_modules/core-js/library/modules/_object-gops.js"),n=t("./node_modules/core-js/library/modules/_object-pie.js"),l=t("./node_modules/core-js/library/modules/_to-object.js"),u=t("./node_modules/core-js/library/modules/_iobject.js"),a=Object.assign;e.exports=!a||t("./node_modules/core-js/library/modules/_fails.js")(function(){var e={},o={},t=Symbol(),s="abcdefghijklmnopqrst";return e[t]=7,s.split("").forEach(function(e){o[e]=e}),7!=a({},e)[t]||Object.keys(a({},o)).join("")!=s})?function(e,o){for(var t=l(e),a=arguments.length,d=1,i=r.f,c=n.f;a>d;)for(var j,b=u(arguments[d++]),m=i?s(b).concat(i(b)):s(b),f=m.length,_=0;f>_;)c.call(b,j=m[_++])&&(t[j]=b[j]);return t}:a},"./node_modules/core-js/library/modules/_object-sap.js":function(e,o,t){var s=t("./node_modules/core-js/library/modules/_export.js"),r=t("./node_modules/core-js/library/modules/_core.js"),n=t("./node_modules/core-js/library/modules/_fails.js");e.exports=function(e,o){var t=(r.Object||{})[e]||Object[e],l={};l[e]=o(t),s(s.S+s.F*n(function(){t(1)}),"Object",l)}},"./node_modules/core-js/library/modules/es6.object.assign.js":function(e,o,t){var s=t("./node_modules/core-js/library/modules/_export.js");s(s.S+s.F,"Object",{assign:t("./node_modules/core-js/library/modules/_object-assign.js")})},"./node_modules/core-js/library/modules/es6.object.keys.js":function(e,o,t){var s=t("./node_modules/core-js/library/modules/_to-object.js"),r=t("./node_modules/core-js/library/modules/_object-keys.js");t("./node_modules/core-js/library/modules/_object-sap.js")("keys",function(){return function(e){return r(s(e))}})},"./node_modules/gatsby-link/index.js":function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e){return e.replace(/^\/\//g,"/")}o.__esModule=!0,o.navigateTo=void 0;var n=t("./node_modules/babel-runtime/helpers/extends.js"),l=s(n),u=t("./node_modules/babel-runtime/core-js/object/keys.js"),a=s(u),d=t("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),i=s(d),c=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),j=s(c),b=t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),m=s(b),f=t("./node_modules/babel-runtime/helpers/inherits.js"),_=s(f),p=t("./node_modules/react/react.js"),y=s(p),g=t("./node_modules/react-router-dom/index.js"),v=t("./node_modules/prop-types/index.js"),h=s(v),x="/",k={activeClassName:h.default.string,activeStyle:h.default.object,exact:h.default.bool,strict:h.default.bool,isActive:h.default.func,location:h.default.object},C=function(e){function o(t){(0,j.default)(this,o);var s=(0,m.default)(this,e.call(this));return s.state={to:r(x+t.to)},s}return(0,_.default)(o,e),o.prototype.componentWillReceiveProps=function(e){this.props.to!==e.to&&(this.setState({to:r(x+e.to)}),___loader.enqueue(this.state.to))},o.prototype.componentDidMount=function(){___loader.enqueue(this.state.to)},o.prototype.render=function(){var e=this,o=this.props,t=o.onClick,s=(0,i.default)(o,["onClick"]);if((0,a.default)(k).some(function(o){return e.props[o]}))var r=g.NavLink;else var r=g.Link;return y.default.createElement(r,(0,l.default)({onClick:function(e){function o(o){return e.apply(this,arguments)}return o.toString=function(){return e.toString()},o}(function(o){if(t&&t(o),!(0!==o.button||e.props.target||o.defaultPrevented||o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)){var s=e.state.to;if(s.split("#").length>1&&(s=s.split("#").slice(0,-1).join("")),s===window.location.pathname){var r=e.state.to.split("#").slice(1).join("#"),n=document.getElementById(r);if(null!==n)return n.scrollIntoView(),!0}o.preventDefault(),window.___navigateTo(e.state.to)}})},s,{to:this.state.to}))},o}(y.default.Component);C.contextTypes={router:h.default.object},o.default=C;o.navigateTo=function(e){window.___navigateTo(r(x+e))}},'./node_modules/babel-loader/lib/index.js?{"plugins":["C:/Users/user/Documents/project/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","C:/Users/user/Documents/project/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/Users/user/Documents/project/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["C:/Users/user/Documents/project/blog/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"C:/Users/user/Documents/project/blog/node_modules/babel-preset-stage-0/lib/index.js","C:/Users/user/Documents/project/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js':function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0,o.pageQuery=void 0;var r=t("./node_modules/react/react.js"),n=s(r),l=t("./node_modules/gatsby-link/index.js"),u=s(l),a=function(e){var o=e.data;return n.default.createElement("div",{className:"post-list"},o.allMarkdownRemark.edges.map(function(e){return n.default.createElement("div",{className:"post-item",key:e.node.id},n.default.createElement("h2",null,n.default.createElement(u.default,{to:e.node.frontmatter.path},e.node.frontmatter.title)),n.default.createElement("p",null,e.node.frontmatter.date," | By: Mark Anthony Uy"))}))};o.pageQuery="** extracted graphql fragment **";o.default=a}});
//# sourceMappingURL=component---src-pages-index-js-ba9f217633e790f89825.js.map