import * as THREE from 'three';
export declare class MeshMatcapORMMaterial extends THREE.MeshMatcapMaterial {
    private customUniforms;
    constructor(parameters?: THREE.MeshMatcapMaterialParameters);
    set color2(value: THREE.Color);
    get color2(): THREE.Color;
    set map2(value: THREE.Texture | null);
    get map2(): THREE.Texture | null;
    set roughness(value: number);
    get roughness(): number;
    set roughnessMap(value: THREE.Texture | null);
    get roughnessMap(): THREE.Texture | null;
    set metalness(value: number);
    get metalness(): number;
}
