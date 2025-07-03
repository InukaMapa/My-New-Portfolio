import Link from "next/link";
import {FaGithub, FaLinkedIn, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
    { icon :<FaGithub/>, path:"" },
    { icon :<FaLinkedIn/>, path:"" },
    { icon :<FaYoutube/>, path:"" },
    { icon :<FaTwitter/>, path:"" },
]
const Socials = ( containerStyle, iconStyle) => {
    return
        <div className={containerStyle}>
            {socials.map((item, index)=> {
                return (
                <Link key={index}href={socials.path} className={iconStyles}>
                    {item.icon}
                </Link>
                );
                })}
                    </div>;  
 
};
export default Social;