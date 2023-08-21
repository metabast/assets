import*as a from"three";function e(a,t){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,e){return a.__proto__=e,a},e(a,t)}var t=/*#__PURE__*/function(t){var n,r,o,u;function s(e){var n;return(n=t.call(this,e)||this).customUniforms=void 0,n.customUniforms={uMap2:{value:null},uRoughness:{value:0},uRoughnessMap:{value:null},uMetalness:{value:0},uColor:{value:new a.Color(16777215)}},n.setValues(e),n.onBeforeCompile=function(a){a.defines=Object.assign(a.defines,{USE_UV:""}),a.uniforms=Object.assign(a.uniforms,n.customUniforms),a.fragmentShader=a.fragmentShader.replace("#define MATCAP","\n#define MATCAP\n\nuniform float uPower;\nuniform float uRoughness;\nuniform float uMetalness;\nuniform vec3 uColor;\n\nuniform sampler2D uMap2;\nuniform sampler2D uRoughnessMap;\nuniform sampler2D uMetalnessMap;\n\nfloat map(float value, float min1, float max1, float min2, float max2) {\n    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n\nvec4 getCellMatcap( sampler2D matcap, vec2 uv, float row, float col ) {\n    return texture2D(matcap, vec2(uv.x/3., uv.y/3.) + vec2(1./3.*col, 1./3.*row) );\n}\n"),a.fragmentShader=a.fragmentShader.replace("vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;","\nvec3 outgoingLight = vec3( 0.0 );\n\nvec4 matcap0 = getCellMatcap(matcap, uv, 2., 0.);\nvec4 matcap1 = getCellMatcap(matcap, uv, 2., 1.);\nvec4 matcap2 = getCellMatcap(matcap, uv, 2., 2.);\nvec4 matcap3 = getCellMatcap(matcap, uv, 1., 0.);\nvec4 matcap4 = getCellMatcap(matcap, uv, 1., 1.);\nvec4 matcap5 = getCellMatcap(matcap, uv, 1., 2.);\nvec4 matcap6 = getCellMatcap(matcap, uv, 0., 0.);\nvec4 matcap7 = getCellMatcap(matcap, uv, 0., 1.);\nvec4 matcap8 = getCellMatcap(matcap, uv, 0., 2.);\n\nfloat roughness = uRoughness;\n\n#ifdef USE_ROUGHNESSMAP\n    vec4 roughnessMapColor = texture2D( uRoughnessMap, vUv );\n    roughness = roughnessMapColor.g;\n#endif\n\nfloat interval = 1./8.;\n\nmatcap0.rgb *= clamp( map(roughness, 0., interval, 1., 0.), 0., 1.);\n\nmatcap1.rgb *= clamp( map(roughness, .0, interval, 0., 1.), 0., 1.);\nmatcap1.rgb *= clamp( map(roughness, interval, interval * 2., 1., 0.), 0., 1.);\n\nmatcap2.rgb *= clamp( map(roughness, interval * 1., interval * 2., 0., 1.), 0., 1.);\nmatcap2.rgb *= clamp( map(roughness, interval * 2., interval * 3., 1., 0.), 0., 1.);\n\nmatcap3.rgb *= clamp( map(roughness, interval * 2., interval * 3., 0., 1.), 0., 1.);\nmatcap3.rgb *= clamp( map(roughness, interval * 3., interval * 4., 1., 0.), 0., 1.);\n\nmatcap4.rgb *= clamp( map(roughness, interval * 3., interval * 4., 0., 1.), 0., 1.);\nmatcap4.rgb *= clamp( map(roughness, interval * 4., interval * 5., 1., 0.), 0., 1.);\n\nmatcap5.rgb *= clamp( map(roughness, interval * 4., interval * 5., 0., 1.), 0., 1.);\nmatcap5.rgb *= clamp( map(roughness, interval * 5., interval * 6., 1., 0.), 0., 1.);\n\nmatcap6.rgb *= clamp( map(roughness, interval * 5., interval * 6., 0., 1.), 0., 1.);\nmatcap6.rgb *= clamp( map(roughness, interval * 6., interval * 7., 1., 0.), 0., 1.);\n\nmatcap7.rgb *= clamp( map(roughness, interval * 6., interval * 7., 0., 1.), 0., 1.);\nmatcap7.rgb *= clamp( map(roughness, interval * 7., interval * 8., 1., 0.), 0., 1.);\n\nmatcap8.rgb *= clamp( map(roughness, interval * 7., interval * 8., 0., 1.), 0., 1.);\n\nvec3 matcapProgress = \n    matcap0.rgb + matcap1.rgb + matcap2.rgb + matcap3.rgb + matcap4.rgb + \n    matcap5.rgb + matcap6.rgb + matcap7.rgb + matcap8.rgb;\n\ndiffuseColor.rgb = uColor;\n#ifdef USE_MAP2\n    diffuseColor.rgb = texture2D( uMap2, vUv ).rgb;\n#endif\noutgoingLight = diffuseColor.rgb * matcapProgress;\n")},n}return r=t,(n=s).prototype=Object.create(r.prototype),n.prototype.constructor=n,e(n,r),o=s,(u=[{key:"color2",get:function(){return this.customUniforms.uColor.value},set:function(a){this.customUniforms.uColor.value=a}},{key:"map2",get:function(){return this.customUniforms.uMap2.value},set:function(a){a?this.defines.USE_MAP2="":delete this.defines.USE_MAP2,this.customUniforms.uMap2.value=a}},{key:"roughness",get:function(){return this.customUniforms.uRoughness.value},set:function(a){this.customUniforms.uRoughness.value=a}},{key:"roughnessMap",get:function(){return this.customUniforms.uRoughnessMap.value},set:function(a){this.customUniforms.uRoughnessMap.value=a}},{key:"metalness",get:function(){return this.customUniforms.uMetalness.value},set:function(a){this.customUniforms.uMetalness.value=a}}])&&function(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,"symbol"==typeof(r=function(a,e){if("object"!=typeof a||null===a)return a;var t=a[Symbol.toPrimitive];if(void 0!==t){var n=t.call(a,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}(n.key))?r:String(r),n)}var r}(o.prototype,u),Object.defineProperty(o,"prototype",{writable:!1}),s}(a.MeshMatcapMaterial);export{t as MeshMatcapORMMaterial};
//# sourceMappingURL=three-matcap-orm-material.esm.js.map
