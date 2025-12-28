
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
     <footer className="bg-violet-300 text-black py-4 px-10 text-md">
        <div className='flex flex-col  gap-2 md:flex-row items-center justify-between'>
            <p  className="font-general">@MANIK 2025 , All Rights reserved</p>
            <div className="hover-icons flex items-center gap-4">
            <a href="#"><FaDiscord /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><SiGmail /></a>
           </div>
           <p className="font-general">Privacy Policy</p>
        </div>
     </footer>
  )
}

export default Footer