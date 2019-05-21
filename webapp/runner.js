sap.ui.require(
  [
    "sap/m/Shell",
    "sap/ui/core/ComponentContainer",
    "sap/ui/core/routing/HashChanger"
  ],
  function(Shell, ComponentContainer, HashChanger) {
    "use strict";
    //Busy application
    sap.ui.core.BusyIndicator.show(0);

    //Set root component at content div
    new Shell({
      app: new ComponentContainer({
        async: true,
        name: "ui.demo.multiComponent.app.RootComponent",
        height: "100%"
      })
    }).placeAt("content");

    //Set initial view to sub1Component/view1
    HashChanger.getInstance().setHash("component1/view1");
  }
);
