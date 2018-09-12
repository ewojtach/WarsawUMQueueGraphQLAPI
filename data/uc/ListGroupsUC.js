import { getOfficesList } from '../../data/rest/UMApiService';

class ListGroupsUC {

  getGroupList(officeId, callback) {
    getOfficesList(officeId, result => {
      // model mapping
      const groups = [];
      result.result.grupy.forEach(group => {
        groups.push({
          id: group._id,
          name: group.name,
          status: group.status,
          servingTime: group.czasObslugi,
          seqNo: group.lp,
          groupId: group.idGrupy,
          servingPoints: group.liczbaCzynnychStan,
          groupName: group.nazwaGrupy,
          groupLetter: group.literaGrupy,
          currentQueue: group.liczbaKlwKolejce,
          currentNumber: group.aktualnyNumer,
        });
      });
      callback(groups);
    });
  }
}

const listGroupsUC = new ListGroupsUC();

module.exports = listGroupsUC;
