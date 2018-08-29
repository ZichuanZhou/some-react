import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getTime();
    }

    componentWillMount() {
        console.log("component will mount");
    }

    componentDidMount() {
        console.log("Component did mount");
        this.setTimer();
    }

    componentWillReceiveProps(nextProps) {
        console.log("will receive porps",nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("should update",nextProps,nextState);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("will update",nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("did update", prevProps, prevState);
    } 

    componentWillUnmount() {
        console.log("will unmount");
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    setTimer() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    }

    updateClock() {
        this.setState(this.getTime, this.setTimer);
    }

    getTime() {
        const currentTime = new Date();
        return {
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            ampm: currentTime.getHours() >= 12 ? "pm" : "am"
        };
    }

    render() {
        const { hours, minutes, seconds, ampm } = this.state;
        return (
        <div className="clock">
            {hours === 0 ? 12 : hours > 12 ? hours - 12 : hours}:{minutes > 9
            ? minutes
            : `0${minutes}`}:{seconds > 9 ? seconds : `0${seconds}`} {ampm}
        </div>
        );
    }
}

export default Clock;
