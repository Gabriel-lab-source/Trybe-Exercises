def instersection(listA, listB):
    seen_in_a = {}

    for item in listA:
        if item not in seen_in_a:
            seen_in_a[item] = True

    instersec = []

    for item in listB:
        if item in seen_in_a:
            instersec.append(item)

    return instersec


listA = [1, 2, 3, 4, 5, 6, 7, 8]
listB = [3, 5, 2, 6]

if __name__ == "__main__":
    print(instersection(listA, listB))
