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
    function isParallel(dot, tolerance = 1e-6) {
        return Math.abs(dot) < tolerance ? true : false;
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
    function normalize(vector) {
        const [x, y, z] = vector;
        const length = Math.hypot(x, y, z);
        const nx = vector[0] / length;
        const ny = vector[1] / length;
        const nz = vector[2] / length;
        return [nx, ny, nz];
    }
    VectorUtils.normalize = normalize;
    function rotateAround(point, axis, angle) {
        const [x, y, z] = point;
        const [u, v, w] = normalize(axis);
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const newX = u * (u * x + v * y + w * z) * (1 - cosA) +
            x * cosA +
            (-w * y + v * z) * sinA;
        const newY = v * (u * x + v * y + w * z) * (1 - cosA) +
            y * cosA +
            (w * x - u * z) * sinA;
        const newZ = w * (u * x + v * y + w * z) * (1 - cosA) +
            z * cosA +
            (-v * x + u * y) * sinA;
        return [newX, newY, newZ];
    }
    VectorUtils.rotateAround = rotateAround;
})(VectorUtils || (VectorUtils = {}));
