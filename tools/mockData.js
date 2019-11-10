const courses = [
  {
    id: 1,
    title: "FakeAPI"
  },
  {
    id: 2,
    title: "FakeAPI"
  }
];

const logs = [
  { id: 1, name: "Omkar" }
];

const forecast = {
	"cod": "200",
	"message": 0.0072,
	"cnt": 40,
	"list": [{
		"dt": 1570460400,
		"main": {
			"temp": 298.46,
			"temp_min": 298.46,
			"temp_max": 301.098,
			"pressure": 1010.74,
			"sea_level": 1010.74,
			"grnd_level": 987.05,
			"humidity": 39,
			"temp_kf": -2.64
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.39,
			"deg": 332.126
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-07 15:00:00"
	}, {
		"dt": 1570471200,
		"main": {
			"temp": 297.62,
			"temp_min": 297.62,
			"temp_max": 299.6,
			"pressure": 1010.1,
			"sea_level": 1010.1,
			"grnd_level": 986.24,
			"humidity": 43,
			"temp_kf": -1.98
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 0.9,
			"deg": 29.055
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-07 18:00:00"
	}, {
		"dt": 1570482000,
		"main": {
			"temp": 296.53,
			"temp_min": 296.53,
			"temp_max": 297.854,
			"pressure": 1009.39,
			"sea_level": 1009.39,
			"grnd_level": 985.67,
			"humidity": 49,
			"temp_kf": -1.32
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 1.08,
			"deg": 66.489
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-07 21:00:00"
	}, {
		"dt": 1570492800,
		"main": {
			"temp": 296.42,
			"temp_min": 296.42,
			"temp_max": 297.08,
			"pressure": 1009.14,
			"sea_level": 1009.14,
			"grnd_level": 985.27,
			"humidity": 50,
			"temp_kf": -0.66
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 1.01,
			"deg": 317.175
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-08 00:00:00"
	}, {
		"dt": 1570503600,
		"main": {
			"temp": 299.819,
			"temp_min": 299.819,
			"temp_max": 299.819,
			"pressure": 1011.54,
			"sea_level": 1011.54,
			"grnd_level": 987.54,
			"humidity": 43,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 1.69,
			"deg": 305.542
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-08 03:00:00"
	}, {
		"dt": 1570514400,
		"main": {
			"temp": 304.563,
			"temp_min": 304.563,
			"temp_max": 304.563,
			"pressure": 1010.81,
			"sea_level": 1010.81,
			"grnd_level": 986.9,
			"humidity": 30,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.66,
			"deg": 314.253
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-08 06:00:00"
	}, {
		"dt": 1570525200,
		"main": {
			"temp": 306.8,
			"temp_min": 306.8,
			"temp_max": 306.8,
			"pressure": 1008.33,
			"sea_level": 1008.33,
			"grnd_level": 984.45,
			"humidity": 22,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 3.1,
			"deg": 306.822
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-08 09:00:00"
	}, {
		"dt": 1570536000,
		"main": {
			"temp": 304.633,
			"temp_min": 304.633,
			"temp_max": 304.633,
			"pressure": 1007.08,
			"sea_level": 1007.08,
			"grnd_level": 983.59,
			"humidity": 25,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 1.65,
			"deg": 310.416
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-08 12:00:00"
	}, {
		"dt": 1570546800,
		"main": {
			"temp": 301.2,
			"temp_min": 301.2,
			"temp_max": 301.2,
			"pressure": 1008.93,
			"sea_level": 1008.93,
			"grnd_level": 985.18,
			"humidity": 27,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 0.86,
			"deg": 331.596
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-08 15:00:00"
	}, {
		"dt": 1570557600,
		"main": {
			"temp": 299.4,
			"temp_min": 299.4,
			"temp_max": 299.4,
			"pressure": 1008.87,
			"sea_level": 1008.87,
			"grnd_level": 985.21,
			"humidity": 30,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 1.3,
			"deg": 141.154
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-08 18:00:00"
	}, {
		"dt": 1570568400,
		"main": {
			"temp": 298.671,
			"temp_min": 298.671,
			"temp_max": 298.671,
			"pressure": 1008.69,
			"sea_level": 1008.69,
			"grnd_level": 985.04,
			"humidity": 31,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 1.49,
			"deg": 131.002
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-08 21:00:00"
	}, {
		"dt": 1570579200,
		"main": {
			"temp": 297.35,
			"temp_min": 297.35,
			"temp_max": 297.35,
			"pressure": 1008.93,
			"sea_level": 1008.93,
			"grnd_level": 985.22,
			"humidity": 36,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.08,
			"deg": 127.436
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-09 00:00:00"
	}, {
		"dt": 1570590000,
		"main": {
			"temp": 300.767,
			"temp_min": 300.767,
			"temp_max": 300.767,
			"pressure": 1011,
			"sea_level": 1011,
			"grnd_level": 986.98,
			"humidity": 32,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.71,
			"deg": 157.983
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-09 03:00:00"
	}, {
		"dt": 1570600800,
		"main": {
			"temp": 307.054,
			"temp_min": 307.054,
			"temp_max": 307.054,
			"pressure": 1010.6,
			"sea_level": 1010.6,
			"grnd_level": 986.55,
			"humidity": 20,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 1.62,
			"deg": 264.36
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-09 06:00:00"
	}, {
		"dt": 1570611600,
		"main": {
			"temp": 308.5,
			"temp_min": 308.5,
			"temp_max": 308.5,
			"pressure": 1007.75,
			"sea_level": 1007.75,
			"grnd_level": 983.89,
			"humidity": 17,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.59,
			"deg": 296.426
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-09 09:00:00"
	}, {
		"dt": 1570622400,
		"main": {
			"temp": 306,
			"temp_min": 306,
			"temp_max": 306,
			"pressure": 1006.11,
			"sea_level": 1006.11,
			"grnd_level": 982.28,
			"humidity": 21,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 1.64,
			"deg": 240.242
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-09 12:00:00"
	}, {
		"dt": 1570633200,
		"main": {
			"temp": 302.041,
			"temp_min": 302.041,
			"temp_max": 302.041,
			"pressure": 1007.58,
			"sea_level": 1007.58,
			"grnd_level": 983.77,
			"humidity": 24,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.34,
			"deg": 53.91
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-09 15:00:00"
	}, {
		"dt": 1570644000,
		"main": {
			"temp": 299.7,
			"temp_min": 299.7,
			"temp_max": 299.7,
			"pressure": 1007.78,
			"sea_level": 1007.78,
			"grnd_level": 983.93,
			"humidity": 36,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 3.29,
			"deg": 107.961
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-09 18:00:00"
	}, {
		"dt": 1570654800,
		"main": {
			"temp": 298.153,
			"temp_min": 298.153,
			"temp_max": 298.153,
			"pressure": 1007.58,
			"sea_level": 1007.58,
			"grnd_level": 983.76,
			"humidity": 44,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 3.09,
			"deg": 97.304
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-09 21:00:00"
	}, {
		"dt": 1570665600,
		"main": {
			"temp": 297.263,
			"temp_min": 297.263,
			"temp_max": 297.263,
			"pressure": 1007.56,
			"sea_level": 1007.56,
			"grnd_level": 983.3,
			"humidity": 40,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.99,
			"deg": 150.552
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-10 00:00:00"
	}, {
		"dt": 1570676400,
		"main": {
			"temp": 300.466,
			"temp_min": 300.466,
			"temp_max": 300.466,
			"pressure": 1010.23,
			"sea_level": 1010.23,
			"grnd_level": 985.79,
			"humidity": 32,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.22,
			"deg": 132.312
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-10 03:00:00"
	}, {
		"dt": 1570687200,
		"main": {
			"temp": 307.108,
			"temp_min": 307.108,
			"temp_max": 307.108,
			"pressure": 1009.77,
			"sea_level": 1009.77,
			"grnd_level": 985.48,
			"humidity": 19,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 0.39,
			"deg": 141.432
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-10 06:00:00"
	}, {
		"dt": 1570698000,
		"main": {
			"temp": 309.153,
			"temp_min": 309.153,
			"temp_max": 309.153,
			"pressure": 1007.28,
			"sea_level": 1007.28,
			"grnd_level": 983.32,
			"humidity": 14,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 3.31,
			"deg": 331.54
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-10 09:00:00"
	}, {
		"dt": 1570708800,
		"main": {
			"temp": 305.986,
			"temp_min": 305.986,
			"temp_max": 305.986,
			"pressure": 1006.16,
			"sea_level": 1006.16,
			"grnd_level": 982.4,
			"humidity": 20,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 1.68,
			"deg": 1.432
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-10 12:00:00"
	}, {
		"dt": 1570719600,
		"main": {
			"temp": 301.129,
			"temp_min": 301.129,
			"temp_max": 301.129,
			"pressure": 1007.79,
			"sea_level": 1007.79,
			"grnd_level": 984.16,
			"humidity": 33,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 3.28,
			"deg": 43.751
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-10 15:00:00"
	}, {
		"dt": 1570730400,
		"main": {
			"temp": 299.342,
			"temp_min": 299.342,
			"temp_max": 299.342,
			"pressure": 1007.91,
			"sea_level": 1007.91,
			"grnd_level": 984.03,
			"humidity": 44,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 3.28,
			"deg": 84.946
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-10 18:00:00"
	}, {
		"dt": 1570741200,
		"main": {
			"temp": 298.085,
			"temp_min": 298.085,
			"temp_max": 298.085,
			"pressure": 1007.47,
			"sea_level": 1007.47,
			"grnd_level": 983.73,
			"humidity": 49,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.2,
			"deg": 95.949
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-10 21:00:00"
	}, {
		"dt": 1570752000,
		"main": {
			"temp": 297.141,
			"temp_min": 297.141,
			"temp_max": 297.141,
			"pressure": 1007.76,
			"sea_level": 1007.76,
			"grnd_level": 983.81,
			"humidity": 52,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 1.62,
			"deg": 108.234
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-11 00:00:00"
	}, {
		"dt": 1570762800,
		"main": {
			"temp": 300.627,
			"temp_min": 300.627,
			"temp_max": 300.627,
			"pressure": 1009.39,
			"sea_level": 1009.39,
			"grnd_level": 985.33,
			"humidity": 43,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 0.93,
			"deg": 97.546
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-11 03:00:00"
	}, {
		"dt": 1570773600,
		"main": {
			"temp": 305.593,
			"temp_min": 305.593,
			"temp_max": 305.593,
			"pressure": 1008.97,
			"sea_level": 1008.97,
			"grnd_level": 984.89,
			"humidity": 29,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.28,
			"deg": 46.71
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-11 06:00:00"
	}, {
		"dt": 1570784400,
		"main": {
			"temp": 308.212,
			"temp_min": 308.212,
			"temp_max": 308.212,
			"pressure": 1006.48,
			"sea_level": 1006.48,
			"grnd_level": 982.78,
			"humidity": 18,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 3.77,
			"deg": 350.153
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-11 09:00:00"
	}, {
		"dt": 1570795200,
		"main": {
			"temp": 305.15,
			"temp_min": 305.15,
			"temp_max": 305.15,
			"pressure": 1005.38,
			"sea_level": 1005.38,
			"grnd_level": 981.83,
			"humidity": 24,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 3.04,
			"deg": 46.053
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-11 12:00:00"
	}, {
		"dt": 1570806000,
		"main": {
			"temp": 301.075,
			"temp_min": 301.075,
			"temp_max": 301.075,
			"pressure": 1006.82,
			"sea_level": 1006.82,
			"grnd_level": 982.92,
			"humidity": 29,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 3.73,
			"deg": 90.046
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-11 15:00:00"
	}, {
		"dt": 1570816800,
		"main": {
			"temp": 299.505,
			"temp_min": 299.505,
			"temp_max": 299.505,
			"pressure": 1007.31,
			"sea_level": 1007.31,
			"grnd_level": 983.28,
			"humidity": 33,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.63,
			"deg": 106.672
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-11 18:00:00"
	}, {
		"dt": 1570827600,
		"main": {
			"temp": 298.044,
			"temp_min": 298.044,
			"temp_max": 298.044,
			"pressure": 1007.03,
			"sea_level": 1007.03,
			"grnd_level": 983,
			"humidity": 38,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 1.96,
			"deg": 110.303
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-11 21:00:00"
	}, {
		"dt": 1570838400,
		"main": {
			"temp": 297.304,
			"temp_min": 297.304,
			"temp_max": 297.304,
			"pressure": 1007.66,
			"sea_level": 1007.66,
			"grnd_level": 983.61,
			"humidity": 42,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.32,
			"deg": 164.526
		},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2019-10-12 00:00:00"
	}, {
		"dt": 1570849200,
		"main": {
			"temp": 301.334,
			"temp_min": 301.334,
			"temp_max": 301.334,
			"pressure": 1010.05,
			"sea_level": 1010.05,
			"grnd_level": 985.52,
			"humidity": 34,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.5,
			"deg": 157.658
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-12 03:00:00"
	}, {
		"dt": 1570860000,
		"main": {
			"temp": 307.484,
			"temp_min": 307.484,
			"temp_max": 307.484,
			"pressure": 1010.03,
			"sea_level": 1010.03,
			"grnd_level": 985.52,
			"humidity": 19,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.66,
			"deg": 180.905
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-12 06:00:00"
	}, {
		"dt": 1570870800,
		"main": {
			"temp": 309.382,
			"temp_min": 309.382,
			"temp_max": 309.382,
			"pressure": 1007.28,
			"sea_level": 1007.28,
			"grnd_level": 982.96,
			"humidity": 16,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 1.19,
			"deg": 67.473
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-12 09:00:00"
	}, {
		"dt": 1570881600,
		"main": {
			"temp": 306.155,
			"temp_min": 306.155,
			"temp_max": 306.155,
			"pressure": 1006.99,
			"sea_level": 1006.99,
			"grnd_level": 983.2,
			"humidity": 23,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 2.92,
			"deg": 64.294
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2019-10-12 12:00:00"
	}],
	"city": {
		"id": 1270260,
		"name": "State of Haryāna",
		"coord": {
			"lat": 29,
			"lon": 76
		},
		"country": "IN",
		"timezone": 19800,
		"sunrise": 1570409512,
		"sunset": 1570451753
	}
}

const cities = [
    {
      "id": 1270260,
      "name": "Pune",
      "country": "IN",
      "coord": {
        "lon": 76,
        "lat": 29
      }
    },
    {
      "id": 1269750,
      "name": "Sangole",
      "country": "IN",
      "coord": {
        "lon": 77,
        "lat": 20
      }
    },
    {
      "id": 1271231,
      "name": "Solapur",
      "country": "IN",
      "coord": {
        "lon": 79.883331,
        "lat": 24.766666
      }
    },
    {
      "id": 1257986,
      "name": "Mumbai",
      "country": "IN",
      "coord": {
        "lon": 77.416664,
        "lat": 34.049999
      }
    },
    {
      "id": 1348747,
      "name": "Delhi",
      "country": "IN",
      "coord": {
        "lon": 88.298058,
        "lat": 22.627501
      }
    },
    {
      "id": 1252738,
      "name": "Chennai",
      "country": "IN",
      "coord": {
        "lon": 74.48333,
        "lat": 20.033331
      }
    },
    {
      "id": 1252744,
      "name": "New York",
      "country": "USA",
      "coord": {
        "lon": 74.716667,
        "lat": 14.96667
      }
    },
    {
      "id": 1252773,
      "name": "Hartford",
      "country": "USA",
      "coord": {
        "lon": 75.699997,
        "lat": 21.16667
      }
    },
    {
      "id": 1252840,
      "name": "London",
      "country": "UK",
      "coord": {
        "lon": 94.26667,
        "lat": 26.1
      }
    },
    {
      "id": 1252925,
      "name": "Thane",
      "country": "IN",
      "coord": {
        "lon": 79,
        "lat": 20.23333
      }
    },
    {
      "id": 1252946,
      "name": "Kolkata",
      "country": "IN",
      "coord": {
        "lon": 80.033333,
        "lat": 21.75
      }
    },
    {
      "id": 1253041,
      "name": "Panaji",
      "country": "IN",
      "coord": {
        "lon": 76.98333,
        "lat": 17.066669
      }
    },
    {
      "id": 1253132,
      "name": "Virarajendrapet",
      "country": "IN",
      "coord": {
        "lon": 75.800003,
        "lat": 12.2
      }
    },
    {
      "id": 1253133,
      "name": "Virar",
      "country": "IN",
      "coord": {
        "lon": 72.800003,
        "lat": 19.466669
      }
    },
    {
      "id": 1253219,
      "name": "Vettaikkaranpudur",
      "country": "IN",
      "coord": {
        "lon": 76.933327,
        "lat": 10.56667
      }
    },
    {
      "id": 1253330,
      "name": "Vedaraniyam",
      "country": "IN",
      "coord": {
        "lon": 79.849998,
        "lat": 10.36667
      }
    },
    {
      "id": 1253340,
      "name": "Vayalar",
      "country": "IN",
      "coord": {
        "lon": 76.333328,
        "lat": 9.7
      }
    },
    {
      "id": 1253357,
      "name": "Vasudevanallur",
      "country": "IN",
      "coord": {
        "lon": 77.416672,
        "lat": 9.23333
      }
    },
    {
      "id": 1253605,
      "name": "Vadakku Valliyur",
      "country": "IN",
      "coord": {
        "lon": 77.650002,
        "lat": 8.38333
      }
    },
    {
      "id": 1253671,
      "name": "Usilampatti",
      "country": "IN",
      "coord": {
        "lon": 77.800003,
        "lat": 9.96667
      }
    },
    {
      "id": 1253698,
      "name": "Uravakonda",
      "country": "IN",
      "coord": {
        "lon": 77.26667,
        "lat": 14.95
      }
    },
    {
      "id": 1253702,
      "name": "Uran",
      "country": "IN",
      "coord": {
        "lon": 72.93972,
        "lat": 18.87694
      }
    },
    {
      "id": 1253736,
      "name": "Upleta",
      "country": "IN",
      "coord": {
        "lon": 70.283333,
        "lat": 21.73333
      }
    }
  ]


// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  courses,
  logs,
  forecast,
  cities
};
