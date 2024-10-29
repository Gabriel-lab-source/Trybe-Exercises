def find_failed_students(file_name):
    failed_students = []
    try:
        with open(file_name, mode="r") as file:
            student_grades = file.read()
    except FileNotFoundError:
        print("Arquivo inexistente")
        return
    for line in student_grades.splitlines():
        student, grade = line.split()
        if int(grade) < 6:
            failed_students.append(student)
    if failed_students:
        with open('failed_students.txt', mode='w') as file:
            file.write('\n'.join(failed_students))
    try:
        with open("failed_students.txt", "r") as file:
            print(file.read())
    except FileNotFoundError:
        print("Arquivo de alunos reprovados inexistente.")


find_failed_students('grades.txt')
