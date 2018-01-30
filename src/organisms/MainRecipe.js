import React from 'react';

// Components

// Atoms
import { Wrapper } from '../atoms/MainRecipe/Wrapper';
import { ComplexitySection } from '../atoms/MainRecipe/ComplexitySection';
import { ComplexitySectionHeader } from '../atoms/MainRecipe/ComplexitySectionHeader';
import { Description } from '../atoms/MainRecipe/Description';
import { Col } from '../atoms/Col';
import { Row } from '../atoms/Row';

// Molecules
import { MainRecipeImage } from '../molecules/MainRecipe/MainRecipeImage';
import { IconsBar } from '../molecules/MainRecipe/IconsBar';
import { DetailsSection } from '../molecules/MainRecipe/DetailsSection';
// Organisms
import { Steps } from './Steps';

const fakeProp = {
		"title": "Helstekt kalkun",
		"timeTotal": 165,
		"timeCooking": 15,
		"difficulty": 1,
		"description": "<p>Helstekt kalkun&nbsp;er en selvf&oslash;lge p&aring; middagsbordet ved Thanksgiving, jul og nytt&aring;r!&nbsp;For en smakfull og saftig kalkun anbefaler vi denne oppskriften.</p>",
		"images": [
			{
				"mediumLandscape": "https://www.dagbladet.no/mat/bilder/c/m/1/f84b0f9c-helstekt-kalkun.jpg",
				"largeLandscape": "https://www.dagbladet.no/mat/bilder/c/l/1/f84b0f9c-helstekt-kalkun.jpg",
				"smallProfile": "https://www.dagbladet.no/mat/bilder/c/s/3/f84b0f9c-helstekt-kalkun.jpg"
			}
		],
		"authors": [
			{
				"name": "Matprat",
				"email": "mat@dagbladet.no",
				"profileImage": {
					"seoFilename": "3e67492f-matprat-logo.jpg",
					"title": "Matprat logo"
				}
			}
		],
		"rating": 4.05,
		"preferences": [
			{
				"title": "Uten svinekjøtt",
				"slug": "uten-svinekjott"
			}
		],
		"allergies": [],
		"ingredients": [
			{
				"title": "Kalkun",
				"description": "<p>Kalkunkj&oslash;tt h&oslash;rer hjemme i kategorien hvitt kj&oslash;tt sammen med kylling, og er b&aring;de sunt og magert. Kj&oslash;ttet er mildt og m&oslash;rt, med litt mer tyggemotstand enn kylling. Likt som hos kylling er det litt forskjell i kj&oslash;ttet p&aring; bryst og l&aring;r. Brystkj&oslash;ttet er helt lyst og mildt i smak, mens l&aring;rkj&oslash;ttet har mer markant smak og er m&oslash;rkere i fargen. M&oslash;rheten gj&oslash;r kj&oslash;ttet anvendelig, b&aring;de som festmat og til travle hverdager.&nbsp;P&aring; grunn av den milde smaken, passer kalkunkj&oslash;ttet til de fleste krydder og tilbeh&oslash;r.</p>",
				"pivot": {
					"amount": 1,
					"type": "stk"
				}
			},
			{
				"title": "Smør",
				"description": "<p>Sm&oslash;r er et naturprodukt basert p&aring; fl&oslash;te. Sm&oslash;rtilberedning er utviklet som en konserveringsmetode og er kjent i alle kulturer som har holdt husdyr.&nbsp;I melk og fl&oslash;te finnes fett i sm&aring; kuler. Det er disse sm&aring; fettkulene som utvinnes i sm&oslash;rproduksjon. Mesteparten av sm&oslash;ret blir produsert av &ldquo;s&oslash;t&rdquo; fl&oslash;te.&nbsp;Sm&oslash;r passer meget godt til alle typer matlaging; steking, baking, sauser, supper og br&oslash;dmat.</p>",
				"pivot": {
					"amount": 100,
					"type": "g"
				}
			},
			{
				"title": "Salt",
				"description": "<p>Koksalt eller natriumklorid er et salt, og er en kombinasjon av grunnstoffene natrium og klor, og er kjent som vanlig bordsalt.&nbsp;Salt brukes som smakstilsetning i mat og som det mest utbredte konserveringsmiddel for kj&oslash;tt, fisk og meieriprodukter.&nbsp;</p>",
				"pivot": {
					"amount": 1.5,
					"type": "ts"
				}
			},
			{
				"title": "Svart pepper",
				"description": "<p>Svart pepper er et krydder fremstilt av fermenterte, t&oslash;rkede og umodne r&oslash;de b&aelig;r, kalt pepperkorn, fra planten Piper nigrum.&nbsp;Svart pepper er ett av de vanligste krydder i det europeiske og de europeiskinspirerte kj&oslash;kken. Smaken er sterk og brennende.</p>",
				"pivot": {
					"amount": 1.5,
					"type": "ts"
				}
			},
			{
				"title": "Vann",
				"description": "<p>Vann&nbsp;er en fargel&oslash;s v&aelig;ske med&nbsp;kjemisk forbindelse mellom hydrogen og oksygen, H₂O. Vann viser som regel fargen p&aring; stoffene bak eller rundt, eller reflekterer lyset som treffer vannoverflaten.&nbsp;De kjemiske egenskapene til vann er godt egnet til mange funksjoner i levende organismer. Vann har en rekke livsviktige funksjoner i menneskekroppen.&nbsp;Rent vann g&aring;r aldri ut p&aring; dato, s&aring;fremt det oppbevares i tett emballasje,&nbsp;men kan f&oslash;les litt flatt</p>",
				"pivot": {
					"amount": 3,
					"type": "dl"
				}
			}
		],
		"steps": [
			{
				"videoId": "",
				"description": "<p>Ta ut innmaten. Dette er god basis for saus, s&aring; ta vare p&aring; det.&nbsp;</p>",
				"sortOrder": 0,
				"images": []
			},
			{
				"videoId": "",
				"description": "<p>Bind l&aring;rene sammen ved benknokene. Sitter vingespissene p&aring;, f&oslash;r dem bak ryggen inn mot halsen. Slik at vingene hviler under og st&oslash;tter kalkunen.</p>",
				"sortOrder": 1,
				"images": []
			},
			{
				"videoId": "",
				"description": "<p>Legg kalkunen over i en langpanne eller ildfast form. Smelt sm&oslash;r, tilsett salt og pepper og pensle kalkunen med blandingen.</p>",
				"sortOrder": 2,
				"images": []
			},
			{
				"videoId": "",
				"description": "<p>Hell p&aring; vann og sett kalkunen inn i en forvarmet stekeovn p&aring; 180 &deg;C.&nbsp;Beregn ca. en halv time pr. kilo. Pensle kalkunen med smeltet sm&oslash;r eller kraften som har dannet seg i formen flere ganger under steketiden. Det vil gi ekstra smak og flott gyllen farge p&aring; skinnet.</p>",
				"sortOrder": 3,
				"images": []
			},
			{
				"videoId": "",
				"description": "<p>Stikk en spiss kniv inn ved l&aring;rfestet. Kommer det klar kraft ut er kalkunen ferdig.&nbsp;La kalkunen hvile i minst 20 minutter f&oslash;r du skj&aelig;rer i den. Flytt etter noen minutter kalkunen over p&aring; en fj&oslash;l eller et fat, og pakk den inn i&nbsp;aluminiumfolie&nbsp;dersom den skal serveres varm.</p>",
				"sortOrder": 4,
				"images": []
			}
		],
		"tags": [
			{
				"title": "Fugl",
				"url": "https://www.dagbladet.no/mat/oppskrifter/tag/fugl"
			},
			{
				"title": "Tradisjon",
				"url": "https://www.dagbladet.no/mat/oppskrifter/tag/tradisjon"
			},
			{
				"title": "Grunnoppskrift",
				"url": "https://www.dagbladet.no/mat/oppskrifter/tag/grunnoppskrift"
			},
			{
				"title": "Fest",
				"url": "https://www.dagbladet.no/mat/oppskrifter/tag/fest"
			},
			{
				"title": "Festmat",
				"url": "https://www.dagbladet.no/mat/oppskrifter/tag/festmat"
			}
		]
};

const MainRecipe = (props) => (
	<Wrapper>
		<Row>
			<Col md={7}>
				<MainRecipeImage src={ fakeProp.images[0].url_l_landscape } />
			</Col>
			<Col md={5}>
				<ComplexitySection>
					<IconsBar entities={[{ name: 'difficulty' }, { name: 'activityTime' }, { name: 'totalTime' }]} />
					<ComplexitySectionHeader>{fakeProp.title}</ComplexitySectionHeader>
				</ComplexitySection>
			</Col>
		</Row>
		<Row>
			<Col md={6}>
				<DetailsSection  />
			</Col>
			<Col md={6}>
				<Description>
					<span>{ fakeProp.description.replace(/<\/?[^>]+>/g,'') }
					</span>
				</Description>
			</Col>
		</Row>
		<Steps  />
	</Wrapper>
);

export { MainRecipe };
