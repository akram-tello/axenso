import React, { Component } from "react";

class DropdownBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnYourBadges: '',
            isSpecial: '',
            companyName: '',
            spicalAccommodations: ''

        };
        
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
        let hasspicalAccommodations = document.getElementById("spicalAccommodations");
        let hasCompanyBadges = document.getElementById("hasCompanyBadges");
        let hasSpecial = document.getElementById("hasSpecial");
        let hasBadges = document.getElementById("hasBadges");

        hasSpecial.checked ? hasspicalAccommodations.style.display = "block" : hasspicalAccommodations.style.display = "none";
        hasBadges.checked ? hasCompanyBadges.style.display = "block" : hasCompanyBadges.style.display = "none";
    }

    render() {
        const { isOnYourBadges, isSpecial } = this.state
        return (
            <>
                <div className="blue-box p-3 mx-2 rounded-md sm:flex sm-mt">
                    <h5 className="bg-white p-1 font-bold rounded step-label"> step 2</h5>
                    <form className="mt-5">
                        <label className="text-gray-700 font-semibold text-2xl italic">
                            Would you like your company name on your badges?
                            <div>
                                <input
                                    id="hasBadges"
                                    type="radio"
                                    name="isOnYourBadges"
                                    value="yes"
                                    checked={isOnYourBadges === "yes"}
                                    onChange={this.onChangeHandler}
                                    className="self-auto" />
                                <span className="mx-2 self-auto">Yes</span>
                                <input
                                    id="noBadges"
                                    type="radio"
                                    name="isOnYourBadges"
                                    value="no"
                                    checked={isOnYourBadges === "no"}
                                    onChange={this.onChangeHandler}
                                    className="self-auto" />
                               <span className="mx-2 self-auto">No</span>
                            </div>
                        </label>
                        <div id="hasCompanyBadges" style={{ display: "none" }}>
                            <span className="italic text-sm">Company Name : </span>
                            <input
                                type="text"
                                name="companyName"
                                onChange={this.onChangeHandler} />
                        </div>
                        <br />
                        <label className="text-gray-700 font-semibold text-2xl italic">
                            Will anyone in your group require spical accommodations?
                            <div>
                                <input
                                    id="hasSpecial"
                                    type="radio"
                                    name="isSpecial"
                                    value="spical"
                                    checked={isSpecial === "spical"}
                                    onChange={this.onChangeHandler} 
                                    className="self-auto"/>
                                <span className="mx-2 self-auto">Yes</span>
                                <input
                                    id="noSpical"
                                    type="radio"
                                    name="isSpecial"
                                    value="notSpical"
                                    checked={isSpecial === "notSpical"}
                                    onChange={this.onChangeHandler}
                                    className="self-auto" />
                                    <span className="mx-2 self-auto">No</span>
                            </div>
                        </label>
                        <div id="spicalAccommodations" style={{ display: "none" }}>
                            <span className="italic text-sm">What it is : </span>
                            <input
                                type="text"
                                name="spicalAccommodations"
                                onChange={this.onChangeHandler}
                            />
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default DropdownBox;