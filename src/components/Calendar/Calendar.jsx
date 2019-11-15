import React, { Component }from "react";
import November from "../../calendar"

import "./Calendar.css";
var max = 4;
var min = 0;

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: [],
            time: ["08:00", "08:30", "09:00", "09:30", "10:00" ],
            appt: [],
            showComp: []
        }
    }
    
    async componentDidMount() {
        this.setState({
            month: November,
            showComp: November.filter((x, idx) => idx >= min && idx < max )
        })
    }
    
    nextProperty = () => {
        max++;
        min++;
        this.setState({
            showComp: November.filter((x, idx) => idx >= min && idx < max )
        })
    }
    
    prevProperty = () => {
        max--;
        min--;
        this.setState({
            showComp: November.filter((x, idx) => idx >= min && idx < max )
        })
    }
    
    render() {
        return(
            <div className="calendar"> 
                <div className="card days-disp">
                    <div className="p-3 mb-2 bg-primary text-white">
                        <h4>Schedule your session!</h4>
                        <p>Timezone: Lisbon (+1)</p>
                    </div>
                    <div className="days">
                        <i 
                            className="fas fa-arrow-circle-left" 
                            onClick={this.prevProperty}
                        />

                        {this.state.showComp.map((date, idx) => 
                            <div className="day" key={idx}>
                                <p>{date.day}</p>
                                <p>{date.month} {date.date}</p> 
                            </div>   
                        )}

                        <i 
                            className="fas fa-arrow-circle-right" 
                            onClick={this.nextProperty}
                        />
                    </div>
                </div>

                <div className="time card">
                    {this.state.showComp.map((date, idx) =>
                        <div className="time-btns" key={idx}>
                            {this.state.time.map((time, idx) =>
                                <button type="button" key={idx}> {time} </button>
                            )}
                            <button type="button"> MORE </button>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Calendar;