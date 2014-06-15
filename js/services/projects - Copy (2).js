profileApp.factory('projects', function(){
			// var self = this;
			// self.imgUrlList = [];

			var imgUrlList = [];

			items : [

				{
					deloitte: [
								{
									name:'Dpool',
									description:'IVR is a web application used by all the short and long-term travellers to India. Application tracks: Trip details, Host contact details, Side trips (business and personal)',
									technologies:'Angular.js, Boostrap3, JQuery',
									companyname:'Deloitte',
									fromdate:'Dec-2013',
									todate:'March-2014',
									imageurl:'img/Dpool.png',
									url:'',
									roles: [
										{
											list:'Developed the View model using Knockout.js'
										},
										{
											list:'Developed the HTML’s & CSS.'
										},
										{
											list:'Handled IPhone, Tablet, Desktop & Cross browser compatible development'
										}
									]
								},
								{
									name:'IVR(International Visitor Registration)',
									description:'IVR is a web application used by all the short and long-term travellers to India. Application tracks: Trip details, Host contact details, Side trips (business and personal)',
									technologies:'Knockout.js, Durandal.js, Require.js, Boostrap3, ASP.net',
									companyname:'Deloitte',
									fromdate:'Dec-2013',
									todate:'March-2014',
									imageurl:'img/IVR.png',
									url:'',
									roles: [
										{
											list:'Developed the View model using Knockout.js'
										},
										{
											list:'Developed the HTML’s & CSS.'
										},
										{
											list:'Handled IPhone, Tablet, Desktop & Cross browser compatible development'
										}
									]
								},
								{
									name:'Business Chemistry',
									description:'Business Chemistry is a self-assessment application which any Deloitte employee can take by answering a questionnaire having randomly generated questions from the repository. Each Question can be answered based on a rating scale and the employee is graded to be aligned with one of the patterns: Driver, Pioneer, Integrator, and Guardian.',
									technologies:'Knockout.js, Durandal.js, Require.js, Boostrap3',
									companyname:'Deloitte',
									fromdate:'Dec-2013',
									todate:'March-2014',
									imageurl:'img/BussinessChemistry.png',
									url:'',
									roles: [
										{
											list:'Developed the View model using Knockout.js'
										},
										{
											list:'Developed the HTML’s & CSS.'
										},
										{
											list:'Handled IPhone, Tablet, Desktop & Cross browser compatible development'
										}
									]
								},
								{
									name:'Business Chemistry',
									description:'Business Chemistry is a self-assessment application which any Deloitte employee can take by answering a questionnaire having randomly generated questions from the repository. Each Question can be answered based on a rating scale and the employee is graded to be aligned with one of the patterns: Driver, Pioneer, Integrator, and Guardian.',
									technologies:'Knockout.js, Durandal.js, Require.js, Boostrap3',
									companyname:'Deloitte',
									fromdate:'Dec-2013',
									todate:'March-2014',
									imageurl:'img/BussinessChemistry.png',
									url:'',
									roles: [
										{
											list:'Developed the View model using Knockout.js'
										},
										{
											list:'Developed the HTML’s & CSS.'
										},
										{
											list:'Handled IPhone, Tablet, Desktop & Cross browser compatible development'
										}
									]
								},
								{
									name:'Project Tracker',
									description:'Project Tracker is a web application authorized to be accessed by Senior Management, which shows Projects requests in pipeline, Project allocation Details, Bandwidth details to map resources, Quality Tracking, Team View of the Personnel, Teams Feedback. Administrator has access to the Control Panel to manage application settings.',
									technologies:'Knockout.js, Durandal.js, Require.js, Boostrap3',
									companyname:'Deloitte',
									fromdate:'Dec-2013',
									todate:'March-2014',
									imageurl:'img/ProjectTracker.png',
									url:'',
									roles: [
										{
											list:'Developed the View model using Knockout.js'
										},
										{
											list:'Developed the HTML’s & CSS.'
										},
										{
											list:'Handled IPhone, Tablet, Desktop & Cross browser compatible development'
										}
									]
								}
							]
				},
				{
					ivy:[
							{
								name:'Backoffice',
								description:'IVR is a web application used by all the short and long-term travellers to India. Application tracks: Trip details, Host contact details, Side trips (business and personal)',
								technologies:'Knockout.js, Durandal.js, Require.js, Boostrap3, ASP.net',
								companyname:'Deloitte',
								fromdate:'Dec-2013',
								todate:'March-2014',
								imageurl:'img/Backoffice.png',
								url:'',
								roles: [
									{
										list:'Developed the View model using Knockout.js'
									},
									{
										list:'Developed the HTML’s & CSS.'
									},
									{
										list:'Handled IPhone, Tablet, Desktop & Cross browser compatible development'
									}
								]
							},
							{
								name:'Bwin.Party.affiliates',
								description:'IVR is a web application used by all the short and long-term travellers to India. Application tracks: Trip details, Host contact details, Side trips (business and personal)',
								technologies:'Knockout.js, Durandal.js, Require.js, Boostrap3, ASP.net',
								companyname:'Deloitte',
								fromdate:'Dec-2013',
								todate:'March-2014',
								imageurl:'img/Bwin.Party.affiliates.png',
								url:'',
								roles: [
									{
										list:'Developed the View model using Knockout.js'
									},
									{
										list:'Developed the HTML’s & CSS.'
									},
									{
										list:'Handled IPhone, Tablet, Desktop & Cross browser compatible development'
									}
								]
							},
							{
								name:'IVR(International Visitor Registration)',
								description:'IVR is a web application used by all the short and long-term travellers to India. Application tracks: Trip details, Host contact details, Side trips (business and personal)',
								technologies:'Knockout.js, Durandal.js, Require.js, Boostrap3, ASP.net',
								companyname:'Deloitte',
								fromdate:'Dec-2013',
								todate:'March-2014',
								imageurl:'img/IVR.png',
								url:'',
								roles: [
									{
										list:'Developed the View model using Knockout.js'
									},
									{
										list:'Developed the HTML’s & CSS.'
									},
									{
										list:'Handled IPhone, Tablet, Desktop & Cross browser compatible development'
									}
								]
							}
							
						]
				}
			]

	
		return{
			arrayList: function(){
					for(var i=0;i<items.deloitte.imageurl;i++){
						imgUrlList.push({url:items.deloitte.imageurl[i]});
					}
					for(var j=0;j<items.ivy.imageurl;j++){
						imgUrlList.push({url:items.ivy.imageurl[j]});
					}
				}

			return imgUrlList;
		}
		
	}
});