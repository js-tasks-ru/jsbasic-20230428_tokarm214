function makeFriendsList(friends) {
	const friendsList = document.createElement("ul");

	friends.forEach((person) => {
		const fullName = document.createElement("li");

		fullName.textContent = `${person.firstName} ${person.lastName}`;
		friendsList.append(fullName);
	});
	
	return friendsList;
}
