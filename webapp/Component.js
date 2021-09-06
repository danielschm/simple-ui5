sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/core/mvc/XMLView",
	"sap/m/App",
	"sap/m/Shell"
], function(UIComponent, XMLView, App, Shell) {
	"use strict";
	return UIComponent.extend("myExampleApp.Component", {
		metadata: {
			manifest: "json"
		},

		init() {
			UIComponent.prototype.init.apply(this, arguments);
		},

		createContent: function () {
			window.oRouter = this.getRouter();
			window.app = new App("app");
			this.getRouter().initialize();

			return new Shell("shell", {
				showLogout: false,
				app: window.app
			});
		}
	});
});
