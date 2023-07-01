import {Github} from 'react-bootstrap-icons';

export default function Footer (){
    
    const gitHubUrl ="";
    const currentYear = new Date().getFullYear();


    return(
        <footer className='p-1'>
            <p className='footer-text text-center'>
                <a href={gitHubUrl}
                 target='_blank'
                 rel='noreferrer'
                 className='button-effect'>
                    <Github size ='50' className='github-icon'/>
                 </a>
                <div>
                    <small className='footer-small-text'>&copy;{currentYear} Alliette Dortelus </small>
                </div>
            </p>
        </footer>
    )
}