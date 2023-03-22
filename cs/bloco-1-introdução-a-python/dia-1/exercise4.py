names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def max_characteres(list):
    highest = list[0]
    for lis in list:
        if len(lis) > len(highest):
            highest = lis
    return highest


print(max_characteres(names))
