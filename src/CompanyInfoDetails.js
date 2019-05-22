import React, { Component } from 'react';


class CompanyInfoDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: '',
		}
	}



	render() {
		let data = this.props.companyObject;
		const getNestedObject = (nestedObj, pathArr) => {
			return pathArr.reduce((obj, key) =>
				(obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
		}
		// pass in your object structure as array elements
		const Country = getNestedObject(data, ['Country', 'Name']);

		// console.log("nested name", name);

		let profileInfoArray = [
			{ key: 1, label: 'COMPANY NAME', value: data.Name },
			{ key: 2, label: 'ADDRESS', value: data.Address },
			{ key: 3, label: 'ZIP CODE', value: data.ZipCode },
			{ key: 4, label: 'CITY', value: data.City },
			{ key: 5, label: 'STATE/REGION', value: data.StateOrRegion },
			{ key: 6, label: 'COUNTRY', value: Country },
			{ key: 7, label: 'VAT#', value: data.VATNumber },

			{ key: 8, label: 'WEBSITE', value: data.WebSite },
			{ key: 9, label: 'PHONE NUMBER', value: data.PhoneNumber },
			{ key: 10, label: 'FAX NUMBER', value: data.FaxNumber },
			{ key: 11, label: 'CONTACT PERSON', value: data.ContactPerson },
			{ key: 12, label: 'INVOICE EMAIL', value: data.ContactEmail },
			{ key: 13, label: 'UNIQUE STYLE NO', value: data.IsUniqueStyleNumber },
			{ key: 14, label: 'AUTO STYLE NO', value: data.IsAutomaticStyleNumberON },
		];
		return (

			<div className="">
				<form className="dl-company-profile">
					<div className="row">
						<div className="col-xs-5 col-md-5 text-center">
							{
								profileInfoArray.map((item, i) => {
									const first = i < 7;
									return (
										<div>
											{first && (
												<div className="row">
													<div className="col-xs-7 label"> {item.label} </div>
													<div className="col-xs-5 data"> {item.value} </div>
												</div>
											)}
										</div>

									)
								})
							}
						</div>
						<div className="col-xs-5 col-md-5 text-center">
							{
								profileInfoArray.map((item, i) => {
									const last = i < 14 && i > 6;
									return (
										<div>
											{last && (
												<div className="row">
													<div className="col-xs-7 label"> {item.label} </div>
													<div className="col-xs-5 data"> {item.value}</div>
												</div>
											)}
										</div>
									)
								})
							}
						</div>
						<div className="col-xs-2 col-md-2">

							<div className="dl-company-profile-image">
								<img src="https://s3-eu-west-1.amazonaws.com/designhubhotfix/organization_2/organizationlogo_2/4b4ec6f6-2903-40ae-9d16-e5880d2688cd/augusta_fb_thumb.png" />
								<div className="dl-company-profile-edit-delete-buttons">
									<div className="dl-company-logo-edit-button" />
									<div className="dl-company-logo-delete-button" />
								</div>
							</div>
						</div>
					</div>
					<div className="dl-company-edit-profile">
						<div className="dl-company-profile-edit-icon" />
					</div>

				</form>

				<div className="dl-right-checkbox-block pull-right">
					<div>Use Company Logo in Email notification from Delogue:</div>
					<input id="dl-checkbox-trigger" type="checkbox" />
					<label for="dl-checkbox-trigger" class="dl-checker"></label>
				</div>
				
			</div>
		)
	}
}
export default CompanyInfoDetails;
