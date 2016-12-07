import { publicPath } from './output.babel';

const proxy = () => ({
  target: 'http://localhost:8080',
  changeOrign: false,
  secure: false,
});

const devServer = {
  port: 8000,
  inline: true,
  progress: true,
  stats: 'minimal',

  historyApiFallback: {
    index: publicPath,
  },

  proxy: {
    '/api': proxy(),
    '/admin': proxy(),
  },
};

export default devServer;
