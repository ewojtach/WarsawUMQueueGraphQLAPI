import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'GroupType',

  fields: {
    status: { type: GraphQLString },
    servingTime: { type: GraphQLString },
    seqNo: { type: GraphQLString },
    groupId: { type: GraphQLString },
    servingPoints: { type: GraphQLString },
    groupName: { type: GraphQLString },
    groupLetter: { type: GraphQLString },
    currentQueue: { type: GraphQLString },
    currentNumber: { type: GraphQLString },
  },
});
