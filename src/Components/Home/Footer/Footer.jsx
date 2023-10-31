
import{FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="footer items-center p-4 border px-10">
  <aside className="items-center grid-flow-col">
  <a className="btn normal-case  ">
          <img
            className="h-full "
            src="https://assets-global.website-files.com/6077f96cf4fa19216396daaf/63f36981950c481a7701e95f_logo-p-500.png"
            alt=""
          />
        </a>
    <p>Copyright © 2023 - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
        <FaGithub className='w-6 h-6'/>
    </a> 
    <a>
        <FaLinkedin className='w-6 h-6'/>
    </a>
    <a>
        <FaFacebook className='w-6 h-6'/>
    </a>
  </nav>
</footer>
    );
};

export default Footer;