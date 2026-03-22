import type { EnvOptions } from "tnp/src";

const env: Partial<EnvOptions> = {
  website: {
    domain: "taon-example-org.example.domain.com",
    title: "Taon Example Org",
    useDomain: true,
  },
  loading: {
    preAngularBootstrap: {
      background: "#fdebed",
      loader: { name: "lds-default" },
    },
  },
};
export default env;
