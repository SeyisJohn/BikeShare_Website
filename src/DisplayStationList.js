import React, {Component} from "react";
import {ListGroup} from "react-bootstrap";
import stationsData from "./StationData";
import style from "./List.module.css"


/*This will be important for three reasons
 * First: need to update the status of bikes
 * Second: Creating react components with names
 * Third: Connecting the markers with the individual list item
 * Remove the action variant with action onClick
 * Find out how to create a new line in the list group & how to change the text inside of the list
 */
const listItems = stationsData.map((stat) =>
                <ListGroup.Item className={style.no_border} key={stat.key} action>
                        <b>{stat.name}</b> <br/>
                        Available: <b>{stat.available}</b> <br/>
                        Total: {stat.total}
                </ListGroup.Item>
);

/* Find a way to fill in the state objects */


export class Stations extends Component{

    render() {
        return(
            <ListGroup className={style.list_style}>
                {listItems}
            </ListGroup>
        );
    }

}

export default Stations;
