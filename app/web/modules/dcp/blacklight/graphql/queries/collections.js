import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


const query = gql`
	query collectionsQuery {
    exhibits {
      id
      slug
      title
      description
      contacts {
        id
        name
      }
			itemCount
    }
  }

`;


const collectionsQuery = graphql(query, {
	name: 'collectionsQuery',

});

export default collectionsQuery;
