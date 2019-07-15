import React,{ Component } from 'react'
import uuid from "uuid";

//import List from "./components/CardList/List";

class ActivityList extends Component{
   
    constructor(props) {
        super(props);
        this.state = {
          Cards: {'sample_card': {
            id: 'sample_card',
            content: 'Sample Card'
          }},
          Lists: {'sample_list':{
            id: 'sample_list',
            title: "Sample List",
            taskIds: ['sample_card']
            }
          },
          ListOrder: ['sample_list']
        };
      }


    //method to add an activity list   
    addList = () => {
        const { Lists } = this.state;
        const listId = uuid().replace(/-/g, "");
        const newList = Object.assign(Lists, {
          [listId]: {
            id: listId,
            title: "",
            taskIds: []
          }
        });
        this.setState({
          Lists: newList
        });
        // add the created list inside the listOrder array
        for (let list in Lists) {
          this.setState({
            ListOrder: [...this.state.ListOrder, list]
          });
        }
      };

    render(){
      const { lists, cards, ListOrder} = this.state;
        return(
            <div>
                 {/*ListOrder.map((listId, index) => {
                const list = lists[listId];
                const cardList = list.taskIds.map(id => cards[id]);
                return (
                 <h1></h1> 
                )
              })*/}

                <div>
                    <button className="add-list" onClick={this.addList}>+ Add a list</button>
                </div>
            </div>
        )
    }
}

export default ActivityList
