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
                <h5> step 2</h5>
                <form>
                    <label>
                        would you like your company name on your badges?
                        <div>
                            <input
                                id="hasBadges"
                                type="radio"
                                name="isOnYourBadges"
                                value="yes"
                                checked={isOnYourBadges === "yes"}
                                onChange={this.onChangeHandler}>
                            </input>Yes
                            <input
                                id="noBadges"
                                type="radio"
                                name="isOnYourBadges"
                                value="no"
                                checked={isOnYourBadges === "no"}
                                onChange={this.onChangeHandler}>
                            </input>no
                        </div>
                    </label>
                    <div id="hasCompanyBadges" style={{ display: "none" }}>
                        <span>company Name : </span>
                        <input
                            type="text"
                            name="companyName"
                            onChange={this.onChangeHandler} />
                    </div>
                    <br />
                    <label>
                        Will anyone in your group require spical accommodations?
                        <div>
                            <input
                                id="hasSpecial"
                                type="radio"
                                name="isSpecial"
                                value="spical"
                                checked={isSpecial === "spical"}
                                onChange={this.onChangeHandler}>
                            </input>Yes
                            <input
                                id="noSpical"
                                type="radio"
                                name="isSpecial"
                                value="notSpical"
                                checked={isSpecial === "notSpical"}
                                onChange={this.onChangeHandler}>
                            </input>no
                        </div>
                    </label>
                    <div id="spicalAccommodations" style={{ display: "none" }}>
                        <span>what it is : </span>
                        <input
                            type="text"
                            name="spicalAccommodations"
                            onChange={this.onChangeHandler}
                        />
                    </div>
                </form>
            </>
        )
    }
}

export default DropdownBox;