import{ApolloServer} from "apollo-server";

import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { schema } from "./schema";
export const Server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],

});

const port=3000

Server.listen({port}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});