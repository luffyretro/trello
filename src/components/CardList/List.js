import React,{Component,Fragment} from 'react'

import CardForm from "../Card/CardForm";
import Card from "./components/Card/Card";
import ListMenu from "./Card/ListMenu";

class List extends Component {

    state = {
        isEdit: false,
        isSubmitted: true,
        showCardForm: false,
        cardVal: "",
        listMenuOpen: false,
        isModalOpen: '',
      };

    render(){
        return(
             <div className="list">
                <div className="list--title" ref={node => this.node = node}>
                    {
                      !isSubmitted || isEdit ? (
                        <form className="list--form" onSubmit={this.saveListTitle}  >
                          <input type="text" className="list--form-input" autoFocus={true} value={title} onChange={e => handleTitleChange(id, e.target.value)}/>
                          {
                            !isEdit && <button>Add List</button>}
                          {
                            isEdit && <button>Edit List</button>}
                        </form>
                      ) : (
                          <Fragment>
                            <h3 onClick={this.toggleTitleForm}>{title}</h3>
                            <button className="open-list-menu-btn" onClick={this.toggleListMenu}><i className="fas fa-ellipsis-h fa-sm"></i></button>
                            {
                              listMenuOpen &&
                              <ListMenu
                                toggleListMenu={this.toggleListMenu}
                                copyList={this.props.copyList}
                                deleteList={this.props.deleteList}
                                listId={id}
                                title={title}
                              />
                            }
      
                          </Fragment>
                        )}
                  </div>
                  {
                     <ul className="card-list">
                     {cardList.map((card, index) => (
                       <Card
                         key={card.id}
                         cardId={card.id}
                         content={card.content}
                         index={index}
                         card={card}
                         deleteCard={this.props.deleteCard}
                         list={this.props.list}
                         editCard={this.props.editCard}
                         addCardDescription={addCardDescription}
                         toggleModal={this.toggleModal}
                         isModalOpen={this.state.isModalOpen}
                       >
                       </Card>
                     ))}
   
                   </ul>   
                  }
                
                  {/*
                    showCardForm && (
                      <CardForm
                        cardVal={cardVal}
                        handleCardValChange={this.handleCardValChange}
                        addToCard={this.addToCard}
                        toggleCardForm={this.toggleCardForm}
                      />
                    ) */}
      
                  {
                    isSubmitted && !showCardForm && (
                      <p className="add-card-btn" onClick={this.toggleCardForm}>
                        + <span>Add a card...</span>
                      </p>
                    )}
            </div>
        )
    } 
}

export default List