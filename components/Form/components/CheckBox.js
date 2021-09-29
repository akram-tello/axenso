import React, { Component } from "react";

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler = e => {
        this.setState({ [e.target.name]: e.target.checked });
    }
    render() {
        const { isReady } = this.state
        return (
            <>
                <div className="orange-box p-3 rounded-bl-md rounded-br-md flex">
                    <h5  className="bg-white p-1 font-bold rounded step-label"> step 3</h5>
                    <form className="flex flex-col">
                        <label className="my-5 text-gray-700 font-semibold text-2xl">
                            are you ready to rock?
                            <input
                                value={isReady}
                                type="checkbox"
                                name="isReady"
                                checked={this.isReady}
                                onChange={this.onChangeHandler}>
                            </input>
                        </label>
                        <button
                            id="completeRegistertion"
                            type="submit"
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow"
                            disabled={isReady != true}>
                            Complete Registertion
                        </button>
                    </form>
                </div>

            </>
        )
    }
}

export default CheckBox;