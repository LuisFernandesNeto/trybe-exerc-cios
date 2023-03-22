def avg(numbers):
    value = 0
    for number in numbers:
        value += number
    return value / len(numbers)


numbers = [1, 2, 5, 8]

print(avg(numbers))
