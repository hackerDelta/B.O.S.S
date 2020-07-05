const db = require('../db');
const Business = require('../db/models/Business');

const businessesToCreate = [
  {
    id: 'zyyT2yiyxxamC-jKc0v-fg',
    alias: 'omars-kitchen-and-rum-bar-new-york',
    name: "Omar's Kitchen and Rum Bar",
    image_url:
      'https://s3-media2.fl.yelpcdn.com/bphoto/3wyLFJ6QbIFnfoH91PTx5g/o.jpg',
    is_closed: false,
    url:
      'https://www.yelp.com/biz/omars-kitchen-and-rum-bar-new-york?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    review_count: 49,
    categories: [
      {
        alias: 'caribbean',
        title: 'Caribbean',
      },
      {
        alias: 'bars',
        title: 'Bars',
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 40.720422,
      longitude: -73.984525,
    },
    transactions: ['delivery', 'pickup'],
    location: {
      address1: '29A Clinton St',
      address2: null,
      address3: '',
      city: 'New York',
      zip_code: '10002',
      country: 'US',
      state: 'NY',
      display_address: ['29A Clinton St', 'New York, NY 10002'],
    },
    phone: '',
    display_phone: '',
    distance: 8471.738638875158,
  },
  {
    id: 'IPh4H0AfWk5LVplgYV9OGQ',
    alias: 'black-nile-brooklyn-2',
    name: 'Black Nile',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/Dulq5zYAMQ8XgWIw5T4ImA/o.jpg',
    is_closed: false,
    url:
      'https://www.yelp.com/biz/black-nile-brooklyn-2?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    review_count: 184,
    categories: [
      {
        alias: 'seafood',
        title: 'Seafood',
      },
      {
        alias: 'soulfood',
        title: 'Soul Food',
      },
      {
        alias: 'halal',
        title: 'Halal',
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 40.67823,
      longitude: -73.94998,
    },
    transactions: ['delivery', 'pickup'],
    price: '$$',
    location: {
      address1: '592 Nostrand Ave',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11216',
      country: 'US',
      state: 'NY',
      display_address: ['592 Nostrand Ave', 'Brooklyn, NY 11216'],
    },
    phone: '+13478798911',
    display_phone: '(347) 879-8911',
    distance: 3015.354629041277,
  },
  {
    id: 'X3ToKHjzofO8EzfiHYewWg',
    alias: 'brooklyn-blend-brooklyn',
    name: 'Brooklyn Blend',
    image_url:
      'https://s3-media4.fl.yelpcdn.com/bphoto/Yb3HbBioFUmJCxzW4nT_lg/o.jpg',
    is_closed: false,
    url:
      'https://www.yelp.com/biz/brooklyn-blend-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    review_count: 296,
    categories: [
      {
        alias: 'newamerican',
        title: 'American (New)',
      },
      {
        alias: 'juicebars',
        title: 'Juice Bars & Smoothies',
      },
      {
        alias: 'coffee',
        title: 'Coffee & Tea',
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 40.6923440819487,
      longitude: -73.9458492169658,
    },
    transactions: ['delivery', 'pickup'],
    price: '$$',
    location: {
      address1: '194 Tompkins Ave',
      address2: '',
      address3: '',
      city: 'Brooklyn',
      zip_code: '11206',
      country: 'US',
      state: 'NY',
      display_address: ['194 Tompkins Ave', 'Brooklyn, NY 11206'],
    },
    phone: '+17184842247',
    display_phone: '(718) 484-2247',
    distance: 4482.856352300601,
  },
  {
    id: '7lPqxohBRjnpJjvNjRQUoA',
    alias: 'sip-unwine-brooklyn',
    name: 'Sip Unwine',
    image_url:
      'https://s3-media1.fl.yelpcdn.com/bphoto/0YjkZFNaRYeoX7iECvbcBw/o.jpg',
    is_closed: false,
    url:
      'https://www.yelp.com/biz/sip-unwine-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    review_count: 150,
    categories: [
      {
        alias: 'wine_bars',
        title: 'Wine Bars',
      },
      {
        alias: 'cocktailbars',
        title: 'Cocktail Bars',
      },
      {
        alias: 'caribbean',
        title: 'Caribbean',
      },
    ],
    rating: 4.0,
    coordinates: {
      latitude: 40.64101,
      longitude: -73.95592,
    },
    transactions: ['delivery', 'pickup'],
    price: '$$',
    location: {
      address1: '1197 Flatbush Ave',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11226',
      country: 'US',
      state: 'NY',
      display_address: ['1197 Flatbush Ave', 'Brooklyn, NY 11226'],
    },
    phone: '+17185766424',
    display_phone: '(718) 576-6424',
    distance: 1878.2777539110825,
  },
  {
    id: '7vqKC--s8iJ37QGitNhkeQ',
    alias: 'zanmi-brooklyn-2',
    name: 'Zanmi',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/GQL0MuRQj48FxDf_bTWEvA/o.jpg',
    is_closed: false,
    url:
      'https://www.yelp.com/biz/zanmi-brooklyn-2?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    review_count: 24,
    categories: [
      {
        alias: 'haitian',
        title: 'Haitian',
      },
      {
        alias: 'tapasmallplates',
        title: 'Tapas/Small Plates',
      },
      {
        alias: 'sandwiches',
        title: 'Sandwiches',
      },
    ],
    rating: 5.0,
    coordinates: {
      latitude: 40.6579395,
      longitude: -73.9505773,
    },
    transactions: ['delivery', 'pickup'],
    price: '$$',
    location: {
      address1: '1206 Nostrand Ave',
      address2: null,
      address3: null,
      city: 'Brooklyn',
      zip_code: '11225',
      country: 'US',
      state: 'NY',
      display_address: ['1206 Nostrand Ave', 'Brooklyn, NY 11225'],
    },
    phone: '+17186761047',
    display_phone: '(718) 676-1047',
    distance: 1133.225614820061,
  },
  {
    id: '9fWKxkCOV0Lc2ofx_wWm9A',
    alias: 'savvy-bistro-and-bar-brooklyn',
    name: 'Savvy Bistro and Bar',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/eveihjrZHjEE-3YC3TES_Q/o.jpg',
    is_closed: false,
    url:
      'https://www.yelp.com/biz/savvy-bistro-and-bar-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    review_count: 88,
    categories: [
      {
        alias: 'caribbean',
        title: 'Caribbean',
      },
      {
        alias: 'bars',
        title: 'Bars',
      },
    ],
    rating: 4.0,
    coordinates: {
      latitude: 40.67443,
      longitude: -73.95022,
    },
    transactions: ['delivery', 'pickup'],
    price: '$$',
    location: {
      address1: '710 Nostrand Ave',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11216',
      country: 'US',
      state: 'NY',
      display_address: ['710 Nostrand Ave', 'Brooklyn, NY 11216'],
    },
    phone: '+13475337880',
    display_phone: '(347) 533-7880',
    distance: 2628.4404381148133,
  },
  {
    id: 'unePwYAUWb7oC8RBt84e3A',
    alias: 'biyou-brooklyn',
    name: 'Biyou',
    image_url:
      'https://s3-media1.fl.yelpcdn.com/bphoto/09qSu-r8x5yuJS4u-CfRRw/o.jpg',
    is_closed: false,
    url:
      'https://www.yelp.com/biz/biyou-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    review_count: 115,
    categories: [
      {
        alias: 'cajun',
        title: 'Cajun/Creole',
      },
      {
        alias: 'southern',
        title: 'Southern',
      },
    ],
    rating: 4.0,
    coordinates: {
      latitude: 40.68983,
      longitude: -73.93656,
    },
    transactions: ['delivery', 'pickup'],
    price: '$$',
    location: {
      address1: '198 Lewis Ave',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11221',
      country: 'US',
      state: 'NY',
      display_address: ['198 Lewis Ave', 'Brooklyn, NY 11221'],
    },
    phone: '+17189287555',
    display_phone: '(718) 928-7555',
    distance: 4186.932207656695,
  },
  {
    id: 'hO1T1fG5f5FbvOP2124rpw',
    alias: 'negril-bk-brooklyn',
    name: 'Negril BK',
    image_url:
      'https://s3-media2.fl.yelpcdn.com/bphoto/f4dYwn8IbPlx4MTp8fKOrA/o.jpg',
    is_closed: false,
    url:
      'https://www.yelp.com/biz/negril-bk-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    review_count: 568,
    categories: [
      {
        alias: 'caribbean',
        title: 'Caribbean',
      },
    ],
    rating: 4.0,
    coordinates: {
      latitude: 40.67501,
      longitude: -73.98163,
    },
    transactions: ['delivery', 'pickup'],
    price: '$$',
    location: {
      address1: '256 5th Ave',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11215',
      country: 'US',
      state: 'NY',
      display_address: ['256 5th Ave', 'Brooklyn, NY 11215'],
    },
    phone: '+13477213801',
    display_phone: '(347) 721-3801',
    distance: 4372.412390686751,
  },
  {
    id: 'iputjd2Ki_RLG-AHI_yTGA',
    alias: 'cheris-bedstuy-brooklyn',
    name: "Cheri's Bedstuy",
    image_url:
      'https://s3-media2.fl.yelpcdn.com/bphoto/mOsOeKUmqlz-43hswKxxeA/o.jpg',
    is_closed: false,
    url:
      'https://www.yelp.com/biz/cheris-bedstuy-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    review_count: 80,
    categories: [
      {
        alias: 'southern',
        title: 'Southern',
      },
      {
        alias: 'seafood',
        title: 'Seafood',
      },
      {
        alias: 'breakfast_brunch',
        title: 'Breakfast & Brunch',
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 40.68585,
      longitude: -73.92978,
    },
    transactions: ['delivery', 'pickup'],
    price: '$$',
    location: {
      address1: '216 Malcolm X Blvd',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11221',
      country: 'US',
      state: 'NY',
      display_address: ['216 Malcolm X Blvd', 'Brooklyn, NY 11221'],
    },
    phone: '+13475295729',
    display_phone: '(347) 529-5729',
    distance: 3818.416121291464,
  },
  {
    id: 'JXsHJfBAKZT0fG8XkA9Kzw',
    alias: 'sweet-science-brooklyn',
    name: 'Sweet Science',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/yhADILytHbX27QT2smZ3Lw/o.jpg',
    is_closed: false,
    url:
      'https://www.yelp.com/biz/sweet-science-brooklyn?adjust_creative=J7IMkJ2w8f6XnRyefZ8zlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=J7IMkJ2w8f6XnRyefZ8zlA',
    review_count: 567,
    categories: [
      {
        alias: 'bars',
        title: 'Bars',
      },
      {
        alias: 'burgers',
        title: 'Burgers',
      },
      {
        alias: 'newamerican',
        title: 'American (New)',
      },
    ],
    rating: 3.5,
    coordinates: {
      latitude: 40.7063841819763,
      longitude: -73.9431119710207,
    },
    transactions: ['delivery', 'pickup'],
    price: '$$',
    location: {
      address1: '135 Graham Ave',
      address2: null,
      address3: '',
      city: 'Brooklyn',
      zip_code: '11206',
      country: 'US',
      state: 'NY',
      display_address: ['135 Graham Ave', 'Brooklyn, NY 11206'],
    },
    phone: '+13477630872',
    display_phone: '(347) 763-0872',
    distance: 6033.399569109819,
  },
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const businesses = await Promise.all(
    businessesToCreate.map(({name, image_url, coordinates, location, phone}) =>
      Business.create({
        name,
        imageUrl: image_url,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        phone,
        address: location.address1,
        city: location.city,
        postalCode: location.zip_code,
        state: location.state,
      })
    )
  )

  console.log(`seeded ${businesses.length} businesses`)
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}
