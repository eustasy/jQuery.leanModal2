## jQuery.leanModal2.js

**A pure solution to putting your own HTML and CSS to work as a modal dialogue.**

[![Normal (JavaScript / TypeScript)](https://github.com/eustasy/jQuery.leanModal2/actions/workflows/js.yml/badge.svg)](https://github.com/eustasy/jQuery.leanModal2/actions/workflows/js.yml)
[![Normal (Security)](https://github.com/eustasy/jQuery.leanModal2/actions/workflows/security.yml/badge.svg)](https://github.com/eustasy/jQuery.leanModal2/actions/workflows/security.yml)
[![License](https://img.shields.io/github/license/eustasy/jQuery.leanModal2)](https://github.com/eustasy/jQuery.equalize/blob/main/LICENSE.md)
[![jsDelivr](https://data.jsdelivr.com/v1/package/gh/eustasy/jQuery.leanModal2/badge?style=rounded)](https://www.jsdelivr.com/package/gh/eustasy/jQuery.leanModal2)

Built for all the short dialogs, alerts, panels and such associated with an app, that you may want to handle in a modal window. Designed to handle hidden content, and doesn't apply any styles to the target element, other than for displaying and positioning.

_Based on leanModal v1.1 by Ray Stone - <http://finelysliced.com.au>_

### Differences between v1.1 and v2.1

This fork of the original leanModal contains many fixes and improvements, and as such may not be entirely backwards compatible with the previous version. It is recommended you test your implementation before deployment.

* Bug: Fixes bug where an overlay is added with every call. Now, if one exists a new one is not added.
* Bug: Fixes bug where click events would be fired multiple times when the function is called more than once.
* Feature: Add option for triggering from element, using `data-modal-id` attribute.
* Improvement: No need for additional CSS for the overlay, neither linked nor inlined. It is added with the element.
* Improvement: Names functions more clearly to avoid conflicts.
* Improvement: Added official minified version.

### Installation

Include after jQuery, preferably from jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/gh/eustasy/jQuery.leanModal2@2/jQuery.leanModal2.min.js"></script>
```

### Usage

Add a trigger element with a `data-modal-id` attribute pointing to the `id` of the modal element, then initialise leanModal on the trigger's selector.

```html
<button class="js-leanmodal-trigger" data-modal-id="#my-modal">Open</button>

<div id="my-modal">
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

### Options

| Option | Default | Description |
| ------ | ------- | ----------- |
| `defaultStyles` | `true` | Inject default overlay and animation styles. |
| `fadeTime` | `200` | Fade duration in milliseconds. |
| `overlayOpacity` | `0.7` | Opacity of the background overlay. |
| `closeButton` | `'.js-leanmodal-close'` | Selector for the element(s) that close the modal. |
| `disableCloseOnOverlayClick` | `false` | Prevent closing when the overlay is clicked. |
| `disableCloseOnEscape` | `false` | Prevent closing when the Escape key is pressed. |
| `modalCenter` | `true` | Centre the modal inside the overlay using flexbox. |
