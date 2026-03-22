import type { EnvOptions } from 'tnp/src';

const env: Partial<EnvOptions> = {
  website: {
    domain: 'share.example.domain.com',
    title: 'Share',
    useDomain: true,
  },
  loading: {
    preAngularBootstrap: {
      background: '#fdebed',
      loader: { name: 'lds-default' },
    },
  },
};
export default env;
