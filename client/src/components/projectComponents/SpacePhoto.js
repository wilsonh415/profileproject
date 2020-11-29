import React, { StrictMode } from 'react';
import 'date-fns';
import { Card } from 'react-bootstrap';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import moment from 'moment';

class SpacePhoto extends React.Component {
    constructor() { 
        super();
        this.state = {
            spaceFoto: null,
            copyright: null,
            // selectedDate: moment(),
            stringDate: this.getDate()
        }
    }

    getDate = () => {
        const date = new Date();
        let dateString = new String();
        dateString += date.getMonth() + 1;
        dateString += '/' + date.getDate();
        dateString += '/' + date.getFullYear();
        return dateString;
    }

    async componentDidMount() {
        const resp = await fetch('/api/spacephoto');
        const data = await resp.json();
        this.setState({
            spaceFoto: data.hdurl,
            copyright: data.copyright
        });
    }

    handleDateChange = async (data) => {
        const date = new Date(data);
        let dateString;
        let backendDate;
        let month = date.getMonth() + 1;
        let day = date.getDate();
        const year = date.getFullYear();
        day = (day.length === 1) ? '0' + day : day;
        month = (month.length === 1) ? '0' + month : month;
        dateString = month + '/' + day + '/' + year;
        backendDate = year + '-' + month + '-' + day;

        this.setState({
            stringDate: dateString
        });
        if(backendDate.length === 10) {
            const resp = await fetch(`/api/spacephoto?date=${backendDate}`);
            const respdata = await resp.json();
            this.setState({
                spaceFoto: respdata.hdurl,
                copyright: respdata.copyright
            });
            if(respdata.msg !== undefined) {
                window.alert(respdata.msg);
            }
            console.log(respdata);
        }
    }

    render() {
        return (
            <div className="spacePhotoStyle">
            <Card>
                <Card.Img variant="top" src={this.state.spaceFoto} width={286} height={180}/>
                <Card.Body>
                    <Card.Title><b>NASA's astronomy photo of the day!</b></Card.Title>
                    <b><hr/></b>
                    <Card.Text>
                    Look at the astronomy photo of the day from {this.state.stringDate}.
                    <br/> Image by: {this.state.copyright}
                    </Card.Text>
                    <b><hr/></b>
                </Card.Body>
                <div>
                    <h6 style={{fontFamily: "Georgia", marginTop: "-3vh"}}>
                        <b>
                        Select space photo from <br/>another date!
                        </b>
                    </h6>
                    <StrictMode>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <label style={{fontSize: "10px"}}>Limited to 30 pics/hour by NASA; choose wisely!</label>
                        <KeyboardDatePicker
                        style={{marginTop: "-1vh"}}
                        margin="normal"
                        id="date-picker-dialog"
                        format="MM/dd/yyyy"
                        value={this.state.stringDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </MuiPickersUtilsProvider>
                    </StrictMode>
                </div>
            </Card>
            </div>
        )
    }
}

export default SpacePhoto;