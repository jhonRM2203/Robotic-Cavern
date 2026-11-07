gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDlobbyObjects1= [];
gdjs.menuCode.GDlobbyObjects2= [];
gdjs.menuCode.GDjugadorObjects1= [];
gdjs.menuCode.GDjugadorObjects2= [];
gdjs.menuCode.GDbloque_9595colicionObjects1= [];
gdjs.menuCode.GDbloque_9595colicionObjects2= [];
gdjs.menuCode.GDcorazonObjects1= [];
gdjs.menuCode.GDcorazonObjects2= [];
gdjs.menuCode.GDvidaObjects1= [];
gdjs.menuCode.GDvidaObjects2= [];
gdjs.menuCode.GDplusObjects1= [];
gdjs.menuCode.GDplusObjects2= [];
gdjs.menuCode.GDtexto_9595puntuacionObjects1= [];
gdjs.menuCode.GDtexto_9595puntuacionObjects2= [];
gdjs.menuCode.GDtexto_9595nivelObjects1= [];
gdjs.menuCode.GDtexto_9595nivelObjects2= [];
gdjs.menuCode.GDfranja_9595hudObjects1= [];
gdjs.menuCode.GDfranja_9595hudObjects2= [];
gdjs.menuCode.GDburbujaObjects1= [];
gdjs.menuCode.GDburbujaObjects2= [];
gdjs.menuCode.GDrobot0Objects1= [];
gdjs.menuCode.GDrobot0Objects2= [];
gdjs.menuCode.GDbolt0Objects1= [];
gdjs.menuCode.GDbolt0Objects2= [];
gdjs.menuCode.GDrobot1Objects1= [];
gdjs.menuCode.GDrobot1Objects2= [];
gdjs.menuCode.GDbolt1Objects1= [];
gdjs.menuCode.GDbolt1Objects2= [];
gdjs.menuCode.GDfrutasObjects1= [];
gdjs.menuCode.GDfrutasObjects2= [];
gdjs.menuCode.GDpop_9595pequenoObjects1= [];
gdjs.menuCode.GDpop_9595pequenoObjects2= [];
gdjs.menuCode.GDtituloObjects1= [];
gdjs.menuCode.GDtituloObjects2= [];
gdjs.menuCode.GDgame_9595overObjects1= [];
gdjs.menuCode.GDgame_9595overObjects2= [];
gdjs.menuCode.GDboton_9595inicioObjects1= [];
gdjs.menuCode.GDboton_9595inicioObjects2= [];
gdjs.menuCode.GDpop_9595pequeno2Objects1= [];
gdjs.menuCode.GDpop_9595pequeno2Objects2= [];
gdjs.menuCode.GDfrutas2Objects1= [];
gdjs.menuCode.GDfrutas2Objects2= [];
gdjs.menuCode.GDboton_9595izquierdaObjects1= [];
gdjs.menuCode.GDboton_9595izquierdaObjects2= [];
gdjs.menuCode.GDboton_9595derechaObjects1= [];
gdjs.menuCode.GDboton_9595derechaObjects2= [];
gdjs.menuCode.GDboton_9595saltoObjects1= [];
gdjs.menuCode.GDboton_9595saltoObjects2= [];
gdjs.menuCode.GDboton_9595disparoObjects1= [];
gdjs.menuCode.GDboton_9595disparoObjects2= [];
gdjs.menuCode.GDfranja_9595hud2Objects1= [];
gdjs.menuCode.GDfranja_9595hud2Objects2= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDboton_95959595inicioObjects1Objects = Hashtable.newFrom({"boton_inicio": gdjs.menuCode.GDboton_9595inicioObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "espera");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "espera") >= 0.5;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_inicio"), gdjs.menuCode.GDboton_9595inicioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDboton_95959595inicioObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "espera") >= 0.5;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel1", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1.67);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDlobbyObjects1.length = 0;
gdjs.menuCode.GDlobbyObjects2.length = 0;
gdjs.menuCode.GDjugadorObjects1.length = 0;
gdjs.menuCode.GDjugadorObjects2.length = 0;
gdjs.menuCode.GDbloque_9595colicionObjects1.length = 0;
gdjs.menuCode.GDbloque_9595colicionObjects2.length = 0;
gdjs.menuCode.GDcorazonObjects1.length = 0;
gdjs.menuCode.GDcorazonObjects2.length = 0;
gdjs.menuCode.GDvidaObjects1.length = 0;
gdjs.menuCode.GDvidaObjects2.length = 0;
gdjs.menuCode.GDplusObjects1.length = 0;
gdjs.menuCode.GDplusObjects2.length = 0;
gdjs.menuCode.GDtexto_9595puntuacionObjects1.length = 0;
gdjs.menuCode.GDtexto_9595puntuacionObjects2.length = 0;
gdjs.menuCode.GDtexto_9595nivelObjects1.length = 0;
gdjs.menuCode.GDtexto_9595nivelObjects2.length = 0;
gdjs.menuCode.GDfranja_9595hudObjects1.length = 0;
gdjs.menuCode.GDfranja_9595hudObjects2.length = 0;
gdjs.menuCode.GDburbujaObjects1.length = 0;
gdjs.menuCode.GDburbujaObjects2.length = 0;
gdjs.menuCode.GDrobot0Objects1.length = 0;
gdjs.menuCode.GDrobot0Objects2.length = 0;
gdjs.menuCode.GDbolt0Objects1.length = 0;
gdjs.menuCode.GDbolt0Objects2.length = 0;
gdjs.menuCode.GDrobot1Objects1.length = 0;
gdjs.menuCode.GDrobot1Objects2.length = 0;
gdjs.menuCode.GDbolt1Objects1.length = 0;
gdjs.menuCode.GDbolt1Objects2.length = 0;
gdjs.menuCode.GDfrutasObjects1.length = 0;
gdjs.menuCode.GDfrutasObjects2.length = 0;
gdjs.menuCode.GDpop_9595pequenoObjects1.length = 0;
gdjs.menuCode.GDpop_9595pequenoObjects2.length = 0;
gdjs.menuCode.GDtituloObjects1.length = 0;
gdjs.menuCode.GDtituloObjects2.length = 0;
gdjs.menuCode.GDgame_9595overObjects1.length = 0;
gdjs.menuCode.GDgame_9595overObjects2.length = 0;
gdjs.menuCode.GDboton_9595inicioObjects1.length = 0;
gdjs.menuCode.GDboton_9595inicioObjects2.length = 0;
gdjs.menuCode.GDpop_9595pequeno2Objects1.length = 0;
gdjs.menuCode.GDpop_9595pequeno2Objects2.length = 0;
gdjs.menuCode.GDfrutas2Objects1.length = 0;
gdjs.menuCode.GDfrutas2Objects2.length = 0;
gdjs.menuCode.GDboton_9595izquierdaObjects1.length = 0;
gdjs.menuCode.GDboton_9595izquierdaObjects2.length = 0;
gdjs.menuCode.GDboton_9595derechaObjects1.length = 0;
gdjs.menuCode.GDboton_9595derechaObjects2.length = 0;
gdjs.menuCode.GDboton_9595saltoObjects1.length = 0;
gdjs.menuCode.GDboton_9595saltoObjects2.length = 0;
gdjs.menuCode.GDboton_9595disparoObjects1.length = 0;
gdjs.menuCode.GDboton_9595disparoObjects2.length = 0;
gdjs.menuCode.GDfranja_9595hud2Objects1.length = 0;
gdjs.menuCode.GDfranja_9595hud2Objects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDlobbyObjects1.length = 0;
gdjs.menuCode.GDlobbyObjects2.length = 0;
gdjs.menuCode.GDjugadorObjects1.length = 0;
gdjs.menuCode.GDjugadorObjects2.length = 0;
gdjs.menuCode.GDbloque_9595colicionObjects1.length = 0;
gdjs.menuCode.GDbloque_9595colicionObjects2.length = 0;
gdjs.menuCode.GDcorazonObjects1.length = 0;
gdjs.menuCode.GDcorazonObjects2.length = 0;
gdjs.menuCode.GDvidaObjects1.length = 0;
gdjs.menuCode.GDvidaObjects2.length = 0;
gdjs.menuCode.GDplusObjects1.length = 0;
gdjs.menuCode.GDplusObjects2.length = 0;
gdjs.menuCode.GDtexto_9595puntuacionObjects1.length = 0;
gdjs.menuCode.GDtexto_9595puntuacionObjects2.length = 0;
gdjs.menuCode.GDtexto_9595nivelObjects1.length = 0;
gdjs.menuCode.GDtexto_9595nivelObjects2.length = 0;
gdjs.menuCode.GDfranja_9595hudObjects1.length = 0;
gdjs.menuCode.GDfranja_9595hudObjects2.length = 0;
gdjs.menuCode.GDburbujaObjects1.length = 0;
gdjs.menuCode.GDburbujaObjects2.length = 0;
gdjs.menuCode.GDrobot0Objects1.length = 0;
gdjs.menuCode.GDrobot0Objects2.length = 0;
gdjs.menuCode.GDbolt0Objects1.length = 0;
gdjs.menuCode.GDbolt0Objects2.length = 0;
gdjs.menuCode.GDrobot1Objects1.length = 0;
gdjs.menuCode.GDrobot1Objects2.length = 0;
gdjs.menuCode.GDbolt1Objects1.length = 0;
gdjs.menuCode.GDbolt1Objects2.length = 0;
gdjs.menuCode.GDfrutasObjects1.length = 0;
gdjs.menuCode.GDfrutasObjects2.length = 0;
gdjs.menuCode.GDpop_9595pequenoObjects1.length = 0;
gdjs.menuCode.GDpop_9595pequenoObjects2.length = 0;
gdjs.menuCode.GDtituloObjects1.length = 0;
gdjs.menuCode.GDtituloObjects2.length = 0;
gdjs.menuCode.GDgame_9595overObjects1.length = 0;
gdjs.menuCode.GDgame_9595overObjects2.length = 0;
gdjs.menuCode.GDboton_9595inicioObjects1.length = 0;
gdjs.menuCode.GDboton_9595inicioObjects2.length = 0;
gdjs.menuCode.GDpop_9595pequeno2Objects1.length = 0;
gdjs.menuCode.GDpop_9595pequeno2Objects2.length = 0;
gdjs.menuCode.GDfrutas2Objects1.length = 0;
gdjs.menuCode.GDfrutas2Objects2.length = 0;
gdjs.menuCode.GDboton_9595izquierdaObjects1.length = 0;
gdjs.menuCode.GDboton_9595izquierdaObjects2.length = 0;
gdjs.menuCode.GDboton_9595derechaObjects1.length = 0;
gdjs.menuCode.GDboton_9595derechaObjects2.length = 0;
gdjs.menuCode.GDboton_9595saltoObjects1.length = 0;
gdjs.menuCode.GDboton_9595saltoObjects2.length = 0;
gdjs.menuCode.GDboton_9595disparoObjects1.length = 0;
gdjs.menuCode.GDboton_9595disparoObjects2.length = 0;
gdjs.menuCode.GDfranja_9595hud2Objects1.length = 0;
gdjs.menuCode.GDfranja_9595hud2Objects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
