// Здесь твой код
/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');
const Layout = require('../Layout');

module.exports = function Reg() {
  return (
    <Layout>

      <div style={{ width: '50%', margin: 'auto' }}>

        <form name="regUser">

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" placeholder="Oleg" />
          </div>

          <div className="mb-3">
            <label className="form-label">email</label>
            <input type="email" name="email" className="form-control" placeholder="Oleg@mail.ru" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" placeholder="12345" />
          </div>

          <button type="submit" className="btn btn-primary">Primary</button>
        </form>
      </div>
      <script defer src="/js/reg.js" />
    </Layout>
  )}