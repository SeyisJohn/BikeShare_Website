import React from 'react';
import Header from "./Header";
import MapContainer from "./StationMap";
import Stations from "./DisplayStationList";
import {Col, Container, Row} from "react-bootstrap";


function App() {
    return (
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0, height: `100%`, maxWidth: `100%`}}>
            <Row style={{margin: `auto`}}>
                <Header/>
            </Row>

            <Row style={{margin: `auto`}} >
                <Col fluid style={{paddingRight: 0, paddingLeft: 0, maxWidth:`25%`}}>
                    <Stations/>
                </Col>
                <Col style={{ paddingLeft: 0, paddingRight: 0}}>
                    <MapContainer/>
                </Col>
            </Row>
        </Container>
    );
}


export default App;