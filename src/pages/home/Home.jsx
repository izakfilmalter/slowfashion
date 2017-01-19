import React, { Component } from 'react';

import {
  HomeContainer,
  PhotoContainer,
  Photo,
  Title,
} from './styles';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <PhotoContainer>
          <Photo index={1} url="http://www.muji.us/store/pub/media/catalog/product/cache/1/image/700x560/e9c3970ab036de70892d86c6d221abfe/4/5/4549738414094_01_1260.jpg">
            <Title
              inPhoto
            >
              Wool Knit Coat
            </Title>
          </Photo>
          <Photo index={2} url="http://www.muji.us/store/pub/media/catalog/product/cache/1/image/700x560/e9c3970ab036de70892d86c6d221abfe/4/5/4549738414094_02_1260.jpg" />
          <Photo index={3} url="http://www.muji.us/store/pub/media/catalog/product/cache/1/image/700x560/e9c3970ab036de70892d86c6d221abfe/4/5/4549738414094_03_1260.jpg" />
          <Photo index={4} url="http://www.muji.us/store/pub/media/catalog/product/cache/1/image/700x560/e9c3970ab036de70892d86c6d221abfe/4/5/4549738414094_04_1260.jpg" />
          <Photo index={5} url="http://www.muji.us/store/pub/media/catalog/product/cache/1/image/700x560/e9c3970ab036de70892d86c6d221abfe/4/5/4549738414094_05_1260.jpg" />

          <Title>Wool Knit Coat</Title>
        </PhotoContainer>
      </HomeContainer>
    );
  }
}

export default Home;
