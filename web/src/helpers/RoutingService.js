
class Point {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude
    }
}

class Route {
    constructor(routeJson) {
        this.airQuality = routeJson.airQualityRating;
        this.time = routeJson.travelTime;
        this.eco = routeJson.eco;
        this.distance = routeJson.distance;
        this.points = this.buildPoints(routeJson.route);
    }

    buildPoints(route) {
        let result = [];
        route.forEach(function (point) {
            let p = {
                lat: point.location.latitude,
                lng: point.location.longitude
            };
            result.push(p);
        });
        return result;
    }

    getPointsToPaint() {
        return this.points;
    }
}

class RoutingService {
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

    getRoutes(from, to, transport) {
        const url = this.buildRouteUrl(from, to, transport);
        return fetch(url)
            .then(this.checkStatus)
            .then(res => res.json())
            .then(json => {
                let result = [];
                json.forEach(function (routeJson) {
                    let route = new Route(routeJson);
                    result.push(route);
                });
                return result;
            })
            .catch(err => console.error(err));
    }

    checkStatus(res) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res;
        } else {
            throw Error(res.statusText);
        }
    }


}

class AirQualityService {
    constructor() {
    }

    getPoints(listOfPoints) { //Array {latitude, longitude}
        return fetch('http://smeur.tel.fer.hr:8823/smeur/interpolation', {
            method: 'post',
            body:    JSON.stringify(listOfPoints),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(this.checkStatus)
            .then(res => res.json())
            .then(json => {
                console.log(json);
            })
            .catch(err => console.error(err));
    }

    checkStatus(res) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res;
        } else {
            throw Error(res.statusText);
        }
    }

}

export { RoutingService, Point, Route, AirQualityService }
