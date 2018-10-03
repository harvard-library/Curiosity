import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
// import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const httpLink = createHttpLink({
	uri: `${process.env.REACT_APP_GRAPHQL_SERVER}/${process.env.REACT_APP_GRAPHQL_URI}`,
	credentials: 'include'
});

const middlewareLink = setContext(() => ({
	headers: {
		authorization: cookies.get('token') || null
	}
}));

const link = middlewareLink.concat(httpLink);

// const connectionParams = () => ({ authToken: cookies.get('token') ? cookies.get('token') : null });

// const wsClient = new SubscriptionClient(`${process.env.REACT_APP_WS_SERVER}/${process.env.REACT_APP_WS_SERVER_URI}`, {
// 	reconnect: true,
// 	connectionParams,
// });

// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
// 	networkInterface,
// 	wsClient
// );

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link
});

export default client;
// export { wsClient };
