dotenv.config();
import { config } from "dotenv";
process.env.graphql_token;

const sharedConfig = {
  googleAuthClientId: "",
  mapboxAPIKey: "",
  serviceEndpoint: "/graphql",
  requestToken: `Bearer ${process.env.graphql_token}`,
  enpoints: {
    post: {
      rules: "/api/rules/formant",
    },
    put: {
      rules: "/api/rules/formant",
    },
    delete: {
      rules: "/api/rules/formant",
    },
    get: {
      tickets: {
        all: "/api/tickets/all",
        bagMonitoring: "/api/tickets/bag-monitoring",
      },
      rules: {
        all: "/api/rules/formant",
      },
    },
  },
};

export { sharedConfig as default };
