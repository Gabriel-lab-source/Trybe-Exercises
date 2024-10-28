def amount_to_buy(square_meters):
    liters_required = square_meters / 3
    cans_required = liters_required // 18
    print(liters_required % 18)
    if liters_required % 18:
        cans_required += 1
    cost = cans_required * 80
    return (cans_required, cost)


print(amount_to_buy(81))
