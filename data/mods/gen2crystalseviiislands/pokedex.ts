export const Pokedex: {[speciesid: string]: SpeciesData} = {
	horatekku: {
		num: 252,
		name: "Horatekku",
		types: ["Steel", "Ghost"],
		baseStats: {hp: 80, atk: 100, def: 100, spa: 60, spd: 70, spe: 60},
		abilities: {0: "No Ability"},
		heightm: 0.2,
		weightkg: 0.5,
	},
	aroofaondo: {
		num: 253,
		name: "Aroofaondo",
		types: ["Fire", "Ice"],
		baseStats: {hp: 60, atk: 70, def: 70, spa: 100, spd: 80, spe: 100},
		abilities: {0: "No Ability"},
		heightm: 0.5,
		weightkg: 12.1,
	},
	exoltol: {
		num: 254,
		name: "Exoltol",
		types: ["Water", "Ground"],
		baseStats: {hp: 100, atk: 105, def: 95, spa: 70, spd: 70, spe: 45},
		abilities: {0: "No Ability"},
		heightm: 1,
		weightkg: 131,
		prevo: "Quagsire",
	},
	animon: {
		num: 255,
		name: "Animon",
		types: ["Steel"],
		gender: "N",
		baseStats: {hp: 72, atk: 72, def: 48, spa: 72, spd: 48, spe: 72},
		abilities: {0: "No Ability"},
		heightm: 0.5,
		weightkg: 6,
		prevo: "Ditto",
	},
	esscargoo: {
		num: 256,
		name: "Esscargoo",
		types: ["Fire", "Rock"],
		baseStats: {hp: 70, atk: 85, def: 140, spa: 95, spd: 95, spe: 40},
		abilities: {0: "No Ability"},
		heightm: 1.4,
		weightkg: 151.1,
		prevo: "Magcargo",
	},
	tunguru: {
		num: 257,
		name: "Tunguru",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 100, atk: 65, def: 85, spa: 120, spd: 85, spe: 30},
		abilities: {0: "No Ability"},
		heightm: 1.3,
		weightkg: 90.5,
		prevo: "Lickitung",
	},
	terricks: {
		num: 258,
		name: "Terricks",
		types: ["Rock", "Flying"],
		gender: "N",
		baseStats: {hp: 90, atk: 125, def: 160, spa: 90, spd: 50, spe: 65},
		abilities: {0: "No Ability"},
		heightm: 3.8,
		weightkg: 140.4,
	},
	
	
	
// Vanilla Edits
	
	
	
	quagsire: {
		inherit: true,
		evos: ["Exoltol"],
	},
	ditto: {
		inherit: true,
		evos: ["Animon"],
	},
	magcargo: {
		inherit: true,
		evos: ["Esscargoo"],
	},
	lickitung: {
		inherit: true,
		evos: ["Tunguru"],
	},
};
