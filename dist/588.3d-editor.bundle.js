"use strict";(self.webpackChunksd_webui_3d_editor=self.webpackChunksd_webui_3d_editor||[]).push([[588],{6588:function(e,t,a){a.r(t),a.d(t,{GeometryParametersPanel:function(){return s}});var n=a(9477),d=a(49),r=a(7703);function s(e,t){var a=e.strings,s=e.signals,i=new d.po,o=t.geometry.parameters,u=new d.Bb,g=new d.KP(o.radius).onChange(c);u.add(new d.sm(a.getKey("sidebar/geometry/tetrahedron_geometry/radius")).setWidth("90px")),u.add(g),i.add(u);var w=new d.Bb,h=new d.sN(o.detail).setRange(0,1/0).onChange(c);function c(){e.execute(new r.H(e,t,new n.H$k(g.getValue(),h.getValue()))),s.objectChanged.dispatch(t)}return w.add(new d.sm(a.getKey("sidebar/geometry/tetrahedron_geometry/detail")).setWidth("90px")),w.add(h),i.add(w),i}}}]);