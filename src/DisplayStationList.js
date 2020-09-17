import React, {Component} from "react";
import {ListGroup} from "react-bootstrap";
import stationsData from "./StationData";


/*This will be important for three reasons
 * First: need to update the status of bikes
 * Second: Creating react components with names
 * Third: Connecting the markers with the individual list item
 * Remove the action variant with action onClick
 * Find out how to a new line in the list group & how to change the text inside of the list
 */
const listItems = stationsData.map((stat) =>
                <ListGroup.Item key={stat.key} action>
                    <p>
                        {stat.name} <br/>
                        Available: {stat.available} <br/>
                        Total: {stat.total}</p>
                </ListGroup.Item>
);

/* Find a way to fill in the state objects */

const liststyle = {
    maxHeight: `800px`, //Fix this because the website needs to be responsive
    maxWidth: '100%',
    overflow:`scroll`,
    overflowX: `hidden`,
    position: `relative`,
    display: `inline-block`
};

export class Stations extends Component{

    render() {
        return(
            <ListGroup style={liststyle}>
                {listItems}
            </ListGroup>
        );
    }

}

export default Stations;
