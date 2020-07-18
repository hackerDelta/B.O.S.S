const db = require('../server/db');
const { Business, User, Comment } = require('../server/db/models');

const businessesToCreate = [
  {
    id: 'zyyT2yiyxxamC-jKc0v-fg',
    alias: 'omars-kitchen-and-rum-bar-new-york',
    name: "Omar's Kitchen and Rum Bar",
    image_url:
      'https://s3-media2.fl.yelpcdn.com/bphoto/3wyLFJ6QbIFnfoH91PTx5g/o.jpg',
    is_claimed: true,
    is_closed: false,
    url:
      'https://www.yelp.com/biz/omars-kitchen-and-rum-bar-new-york?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    phone: '',
    display_phone: '',
    review_count: 51,
    categories: [
      {
        alias: 'caribbean',
        title: 'Caribbean'
      },
      {
        alias: 'bars',
        title: 'Bars'
      }
    ],
    rating: 4.5,
    location: {
      address1: '29A Clinton St',
      address2: null,
      address3: '',
      city: 'New York',
      zip_code: '10002',
      country: 'US',
      state: 'NY',
      display_address: ['29A Clinton St', 'New York, NY 10002'],
      cross_streets: 'Avenue B & Houston St'
    },
    coordinates: {
      latitude: 40.720422,
      longitude: -73.984525
    },
    photos: [
      'https://s3-media2.fl.yelpcdn.com/bphoto/3wyLFJ6QbIFnfoH91PTx5g/o.jpg',
      'https://s3-media1.fl.yelpcdn.com/bphoto/FVf6289UCebVr18mv4IeZw/o.jpg',
      'https://s3-media3.fl.yelpcdn.com/bphoto/9TMPlVb3DxHmjOTw0rX4fg/o.jpg'
    ],
    hours: [
      {
        open: [
          {
            is_overnight: false,
            start: '1200',
            end: '2100',
            day: 3
          },
          {
            is_overnight: false,
            start: '1200',
            end: '2100',
            day: 4
          },
          {
            is_overnight: false,
            start: '1200',
            end: '2100',
            day: 5
          },
          {
            is_overnight: false,
            start: '1200',
            end: '2100',
            day: 6
          }
        ],
        hours_type: 'REGULAR',
        is_open_now: false
      }
    ],
    transactions: ['pickup', 'delivery'],
    messaging: {
      url:
        'https://www.yelp.com/raq/zyyT2yiyxxamC-jKc0v-fg?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=J7IMkJ2w8f6XnRyefZ8zlA#popup%3Araq',
      use_case_text: 'Message the Business'
    }
  },
  {
    id: 'IPh4H0AfWk5LVplgYV9OGQ',
    alias: 'black-nile-brooklyn-2',
    name: 'Black Nile',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/Dulq5zYAMQ8XgWIw5T4ImA/o.jpg',
    is_claimed: true,
    is_closed: false,
    url:
      'https://www.yelp.com/biz/black-nile-brooklyn-2?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    phone: '+13478798911',
    display_phone: '(347) 879-8911',
    review_count: 184,
    categories: [
      {
        alias: 'seafood',
        title: 'Seafood'
      },
      {
        alias: 'soulfood',
        title: 'Soul Food'
      },
      {
        alias: 'halal',
        title: 'Halal'
      }
    ],
    rating: 4.5,
    location: {
      address1: '592 Nostrand Ave',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11216',
      country: 'US',
      state: 'NY',
      display_address: ['592 Nostrand Ave', 'Brooklyn, NY 11216'],
      cross_streets: 'Dean St & Atlantic Ave'
    },
    coordinates: {
      latitude: 40.67823,
      longitude: -73.94998
    },
    photos: [
      'https://s3-media3.fl.yelpcdn.com/bphoto/Dulq5zYAMQ8XgWIw5T4ImA/o.jpg',
      'https://s3-media3.fl.yelpcdn.com/bphoto/ovJq8gi5VWQQfaZRBwj2-g/o.jpg',
      'https://s3-media2.fl.yelpcdn.com/bphoto/SQLERBwkHITEajBK47a7YA/o.jpg'
    ],
    price: '$$',
    hours: [
      {
        open: [
          {
            is_overnight: false,
            start: '1500',
            end: '2100',
            day: 2
          },
          {
            is_overnight: false,
            start: '1500',
            end: '2100',
            day: 3
          },
          {
            is_overnight: false,
            start: '1500',
            end: '2100',
            day: 4
          },
          {
            is_overnight: false,
            start: '1500',
            end: '2100',
            day: 5
          },
          {
            is_overnight: false,
            start: '1500',
            end: '2000',
            day: 6
          }
        ],
        hours_type: 'REGULAR',
        is_open_now: false
      }
    ],
    transactions: ['delivery', 'pickup']
  },
  {
    id: 'X3ToKHjzofO8EzfiHYewWg',
    alias: 'brooklyn-blend-brooklyn',
    name: 'Brooklyn Blend',
    image_url:
      'https://s3-media4.fl.yelpcdn.com/bphoto/Yb3HbBioFUmJCxzW4nT_lg/o.jpg',
    is_claimed: true,
    is_closed: false,
    url:
      'https://www.yelp.com/biz/brooklyn-blend-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    phone: '+17184842247',
    display_phone: '(718) 484-2247',
    review_count: 300,
    categories: [
      {
        alias: 'newamerican',
        title: 'American (New)'
      },
      {
        alias: 'juicebars',
        title: 'Juice Bars & Smoothies'
      },
      {
        alias: 'coffee',
        title: 'Coffee & Tea'
      }
    ],
    rating: 4.5,
    location: {
      address1: '194 Tompkins Ave',
      address2: '',
      address3: '',
      city: 'Brooklyn',
      zip_code: '11206',
      country: 'US',
      state: 'NY',
      display_address: ['194 Tompkins Ave', 'Brooklyn, NY 11206'],
      cross_streets: 'Pulaski St & Dekalb Ave'
    },
    coordinates: {
      latitude: 40.6923440819487,
      longitude: -73.9458492169658
    },
    photos: [
      'https://s3-media4.fl.yelpcdn.com/bphoto/Yb3HbBioFUmJCxzW4nT_lg/o.jpg',
      'https://s3-media4.fl.yelpcdn.com/bphoto/OSdbpcOpVULaNXIpL38K1A/o.jpg',
      'https://s3-media3.fl.yelpcdn.com/bphoto/CoKqf_70jcdPE64psMVhqw/o.jpg'
    ],
    price: '$$',
    hours: [
      {
        open: [
          {
            is_overnight: false,
            start: '1000',
            end: '1800',
            day: 0
          },
          {
            is_overnight: false,
            start: '1000',
            end: '1800',
            day: 1
          },
          {
            is_overnight: false,
            start: '1000',
            end: '1800',
            day: 2
          },
          {
            is_overnight: false,
            start: '1000',
            end: '1800',
            day: 3
          },
          {
            is_overnight: false,
            start: '1000',
            end: '1800',
            day: 4
          },
          {
            is_overnight: false,
            start: '1000',
            end: '1800',
            day: 5
          },
          {
            is_overnight: false,
            start: '1000',
            end: '1700',
            day: 6
          }
        ],
        hours_type: 'REGULAR',
        is_open_now: true
      }
    ],
    transactions: ['delivery', 'pickup'],
    messaging: {
      url:
        'https://www.yelp.com/raq/X3ToKHjzofO8EzfiHYewWg?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=J7IMkJ2w8f6XnRyefZ8zlA#popup%3Araq',
      use_case_text: 'Message the Business'
    },
    special_hours: [
      {
        date: '2020-11-26',
        is_closed: true,
        start: null,
        end: null,
        is_overnight: null
      },
      {
        date: '2020-11-27',
        is_closed: true,
        start: null,
        end: null,
        is_overnight: null
      },
      {
        date: '2020-12-25',
        is_closed: true,
        start: null,
        end: null,
        is_overnight: null
      },
      {
        date: '2020-12-26',
        is_closed: true,
        start: null,
        end: null,
        is_overnight: null
      }
    ]
  },
  {
    id: '7lPqxohBRjnpJjvNjRQUoA',
    alias: 'sip-unwine-brooklyn',
    name: 'Sip Unwine',
    image_url:
      'https://s3-media1.fl.yelpcdn.com/bphoto/0YjkZFNaRYeoX7iECvbcBw/o.jpg',
    is_claimed: true,
    is_closed: false,
    url:
      'https://www.yelp.com/biz/sip-unwine-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    phone: '+17185766424',
    display_phone: '(718) 576-6424',
    review_count: 151,
    categories: [
      {
        alias: 'wine_bars',
        title: 'Wine Bars'
      },
      {
        alias: 'cocktailbars',
        title: 'Cocktail Bars'
      },
      {
        alias: 'caribbean',
        title: 'Caribbean'
      }
    ],
    rating: 4.0,
    location: {
      address1: '1197 Flatbush Ave',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11226',
      country: 'US',
      state: 'NY',
      display_address: ['1197 Flatbush Ave', 'Brooklyn, NY 11226'],
      cross_streets: 'Vanderveer Pl & Ditmas Ave'
    },
    coordinates: {
      latitude: 40.64101,
      longitude: -73.95592
    },
    photos: [
      'https://s3-media1.fl.yelpcdn.com/bphoto/0YjkZFNaRYeoX7iECvbcBw/o.jpg',
      'https://s3-media4.fl.yelpcdn.com/bphoto/GgHy1wEaQ15T5VGkhGU0Ow/o.jpg',
      'https://s3-media1.fl.yelpcdn.com/bphoto/MrwmGYdJE5OuIUsakDtdaQ/o.jpg'
    ],
    price: '$$',
    hours: [
      {
        open: [
          {
            is_overnight: false,
            start: '1900',
            end: '0000',
            day: 0
          },
          {
            is_overnight: false,
            start: '1700',
            end: '0000',
            day: 1
          },
          {
            is_overnight: false,
            start: '1700',
            end: '0000',
            day: 2
          },
          {
            is_overnight: false,
            start: '1700',
            end: '0000',
            day: 3
          },
          {
            is_overnight: true,
            start: '1700',
            end: '0200',
            day: 4
          },
          {
            is_overnight: true,
            start: '1200',
            end: '0200',
            day: 5
          },
          {
            is_overnight: false,
            start: '1200',
            end: '2200',
            day: 6
          }
        ],
        hours_type: 'REGULAR',
        is_open_now: false
      }
    ],
    transactions: ['pickup', 'delivery']
  },
  {
    id: '7vqKC--s8iJ37QGitNhkeQ',
    alias: 'zanmi-brooklyn-2',
    name: 'Zanmi',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/GQL0MuRQj48FxDf_bTWEvA/o.jpg',
    is_claimed: true,
    is_closed: false,
    url:
      'https://www.yelp.com/biz/zanmi-brooklyn-2?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    phone: '+17186761047',
    display_phone: '(718) 676-1047',
    review_count: 24,
    categories: [
      {
        alias: 'haitian',
        title: 'Haitian'
      },
      {
        alias: 'tapasmallplates',
        title: 'Tapas/Small Plates'
      },
      {
        alias: 'sandwiches',
        title: 'Sandwiches'
      }
    ],
    rating: 5.0,
    location: {
      address1: '1206 Nostrand Ave',
      address2: null,
      address3: null,
      city: 'Brooklyn',
      zip_code: '11225',
      country: 'US',
      state: 'NY',
      display_address: ['1206 Nostrand Ave', 'Brooklyn, NY 11225'],
      cross_streets: 'Winthrop St & Hawthorne St'
    },
    coordinates: {
      latitude: 40.6579395,
      longitude: -73.9505773
    },
    photos: [
      'https://s3-media3.fl.yelpcdn.com/bphoto/GQL0MuRQj48FxDf_bTWEvA/o.jpg',
      'https://s3-media3.fl.yelpcdn.com/bphoto/EXjz_esMNtsCbTFVAtL5BQ/o.jpg',
      'https://s3-media4.fl.yelpcdn.com/bphoto/1I2ctrULaVK5toYqY47_OA/o.jpg'
    ],
    price: '$$',
    hours: [
      {
        open: [
          {
            is_overnight: false,
            start: '1100',
            end: '2300',
            day: 0
          },
          {
            is_overnight: false,
            start: '1100',
            end: '2300',
            day: 1
          },
          {
            is_overnight: false,
            start: '1100',
            end: '2300',
            day: 2
          },
          {
            is_overnight: false,
            start: '1100',
            end: '2300',
            day: 3
          },
          {
            is_overnight: false,
            start: '1100',
            end: '0000',
            day: 4
          },
          {
            is_overnight: false,
            start: '1100',
            end: '0000',
            day: 5
          },
          {
            is_overnight: false,
            start: '1100',
            end: '0000',
            day: 6
          }
        ],
        hours_type: 'REGULAR',
        is_open_now: true
      }
    ],
    transactions: ['delivery', 'pickup'],
    special_hours: [
      {
        date: '2020-07-07',
        is_closed: null,
        start: '1400',
        end: '2300',
        is_overnight: false
      }
    ]
  },
  {
    id: '9fWKxkCOV0Lc2ofx_wWm9A',
    alias: 'savvy-bistro-and-bar-brooklyn',
    name: 'Savvy Bistro and Bar',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/eveihjrZHjEE-3YC3TES_Q/o.jpg',
    is_claimed: true,
    is_closed: false,
    url:
      'https://www.yelp.com/biz/savvy-bistro-and-bar-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    phone: '+13475337880',
    display_phone: '(347) 533-7880',
    review_count: 88,
    categories: [
      {
        alias: 'caribbean',
        title: 'Caribbean'
      },
      {
        alias: 'bars',
        title: 'Bars'
      }
    ],
    rating: 4.0,
    location: {
      address1: '710 Nostrand Ave',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11216',
      country: 'US',
      state: 'NY',
      display_address: ['710 Nostrand Ave', 'Brooklyn, NY 11216'],
      cross_streets: 'Prospect Pl & Sterling Pl'
    },
    coordinates: {
      latitude: 40.67443,
      longitude: -73.95022
    },
    photos: [
      'https://s3-media3.fl.yelpcdn.com/bphoto/eveihjrZHjEE-3YC3TES_Q/o.jpg',
      'https://s3-media1.fl.yelpcdn.com/bphoto/f5mXgZaWGHj5teYa5X-5Lg/o.jpg',
      'https://s3-media3.fl.yelpcdn.com/bphoto/bRlAIshZyLTFfRxANE-AUQ/o.jpg'
    ],
    price: '$$',
    hours: [
      {
        open: [
          {
            is_overnight: false,
            start: '1300',
            end: '2100',
            day: 3
          },
          {
            is_overnight: false,
            start: '1300',
            end: '2100',
            day: 4
          },
          {
            is_overnight: false,
            start: '1300',
            end: '2100',
            day: 5
          },
          {
            is_overnight: false,
            start: '1300',
            end: '2100',
            day: 6
          }
        ],
        hours_type: 'REGULAR',
        is_open_now: false
      }
    ],
    transactions: ['delivery', 'pickup']
  },
  {
    id: 'unePwYAUWb7oC8RBt84e3A',
    alias: 'biyou-brooklyn',
    name: 'Biyou',
    image_url:
      'https://s3-media1.fl.yelpcdn.com/bphoto/09qSu-r8x5yuJS4u-CfRRw/o.jpg',
    is_claimed: true,
    is_closed: false,
    url:
      'https://www.yelp.com/biz/biyou-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    phone: '+17189287555',
    display_phone: '(718) 928-7555',
    review_count: 115,
    categories: [
      {
        alias: 'cajun',
        title: 'Cajun/Creole'
      },
      {
        alias: 'southern',
        title: 'Southern'
      }
    ],
    rating: 4.0,
    location: {
      address1: '198 Lewis Ave',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11221',
      country: 'US',
      state: 'NY',
      display_address: ['198 Lewis Ave', 'Brooklyn, NY 11221'],
      cross_streets: 'Greene Ave & Lexington Ave'
    },
    coordinates: {
      latitude: 40.68983,
      longitude: -73.93656
    },
    photos: [
      'https://s3-media3.fl.yelpcdn.com/bphoto/DBs7rZkwKUjuRyMSL2jDGA/o.jpg',
      'https://s3-media1.fl.yelpcdn.com/bphoto/09qSu-r8x5yuJS4u-CfRRw/o.jpg',
      'https://s3-media4.fl.yelpcdn.com/bphoto/y5aimrNiZfItxV3B8ogM7A/o.jpg'
    ],
    price: '$$',
    hours: [
      {
        open: [
          {
            is_overnight: false,
            start: '1200',
            end: '2200',
            day: 1
          },
          {
            is_overnight: false,
            start: '1200',
            end: '2200',
            day: 2
          },
          {
            is_overnight: false,
            start: '1200',
            end: '2200',
            day: 3
          },
          {
            is_overnight: false,
            start: '1200',
            end: '2300',
            day: 4
          },
          {
            is_overnight: false,
            start: '1130',
            end: '2300',
            day: 5
          },
          {
            is_overnight: false,
            start: '1130',
            end: '2100',
            day: 6
          }
        ],
        hours_type: 'REGULAR',
        is_open_now: true
      }
    ],
    transactions: ['pickup', 'delivery']
  },
  {
    id: 'hO1T1fG5f5FbvOP2124rpw',
    alias: 'negril-bk-brooklyn',
    name: 'Negril BK',
    image_url:
      'https://s3-media2.fl.yelpcdn.com/bphoto/f4dYwn8IbPlx4MTp8fKOrA/o.jpg',
    is_claimed: true,
    is_closed: false,
    url:
      'https://www.yelp.com/biz/negril-bk-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    phone: '+13477213801',
    display_phone: '(347) 721-3801',
    review_count: 570,
    categories: [
      {
        alias: 'caribbean',
        title: 'Caribbean'
      }
    ],
    rating: 4.0,
    location: {
      address1: '256 5th Ave',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11215',
      country: 'US',
      state: 'NY',
      display_address: ['256 5th Ave', 'Brooklyn, NY 11215'],
      cross_streets: 'Carroll St & Garfield Pl'
    },
    coordinates: {
      latitude: 40.67501,
      longitude: -73.98163
    },
    photos: [
      'https://s3-media2.fl.yelpcdn.com/bphoto/f4dYwn8IbPlx4MTp8fKOrA/o.jpg',
      'https://s3-media4.fl.yelpcdn.com/bphoto/ClEgpocq6HlwBHplSzRKWA/o.jpg',
      'https://s3-media1.fl.yelpcdn.com/bphoto/_bZ4ytcx0OuYNghIxxNd1A/o.jpg'
    ],
    price: '$$',
    hours: [
      {
        open: [
          {
            is_overnight: false,
            start: '1200',
            end: '2000',
            day: 1
          },
          {
            is_overnight: false,
            start: '1200',
            end: '2000',
            day: 2
          },
          {
            is_overnight: false,
            start: '1200',
            end: '2000',
            day: 3
          },
          {
            is_overnight: false,
            start: '1400',
            end: '2200',
            day: 4
          },
          {
            is_overnight: false,
            start: '1400',
            end: '2200',
            day: 5
          },
          {
            is_overnight: false,
            start: '1400',
            end: '2200',
            day: 6
          }
        ],
        hours_type: 'REGULAR',
        is_open_now: true
      }
    ],
    transactions: ['pickup', 'delivery']
  },
  {
    id: 'iputjd2Ki_RLG-AHI_yTGA',
    alias: 'cheris-bedstuy-brooklyn',
    name: "Cheri's Bedstuy",
    image_url:
      'https://s3-media2.fl.yelpcdn.com/bphoto/mOsOeKUmqlz-43hswKxxeA/o.jpg',
    is_claimed: false,
    is_closed: false,
    url:
      'https://www.yelp.com/biz/cheris-bedstuy-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    phone: '+13475295729',
    display_phone: '(347) 529-5729',
    review_count: 80,
    categories: [
      {
        alias: 'southern',
        title: 'Southern'
      },
      {
        alias: 'seafood',
        title: 'Seafood'
      },
      {
        alias: 'breakfast_brunch',
        title: 'Breakfast & Brunch'
      }
    ],
    rating: 4.5,
    location: {
      address1: '216 Malcolm X Blvd',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11221',
      country: 'US',
      state: 'NY',
      display_address: ['216 Malcolm X Blvd', 'Brooklyn, NY 11221'],
      cross_streets: 'Jefferson Ave & Putnam Ave'
    },
    coordinates: {
      latitude: 40.68585,
      longitude: -73.92978
    },
    photos: [
      'https://s3-media2.fl.yelpcdn.com/bphoto/mOsOeKUmqlz-43hswKxxeA/o.jpg',
      'https://s3-media2.fl.yelpcdn.com/bphoto/mkPsr2eh20-6VKydejI5rQ/o.jpg',
      'https://s3-media3.fl.yelpcdn.com/bphoto/3eH4_6Iwv8XG_kVuJ3e46w/o.jpg'
    ],
    price: '$$',
    hours: [
      {
        open: [
          {
            is_overnight: false,
            start: '1130',
            end: '2200',
            day: 2
          },
          {
            is_overnight: false,
            start: '1130',
            end: '2200',
            day: 3
          },
          {
            is_overnight: false,
            start: '1130',
            end: '2200',
            day: 4
          },
          {
            is_overnight: false,
            start: '1000',
            end: '2300',
            day: 5
          },
          {
            is_overnight: false,
            start: '1000',
            end: '2000',
            day: 6
          }
        ],
        hours_type: 'REGULAR',
        is_open_now: false
      }
    ],
    transactions: ['pickup', 'delivery']
  },
  {
    id: 'JXsHJfBAKZT0fG8XkA9Kzw',
    alias: 'sweet-science-brooklyn',
    name: 'Sweet Science',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/yhADILytHbX27QT2smZ3Lw/o.jpg',
    is_claimed: true,
    is_closed: false,
    url:
      'https://www.yelp.com/biz/sweet-science-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    phone: '+13477630872',
    display_phone: '(347) 763-0872',
    review_count: 567,
    categories: [
      {
        alias: 'bars',
        title: 'Bars'
      },
      {
        alias: 'burgers',
        title: 'Burgers'
      },
      {
        alias: 'newamerican',
        title: 'American (New)'
      }
    ],
    rating: 3.5,
    location: {
      address1: '135 Graham Ave',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11206',
      country: 'US',
      state: 'NY',
      display_address: ['135 Graham Ave', 'Brooklyn, NY 11206'],
      cross_streets: 'Boerum St & Johnson Ave'
    },
    coordinates: {
      latitude: 40.7063841819763,
      longitude: -73.9431119710207
    },
    photos: [
      'https://s3-media3.fl.yelpcdn.com/bphoto/yhADILytHbX27QT2smZ3Lw/o.jpg',
      'https://s3-media2.fl.yelpcdn.com/bphoto/PQyhEhLJW9E4NzzKQwaZYQ/o.jpg',
      'https://s3-media3.fl.yelpcdn.com/bphoto/QidOWV69WTt_oKJkUwI8lw/o.jpg'
    ],
    price: '$$',
    hours: [
      {
        open: [
          {
            is_overnight: true,
            start: '1200',
            end: '0200',
            day: 0
          },
          {
            is_overnight: true,
            start: '1200',
            end: '0200',
            day: 1
          },
          {
            is_overnight: true,
            start: '1200',
            end: '0200',
            day: 2
          },
          {
            is_overnight: true,
            start: '1200',
            end: '0400',
            day: 3
          },
          {
            is_overnight: true,
            start: '1200',
            end: '0400',
            day: 4
          },
          {
            is_overnight: true,
            start: '1100',
            end: '0400',
            day: 5
          },
          {
            is_overnight: true,
            start: '1100',
            end: '0200',
            day: 6
          }
        ],
        hours_type: 'REGULAR',
        is_open_now: true
      }
    ],
    transactions: ['pickup', 'delivery']
  },
  {
    id: 'JXsHJfBAKZT0fG8XkA9Kzw',
    alias: 'sweet-science-brooklyn',
    name: 'Sweet',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/yhADILytHbX27QT2smZ3Lw/o.jpg',
    is_claimed: true,
    is_closed: false,
    url:
      'https://www.yelp.com/biz/sweet-science-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    phone: '+13477630872',
    display_phone: '(347) 763-0872',
    review_count: 567,
    categories: [
      {
        alias: 'bars',
        title: 'Bars'
      },
      {
        alias: 'burgers',
        title: 'Burgers'
      },
      {
        alias: 'newamerican',
        title: 'American (New)'
      }
    ],
    rating: 3.5,
    location: {
      address1: '135 Graham Ave',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11206',
      country: 'US',
      state: 'NY',
      display_address: ['135 Graham Ave', 'Brooklyn, NY 11206'],
      cross_streets: 'Boerum St & Johnson Ave'
    },
    coordinates: {
      latitude: 40.7063841819763,
      longitude: -73.9431119710207
    },
    photos: [],
    price: '$$',
    hours: [
      {
        open: [
          {
            is_overnight: true,
            start: '1200',
            end: '0200',
            day: 0
          },
          {
            is_overnight: true,
            start: '1200',
            end: '0200',
            day: 1
          },
          {
            is_overnight: true,
            start: '1200',
            end: '0200',
            day: 2
          },
          {
            is_overnight: true,
            start: '1200',
            end: '0400',
            day: 3
          },
          {
            is_overnight: true,
            start: '1200',
            end: '0400',
            day: 4
          },
          {
            is_overnight: true,
            start: '1100',
            end: '0400',
            day: 5
          },
          {
            is_overnight: true,
            start: '1100',
            end: '0200',
            day: 6
          }
        ],
        hours_type: 'REGULAR',
        is_open_now: true
      }
    ],
    transactions: ['pickup', 'delivery']
  },
  {
    id: 'JXsHJfBAKZT0fG8XkA9Kzw',
    alias: 'sweet-science-brooklyn',
    name: 'Sweeter',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/yhADILytHbX27QT2smZ3Lw/o.jpg',
    is_claimed: true,
    is_closed: false,
    url:
      'https://www.yelp.com/biz/sweet-science-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    phone: '+13477630872',
    display_phone: '(347) 763-0872',
    review_count: 567,
    categories: [
      {
        alias: 'bars',
        title: 'Bars'
      },
      {
        alias: 'burgers',
        title: 'Burgers'
      },
      {
        alias: 'newamerican',
        title: 'American (New)'
      }
    ],
    rating: 3.5,
    location: {
      address1: '135 Graham Ave',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11206',
      country: 'US',
      state: 'NY',
      display_address: ['135 Graham Ave', 'Brooklyn, NY 11206'],
      cross_streets: 'Boerum St & Johnson Ave'
    },
    coordinates: {
      latitude: 40.7063841819763,
      longitude: -73.9431119710207
    },
    photos: [
      'https://s3-media3.fl.yelpcdn.com/bphoto/yhADILytHbX27QT2smZ3Lw/o.jpg'
    ],
    price: '$$',
    hours: [
      {
        open: [
          {
            is_overnight: true,
            start: '1200',
            end: '0200',
            day: 0
          },
          {
            is_overnight: true,
            start: '1200',
            end: '0200',
            day: 1
          },
          {
            is_overnight: true,
            start: '1200',
            end: '0200',
            day: 2
          },
          {
            is_overnight: true,
            start: '1200',
            end: '0400',
            day: 3
          },
          {
            is_overnight: true,
            start: '1200',
            end: '0400',
            day: 4
          },
          {
            is_overnight: true,
            start: '1100',
            end: '0400',
            day: 5
          },
          {
            is_overnight: true,
            start: '1100',
            end: '0200',
            day: 6
          }
        ],
        hours_type: 'REGULAR',
        is_open_now: true
      }
    ],
    transactions: ['pickup', 'delivery']
  }
];

const usersToCreate = [
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@email.com',
    password: '123',
    isBusinessOwner: 'true'
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@email.com',
    password: '123',
    isBusinessOwner: 'true'
  },
  {
    firstName: 'Henry',
    lastName: 'Smith',
    email: 'henry@email.com',
    password: '123',
    isBusinessOwner: 'true'
  },
  {
    firstName: 'Greg',
    lastName: 'Johnson',
    email: 'greg@email.com',
    password: '123',
    isBusinessOwner: 'true',
    image:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
  },
  {
    firstName: 'Sara',
    lastName: 'Gene',
    email: 'sara@email.com',
    password: '123',
    isBusinessOwner: 'true',
    profile: "Lorem ipsum... this is my profile. Hi, I'm Sara Gene!"
  },
  {
    firstName: 'Sample',
    lastName: 'Consumer1',
    email: 'consumer1@email.com',
    password: '123',
    image:
      'https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_1280.png'
  },
  {
    firstName: 'Sample',
    lastName: 'Consumer2',
    email: 'consumer2@email.com',
    password: '123',
    image:
      'https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805__480.png'
  },
  {
    firstName: 'Sample',
    lastName: 'Consumer3',
    email: 'consumer3@email.com',
    password: '123',
    image:
      'https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783__480.png'
  },
  {
    firstName: 'admin',
    lastName: 'admin',
    email: 'admin@email.com',
    password: '123',
    isBusinessOwner: 'false',
    isAdmin: true
  }
];

const commentsToCreate = [
  {
    title: 'Comment 1',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia nunc non sem tempor, id vehicula mi venenatis. Praesent a dapibus justo. Donec placerat arcu et ullamcorper consectetur. Suspendisse suscipit sapien eget felis ullamcorper placerat. Donec vitae massa erat. Duis ac turpis sit amet lectus pretium efficitur. Sed et odio tellus. Duis lobortis massa vitae placerat fermentum.',
    userId: 1,
    businessId: 1,
    stars: 1
  },
  {
    title: 'Comment 2',
    comment:
      'Nulla pharetra egestas lectus, ac maximus est consectetur at. Nulla vehicula massa accumsan purus convallis tristique. Nunc laoreet mollis interdum. Curabitur suscipit leo leo, sed mollis velit ullamcorper in. Curabitur sapien leo, commodo at urna id, tempus posuere orci. Cras ullamcorper ligula id diam egestas sagittis sed non nisl. Pellentesque commodo libero ac massa commodo condimentum. Fusce nec viverra massa. Nam ac sapien ut mauris mattis ultricies non vitae turpis. Vivamus ex leo, aliquet ac lacus quis, elementum maximus enim. Sed tristique odio ut lectus gravida ullamcorper. Maecenas eleifend tincidunt felis sed tempor. Aenean a sodales mi.',
    userId: 1,
    businessId: 2,
    stars: 2
  },
  {
    title: 'Comment 3',
    comment:
      'Nulla aliquam lacus metus, et dapibus urna vestibulum sed. Curabitur nec ante vitae eros pellentesque condimentum. Sed dapibus bibendum erat, ut fermentum massa tincidunt ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Vestibulum in orci in elit dapibus imperdiet sed a lorem. Proin at felis a est iaculis sollicitudin at eget purus. Nullam elementum nunc justo, eu pharetra arcu dapibus nec. Sed sem velit, posuere vel commodo et, pharetra nec neque. Phasellus vel odio ac diam tempor lacinia a eget odio. Sed luctus consectetur mi, vel placerat sem eleifend et. Vivamus vestibulum magna a fermentum sollicitudin. Phasellus ullamcorper leo eu vestibulum mollis. Mauris gravida, risus et volutpat viverra, est diam porttitor purus, eget commodo eros nisi et orci. Nullam posuere varius neque, at porta nibh euismod vitae. Fusce tempor rhoncus turpis sed euismod.',
    userId: 2,
    businessId: 3,
    stars: 3
  },
  {
    title: 'Comment 4',
    comment:
      'Duis luctus ac urna nec aliquam. In dignissim felis felis, eu tincidunt dui vestibulum sed. Aenean sed augue pharetra, rutrum purus vel, lobortis turpis. Aenean et odio augue. Vivamus gravida eget neque sit amet hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut eros nisi, cursus in enim nec, pretium tempus lectus.',
    userId: 2,
    businessId: 4,
    stars: 4
  },
  {
    title: 'Comment 5',
    comment:
      'Sed lacinia metus nunc, sit amet dignissim arcu ultrices id. Fusce ex diam, convallis quis felis convallis, faucibus gravida enim. Morbi nec magna vel nisl viverra luctus ut porta turpis. Vestibulum pretium facilisis eros, bibendum consequat elit egestas in. Vestibulum et feugiat elit. Nulla nec nunc sem. Aliquam et diam lacus. Nam commodo a ex porta elementum. Sed tempus nec est ac dignissim. Duis finibus vitae lorem non pretium.',
    userId: 3,
    businessId: 5,
    stars: 5
  },
  {
    title: 'Comment 6',
    comment:
      'Maecenas ac odio at purus interdum condimentum quis vitae augue. Mauris dapibus orci diam, eleifend tristique sem tristique sed. Sed at felis ac nulla tincidunt sollicitudin. Phasellus non diam ac eros elementum vulputate. Proin vel mi id urna aliquet luctus. Proin sodales, massa ut ultrices fringilla, dui leo mollis felis, placerat venenatis nibh odio non urna. Ut mattis dictum pellentesque. Nunc blandit turpis vitae augue placerat, in auctor erat sodales. Etiam bibendum nulla non lorem venenatis finibus.',
    userId: 3,
    businessId: 6,
    stars: 5
  },
  {
    title: 'Comment 7',
    comment:
      'Vestibulum auctor, massa in hendrerit tristique, elit ligula maximus justo, ut efficitur enim purus congue quam. Nam vel gravida ipsum, quis condimentum mi. Nullam quam velit, luctus a condimentum at, ultrices ut lectus. Nulla id orci sit amet quam interdum consectetur non ac justo. Curabitur hendrerit velit at ligula molestie tincidunt. Proin pulvinar est ut ante congue faucibus. Nulla fermentum facilisis dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis enim quam. Ut eleifend laoreet dolor, nec sagittis erat imperdiet sit amet. Praesent in imperdiet lectus. Fusce ut ante laoreet, pulvinar risus fermentum, molestie velit. In dui neque, fermentum et tempor id, lobortis ut velit. Nam at quam blandit, pellentesque sapien nec, iaculis risus.',
    userId: 4,
    businessId: 7,
    stars: 4
  },
  {
    title: 'Comment 8',
    comment:
      'Curabitur urna est, auctor eu elit sed, sollicitudin finibus mi. In vel lacinia lectus. Suspendisse nec magna dui. Fusce nulla risus, congue nec enim eu, mollis dignissim sapien. Donec id ligula ipsum. Nam eu nunc leo. Sed tincidunt risus lectus, eget egestas est posuere vitae. Mauris sed urna eu quam iaculis blandit vitae at neque.',
    userId: 5,
    businessId: 8,
    stars: 3
  },
  {
    title: 'Comment 9',
    comment:
      'Integer pharetra sem eleifend orci ultricies tincidunt. Nunc non nibh odio. Donec aliquam dapibus mollis. Proin porttitor lobortis ex, quis ullamcorper nisi pretium vel. Suspendisse aliquet, lorem a faucibus gravida, felis ligula dictum lectus, in finibus nisl lectus quis sem. Maecenas sollicitudin ornare ipsum et elementum. Etiam ultricies pharetra ante, consectetur pharetra nibh tempor in. Nullam nunc nulla, commodo non tincidunt ut, volutpat in ex. Morbi id tincidunt justo. Fusce nec lorem enim. Sed in sagittis nisi, quis lacinia ligula.',
    userId: 4,
    businessId: 9,
    stars: 2
  },
  {
    title: 'Comment 10',
    comment:
      'Mauris luctus nisi dui, sed auctor risus varius eu. Nullam porttitor ligula lectus, non iaculis libero blandit non. Sed eu dolor ultrices, laoreet justo sed, mattis velit. Nam laoreet fermentum faucibus. Curabitur vulputate nisl in elit scelerisque rhoncus. Fusce elementum est eros, at sodales lacus sagittis ut. Sed malesuada non lacus ut iaculis. Sed interdum dolor vitae nisl tincidunt, in euismod ante pharetra. Nullam efficitur enim sed aliquet faucibus. Aenean vehicula cursus euismod. Aenean a lorem a metus scelerisque egestas eget vel justo. Donec condimentum, nisi vitae pellentesque blandit, leo dolor maximus sem, congue porttitor sem turpis sed justo. Aenean est velit, malesuada quis laoreet sed, tempus id leo. Proin eu congue nunc. Quisque laoreet massa lorem, eu posuere eros porta pellentesque. Nunc consequat lobortis arcu vitae placerat.',
    userId: 3,
    businessId: 9,
    stars: 1
  }
];

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await User.bulkCreate(usersToCreate);
  console.log(`seeded ${users.length} users successfully`);

  const businesses = await Promise.all(
    businessesToCreate.map(
      (
        { name, photos, coordinates, location, phone, hours, is_closed },
        index
      ) => {
        return Business.create({
          name,
          images: photos,
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          phone,
          hours: JSON.stringify(hours),
          isClosed: is_closed,
          address: location.address1,
          city: location.city,
          postalCode: location.zip_code,
          state: location.state,
          ownerId: index < 5 ? index + 1 : null
        });
      }
    )
  );

  console.log(`seeded ${businesses.length} businesses`);

  const comments = await Comment.bulkCreate(commentsToCreate);
  console.log(`seeded ${comments.length} comments successfully`);

  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}
