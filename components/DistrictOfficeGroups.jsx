import React from 'react';
import Group from './Group.jsx';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';

export default class DistrictOfficeGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: [],
      groups: [],
    };
  }

  componentWillMount() {
    this.fetchGroups();
  }

  fetchGroups() {
    const client = new Lokka({
      transport: new Transport('http://hacknodeserver.mybluemix.net/graphql'),
    });

    client.query(`
			{
			  offices{
			   name,
			   groups{
			    nazwaGrupy
			  }
		   }
			}
		`).then(result => {
  let groupList;
  console.log(JSON.stringify(result));
  groupList = result.offices[0].groups;
  this.setState({ groupList });
		});
  }

  render() {
    const groupList = ['gr1', 'gr2', 'gr3', 'gr4'];

    for (let i = 0; i < groupList.length; i++) {
      this.state.groups.push(
        <Group groupName = {this.state.groupList[i].nazwaGrupy}/>
      );
    }

    return (<div>{this.state.groups}</div>);
  }
}
