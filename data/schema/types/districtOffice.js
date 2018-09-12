import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import GroupType from './group';
import ContactInfoType from './contactInfo';
import ListGroupsUC from '../../../data/uc/ListGroupsUC.js';

module.exports = new GraphQLObjectType({
  name: 'DistrictOfficeType',

  fields: {
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    contactInfo: {
      type: ContactInfoType,
    },
    groups: {
      type: new GraphQLList(GroupType),
      resolve: (parent, { id }) => {
        // call um data api
        return new Promise(function (resolve, reject) {
          ListGroupsUC.getGroupList(parent.id, resolve);
        });
      },
    },
  },

});
