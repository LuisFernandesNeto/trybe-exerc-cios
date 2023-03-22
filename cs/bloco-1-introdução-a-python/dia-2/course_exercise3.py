failed_students = []

with open("file.txt") as grades_file:
    for grade in grades_file:
        grade = grade.split(" ")
        if int(grade[1]) < 6:
            failed_students.append(grade[0] + "/n")

with open("failed_students.txt", mode="w") as failed_students_file:
    print(failed_students)
    failed_students_file.writelines(failed_students)
