import React from 'react';
 
function Nav ({ setCurrentPage }) {
 return (
     <div>
        <a href="#about" onClick={() => setCurrentPage ('about')}>About</a>
        <a href="#portfolio" onClick={() =>setCurrentPage ('portfolio')}>Portfolio</a>
        <a href="#resume" onClick={() =>setCurrentPage ('resume')}>Resume</a>
        <a href="#contact" onClick={() =>setCurrentPage ('contact')}>Contact</a>
     </div>
 )
}
export default Nav;