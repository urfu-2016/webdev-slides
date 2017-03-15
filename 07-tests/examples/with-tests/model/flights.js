class Flights {
    constructor(flights) {
        this._flights = flights;
    }

    findByCity(city) {
        city = city.toLowerCase();

        return this._flights.filter(flight => {
            return city === flight.from.toLowerCase() ||
                   city === flight.to.toLowerCase();
        });
    }
}

module.exports = Flights;
