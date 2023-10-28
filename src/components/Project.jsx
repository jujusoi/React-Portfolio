
import projectInfo from './data/projects.json';

console.log(projectInfo);

export default function Projects() {
    return (
        <>
        {projectInfo.map(projects => (
                <div style={{ width: '40%', height: '150px'}} key={projects.id}>
                    <div style={{width: '100%', height: '100%', backgroundImage: `url(${projects.img})`, backgroundSize: 'cover'}}>

                    </div>
                    <h3>{projects.title}</h3>
                    <p>{projects.description}</p>
                    <img width="150px" src={projects.img} alt={projects.description}/>
                    <a href={projects.application}>Visit the app!</a>
                </div>
            ))}
        </>
    )
}