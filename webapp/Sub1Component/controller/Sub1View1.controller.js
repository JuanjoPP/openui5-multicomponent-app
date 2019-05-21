sap.ui.define(["sap/ui/core/mvc/Controller", "../model/formatter"], function(
  Controller,
  formatter
) {
  "use strict";

  return Controller.extend(
    "ui.demo.multiComponent.app.Sub1Component.controller.Sub1View1",
    {
      formatter: formatter,

      onInit: function() {},

      onPressNav2Button: function() {
        this.getOwnerComponent()
          .getRouter()
          .navTo("sub1view2");
      },

      onPressNavSub2Button: function() {
        sap.ui
          .getCore()
          .getEventBus()
          .publish("nav", "sub2component:view1");
      }
    }
  );
});
