import React, { Component } from 'react'


class Point {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude
    }

}

class Route {
    constructor(from, to, transport) {
        this.from = from;
        this.to= to;
        this.transport = transport;
    }
}


class RoutingService extends Component {
    constructor(props) {
        super(props);

        this.getRoute = this.getRoute.bind(this);
        this.buildRouteUrl = this.buildRouteUrl.bind(this);
        this.buildFakeRouteUrl = this.buildFakeRouteUrl.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
    }

    componentWillMount() {
        let from = new Point(16.3657665, 48.2114620);
        let to = new Point(16.18465, 48.216799);
        let transport = 'foot';
        this.getRoute(from, to, transport)
    }

    checkStatus(res) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res;
        } else {
            throw Error(res.statusText);
        }
    }

    buildRouteUrl(from, to, transport) {
        return 'http://smeur.tel.fer.hr:8823/smeur/grc' +
            '?fromLon=' + from.longitude +
            '&fromLat=' + from.latitude +
            '&toLon=' + to.longitude +
            '&toLat=' + to.latitude +
            '&transport=' + transport +
            '&optimisation=something'
    }

    buildFakeRouteUrl(from, to, transport) {
        return 'http://localhost:3000/route.json'
    }

    getRoute(from, to, transport) {
        const url = this.buildFakeRouteUrl(from, to, transport);
        fetch(url)
            .then(this.checkStatus)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>Test component</div>
        )
    }
}


export default RoutingService