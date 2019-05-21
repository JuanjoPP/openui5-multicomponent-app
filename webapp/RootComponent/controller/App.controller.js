sap.ui.define(
  ["sap/ui/core/mvc/Controller", "ui/demo/multiComponent/app/RootComponent/model/formatter"],
  function(Controller, formatter) {
    "use strict";

    return Controller.extend(
      "ui.demo.multiComponent.app.RootComponent.controller.App",
      {
        formatter: formatter,

        onInit: function() {}
      }
    );
  }
);
