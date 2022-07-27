import React from "react";
import FoodRun from '../../assets/images/foodrun.png';
import Seo from '../../assets/images/seo.png';
// import neverbelate from '../../assets/images/neverbelate.png';


function Portfolio () {
    return (
         <section>
           <div className="center" id='portfolio'>
                <h1 className="header">My Creations</h1>
            </div>
        
        <div class='img-card'>
                <h2>Food Run</h2>
				<p>Interactive Full-Stack Application</p>
					<img src={FoodRun} alt="Screenshot of foodrun game" />
				<a href="https://pacific-everglades-44013.herokuapp.com/">
                Link to the live site application
				</a>
				<a href ="hhttps://github.com/untjala/food-run">Link to Rep Application</a>
            </div>

            <div class='img-card'>
                <h2>Never Be Late</h2>
				<p>Daily Planner Application</p>
					{/* <img src={neverbelate} alt="Screenshot of planner" /> */}
				<a href="https://mj-allen.github.io/neverbelate/">
					Link to the live site application
				</a>
				<a href ="https://github.com/MJ-Allen/neverbelate">Link to Rep Application</a>
            </div>

            <div class='img-card'>
                <h2>SEO</h2>
				<p>SEO Refactor Application.</p>
					<img src={Seo} alt="Screenshot of application" />
				<a href="https://mj-allen.github.io/seo-refactor/">
                Link to the live site application
				</a>
				<a href ="https://github.com/MJ-Allen/seo-refactor">Link to Rep Application</a>
            </div>

         </section>
    );
}

export default Portfolio;