## jQuery.leanModal2.js

**A pure solution to putting your own HTML and CSS to work as a modal dialogue.**

[![Normal (JavaScript / TypeScript)](https://github.com/eustasy/jQuery.leanModal2/actions/workflows/js.yml/badge.svg)](https://github.com/eustasy/jQuery.leanModal2/actions/workflows/js.yml)
[![Maintainability](https://qlty.sh/gh/eustasy/projects/jQuery.leanModal2/maintainability.svg)](https://qlty.sh/gh/eustasy/projects/jQuery.leanModal2)
[![License](https://img.shields.io/github/license/eustasy/jQuery.leanModal2)](https://github.com/eustasy/jQuery.leanModal2/blob/main/LICENSE.md)
[![jsDelivr](https://data.jsdelivr.com/v1/package/gh/eustasy/jQuery.leanModal2/badge?style=rounded)](https://www.jsdelivr.com/package/gh/eustasy/jQuery.leanModal2)

Built for all the short dialogs, alerts, panels and such associated with an app, that you may want to handle in a modal window. Designed to handle hidden content, and doesn't apply any styles to the target element, other than for displaying and positioning.

**[See the live demo](https://eustasy.github.io/jQuery.leanModal2/)**

_Based on leanModal v1.1 by Ray Stone - <http://finelysliced.com.au>_

### Installation

Include after jQuery 3 or 4, preferably from jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/gh/eustasy/jQuery.leanModal2@2/jQuery.leanModal2.min.js"></script>
```

### Usage

Add a trigger element with a `data-modal-id` attribute pointing to the `id` of the modal element, then initialise leanModal on the trigger's selector. The modal can be anywhere in the page.

```html
<button class="js-leanmodal-trigger" data-modal-id="#my-modal">Open</button>

<div id="my-modal" class="modal-hidden">
    Modal content goes here.
    <button class="js-leanmodal-close">Close</button>
</div>

<script>
    $('.js-leanmodal-trigger').leanModal();
</script>
```

Alternatively, a standard `href` attribute pointing to the modal `id` can be used instead of `data-modal-id`.

```html
<a class="js-leanmodal-trigger" href="#my-modal">Open</a>
```

The value must be a selector starting with `#` or `.`. A class selector works, but only the first matching element is opened.

#### Hiding the modal

leanModal doesn't hide the modal before it is opened, so hide it yourself. Use a single-class rule in a stylesheet that loads before `.leanModal()` is called, so the `.js-leanmodal-active` class added on opening can override it:

```css
.modal-hidden {
    display: none;
}
```

Avoid an inline `style="display: none"` or an ID selector such as `#my-modal { display: none; }`. Both outrank `.js-leanmodal-active`, so the modal would never appear.

### Options

| Option | Default | Description |
| ------ | ------- | ----------- |
| `defaultStyles` | `true` | Inject default overlay and animation styles. Global. |
| `fadeTime` | `200` | Fade duration in milliseconds. Global. |
| `overlayOpacity` | `0.7` | Opacity of the background overlay. Global. |
| `closeButton` | `'.js-leanmodal-close'` | Selector for the element(s) that close the modal. |
| `disableCloseOnOverlayClick` | `false` | Prevent closing when the overlay is clicked. |
| `disableCloseOnEscape` | `false` | Prevent closing when the Escape key is pressed. |
| `modalCenter` | `true` | Centre the modal inside the overlay using flexbox. |

```js
$('.js-leanmodal-trigger').leanModal({
    closeButton: '.close-it',
    disableCloseOnOverlayClick: true,
    disableCloseOnEscape: true,
});
```

**Global options** are applied once, by the first call to `.leanModal()`, which injects a single `<style id="js-leanmodal-styles">` element for the whole page. Values for `defaultStyles`, `fadeTime` and `overlayOpacity` in later calls are ignored. To change them, make sure the call that sets them runs first. To style everything yourself, pass `defaultStyles: false` on that first call.

### Behaviour

- Opening adds `js-leanmodal-active` to the modal and to a single shared `#js-leanmodal-overlay`. Closing swaps it for `js-leanmodal-inactive`.
- The modal closes from the `closeButton`, from a click on the overlay, or from the Escape key, unless the matching `disableCloseOn…` option is set.
- With `modalCenter`, the modal is moved inside the overlay when opened, and to the end of `<body>` when closed. Styles that depend on the modal's original parent will no longer apply.
- On screens up to 768px wide, the default styles show the modal as a full-width sheet along the bottom of the screen.

### Changes from leanModal v1.1

This fork of the original leanModal contains many fixes and improvements, and as such may not be entirely backwards compatible with the previous version. It is recommended you test your implementation before deployment.

- Bug: Fixes bug where an overlay is added with every call. Now, if one exists a new one is not added.
- Bug: Fixes bug where click events would be fired multiple times when the function is called more than once.
- Feature: Add option for triggering from element, using `data-modal-id` attribute.
- Feature: Close with the Escape key, and options to disable closing from the overlay or Escape.
- Feature: Centres the modal in the overlay with flexbox, and shows it as a bottom sheet on small screens.
- Improvement: No need to write CSS for the overlay or animations. The default styles are injected when leanModal is first called.
- Improvement: Names functions more clearly to avoid conflicts.
- Improvement: Added official minified version.
- Security: Modal identifiers must be CSS selectors, so trigger attributes can't be interpreted as HTML.
