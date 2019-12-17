export default (name) => {
	switch (name) {
		case "Jon":
			return {
				age: 22,
				hobby: "Hockey",
				name: "Jon",
			};
		case "Larry":
			return {
				age: 28,
				hobby: "Basketball",
				name: "Larry",
			};
		case "Harry":
			return {
				age: 23,
				hobby: "Wizardry",
				name: "Harry",
			};
		default:
			return null;
	}
};
