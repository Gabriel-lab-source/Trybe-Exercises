def binary_search_arrays(array1, array2):
    iterations = 0
    results = []
    for number in array1:
        start = 0
        end = len(array2) - 1
        while (start <= end):
            mid = (start + end) // 2
            iterations += 1
            if number == array2[mid]:
                results.append((number, mid))
                break
            elif number < array2[mid]:
                end = mid - 1
            else:
                start = mid + 1
    return results, iterations


n = 100
array = list(range(1, n+1))

results, iterations = binary_search_arrays(array, array)
print(results)
print(iterations)
