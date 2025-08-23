export var MathUtils;
(function (MathUtils) {
    /**
     * Conversion factor from radians to degrees.
     * Multiply radians by this constant to get degrees.
     */
    MathUtils.RAD2DEG = 180 / Math.PI; // ~57.29578
    /**
     * Conversion factor from degrees to radians.
     * Multiply degrees by this constant to get radians.
     */
    MathUtils.DEG2RAD = Math.PI / 180; // ~0.01745329
    /**
     * Restricts a value between a minimum and maximum bound.
     * @param value The value to clamp.
     * @param min The minimum allowed value.
     * @param max The maximum allowed value.
     * @returns The clamped value within [min, max].
     */
    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
    MathUtils.clamp = clamp;
    /**
     * Performs linear interpolation between two values.
     * @param a Start value.
     * @param b End value.
     * @param t Interpolation factor in range [0, 1].
     * @returns Interpolated value between a and b.
     */
    function lerp(a, b, t) {
        return a + (b - a) * t;
    }
    MathUtils.lerp = lerp;
    /**
     * Converts an angle in radians to degrees.
     * @param rad Angle in radians.
     * @returns Equivalent angle in degrees.
     */
    function rad2deg(rad) {
        return rad * MathUtils.RAD2DEG;
    }
    MathUtils.rad2deg = rad2deg;
    /**
     * Converts an angle in degrees to radians.
     * @param deg Angle in degrees.
     * @returns Equivalent angle in radians.
     */
    function deg2rad(deg) {
        return deg * MathUtils.DEG2RAD;
    }
    MathUtils.deg2rad = deg2rad;
    /**
     * Maps a value from one range to another.
     * @param value The input value to map.
     * @param inMin Lower bound of the input range.
     * @param inMax Upper bound of the input range.
     * @param outMin Lower bound of the output range.
     * @param outMax Upper bound of the output range.
     * @returns The mapped value in the output range.
     */
    function mapRange(value, inMin, inMax, outMin, outMax) {
        return outMin + ((value - inMin) * (outMax - outMin)) / (inMax - inMin);
    }
    MathUtils.mapRange = mapRange;
    /**
     * Normalizes a value to the range [0, 1].
     * @param value The value to normalize.
     * @param min Minimum bound of the input range.
     * @param max Maximum bound of the input range.
     * @returns Normalized value in range [0, 1].
     */
    function normalize(value, min, max) {
        return (value - min) / (max - min);
    }
    MathUtils.normalize = normalize;
    /**
     * Smoothly interpolates between two edges using a cubic Hermite curve.
     * Useful for smooth transitions (e.g. graphics, shaders).
     * @param edge0 Lower edge of the transition.
     * @param edge1 Upper edge of the transition.
     * @param x The input value to evaluate.
     * @returns Smoothed interpolation value in range [0, 1].
     */
    function smoothstep(edge0, edge1, x) {
        const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
        return t * t * (3 - 2 * t);
    }
    MathUtils.smoothstep = smoothstep;
    function smooth(a, smoothness) {
        return a / (1 + smoothness * a);
    }
    MathUtils.smooth = smooth;
    /**
     * Generates a random number between min and max.
     * @param min Minimum value.
     * @param max Maximum value.
     * @returns Random number in range [min, max).
     */
    function randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    MathUtils.randomRange = randomRange;
    /**
     * Checks if two numbers are approximately equal within a tolerance.
     * @param a First number.
     * @param b Second number.
     * @param epsilon Allowed tolerance (default: 1e-6).
     * @returns True if |a - b| < epsilon, otherwise false.
     */
    function approxEqual(a, b, epsilon = 1e-6) {
        return Math.abs(a - b) < epsilon;
    }
    MathUtils.approxEqual = approxEqual;
})(MathUtils || (MathUtils = {}));
