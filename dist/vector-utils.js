export var VectorUtils;
(function (VectorUtils) {
    function intersectRayPlane(origin, direction, planeNormal, planeOrigin) {
        const value = dot(planeNormal, direction);
        if (isParallel(value))
            return null;
        const diff = subtract(planeOrigin, origin);
        const t = dot(diff, planeNormal) / value;
        return t >= 0 ? t : null;
    }
    VectorUtils.intersectRayPlane = intersectRayPlane;
    function isParallel(dot, epsilon = 1e-6) {
        return Math.abs(dot) < epsilon ? true : false;
    }
    VectorUtils.isParallel = isParallel;
    function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }
    VectorUtils.dot = dot;
    function subtract(a, b) {
        return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
    }
    VectorUtils.subtract = subtract;
    function scaleAndAdd(a, b, scale) {
        return [a[0] + b[0] * scale, a[1] + b[1] * scale, a[2] + b[2] * scale];
    }
    VectorUtils.scaleAndAdd = scaleAndAdd;
})(VectorUtils || (VectorUtils = {}));
