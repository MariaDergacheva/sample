const React = require('react');

module.exports = function AddAlbum() {
  return (
    <div className="form">
      <form action="/albums/add" method="POST" name="addAlbum">
        <label htmlFor="album" className="form-label">
         что-то
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="name"
        />
         <input
          type="date"
          className="form-control"
          name="date"
          placeholder="date"
        />
         <input
          type="time"
          className="form-control"
          name="time"
          placeholder="time"
        />
         <input
          type="text"
          className="form-control"
          name="location"
          placeholder="location"
        />
        <button type="submit" className="btn btn-dark mt-1">
          Add
        </button>
      </form>
      <script src='/js/add.js'></script>
    </div>
  );
};
