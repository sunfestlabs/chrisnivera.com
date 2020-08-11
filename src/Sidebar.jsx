import React from 'react';
import './Sidebar.css';
import resume from './media/ChrisNiveraCVResume.pdf';


class Sidebar extends React.Component {

    render() {
        if (this.props.openBurger) {
            return(
                <div className="sidebar-container" onClick={this.props.handleClick}>
                    <div className="sidebar" onClick={(e) => {e.stopPropagation()}} data-aos="fade-left">
                        <a href="https://github.com/sunfestlabs" className="sidebar-link">github</a>
                        <a href="https://linkedin.com/in/christopher-nivera" className="sidebar-link">linkedin</a>
                        <a href={resume} target="_blank" className="sidebar-link" rel="noopener noreferrer" id="resume-link">resume</a>
                        <a href="mailto:christopher.nivera@gmail.com" className="sidebar-link" id="email-link">email me</a>
                    </div>
                </div>
            );
        } else {
            return(<div></div>)
        }
    }

}

export default Sidebar;