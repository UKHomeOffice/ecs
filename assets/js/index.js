/* eslint-disable no-var, vars-on-top */
'use strict';

require('hof/frontend/themes/gov-uk/client-js');

const accessibleAutocomplete = require('accessible-autocomplete');


document.querySelectorAll('.typeahead').forEach(function applyTypeahead(element) {
  element.querySelectorAll('option').forEach(option => {
    if(option.value === 'Ireland' || option.value === 'United Kingdom') {
      option.remove();
    }
  });
  accessibleAutocomplete.enhanceSelectElement({
    defaultValue: '',
    selectElement: element
  });
});

document.querySelectorAll('.country-typeahead').forEach(function applyTypeahead(element) {
  accessibleAutocomplete.enhanceSelectElement({
    defaultValue: '',
    selectElement: element
  });
});
