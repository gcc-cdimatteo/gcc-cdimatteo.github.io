import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

export default {
    webpack(config, { isServer }) {
        if (isServer) {
            config.plugins.push(new NodePolyfillPlugin());
        }

        // Para asegurar que ciertos módulos solo se importan en el lado del servidor
        config.resolve.fallback = {
            net: false,
            tls: false,
            http: false,
            https: false,
            stream: false,
            fs: false,
        };

        return config;
    },
};
