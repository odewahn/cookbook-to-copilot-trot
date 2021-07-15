"""
Given the radius of a circle, and the angle of an arc in degrees, find the length of the arc.
"""


def arc_length(radius, angle):
    """
    >>> arc_length(1, 45)
    1.0
    """
    import math

    return radius * math.sin(math.radians(angle))


print("Print test value for Calculating the Length of a Circular Arc")
print(arc_length(1, 45))
print("End of test")
