import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';

const columns = [
  { key: 'id', name: 'ID', width: "33.33%" },
  { key: 'title', name: 'Title', width: "33.33%" },
  { key: 'count', name: 'Count', width: "33.33%" }
];

//const userDataRows = [];
let tempArr = null;

class CompanyInfoTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDataRows: null,
      
    }
  }
  componentDidMount = () => {
  //ExportUsers = () => {
    let usersfndata = new Object();
    this.props.companyUserListController.getAllUsers(
      function (response) {
        console.log("Active user list", response.Users);
        let data = response.Users;
        //let userData = [
        //  { name: data.Name, email: data.Email },
        //]
        tempArr = data.map(function (d, i) {

          return {
            name: d.Name,
            email: d.Email,
            role: d.RoleNames,
          };
        });
        console.log("temp arr: ", tempArr);
        //this.setState({ userDataRows: [this.state.userDataRows, tempArr] });
        console.log("original array",data);
        //console.log("reduced array",this.state.userDataRows);

        //ActiveUsersLimit = response.ActiveUsersLimit;
        //ActiveUsersCount = response.ActiveUsersCount;
        //organizationSettings = response.OrganizationSettings;
        //var hideInactiveUsers = response.OrganizationSettings != null ? response.OrganizationSettings.HideInActiveCompanyUser : true;
        //showUsers(response.Users);
        //showhideInActiveUserButton(hideInactiveUsers);
      },
      function (errorMessage) {
        console.log("error occured in table file");
      })
    
  }
  //usersfndata = this.props.companyUserListController.getAllUsers();
  //console.log("usersfndata", );

  //this.props.reportController.exportToExcel(exportInputCommand,
  //function (response) { },
  //function (errorMessage) { });

  render() {
    console.log('', this.props.nodeData);
    let parentHeight = this.props.height;
    //console.log("parent height: ", parentHeight);
    console.log("state data : ", tempArr);
    return (
      <div style={{ height: "100%" }}>
        {!!(this.tempArr)?
          
        //   <ReactDataGrid
        //     columns={columns}
        //     rowGetter={i => tempArr[i]}
        //     rowsCount={tempArr.length}
        //    // minHeight={350}
        //     minHeight={parentHeight}
        //   /> 
        <div>hurray </div>
          :
          <div>empty </div>
        }
      </div>
    )
  }
}
export default CompanyInfoTable;