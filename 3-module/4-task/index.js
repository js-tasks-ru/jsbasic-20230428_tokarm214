function showSalary(users, age) {
  return users
    .filter((user) => user.age <= age)
    .map((richUsers, index) =>
      index == 0
        ? richUsers.name + ", " + richUsers.balance
        : "\n" + richUsers.name + ", " + richUsers.balance
    )
    .join("");
}
