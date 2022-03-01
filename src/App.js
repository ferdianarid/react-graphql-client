import React from "react"
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client"
import { onError } from "@apollo/client/link/error"
import GetUsers from "./components/GetUsers"
import Form from "./components/Form"
import { GRAPHQL_SERVER } from "./apis"

const errorLink = onError(({ graphqlErrors, networkError }) => {
	if (graphqlErrors) {
		graphqlErrors.map(({ message, location, path }) => {
			alert(`Graphql Error ${message}`)
		})
	}
})

const link = from([
	errorLink,
	new HttpLink({ uri: GRAPHQL_SERVER })
])

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link
})

const App = () => {
	return (
		<React.Fragment>
			<ApolloProvider client={client}>
				{" "}
				<div className="mx-2 py-10 md:mx-20">
					<h1 className="font-bold text-3xl">Users Page</h1>
					<p className="text-gray-700 font-normal text-sm mb-6">Users List who has registered in our platform</p>
					<a href="#" className="mb-4 py-2 px-4 rounded-md bg-green-600 text-white font-medium">Create User</a>
					<div className="grid grid-cols-2 gap-2 mt-5 md:grid-cols-3 md:gap-3">
						<GetUsers />
					</div>
				</div>
				{/* <Form /> */}
			</ApolloProvider>
		</React.Fragment >
	)
}

export default App
