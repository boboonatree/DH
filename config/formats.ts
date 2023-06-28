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
        mod: 'bobolieffakemon',
        desc: `<b>bobolieffakemon</b>: This is your mod!`,
		  threads: [
			  `&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3660004/">Solomods Megathread</a>`,
		  ],
        ruleset: ['Standard NatDex', 'Dynamax Clause', 'Sleep Clause Mod', 'Species Clause', 'Moody Clause', 'Evasion Moves Clause', 'Swagger Clause', 'Baton Pass Clause', 'OHKO Clause'],
        banlist: ['All Pokemon', 'Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z'],
          unbanlist: [
             'Aeromo', 'Androsmos', 'Apparicious', 'Aquimanna', 'Breroot', 'Cephalethal', 'Cephalopath', 'Corazone', 'Croissansect', 'Cuzima', 'Dripig', 'Dustoph', 'Erverena', 'Espopod', 'Folivora', 'Formagia', 'Frog Aloft', 'Furiotl', 'Furnostrich', 'Galena', 'Gillomen', 'Glypdorsa', 'Grumplet', 'Gurso', 'Harmoth', 'Infekshi', 'Kakavo', 'Lightnimbus', 'Lunheron', 'Malizor', 'Mammicky', 'Marlion', 'Mowisp', 'Olfacrid', 'Peekoceros', 'Pelli', 'Phelpinch', 'Pichiri', 'Piedraderm', 'Quetzadrakon', 'Raiga', 'Rodiche', 'Rodiche-Hinterlands', 'Rodiche-Hive', 'Rodiche-Wildwood', 'Shiah', 'Shocbrute', 'Sholossus', 'Siltmanya', 'Sklea', 'Sodia', 'Teranim', 'Themon', 'Trybas', 'Tudek', 'Vambyss', 'Voraciousect', 'Wooliba', 'Woosher'
			],
            
		onSwitchIn(pokemon) {
            this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
        },    
    },
];
