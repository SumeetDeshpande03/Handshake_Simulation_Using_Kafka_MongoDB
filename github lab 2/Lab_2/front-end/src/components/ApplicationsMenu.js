import React from 'react'; 

const ApplicationsMenu = () => {
    return (
        <div>
            <div className="ui inverted teal pointing secondary menu" style={{paddingTop: '5px', paddingBottom: '5px'}}>
            <div className="item" style={{marginLeft: '30px'}}>
                <h3>Applications</h3>
            </div>
                <div className="right menu" style={{marginRight: '40px'}} >
                    {/* <a className="item">Job Search</a>
                    <a className="item">Applications</a>
                    <a className="item">Employers</a>
                    <a className="item">On-Campus Interviews</a> */}
                </div>
            </div>
        </div>
    );
}

export default ApplicationsMenu;