

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
			className="card shadow-sm"
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			onClick={() => sendAnalitycs(link)}>

			<img className="card-img-top" src={linkImg} alt={title} />

			<div className="card-body">
				<p className="card-text">{title}</p>
			</div>

			<div className="card-footer bg-transparent color-black text-footer-size">
				<div className="float-left">
					Fonte: {fonte}
				</div>
				<div className="float-right">
					{date}
				</div>
			</div>
		</a>
	)
}