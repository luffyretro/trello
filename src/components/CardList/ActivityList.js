import React,{ Component } from 'react'
import uuid from "uuid";

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
        // console.log(lists);
        // add the created list inside the listOrder array
        for (let list in Lists) {
          this.setState({
            ListOrder: [...this.state.ListOrder, list]
          });
        }
         console.log(Lists);
      };

    render(){
        return(
            <div>
                <button className="add-list" onClick={this.addList}>+ Add a list</button>
            </div>
        )
    }
}

export default ActivityList
