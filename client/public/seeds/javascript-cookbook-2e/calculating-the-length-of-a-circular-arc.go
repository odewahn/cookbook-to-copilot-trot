/*
Given the radius of a circle, and the angle of an arc in degrees, find the length of the arc.
*/
func lengthOfCircularArc(radius float64, angleInDegrees float64) float64 {
	return radius * math.Pi * angleInDegrees / 180
}

fmt.Println("Print test value for Calculating the Length of a Circular Arc");
fmt.Println("Length of Circular Arc: " + strconv.FormatFloat(lengthOfCircularArc(5, 90), 'f', -1, 64));
