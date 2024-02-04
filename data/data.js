export const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

export const locations = [
  {
    location: "Calexico",
    cookies_each_hour: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
  },
  {
    location: "Barcelona",
    cookies_each_hour: [
      95, 95, 60, 95, 90, 50, 100, 55, 65, 80, 90, 95, 50, 70,
    ],
  },
  {
    location: "Vancouver",
    cookies_each_hour: [30, 20, 30, 20, 20, 25, 30, 35, 40, 20, 20, 45, 35, 30],
  },
  {
    location: "Milano",
    cookies_each_hour: [19, 9, 25, 25, 28, 19, 28, 19, 9, 9, 22, 19, 9, 25],
  },
  {
    location: "Detroit",
    cookies_each_hour: [70, 77, 62, 81, 92, 77, 62, 88, 85, 70, 77, 92, 66, 88],
  },
  {
    location: "Addis Ababa",
    cookies_each_hour: [51, 33, 25, 66, 51, 66, 37, 40, 29, 66, 18, 33, 55, 22],
  },
  {
    location: "Dublin",
    cookies_each_hour: [30, 13, 57, 13, 54, 34, 57, 17, 64, 64, 17, 27, 27, 57],
  },
  {
    location: "Tacoma",
    cookies_each_hour: [33, 44, 14, 33, 44, 18, 25, 40, 44, 29, 37, 25, 25, 37],
  },
];

export const api_locations = [
  {
      "id": 7,
      "location": "monas",
      "description": "s",
      "hourly_sales": [
          4,
          4,
          6,
          4,
          2,
          2,
          6,
          6,
          6,
          2,
          4,
          4,
          2,
          6
      ],
      "minimum_customers_per_hour": 1,
      "maximum_customers_per_hour": 3,
      "average_cookies_per_sale": 2,
      "owner": null
  },
  {
      "id": 8,
      "location": "provo",
      "description": "a",
      "hourly_sales": [
          4,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          4,
          6,
          4,
          4,
          4,
          4
      ],
      "minimum_customers_per_hour": 2,
      "maximum_customers_per_hour": 3,
      "average_cookies_per_sale": 2,
      "owner": 1
  }
];