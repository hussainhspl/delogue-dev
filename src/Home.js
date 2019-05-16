import React, { Component } from 'react'
import CompanyInfoDetails from './CompanyInfoDetails';
// import BlueIconButton from './Shared/BlueIconButton';

// import pickBy from 'lodash.pickBy';
// import identity from 'lodash.identity';

class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      availableHeight: 'example',
    }
  }
 
  setheight = (hei) => {
    console.log("height", hei);
    this.setState({ availableHeight: hei });
  }
  render() {

    let calculatedHeight = '';
    console.log("Enter in child componendsf1");
    const node = this.myRef.current;
    console.log('node', node);
    if (node) {
      calculatedHeight = node.clientHeight;
      console.log('new node data', calculatedHeight);
      
    }

    console.log("company data in react:", this.props.companyInfo);

    let propCompanyInfo={ctiveUsersLimit: 107,
    Address: "SomeStreet",
    BrandNames: [],
    Brands: [],
    City: null,
    CompanyType: {Id: 2, Name: "Foot wear"},
    ContactEmail: "test@headfitted.com",
    ContactPerson: "John Smith1",
    Country: {Id: 1, Name: "Afghanistan", Code: "AF"},
    CreatedDate: "/Date(1335830400000)/",
    ExpiryDate: null,
    FTPItemExportTime: null,
    FTPStyleExportTime: null,
    FaxNumber: "3486575",
    Id: 2,
    IsActive: true,
    IsAutoStyleNumberOn: false,
    IsItemSupplier: false,
    IsStyleSupplier: false,
    IsUniqueStyleNumber: false,
    ItemServiceDetails: null,
    LocalCurrency: {Id: 27, CountryCurrency: "Denmark Krone", CurrencyCode: "DKK", Value: 0, IsActive: false},
    Logo: {Id: "18e9158c-c247-4990-bcbf-945698f7183a", Name: "nextsport.png", URL: "https://s3-eu-west-1.amazonaws.com/designhubtest/o…4236b68-1e09-4fd4-a49e-655694908ff9/nextsport.png",  Size: 24084},
    Modules: [],
    Name: "Best Clothing",
    OrganizationSettings: null,
    PhoneNumber: "14789532",
    PriceSettings: null,
    StateOrRegion: "Aarhus",
    StyleServiceDetails: null,
    SupplierServiceDetails: null,
    TypeId: 1,
    UseLogoInEmailNotification: true,
    UserDefinedSupplierId: null,
    Users: [],
    VATNumber: "23434343",
    WebSite: "www.bestclothing12.com",
    ZipCode: "123",
    automaticStyleNumbering: {Id: 3, OrganizationId: 2, BrandId: 0, IsAutomaticStyleNumberON: false, StartFromStyleNumber: 10000}}
    
    //let propCompanyInfo = this.props.companyInfo;

    // let pureObj = pickBy(propCompanyInfo, identity);
    // console.log("pure obj", pureObj);

    /////////////////////
    const filteredKeys = ['Address', 'ContactEmail', 'CompanyType', 'ZipCode', 'city','StateOrRegion',];

    const filtered = filteredKeys
      .reduce((obj, key) => ({ ...obj, [key]: propCompanyInfo[key] }), {});

    console.log("filtered data reduce", filtered);
    ///////////////
    
    return (
      <div className="dl-admin-container">
        <CompanyInfoDetails companyObject={propCompanyInfo} />
        <div className="dl-admin-buttons-section">
          
        </div>
        <div
          ref={this.myRef}
          className="dl-admin-company-info-table">
          
        </div>
      </div>
    )
  }
}
export default Home;