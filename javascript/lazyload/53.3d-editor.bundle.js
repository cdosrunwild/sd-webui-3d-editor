"use strict";(self.webpackChunksd_webui_3d_editor=self.webpackChunksd_webui_3d_editor||[]).push([[53],{3053:function(t,e,r){r.r(e),r.d(e,{OBJExporter:function(){return n}});var o=r(9477);class n{parse(t){let e="",r=0,n=0,i=0;const f=new o.Pa4,u=new o.Ilk,l=new o.Pa4,a=new o.FM8,c=[];return t.traverse((function(t){!0===t.isMesh&&function(t){let u=0,s=0,m=0;const p=t.geometry,d=new o.Vkp,b=p.getAttribute("position"),x=p.getAttribute("normal"),v=p.getAttribute("uv"),g=p.getIndex();if(e+="o "+t.name+"\n",t.material&&t.material.name&&(e+="usemtl "+t.material.name+"\n"),void 0!==b)for(let r=0,o=b.count;r<o;r++,u++)f.fromBufferAttribute(b,r),f.applyMatrix4(t.matrixWorld),e+="v "+f.x+" "+f.y+" "+f.z+"\n";if(void 0!==v)for(let t=0,r=v.count;t<r;t++,m++)a.fromBufferAttribute(v,t),e+="vt "+a.x+" "+a.y+"\n";if(void 0!==x){d.getNormalMatrix(t.matrixWorld);for(let t=0,r=x.count;t<r;t++,s++)l.fromBufferAttribute(x,t),l.applyMatrix3(d).normalize(),e+="vn "+l.x+" "+l.y+" "+l.z+"\n"}if(null!==g)for(let t=0,o=g.count;t<o;t+=3){for(let e=0;e<3;e++){const o=g.getX(t+e)+1;c[e]=r+o+(x||v?"/"+(v?n+o:"")+(x?"/"+(i+o):""):"")}e+="f "+c.join(" ")+"\n"}else for(let t=0,o=b.count;t<o;t+=3){for(let e=0;e<3;e++){const o=t+e+1;c[e]=r+o+(x||v?"/"+(v?n+o:"")+(x?"/"+(i+o):""):"")}e+="f "+c.join(" ")+"\n"}r+=u,n+=m,i+=s}(t),!0===t.isLine&&function(t){let o=0;const n=t.geometry,i=t.type,u=n.getAttribute("position");if(e+="o "+t.name+"\n",void 0!==u)for(let r=0,n=u.count;r<n;r++,o++)f.fromBufferAttribute(u,r),f.applyMatrix4(t.matrixWorld),e+="v "+f.x+" "+f.y+" "+f.z+"\n";if("Line"===i){e+="l ";for(let t=1,o=u.count;t<=o;t++)e+=r+t+" ";e+="\n"}if("LineSegments"===i)for(let t=1,o=t+1,n=u.count;t<n;t+=2,o=t+1)e+="l "+(r+t)+" "+(r+o)+"\n";r+=o}(t),!0===t.isPoints&&function(t){let o=0;const n=t.geometry,i=n.getAttribute("position"),l=n.getAttribute("color");if(e+="o "+t.name+"\n",void 0!==i){for(let r=0,n=i.count;r<n;r++,o++)f.fromBufferAttribute(i,r),f.applyMatrix4(t.matrixWorld),e+="v "+f.x+" "+f.y+" "+f.z,void 0!==l&&(u.fromBufferAttribute(l,r).convertLinearToSRGB(),e+=" "+u.r+" "+u.g+" "+u.b),e+="\n";e+="p ";for(let t=1,o=i.count;t<=o;t++)e+=r+t+" ";e+="\n"}r+=o}(t)})),e}}}}]);