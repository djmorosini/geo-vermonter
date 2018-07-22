function createRandomPoint() {
    let latitude = Math.random() * (2.267) + 42.7395;
    let longitude = Math.random() * (-1.8165) - 71.5489;

    return new PointInVermont(latitude, longitude)
}
class PointInVermont {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    latLong() {
        return [this.latitude, this.longitude].join(',');
    }
    longLat() {
        return [this.longitude, this.latitude].join(',');
    }
    fetchCounty(callback) {
        fetch("https://nominatim.openstreetmap.org/search.php?q=" + this.latLong() + "&format=json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.fullAddress = data[0].display_name
                let county = extractCounty(this.fullAddress)
                if (county) {
                    this.county = county
                    console.log("got county: " + this.county)
                    if (callback) {
                        callback(county);
                    }

                } else {
                    console.log("Fetch county failed!")
                }
            });
    }
}