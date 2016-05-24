/**
 *	Math utilities
 */
module.exports = {

	/**
	 *	Clamp the input value to the specified bounds.
	 *
	 *	@param {number} value
	 *	@param {number} min
	 *	@param {number} max
	 *	@return {number}
	 */
	clamp: function( value, min, max ) {
		return (value < min) ? min : ((value > max) ? max : value);
	},

	/**
	 *	Test if the input values are equal within specified tolerance (default is 0.00001).
	 *
	 *	@param {number} value1
	 *	@param {number} value2
	 *	@param {number=} tolerance
	 *	@return {boolean}
	 */
	fuzzyEquals: function( value1, value2, tolerance ) {
		return Math.abs(value1 - value2) <= (tolerance || 0.00001);
	},

	/**
	 *	Map the input value from range [x1, x2] to range [y1, y2].
	 *
	 *	@param {number} value
	 *	@param {number} x1
	 *	@param {number} x2
	 *	@param {number} y1
	 *	@param {number} y2
	 *	@return {number}
	 */
	mapLinear: function( value, x1, x2, y1, y2 ) {
		return y1 + (value - x1) * (y2 - y1) / (x2 - x1);
	},

	/**
	 *	Map the input value from range [x1, x2] to range [y1, y2] and clamp the mapped value between y1 and y2.
	 *
	 *	@param {number} value
	 *	@param {number} x1
	 *	@param {number} x2
	 *	@param {number} y1
	 *	@param {number} y2
	 *	@return {number}
	 */
	mapLinearClamp: function( value, x1, x2, y1, y2 ) {
		return this.clamp(this.mapLinear(value, x1, x2, y1, y2), (y1 < y2) ? y1 : y2, (y1 < y2) ? y2 : y1);
	},

	/**
	 *	Perform modulo operation (result has the same sign as divisor).
	 *
	 *	@param {number} dividend
	 *	@param {number} divisor
	 *	@return {number}
	 */
	modulo: function( dividend, divisor ) {
		var result = dividend % divisor;

		return (dividend * divisor < 0) ? result + divisor : result;
	},

	/**
	 *	Generate pseudo-random float from [min, max) interval.
	 *
	 *	@param {number} min
	 *	@param {number} max
	 *	@return {number}
	 */
	randFloat: function( min, max ) {
		return min + Math.random() * (max - min);
	},

	/**
	 *	Generate pseudo-random integer from [min, max) interval.
	 *
	 *	@param {number} min
	 *	@param {number} max
	 *	@return {number}
	 */
	randInt: function( min, max ) {
		return Math.floor(this.randFloat(min, max));
	},

	/**
	 *	Round the input value to the nearest multiple of the passed number.
	 *
	 *	@param {number} value
	 *	@param {number} nearest
	 *	@return {number}
	 */
	roundToNearest: function( value, nearest ) {
		return Math.round(value / nearest) * nearest;
	},

	/**
	 *	Convert radians to degrees.
	 *
	 *	@param {number} radians
	 *	@return {number}
	 */
	toDegrees: function( radians ) {
		return radians * 180 / Math.PI;
	},

	/**
	 *	Convert degrees to radians.
	 *
	 *	@param {number} degrees
	 *	@return {number}
	 */
	toRadians: function( degrees ) {
		return degrees * Math.PI / 180;
	}

};