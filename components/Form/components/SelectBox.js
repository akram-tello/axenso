import React, { Component } from "react";
import Select from "react-select";

const options = [
    {
        id: 0,
        value: "0",
        label: 0
    },
    {
        id: 1,
        value: "1",
        label: 1
    },
    {
        id: 2,
        value: "2",
        label: 2
    },
    {
        id: 3,
        value: "3",
        label: 3
    },
    {
        id: 4,
        value: "4",
        label: 4
    },
    {
        id: 5,
        value: "5",
        label: 5
    },
];

class SelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: [],
        };
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        let nameLabel = document.getElementById("nameLabel");
        (selectedOption.id > 0) ? nameLabel.style.display = "block" : nameLabel.style.display = "none"
    };

    render() {
        const { selectedOption } = this.state;
        const n = selectedOption.id;
        return (
            <>
                <h5> step 1</h5>
                <form >
                    <div className="">
                        <label>How many people be attending?</label>
                        <Select
                            id="f1"
                            key={options.id}
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                        />
                    </div>
                    <br />
                    <label id="nameLabel" style={{ display: "none" }}>Please Provide Full Names:</label>
                    {console.log(selectedOption)}
                    {[...Array(n)].map((e, i) => (n === undefined) ? <></> :
                        <div key={i}>
                            <label>Attendee Name : </label>
                            <input
                                type="text" />
                        </div>
                    )}
                </form>

            </>
        )
    }
}

export default SelectBox;