#! /app/bin/node

const db = require('../server/db');
const Sequelize = require('sequelize');
const { Business } = require('../server/db/models');

const yelp = require('yelp-fusion');
const { YELP_API_KEY } = require('../secrets');
const client = yelp.client(YELP_API_KEY);

// # API call to Yelp to get business ids

async function getBusinessInfo() {
  try {
    const { jsonBody } = await client.search({
      term: 'Black Owned',
      location: 'New York City',
      limit: 50,
      offset: 50
    });

    if (jsonBody.businesses) {
      console.log('Successfully got general business info!');
    }

    return jsonBody.businesses;
  } catch (error) {
    console.log(error);
  }
}

async function getBusinessIds() {
  try {
    const gotBusinessInfo = await getBusinessInfo();

    const businessIds = gotBusinessInfo.map((business) => business.id);

    if (Array.isArray(businessIds) && businessIds.length) {
      console.log('Successfully got business ids!');
    }

    return businessIds;
  } catch (error) {
    console.log(error);
  }
}

async function getBusinessDetails() {
  async function callForBusinessDetails(id) {
    try {
      const { jsonBody } = await client.business(id);

      return jsonBody;
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const businessIds = await getBusinessIds();

    const businessIdSubset = businessIds.slice(0, 15);

    const businessesToSeed = await Promise.all(
      businessIdSubset.map((id) => {
        return callForBusinessDetails(id);
      })
    );

    if (businessesToSeed.length) {
      console.log('Successfully got all business details!');
    }

    return businessesToSeed;
  } catch (error) {
    console.log(error);
  }
}

// # run seed
async function seed() {
  await db.sync();
  console.log('db synced!');

  const businessesToCreate = await getBusinessDetails();

  const [businesses, created] = await Promise.all(
    businessesToCreate.map(
      ({ name, photos, coordinates, location, phone, hours, is_closed }) => {
        return Business.findOrCreate({
          where: {
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
            state: location.state
          }
        });
      }
    )
  );

  console.log('Found businesses:', businesses);

  if (created) console.log(`Business model updated successfully!`);
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
