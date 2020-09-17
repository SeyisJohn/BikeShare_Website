import React from 'react';
import Header from "./Header";
import MapContainer from "./StationMap";
//import GoogleMarkerPage from "./StationMap_RGM";
import Stations from "./DisplayStationList";
import {Col, Container, Row} from "react-bootstrap";


function App() {
    return (
        <Container fluid>
            <Row xl={"auto"} lg={"auto"} md={"auto"} sm={"1"} xs={"1"}>
                <Header/>
            </Row>

            <Row noGutters={"true"}>
                <Col xl="auto" lg="auto" md="auto">
                    <Stations/>
                </Col>
                <Col>
                    <MapContainer/>
                </Col>
            </Row>
        </Container>
    );
}


export default App;