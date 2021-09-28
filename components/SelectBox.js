import React, { Component } from "react";
import Select from "react-select";

const options = [
    {
        name: "",
        value: "0",
        label: 0
    },
    {
        name: "Attendee Name 1",
        value: "1",
        label: 1
    },
    {
        name: "Attendee Name 2",
        value: "2",
        label: 2
    },
    {
        name: "Attendee Name 3",
        value: "3",
        label: 3
    },
];
const lebalNames = options.map((option) =>
    (option.value>0) ?
        <div key={option.id}>
            <label>{option.name}</label>
            <input type="text" />
        </div>
        : <></>

);
class SelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: []
        };
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };
    render() {
        const { selectedOption } = this.state;
        return (
            <>
                <h5> step 1</h5>
                <form>
                    <div className="">
                        <label>How many people be attending?</label>
                        <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                        />
                    </div>
                    <br />
                    <label>Please Provide Full Names:</label>
                    {lebalNames}
                </form>

            </>
        )
    }
}

export default SelectBox;