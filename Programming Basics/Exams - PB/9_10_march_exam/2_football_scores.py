first_match = input()
second_match = input()
third_match = input()

won = 0
lost = 0
draw = 0

if int(first_match[0]) > int(first_match[2]):
    won += 1
elif int(first_match[0]) < int(first_match[2]):
    lost += 1
elif int(first_match[0]) == int(first_match[2]):
    draw += 1
if int(second_match[0]) > int(second_match[2]):
    won += 1
elif int(second_match[0]) < int(second_match[2]):
    lost += 1
elif int(second_match[0]) == int(second_match[2]):
    draw += 1
if int(third_match[0]) > int(third_match[2]):
    won += 1
elif int(third_match[0]) < int(third_match[2]):
    lost += 1
elif int(third_match[0]) == int(third_match[2]):
    draw += 1
print(f"Team won {won} games.")
print(f"Team lost {lost} games.")
print(f"Drawn games: {draw}")