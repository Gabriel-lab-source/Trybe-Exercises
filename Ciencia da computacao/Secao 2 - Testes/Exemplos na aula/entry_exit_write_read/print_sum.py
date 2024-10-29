numbers = input("Escreva somente números naturais, sem operadores: ")


def sum_input_numbers(numbers):
    sum = 0
    for number in numbers:
        if number.isdigit():
            sum += int(number)
    return sum


print(sum_input_numbers(numbers))
