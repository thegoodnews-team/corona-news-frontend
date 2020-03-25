

import React from "react";
import "./style.css";

const sendAnalitycs = (name) => {
	const { gtag } = window;

	gtag('event', "CLICK", {
		'event_category': "NEWS",
		'event_label': name,
		'value': 0
	});
}

export default function Card({ link, linkImg, title, fonte, date }) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			onClick={() => sendAnalitycs(link)}>
			
			<div className="card news">
				<div className="news-img" style={{ backgroundImage: `url(${linkImg})`}}/>

				<div className="card-body card-body-height">
					<p className="card-text">{title}</p>
				</div>

				<div className="card-footer bg-transparent text-footer-size">
					<div className="float-left news-fonte">
						{fonte}
					</div>
					<div className="float-right news-data">
						{date}
					</div>
				</div>
			</div>
		</a>
	)
}