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
                <h5> step 3</h5>
                <form>
                    <label>
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
                        className="complete_registertion"
                        disabled={isReady != true}>
                        Complete Registertion
                    </button>
                </form>
            </>
        )
    }
}

export default CheckBox;