import React from 'react'
import './index.css';

function Search(props) {
    return (
        <div className="form-container">
            <form className="ui form">
                <div className="two fields">
                    <div className="field">
                        <label>City</label>
                        <input type="text" name="city" placeholder="City" />
                    </div>
                    <div className="field">
                        <label>Country Code</label>
                        <input type="text" name="country" placeholder="Country Code" />
                    </div>
                </div>
                <button className="ui button primary" type="submit">Submit</button>
            </form>

        </div>

    )
}

export default Search;





