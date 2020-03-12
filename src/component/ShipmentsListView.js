import React from "react";

class ShipmentsListView  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemsPerPage: 20,
            inputId: '',
            sortingField: '',
            isSortOrderAsc : true
        };
        this.changePageNumber = this.changePageNumber.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.sortData = this.sortData.bind(this);
        this.setSortingOrder = this.setSortingOrder.bind(this);
        this.selectedShipmentHandler = this.selectedShipmentHandler.bind(this);
    };

    changePageNumber(event) {
        // method is called to change page number in pagination
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    selectedShipmentHandler(item) {
        this.props.shipmentHandler(item);
    }

    sortData = (e) => {
        // sorting shipment data on entire data
        this.setState({
            sortingField: e.target.value
        });
    };

    setSortingOrder = (e) => {
        // maintaining sorting order
        if(this.state.sortingField === e.target.value) {
            this.setState(prevState => ({
                isSortOrderAsc: !prevState.isSortOrderAsc
            }));
        } else {
            this.setState({
                isSortOrderAsc: true
            });
        }
    };

    onChangeHandler(e){
        this.setState({
            inputId: e.target.value,
        })
    }

    getSortedData(currentItems) {
        const sortField = this.state.isSortOrderAsc ? [].concat(currentItems)
            .sort((a, b) => (a[this.state.sortingField] > b[this.state.sortingField]) ? 1 : ((b[this.state.sortingField] > a[this.state.sortingField]) ? -1 : 0)) :
            [].concat(currentItems)
                .sort((a, b) => (a[this.state.sortingField] < b[this.state.sortingField]) ? 1 : ((b[this.state.sortingField] < a[this.state.sortingField]) ? -1 : 0));
        return sortField;
    }

    render() {
        if (this.props.shipmentData.length > 0) {
            const buttonActive = 'btn btn-secondary active', buttonDefault = 'btn btn-secondary';
            const {currentPage, itemsPerPage } = this.state;
            let currentItems = this.props.shipmentData;
            // Logic for displaying current elements
            const indexOfLastItem = currentPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            currentItems = this.getSortedData(currentItems);
            currentItems = currentItems.slice(indexOfFirstItem, indexOfLastItem);


            const renderItems = (this.state.inputId ? this.props.shipmentData : currentItems)
                .filter(item => this.state.inputId === '' || item.id.includes(this.state.inputId))
                .map((item, index) => {
                    return (
                        <tr onClick={()=>this.selectedShipmentHandler(item)} className="table-row-driver" key={'message-'+index}>
                            <td>{item.name}</td>
                            <td>{item.id}</td>
                            <td>{item.origin}</td>
                            <td>{item.status}</td>
                        </tr>
                    )
                });

            // Logic for displaying page numbers
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(this.props.shipmentData.length / itemsPerPage); i++) {
                pageNumbers.push(i);
            }

            const renderPageNumbers = pageNumbers.map(number => {
                return (
                    <li key={number}
                        id={number}
                        className={this.state.currentPage == number ? 'active' : ''}
                        onClick={this.changePageNumber}>{number}</li>
                );
            });

            return (
                <React.Fragment>
                    <div>
                        <div className='heading'><span className="skills">List of Shipments</span></div>
                        <div className='search-block'>
                            <div className='search-field'>
                                <input className="form-control" placeholder="Search by id" value={this.state.inputId} type="text" onChange={this.onChangeHandler}/>
                            </div>
                            <div className='sorting-block'>
                                <span className='sort-label'>Sort By : </span>
                                <div id='button-group' className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className={this.state.sortingField === 'name' ? buttonActive : buttonDefault}>
                                        {this.state.sortingField !== 'name' ? (<span><i className="fa fa-sort" aria-hidden="true"></i></span>) :
                                            (this.state.isSortOrderAsc ? <i className="fa fa-sort-asc" aria-hidden="true"></i> :
                                                <i className="fa fa-sort-desc" aria-hidden="true"></i>)
                                        }
                                        <input onClick={this.setSortingOrder} onChange={this.sortData} type="radio" checked={this.state.sortingField === "name"}
                                               name="options" id="optionName" autoComplete="off" value='name' /> Name
                                    </label>
                                    <label className={this.state.sortingField === 'id' ? buttonActive : buttonDefault}>
                                        {this.state.sortingField !== 'id' ? (<span><i className="fa fa-sort" aria-hidden="true"></i></span>) :
                                            (this.state.isSortOrderAsc ? <i className="fa fa-sort-asc" aria-hidden="true"></i> :
                                                <i className="fa fa-sort-desc" aria-hidden="true"></i>)
                                        }
                                        <input onClick={this.setSortingOrder} onChange={this.sortData} type="radio" checked={this.state.sortingField === "id"}
                                               name="options" id="optionId" autoComplete="off" value='id' /> Shipment Id
                                    </label>
                                    <label className={this.state.sortingField === 'status' ? buttonActive : buttonDefault}>
                                        {this.state.sortingField !== 'status' ? (<span><i className="fa fa-sort" aria-hidden="true"></i></span>) :
                                            (this.state.isSortOrderAsc ? <i className="fa fa-sort-asc" aria-hidden="true"></i> :
                                                <i className="fa fa-sort-desc" aria-hidden="true"></i>)
                                        }
                                        <input onClick={this.setSortingOrder} onChange={this.sortData} type="radio" checked={this.state.sortingField === "status"}
                                               name="options" id="optionAmount" autoComplete="off" value='status' /> Status
                                    </label>
                                </div>
                            </div>
                        </div>
                        <ul className="page-numbers">
                            <span>Content: &nbsp;&nbsp;</span>
                            {renderPageNumbers}
                        </ul>
                        <div className="row table-block">
                            <table className="table table-hover table-dark">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th scope="col">Shipment ID</th>
                                    <th scope="col">Origin</th>
                                    <th scope="col">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {renderItems}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </React.Fragment>
            );
        } else {
            return (<div></div>);
        }
    }
}
export default ShipmentsListView ;