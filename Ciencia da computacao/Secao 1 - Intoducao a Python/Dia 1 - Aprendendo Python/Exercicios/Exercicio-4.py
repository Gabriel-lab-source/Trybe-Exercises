names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def get_bigger_name(name_list):
    biggest_name = name_list[0]
    for name in name_list:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print(get_bigger_name(names))
