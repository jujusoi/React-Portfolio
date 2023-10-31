
import projectInfo from './data/projects.json';
import { Link } from 'react-router-dom';
import Platform from './Platform';

export default function Projects({ increaseSize, hovered, takeToApp }) {
    let i = 100;
    return (
        <>
        {projectInfo.map(projects => (
            <div className='proj-class' id='ind-proj-hold' style={{ position: 'relative', width: '35%', height: '225px', marginBottom: 20}} key={projects.id} onMouseEnter={() => increaseSize(true, projects.id)} onMouseLeave={() => increaseSize(false)}>
                <img style={{ width: hovered === projects.id ? '101%' : '100%', height: hovered === projects.id ? '101%' : '100%', filter: hovered === projects.id ? 'brightness(0.65)' : 'none', minWidth: 190, borderRadius: 10}} src={projects.img} alt={projects.description} onClick={() => takeToApp(projects.application)}/>
                <div className='overlay' style={{ position: 'absolute', top: 0, left: 0, display: 'flex', width: '100%', height: '100%', alignItems: 'baseline'}}>
                    <div style={{paddingLeft: 20, width: '90%'}}>
                        <Link to={projects.application} target='_blank'>
                            <h3 className='project-head' style={{opacity: hovered === projects.id ? 100 : 0, color: 'white'}}>{projects.title}</h3>
                            <p className='project-para' style={{opacity: hovered === projects.id ? 100 : 0, color: 'white'}}>{projects.description}</p>
                        </Link>
                    </div>
                    <div style={{paddingRight: 14, paddingTop: 12}}>
                        <Link to={projects.github} target='_blank'><img src='/icons/githubicon.png' alt={projects.title} style={{width: 38, opacity: hovered === projects.id ? 100 : 0, filter: 'brightness(0.7)'}} /></Link>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}