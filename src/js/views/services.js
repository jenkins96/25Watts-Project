import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/services.scss";

export const Services = () => (
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-6 bgServices1"></div>
			<div className="col-md-6 bgServices2"></div>
		</div>
		<div className="btn-group">
			<button
				type="button"
				className="btn btn-secondary dropdown-toggle"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				This dropdowns menu is right-aligned
			</button>
			<div className="dropdown-menu dropdown-menu-right">
				<button className="dropdown-item" type="button">
					Action
				</button>
				<button className="dropdown-item" type="button">
					Another action
				</button>
				<button className="dropdown-item" type="button">
					Something else here
				</button>
			</div>
		</div>
	</div>
);
