"use strict";(self.webpackChunksd_webui_3d_editor=self.webpackChunksd_webui_3d_editor||[]).push([[857],{8857:function(e,d,t){t.r(d),t.d(d,{GeometryParametersPanel:function(){return s}});var n=t(9477),a=t(49),r=t(7703);function s(e,d){var t=e.strings,s=new a.po,o=d.geometry.parameters,i=new a.Bb,u=new a.KP(o.radius).onChange(c);i.add(new a.sm(t.getKey("sidebar/geometry/dodecahedron_geometry/radius")).setWidth("90px")),i.add(u),s.add(i);var g=new a.Bb,w=new a.sN(o.detail).setRange(0,1/0).onChange(c);function c(){e.execute(new r.H(e,d,new n.Kgo(u.getValue(),w.getValue())))}return g.add(new a.sm(t.getKey("sidebar/geometry/dodecahedron_geometry/detail")).setWidth("90px")),g.add(w),s.add(g),s}}}]);