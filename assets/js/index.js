/* eslint-disable no-var, vars-on-top */
'use strict';

require('hof/frontend/themes/gov-uk/client-js');


const accessibleAutocomplete = require('accessible-autocomplete');

document.querySelectorAll('.worker-in-uk-typeahead').forEach(function applyTypeahead(element) {
  accessibleAutocomplete.enhanceSelectElement({
    defaultValue: '',
    selectElement: element
  });
});
