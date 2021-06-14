'use strict';

const CATEGORIES = {
	condition: "Condition"
};

const CARDS = [
	{
		id: "null",
		name: "",
		detail: "",
		category: "",
		icon: "empty"
	},
	{
		id: "con_blinded",
		name: "Blinded",
		detail: "<ul><li>You can't see.</li><li>You automatically fail any ability check that requires sight.</li><li>Attack rolls against you have advantage.</li><li>Your attack rolls have disadvantage.</li></ul>",
		category: CATEGORIES.condition,
		icon: "blinded"
	},
	{
		id: "con_charmed",
		name: "Charmed",
		detail: "<ul><li>You can't attack the charmer or target the charmer with harmful abilities or magical effects.</li><li>The charmer has advantage on any ability check to interact socially with you.</li></ul>",
		category: CATEGORIES.condition,
		icon: "charmed",
	},
	{
		id: "con_dead",
		name: "Dead",
		detail: "<p>You are dead.</p>",
		category: CATEGORIES.condition,
		icon: "dead",
	},
	{
		id: "con_deafened",
		name: "Deafened",
		detail: "<ul><li>You can't hear.</li><li>You automatically fail any ability check that requires hearing.</li></ul>",
		category: CATEGORIES.condition,
		icon: "deafened",
	},
	{
		id: "con_dying",
		name: "Dying",
		detail: "<ul><li>You are <i>Unconcious</i>.</li><li>At the start of your turn, if you are on 0 hit points, make a death saving throw.</li></ul>",
		category: CATEGORIES.condition,
		icon: "dying",
	},
	{
		id: "con_exhaustion",
		name: "Exhaustion",
		detail: "<ol><li>You have disadvantage on ability checks.</li><li>Your speed is halved.</li><li>You have disadvantage on attack rolls and saving throws.</li><li>Your hit point maximum is halved.</li><li>Your speed is reduced to 0.</li><li>You are dead.</li></ul>",
		category: CATEGORIES.condition,
		icon: "exhaustion",
		classes:  {
			"poker": "content-font-size-2"
		}
	},
	{
		id: "con_exhaustion_1",
		name: "Exhaustion 1",
		detail: "<p>You have disadvantage on ability checks.</p>",
		category: CATEGORIES.condition,
		icon: "exhaustion_1",
	},
	{
		id: "con_exhaustion_2",
		name: "Exhaustion 2",
		detail: "<ul><li>You have disadvantage on ability checks.</li><li>Your speed is halved.</li></ul>",
		category: CATEGORIES.condition,
		icon: "exhaustion_2",
	},
	{
		id: "con_exhaustion_3",
		name: "Exhaustion 3",
		detail: "<ul><li>You have disadvantage on ability checks.</li><li>Your speed is halved.</li><li>You have disadvantage on attack rolls and saving throws.</li></ul>",
		category: CATEGORIES.condition,
		icon: "exhaustion_3",
	},
	{
		id: "con_exhaustion_4",
		name: "Exhaustion 4",
		detail: "<ul><li>You have disadvantage on ability checks.</li><li>Your speed is halved.</li><li>You have disadvantage on attack rolls and saving throws.</li><li>Your hit point maximum is halved.</li></ul>",
		category: CATEGORIES.condition,
		icon: "exhaustion_4",
	},
	{
		id: "con_exhaustion_5",
		name: "Exhaustion 5",
		detail: "<ul><li>You have disadvantage on ability checks.</li><li>You have disadvantage on attack rolls and saving throws.</li><li>Your hit point maximum is halved.</li><li>Your speed is reduced to 0.</li></ul>",
		category: CATEGORIES.condition,
		icon: "exhaustion_5",
	},
	{
		id: "con_exhaustion_6",
		name: "Exhaustion 6",
		detail: "<p>You are dead.</p>",
		category: CATEGORIES.condition,
		icon: "exhaustion_6",
	},
	{
		id: "con_fatigued",
		name: "Fatigued",
		detail: "<p>You gain a level of exhaustion.</p>",
		category: CATEGORIES.condition,
		icon: "fatigued",
	},
	{
		id: "con_frightened",
		name: "Frightened",
		detail: "<ul><li>You have disadvantage on ability checks and attack rolls while the source of your fear is within line of sight.</li><li>You can't willingly move closer to the source of your fear.</li></ul>",
		category: CATEGORIES.condition,
		icon: "frightened"
	},
	{
		id: "con_grappled",
		name: "Grappled",
		detail: "<ul><li>Your speed becomes 0, and you can't benefit from any bonus to your speed.</li><li>This condition ends if the grappler is <i>Incapacitated</i>, or if an effect removes you from the reach of the grappler or grappling effect.</li></ul>",
		category: CATEGORIES.condition,
		icon: "grappled"
	},
	{
		id: "con_incapacitated",
		name: "Incapacitated",
		detail: "<p>You can't take actions or reactions.</p>",
		category: CATEGORIES.condition,
		icon: "incapacitated",
		classes:  {
			"poker": "content-font-center"
		}
	},
	{
		id: "con_invisible",
		name: "Invisible",
		detail: "<ul><li>You are impossible to see without the aid of magic or a special sense.</li><li>For the purpose of hiding, you are heavily obscured. Your location can be detected by any noise you make or any tracks you leave.</li><li>Attack rolls against you have disadvantage.</li><li>Your attack rolls have advantage.</li></ul>",
		category: CATEGORIES.condition,
		icon: "invisible",
		classes:  {
			"poker": "content-font-size-3"
		}
	},
	{
		id: "con_paralyzed",
		name: "Paralyzed",
		detail: "<ul><li>You are <i>Incapacitated</i> and can't move or speak.</li><li>You automatically fail Strength and Dexterity saving throws.</li><li>Attack rolls against you have advantage. Any attack that hits you is a critical hit if the attacker is within 5 feet of you.</li></ul>",
		category: CATEGORIES.condition,
		icon: "paralyzed",
		classes:  {
			"poker": "content-font-size-4"
		}
	},
	{
		id: "con_petrified",
		name: "Petrified",
		detail: "<ul><li>You transform into a solid, inanimate substance. Your weight increases by x10, and you cease aging.</li><li>You are <i>Incapacitated</i>, can't move or speak, and are unaware of your surroundings. Attack rolls against you have advantage, and you automatically fail Strength and Dexterity saving throws.</li><li>You have resistance to all damage.</li><li>You are immune to poison and disease.</li></ul>",
		category: CATEGORIES.condition,
		icon: "petrified",
		classes:  {
			"poker": "content-font-size-2"
		}
	},
	{
		id: "con_poisoned",
		name: "Poisoned",
		detail: "<p>You have disadvantage on attack rolls and&nbsp;ability checks.</p>",
		category: CATEGORIES.condition,
		icon: "poisoned",
		classes:  {
			"poker": "content-font-center"
		}
	},
	{
		id: "con_prone",
		name: "Prone",
		detail: "<ul><li>Your only movement option is to crawl, unless you stand up and thereby end the condition.</li><li>You have disadvantage on attack rolls. An attack roll against you has advantage if the attacker is within 5 feet of you. Otherwise, the attack roll has disadvantage.</li></ul>",
		category: CATEGORIES.condition,
		icon: "prone",
		classes:  {
			"poker": "content-font-size-4"
		}
	},
	{
		id: "con_restrained",
		name: "Restrained",
		detail: "<ul><li>Your speed becomes 0, and you can't benefit from any bonus to your speed.</li><li>Attack rolls against you have advantage, and your attack rolls have disadvantage.</li><li>You have disadvantage on Dexterity saving throws.</li></ul>",
		category: CATEGORIES.condition,
		icon: "restrained"
	},
	{
		id: "con_stunned",
		name: "Stunned",
		detail: "<ul><li>You are <i>Incapacitated</i>, can't move, and can speak only falteringly.</li><li>You automatically fail Strength and Dexterity saving throws.</li><li>Attack rolls against you have advantage.</li></ul>",
		category: CATEGORIES.condition,
		icon: "stunned"
	},
	{
		id: "con_unconscious",
		name: "Unconscious",
		detail: "<ul><li>You are <i>Incapacitated</i>, can't move or speak, and are unaware of your surroundings.</li><li>You drop whatever you're holding and fall prone.</li><li>You automatically fail Strength and Dexterity saving throws.</li><li>Attack rolls against you have advantage. Any attack that hits you is a critical hit if the attacker is within 5 feet of you.</li></ul>",
		category: CATEGORIES.condition,
		icon: "unconcious",
		classes:  {
			"poker": "content-font-size-2"
		}
	}
];

function inheritGridAttributes(html) {
	html.querySelectorAll('cards').forEach(cards => {
		["size", "id", "theme", "bleed", "side", "deckCode", "deckSize"].forEach(attribute => {
			if (cards.dataset[attribute]) {
				let value = cards.dataset[attribute];
				cards.querySelectorAll('card').forEach((card) => {
					card.dataset[attribute] = card.dataset[attribute] || value;
				});
			}
		});
		let id = cards.dataset["deckStart"] || 1;
		cards.querySelectorAll('card').forEach((card) => {
			card.dataset["deckCard"] = card.dataset["deckCard"] || id;
			id++;
		});
	});
	return html;
}

function validateCardData(html) {
	let sides = ["front", "back", "none"];
	html.querySelectorAll('card').forEach((card) => {
		card.dataset["side"] = (card.dataset["side"] && sides.includes(card.dataset["side"].toLowerCase())) ? card.dataset["side"].toLowerCase() : "front";

		if (card.dataset["id"]) {
			card.removeAttribute("id");
		}

		if (card.dataset["theme"] == "null") {
			card.removeAttribute("theme");
		}
	});
	return html;
}

function renderCards(html) {
	html.querySelectorAll('card').forEach((card) => {
		if (card.dataset["id"]) {
			let data = CARDS.find(x => x.id == card.dataset["id"]);
			let classes = (data.classes && data.classes[card.dataset["size"]]) ? data.classes[card.dataset["size"]] : '';
			card.innerHTML = `
				<section class='front ` + classes + `'>
					<header>
						<div class='icon'>
							<img src='../images/cards/icons/` + data.icon + `.png'/>
						</div>
						<div class="title">
							<svg viewBox="0 0 217 33">
								<path id="curve" fill="transparent" d="M0,33 C67,13 150,13 217,33"/>
								<text width="500">
									<textPath alignment-baseline="top" startOffset="50%" text-anchor="middle" xlink:href="#curve">
										` + data.name + `
									</textPath>
								</text>
							</svg>
						</div>
						<div class="category">
							<svg viewBox="0 0 217 6">
								<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">` + data.category + `</text>
							</svg>
						</div>
					</header>
					<section class='content'>` + data.detail + `</section>
					<footer>`
						+ (card.dataset["deckCode"] ?
						`<div class='deck'>
							<svg viewBox="0 0 217 6">
								<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
								&#9672; DECK ` + card.dataset["deckCode"] + ` ` + card.dataset["deckCard"] + `/` + card.dataset["deckSize"] + ` 	&#9672;
								</text>
							</svg>
						</div>` : ``) + `
						<div class='copywrite'>
							<svg viewBox="0 0 217 6">
								<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Giffyglyph.com &copy; 2019</text>
							</svg>
						</div>
					</footer>
				</section>
				<section class='back'>
					<div class='image'></div>
				</section>
			`;
		} else {
			card.classList.add("invalid");
			card.innerHTML = "";
		}
	});
	return html;
}

module.exports = {
	createCards: function(html) {
		html = inheritGridAttributes(html);
		html = validateCardData(html);
		html = renderCards(html);
		return html;
	}
}
