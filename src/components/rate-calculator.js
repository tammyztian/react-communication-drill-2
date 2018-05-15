import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        dayRate: '',
        hours : '',
        }
    }

    render() {
        let rate = (this.state.dayRate && this.state.hours) ? this.state.dayRate / this.state.hours : 0;
        return (
            <form>
                <NumberInput 
                    id="day-rate" 
                    label="Day rate" 
                    min={0} max={5000} 
                    onChange={(value) => this.setState({dayRate: value})} />

                <NumberInput 
                    id="hours" 
                    label="Hours" 
                    min={1} max={12} 
                    onChange={(value) => this.setState({hours:value})}/>



                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)}
/>
            </form>
        );
    }
}

