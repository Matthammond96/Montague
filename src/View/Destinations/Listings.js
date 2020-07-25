import React, { Component } from 'react';
import Select from 'react-select';
import "../Styles/listings.sass";

class Listings extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    const destinations_options = [
      { value: '', label: 'All Destinations' },
      { value: 'frech riviera', label: 'French Riviera' },
      { value: 'dubai', label: 'Dubai' },
      { value: 'berlin', label: 'Berlin' },
      { value: 'cyprus', label: 'Cyprus' },
      { value: 'cape town', label: 'Cape Town' }
    ]

    const bedroom_options = [
      { value: '', label: 'All' },
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5' },
      { value: '6', label: '6' },
      { value: '7', label: '7' },
      { value: '8+', label: '8+' }
    ]

    const property_options = [
      { value: '', label: 'All Properties' },
      { value: 'apartment', label: 'Apertment' },
      { value: 'commercial', label: 'Commercial Properties' },
      { value: 'house', label: 'House' },
      { value: 'new development', label: 'New Development' },
      { value: 'villa', label: 'Villa' }
    ]

    const properties = [
      { id: 1, title: "One Park Avenue", subTitle: "Dubai, United Arab Emirates", price: "£3,100,000", squarefoot: "13,000sqm", bedroom: "4", bathroom: "4", image: "http://staging.montaguerealestate.com/storage/properties/109/photos/5f08303b6ad62.jpg" },
      { id: 2, title: "Forest Villa", subTitle: "Dubai, United Arab Emirates", price: "£2,437,855", squarefoot: "17,980sqm", bedroom: "4", bathroom: "5", image: "http://staging.montaguerealestate.com/storage/properties/107/photos/5f077ab061a15.jpg" },
      { id: 3, title: "IIkley", subTitle: "Cape Town, South Africa", price: "£1,000,000", squarefoot: "10,000sqm", bedroom: "3", bathroom: "4", image: "http://staging.montaguerealestate.com/storage/properties/100/photos/5f05facf62fbf.jpg" },
      { id: 4, title: "Canal Villa", subTitle: "Dubai, United Arab Emirates", price: "£10,400,500", squarefoot: "24,870sqm", bedroom: "6", bathroom: "5", image: "http://staging.montaguerealestate.com/storage/properties/101/photos/5f07762ab8f40.jpg" },
      { id: 5, title: "Creek Vista Reserve", subTitle: "Dubai, United Arab Emirates", price: "£880,900", squarefoot: "7,000sqm", bedroom: "2", bathroom: "2", image: "http://staging.montaguerealestate.com/storage/properties/102/photos/5f076b4e9fdd7.jpg" },
      { id: 6, title: "Creek Vista Reserve", subTitle: "Dubai, United Arab Emirates", price: "£690,000", squarefoot: "5,000sqm", bedroom: "1", bathroom: "1", image: "http://staging.montaguerealestate.com/storage/properties/103/photos/5f076c0fe71a2.jpg" },
    ]

    return (
      <div>
        <div className="properties-heading">
          <div className="vc">
            <h1>Discover the perfect property</h1>

            <div className="listing-form-container">
              <form className="listing-form">
                <Select className="input-select-form destinations" name="Destinations" placeholder="Destinations" options={destinations_options} />
                <Select className="input-select-form property" name="Property type" placeholder="Property type" options={property_options} />
                <Select className="input-select-form bedrooms" name="Bedrooms" placeholder="Bedrooms" options={bedroom_options} />
                <Select className="input-select-form price" placeholder="Price Range" options="" />
                <button className="btn">Search</button>
              </form>
            </div>
          </div>
        </div>

        <div className="properties-list">
          {properties.map(property => {
            return (
              <div className="listing-card">
                <div className="content">
                  <div className="image" style={{ backgroundImage: `url('${property.image}')` }}></div>
                  <div className="details">
                    <h3 className="subtitle">{property.subTitle}</h3>
                    <h2 className="title">{property.title}</h2>
                    <p className="price">Price: {property.price}<span className="info">Bedrooms: {property.bedroom}, Bath: {property.bathroom}</span></p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Listings;