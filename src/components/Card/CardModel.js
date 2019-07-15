import React,{Component} from  'react'

class CardModel extends Component{

    constructor(props) {
        super(props);
        this.state = {
            calendarFocused: false,
            isSubmitted: false,
            isEdit: false,
            descripton: "",
        }
    }

    render() {

        const currentDate = moment();
        const { card, isModalOpen, toggleModal, cardId, list, deleteCard, content } = this.props;
        const { description, isSubmitted, isEdit } = this.state
        return (
            <div className="card-modal" style={{ display: isModalOpen === cardId ? 'block' : 'none' }}>
                <div className="card-modal__content">
                    <div className="card-modal__content-title modal-elements">
                        <h4><i className="far fa-window-maximize left-side-icons"></i><span>{card.content}</span></h4>
                        <button onClick={toggleModal}><i className="fas fa-times close-modal"></i></button>
                    </div>
                    <div className="row">
                        <div className="left-col">
                            <div className="card__details">
                                {card.dueDate && (
                                    <div className="card__due-date">
                                        <h3 className="due-date__title"><i className="fa fa-calendar left-side-icons"></i>Due Date</h3>
                                        <p className={(currentDate.isBefore(card.dueDate) ? "due-date__date" : "due-date__date due-date__date--overdue")}>
                                            {moment(card.dueDate).format('MMM Do YYYY')}
                                        </p>
                                    </div>)}
                            </div>
                            
                            <section className="col double-col">
                                <div className="description">
                                    <h5 className="modal-elements description__title">
                                        <i className="fas fa-align-left left-side-icons"></i>
                                        Description {
                                            // show edit button when isSubmited is false and isEdit is true
                                            !isSubmitted || isEdit && (<span onClick={this.editDescription}>Edit</span>)}</h5>
                                    {// if isSubmitted is false, show form. Else, hide form and show description
                                        !isSubmitted && <form className="description__form" onSubmit={this.submitDescription}>
                                            <textarea
                                                rows="5"
                                                className="description__form-textarea"
                                                value={description}
                                                placeholder="Add a more detailed description..."
                                                onChange={this.handleDescriptionChange}
                                            ></textarea>
                                            <button>Save</button>
                                        </form>
                                    }
                                    {
                                        isSubmitted && <p>{description}</p>
                                    }
                                </div>
                                
                            </section>
                        </div>

                        <div className="right-col">
                            <aside className="col">
                                <p className="modal-aside-title">add to card</p>
                                <button onClick={this.createNewCheckList} disabled={card.checkList}><i className="fa fa-check-square"></i> <span>Checklist</span></button>

                                <div className="datePicker__wrapper">
                                    <div className="datePicker__icon">
                                        <i className="fa fa-calendar-alt"></i>
                                    </div>
                                    <SingleDatePicker
                                        placeholder={"Due Date"}
                                        readOnly={true}
                                        date={this.state.createdAt}
                                        onDateChange={this.onDateChange}
                                        focused={this.state.calendarFocused}
                                        onFocusChange={this.onCalendarFocusChange}
                                        hideKeyboardShortcutsPanel={true}
                                        numberOfMonths={1}
                                        isOutsideRange={() => false}
                                    />
                                </div>

                                <p className="modal-aside-title">actions</p>
                                <button onClick={() => {
                                    if (window.confirm("Delete " + content + "?")) {
                                        deleteCard(cardId, list);
                                    }
                                }

                                }><i className="fa fa-trash"></i> <span>Delete</span></button>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}