// import formatter from 'eslint/lib/formatters/stylish';
import formatter from 'eslint-friendly-formatter';
import checkstyle from 'eslint/lib/formatters/checkstyle';

export default {
  configFile: './config/.eslintrc.js',
  failOnWarning: true,
  failOnError: true,
  emitError: true,
  quiet: true,
  formatter,
  outputReport: {
    filePath: 'checkstyle.xml',
    formatter: checkstyle,
  },
};
