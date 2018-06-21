(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{167:function(e,t,i){e.exports=i.p+"assets/img/Admin-Item-History.1ec61fa3.png"},168:function(e,t,i){e.exports=i.p+"assets/img/Admin-Item-Edit.b4dc1e68.png"},169:function(e,t,i){e.exports=i.p+"assets/img/Admin-Item-New.53016009.png"},170:function(e,t,i){e.exports=i.p+"assets/img/Admin-Items-List.61edbe1b.png"},181:function(e,t,i){"use strict";i.r(t);var a=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(170),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"create-new-inventory-item"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-new-inventory-item","aria-hidden":"true"}},[this._v("#")]),this._v(" Create New Inventory Item")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(169),alt:""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("The Name is used to refer to the item throughout the system, especially when creating new transactions (checking out or in items). There is essentially no limit on the length of this string, so be descriptive. The short name can be used to quickly identify an item that looks similar to another item, like an SD Card. These are limited to 9 characters in length, and if left blank, the default string will be printed instead. To change the default item name, you will need to modify the Class Constant "),i("code",[e._v("ITEM_LABEL_SHORT_DEFAULT")]),e._v(" in "),i("code",[e._v("src/main/java/edu/sdsu/its/video_inv/Label.java")]),e._v(". Additionally you will need to modify the help text in the Create and Edit Modals in "),i("code",[e._v("views/admin-items.view")]),e._v(". The help texts are Paragraphs with the class "),i("code",[e._v("help-block")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"edit-an-item"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edit-an-item","aria-hidden":"true"}},[this._v("#")]),this._v(" Edit an Item")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(168),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"view-an-item-s-history"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-an-item-s-history","aria-hidden":"true"}},[this._v("#")]),this._v(" View an Item's History")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(167),alt:""}})])}],n=i(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),i("p",[e._v("Items are the smallest unit in your inventory, and serve as building blocks through the system. Every item is assigned a unique 6-digit public identifier, which is printed on the barcode. While the code printed on the barcode may be 8 digits, only the middle 6 are used to determine the item's ID, because the barcodes are UPC-E Codes, which must start with either a 0 or 1, and end in a calculated check-sum digit.")]),e._m(1),i("p",[e._v('When you click on the "Items" sub-menu in the Admin view, all of the inventory items will be loaded in creation order. You can click on any column header, except for "View History" and "Edit Item" and the list will be sorted either in ascending or descending order based on that column. If you are looking for a specific item, you can use your browser\'s find tool to locate it.')]),e._m(2),i("p",[e._v('To create a new inventory item, click on the green "Create New Item" button at the top of the list view. A modal prompting you for the item details should appear.')]),e._m(3),e._m(4),e._m(5),i("p",[e._v('To modify or reprint an item label, click on the "Edit" button that corresponds to the item you would like to edit. A modal with the item details should appear. Depending on the size of your inventory, it may take a moment to load.')]),e._m(6),i("p",[e._v("From here you can change the item's name, short name or category. If you would like to create a "),i("router-link",{attrs:{to:"./categories.html"}},[e._v("category")]),e._v(', you will need to go to that submenu first and create it. You may find that for some items, the delete button has been disabled, this is because once an item has been checked out at least once, it can no longer be deleted. While an item can always be updated, only items that have never been associated with a transaction can be deleted. This is done to ensure the integrity of the transaction database. When you are done, click the "Update Item" button to return to the list view.')],1),i("p",[e._v("While you can edit an item to become a completely different item, this is strongly discouraged as the item is used to generate past transaction reports and item history. Updates should always keep the spirit of an item to ensure that transaction history, past, present, and future, is maintained.")]),e._m(7),i("p",[e._v('Once an item has at least one transaction associated with it, the "View History" button in the list view will be enabled, and clicking on that button will show a list of all transactions that that item has been associated with.')]),e._m(8),i("p",[e._v("From here, you can see all of the transactions, the direction of the transaction (in or out), as well as who completed and approved the transaction. Each transaction generates a Transaction Receipt which list all of the items in that transaction, as well as some additional pertinent information. The specific details of Transaction Receipts will be discussed in the "),i("router-link",{attrs:{to:"./transactions.html"}},[e._v("Transactions")]),e._v(" section.")],1)])},a,!1,null,null,null);t.default=s.exports}}]);