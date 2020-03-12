import React from "react";
import Toast from 'light-toast';

class SelectedShipmentView  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shipmentName: props.selectedShipment.name
        };
        this.changeName = this.changeName.bind(this);
        this.setShipmentName = this.setShipmentName.bind(this);
    };

    changeName =(e) => {
        this.setState({
            shipmentName: e.target.value
        });
    };
    setShipmentName =(e) => {
        // setting changes ShipmentName to local storage
        var oldSavedData = [];
        oldSavedData = JSON.parse(localStorage.getItem('ShipmentNames')) || [];

        const updateLocalStorageData = {'id': this.props.selectedShipment.id, 'name': this.state.shipmentName};
        oldSavedData.push(updateLocalStorageData);
        localStorage.setItem('ShipmentNames', JSON.stringify(oldSavedData));
        Toast.success('Shipment name has been changed to: '+ this.state.shipmentName, 1000);
    };

    render() {
        const renderCargoDetails = this.props.selectedShipment.cargo.map((item, index) => {
            return (
                <div className="row text-left" key={'details-'+index}>
                    <div className="col-md-1 col-sm-1 col-1 offset-md-1 offset-sm-0 offset-0">
                        <label className='font-bold' htmlFor="exampleInputEmail1">Type</label>
                    </div>
                    <div className="col-md-1 col-sm-2 col-2">
                        <label>{item.type}</label>
                    </div>
                    <div className="col-md-2 col-sm-3 col-3">
                        <label className='font-bold' htmlFor="exampleInputEmail1">Description</label>
                    </div>
                    <div className="col-md-2 col-sm-3 col-2">
                        <label>{item.description}</label>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2">
                        <label className='font-bold' htmlFor="exampleInputEmail1">Volume</label>
                    </div>
                    <div className="col-md-1 col-sm-1 col-1">
                        <label>{item.volume}</label>
                    </div>
                </div>
            );
        });
        const renderServicesDetails = this.props.selectedShipment.services.map((item, index) => {
            return (
                <div className="row text-left" key={'details-'+index}>
                    <div className="col-md-2 col-sm-2 col-2 offset-md-1 offset-sm-0 offset-0">
                        <label className='font-bold' htmlFor="exampleInputEmail1">Type</label>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2">
                        <label>{item.type}</label>
                    </div>
                    <div className="col-md-2 col-sm-3 col-3">
                        <label className='font-bold' htmlFor="exampleInputEmail1">Value</label>
                    </div>
                    <div className="col-md-2 col-sm-3 col-2">
                        <label>{item.value}</label>
                    </div>
                </div>
            );
        });

        return (
            <React.Fragment>
                <div className='heading'><span className="skills">Shipment Details</span></div>
                <div className="row mb-2 text-left">
                    <div className="col-md-2 col-sm-2 col-2">
                        <label className='font-bold' htmlFor="exampleInputEmail1">Shipment Name</label>
                    </div>
                    <div className="col-md-7 col-sm-9 col-7 mb-2">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               value={this.state.shipmentName} onChange={this.changeName} />
                    </div>
                </div>
                <div className='mb-2'>
                    <div className="row text-left">
                        <div className="col-md-2 col-sm-2 col-2">
                            <label className='font-bold'>Cargo</label>
                        </div>
                    </div>
                        {renderCargoDetails}
                </div>
                <div className="row text-left mb-2">
                    <div className="col-md-2 col-sm-2 col-2">
                        <label className='font-bold'>ID</label>
                    </div>
                    <div className="col-md-7 col-sm-9 col-7">
                        <label>{this.props.selectedShipment.id}</label>
                    </div>
                </div>
                <div className="row text-left mb-2">
                    <div className="col-md-2 col-sm-2 col-2">
                        <label className='font-bold'>Mode</label>
                    </div>
                    <div className="col-md-7 col-sm-9 col-7">
                        <label>{this.props.selectedShipment.mode}</label>
                    </div>
                </div>
                <div className="row text-left mb-2">
                    <div className="col-md-2 col-sm-2 col-2">
                        <label className='font-bold'>Type</label>
                    </div>
                    <div className="col-md-7 col-sm-9 col-7">
                        <label>{this.props.selectedShipment.type}</label>
                    </div>
                </div>
                <div className="row text-left mb-2">
                    <div className="col-md-2 col-sm-2 col-2">
                        <label className='font-bold'>Destination</label>
                    </div>
                    <div className="col-md-7 col-sm-9 col-7">
                        <label>{this.props.selectedShipment.destination}</label>
                    </div>
                </div>
                <div className="row text-left mb-2">
                    <div className="col-md-2 col-sm-2 col-2">
                        <label className='font-bold'>Origin</label>
                    </div>
                    <div className="col-md-7 col-sm-9 col-7">
                        <label>{this.props.selectedShipment.origin}</label>
                    </div>
                </div>
                <div className='mb-2'>
                    <div className="row text-left">
                        <div className="col-md-2 col-sm-2 col-2">
                            <label className='font-bold'>Services</label>
                        </div>
                    </div>
                    {renderServicesDetails}
                </div>
                <div className="row text-left mb-2">
                    <div className="col-md-2 col-sm-2 col-2">
                        <label className='font-bold'>Total</label>
                    </div>
                    <div className="col-md-7 col-sm-9 col-7">
                        <label>{this.props.selectedShipment.total}</label>
                    </div>
                </div>
                <div className="row text-left mb-2">
                    <div className="col-md-2 col-sm-2 col-2">
                        <label className='font-bold'>Status</label>
                    </div>
                    <div className="col-md-7 col-sm-9 col-7">
                        <label>{this.props.selectedShipment.status}</label>
                    </div>
                </div>
                <div className="row text-left mb-2">
                    <div className="col-md-2 col-sm-2 col-2">
                        <label className='font-bold'>UserId</label>
                    </div>
                    <div className="col-md-7 col-sm-9 col-7">
                        <label>{this.props.selectedShipment.userId}</label>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" onClick={this.setShipmentName}  >Change Name</button>
                </div>
            </React.Fragment>
        );
    }
}
export default SelectedShipmentView ;