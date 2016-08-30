var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
      e.preventDefault();

      var location = this.refs.search.value;
      var encodedLocation = encodeURIComponent(location);

      if (location.length > 0) {
        this.refs.search.value = '';
        window.location.hash = '#/?location=' + encodedLocation;
      }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
            </li>
            <li>
              <Link to="/login" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Login</Link>
            </li>
            <li>
              <Link to="/suggested" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Suggested Matches</Link>
            </li>
            <li>
              <Link to="/my-profile" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
