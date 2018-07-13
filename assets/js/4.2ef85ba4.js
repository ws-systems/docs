(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{194:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._m(1),s("p",[e._v("By default, TLS (HTTPS) is disabled for simplicity; however, if we want to ensure the security of our secrets when we access them via the API, we want to encrypt the traffic between our API Client and the Vault Server. You can either use a Certificate/Key set that you already have provisioned for your machine, provided that you use the servers FQDN in your "),s("code",[e._v("VAULT_ADDR")]),e._v(" environment variable. You may need to add the Root CA to your machine's trusted CA list, which will vary by OS. If you would like to generate your own CA and Certificate/Key pair, Sam Dunne has a great tutorial: "),s("a",{attrs:{href:"http://dunne.io/vault-and-self-signed-ssl-certificates",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://dunne.io/vault-and-self-signed-ssl-certificates"),s("OutboundLink")],1),e._v(".")]),e._m(2),e._m(3),e._m(4),s("p",[e._v("Using tokens is annoying, would it not be simpler to use a username/password combination? Conveniently, Vault supports this feature nativity. To enable, run "),s("code",[e._v("vault auth-enable userpass")]),e._v(" on your unsealed vault. You can then create new users via the following command, with the respective "),s("router-link",{attrs:{to:"./access_control.html"}},[e._v("Access Policy")]),e._v(":")],1),e._m(5),s("p",[e._v("To login, use the following command, be sure to substitute in your username in the command.")]),e._m(6),s("p",[e._v("To change your password, use the following command, subsituting in your username and desired new password.")]),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),s("p",[e._v("We will be using AppRoles in Push mode to simplify the API process, which requires us to have the server set the Secret-id ahead of time. Use the following command to do this:")]),e._m(13),s("p",[e._v("Make note of both the role-id and the secret-id as both will be needed by the app to request an access token with the previously mentioned policy.")]),e._m(14),s("p",[e._v("If you want to speed up this process, you can use a shell script, which can be found on "),s("a",{attrs:{href:"https://bitbucket.org/snippets/sdsu-its/yyrE5",target:"_blank",rel:"noopener noreferrer"}},[e._v("BitBucket"),s("OutboundLink")],1),e._v(", which takes the app name and ACL Policy as command line arguments and prints out the role and secret ID.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"configure-vault"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-vault","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure Vault")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configure-tls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-tls","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure TLS")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("In the end, your TCP listener should look something like the following, with the paths and file names adjusted for your specific "),s("code",[e._v("crt")]),e._v(" and "),s("code",[e._v("key")]),e._v(". If you are comfortable at this point, you can expose your server publicly, by replacing "),s("code",[e._v("127.0.0.1")]),e._v(" with your public IP. "),s("em",[e._v("Note, that you will not be able to access the server via localhost, unless you have re-configured your hosts file.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('listener "tcp" {\n address = "127.0.0.1:8200"\n tls_cert_file= "/etc/vault/ssl/vault.crt",\n tls_key_file="/etc/vault/ssl/vault.key"\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configure-users"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-users","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure Users")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("vault write auth/userpass/users/username \\\n    password=password \\\n    policies=access_level\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("vault auth -method=userpass username=username\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("vault write auth/userpass/users/username password=password\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configure-apps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-apps","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure Apps")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('First, we will need to enable "AppRoles" which will allow our apps to authenticate themselves with the Vault. To do this we run '),t("code",[this._v("vault auth-enable approle")]),this._v('. Now, we will create as many "AppRoles" as we need. Use the line below as a staring point for your AppRole Creation command:')])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("vault write auth/approle/role/role-name policies=app token_ttl=1200\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This will create the role, to get the role-id, enter the following command with the "),t("code",[this._v("role-name")]),this._v(" from the above statement:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("vault read auth/approle/role/role-name/role-id\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("vault write -f auth/approle/role/role-name/secret-id\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"provisioning-automation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#provisioning-automation","aria-hidden":"true"}},[this._v("#")]),this._v(" Provisioning Automation")])}],!1,null,null,null);t.default=r.exports}}]);