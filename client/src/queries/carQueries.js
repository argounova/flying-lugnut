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
    }
  }
`;

const GET_FOURCARS = gql`
  query getCars {
    fourCars {
      id
      make
      model
      trim
      exteriorColor
      inStock
      mainImage
      etsyLink
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
    }
  }
`;

export { GET_CARS, GET_FOURCARS, GET_CAR };