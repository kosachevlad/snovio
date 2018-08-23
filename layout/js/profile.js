function Profile(props) {
	return (
		<div className="profile-block">
			<a href="#" className={'profile-link ' + props.socNetwork}>
				<img src={props.linkImg} />
				<p>{props.linkValue}</p>
				<span>{props.linkValueMeaning}</span>
				<div>{props.linkValueDifference}<span>{props.linkValueSaldo}</span></div>
			</a>
			<div className="profile-user">
				<img src={props.userImg} alt="user" />
				<div className="user-block">
					<div className="user-social">
						{props.socNetwork}
					</div>
					<div className="user-name">
						{props.userName}
					</div>
				</div>
			</div>
		</div>
	);
}

var profiles = (
	<div className="flex">
		<Profile 
			linkHref = "#" 
			socNetwork = "facebook"  
			linkImg = "img/Facebook-color.svg" 
			linkValue = "1,701" 
			linkValueMeaning = "Followers"
			linkValueDifference = "+4"
			linkValueSaldo = "↑"
			userImg = "img/user1.jpg"
			userName = "@abhisek.daas"
		/>
		<Profile 
			linkHref = "#" 
			socNetwork = "twitter" 
			linkImg = "img/Twitter-color.svg" 
			linkValue = "1,567" 
			linkValueMeaning = "Followers"
			linkValueDifference = "-3"
			linkValueSaldo = "↓"
			userImg = "img/user2.jpg"
			userName = "@wholetthedasout"
		/>
		<Profile 
			linkHref = "#" 
			socNetwork = "instagram" 
			linkImg = "img/Instagram-color.svg" 
			linkValue = "1,139" 
			linkValueMeaning = "Followers"
			linkValueDifference = "+11"
			linkValueSaldo = "↑"
			userImg = "img/avatar.jpg"
			userName = "@wholetthedasout"
		/>
		<Profile 
			linkHref = "#" 
			socNetwork = "linkedin" 
			linkImg = "img/LinkedIn-color.svg" 
			linkValue = "2,016" 
			linkValueMeaning = "Followers"
			linkValueDifference = "+39"
			linkValueSaldo = "↑"
			userImg = "img/user1.jpg"
			userName = "@abhisedk3"
		/>
		<Profile 
			linkHref = "#" 
			socNetwork = "youtube" 
			linkImg = "img/Youtube-color.svg" 
			linkValue = "3,190" 
			linkValueMeaning = "Subscribers"
			linkValueDifference = "+22"
			linkValueSaldo = "↑"
			userImg = "img/user3.jpg"
			userName = "@TheAbhisekD"
		/>
		<Profile 
			linkHref = "#" 
			socNetwork = "snapchat" 
			linkImg = "img/Snapchat-color.svg" 
			linkValue = "8,754" 
			linkValueMeaning = "Snap Score"
			linkValueDifference = ""
			linkValueSaldo = ""
			userImg = "img/avatar.jpg"
			userName = "@abhisekd"
		/>
		<Profile 
			linkHref = "#" 
			socNetwork = "googleplus" 
			linkImg = "img/GooglePlus-color.svg" 
			linkValue = "1,033" 
			linkValueMeaning = "Followers"
			linkValueDifference = ""
			linkValueSaldo = ""
			userImg = "img/avatar.jpg"
			userName = "@+AbhisekDas"
		/>
		<Profile 
			linkHref = "#" 
			socNetwork = "vine" 
			linkImg = "img/Vine-color.svg" 
			linkValue = "1,045" 
			linkValueMeaning = "Loops"
			linkValueDifference = ""
			linkValueSaldo = ""
			userImg = "img/user4.jpg"
			userName = "@1316139228245221376"
		/>
	</div>
);

ReactDOM.render(profiles, document.querySelector('#profiles'));