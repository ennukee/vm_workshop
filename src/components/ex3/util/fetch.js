export default async (name) => {
	let response;
	switch (name) {
		case "Jon":
			response = {
				age: 22,
				hobby: "Hockey",
				name: "Jon",
			};
			break;
		case "Larry":
			response = {
				age: 28,
				hobby: "Basketball",
				name: "Larry",
			};
			break;
		case "Harry":
			response = {
				age: 23,
				hobby: "Wizardry",
				name: "Harry",
			};
			break;
		default:
			return null;
	}
	return new Promise((resolve) => {
		setTimeout(() => resolve(response), Math.random() * 1000 + 500);
	});
};
