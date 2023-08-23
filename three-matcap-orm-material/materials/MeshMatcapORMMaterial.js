import * as THREE from 'three';
/* eslint-disable no-param-reassign */
import matcapORMUniform from '../shaders/shaderChunk/matcapORMUniform';
import matcapORM from '../shaders/shaderChunk/matcapORM';
export class MeshMatcapORMMaterial extends THREE.MeshMatcapMaterial {
    customUniforms;
    constructor(parameters) {
        super(parameters);
        this.customUniforms = {
            uMap2: { value: null },
            uRoughness: { value: 0 },
            uRoughnessMap: { value: null },
            uMetalness: { value: 0 },
            uColor: { value: new THREE.Color(0xFFFFFF) },
        };
        this.setValues(parameters);
        this.onBeforeCompile = (shader) => {
            shader.defines = Object.assign(shader.defines, {
                USE_UV: '',
            });
            shader.uniforms = Object.assign(shader.uniforms, this.customUniforms);
            shader.fragmentShader = shader.fragmentShader.replace('#define MATCAP', matcapORMUniform);
            shader.fragmentShader = shader.fragmentShader.replace('vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;', matcapORM);
        };
    }
    set color2(value) {
        this.customUniforms.uColor.value = value;
    }
    get color2() {
        return this.customUniforms.uColor.value;
    }
    set map2(value) {
        if (value)
            this.defines.USE_MAP2 = '';
        else
            delete this.defines.USE_MAP2;
        this.customUniforms.uMap2.value = value;
    }
    get map2() {
        return this.customUniforms.uMap2.value;
    }
    set roughness(value) {
        this.customUniforms.uRoughness.value = value;
    }
    get roughness() {
        return this.customUniforms.uRoughness.value;
    }
    set roughnessMap(value) {
        this.customUniforms.uRoughnessMap.value = value;
    }
    get roughnessMap() {
        return this.customUniforms.uRoughnessMap.value;
    }
    set metalness(value) {
        this.customUniforms.uMetalness.value = value;
    }
    get metalness() {
        return this.customUniforms.uMetalness.value;
    }
    applyMapsFromOtherMaterial(material) {
        if (material.color)
            this.color2 = material.color;
        if (material.map) {
            this.map2 = material.map;
        }
        if (material.roughness)
            this.roughness = material.roughness;
        if (material.roughnessMap)
            this.roughnessMap = material.roughnessMap;
        if (material.normalMap)
            this.normalMap = material.normalMap;
    }
}
