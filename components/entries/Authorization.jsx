const React = require('react');
const Layout = require('../Layout');

module.exports = function Auth() {
  return (
    <Layout>
      <div className="form">
        <form name="authForm">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="name@example.com"
          />
          <label htmlFor="inputPassword1" className="form-label mt-3">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="inputPassword1"
            className="form-control"
            aria-labelledby="passwordHelpBlock"
          />

          <button type="submit" className="btn btn-dark mt-1">
            Register
          </button>
        </form>
      </div>
      <script src='/js/auth.js'></script>
    </Layout>
  );
};
