export declare namespace MathUtils {
    /**
     * Conversion factor from radians to degrees.
     * Multiply radians by this constant to get degrees.
     */
    const RAD2DEG: number;
    /**
     * Conversion factor from degrees to radians.
     * Multiply degrees by this constant to get radians.
     */
    const DEG2RAD: number;
    /**
     * Restricts a value between a minimum and maximum bound.
     * @param value The value to clamp.
     * @param min The minimum allowed value.
     * @param max The maximum allowed value.
     * @returns The clamped value within [min, max].
     */
    function clamp(value: number, min: number, max: number): number;
    /**
     * Performs linear interpolation between two values.
     * @param a Start value.
     * @param b End value.
     * @param t Interpolation factor in range [0, 1].
     * @returns Interpolated value between a and b.
     */
    function lerp(a: number, b: number, t: number): number;
    /**
     * Converts an angle in radians to degrees.
     * @param rad Angle in radians.
     * @returns Equivalent angle in degrees.
     */
    function rad2deg(rad: number): number;
    /**
     * Converts an angle in degrees to radians.
     * @param deg Angle in degrees.
     * @returns Equivalent angle in radians.
     */
    function deg2rad(deg: number): number;
    /**
     * Maps a value from one range to another.
     * @param value The input value to map.
     * @param inMin Lower bound of the input range.
     * @param inMax Upper bound of the input range.
     * @param outMin Lower bound of the output range.
     * @param outMax Upper bound of the output range.
     * @returns The mapped value in the output range.
     */
    function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
    /**
     * Normalizes a value to the range [0, 1].
     * @param value The value to normalize.
     * @param min Minimum bound of the input range.
     * @param max Maximum bound of the input range.
     * @returns Normalized value in range [0, 1].
     */
    function normalize(value: number, min: number, max: number): number;
    /**
     * Smoothly interpolates between two edges using a cubic Hermite curve.
     * Useful for smooth transitions (e.g. graphics, shaders).
     * @param edge0 Lower edge of the transition.
     * @param edge1 Upper edge of the transition.
     * @param x The input value to evaluate.
     * @returns Smoothed interpolation value in range [0, 1].
     */
    function smoothstep(edge0: number, edge1: number, x: number): number;
    function smooth(a: number, smoothness: number): number;
    /**
     * Generates a random number between min and max.
     * @param min Minimum value.
     * @param max Maximum value.
     * @returns Random number in range [min, max).
     */
    function randomRange(min: number, max: number): number;
    /**
     * Checks if two numbers are approximately equal within a tolerance.
     * @param a First number.
     * @param b Second number.
     * @param epsilon Allowed tolerance (default: 1e-6).
     * @returns True if |a - b| < epsilon, otherwise false.
     */
    function approxEqual(a: number, b: number, epsilon?: number): boolean;
}
