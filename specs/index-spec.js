/**
 *	Math utilities
 */
var math = require('../source/index');

describe('clamp', function() {

	it('clamps the input value', function() {
		expect(math.clamp(-5, -2, 4)).toBe(-2);
		expect(math.clamp(-2, -2, 4)).toBe(-2);
		expect(math.clamp(0, -2, 4)).toBe(0);
		expect(math.clamp(4, -2, 4)).toBe(4);
		expect(math.clamp(9, -2, 4)).toBe(4);
	});

});

describe('fuzzyEquals', function() {

	it('tests equality with default tolerance', function() {
		expect(math.fuzzyEquals(1.00000, 0.999999)).toBe(true);
		expect(math.fuzzyEquals(1.00000, 0.99998)).toBe(false);
		expect(math.fuzzyEquals(1, 2)).toBe(false);
	});

	it('tests equality with custom tolerance', function() {
		expect(math.fuzzyEquals(3.2, 1, 2.5)).toBe(true);
		expect(math.fuzzyEquals(5.2, 1, 2.5)).toBe(false);
		expect(math.fuzzyEquals(6, 4, 3)).toBe(true);
	});

});

describe('mapLinear', function() {

	it('maps the input value', function() {
		expect(math.mapLinear(-1, 0, 2, 10, 20)).toBe(5);
		expect(math.mapLinear(0, 0, 2, 10, 20)).toBe(10);
		expect(math.mapLinear(1, 0, 2, 10, 20)).toBe(15);
		expect(math.mapLinear(2, 0, 2, 10, 20)).toBe(20);
		expect(math.mapLinear(3, 0, 2, 10, 20)).toBe(25);
	});

});

describe('mapLinearClamp', function() {

	it('maps the input value and clamps the result', function() {
		expect(math.mapLinearClamp(-1, 0, 2, 10, 20)).toBe(10);
		expect(math.mapLinearClamp(0, 0, 2, 10, 20)).toBe(10);
		expect(math.mapLinearClamp(1, 0, 2, 10, 20)).toBe(15);
		expect(math.mapLinearClamp(2, 0, 2, 10, 20)).toBe(20);
		expect(math.mapLinearClamp(3, 0, 2, 10, 20)).toBe(20);
		expect(math.mapLinearClamp(-1, 0, 2, 20, 10)).toBe(20);
		expect(math.mapLinearClamp(3, 0, 2, 20, 10)).toBe(10);
	});

});

describe('modulo', function() {

	it('performs modulo operation and retains the divisor sign', function() {
		expect(math.modulo(256, 8)).toBe(0);
		expect(math.modulo(7, 8)).toBe(7);
		expect(math.modulo(23, 8)).toBe(7);
		expect(math.modulo(-1, 8)).toBe(7);
		expect(math.modulo(1, -5)).toBe(-4);
		expect(math.modulo(6, -5)).toBe(-4);
		expect(math.modulo(-4, -5)).toBe(-4);
	});

});

describe('randFloat', function() {

	it('generates pseudo-random float', function() {
		expect(math.randFloat(0, 1)).toEqual(jasmine.any(Number));
		expect(math.randFloat(0, 1)).toBeLessThan(1);
		expect(math.randFloat(0, 1)).not.toBeLessThan(0);
		expect(math.randFloat(-3, 6)).toBeLessThan(6);
		expect(math.randFloat(-3, 6)).not.toBeLessThan(-3);
	});

});

describe('randInt', function() {

	it('generates pseudo-random integer', function() {
		expect(math.randInt(4, 6)).toEqual(jasmine.any(Number));
		expect(math.randInt(4, 6)).not.toBeLessThan(4);
		expect(math.randInt(4, 6)).not.toBeGreaterThan(5);
	});

});

describe('roundToNearest', function() {

	it('rounds to the nearest multiple', function() {
		expect(math.roundToNearest(2, 5)).toBe(0);
		expect(math.roundToNearest(3, 5)).toBe(5);
		expect(math.roundToNearest(16, 5)).toBe(15);
		expect(math.roundToNearest(-1, 5)).toBe(0);
		expect(math.roundToNearest(-3, 5)).toBe(-5);
	});

});

describe('toDegrees', function() {

	it('converts radians to degrees', function() {
		expect(math.toDegrees(-12.5663706143591729)).toBe(-720);
		expect(math.toDegrees(-3.1415926535897932)).toBe(-180);
		expect(math.toDegrees(0)).toBe(0);
		expect(math.toDegrees(3.1415926535897932)).toBe(180);
		expect(math.toDegrees(12.5663706143591729)).toBe(720);
	});

});

describe('toRadians', function() {

	it('converts degrees to radians', function() {
		expect(math.toRadians(-720)).toBe(-12.5663706143591729);
		expect(math.toRadians(-180)).toBe(-3.1415926535897932);
		expect(math.toRadians(0)).toBe(0);
		expect(math.toRadians(180)).toBe(3.1415926535897932);
		expect(math.toRadians(720)).toBe(12.5663706143591729);
	});

});