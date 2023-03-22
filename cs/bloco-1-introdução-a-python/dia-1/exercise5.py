def ink_cost(m):
    can_price = 80
    required_liters = m / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


print(ink_cost(20))
