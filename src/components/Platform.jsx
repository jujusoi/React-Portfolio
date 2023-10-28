import { Link } from "react-router-dom";

export default function Logo({platformLink, hoverBool, platformIcon, platformAlt, increaseSize, hovered}) {
    return (
        <>
            <Link to={platformLink} target="_blank"><img onMouseEnter={() => increaseSize(true, hoverBool)} onMouseLeave={() => increaseSize(false)} style={{ width: hovered === hoverBool ? 55 : 50, filter: hovered === hoverBool ? 'drop-shadow(0px 0px 15px rgba(227,230,232, .3))' : 'none'}} src={platformIcon} alt={platformAlt} /></Link>
        </>
    );
};