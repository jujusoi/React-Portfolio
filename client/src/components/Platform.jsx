import { Link } from "react-router-dom";

export default function Logo({platformLink, hoverBool, platformIcon, platformAlt, increaseSize, hovered, bigSize, smallSize}) {
    return (
        <>
            <Link className="ptfm-img" to={platformLink} target="_blank"><img onMouseEnter={() => increaseSize(true, hoverBool)} onMouseLeave={() => increaseSize(false)} style={{ width: hovered === hoverBool ? bigSize : smallSize, filter: hovered === hoverBool ? 'drop-shadow(0px 0px 15px rgba(227,230,232, .3)) brightness(1.8)' : 'none'}} src={platformIcon} alt={platformAlt} /></Link>
        </>
    );
};