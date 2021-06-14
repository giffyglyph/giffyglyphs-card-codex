'use strict';

const GAMBIT = require('./gambit.js');

const CardCodex = (function() {

	/**
	 * Apply project-specific functions
	 * @param {object} html DOM
	 * @param {string} format output format
	 * @param {string} language output language
	 * @return {object} html DOM
	 */
	function apply (html, format, language) {
		GAMBIT.createCards(html);

		return html;
	}

	return {
		apply: apply
	}
})();

module.exports = CardCodex;
