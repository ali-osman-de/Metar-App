const apiData = {
  results: 1,
  data: [
    {
      icao: "KJFK",
      barometer: {
        hg: 29.86,
        hpa: 1011.0,
        kpa: 101.12,
        mb: 1011.18,
      },
      ceiling: {
        feet: 4800,
        meters: 1463,
      },
      clouds: [
        {
          base_feet_agl: 2700,
          base_meters_agl: 823,
          code: "FEW",
          text: "Few",
          feet: 2700,
          meters: 823,
        },
        {
          base_feet_agl: 4800,
          base_meters_agl: 1463,
          code: "BKN",
          text: "Broken",
          feet: 4800,
          meters: 1463,
        },
        {
          base_feet_agl: 10000,
          base_meters_agl: 3048,
          code: "BKN",
          text: "Broken",
          feet: 10000,
          meters: 3048,
        },
        {
          base_feet_agl: 14000,
          base_meters_agl: 4267,
          code: "OVC",
          text: "Overcast",
          feet: 14000,
          meters: 4267,
        },
      ],
      dewpoint: {
        celsius: 4,
        fahrenheit: 39,
      },
      elevation: {
        feet: 10.0,
        meters: 3.0,
      },
      flight_category: "VFR",
      humidity: {
        percent: 76,
      },
      observed: "2024-01-13T01:51:00",
      station: {
        geometry: {
          coordinates: [-73.779317, 40.639447],
          type: "Point",
        },
        location: "New York, New York, United States",
        name: "John F Kennedy International Airport",
        type: "Airport",
      },
      temperature: {
        celsius: 8,
        fahrenheit: 46,
      },
      raw_text:
        "KJFK 130151Z 10018G26KT 10SM FEW027 BKN048 BKN100 OVC140 08/04 A2986 RMK AO2 PK WND 10026/0149 PRESFR SLP111 T00780044",
      visibility: {
        miles: "Greater than 10",
        miles_float: 10.0,
        meters: "16,100",
        meters_float: 16100.0,
      },
      wind: {
        degrees: 100,
        speed_kph: 33,
        speed_kts: 18,
        speed_mph: 21,
        speed_mps: 9,
        gust_kph: 48,
        gust_kts: 26,
        gust_mph: 30,
        gust_mps: 13,
      },
    },
  ],
};

export default apiData;
