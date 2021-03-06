import {AirQualityService, Segment} from "./RoutingService";
import _ from 'lodash'

class AirQualityRoutingService {

    addAirQualityInfo(routes) {

        let promises = _.map(routes, (route) => {
          return new AirQualityService().getPoints(route.points).then(pointsWithAirQuality => {
              console.log('addAirQualityInfo');
              route.segments = this.buildSegmentsByAQ(pointsWithAirQuality);
              route.airQualityLevelMax = _.maxBy(route.segments, 'level');
            return route;
            }
          ).catch(err => console.error(err));
        });

        return Promise.all(promises);
    }

    buildSegmentsByAQ(pointsWithAirQuality) {
        let segments = [];
        let segment = null;
        for (let i = 1; i < pointsWithAirQuality.length; i++) {
            let p1 = pointsWithAirQuality[i - 1];
            let p2 = pointsWithAirQuality[i];
            let newLevel = AirQualityRoutingService.computeLevel(p1, p2);
            if (segment === null) {
                segment = new Segment([], newLevel);
                segments.push(segment);
                segment.addPoint(p1);
                segment.addPoint(p2);
            } else if (newLevel !== segment.level) {
                segment = new Segment([], newLevel);
                segments.push(segment);
                segment.addPoint(p1);
                segment.addPoint(p2);
            } else {
                segment.addPoint(p2);
            }
        }
      return segments;
    }

    static computeLevel(p1, p2) {
        let avgValue = (p1.NO2_AQI + p2.NO2_AQI) / 2;
        if (avgValue <= 25) {
            return 1;
        } else if (avgValue <= 50) {
            return 2;
        } else if (avgValue <= 75) {
            return 3;
        } else if (avgValue <= 100) {
            return 4;
        } else if (avgValue <= 125) {
          return 4;
        } else {
            return 6;
        }
    }
}

export {AirQualityRoutingService}
