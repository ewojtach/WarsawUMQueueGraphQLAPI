import React from 'react';
import DistrictOfficeGroups from './DistrictOfficeGroups.jsx';
import DistrictOfficeContact from './DistrictOfficeContact.jsx';
// import { Lokka } from 'lokka';
// import { Transport } from 'lokka-transport-http';

export default class DistrictOffice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      districtName: 'Ursynów',
    };
  }


   render() {
     return (<div id="district">
              <h2>Urzad dzielnicy {this.state.districtName}</h2>
              <DistrictOfficeContact districtName={this.state.districtName}/>
              <DistrictOfficeGroups/>
            </div>);
   }

}
