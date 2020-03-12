import React from "react";

class Footer  extends React.Component {
    render() {
        return (
            <footer className="text-center">
                <div className="footer-above">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col col-md-12">
                                <h3>About My Shipment App</h3>
                                <p>My Shipment App is a professional services firm trusted by hundreds of leading brands for product shipment across all
                                    Globe.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-below">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                Copyright &copy; My Shipment App 2020
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer ;