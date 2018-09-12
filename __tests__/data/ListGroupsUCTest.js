import ListGroupsUC from '../../data/uc/ListGroupsUC.js';

describe('Groups list', () => {
  it('contains at least 1 group for Wola district office', (done) => {
    const officeId = '7ef70889-4eb9-4301-a970-92287db23052';
    ListGroupsUC.getGroupList(officeId, result => {
      expect(result.length).toBeGreaterThan(0);
      done();
    });
  });
});
