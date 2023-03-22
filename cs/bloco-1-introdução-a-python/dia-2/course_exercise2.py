numbers = input("Insira valores aqui, separados por espaço: ")

numbers_array = numbers.split(" ")

sum = 0

for number in numbers_array:
    if not number.isdigit():
        print(f"Erro ao somar valores, {number} não é um digito.")
    else:
        sum += int(number)

print(f"A soma dos valores válidos é: {sum}")
