import { Color, MeshMatcapMaterial, Texture, type MeshMatcapMaterialParameters } from 'three';
export declare class MeshMatcapORMMaterial extends MeshMatcapMaterial {
    private customUniforms;
    constructor(parameters?: MeshMatcapMaterialParameters);
    set color2(value: Color);
    get color2(): Color;
    set map2(value: Texture | null);
    get map2(): Texture | null;
    set roughness(value: number);
    get roughness(): number;
    set roughnessMap(value: Texture | null);
    get roughnessMap(): Texture | null;
    set metalness(value: number);
    get metalness(): number;
}
