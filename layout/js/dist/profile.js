"use strict";

function Profile(props) {
	return React.createElement(
		"div",
		{ className: "profile-block" },
		React.createElement(
			"a",
			{ href: "#", className: 'profile-link ' + props.socNetwork },
			React.createElement("img", { src: props.linkImg }),
			React.createElement(
				"p",
				null,
				props.linkValue
			),
			React.createElement(
				"span",
				null,
				props.linkValueMeaning
			),
			React.createElement(
				"div",
				null,
				props.linkValueDifference,
				React.createElement(
					"span",
					null,
					props.linkValueSaldo
				)
			)
		),
		React.createElement(
			"div",
			{ className: "profile-user" },
			React.createElement("img", { src: props.userImg, alt: "user" }),
			React.createElement(
				"div",
				{ className: "user-block" },
				React.createElement(
					"div",
					{ className: "user-social" },
					props.socNetwork
				),
				React.createElement(
					"div",
					{ className: "user-name" },
					props.userName
				)
			)
		)
	);
}

var profiles = React.createElement(
	"div",
	{ className: "flex" },
	React.createElement(Profile, {
		linkHref: "#",
		socNetwork: "facebook",
		linkImg: "img/Facebook-color.svg",
		linkValue: "1,701",
		linkValueMeaning: "Followers",
		linkValueDifference: "+4",
		linkValueSaldo: "\u2191",
		userImg: "img/user1.jpg",
		userName: "@abhisek.daas"
	}),
	React.createElement(Profile, {
		linkHref: "#",
		socNetwork: "twitter",
		linkImg: "img/Twitter-color.svg",
		linkValue: "1,567",
		linkValueMeaning: "Followers",
		linkValueDifference: "-3",
		linkValueSaldo: "\u2193",
		userImg: "img/user2.jpg",
		userName: "@wholetthedasout"
	}),
	React.createElement(Profile, {
		linkHref: "#",
		socNetwork: "instagram",
		linkImg: "img/Instagram-color.svg",
		linkValue: "1,139",
		linkValueMeaning: "Followers",
		linkValueDifference: "+11",
		linkValueSaldo: "\u2191",
		userImg: "img/avatar.jpg",
		userName: "@wholetthedasout"
	}),
	React.createElement(Profile, {
		linkHref: "#",
		socNetwork: "linkedin",
		linkImg: "img/LinkedIn-color.svg",
		linkValue: "2,016",
		linkValueMeaning: "Followers",
		linkValueDifference: "+39",
		linkValueSaldo: "\u2191",
		userImg: "img/user1.jpg",
		userName: "@abhisedk3"
	}),
	React.createElement(Profile, {
		linkHref: "#",
		socNetwork: "youtube",
		linkImg: "img/Youtube-color.svg",
		linkValue: "3,190",
		linkValueMeaning: "Subscribers",
		linkValueDifference: "+22",
		linkValueSaldo: "\u2191",
		userImg: "img/user3.jpg",
		userName: "@TheAbhisekD"
	}),
	React.createElement(Profile, {
		linkHref: "#",
		socNetwork: "snapchat",
		linkImg: "img/Snapchat-color.svg",
		linkValue: "8,754",
		linkValueMeaning: "Snap Score",
		linkValueDifference: "",
		linkValueSaldo: "",
		userImg: "img/avatar.jpg",
		userName: "@abhisekd"
	}),
	React.createElement(Profile, {
		linkHref: "#",
		socNetwork: "googleplus",
		linkImg: "img/GooglePlus-color.svg",
		linkValue: "1,033",
		linkValueMeaning: "Followers",
		linkValueDifference: "",
		linkValueSaldo: "",
		userImg: "img/avatar.jpg",
		userName: "@+AbhisekDas"
	}),
	React.createElement(Profile, {
		linkHref: "#",
		socNetwork: "vine",
		linkImg: "img/Vine-color.svg",
		linkValue: "1,045",
		linkValueMeaning: "Loops",
		linkValueDifference: "",
		linkValueSaldo: "",
		userImg: "img/user4.jpg",
		userName: "@1316139228245221376"
	})
);

ReactDOM.render(profiles, document.querySelector('#profiles'));