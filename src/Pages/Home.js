import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            Welcome to Home 
            <div>
                another way to navigate !!!!

                <Link className="button" to= "/battle">Battle</Link>
                <Link className="button" to="/popular">Popular</Link>
            </div>
        </div>
    );
};

export default Home;