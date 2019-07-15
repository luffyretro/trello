import React, {Component} from 'react'
import CardModal from "./Card/CardModal"

class Card extends Component{

    render() {
        const { toggleModal, isModalOpen, content, editCard, deleteCard, cardId, list, card, addCardDescription } = this.props;
        return (
            <CardModal 
                disableInteractiveElementBlocking={true}
                isDragDisabled={isModalOpen !== '' ? false : true}
                draggableProps={null}
                dragHandleProps={null} 
                content={content} 
                deleteCard={deleteCard} 
                cardId={cardId} 
                list={list} 
                card={card} 
                toggleModal={toggleModal} 
                isModalOpen={isModalOpen} 
                editCard={editCard} 
                addCardDescription={addCardDescription} />
       
        )
    }

}

export default Card