const React = require('react');
const Layout = require('../Layout');

module.exports = function Album({ albums }) {
  return (
    <Layout auth={true}>
      <div className="form">
        <ul className="list-group">
          {albums.map((album) => (
            <li class="list-group-item">{album.album}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
