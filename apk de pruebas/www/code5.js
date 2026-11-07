gdjs.game_95overCode = {};
gdjs.game_95overCode.localVariables = [];
gdjs.game_95overCode.idToCallbackMap = new Map();
gdjs.game_95overCode.GDendingObjects1= [];
gdjs.game_95overCode.GDendingObjects2= [];
gdjs.game_95overCode.GDtexto_9595puntos_9595finalObjects1= [];
gdjs.game_95overCode.GDtexto_9595puntos_9595finalObjects2= [];
gdjs.game_95overCode.GDpuntosObjects1= [];
gdjs.game_95overCode.GDpuntosObjects2= [];
gdjs.game_95overCode.GDjugadorObjects1= [];
gdjs.game_95overCode.GDjugadorObjects2= [];
gdjs.game_95overCode.GDbloque_9595colicionObjects1= [];
gdjs.game_95overCode.GDbloque_9595colicionObjects2= [];
gdjs.game_95overCode.GDcorazonObjects1= [];
gdjs.game_95overCode.GDcorazonObjects2= [];
gdjs.game_95overCode.GDvidaObjects1= [];
gdjs.game_95overCode.GDvidaObjects2= [];
gdjs.game_95overCode.GDplusObjects1= [];
gdjs.game_95overCode.GDplusObjects2= [];
gdjs.game_95overCode.GDtexto_9595puntuacionObjects1= [];
gdjs.game_95overCode.GDtexto_9595puntuacionObjects2= [];
gdjs.game_95overCode.GDtexto_9595nivelObjects1= [];
gdjs.game_95overCode.GDtexto_9595nivelObjects2= [];
gdjs.game_95overCode.GDfranja_9595hudObjects1= [];
gdjs.game_95overCode.GDfranja_9595hudObjects2= [];
gdjs.game_95overCode.GDburbujaObjects1= [];
gdjs.game_95overCode.GDburbujaObjects2= [];
gdjs.game_95overCode.GDrobot0Objects1= [];
gdjs.game_95overCode.GDrobot0Objects2= [];
gdjs.game_95overCode.GDbolt0Objects1= [];
gdjs.game_95overCode.GDbolt0Objects2= [];
gdjs.game_95overCode.GDrobot1Objects1= [];
gdjs.game_95overCode.GDrobot1Objects2= [];
gdjs.game_95overCode.GDbolt1Objects1= [];
gdjs.game_95overCode.GDbolt1Objects2= [];
gdjs.game_95overCode.GDfrutasObjects1= [];
gdjs.game_95overCode.GDfrutasObjects2= [];
gdjs.game_95overCode.GDpop_9595pequenoObjects1= [];
gdjs.game_95overCode.GDpop_9595pequenoObjects2= [];
gdjs.game_95overCode.GDtituloObjects1= [];
gdjs.game_95overCode.GDtituloObjects2= [];
gdjs.game_95overCode.GDgame_9595overObjects1= [];
gdjs.game_95overCode.GDgame_9595overObjects2= [];
gdjs.game_95overCode.GDboton_9595inicioObjects1= [];
gdjs.game_95overCode.GDboton_9595inicioObjects2= [];
gdjs.game_95overCode.GDpop_9595pequeno2Objects1= [];
gdjs.game_95overCode.GDpop_9595pequeno2Objects2= [];
gdjs.game_95overCode.GDfrutas2Objects1= [];
gdjs.game_95overCode.GDfrutas2Objects2= [];
gdjs.game_95overCode.GDboton_9595izquierdaObjects1= [];
gdjs.game_95overCode.GDboton_9595izquierdaObjects2= [];
gdjs.game_95overCode.GDboton_9595derechaObjects1= [];
gdjs.game_95overCode.GDboton_9595derechaObjects2= [];
gdjs.game_95overCode.GDboton_9595saltoObjects1= [];
gdjs.game_95overCode.GDboton_9595saltoObjects2= [];
gdjs.game_95overCode.GDboton_9595disparoObjects1= [];
gdjs.game_95overCode.GDboton_9595disparoObjects2= [];
gdjs.game_95overCode.GDfranja_9595hud2Objects1= [];
gdjs.game_95overCode.GDfranja_9595hud2Objects2= [];


gdjs.game_95overCode.mapOfGDgdjs_9546game_959595overCode_9546GDboton_95959595inicioObjects1Objects = Hashtable.newFrom({"boton_inicio": gdjs.game_95overCode.GDboton_9595inicioObjects1});
gdjs.game_95overCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("texto_puntos_final"), gdjs.game_95overCode.GDtexto_9595puntos_9595finalObjects1);
{for(var i = 0, len = gdjs.game_95overCode.GDtexto_9595puntos_9595finalObjects1.length ;i < len;++i) {
    gdjs.game_95overCode.GDtexto_9595puntos_9595finalObjects1[i].getBehavior("Text").setText("PUNTUACION: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}
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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "espera") >= 1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_inicio"), gdjs.game_95overCode.GDboton_9595inicioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_9546game_959595overCode_9546GDboton_95959595inicioObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "espera") >= 1;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}
}

}


};

gdjs.game_95overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_95overCode.GDendingObjects1.length = 0;
gdjs.game_95overCode.GDendingObjects2.length = 0;
gdjs.game_95overCode.GDtexto_9595puntos_9595finalObjects1.length = 0;
gdjs.game_95overCode.GDtexto_9595puntos_9595finalObjects2.length = 0;
gdjs.game_95overCode.GDpuntosObjects1.length = 0;
gdjs.game_95overCode.GDpuntosObjects2.length = 0;
gdjs.game_95overCode.GDjugadorObjects1.length = 0;
gdjs.game_95overCode.GDjugadorObjects2.length = 0;
gdjs.game_95overCode.GDbloque_9595colicionObjects1.length = 0;
gdjs.game_95overCode.GDbloque_9595colicionObjects2.length = 0;
gdjs.game_95overCode.GDcorazonObjects1.length = 0;
gdjs.game_95overCode.GDcorazonObjects2.length = 0;
gdjs.game_95overCode.GDvidaObjects1.length = 0;
gdjs.game_95overCode.GDvidaObjects2.length = 0;
gdjs.game_95overCode.GDplusObjects1.length = 0;
gdjs.game_95overCode.GDplusObjects2.length = 0;
gdjs.game_95overCode.GDtexto_9595puntuacionObjects1.length = 0;
gdjs.game_95overCode.GDtexto_9595puntuacionObjects2.length = 0;
gdjs.game_95overCode.GDtexto_9595nivelObjects1.length = 0;
gdjs.game_95overCode.GDtexto_9595nivelObjects2.length = 0;
gdjs.game_95overCode.GDfranja_9595hudObjects1.length = 0;
gdjs.game_95overCode.GDfranja_9595hudObjects2.length = 0;
gdjs.game_95overCode.GDburbujaObjects1.length = 0;
gdjs.game_95overCode.GDburbujaObjects2.length = 0;
gdjs.game_95overCode.GDrobot0Objects1.length = 0;
gdjs.game_95overCode.GDrobot0Objects2.length = 0;
gdjs.game_95overCode.GDbolt0Objects1.length = 0;
gdjs.game_95overCode.GDbolt0Objects2.length = 0;
gdjs.game_95overCode.GDrobot1Objects1.length = 0;
gdjs.game_95overCode.GDrobot1Objects2.length = 0;
gdjs.game_95overCode.GDbolt1Objects1.length = 0;
gdjs.game_95overCode.GDbolt1Objects2.length = 0;
gdjs.game_95overCode.GDfrutasObjects1.length = 0;
gdjs.game_95overCode.GDfrutasObjects2.length = 0;
gdjs.game_95overCode.GDpop_9595pequenoObjects1.length = 0;
gdjs.game_95overCode.GDpop_9595pequenoObjects2.length = 0;
gdjs.game_95overCode.GDtituloObjects1.length = 0;
gdjs.game_95overCode.GDtituloObjects2.length = 0;
gdjs.game_95overCode.GDgame_9595overObjects1.length = 0;
gdjs.game_95overCode.GDgame_9595overObjects2.length = 0;
gdjs.game_95overCode.GDboton_9595inicioObjects1.length = 0;
gdjs.game_95overCode.GDboton_9595inicioObjects2.length = 0;
gdjs.game_95overCode.GDpop_9595pequeno2Objects1.length = 0;
gdjs.game_95overCode.GDpop_9595pequeno2Objects2.length = 0;
gdjs.game_95overCode.GDfrutas2Objects1.length = 0;
gdjs.game_95overCode.GDfrutas2Objects2.length = 0;
gdjs.game_95overCode.GDboton_9595izquierdaObjects1.length = 0;
gdjs.game_95overCode.GDboton_9595izquierdaObjects2.length = 0;
gdjs.game_95overCode.GDboton_9595derechaObjects1.length = 0;
gdjs.game_95overCode.GDboton_9595derechaObjects2.length = 0;
gdjs.game_95overCode.GDboton_9595saltoObjects1.length = 0;
gdjs.game_95overCode.GDboton_9595saltoObjects2.length = 0;
gdjs.game_95overCode.GDboton_9595disparoObjects1.length = 0;
gdjs.game_95overCode.GDboton_9595disparoObjects2.length = 0;
gdjs.game_95overCode.GDfranja_9595hud2Objects1.length = 0;
gdjs.game_95overCode.GDfranja_9595hud2Objects2.length = 0;

gdjs.game_95overCode.eventsList0(runtimeScene);
gdjs.game_95overCode.GDendingObjects1.length = 0;
gdjs.game_95overCode.GDendingObjects2.length = 0;
gdjs.game_95overCode.GDtexto_9595puntos_9595finalObjects1.length = 0;
gdjs.game_95overCode.GDtexto_9595puntos_9595finalObjects2.length = 0;
gdjs.game_95overCode.GDpuntosObjects1.length = 0;
gdjs.game_95overCode.GDpuntosObjects2.length = 0;
gdjs.game_95overCode.GDjugadorObjects1.length = 0;
gdjs.game_95overCode.GDjugadorObjects2.length = 0;
gdjs.game_95overCode.GDbloque_9595colicionObjects1.length = 0;
gdjs.game_95overCode.GDbloque_9595colicionObjects2.length = 0;
gdjs.game_95overCode.GDcorazonObjects1.length = 0;
gdjs.game_95overCode.GDcorazonObjects2.length = 0;
gdjs.game_95overCode.GDvidaObjects1.length = 0;
gdjs.game_95overCode.GDvidaObjects2.length = 0;
gdjs.game_95overCode.GDplusObjects1.length = 0;
gdjs.game_95overCode.GDplusObjects2.length = 0;
gdjs.game_95overCode.GDtexto_9595puntuacionObjects1.length = 0;
gdjs.game_95overCode.GDtexto_9595puntuacionObjects2.length = 0;
gdjs.game_95overCode.GDtexto_9595nivelObjects1.length = 0;
gdjs.game_95overCode.GDtexto_9595nivelObjects2.length = 0;
gdjs.game_95overCode.GDfranja_9595hudObjects1.length = 0;
gdjs.game_95overCode.GDfranja_9595hudObjects2.length = 0;
gdjs.game_95overCode.GDburbujaObjects1.length = 0;
gdjs.game_95overCode.GDburbujaObjects2.length = 0;
gdjs.game_95overCode.GDrobot0Objects1.length = 0;
gdjs.game_95overCode.GDrobot0Objects2.length = 0;
gdjs.game_95overCode.GDbolt0Objects1.length = 0;
gdjs.game_95overCode.GDbolt0Objects2.length = 0;
gdjs.game_95overCode.GDrobot1Objects1.length = 0;
gdjs.game_95overCode.GDrobot1Objects2.length = 0;
gdjs.game_95overCode.GDbolt1Objects1.length = 0;
gdjs.game_95overCode.GDbolt1Objects2.length = 0;
gdjs.game_95overCode.GDfrutasObjects1.length = 0;
gdjs.game_95overCode.GDfrutasObjects2.length = 0;
gdjs.game_95overCode.GDpop_9595pequenoObjects1.length = 0;
gdjs.game_95overCode.GDpop_9595pequenoObjects2.length = 0;
gdjs.game_95overCode.GDtituloObjects1.length = 0;
gdjs.game_95overCode.GDtituloObjects2.length = 0;
gdjs.game_95overCode.GDgame_9595overObjects1.length = 0;
gdjs.game_95overCode.GDgame_9595overObjects2.length = 0;
gdjs.game_95overCode.GDboton_9595inicioObjects1.length = 0;
gdjs.game_95overCode.GDboton_9595inicioObjects2.length = 0;
gdjs.game_95overCode.GDpop_9595pequeno2Objects1.length = 0;
gdjs.game_95overCode.GDpop_9595pequeno2Objects2.length = 0;
gdjs.game_95overCode.GDfrutas2Objects1.length = 0;
gdjs.game_95overCode.GDfrutas2Objects2.length = 0;
gdjs.game_95overCode.GDboton_9595izquierdaObjects1.length = 0;
gdjs.game_95overCode.GDboton_9595izquierdaObjects2.length = 0;
gdjs.game_95overCode.GDboton_9595derechaObjects1.length = 0;
gdjs.game_95overCode.GDboton_9595derechaObjects2.length = 0;
gdjs.game_95overCode.GDboton_9595saltoObjects1.length = 0;
gdjs.game_95overCode.GDboton_9595saltoObjects2.length = 0;
gdjs.game_95overCode.GDboton_9595disparoObjects1.length = 0;
gdjs.game_95overCode.GDboton_9595disparoObjects2.length = 0;
gdjs.game_95overCode.GDfranja_9595hud2Objects1.length = 0;
gdjs.game_95overCode.GDfranja_9595hud2Objects2.length = 0;


return;

}

gdjs['game_95overCode'] = gdjs.game_95overCode;
