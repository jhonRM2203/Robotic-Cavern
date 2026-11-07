<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.12.2" name="nivel3_jungla" tilewidth="25" tileheight="25" tilecount="32" columns="8">
 <editorsettings>
  <export target="../../../exportaciones/nivel3_jungla.tsj" format="json"/>
 </editorsettings>
 <image source="nivel3_jungla.png" width="200" height="100"/>
 <tile id="0" type="plataforma">
  <properties>
   <property name="nombre" value="bloque"/>
   <property name="solido" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="25" height="25"/>
   <object id="2" x="0" y="0" width="25" height="25"/>
   <object id="3" type="plataforma" x="0" y="0" width="25" height="25"/>
   <object id="4" x="0" y="0" width="25" height="25"/>
   <object id="5" type="plataforma" x="0" y="0" width="25" height="25"/>
   <object id="6" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="1" type="plataforma">
  <properties>
   <property name="nombre" value="bloque_agrietado"/>
   <property name="solido" type="bool" value="true"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="2" type="plataforma">
  <properties>
   <property name="nombre" value="bloque_claro"/>
   <property name="solido" type="bool" value="true"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="3" type="plataforma">
  <properties>
   <property name="nombre" value="plataforma_izq"/>
   <property name="solido" type="bool" value="true"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="4" type="plataforma">
  <properties>
   <property name="nombre" value="plataforma_der"/>
   <property name="solido" type="bool" value="true"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="5" type="plataforma">
  <properties>
   <property name="nombre" value="fina_izq"/>
   <property name="solido" type="bool" value="true"/>
   <property name="unidireccional" type="bool" value="true"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="6" type="plataforma">
  <properties>
   <property name="nombre" value="fina_centro"/>
   <property name="solido" type="bool" value="true"/>
   <property name="unidireccional" type="bool" value="true"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="7" type="plataforma">
  <properties>
   <property name="nombre" value="fina_der"/>
   <property name="solido" type="bool" value="true"/>
   <property name="unidireccional" type="bool" value="true"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="8" type="plataforma">
  <properties>
   <property name="nombre" value="fondo_liso"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="9" type="plataforma">
  <properties>
   <property name="nombre" value="fondo_panel"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="10" type="plataforma">
  <properties>
   <property name="nombre" value="fondo_ventila"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="11" type="plataforma">
  <properties>
   <property name="nombre" value="tuberia_h"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="12" type="plataforma">
  <properties>
   <property name="nombre" value="tuberia_v"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="13" type="plataforma">
  <properties>
   <property name="nombre" value="pilar_arriba"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="14" type="plataforma">
  <properties>
   <property name="nombre" value="pilar_medio"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="15" type="plataforma">
  <properties>
   <property name="nombre" value="pilar_abajo"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="16" type="plataforma">
  <properties>
   <property name="dano" type="bool" value="true"/>
   <property name="nombre" value="pinchos_arriba"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="17" type="plataforma">
  <properties>
   <property name="dano" type="bool" value="true"/>
   <property name="nombre" value="pinchos_abajo"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="18" type="plataforma">
  <properties>
   <property name="dano" type="bool" value="true"/>
   <property name="nombre" value="pinchos_izq"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="19" type="plataforma">
  <properties>
   <property name="dano" type="bool" value="true"/>
   <property name="nombre" value="pinchos_der"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="20" type="plataforma">
  <properties>
   <property name="dano" type="bool" value="true"/>
   <property name="nombre" value="liquido_peligro"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="21" type="plataforma">
  <properties>
   <property name="escalable" type="bool" value="true"/>
   <property name="nombre" value="escalera"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="22" type="plataforma">
  <properties>
   <property name="nombre" value="caja"/>
   <property name="solido" type="bool" value="true"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="23" type="plataforma">
  <properties>
   <property name="nombre" value="trampolin"/>
   <property name="trampolin" type="bool" value="true"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="24" type="plataforma">
  <properties>
   <property name="nombre" value="rampa_der"/>
   <property name="solido" type="bool" value="true"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="25" type="plataforma">
  <properties>
   <property name="nombre" value="rampa_izq"/>
   <property name="solido" type="bool" value="true"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="26" type="plataforma">
  <properties>
   <property name="nombre" value="lampara"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="27" type="plataforma">
  <properties>
   <property name="nombre" value="cable"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="28" type="plataforma">
  <properties>
   <property name="nombre" value="cartel"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="29" type="plataforma">
  <properties>
   <property name="coleccionable" type="bool" value="true"/>
   <property name="nombre" value="orbe"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="30" type="plataforma">
  <properties>
   <property name="nombre" value="terminal"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
 <tile id="31" type="plataforma">
  <properties>
   <property name="nombre" value="vacio"/>
  </properties>
  <objectgroup>
   <object id="1" type="plataforma" x="0" y="0" width="25" height="25"/>
  </objectgroup>
 </tile>
</tileset>
