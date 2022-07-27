import React from "react";
import FoodRun from '../../assets/images/foodrun.png'

function Portfolio () {
    return (
         <section>
           <div className="center" id='portfolio'>
                <h1 className="header">My Creations</h1>
            </div>
        
        <div class='img-card'>
                <h2>Food Run</h2>
				<p>Interactive Full-Stack Application.</p>
					<img src={FoodRun} alt="Screenshot of foodrun game" />
				<a href="https://dry-bastion-57106.herokuapp.com/login">
					This is a link to the live site for this application
				</a>
				<a href ="hhttps://github.com/untjala/food-run">This is a link to the repo for this application</a>
            </div>

            <div class='img-card'>
                <h2>Food Run</h2>
				<p>Interactive Full-Stack Application.</p>
					<img src={FoodRun} alt="Screenshot of foodrun game" />
				<a href="https://dry-bastion-57106.herokuapp.com/login">
					This is a link to the live site for this application
				</a>
				<a href ="hhttps://github.com/untjala/food-run">This is a link to the repo for this application</a>
            </div>

            <div class='img-card'>
                <h2>Food Run</h2>
				<p>Interactive Full-Stack Application.</p>
					<img src={FoodRun} alt="Screenshot of foodrun game" />
				<a href="https://dry-bastion-57106.herokuapp.com/login">
					This is a link to the live site for this application
				</a>
				<a href ="hhttps://github.com/untjala/food-run">This is a link to the repo for this application</a>
            </div>

         </section>
    );
}

export default Portfolio;