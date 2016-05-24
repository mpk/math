# math

Math utilities.

## Install

	npm install mpk/math#bcb9309

## API

#### .clamp( value, min, max )

Clamp the input value to the specified bounds.

#### .fuzzyEquals( value1, value2, [tolerance] )

Test if the input values are equal within specified tolerance (default is 0.00001).

#### .mapLinear( value, x1, x2, y1, y2 )

Map the input value from range [x1, x2] to range [y1, y2].

#### .mapLinearClamp( value, x1, x2, y1, y2 )

Map the input value from range [x1, x2] to range [y1, y2].

#### .modulo( dividend, divisor )

Perform modulo operation (result has the same sign as divisor).

#### .randFloat( min, max )

Generate pseudo-random float from [min, max) interval.

#### .randInt( min, max )

Generate pseudo-random integer from [min, max) interval.

#### .roundToNearest( value, nearest )

Round the input value to the nearest multiple of the passed number.

#### .toDegrees( radians )

Convert radians to degrees.

#### .toRadians( degrees )

Convert degrees to radians.

## License

MIT