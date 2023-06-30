import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Image, Modal } from 'react-bootstrap';
import AppLayout from '../layout/AppLayout';
import OffCanvasQuiz from './Cover'

interface ImageWithModalProps{
    src:string;
}

const ImageWithModal:React.FC<ImageWithModalProps> = ({src}) => {
    const[show,setShow]=useState(false);

    const handleClose =() => setShow(false);
    const handleShow =() => setShow(true);

    return(
        <>
        <Image fluid className='glowing-border' src={src} onClick={handleShow}/>
        <Modal show ={show} onHide ={handleClose}>
            <Image fluid src ={src}/>
        </Modal>
        </>
    );
}

const Home: React.FC =() => {
    const[images, setImages] =useState<string[]>([]);
}


