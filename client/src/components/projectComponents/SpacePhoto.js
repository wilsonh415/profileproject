import React from 'react';
import 'date-fns';
import { Card } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

class SpacePhoto extends React.Component {
    constructor() { 
        super();
        this.state = {
            spaceFoto: null,
            copyright: null,
            selectedDate: null
        }
    }

    async componentDidMount() {
        const resp = await fetch('/api/spacephoto');
        const data = await resp.json();
        this.setState({
            spaceFoto: data.hdurl,
            copyright: data.copyright
        });
        console.log(data);
    }

    selectDate = () => {

    }

    handleDateChange = (data) => {
        // const date = new Date(data);
        // console.log(date);
        this.setState({
            selectedDate: null
        });
    }

    render() {
        return (
            <Card style={{ width: '18rem', backgroundColor: "white", border: "1px solid"}}>
                <Card.Img variant="top" src={this.state.spaceFoto} width={286} height={180}/>
                <Card.Body>
                    <Card.Title><b>NASA's astronomy photo of the day!</b></Card.Title>
                    <Card.Text>
                    Look at today's unique space photo, image by {this.state.copyright}.
                    </Card.Text>
                </Card.Body>
                <div>
                    <h6 style={{fontFamily: "Georgia"}}>
                        <b>
                        Select space photo from <br/>another date!
                        </b>
                    </h6>
                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                        variant="inline"
                        format="MM/dd/yyyy"
                        onChange={this.handleDateChange} >
                        <DatePicker value={this.selectedDate} />
                        </KeyboardDatePicker>
                    </MuiPickersUtilsProvider> */}

                </div>
                
            </Card>
        )
    }
}

export default SpacePhoto;