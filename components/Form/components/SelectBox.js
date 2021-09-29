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
            Attendee_1: "",
            Attendee_2: "",
            Attendee_3: "",
            Attendee_4: "",
            Attendee_5: "",
        };
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        let nameLabel = document.getElementById("nameLabel");
        (selectedOption.id > 0) ? nameLabel.style.display = "block" : nameLabel.style.display = "none"
    };

    onChangeHandlerNames = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { selectedOption } = this.state;
        const n = selectedOption.id;
        return (
            <>
                <div className="green-box p-3 mx-2 rounded-md sm:flex sm-mt">
                    <h5 className="bg-white p-1 font-bold rounded step-label"> step 1</h5>
                    <form >
                        <div className="mt-5">
                            <label className=" text-gray-700 font-semibold text-2xl italic">How many people be attending?</label>
                            <Select
                                id="f1"
                                key={options.id}
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={options}
                                placeholder="Please choose.."
                                className="mt-2" />
                        </div>
                        <br />
                        <label id="nameLabel" style={{ display: "none" }} className=" text-gray-700 font-bold">Please Provide Full Names:</label>
                        {[...Array(n)].map((e, i) => (n === undefined) ? <></> :
                            <div key={i} className="mb-2">
                                <label>Attendee Name : </label>
                                <input type="text" name={options.name} onChange={this.onChangeHandlerNames} />
                            </div>
                        )}
                    </form>
                </div>
            </>
        )
    }
}

export default SelectBox;