class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name

    def __repr__(self):
        return f"Employee(id_num={self.id_num}, name={self.name})"


class HashMap:
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None

    def has(self, id_num):
        address = self.get_address(id_num)
        return bool(self._buckets[address])

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        for employee in self._buckets[address]:
            if employee.id_num == id_num:
                employee.name = new_name


if __name__ == "__main__":
    employees = [(14, "name1"), (23, "name2"),
                 (10, "name3"), (9, "name4"), (34, "name5")]
    instanced_employees = [Employee(emp_id, name) for emp_id,
                           name in employees]
    hash_map = HashMap()
    for inst_employee in instanced_employees:
        hash_map.insert(inst_employee)

    hash_map.update_value(34, "name_change")
    print(hash_map._buckets)
