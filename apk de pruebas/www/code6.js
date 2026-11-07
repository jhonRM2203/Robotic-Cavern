gdjs.entrada1Code = {};
gdjs.entrada1Code.localVariables = [];
gdjs.entrada1Code.idToCallbackMap = new Map();
gdjs.entrada1Code.GDentrada1Objects1= [];
gdjs.entrada1Code.GDentrada1Objects2= [];
gdjs.entrada1Code.GDjugadorObjects1= [];
gdjs.entrada1Code.GDjugadorObjects2= [];
gdjs.entrada1Code.GDbloque_9595colicionObjects1= [];
gdjs.entrada1Code.GDbloque_9595colicionObjects2= [];
gdjs.entrada1Code.GDcorazonObjects1= [];
gdjs.entrada1Code.GDcorazonObjects2= [];
gdjs.entrada1Code.GDvidaObjects1= [];
gdjs.entrada1Code.GDvidaObjects2= [];
gdjs.entrada1Code.GDplusObjects1= [];
gdjs.entrada1Code.GDplusObjects2= [];
gdjs.entrada1Code.GDtexto_9595puntuacionObjects1= [];
gdjs.entrada1Code.GDtexto_9595puntuacionObjects2= [];
gdjs.entrada1Code.GDtexto_9595nivelObjects1= [];
gdjs.entrada1Code.GDtexto_9595nivelObjects2= [];
gdjs.entrada1Code.GDfranja_9595hudObjects1= [];
gdjs.entrada1Code.GDfranja_9595hudObjects2= [];
gdjs.entrada1Code.GDburbujaObjects1= [];
gdjs.entrada1Code.GDburbujaObjects2= [];
gdjs.entrada1Code.GDrobot0Objects1= [];
gdjs.entrada1Code.GDrobot0Objects2= [];
gdjs.entrada1Code.GDbolt0Objects1= [];
gdjs.entrada1Code.GDbolt0Objects2= [];
gdjs.entrada1Code.GDrobot1Objects1= [];
gdjs.entrada1Code.GDrobot1Objects2= [];
gdjs.entrada1Code.GDbolt1Objects1= [];
gdjs.entrada1Code.GDbolt1Objects2= [];
gdjs.entrada1Code.GDfrutasObjects1= [];
gdjs.entrada1Code.GDfrutasObjects2= [];
gdjs.entrada1Code.GDpop_9595pequenoObjects1= [];
gdjs.entrada1Code.GDpop_9595pequenoObjects2= [];
gdjs.entrada1Code.GDtituloObjects1= [];
gdjs.entrada1Code.GDtituloObjects2= [];
gdjs.entrada1Code.GDgame_9595overObjects1= [];
gdjs.entrada1Code.GDgame_9595overObjects2= [];
gdjs.entrada1Code.GDboton_9595inicioObjects1= [];
gdjs.entrada1Code.GDboton_9595inicioObjects2= [];
gdjs.entrada1Code.GDpop_9595pequeno2Objects1= [];
gdjs.entrada1Code.GDpop_9595pequeno2Objects2= [];
gdjs.entrada1Code.GDfrutas2Objects1= [];
gdjs.entrada1Code.GDfrutas2Objects2= [];
gdjs.entrada1Code.GDboton_9595izquierdaObjects1= [];
gdjs.entrada1Code.GDboton_9595izquierdaObjects2= [];
gdjs.entrada1Code.GDboton_9595derechaObjects1= [];
gdjs.entrada1Code.GDboton_9595derechaObjects2= [];
gdjs.entrada1Code.GDboton_9595saltoObjects1= [];
gdjs.entrada1Code.GDboton_9595saltoObjects2= [];
gdjs.entrada1Code.GDboton_9595disparoObjects1= [];
gdjs.entrada1Code.GDboton_9595disparoObjects2= [];
gdjs.entrada1Code.GDfranja_9595hud2Objects1= [];
gdjs.entrada1Code.GDfranja_9595hud2Objects2= [];


gdjs.entrada1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("entrada1"), gdjs.entrada1Code.GDentrada1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.entrada1Code.GDentrada1Objects1.length;i<l;++i) {
    if ( gdjs.entrada1Code.GDentrada1Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.entrada1Code.GDentrada1Objects1[k] = gdjs.entrada1Code.GDentrada1Objects1[i];
        ++k;
    }
}
gdjs.entrada1Code.GDentrada1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "entrada2", false);
}
}

}


};

gdjs.entrada1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.entrada1Code.GDentrada1Objects1.length = 0;
gdjs.entrada1Code.GDentrada1Objects2.length = 0;
gdjs.entrada1Code.GDjugadorObjects1.length = 0;
gdjs.entrada1Code.GDjugadorObjects2.length = 0;
gdjs.entrada1Code.GDbloque_9595colicionObjects1.length = 0;
gdjs.entrada1Code.GDbloque_9595colicionObjects2.length = 0;
gdjs.entrada1Code.GDcorazonObjects1.length = 0;
gdjs.entrada1Code.GDcorazonObjects2.length = 0;
gdjs.entrada1Code.GDvidaObjects1.length = 0;
gdjs.entrada1Code.GDvidaObjects2.length = 0;
gdjs.entrada1Code.GDplusObjects1.length = 0;
gdjs.entrada1Code.GDplusObjects2.length = 0;
gdjs.entrada1Code.GDtexto_9595puntuacionObjects1.length = 0;
gdjs.entrada1Code.GDtexto_9595puntuacionObjects2.length = 0;
gdjs.entrada1Code.GDtexto_9595nivelObjects1.length = 0;
gdjs.entrada1Code.GDtexto_9595nivelObjects2.length = 0;
gdjs.entrada1Code.GDfranja_9595hudObjects1.length = 0;
gdjs.entrada1Code.GDfranja_9595hudObjects2.length = 0;
gdjs.entrada1Code.GDburbujaObjects1.length = 0;
gdjs.entrada1Code.GDburbujaObjects2.length = 0;
gdjs.entrada1Code.GDrobot0Objects1.length = 0;
gdjs.entrada1Code.GDrobot0Objects2.length = 0;
gdjs.entrada1Code.GDbolt0Objects1.length = 0;
gdjs.entrada1Code.GDbolt0Objects2.length = 0;
gdjs.entrada1Code.GDrobot1Objects1.length = 0;
gdjs.entrada1Code.GDrobot1Objects2.length = 0;
gdjs.entrada1Code.GDbolt1Objects1.length = 0;
gdjs.entrada1Code.GDbolt1Objects2.length = 0;
gdjs.entrada1Code.GDfrutasObjects1.length = 0;
gdjs.entrada1Code.GDfrutasObjects2.length = 0;
gdjs.entrada1Code.GDpop_9595pequenoObjects1.length = 0;
gdjs.entrada1Code.GDpop_9595pequenoObjects2.length = 0;
gdjs.entrada1Code.GDtituloObjects1.length = 0;
gdjs.entrada1Code.GDtituloObjects2.length = 0;
gdjs.entrada1Code.GDgame_9595overObjects1.length = 0;
gdjs.entrada1Code.GDgame_9595overObjects2.length = 0;
gdjs.entrada1Code.GDboton_9595inicioObjects1.length = 0;
gdjs.entrada1Code.GDboton_9595inicioObjects2.length = 0;
gdjs.entrada1Code.GDpop_9595pequeno2Objects1.length = 0;
gdjs.entrada1Code.GDpop_9595pequeno2Objects2.length = 0;
gdjs.entrada1Code.GDfrutas2Objects1.length = 0;
gdjs.entrada1Code.GDfrutas2Objects2.length = 0;
gdjs.entrada1Code.GDboton_9595izquierdaObjects1.length = 0;
gdjs.entrada1Code.GDboton_9595izquierdaObjects2.length = 0;
gdjs.entrada1Code.GDboton_9595derechaObjects1.length = 0;
gdjs.entrada1Code.GDboton_9595derechaObjects2.length = 0;
gdjs.entrada1Code.GDboton_9595saltoObjects1.length = 0;
gdjs.entrada1Code.GDboton_9595saltoObjects2.length = 0;
gdjs.entrada1Code.GDboton_9595disparoObjects1.length = 0;
gdjs.entrada1Code.GDboton_9595disparoObjects2.length = 0;
gdjs.entrada1Code.GDfranja_9595hud2Objects1.length = 0;
gdjs.entrada1Code.GDfranja_9595hud2Objects2.length = 0;

gdjs.entrada1Code.eventsList0(runtimeScene);
gdjs.entrada1Code.GDentrada1Objects1.length = 0;
gdjs.entrada1Code.GDentrada1Objects2.length = 0;
gdjs.entrada1Code.GDjugadorObjects1.length = 0;
gdjs.entrada1Code.GDjugadorObjects2.length = 0;
gdjs.entrada1Code.GDbloque_9595colicionObjects1.length = 0;
gdjs.entrada1Code.GDbloque_9595colicionObjects2.length = 0;
gdjs.entrada1Code.GDcorazonObjects1.length = 0;
gdjs.entrada1Code.GDcorazonObjects2.length = 0;
gdjs.entrada1Code.GDvidaObjects1.length = 0;
gdjs.entrada1Code.GDvidaObjects2.length = 0;
gdjs.entrada1Code.GDplusObjects1.length = 0;
gdjs.entrada1Code.GDplusObjects2.length = 0;
gdjs.entrada1Code.GDtexto_9595puntuacionObjects1.length = 0;
gdjs.entrada1Code.GDtexto_9595puntuacionObjects2.length = 0;
gdjs.entrada1Code.GDtexto_9595nivelObjects1.length = 0;
gdjs.entrada1Code.GDtexto_9595nivelObjects2.length = 0;
gdjs.entrada1Code.GDfranja_9595hudObjects1.length = 0;
gdjs.entrada1Code.GDfranja_9595hudObjects2.length = 0;
gdjs.entrada1Code.GDburbujaObjects1.length = 0;
gdjs.entrada1Code.GDburbujaObjects2.length = 0;
gdjs.entrada1Code.GDrobot0Objects1.length = 0;
gdjs.entrada1Code.GDrobot0Objects2.length = 0;
gdjs.entrada1Code.GDbolt0Objects1.length = 0;
gdjs.entrada1Code.GDbolt0Objects2.length = 0;
gdjs.entrada1Code.GDrobot1Objects1.length = 0;
gdjs.entrada1Code.GDrobot1Objects2.length = 0;
gdjs.entrada1Code.GDbolt1Objects1.length = 0;
gdjs.entrada1Code.GDbolt1Objects2.length = 0;
gdjs.entrada1Code.GDfrutasObjects1.length = 0;
gdjs.entrada1Code.GDfrutasObjects2.length = 0;
gdjs.entrada1Code.GDpop_9595pequenoObjects1.length = 0;
gdjs.entrada1Code.GDpop_9595pequenoObjects2.length = 0;
gdjs.entrada1Code.GDtituloObjects1.length = 0;
gdjs.entrada1Code.GDtituloObjects2.length = 0;
gdjs.entrada1Code.GDgame_9595overObjects1.length = 0;
gdjs.entrada1Code.GDgame_9595overObjects2.length = 0;
gdjs.entrada1Code.GDboton_9595inicioObjects1.length = 0;
gdjs.entrada1Code.GDboton_9595inicioObjects2.length = 0;
gdjs.entrada1Code.GDpop_9595pequeno2Objects1.length = 0;
gdjs.entrada1Code.GDpop_9595pequeno2Objects2.length = 0;
gdjs.entrada1Code.GDfrutas2Objects1.length = 0;
gdjs.entrada1Code.GDfrutas2Objects2.length = 0;
gdjs.entrada1Code.GDboton_9595izquierdaObjects1.length = 0;
gdjs.entrada1Code.GDboton_9595izquierdaObjects2.length = 0;
gdjs.entrada1Code.GDboton_9595derechaObjects1.length = 0;
gdjs.entrada1Code.GDboton_9595derechaObjects2.length = 0;
gdjs.entrada1Code.GDboton_9595saltoObjects1.length = 0;
gdjs.entrada1Code.GDboton_9595saltoObjects2.length = 0;
gdjs.entrada1Code.GDboton_9595disparoObjects1.length = 0;
gdjs.entrada1Code.GDboton_9595disparoObjects2.length = 0;
gdjs.entrada1Code.GDfranja_9595hud2Objects1.length = 0;
gdjs.entrada1Code.GDfranja_9595hud2Objects2.length = 0;


return;

}

gdjs['entrada1Code'] = gdjs.entrada1Code;
