import React from 'react'
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addhistory, deleteVideo } from '../services/allapi';
import { v4 as uuidv4 } from 'uuid';



function Videocard({ card, handleDeleteStatus,insideCategory }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = async () => {
        setShow(true);

        // to generate id automatically

          const uid=uuidv4()

          console.log(uid);
        //   b532-dbe389571f5a   this type of id is showing in console


        // to generate system date and time
        let cardTime=new Date()
        console.log(cardTime);

        const {caption,url}=card

        if(uid!="",caption!="",url!="",cardTime!=""){
            const body={
                id:uid,
                cardName:caption,
                url,
                date:cardTime
            }
           const response= await addhistory(body)

           console.log(response);
        }

    }


    // function definition

    const removeItem = async (id) => {

        // api call to delete specific card

        let response = await deleteVideo(id)

        console.log(response);
        if (response.status >= 200 && response.status < 300) {
            handleDeleteStatus(true)
        }

    }


    const dragStarted=(e,id)=>{
        console.log('drag started and source card id'+id);
        e.dataTransfer.setData("cardId",id)
    }

    return (
        <>
            <div>
                <Card draggable onDragStart={e=>dragStarted(e,card?.id)}
                 className='shadow' >
                    <Card.Img onClick={handleShow} variant="top" src={card?.thumbnail} />
                    <Card.Body>
                        <Card.Title>
                            <span>{card?.caption}</span>
                            {
                                // delete button hide inside catogory list
                                insideCategory?"":
                                 <Trash2 onClick={() => removeItem(card?.id)} color='red' style={{ float: 'right' }} /> 
                            }
                           
                            
                            {/* delete icon */}
                        </Card.Title>
                    </Card.Body>
                </Card>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Video caption</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <iframe width="100%" height="200px" src={`${card?.url}?autoplay=1`} title="Olam Up  Video Song | Jinu Thoma | Dabzee | Anarkali | Jahaan | Chemban Vinod Jose | Lukman Avaran" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


                    </Modal.Body>

                </Modal>
            </div>
        </>
    )
}

export default Videocard