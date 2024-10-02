let jsonPracownicy = {
	pracownicy: [
		{ firstName: "Krystian", lastName: "Dziopa" },
		{ firstName: "Anna", lastName: "Szapiel" },
		{ firstName: "Piotr", lastName: "Żmuda" },
	],
};

jsonPracownicy.pracownicy.forEach((osoba, index) => {
	console.log(
		`Index: ${index}, Imię: ${osoba.firstName}, Nazwisko: ${osoba.lastName}`
	);
});
