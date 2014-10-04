#### jQuery.leanModal2.js - A super simple JQuery plugin for modal windows. Works with your CSS.
MIT Licensed by [eustasy](http://eustasy.org)

Built for all the short dialogs, alerts, panels and such associated with an app, that you may want to handle in a modal window. Designed to handle hidden content, and doesn't apply any styles to the target element, other than for displaying and positioning.

###### Based on leanModal v1.1 by Ray Stone - http://finelysliced.com.au

### Differences between v1.1 and v2.1
This fork of the original leanModal contains many fixes and improvements, and as such may not be entirely backwards compatible with the previous version. It is recommended you test your implementation before deployment.

- Bug: Fixes bug where an overlay is added with every call. Now, if one exists a new one is not added.
- Bug: Fixes bug where click events would be fired multiple times when the function is called more than once.
- Feature: Add option for triggering from element, using `data-modal-id` attribute.
- Improvement: No need for additional CSS for the overlay, neither linked nor inlined. It is added with the element.
- Improvement: Names functions more clearly to avoid conflicts.
- Improvement: Added official minified version.