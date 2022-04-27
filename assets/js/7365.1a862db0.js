"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[7365],{7365:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(6459),o=t(7294),i=t(9477),a=t(2248),s=function(){function e(){}return e.computeTangents=function(e){e.computeTangents(),console.warn("THREE.BufferGeometryUtils: .computeTangents() has been removed. Use BufferGeometry.computeTangents() instead.")},e.mergeBufferGeometries=function(e,n){void 0===n&&(n=!1);for(var t=null!==e[0].index,r=new Set(Object.keys(e[0].attributes)),o=new Set(Object.keys(e[0].morphAttributes)),a={},s={},c=e[0].morphTargetsRelative,u=new i.u9r,l=0,f=0;f<e.length;++f){var v=e[f],m=0;if(t!==(null!==v.index))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(var w in v.attributes){if(!r.has(w))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+w+'" attribute exists among all geometries, or in none of them.'),null;void 0===a[w]&&(a[w]=[]),a[w].push(v.attributes[w]),m++}if(m!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(c!==v.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(var d in v.morphAttributes){if(!o.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;void 0===s[d]&&(s[d]=[]),s[d].push(v.morphAttributes[d])}if(u.userData.mergedUserData=u.userData.mergedUserData||[],u.userData.mergedUserData.push(v.userData),n){var g=void 0;if(t)g=v.index.count;else{if(void 0===v.attributes.position)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;g=v.attributes.position.count}u.addGroup(l,g,f),l+=g}}if(t){for(var y=0,p=[],P=0;P<e.length;++P){for(var x=e[P].index,h=0;h<x.count;++h)p.push(x.getX(h)+y);y+=e[P].attributes.position.count}u.setIndex(p)}for(var _ in a){var b=this.mergeBufferAttributes(a[_]);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+_+" attribute."),null;u.setAttribute(_,b)}for(var z in s){var A=s[z][0].length;if(0===A)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[z]=[];for(var E=0;E<A;++E){for(var B=[],T=0;T<s[z].length;++T)B.push(s[z][T][E]);var G=this.mergeBufferAttributes(B);if(!G)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+z+" morphAttribute."),null;u.morphAttributes[z].push(G)}}return u},e.mergeBufferAttributes=function(e){for(var n,t,r,o=0,a=0;a<e.length;++a){var s=e[a];if(s.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(void 0===n&&(n=s.array.constructor),n!==s.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(void 0===t&&(t=s.itemSize),t!==s.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(void 0===r&&(r=s.normalized),r!==s.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;o+=s.array.length}for(var c=new n(o),u=0,l=0;l<e.length;++l)c.set(e[l].array,u),u+=e[l].array.length;return new i.TlE(c,t,r)},e.interleaveAttributes=function(e){for(var n,t=0,r=0,o=0,a=e.length;o<a;++o){var s=e[o];if(void 0===n&&(n=s.array.constructor),n!==s.array.constructor)return console.error("AttributeBuffers of different types cannot be interleaved"),null;t+=s.array.length,r+=s.itemSize}for(var c=new i.vpT(new n(t),r),u=0,l=[],f=["getX","getY","getZ","getW"],v=["setX","setY","setZ","setW"],m=0,w=e.length;m<w;m++){var d=e[m],g=d.itemSize,y=d.count,p=new i.kB5(c,g,u,d.normalized);l.push(p),u+=g;for(var P=0;P<y;P++)for(var x=0;x<g;x++)p[v[x]](P,d[f[x]](P))}return l},e.estimateBytesUsed=function(e){var n=0;for(var t in e.attributes){var r=e.getAttribute(t);n+=r.count*r.itemSize*r.array.BYTES_PER_ELEMENT}var o=e.getIndex();return n+=o?o.count*o.itemSize*o.array.BYTES_PER_ELEMENT:0},e.mergeVertices=function(e,n){void 0===n&&(n=1e-4),n=Math.max(n,Number.EPSILON);for(var t={},r=e.getIndex(),o=e.getAttribute("position"),a=r?r.count:o.count,s=0,c=Object.keys(e.attributes),u={},l={},f=[],v=["getX","getY","getZ","getW"],m=0,w=c.length;m<w;m++){var d=c[m];u[d]=[];var g=e.morphAttributes[d];g&&(l[d]=new Array(g.length).fill().map((function(){return[]})))}for(var y=Math.log10(1/n),p=Math.pow(10,y),P=0;P<a;P++){for(var x=r?r.getX(P):P,h="",_=0,b=c.length;_<b;_++)for(var z=c[_],A=e.getAttribute(z),E=A.itemSize,B=0;B<E;B++)h+=~~(A[v[B]](x)*p)+",";if(h in t)f.push(t[h]);else{for(var T=0,G=c.length;T<G;T++)for(var S=c[T],R=e.getAttribute(S),U=e.morphAttributes[S],I=R.itemSize,M=u[S],k=l[S],C=0;C<I;C++){var H=v[C];if(M.push(R[H](x)),U)for(var X=0,D=U.length;X<D;X++)k[X].push(U[X][H](x))}t[h]=s,f.push(s),s++}}for(var j=e.clone(),N=0,V=c.length;N<V;N++){var Y=c[N],F=e.getAttribute(Y),L=new F.array.constructor(u[Y]),W=new i.TlE(L,F.itemSize,F.normalized);if(j.setAttribute(Y,W),Y in l)for(var q=0;q<l[Y].length;q++){var O=e.morphAttributes[Y][q],Z=new O.array.constructor(l[Y][q]),K=new i.TlE(Z,O.itemSize,O.normalized);j.morphAttributes[Y][q]=K}}return j.setIndex(f),j},e.toTrianglesDrawMode=function(e,n){if(n===i.WwZ)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(n===i.z$h||n===i.UlW){var t=e.getIndex();if(null===t){var r=[],o=e.getAttribute("position");if(void 0===o)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(var a=0;a<o.count;a++)r.push(a);e.setIndex(r),t=e.getIndex()}var s=t.count-2,c=[];if(n===i.z$h)for(var u=1;u<=s;u++)c.push(t.getX(0)),c.push(t.getX(u)),c.push(t.getX(u+1));else for(var l=0;l<s;l++)l%2==0?(c.push(t.getX(l)),c.push(t.getX(l+1)),c.push(t.getX(l+2))):(c.push(t.getX(l+2)),c.push(t.getX(l+1)),c.push(t.getX(l)));c.length/3!==s&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");var f=e.clone();return f.setIndex(c),f.clearGroups(),f}return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",n),e},e.computeMorphedAttributes=function(e){if(!0!==e.geometry.isBufferGeometry)return console.error("THREE.BufferGeometryUtils: Geometry is not of type BufferGeometry."),null;var n=new i.Pa4,t=new i.Pa4,r=new i.Pa4,o=new i.Pa4,a=new i.Pa4,s=new i.Pa4,c=new i.Pa4,u=new i.Pa4,l=new i.Pa4;function f(e,i,f,v,m,w,d,g,y){n.fromBufferAttribute(f,w),t.fromBufferAttribute(f,d),r.fromBufferAttribute(f,g);var p=e.morphTargetInfluences;if(i.morphTargets&&v&&p){c.set(0,0,0),u.set(0,0,0),l.set(0,0,0);for(var P=0,x=v.length;P<x;P++){var h=p[P],_=v[P];0!==h&&(o.fromBufferAttribute(_,w),a.fromBufferAttribute(_,d),s.fromBufferAttribute(_,g),m?(c.addScaledVector(o,h),u.addScaledVector(a,h),l.addScaledVector(s,h)):(c.addScaledVector(o.sub(n),h),u.addScaledVector(a.sub(t),h),l.addScaledVector(s.sub(r),h)))}n.add(c),t.add(u),r.add(l)}e.isSkinnedMesh&&(e.boneTransform(w,n),e.boneTransform(d,t),e.boneTransform(g,r)),y[3*w+0]=n.x,y[3*w+1]=n.y,y[3*w+2]=n.z,y[3*d+0]=t.x,y[3*d+1]=t.y,y[3*d+2]=t.z,y[3*g+0]=r.x,y[3*g+1]=r.y,y[3*g+2]=r.z}var v,m,w,d,g,y,p,P,x,h=e.geometry,_=e.material,b=h.index,z=h.attributes.position,A=h.morphAttributes.position,E=h.morphTargetsRelative,B=h.attributes.normal,T=h.morphAttributes.position,G=h.groups,S=h.drawRange,R=new Float32Array(z.count*z.itemSize),U=new Float32Array(B.count*B.itemSize);if(null!==b)if(Array.isArray(_))for(d=0,y=G.length;d<y;d++)for(x=_[(P=G[d]).materialIndex],g=Math.max(P.start,S.start),p=Math.min(P.start+P.count,S.start+S.count);g<p;g+=3)f(e,x,z,A,E,v=b.getX(g),m=b.getX(g+1),w=b.getX(g+2),R),f(e,x,B,T,E,v,m,w,U);else for(d=Math.max(0,S.start),y=Math.min(b.count,S.start+S.count);d<y;d+=3)f(e,_,z,A,E,v=b.getX(d),m=b.getX(d+1),w=b.getX(d+2),R),f(e,_,B,T,E,v,m,w,U);else if(void 0!==z)if(Array.isArray(_))for(d=0,y=G.length;d<y;d++)for(x=_[(P=G[d]).materialIndex],g=Math.max(P.start,S.start),p=Math.min(P.start+P.count,S.start+S.count);g<p;g+=3)f(e,x,z,A,E,v=g,m=g+1,w=g+2,R),f(e,x,B,T,E,v,m,w,U);else for(d=Math.max(0,S.start),y=Math.min(z.count,S.start+S.count);d<y;d+=3)f(e,_,z,A,E,v=d,m=d+1,w=d+2,R),f(e,_,B,T,E,v,m,w,U);return{positionAttribute:z,normalAttribute:B,morphedPositionAttribute:new i.a$l(R,3),morphedNormalAttribute:new i.a$l(U,3)}},e}(),c=180,u=new i.Ilk(1,0,0),l=new i.Ilk(.97,.34,.45),f=new i.Ilk(.53,.96,1),v=new i.Ilk(.46,.32,.87),m=new i.Ilk(1,.69,0);new i.Ilk(0,0,0),new i.Ilk(1,1,1);function w(e){(0,r.Z)(e);var n=(0,o.useRef)(0);(0,o.useEffect)((function(){var e=function(){var e,t;"undefined"!=typeof window&&(n.current=null!=(e=null==(t=window)?void 0:t.scrollY)?e:0)};return e(),"undefined"!=typeof window&&window.addEventListener("scroll",e),function(){"undefined"!=typeof window&&window.removeEventListener("scroll",e)}}),[window]);var t=(0,o.useRef)(null),w=(0,o.useRef)(null),d=(0,o.useRef)(new i.SUY),g=(0,o.useRef)(-1);function y(e,n){for(var t=[],r=new i.Kgo(e,n),o=0;o<r.attributes.position.count;o++){var a=[r.attributes.position.array[3*o],r.attributes.position.array[3*o+1],r.attributes.position.array[3*o+2]],c=[r.attributes.normal.array[3*o],r.attributes.normal.array[3*o+1],r.attributes.normal.array[3*o+2]],u=[r.attributes.uv.array[2*o],r.attributes.uv.array[2*o+1]];t.push({pos:a,norm:c,uv:u})}for(var l=[],f=[],v=[],m=0,w=t;m<w.length;m++){var d=w[m];l.push.apply(l,d.pos),f.push.apply(f,d.norm),v.push.apply(v,d.uv)}var g=new i.u9r;g.setAttribute("position",new i.TlE(new Float32Array(l),3));var y=s.mergeVertices(g);return y.computeVertexNormals(),console.log("vertices count",y.attributes.position.array.length),y}function p(e,n,t,r,o,a){var s={u_time:{value:0},u_resolution:{value:new i.FM8(e,n)},bright:{value:true},u_sphere_radius:{value:t},u_displacement_ratio:{value:r},u_base_color:{value:u},u_layers:{value:o},u_layers_count:{value:o.length},u_spread:{value:a}},c=new i.jyz({uniforms:s,vertexShader:"\n    precision highp float;\n\n    struct Layer {\n        float is_active;\n        vec3 color;\n        vec3 sin;\n        vec3 cos;\n        vec3 time_dilation;\n        vec3 coef;\n        vec3 constant;\n    };\n\n    uniform float u_time;\n\n    uniform int u_layers_count;\n    uniform Layer u_layers[16];\n    uniform vec2 u_resolution;\n    uniform vec3 u_base_color;\n    uniform float u_sphere_radius;\n    uniform float u_displacement_ratio;\n    uniform float u_spread;\n\n    varying vec2 vUv;\n    varying vec3 vNormal;\n    varying vec3 v_position;\n    varying vec3 v_color;\n    varying float v_displacement_amount;\n\n    vec3 mod289(vec3 x)\n    {\n      return x - floor(x * (1.0 / 289.0)) * 289.0;\n    }\n\n    vec4 mod289(vec4 x)\n    {\n      return x - floor(x * (1.0 / 289.0)) * 289.0;\n    }\n\n    vec4 permute(vec4 x)\n    {\n      return mod289(((x*34.0)+1.0)*x);\n    }\n\n    vec4 taylorInvSqrt(vec4 r)\n    {\n      return 1.79284291400159 - 0.85373472095314 * r;\n    }\n\n    vec3 fade(vec3 t) {\n      return t*t*t*(t*(t*6.0-15.0)+10.0);\n    }\n\n    float snoise(vec3 v)\n    {\n      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n    // First corner\n      vec3 i  = floor(v + dot(v, C.yyy) );\n      vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n    // Other corners\n      vec3 g = step(x0.yzx, x0.xyz);\n      vec3 l = 1.0 - g;\n      vec3 i1 = min( g.xyz, l.zxy );\n      vec3 i2 = max( g.xyz, l.zxy );\n\n      //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n      //   x1 = x0 - i1  + 1.0 * C.xxx;\n      //   x2 = x0 - i2  + 2.0 * C.xxx;\n      //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n      vec3 x1 = x0 - i1 + C.xxx;\n      vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n      vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n    // Permutations\n      i = mod289(i);\n      vec4 p = permute( permute( permute(\n                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n              + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n    // Gradients: 7x7 points over a square, mapped onto an octahedron.\n    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n      float n_ = 0.142857142857; // 1.0/7.0\n      vec3  ns = n_ * D.wyz - D.xzx;\n\n      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n      vec4 x_ = floor(j * ns.z);\n      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n      vec4 x = x_ *ns.x + ns.yyyy;\n      vec4 y = y_ *ns.x + ns.yyyy;\n      vec4 h = 1.0 - abs(x) - abs(y);\n\n      vec4 b0 = vec4( x.xy, y.xy );\n      vec4 b1 = vec4( x.zw, y.zw );\n\n      //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n      //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n      vec4 s0 = floor(b0)*2.0 + 1.0;\n      vec4 s1 = floor(b1)*2.0 + 1.0;\n      vec4 sh = -step(h, vec4(0.0));\n\n      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n      vec3 p0 = vec3(a0.xy,h.x);\n      vec3 p1 = vec3(a0.zw,h.y);\n      vec3 p2 = vec3(a1.xy,h.z);\n      vec3 p3 = vec3(a1.zw,h.w);\n\n    //Normalise gradients\n      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n      p0 *= norm.x;\n      p1 *= norm.y;\n      p2 *= norm.z;\n      p3 *= norm.w;\n\n    // Mix final noise value\n      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n      m = m * m;\n      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                    dot(p2,x2), dot(p3,x3) ) );\n    }\n    // Classic Perlin noise\n    float cnoise(vec3 P)\n    {\n      vec3 Pi0 = floor(P); // Integer part for indexing\n      vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n      Pi0 = mod289(Pi0);\n      Pi1 = mod289(Pi1);\n      vec3 Pf0 = fract(P); // Fractional part for interpolation\n      vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n      vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n      vec4 iy = vec4(Pi0.yy, Pi1.yy);\n      vec4 iz0 = Pi0.zzzz;\n      vec4 iz1 = Pi1.zzzz;\n\n      vec4 ixy = permute(permute(ix) + iy);\n      vec4 ixy0 = permute(ixy + iz0);\n      vec4 ixy1 = permute(ixy + iz1);\n\n      vec4 gx0 = ixy0 * (1.0 / 7.0);\n      vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n      gx0 = fract(gx0);\n      vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n      vec4 sz0 = step(gz0, vec4(0.0));\n      gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n      gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n      vec4 gx1 = ixy1 * (1.0 / 7.0);\n      vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n      gx1 = fract(gx1);\n      vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n      vec4 sz1 = step(gz1, vec4(0.0));\n      gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n      gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n      vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n      vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n      vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n      vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n      vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n      vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n      vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n      vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n      vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n      g000 *= norm0.x;\n      g010 *= norm0.y;\n      g100 *= norm0.z;\n      g110 *= norm0.w;\n      vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n      g001 *= norm1.x;\n      g011 *= norm1.y;\n      g101 *= norm1.z;\n      g111 *= norm1.w;\n\n      float n000 = dot(g000, Pf0);\n      float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n      float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n      float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n      float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n      float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n      float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n      float n111 = dot(g111, Pf1);\n\n      vec3 fade_xyz = fade(Pf0);\n      vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n      vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n      float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n      return 2.2 * n_xyz;\n    }\n\n    // YUV to RGB matrix\n    mat3 yuv2rgb = mat3(1.0, 0.0, 1.13983,\n                        1.0, -0.39465, -0.58060,\n                        1.0, 2.03211, 0.0);\n\n    // RGB to YUV matrix\n    mat3 rgb2yuv = mat3(0.2126, 0.7152, 0.0722,\n                        -0.09991, -0.33609, 0.43600,\n                        0.615, -0.5586, -0.05639);\n\n\n    vec3 blendNormal(vec3 base, vec3 blend) {\n        return blend;\n    }\n\n    vec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n        return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n    }\n\n    vec3 getColor(){\n\n        // vec3 black = vec3(.0,.0,.0);\n        // vec3 white = vec3(1.0,1.0,1.0);\n\n        float value1 = sin(u_time);\n\n        vec3 st = v_position / u_sphere_radius * v_displacement_amount;\n\n        vec3 color;\n\n        vec3 color_0 = u_layers[0].color;\n        color = u_base_color;\n        color -= (1.0-st.z) / 3.0;\n\n\n        for (int i = 0; i < u_layers_count; i++) {\n            // if(u_layers[i].is_active == 1.0){\n                vec3 nColor = u_layers[i].color;\n                vec3 constant = u_layers[i].constant;\n\n                float x = 0.0;\n                if(u_layers[i].sin.x == 1.){\n                    x = sin(u_time * u_layers[i].time_dilation.x);\n                }\n                if(u_layers[i].cos.x == 1.){\n                    x = cos(u_time * u_layers[i].time_dilation.x);\n                }\n                x *= u_layers[i].coef.x;\n                x += u_layers[i].constant.x;\n\n                float y = 0.0;\n                if(u_layers[i].sin.y == 1.){\n                    y = sin(u_time * u_layers[i].time_dilation.y);\n                }\n                if(u_layers[i].cos.y == 1.){\n                    y = cos(u_time * u_layers[i].time_dilation.y);\n                }\n                y *= u_layers[i].coef.y;\n                y += u_layers[i].constant.y;\n\n                float z = 0.0;\n                if(u_layers[i].sin.z == 1.){\n                    z = sin(u_time * u_layers[i].time_dilation.z);\n                }\n                if(u_layers[i].cos.z == 1.){\n                    z = cos(u_time * u_layers[i].time_dilation.z);\n                }\n                z *= u_layers[i].coef.z;\n                z += u_layers[i].constant.z;\n\n                float amount =\n                    pow(\n                        smoothstep( 0.0, .9,\n                            1.05 -\n                            distance(st, normalize(vec3(x, y, z) ) ) )\n                    , u_spread);\n                color = blendNormal(color, nColor, amount);\n            // }\n        }\n        return color;\n    }\n\n    void main() {\n\n        vUv = uv;\n\n        float s = 2.45;\n        float r = u_time * 0.25;\n\n        vNormal = normal;\n        v_position = position;\n        v_displacement_amount = cnoise(s * normal + r) * u_displacement_ratio + 1.0;\n\n        // float s2 = 1.35;\n        // float r2 = u_time * 0.15;\n        // v_displacement_amount = snoise(s2 * normal + r2) * u_displacement_ratio + 1.0;\n\n        vec3 newPosition = position * v_displacement_amount ;\n\n        v_color = getColor();\n        // v_color = czm_saturation(v_color, 1.0);\n\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\n    }\n",fragmentShader:"\n\nprecision highp float;\n\nuniform float u_time;\n\nvarying float v_displacement_amount;\nvarying vec3 v_position;\nvarying vec3 v_color;\n\nvec3 czm_saturation(vec3 rgb, float adjustment) {\n    const vec3 W = vec3(0.2125, 0.7154, 0.0721);\n    vec3 intensity = vec3(dot(rgb, W));\n    return mix(intensity, rgb, adjustment);\n}\n\nvoid main(){\n    vec3 color = v_color;\n    color.gb -=  (sin(v_position.z + v_displacement_amount) + sin(u_time)) * 0.05;\n    color = czm_saturation(color, 1.2);\n    gl_FragColor = vec4(color,1.0);\n}\n"});return c.wireframe=true,c}function P(e,n,t,r,o,a,s){var c=function(e,n,t,r,o){var a=[];return a.push({is_active:1,color:e,sin:new i.Pa4(1,0,0),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(.8,.7,.7),coef:new i.Pa4(1,0,0),constant:new i.Pa4(0,1,-1)}),a.push({is_active:1,color:n,sin:new i.Pa4(1,0,0),cos:new i.Pa4(0,1,0),time_dilation:new i.Pa4(1,1,1),coef:new i.Pa4(1,1,0),constant:new i.Pa4(0,-.9,0)}),a.push({is_active:1,color:t,sin:new i.Pa4(1,0,0),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(1.1,1,1),coef:new i.Pa4(1,0,0),constant:new i.Pa4(0,-1,-.2)}),a.push({is_active:1,color:e,sin:new i.Pa4(1,1,0),cos:new i.Pa4(0,0,1),time_dilation:new i.Pa4(.7,.6,1),coef:new i.Pa4(.3,.3,.7),constant:new i.Pa4(-1,-.8,-.3)}),a.push({is_active:1,color:t,sin:new i.Pa4(1,0,0),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(.7,1,1),coef:new i.Pa4(-.3,0,.3),constant:new i.Pa4(0,-.8,.2)}),a.push({is_active:1,color:r,sin:new i.Pa4(0,1,0),cos:new i.Pa4(1,0,0),time_dilation:new i.Pa4(.3,.8,1),coef:new i.Pa4(.3,1,-.3),constant:new i.Pa4(0,.7,-.5)}),a.push({is_active:1,color:e,sin:new i.Pa4(1,0,0),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(.9,1,1),coef:new i.Pa4(-1,1,0),constant:new i.Pa4(0,1,.2)}),a.push({is_active:1,color:t,sin:new i.Pa4(1,1,0),cos:new i.Pa4(0,0,1),time_dilation:new i.Pa4(.7,.6,1),coef:new i.Pa4(-.4,.8,.5),constant:new i.Pa4(0,.8,1)}),a.push({is_active:1,color:n,sin:new i.Pa4(1,1,1),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(.8,.8,.8),coef:new i.Pa4(-.5,.8,.3),constant:new i.Pa4(.1,.5,-.7)}),a.push({is_active:1,color:e,sin:new i.Pa4(0,1,0),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(.7,.9,.8),coef:new i.Pa4(1,1,0),constant:new i.Pa4(0,.8,1)}),a.push({is_active:1,color:t,sin:new i.Pa4(1,0,0),cos:new i.Pa4(0,1,0),time_dilation:new i.Pa4(.7,.9,1),coef:new i.Pa4(-.3,1,.3),constant:new i.Pa4(0,-.2,.3)}),a.push({is_active:1,color:r,sin:new i.Pa4(1,1,0),cos:new i.Pa4(0,0,1),time_dilation:new i.Pa4(.4,.8,1),coef:new i.Pa4(.3,-1,-.5),constant:new i.Pa4(.2,.7,-.5)}),a.push({is_active:1,color:e,sin:new i.Pa4(0,0,1),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(1,1,.9),coef:new i.Pa4(-1,1,.6),constant:new i.Pa4(0,-.3,.1)}),a.push({is_active:1,color:t,sin:new i.Pa4(1,1,0),cos:new i.Pa4(0,0,1),time_dilation:new i.Pa4(.9,.8,1),coef:new i.Pa4(.4,-.8,.9),constant:new i.Pa4(.4,.8,1)}),a.push({is_active:1,color:n,sin:new i.Pa4(1,1,1),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(.8,.8,.8),coef:new i.Pa4(.5,-.7,.3),constant:new i.Pa4(.1,-.5,.7)}),a.push({is_active:1,color:e,sin:new i.Pa4(0,1,0),cos:new i.Pa4(1,0,0),time_dilation:new i.Pa4(.7,1,.8),coef:new i.Pa4(1,1,0),constant:new i.Pa4(.3,.8,.5)}),a}(f,m,v,l),u=p(e,n,t,r,c,s),w=y(t,2*t),d=new i.Kj0(w,u);return d.initialPositionY=a,d.position.x=o,d}function x(e,n,t){var r,o=new i.CP7({alpha:!0,canvas:e});o.setSize(n,t),"undefined"!=typeof window&&o.setPixelRatio((null==(r=window)?void 0:r.devicePixelRatio)>1?1.5:1);var s=[],w=new i.xsS,d=function(e,n,t,r,o){var a=[];return a.push({is_active:1,color:e,sin:new i.Pa4(0,1,0),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(.7,.9,.8),coef:new i.Pa4(1,0,0),constant:new i.Pa4(0,-.8,1)}),a.push({is_active:1,color:t,sin:new i.Pa4(0,0,1),cos:new i.Pa4(0,1,1),time_dilation:new i.Pa4(.7,.4,.5),coef:new i.Pa4(.3,-.5,1),constant:new i.Pa4(0,-.4,.5)}),a.push({is_active:1,color:r,sin:new i.Pa4(0,1,0),cos:new i.Pa4(1,0,1),time_dilation:new i.Pa4(.4,.6,1.1),coef:new i.Pa4(.1,.8,.5),constant:new i.Pa4(0,-.5,.7)}),a.push({is_active:1,color:e,sin:new i.Pa4(1,0,0),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(1,.9,1),coef:new i.Pa4(1,0,0),constant:new i.Pa4(0,-1,-.7)}),a.push({is_active:1,color:t,sin:new i.Pa4(1,0,0),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(.9,.8,.7),coef:new i.Pa4(.5,0,.4),constant:new i.Pa4(0,-.9,.3)}),a.push({is_active:1,color:e,sin:new i.Pa4(0,1,0),cos:new i.Pa4(1,0,1),time_dilation:new i.Pa4(.4,.9,.3),coef:new i.Pa4(.3,1,-.3),constant:new i.Pa4(.3,-1.1,.5)}),a.push({is_active:1,color:r,sin:new i.Pa4(0,1,0),cos:new i.Pa4(1,0,0),time_dilation:new i.Pa4(.3,.8,1),coef:new i.Pa4(.3,1,-.3),constant:new i.Pa4(0,-.7,.5)}),a.push({is_active:1,color:n,sin:new i.Pa4(1,0,0),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(1,1,1),coef:new i.Pa4(1,0,0),constant:new i.Pa4(0,-.9,0)}),a.push({is_active:1,color:e,sin:new i.Pa4(1,0,0),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(.9,1,1),coef:new i.Pa4(-1,0,0),constant:new i.Pa4(0,-1,.2)}),a.push({is_active:1,color:t,sin:new i.Pa4(1,0,0),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(1.1,1,1),coef:new i.Pa4(1,0,0),constant:new i.Pa4(0,-1,-.2)}),a.push({is_active:1,color:t,sin:new i.Pa4(1,0,0),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(.7,1,1),coef:new i.Pa4(.3,0,.3),constant:new i.Pa4(0,-.8,.2)}),a.push({is_active:1,color:o,sin:new i.Pa4(1,0,1),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(.9,1,1),coef:new i.Pa4(1,0,.9),constant:new i.Pa4(0,-1,.2)}),a.push({is_active:1,color:t,sin:new i.Pa4(1,1,0),cos:new i.Pa4(0,0,1),time_dilation:new i.Pa4(.7,.6,1),coef:new i.Pa4(.3,.3,.7),constant:new i.Pa4(0,-.8,-.3)}),a.push({is_active:1,color:t,sin:new i.Pa4(1,1,0),cos:new i.Pa4(0,0,1),time_dilation:new i.Pa4(.7,.6,1),coef:new i.Pa4(-.4,.8,.5),constant:new i.Pa4(0,-.8,0)}),a.push({is_active:1,color:n,sin:new i.Pa4(1,1,1),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(.8,.8,.8),coef:new i.Pa4(-.5,.8,.3),constant:new i.Pa4(.1,-.5,.7)}),a.push({is_active:1,color:e,sin:new i.Pa4(1,0,0),cos:new i.Pa4(0,0,0),time_dilation:new i.Pa4(.8,.7,.7),coef:new i.Pa4(1,0,0),constant:new i.Pa4(0,-1,1)}),a}(f,m,v,l,u),g=p(n,t,15,.1111111111111111,d,6),x=y(15,18),h=new i.Kj0(x,g);h.rotation.x=.2,h.initialPositionY=14,w.add(h),s.push(h);var _=P(n,t,2,.5,3,-10,1);w.add(_),s.push(_);var b=P(n,t,1,.4,-2,-15,1);w.add(b),s.push(b);var z=P(n,t,1.5,.5,-1,-25,1);w.add(z),s.push(z);var A=P(n,t,1,.4,-6.5,-35,1);w.add(A),s.push(A);var E=P(n,t,2.5,.4,6.5,-45,1);w.add(E),s.push(E);var B=n/-180,T=n/c,G=t/c,S=t/-180,R=new i.iKG(B,T,G,S,1,100);R.position.z=15;var U=new a.xC(o),I=new a.CD(w,R);U.addPass(I);new a.Jy(R,{focusDistance:0,focalLength:1,bokehScale:6});return{renderer:o,composer:U,camera:R,scene:w,meshes:s}}return(0,o.useEffect)((function(){if(t.current){var e=t.current.offsetWidth,r=t.current.offsetHeight;w.current=x(t.current,e,r);var o=w.current,i=o.composer,a=o.meshes;return function e(){a.forEach((function(e){e.material.uniforms.u_time.value=.3333333333333333*d.current.getElapsedTime(),e.position.y=e.initialPositionY+n.current/140,e.rotation.x=n.current/2e3})),i.render(),g.current=requestAnimationFrame(e)}(),function(){return cancelAnimationFrame(g.current)}}}),[t.current,true]),(0,o.useEffect)((function(){function e(){if(w.current&&t.current){var e=window.innerWidth,n=window.innerHeight;t.current.width=e,function(e,n,t){e.renderer.setSize(n,t),e.camera.left=n/-180,e.camera.right=n/c,e.camera.top=t/c,e.camera.bottom=t/-180,e.camera.updateProjectionMatrix()}(w.current,e,n)}}return e(),"undefined"!=typeof window&&window.addEventListener("resize",e),function(){"undefined"!=typeof window&&window.removeEventListener("resize",e)}}),[window]),o.createElement("canvas",{style:{height:"100vh",width:"100vw",position:"fixed",top:"0px",zIndex:-10},ref:t})}}}]);