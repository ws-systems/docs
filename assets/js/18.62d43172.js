(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{217:function(t,e,a){"use strict";a.r(e);var i=a(0),n=Object(i.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("The Video Inventory Management system is packaged as a ready to deploy WAR file, which can be deployed to any modern Tomcat container. VIMS uses environment variables to load in the Vault server URL, App Role, and App Secret.")]),t._m(1),t._m(2),a("p",[t._v("By default the setenv script file is absent. If the script file is present both in CATALINA_BASE and in CATALINA_HOME, the one in CATALINA_BASE is preferred.")]),t._m(3),t._m(4),a("p",[t._v("You will need to create two secrets in the vault, one that will have the information for your production system, the other with your testing configuration. Information on how to setup Vault and AppRoles can be found in the "),a("router-link",{attrs:{to:"/vault/"}},[t._v("Vault Documentation")]),t._v(".")],1),t._m(5),a("p",[t._v("You will need to configure a MySQL Database with the "),a("router-link",{attrs:{to:"./erd.html"}},[t._v("DDL provided")]),t._v(". It is recommended that you create a user that has all permissions, however is restricted to only the database you just created. You can also implement IP restrictions if you desire.")],1),t._m(6),t._m(7),t._m(8),t._m(9),a("p",[t._v("Be sure to replace db_host, db_name and possibly the port with your MySQL server info")]),t._m(10),a("p",[t._v("On the first run, provided there are no users in your User's table, a default Admin user will be created.")]),t._m(11),t._m(12),a("p",[t._v("It is highly recommended that you either delete the admin user, or at a minimum change the admin password.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deployment","aria-hidden":"true"}},[this._v("#")]),this._v(" Deployment")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tomcat-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tomcat-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Tomcat Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To set environment variables in Tomcat, you will need to define them in either the "),e("code",[this._v("setenv.sh")]),this._v(" or "),e("code",[this._v("setenv.bat")]),this._v(" file. The script is placed either into CATALINA_BASE/bin or into CATALINA_HOME/bin directory and is named setenv.bat (on Windows) or setenv.sh (on *nix). The file has to be readable.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In that file, you can define environment variables as you would on the base system (linux, windows, etc.). For example on Debian Linux, we would have "),e("code",[this._v('export VAULT_ADDR="https://url:port"')]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vault-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vault-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Vault Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"db-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#db-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" DB Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"environment-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Environment Variables")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Value")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("VAULT_ADDR")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Vault URL, including protocol and port number")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("VAULT_ROLE")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("App Role ID")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("VAULT_SECRET")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("App Role Secret")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"vault-secrets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vault-secrets","aria-hidden":"true"}},[this._v("#")]),this._v(" Vault Secrets")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Value")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("db-url")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("jdbc:mysql://db_host:3306/db_name")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("db-url")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Database Username")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("db-password")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Database Password")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("project_token")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Unique Project Identifier for Session Tokens, If changed, all tokens will become invalid.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("token_cypher")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Token Encryption Cypher. If changed, all tokens will become invalid.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("token_ttl")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Token Longevity (How long will a user stay logged in) in Milliseconds Recommended Value: 86400000 -> 24 Hours.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"default-credentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-credentials","aria-hidden":"true"}},[this._v("#")]),this._v(" Default Credentials")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Username: "),e("code",[this._v("admin")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Password: "),e("code",[this._v("admin")])])}],!1,null,null,null);e.default=n.exports}}]);