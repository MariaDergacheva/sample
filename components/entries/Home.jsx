const React = require('react');
const Layout = require('../Layout');
const AddAlbum = require('./AddAlbum');

module.exports = function Home({ auth = false }) {
  return (
    <Layout auth={auth}>
      <h1>
        {auth ? 'App for create album' : 'For create album, you need registry!'}
      </h1>
      {auth && <AddAlbum />}
    </Layout>
  );
};
