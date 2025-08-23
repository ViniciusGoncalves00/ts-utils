export declare namespace VectorUtils {
    function intersectRayPlane(origin: [number, number, number], direction: [number, number, number], planeNormal: [number, number, number], planeOrigin: [number, number, number]): number | null;
    function isParallel(dot: number, epsilon?: number): boolean;
    function dot(a: [number, number, number], b: [number, number, number]): number;
    function subtract(a: [number, number, number], b: [number, number, number]): [number, number, number];
    function scaleAndAdd(a: [number, number, number], b: [number, number, number], scale: number): [number, number, number];
}
