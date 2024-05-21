temperature = 34

match temperature:
    case r if r < 0:
        print("Freezing")
    case r if 0 <= r < 10:
        print("Cold")
    case r if 10 <= r < 20:
        print("Cool")
    case r if 20 <= r < 30:
        print("Warm")
    case r if r >= 30:
        print("Hot")
