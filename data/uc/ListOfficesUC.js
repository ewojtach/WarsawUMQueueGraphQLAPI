import officesList from '../misc/Offices.js'

class ListOfficesUC {

  constructor() {
  }

  getOfficesList(officeId, callback) {
    let filteredList;

    if (officeId === undefined || officeId === '') {
      filteredList = officesList;
    } else {
      filteredList = officesList.filter(office => office.extId == officeId);
    }

    //model mapping
    const offices = [];

    filteredList.forEach(office => {
      offices.push({
        id: office.extId,
        name: office.name,
        contactInfo: {
          phone: office.phone,
          address: office.address,
          latitude: office.latitude,
          longitude: office.longitude,
          email: office.email,
        },
      });
    });
    callback(offices);
  }
}

const listOfficesUC = new ListOfficesUC();

module.exports = listOfficesUC;
