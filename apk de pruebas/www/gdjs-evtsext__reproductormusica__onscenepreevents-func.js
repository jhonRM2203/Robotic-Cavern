
if (typeof gdjs.evtsExt__ReproductorMusica__onScenePreEvents !== "undefined") {
  gdjs.evtsExt__ReproductorMusica__onScenePreEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ReproductorMusica__onScenePreEvents = {};
gdjs.evtsExt__ReproductorMusica__onScenePreEvents.idToCallbackMap = new Map();


gdjs.evtsExt__ReproductorMusica__onScenePreEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(3).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 0);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(3).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setNumber(1 + gdjs.random(gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(4)) - 1));
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0)));
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(1)), gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(4))) + 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_1.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_2.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_3.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 4);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_4.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 5);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_5.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 6);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_6.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 7);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_7.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 8);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_8.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 9);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_9.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 10);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_10.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 11);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_11.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 12);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_12.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 13);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_13.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 14);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_14.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 15);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_15.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 16);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_16.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 17);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_17.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 18);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_18.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 19);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_19.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsNumber() == 20);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "img new/soundtrack/musica del juego/musica_20.mp3", 0, false, gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(1)));
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).setNumber(0);
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(3).setNumber(1);
}
}

}


};

gdjs.evtsExt__ReproductorMusica__onScenePreEvents.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ReproductorMusica"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ReproductorMusica"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ReproductorMusica__onScenePreEvents.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ReproductorMusica__onScenePreEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__ReproductorMusica__onScenePreEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__ReproductorMusica__onScenePreEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePreEventsCallback(gdjs.evtsExt__ReproductorMusica__onScenePreEvents.registeredGdjsCallbacks[gdjs.evtsExt__ReproductorMusica__onScenePreEvents.registeredGdjsCallbacks.length - 1]);
