import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import plant_sun from '../images/plant_sun.png';
import plant_water from '../images/plant_water.png';
import plant_temp from '../images/plant_temp.png';
// import '../css/style/main.css';

const ProductCare = ({ light, watering, temp }) => {
  return (
    <Container>
      <Row className='Product_care'>
        <Col xs={12} md={20} lg={12}>
          <label className='Care_label'>طريقة العناية</label>
          <div className='plant-info-list box-shadow'>
            <div className="care-item">
              <img src={plant_sun} alt="plant_sun" className="care-image" />
              <div className="care-content">
                <label className="Care_sub-label">الإضاءة</label>
                <ul>
                  {
                    light.map((e) => {
                      return <li>{e}</li>
                    }
                    )
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className='plant-info-list box-shadow'>
            <div className="care-item">
              <img src={plant_water} alt="plant_water" className="care-image" />
              <div className="care-content">
                <label className="Care_sub-label">الري</label>
                <ul>
                  {
                    watering.map((e) => {
                      return <li>{e}</li>
                    }
                    )
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className='plant-info-list box-shadow'>
            <div className="care-item">
              <img src={plant_temp} alt="plant_temp" className="care-image" />
              <div className="care-content">
                <label className="Care_sub-label">الحرارة</label>
                <ul>
                  {
                    temp.map((e) => {
                      return <li>{e}</li>
                    }
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCare;
