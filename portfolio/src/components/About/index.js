import React from 'react';
import Self from '../../assets/images/family.JPG';

function About () {
    return (
        <section>
            <div className="center" id='about'>

            <h3 className='img-container'>
                 <img src={Self} class="image" alt="Marquise Allen"/>
            </h3> 
            </div>

            <div className='center' id='about'>
                <h1 className='page-header'>About Me</h1>
            </div>
            <div>
                <p>
                Software engineer with the ability to find efficient solutions that make a large-scale impact. I have a proven track record of investigating and implementing new solutions and design systems, working with other industry experts to develop exceptional user experiences, and maintaining a keen eye for code reviews and sprint planning. I'm also able to adapt quickly to new environments, manage time effectively, and work on a wide range of business projects. Thanks for connecting!   
                </p>
            </div>

            
        </section>
    );
}

export default About;