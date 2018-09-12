
import ListOfficesUC from '../../data/uc/ListOfficesUC.js';

describe('Offices list', () => {
  it('contains at least 4 district offices', (done) => {
    ListOfficesUC.getOfficesList('', result => {
      expect(result.length).toBeGreaterThan(3);
      done();
    });
  });

  it('contains Wola district office id', (done) => {
    ListOfficesUC.getOfficesList('831ef31a-b2a3-4cbb-aaa5-cb90fe05ad8c', result => {
      expect(result.length).toEqual(1);
      done();
    });
  });

  it('contains address data for Wola District Office', (done) => {
    ListOfficesUC.getOfficesList('831ef31a-b2a3-4cbb-aaa5-cb90fe05ad8c', result => {
      // console.log('result: ' + JSON.stringify(result));
      expect(result[0].contactInfo.address.length).toBeGreaterThan(0);
      done();
    });
  });
});
