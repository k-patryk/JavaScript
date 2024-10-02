/* class ksiazka {
	constructor(tytul, autor, przeczytana) {
		this.tytul = tytul;
		this.autor = autor;
		this.przeczytana = przeczytana;
	}
}

const opiszKsiazke = function (ksiazka) {
	return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i ${
		this.przeczytana ? "została" : "nie została"
	} przeczytana.`;
};

const ksiazka1 = new ksiazka("Wiedźmin", "Andrzej Sapkowski", false);
const ksiazka2 = new ksiazka("Harry Potter", "J.K. Rowling", true);
const ksiazka3 = new ksiazka("Dziady", "Adam Mickiewicz", false);

const ksiazki = [ksiazka1, ksiazka2, ksiazka3];

console.log(iloscPrzeczytanych(ksiazki));
function iloscPrzeczytanych(tablica) {
	let count = 0;
	for (const ksiazka of tablica) {
		console.log(opiszKsiazke(ksiazka));
		if (ksiazka.przeczytana) {
			count++;
		}
	}
	return count;
}

console.log(iloscPrzeczytanych(ksiazki)); */
class ksiazka {
	constructor(tytul, autor, przeczytana) {
		this.tytul = tytul;
		this.autor = autor;
		this.przeczytana = przeczytana;
	}
}

const opiszKsiazke = (ksiazka) => {
	return `Książka ma tytuł ${ksiazka.tytul}, autorem jest ${ksiazka.autor} i ${
		ksiazka.przeczytana ? "została" : "nie została"
	} przeczytana.`;
};

const ksiazka1 = new ksiazka("Wiedźmin", "Andrzej Sapkowski", true);
const ksiazka2 = new ksiazka("Harry Potter", "J.K. Rowling", false);
const ksiazka3 = new ksiazka("Dziady", "Adam Mickiewicz", false);

const ksiazki = [ksiazka1, ksiazka2, ksiazka3];

function iloscPrzeczytanych(tablica) {
	let count = 0;
	for (const ksiazka of tablica) {
		console.log(opiszKsiazke(ksiazka));
		if (ksiazka.przeczytana) {
			count++;
		}
	}
	return count;
}

console.log(iloscPrzeczytanych(ksiazki));
