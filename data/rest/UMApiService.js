const Client = require('node-rest-client').Client;
const client = new Client();
const urlUM = 'https://api.um.warszawa.pl/api/action/wsstore_get/?id=';
const apiKey = '&apikey=7120fd06-ee83-445a-9dd4-63f1c0201493';

// https://api.um.warszawa.pl/api/action/wsstore_get/?id=7ef70889-4eb9-4301-a970-92287db23052
export function getOfficesList(officeId, callback) {
  const urlUMApi = urlUM + officeId + apiKey;

  client.get(urlUMApi, (data, response, error) => {

      if (data.result === undefined || data.result.grupy === undefined){
        console.error("Unable to call UM API: "+data.result)
        data.result = {}
        data.result.grupy = [];
        let sampleGroup = {
          _id: 1,
          name: "A-DOWODY OSOBISTE",
          status: "A",
          czasObslugi: "3",
          lp: "1",
          idGrupy: "A-DOWODY OSOBISTE",
          liczbaCzynnychStan: 3,
          nazwaGrupy: "A-DOWODY OSOBISTE",
          literaGrupy: "A",
          liczbaKlwKolejce: 15,
          aktualnyNumer: 116
        }
        data.result.grupy.push(sampleGroup)
      }
      callback(data);
  });
}
