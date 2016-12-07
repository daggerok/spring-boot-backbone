import entry   from './entry.babel';
import output  from './output.babel';
import module  from './module.babel';
import resolve from './resolve.babel';
import plugins from './plugins.babel';
import postcss from './postcss.babel';
import eslint  from './eslint.babel';
import node    from './node.babel';

export default {
  entry,
  output,
  module,
  resolve,
  plugins,
  postcss,
  devtool: 'source-map',
  debug: true,
  eslint,
  node,
};
