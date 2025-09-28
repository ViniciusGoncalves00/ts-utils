export namespace VectorUtils {
    export function intersectRayPlane(
		origin: [number, number, number],
		direction: [number, number, number],
    	planeNormal: [number, number, number],
    	planeOrigin: [number, number, number],
	): number | null {
    	const value = dot(planeNormal, direction);

    	if(isParallel(value)) return null;

    	const diff = subtract(planeOrigin, origin);
		const t = dot(diff, planeNormal) / value;
    	return t >= 0 ? t : null;
	}

	export function isParallel(dot: number, epsilon = 1e-6): boolean {
		return Math.abs(dot) < epsilon ? true :  false;
	}

	export function dot(a: [number, number, number], b: [number, number, number]): number {
    	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  	}

	export function subtract(a: [number, number, number], b: [number, number, number]): [number, number, number] {
		return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
	}

	export function scaleAndAdd(a: [number, number, number], b: [number, number, number], scale: number): [number, number, number] {
    	return [a[0] + b[0] * scale, a[1] + b[1] * scale, a[2] + b[2] * scale];
	}

	export function normalize(vector: [number, number, number]): [number, number, number] {
		const [x, y, z] = vector;
    	const length = Math.hypot(x, y, z);
    	const nx = vector[0] / length;
    	const ny = vector[1] / length;
    	const nz = vector[2] / length;
		return [nx, ny, nz];
	}

	export function rotateAround(point: [number, number, number], axis: [number, number, number], angle: number): [number, number, number] {
    	const [x, y, z] = point;
    	const [u, v, w] = normalize(axis);

    	const cosA = Math.cos(angle);
    	const sinA = Math.sin(angle);

    	const newX =
    	    u * (u * x + v * y + w * z) * (1 - cosA) +
    	    x * cosA +
    	    (-w * y + v * z) * sinA;

    	const newY =
    	    v * (u * x + v * y + w * z) * (1 - cosA) +
    	    y * cosA +
    	    (w * x - u * z) * sinA;

    	const newZ =
    	    w * (u * x + v * y + w * z) * (1 - cosA) +
    	    z * cosA +
    	    (-v * x + u * y) * sinA;

    	return [newX, newY, newZ];
	}
}