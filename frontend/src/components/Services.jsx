import React, { Component } from 'react'
import {Row,Container,Col} from "react-bootstrap"
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper'
import "../css/Services.css"
import { Product } from './Product'

export default class Services extends Component {
  render() {
    return (
      <div className='services'>
        <div className="services-heading">
          <div className="services-heading__wrapper">
            Dich vu
          </div>
          <div className="services-heading__text">
            Dich vu
          </div>
        </div>
        <div className="services__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde excepturi soluta omnis sunt similique culpa fuga officiis sed. Explicabo vitae atque laudantium impedit expedita, fuga illo quis modi esse voluptate?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde excepturi soluta omnis sunt similique culpa fuga officiis sed. Explicabo vitae atque laudantium impedit expedita, fuga illo quis modi esse voluptate?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde excepturi soluta omnis sunt similique culpa fuga officiis sed. Explicabo vitae atque laudantium impedit expedita, fuga illo quis modi esse voluptate?
          </p>
        </div>
        <div className="services__container ">
          <Container>
            <Row>
              <Col>
                <Product imgUrl="https://www.pngall.com/wp-content/uploads/2016/07/Advertising-Free-Download-PNG.png" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit consequatur. Illum iusto, nulla laudantium ab, recusandae beatae voluptatibus vel dolorum nesciunt culpa itaque ea voluptas, expedita laboriosam consequuntur obcaecati?"
                price="200"
                />
              </Col>
              <Col>
                <Product imgUrl="https://www.pngall.com/wp-content/uploads/2016/07/Advertising-Free-Download-PNG.png" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit consequatur. Illum iusto, nulla laudantium ab, recusandae beatae voluptatibus vel dolorum nesciunt culpa itaque ea voluptas, expedita laboriosam consequuntur obcaecati?"
                price="200"
                />
              </Col>
              <Col>
                <Product imgUrl="https://www.pngall.com/wp-content/uploads/2016/07/Advertising-Free-Download-PNG.png" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit consequatur. Illum iusto, nulla laudantium ab, recusandae beatae voluptatibus vel dolorum nesciunt culpa itaque ea voluptas, expedita laboriosam consequuntur obcaecati?"
                price="200"
                />
              </Col>
              
            </Row>
          </Container>
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            modules={[Autoplay]}
            autoplay ={{delay: 2000}}
            speed={3000}
            loop={true}
          >
            <SwiperSlide>
              <Product imgUrl="https://www.pngall.com/wp-content/uploads/2016/07/Advertising-Free-Download-PNG.png" 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit consequatur. Illum iusto, nulla laudantium ab, recusandae beatae voluptatibus vel dolorum nesciunt culpa itaque ea voluptas, expedita laboriosam consequuntur obcaecati?"
                  price="200"
                  />
            </SwiperSlide>
            <SwiperSlide>
              <Product imgUrl="https://www.pngall.com/wp-content/uploads/2016/07/Advertising-Free-Download-PNG.png" 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit consequatur. Illum iusto, nulla laudantium ab, recusandae beatae voluptatibus vel dolorum nesciunt culpa itaque ea voluptas, expedita laboriosam consequuntur obcaecati?"
                  price="200"
                  />
            </SwiperSlide>
            <SwiperSlide>
              <Product imgUrl="https://www.pngall.com/wp-content/uploads/2016/07/Advertising-Free-Download-PNG.png" 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit consequatur. Illum iusto, nulla laudantium ab, recusandae beatae voluptatibus vel dolorum nesciunt culpa itaque ea voluptas, expedita laboriosam consequuntur obcaecati?"
                  price="200"
                  />
            </SwiperSlide>
            <SwiperSlide>
              <Product imgUrl="https://www.pngall.com/wp-content/uploads/2016/07/Advertising-Free-Download-PNG.png" 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit consequatur. Illum iusto, nulla laudantium ab, recusandae beatae voluptatibus vel dolorum nesciunt culpa itaque ea voluptas, expedita laboriosam consequuntur obcaecati?"
                  price="200"
                  />
            </SwiperSlide>
            <SwiperSlide>
              <Product imgUrl="https://www.pngall.com/wp-content/uploads/2016/07/Advertising-Free-Download-PNG.png" 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit consequatur. Illum iusto, nulla laudantium ab, recusandae beatae voluptatibus vel dolorum nesciunt culpa itaque ea voluptas, expedita laboriosam consequuntur obcaecati?"
                  price="200"
                  />
            </SwiperSlide>
            <SwiperSlide>
              <Product imgUrl="https://www.pngall.com/wp-content/uploads/2016/07/Advertising-Free-Download-PNG.png" 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit consequatur. Illum iusto, nulla laudantium ab, recusandae beatae voluptatibus vel dolorum nesciunt culpa itaque ea voluptas, expedita laboriosam consequuntur obcaecati?"
                  price="200"
                  />
            </SwiperSlide>
            <SwiperSlide>
              <Product imgUrl="https://www.pngall.com/wp-content/uploads/2016/07/Advertising-Free-Download-PNG.png" 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit consequatur. Illum iusto, nulla laudantium ab, recusandae beatae voluptatibus vel dolorum nesciunt culpa itaque ea voluptas, expedita laboriosam consequuntur obcaecati?"
                  price="200"
                  />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    )
  }
}
