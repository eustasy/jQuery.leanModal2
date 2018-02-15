////	jQuery.leanModal2.js v2.6.3
// MIT Licensed by eustasy https://eustasy.org
// Based on leanModal v1.1 by Ray Stone - http://finelysliced.com.au

/*global jQuery*/

// ANONFUNC Wrap in an anonymous function.
(function($){

	////	Extend jQuery
	// EXTENDFUNC
	$.fn.extend({
		// EXTENDFUNC_LEANMODAL
		leanModal: function(options) {

			////	Default Options
			// Set some Defaults.
			var defaults = {
				defaultStyles: true, // GLOBAL
				fadeTime: 200, // GLOBAL
				overlayOpacity: 0.7, // GLOBAL
				closeButton: '.js-leanmodal-close',
				disableCloseOnOverlayClick: false,
				disableCloseOnEscape: false,
				modalCenter: true,
			}
			// Merge in any passed options.
			options = $.extend(defaults, options)

			//// Default styles
			if ( options.defaultStyles ) {
				if ( $('#js-leanmodal-styles').length == 0 ) {
					$('<style>')
						.prop('type', 'text/css')
						.prop('id', 'js-leanmodal-styles')
						.html('\
							@keyframes smoothFadeOut {\
								from { opacity: 1; }\
								to { opacity: 0; }\
							}\
							@keyframes smoothFadeIn {\
								from { opacity: 0; }\
								to { opacity: 1; }\
							}\
							#js-leanmodal-overlay {\
								align-items: center;\
								background: rgba(0, 0, 0, ' + options.overlayOpacity + ');\
								display: none;\
								height: 100%;\
								justify-content: center;\
								left: 0;\
								position: fixed;\
								top: 0;\
								width: 100%;\
							}\
							.js-leanmodal-link {\
								cursor: pointer;\
							}\
							.js-leanmodal-inactive {\
								animation: smoothFadeOut ' + options.fadeTime + 'ms ease-in-out both;\
							}\
							.js-leanmodal-active {\
								animation: smoothFadeIn ' + options.fadeTime + 'ms ease-in-out both;\
								display: block;\
								z-index: 1000\
							}\
							#js-leanmodal-overlay.js-leanmodal-active {\
								display: flex;\
								z-index: 100;\
							}'
						).appendTo('head')
				}
			}

			////	Close the Modal
			// FUNCTION: Fade out the overlay and a passed identifier.
			function leanModal_Close(modal_id) {
				$('#js-leanmodal-overlay').removeClass('js-leanmodal-active').addClass('js-leanmodal-inactive')
				$(modal_id).removeClass('js-leanmodal-active').addClass('js-leanmodal-inactive')
				$('#js-leanmodal-overlay').unbind('click')
				$(document).off('keyup')
				$(modal_id).appendTo('body')
			}

			////	Everything is Linked
			// FOREACHLINK For each targeted link.
			return this.each(function() {
				// Force this to look like a link.
				$(this).addClass('js-leanmodal-link')

				////	Command Override
				// Override the existing click command,
				// and insert this new one.
				// CLICKOVERRIDE
				$(this).unbind('click').click(function(e) {

					////	Select the Modal Identifier
					// IFHREF Use data-open-modal if available
					var modal_id
					if ( $(this).attr('data-modal-id') ) {
						modal_id = $(this).attr('data-modal-id')
					// IFHREF Fall back to href
					} else if ( $(this).attr('href') ) {
						modal_id = $(this).attr('href')
					// IFHREF Fail entirely.
					} else {
						return false
					} // IFHREF

					////	Close with closeButton
					// If `closeButton` is set,
					// use it to call the close command.
					if ( options.closeButton ) {
						$(options.closeButton).click(function() {
							leanModal_Close(modal_id)
						})
					}

					////	Escape with `Esc`
					// Close the modal when someone presses `Esc`,
					// except when `disableCloseOnEscape` is set to `true`
					if ( !options.disableCloseOnEscape ) {
						$(document).on('keyup', function(evt) {
							if ( evt.keyCode == 27 ) {
								leanModal_Close(modal_id)
							}
						})
					}

					////	There can be only one.
					// Overlay. If there isn't an overlay, add one.
					if ( $('#js-leanmodal-overlay').length == 0 ) {
						var overlay = $('<div id="js-leanmodal-overlay"></div>')
						$('body').append(overlay)
					}

					////	Envelope in Darkness
					// Close the modal when someone clicks on the overlay,
					// except when `disableCloseOnOverlayClick` is set to `true`
					if ( !options.disableCloseOnOverlayClick ) {
						$('#js-leanmodal-overlay').click(function(e) {
							if ( e.target == this ) {
								leanModal_Close(modal_id)
							}
						})
					}

					////	Modal Positioning
					// Position the modal centrally inside the overlay using flexbox.
					if ( options.modalCenter ) {
						$(modal_id).appendTo('#js-leanmodal-overlay')
					}

					////	Curtain Up
					// Fade in the modal and overlay.
					$('#js-leanmodal-overlay').removeClass('js-leanmodal-inactive').addClass('js-leanmodal-active')
					$(modal_id).removeClass('js-leanmodal-inactive').addClass('js-leanmodal-active')

					////	Default Prevention
					// Prevent whatever the default was (probably scrolling).
					e.preventDefault()

				}) // CLICKOVERRIDE
			}) // FOREACHLINK
		}, // EXTENDFUNC_LEANMODAL
	}) // EXTENDFUNC
})(jQuery) // ANONFUNC This passes in `jQuery` as `$`
