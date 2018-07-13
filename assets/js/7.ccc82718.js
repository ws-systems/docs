(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{211:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._m(1),s("p",[e._v("The Policies can be stored wherever, as the need to be loaded into the Vault before they can be assigned. The command below reads a Policy written in HCL into the Vault with the desired policy name.")]),e._m(2),s("p",[e._v("Some of the ACLs that we use are listed below for your reference, and a more detailed list can be found in the "),s("a",{attrs:{href:"https://www.vaultproject.io/docs/concepts/policies.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vault Documentation"),s("OutboundLink")],1),e._v(".")]),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"access-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-control","aria-hidden":"true"}},[this._v("#")]),this._v(" Access Control")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Access Control Policies allow the Vault to strategically grant access to certain tokens, based on their policy which is defined when the Application, User, Token, etc. is created. Notice, it grants permission, that is because Vault has a whitelist policy on permissions, and defaults to deny all without ACL that grants the desired permissions. "),t("em",[this._v("While the default policy allows for some changes to be made, those are necessary to allow the user to renew, request a new token, or revoke their token.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("vault policy-write policy-name acl.hcl")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"sample-acls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sample-acls","aria-hidden":"true"}},[this._v("#")]),this._v(" Sample ACLs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"admin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#admin","aria-hidden":"true"}},[this._v("#")]),this._v(" Admin")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('path "secret/*" {\n  policy = "sudo"\n}\n\npath "sys/*" {\n  policy = "sudo"\n}\n\npath "auth/*" {\n  policy = "sudo"\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user","aria-hidden":"true"}},[this._v("#")]),this._v(" User")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('path "secrets/*" {\n  policy = "write"\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app","aria-hidden":"true"}},[this._v("#")]),this._v(" App")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('path "secret/*" {\n capabilities = ["read", "list"]\n}\n\npath "sys/*" {\n capabilities = ["deny"]\n}\n')])])])}],!1,null,null,null);t.default=r.exports}}]);