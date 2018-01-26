import React from 'react';

import { Row } from '../../atoms/Row';
import { Col  } from '../../atoms/Col';
import { Icon } from '../../atoms/Icon';
import {
		Quantity,
		AddCart,
		RecipeSteps,
		Pers,
		Counter,
		Buttons
	} from "../../atoms/steps";

export default class MatSteps extends React.Component {
	render() {
		return(
			<section>
				<h1>Steps</h1>
				<Row>
					<Col xs={6}>
						<h1>DETTE TRENGER DU</h1>
						<Buttons>
					<span>
						<Icon name="Remove" size={2.2} />
					</span>
						</Buttons>
						<Counter>
							<span>10</span>
						</Counter>
						<Buttons>
					<span>
						<Icon name="Add" size={2.2} />
					</span>
						</Buttons>
						<Pers>
							<span>PERSONER</span>
						</Pers>
						<Row>
							<Col xs={3}>
								<Quantity>
									<li>1 stk</li>
									<li>100 g</li>
									<li>1.5 ts</li>
									<li>1.5 ts</li>
									<li>3 dl</li>
								</Quantity>
							</Col>
							<Col xs={6}>
								<Quantity>
									<li>kalkun <i>(ca. fem kilo)</i></li>
									<li>smør <i>(til pensling)</i></li>
									<li>salt</li>
									<li>svart pepper</li>
									<li>vann</li>
								</Quantity>
							</Col>
						</Row>
						<AddCart>
							<Icon name="Add" size={2.2} />
							<span>LEGG I HANDLELISTE</span>
						</AddCart>
					</Col>



					<Col xs={6}>
						<h1>SLIK GJØR DU</h1>
						<RecipeSteps>
							<li>Ta ut innmaten. Dette er god basis for saus, så ta vare på det.</li>
							<li>
								Bind lårene sammen ved benknokene. Sitter vingespissene på, før
								dem bak ryggen inn mot halsen. Slik at vingene hviler under og
								støtter kalkunen.
							</li>
							<li>
								Legg kalkunen over i en langpanne eller ildfast form. Smelt smør,
								tilsett salt og pepper og pensle kalkunen med blandingen.
							</li>
							<li>
								Hell på vann og sett kalkunen inn i en forvarmet stekeovn på 180 °C.
								Beregn ca. en halv time pr. kilo. Pensle kalkunen med smeltet smør eller
								kraften som har dannet seg i formen flere ganger under steketiden.
								Det vil gi ekstra smak og flott gyllen farge på skinnet.
							</li>
							<li>
								Stikk en spiss kniv inn ved lårfestet. Kommer det klar kraft ut er
								kalkunen ferdig. La kalkunen hvile i minst 20 minutter før du skjærer i den.
								Flytt etter noen minutter kalkunen over på en fjøl eller et fat, og pakk
								den inn i aluminiumfolie dersom den skal serveres varm.
							</li>
						</RecipeSteps>
					</Col>
				</Row>
			</section>
		);
	}
}
