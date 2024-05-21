const buildDate = function() {
  const date = new Date();
  const dateString = new Date( date.getTime() - ( date.getTimezoneOffset() * 60000 ) )
    .toISOString()
    .split( "T" )[ 0 ]
    .replace( /-/g, "" );
  return dateString;
};

export default {
  env: process.env.ELEVENTY_ENV,
  timestamp: buildDate(),
  netlify: process.env.NETLIFY,
  context: process.env.CONTEXT,
  branch: process.env.BRANCH,
  commit: process.env.COMMIT_REF
}
