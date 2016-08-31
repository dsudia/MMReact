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
      <div>
        // <div class='title-bar' data-responsive-toggle='primary-menu' data-hide-for='medium'>
        //   <button class='menu-icon' type='button' data-toggle></button>
        //   <div class='title-bar-title'>Menu</div>
        // </div>
        //
        // <div className='top-bar' id='primary-menu'>
        //   <div className='top-bar-left'>
        //     <ul className='dropdown menu' data-dropdown-menu>
        //       <li className='menu-text'>Montessori Match</li>
        //       <li>
        //         <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
        //       </li>
        //       <li>
        //         <Link to='/login' activeClassName='active'  activeStyle={{fontWeight: 'bold'}}>Login</Link>
        //       </li>
        //       <li>
        //         <Link to='/suggested' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Suggested Matches</Link>
        //       </li>
        //       <li>
        //         <Link to='/my-profile' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Profile</Link>
        //       </li>
        //     </ul>
        //   </div>
        // </div>
        <div class="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
          <button class="menu-icon" type="button" data-toggle></button>
          <div class="title-bar-title">Menu</div>
        </div>

        <div class="top-bar" id="example-menu">
          <div class="top-bar-left">
            <ul class="dropdown menu" data-dropdown-menu>
              <li class="menu-text">Site Title</li>
              <li>
                <a href="#">One</a>
                <ul class="menu vertical">
                  <li><a href="#">One</a></li>
                  <li><a href="#">Two</a></li>
                  <li><a href="#">Three</a></li>
                </ul>
              </li>
              <li><a href="#">Two</a></li>
              <li><a href="#">Three</a></li>
            </ul>
          </div>
          <div class="top-bar-right">
            <ul class="menu">
              <li><input type="search" placeholder="Search"></input></li>
              <li><button type="button" class="button">Search</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
