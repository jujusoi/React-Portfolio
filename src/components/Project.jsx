
import projectInfo from './data/projects.json';
import { Link } from 'react-router-dom';

export default function Projects({ increaseSize, hovered }) {
    return (
        <>
        {projectInfo.map(projects => (
            <div id='ind-proj-hold' style={{ position: 'relative', width: '35%', height: '225px', marginBottom: 20}} key={projects.id} onMouseEnter={() => increaseSize(true, projects.id)} onMouseLeave={() => increaseSize(false)}>
                <img style={{ width: hovered === projects.id ? '101%' : '100%', height: hovered === projects.id ? '101%' : '100%'}} src={projects.img} alt={projects.description}/>
                <div className='overlay' style={{ position: 'absolute', top: 0, left: 0, display: 'flex', width: '100%', height: '100%'}}>
                    <div style={{paddingLeft: 20, width: '90%'}}>
                        <Link to={projects.application} target='_blank'>
                            <h3 className='project-head' style={{opacity: hovered === projects.id ? 100 : 0, color: 'white'}}>{projects.title}</h3>
                            <p className='project-para' style={{opacity: hovered === projects.id ? 100 : 0, color: 'white'}}>{projects.description}</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={projects.github} target='_blank' ><img width={30} src="https://uploads-ssl.webflow.com/63373991b8094c5fce83b830/635f6e95a2af5f516d8e5a75_new-tab.webp" alt="Open Project" /></Link>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}