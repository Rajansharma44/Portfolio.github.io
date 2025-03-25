import React, { useState } from 'react';
import './ProjectSec.css';
import newProjectImg1 from '../Images/newProjectImg1.jpg';
import newProjectImg2 from '../Images/newProjectImg2.jpg';
import newProjectImg3 from '../Images/newProjectImg3.jpg';
import newDesignImg1 from '../Images/newDesignImg1.jpg';
import newDesignImg2 from '../Images/newDesignImg2.jpg';
import newDesignImg3 from '../Images/newDesignImg3.jpg';
import newContentImg1 from '../Images/newContentImg1.jpg';
import newContentImg2 from '../Images/newContentImg2.jpg';
import newContentImg3 from '../Images/newContentImg3.jpg';
const ProjectSec = () => {
    const [selectedCategory, setSelectedCategory] = useState('tech');
    const [previousCategory, setPreviousCategory] = useState(null);

    const projects = {
        tech: [
            { img: newProjectImg1, link: 'https://github.com/Rajansharma44/weatherly.github.io', text: 'Weatherly App' },
            { img: newProjectImg2, link: 'https://github.com/Rajansharma44/Student_Data_Report', text: 'StudentHub' },
            { img: newProjectImg3, link: 'https://github.com/Rajansharma44/TrueSocial', text: 'TrueSocial' },
        ],
        designs: [
            { img: newDesignImg1, link: 'https://www.linkedin.com/posts/gdsc-ditu-google-developer-student-club_impactthefuture-iwd2024-gdgdehradun-activity-7182312227243220992-GMNO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3MtGcB5BoHaxXasBzPifB0ck-tV_vlyIY', text: 'Event 1' },
            { img: newDesignImg2, link: 'https://www.linkedin.com/posts/gdsc-ditu-google-developer-student-club_blockchain-w3cg-starknet-activity-7167443838008066048-SiOb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3MtGcB5BoHaxXasBzPifB0ck-tV_vlyIY', text: 'Event 2' },
            { img: newDesignImg3, link: 'https://www.linkedin.com/posts/gdsc-ditu-google-developer-student-club_gdsc-cloudstudyjam-activity-7159469645756829696-nyCy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3MtGcB5BoHaxXasBzPifB0ck-tV_vlyIY', text: 'Event 3' },
        ],
        content: [
            { img: newContentImg1, link: 'https://youtu.be/ZSl-AeR_eMo?si=4FsmqZoU26f_-ZmX', text: 'YouTube' },
            { img: newContentImg2, link: 'https://youtu.be/OKYskIJ3Z54?si=k7DlnA_NneE2lTdM', text: 'YouTube' },
            { img: newContentImg3, link: 'https://youtu.be/qe1jQE7SrjQ?si=0P8AAl_n8pveh9J4', text: 'YouTube' },
        ],
    };

    const handleButtonClick = (category) => {
        setPreviousCategory(selectedCategory);
        setSelectedCategory(category);
    };

    const renderProjects = () => {
        return projects[selectedCategory].map((project, index) => (
            <div key={index} className='projects'>
                <img src={project.img} alt={`project-${index}`} />
                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.text}</a>
            </div>
        ));
    };

    return (
        <section className='project-sec'>
            <div className='project-sec-div'>
                <h2>Creations</h2>
                <div className='proj-bttns-div'>
                    <button 
                        className={`proj-bttn tech-btn ${selectedCategory === 'tech' ? 'active' : ''} ${previousCategory === 'tech' ? 'previous' : ''}`} 
                        onClick={() => handleButtonClick('tech')}
                    >
                        Tech
                    </button>
                    <button 
                        className={`proj-bttn designs-btn ${selectedCategory === 'designs' ? 'active' : ''} ${previousCategory === 'designs' ? 'previous' : ''}`} 
                        onClick={() => handleButtonClick('designs')}
                    >
                        Events
                    </button>
                    <button 
                        className={`proj-bttn content-btn ${selectedCategory === 'content' ? 'active' : ''} ${previousCategory === 'content' ? 'previous' : ''}`} 
                        onClick={() => handleButtonClick('content')}
                    >
                        Content
                    </button>
                </div>
                <div className='project-img-div'>
                    {renderProjects()}
                </div>
            </div>
        </section>
    );
};

export default ProjectSec;