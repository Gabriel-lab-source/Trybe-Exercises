fruits = ["banana", "apple", "grape"]

fruits_enumerated = enumerate(fruits)

print(list(fruits_enumerated))

for element in enumerate(fruits):
    print(element)

fruit = "banana"
letters = [letter for letter in fruit]
print(letters)


def func(*args):
    print([arg for arg in args])


func()
func("a")
func("a", 1)
func([1, 2, 3])
