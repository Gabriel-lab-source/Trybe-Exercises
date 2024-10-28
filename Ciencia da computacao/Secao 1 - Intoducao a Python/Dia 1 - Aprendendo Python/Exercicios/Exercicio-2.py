def return_average(n_list):
    sum = 0
    for n in n_list:
        sum += n
    return sum / len(n_list)


print(return_average(range(1000)))
