import React, {useState} from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

interface StorySummary{
    title:string;
    synopsis:string
};


const initialStorySummary: StorySummary ={
    title: "Batman vs Joker:Chaos", 
    synopsis:"As Batman's Batmobile screeched to a halt at the riot's epicenter, chaos engulfed the streets of Gotham City.  The Joker, his face concealed behind an eerie mask of white makeup and a twisted grin, reveled in the bedlam he has unleashed.  With a maniacal laugh that piereced through the pandemonium, he taunted Batman.The fate of Gotham City teetered on a knife's edge, the struggle between the Dark Knight and the Clown Prince of Crime reaching its climax.  Would the city be reduced to ashes, or would the enduring spirit of justice prevail? The answer awaits....."
};

const OffCanvasSummary: React.FC =()=>{
    const [show, setShow]=useState(false)
    const [summary, setSummary]=useState(initialStorySummary);
    const handleClose =()=> setShow(false);
    const handleShow =() => setShow(true);

    return(
        <>
         <div className='off-cover'>
            <Button variant='primary' onClick={handleShow}>
                View Summary
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{summary.title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>{summary.synopsis}</p>
                </Offcanvas.Body>
            </Offcanvas>
         </div>
        </>
    );
}

export default OffCanvasSummary;

