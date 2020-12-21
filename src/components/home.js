import React from 'react';
import $ from 'jquery';

class Home extends React.Component {
    state = {
        rows: [],
        col: [],
        selected: false
    }
    updateRows = () => {
        var row = $("#row").val();
        this.setState({
            rows: row
        })
    }
    updateCols = () => {
        var col = $("#col").val();
        this.setState({
            col: col
        })
    }
    selected = () => {
        this.setState({
            selected: true
        })
    }
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="row h-100">
                        <div className="col-md-7">
                            <div className="left-block">
                                <div>
                                    <h4>Block Display</h4>
                                    {this.state.rows === 0 ?
                                        <p>Please enter values</p>
                                        :
                                        <>
                                            {this.state.rows.map((value, index) => {
                                                let i = 1;
                                                return (
                                                    <div className="blocks">
                                                        {this.state.col.map((value, index) => {
                                                            return (
                                                                <button key={index} id={"btn" + i} className="btn btn-num" onClick={() => this.selected(i)}>{i++}</button>
                                                            )
                                                        })}
                                                    </div>
                                                )
                                            })}
                                        </>
                                    }
                                    {/* <div className="blocks">
                                        <button className="btn btn-num">1</button>
                                        <button className="btn btn-num">1</button>
                                        <button className="btn btn-num">1</button>
                                        <button className="btn btn-num">1</button>
                                    </div>
                                    <div className="blocks">
                                        <button className="btn btn-num">1</button>
                                        <button className="btn btn-num">1</button>
                                        <button className="btn btn-num">1</button>
                                        <button className="btn btn-num">1</button>
                                    </div> */}
                                </div>
                                <div className="total-block">
                                    <h6>Total Blocks: <b>20</b></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-block">
                                <h4>Block Config</h4>
                                <div className="form-group">
                                    <label htmlFor="row">Row:</label>
                                    <input type="number" onChange={() => this.updateRows()} id="row" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="col">Column:</label>
                                    <input type="number" onChange={() => this.updateCols()} id="col" />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary mr-2">Generate</button>
                                    <button className="btn btn-secondary">Clear</button>
                                </div>
                                <hr />
                                <h4>Selected Block</h4>
                                {this.state.selected ?
                                    <div className="text-center">
                                        <button className="btn btn-num">1</button>
                                    </div>
                                    :
                                    <p>Please select block.</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Home;