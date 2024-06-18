const summarySections = require('../../../apps/ecs/sections/summary-data-sections.js');
const pages = require('../../../apps/ecs/translations/src/en/pages.json');

describe('Apply Data Sections in summary and submission page', () => {
  describe('Summary page data sections and Pages', () => {
    it('should have summary page data sections and page translations that correlate', () => {
      const sectionsKeys = Object.keys(summarySections).sort();
      const pagesSectionsKeys = Object.keys(pages.confirm.sections).sort();
      expect(pagesSectionsKeys).to.include.members(sectionsKeys);
    });
  });
});
