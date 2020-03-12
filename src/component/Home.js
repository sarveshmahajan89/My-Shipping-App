import React from "react";
import $ from 'jquery';
import ShipmentsListView from './ShipmentsListView';
import SelectedShipmentView from './SelectedShipmentView';

class Home  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shipmentData: [],
            showSelectedShipmentView: false,
            selectedShipment: {}
        };
        this.shipmentHandler = this.shipmentHandler.bind(this);
        this.navigateToHomePage = this.navigateToHomePage.bind(this);
    };

    navigateToHomePage = (e) => {
        // call when navigation is needed to home page
        this.setState(prevState => ({
            showSelectedShipmentView: !prevState.showSelectedShipmentView
        }));
        this.updateShipmentData();
    };
    loadShipmentDetails() {
        // loading shipments data from json db hosted at port 3000
        $.ajax({
            url: 'http://localhost:3000/shipments',
            dataType: 'json',
            type: 'GET',

            success: data => {
                this.setState({
                    shipmentData: data
                });
                this.updateShipmentData();
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString()); // eslint-disable-line
            },
        });
    }

    componentWillMount() {
        this.loadShipmentDetails();
    }

    updateShipmentData() {
        // update ShipmentData from local storage, that was saved in edit page
        var oldSavedData = [];
        oldSavedData = JSON.parse(localStorage.getItem('ShipmentNames')) || [];
        let updateShipmentData = [...this.state.shipmentData];
        for(let i in updateShipmentData) {
            const index = oldSavedData.findIndex(item => item.id === updateShipmentData[i].id);
            if(index >= 0) {
                updateShipmentData[i].name = oldSavedData[index].name;
            }
        }
        this.setState({
            shipmentData: updateShipmentData
        })
    }
    shipmentHandler = (selectedShipment) => {
        // handling shipment details or selected shipment page
        this.setState({
            showSelectedShipmentView: true,
            selectedShipment: selectedShipment
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.state.showSelectedShipmentView && <div className="row heading">
                    <div onClick={this.navigateToHomePage} className='home-option'>
                        <span>{'<-Back to Home Page'}</span>
                    </div>
                </div>}
                {!this.state.showSelectedShipmentView ?
                    <ShipmentsListView shipmentData={this.state.shipmentData} shipmentHandler={this.shipmentHandler}/> :
                    <SelectedShipmentView selectedShipment={this.state.selectedShipment} />}
            </React.Fragment>
        );
    }
}
export default Home ;