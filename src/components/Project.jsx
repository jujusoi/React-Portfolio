
import projectInfo from './data/projects.json';

console.log(projectInfo);

export default function Projects() {
    return (
        <>
        <div id='project-list'>
        {projectInfo.map(projects => (
                <div key={projects.id}>
                    <h3>{projects.title}</h3>
                    <p>{projects.description}</p>
                    <img width="150px" src={projects.img} alt={projects.description}/>
                    <a href={projects.application}>Visit the app!</a>
                </div>
            ))}
        </div>
        </>
    )
}