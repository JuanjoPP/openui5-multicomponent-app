sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/Component", "../model/formatter"],
  function(Controller, Component, formatter) {
    "use strict";

    return Controller.extend(
      "ui.demo.multiComponent.app.RootComponent.controller.Component1View",
      {
        formatter: formatter,

        onInit: function() {
          if (!Component.get("sub1Component")) {
            Component.create({
              name: "ui.demo.multiComponent.app.Sub1Component",
              id: "sub1Component"
            }).then(
              function(Component) {
                this.getView()
                  .byId("sub1CmpCtr")
                  .setComponent(Component);
              }.bind(this)
            );
          }
        }
      }
    );
  }
);
