(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{193:function(t,e,a){"use strict";a.r(e);var i=a(0),n=Object(i.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("Now that we have installed the Key/Value store, we can proceed with installing the Vault Service. Just like Consul, it can be be downloaded from "),a("a",{attrs:{href:"https://www.vaultproject.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.vaultproject.io/"),a("OutboundLink")],1),t._v(".")]),a("p",[t._v("We will need to create an init script in "),a("code",[t._v("/etc/init.d")]),t._v(" and register it as well. "),a("a",{attrs:{href:"https://bitbucket.org/snippets/sdsu-its/66bEM",target:"_blank",rel:"noopener noreferrer"}},[t._v("View the Script"),a("OutboundLink")],1),t._v(". You will also need to create a config file in "),a("code",[t._v("/etc")]),t._v(": "),a("code",[t._v("nano /etc/vault/config.hcl")]),t._v(". The default values should work well for our application.")]),t._m(1),t._m(2),t._m(3),a("p",[t._v("Once you have finished the installation and configuration, you will go back and edit the tcp listener to allow it to bind to a public ip, if desired, to allow outside requests to your vault.")]),t._m(4),t._m(5),a("p",[t._v("You are only able to call "),a("code",[t._v("vault init")]),t._v(" once on a brand new instance. Vault will initialize, generate encryption keys, and root tokens, and prints out a set of 5 keys and a root token, "),a("strong",[t._v("SAVE THEM")]),t._v("! Whenever you restart the Vault, or seal the vault, you will need 3 of the encryption keys to unseal the vault. This is to ensure that a single malicious individual cannot access the vault. Vault recommends that you encrypt (via PGP/"),a("a",{attrs:{href:"https://keybase.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Keybase"),a("OutboundLink")],1),t._v(") and distribute the keys to 5 different individuals, three of which are  needed to unlock the vault.")]),t._m(6),t._m(7),a("p",[t._v("Let's add your first secret, which is often used to test connection and Access Control Policies in your vault.")]),t._m(8),a("p",[t._v("It's that easy!")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"install-vault"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-vault","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Vault")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('backend "file" {\n path = "/etc/vault/data"\n}\n\nlistener "tcp" {\n address = "127.0.0.1:8200"\n tls_disable = 1\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Make the script executable via: "),e("code",[this._v("sudo chmod +x vault")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Register the script via: "),e("code",[this._v("sudo update-rc.d vault defaults")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"initialize-the-vault"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initialize-the-vault","aria-hidden":"true"}},[this._v("#")]),this._v(" Initialize the Vault")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Once you have installed and configured the Start Up scripts for both Vault and Consul, you can start the Vault Configuration procedure. To initialize the vault, you will need to call "),e("code",[this._v("vault init")]),this._v(". Vault will likely not know where to find vault, which you can do by setting the "),e("code",[this._v("VAULT_ADDR")]),this._v(" environment variable to point to the URL and Port of which you have configured the Vault. If you are running vault on your local machine (localhost), run "),e("code",[this._v("export VAULT_ADDR='https://127.0.0.1:8200'")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"your-first-secret"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#your-first-secret","aria-hidden":"true"}},[this._v("#")]),this._v(" Your First Secret")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Now that you have initialized your Vault, lets add your first secret. Unseal the Vault using the "),e("code",[this._v("vault unseal")]),this._v(" command and 3 of the 5 keys that your were provided with during the initialization; you will need to do this every time your seal, or restart the vault. Next, login via the "),e("code",[this._v("vault auth")]),this._v(" command and use the root token you were provided along with your keys. You can now access and modify the vault, as well as it's settings.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("vault write secret/hello value=world\n")])])])}],!1,null,null,null);e.default=n.exports}}]);