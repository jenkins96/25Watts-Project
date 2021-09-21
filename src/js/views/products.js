import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/products.scss";
import left from "../../img/Iconfeather-arrow-left-circle.png";
import right from "../../img/Iconfeather-arrow-right-circle.png";

export const Products = () => (
	<div className="bgProducts container-fluid">
		<div className="row rowProducts">
			<div className="col-md-9 lightG"></div>
			<div className="col-md-3 darkG"></div>
		</div>
		<div className="col-md-10 offset-1 bgImage">
			<div className="col-md-6 offset-6 overlay">
				<p className="mainPProducts">Set ut perspiciatis</p>
				<h2 className="mainTitleProducts">Nemo Enim</h2>
				<p className="mainPProducts">
					Sed ut percpiciatis unde omnis iste natus error sit
					voluptatem accusantium doloremque laudantium, totamrem
					aperiam.
				</p>
				<img src={left} id="leftArr" className="myArrows"></img>
				<img src={right} id="rightArr" className="myArrows"></img>
			</div>
		</div>
	</div>
);
