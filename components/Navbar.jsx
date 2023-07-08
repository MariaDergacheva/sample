const React = require('react');

module.exports = function Navbar({ auth = false }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/">
              Home
            </a>
            {!auth && (
              <a className="nav-link" href="/registration">
                Registry
              </a>
            )}

            {auth ? (
              <a className="nav-link" href="/api/logout">
                Log out
              </a>
            ) : (
              <a className="nav-link" href="/auth">
                Log in
              </a>
            )}
            {auth && (
              <a className="nav-link" href="/albums">
                My albums
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
