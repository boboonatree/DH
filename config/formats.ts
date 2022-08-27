// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"
Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
export const Formats: FormatList = [
];
--------------------------------------------------------------------------------
If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Singles",
	},
	
	{
        name: "[Gen 8] leif",
        desc: `<b>bobolieffakemon</b>: This is your mod!`,
        mod: 'bobolieffakemon',
        ruleset: ['Standard NatDex', 'Dynamax Clause', 'Sleep Clause Mod', 'Species Clause', 'Moody Clause', 'Evasion Moves Clause', 'Swagger Clause', 'Baton Pass Clause', 'OHKO Clause', 'Subscribe For More Content'],
        unbanlist: [
             'breroot', 'furnostrich', 'sholossus', 'espopod', 'croissansect', 'piedraderm', 'kakavo', 'pelli', 'dripig', 'harmoth', 'formagia', 'sodia', 'dripig', 'woosher', 'gurso', 'phelpinch', 'shiah', 'gillomen', 'uriotl', 'cuzima', 'themon', 'shocbrute', 'lightnimbus', 'cephalethal', 'malizor', 'lunheron', 'erverena', 'siltmanya', 'tudek', 'glypdorsa', 'voraciousect', 'pichiri', 'wooliba', 'olfacrid', 'rodiche', 'mowisp', 'cephalopath', 'vambyss', 'mamicky', 'sklea', 'corazone', 'folivora', 'galena', 'grumplet', 'marlion', 'androsmos', 'dustoph', 'aeromo', 'peekoceros', 'aquimanna', 'apparicious', 'quetzadrakon', 'trybas', 'raiga', 'frogaloft',
			],
            
		onSwitchIn(pokemon) {
            this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
        },    
    },
];
