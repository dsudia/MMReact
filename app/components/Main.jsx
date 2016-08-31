var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className=''>
        <div className=''>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
