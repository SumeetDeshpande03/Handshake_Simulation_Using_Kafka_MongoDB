import React from 'react';
import axios from 'axios';
import Header from './Header';
import ButtonMenu from './ButtonMenu';
import EventsMenu from './EventMenu';
import EventItem from './EventItem';
import EventSideList from './EventSideList';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingEvents: [],
      searchEvents: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/events/`)
      .then(res => {
        if (res.status === 200) {
          this.setState({ upcomingEvents: res.data });
          this.setState({searchEvents: res.data});
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  onSearch = (list) => {
    this.setState({searchEvents: list});
  }

  render() {
    return (
      <div>
        <Header />
        <EventsMenu />
        <div className='container'>
          <div>
            {/* <ButtonMenu /> */}
          </div>
          <div className='ui items' style={{float: 'left', width: '50%'}}>
            {this.state.searchEvents.map(event => {
              return (
                <div
                  className='ui raised segment '
                  style={{
                    marginTop: '40px',
                    marginLeft: '40px',
                    marginBottom: '20px',
                    marginRight: '20px',
                    paddingTop: '10px'
                  }}
                >
                  <EventItem key={event._id} event={event} />
                </div>
              );
            })}
          </div>
          <div
            style={{
              float: 'left',
              marginTop: '60px',
              marginLeft: '30px',
              marginRight: '40px'
            }}
          >
            <EventSideList eventList={this.state.upcomingEvents} onEventSearch={this.onSearch} />
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
