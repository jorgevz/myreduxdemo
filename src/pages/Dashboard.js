import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => (

 <section>
     <h1>Dashboard</h1>
     <h4>This is my Dashboard</h4>
  
<Link to="/posts" className='button'>View post</Link>
</section>
)

export default Dashboard;
