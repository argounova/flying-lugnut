import { gql } from '@apollo/client';

const GET_CARS = gql`
  query getCars {
    cars {
      id
      make
      model
      trim
      exteriorColor
      inStock
      mainImage
      etsyLink
      stripeId
    }
  }
`;

const GET_FEATUREDCARS = gql`
  query getCars {
    featuredCars {
      id
      make
      model
      trim
      exteriorColor
      inStock
      featured
      mainImage
      etsyLink
      stripeId
    }
  }
`;
const GET_CLEARANCECARS = gql`
  query getCars {
    clearanceCars {
      id
      make
      model
      trim
      exteriorColor
      inStock
      clearance
      mainImage
      etsyLink
      stripeId
    }
  }
`;
const GET_NEWCARS = gql`
  query getCars {
    newCars {
      id
      make
      model
      trim
      exteriorColor
      inStock
      newInventory
      mainImage
      etsyLink
      stripeId
    }
  }
`;

const GET_CAR = gql`
  query getCar($id: ID!) {
    car(id: $id) {
      id
      make
      model
      trim
      exteriorColor
      seriesName
      inStock
      mainImage
      detailImage1
      detailImage2
      detailImage3
      etsyLink
      detailDescription
      price
      thisCarInSeries
      totalCarsInSeries
      stripeId
    }
  }
`;

export { GET_CARS, GET_FEATUREDCARS, GET_CLEARANCECARS, GET_NEWCARS, GET_CAR };