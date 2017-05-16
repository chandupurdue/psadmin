import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component{
	render(){
		return (
		        <div className = "jumbotron">
				   <h1> Plural Sight Administration</h1>
				   <p>React, redux</p>
				   <Link to = "About" className = "btn btn-primary btn-lg">Learn more</Link>    
				</div>
	        	);
	}
}
export default Home;