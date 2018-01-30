import React from 'react';

import { Wrapper            } from '../atoms/MainRecipe/Wrapper';
import { Description        } from '../atoms/MainRecipe/Description';
import { Col                } from '../atoms/Col';
import { Row                } from '../atoms/Row';
import { MainRecipeImage    } from '../molecules/MainRecipe/MainRecipeImage';
import { DetailsSection     } from '../molecules/MainRecipe/DetailsSection';
import { ComplexitySection  } from '../molecules/MainRecipe/ComplexitySection';
import { IngredientsSection } from '../molecules/MainRecipe/IngredientsSection';
import { StepsSection       } from '../molecules/MainRecipe/StepsSection';
import { AdTags             } from './adTags';
import { Footer             } from './Footer';
import Related from '../molecules/MatRelated/MatRelated';

const fakeProp = {
	"title": "Bestemorbrød",
	"timeTotal": 100,
	"timeCooking": 60,
	"difficulty": 1,
	"servings": 4,
	"description": "<p>6 - 8 br&oslash;d.</p>\n<p>Daglig leder ved kaffekjeden Nord i Oslo, Joakim Strand, vokste opp med dette br&oslash;det, som opprinnelig ble bakt av hans bestemor. I dag er br&oslash;det en av bestselgerne i kjedens filialer.&nbsp;Obs! Oppskriften kan gjerne halveres, for at deigen skal bli lettere &aring; h&aring;ndtere p&aring; hjemmekj&oslash;kkenet.&nbsp;</p>",
	"images": [
		{
			"largeLandscape": "https://www.dagbladet.no/mat/bilder/c/l/1/251b508d-bestemors-brod.jpg"
		}
	],
	"authors": [
		{
			"name": "Joakim Strand",
			"email": "mat@dagbladet.no",
			"profileImage": {
				"seoFilename": "3cd250ed-joakim-strand-er-daglig-leder-i-nord-bakeri-oslo.jpg",
				"title": "Joakim Strand er daglig leder i Nord bakeri, Oslo",
				"mediumPortrait": "https://www.dagbladet.no/mat/bilder/c/m/2/3cd250ed-joakim-strand-er-daglig-leder-i-nord-bakeri-oslo.jpg"
			}
		}
	],
	"rating": 0,
	"preferences": [
		{
			"title": "Vegan",
			"slug": "vegan"
		},
		{
			"title": "Vegetar",
			"slug": "vegetar"
		},
		{
			"title": "Uten svinekjøtt",
			"slug": "uten-svinekjott"
		}
	],
	"allergies": [
		{
			"slug": "gluten"
		}
	],
	"ingredients": [
		{
			"title": "Sammalt hvete",
			"description": "<p>At melet er sammalt betyr at man bruker hele kornet &ndash; b&aring;de skall og kjerne &ndash; og maler det sammen til mel. Sammalt mel produseres i mange varierende finhetsgrader, for eksempel fint, mellomgrovt og grovt. Sammalt mel inneholder mer kostfiber, mineraler og vitaminer (som finnes i skallet p&aring; kornet) enn siktet mel.</p>\n<p>Sammalt mel brukes til grovere bakst, som grove br&oslash;dtyper, rundstykker, flatbr&oslash;d og knekkebr&oslash;d.</p>",
			"pivot": {
				"amount": 1,
				"type": "kg"
			}
		},
		{
			"title": "Sammalt rug",
			"description": "<p>Av rugmeltyper finner du siktet rugmel, sammalt rug grov og sammalt rug fin.&nbsp;Rug gir en fyldig smak til br&oslash;d. Det gj&oslash;r dessuten br&oslash;det saftig og gir lengre holdbarhet. Fordi proteinet i rug har d&aring;rlig bakeevne, blir br&oslash;d bakt med rugmel tunge og kompakte. Men rug inneholder mye fiber som binder vann, og dette gj&oslash;r det mulig &aring; bake br&oslash;d basert p&aring; bare rug.&nbsp;</p>",
			"pivot": {
				"amount": 1.5,
				"type": "kg"
			}
		},
		{
			"title": "Hvetemel",
			"description": "<p>Hvetemel er finmalt og siktet hvete.</p>",
			"pivot": {
				"amount": 2,
				"type": "kg"
			}
		},
		{
			"title": "Salt",
			"description": "<p>Koksalt eller natriumklorid er et salt, og er en kombinasjon av grunnstoffene natrium og klor, og er kjent som vanlig bordsalt.&nbsp;Salt brukes som smakstilsetning i mat og som det mest utbredte konserveringsmiddel for kj&oslash;tt, fisk og meieriprodukter.&nbsp;</p>",
			"pivot": {
				"amount": 3,
				"type": "ts"
			}
		},
		{
			"title": "Solsikkekjerner",
			"description": "<p>Solsikkekjerner kalles ogs&aring; solsikkefr&oslash;.&nbsp;</p>\n<p>Solsikkekjerner har en god n&oslash;ttesmak, og smaken fremheves ved varmebehandling.</p>\n<p>Vanligvis brukes de i bakverk, b&aring;de i deigen og som pynt. De er fine som tilsetning i blant annet havregryner og yoghurt, men kan ogs&aring; brukes til panering av fisk og kylling.</p>\n<p>Du kan riste solsikkekjerner ved &aring; ha de p&aring; bakepapir i ovnen eller i t&oslash;rr stekepanne.</p>",
			"pivot": {
				"amount": 200,
				"type": "g"
			}
		},
		{
			"title": "Tørrgjær",
			"description": "<p>T&oslash;rrgj&aelig;r er gj&aelig;r i pulverform med lang holdbarhet. Brukes blant annet i baking, vinlegging og &oslash;lbrygging.&nbsp;Gj&aelig;r er levende, og som alt annet levende trenger gj&aelig;rsoppen mat, vann og oksygen.&nbsp;I en deig f&aring;r gj&aelig;rsoppen mat fra stivelsen i melet, vann f&aring;r den fra deigv&aelig;sken, og oksygen f&aring;r den ved at deigen blir knadd. Gj&aelig;r puster ut karbondioksid.&nbsp;Gassen gj&oslash;r at deigen hever.</p>\n<p>Fersk gj&aelig;r hever raskest, mens t&oslash;rrgj&aelig;r trenger lenger tid.&nbsp;<a href=\"http://www.dinside.no/921512/torr-eller-fersk-gjaer-er-forskjellen\" target=\"_blank\">De har de samme egenskapene</a>, men mange bakere opplever bedre resultat med den ferske gj&aelig;ren.</p>",
			"pivot": {
				"amount": 3,
				"type": "pose(r)"
			}
		},
		{
			"title": "Vann",
			"description": "<p>Vann&nbsp;er en fargel&oslash;s v&aelig;ske med&nbsp;kjemisk forbindelse mellom hydrogen og oksygen, H₂O. Vann viser som regel fargen p&aring; stoffene bak eller rundt, eller reflekterer lyset som treffer vannoverflaten.&nbsp;De kjemiske egenskapene til vann er godt egnet til mange funksjoner i levende organismer. Vann har en rekke livsviktige funksjoner i menneskekroppen.&nbsp;Rent vann g&aring;r aldri ut p&aring; dato, s&aring;fremt det oppbevares i tett emballasje,&nbsp;men kan f&oslash;les litt flatt</p>",
			"pivot": {
				"amount": 2,
				"type": "l"
			}
		}
	],
	"steps": [
		{
			"videoId": "",
			"description": "<p>Bland alt det t&oslash;rre i en bolle.&nbsp;Hell romtemperert vann i bollen, ca. 23 grader.&nbsp;</p>",
			"sortOrder": 0
		},
		{
			"videoId": "",
			"description": "<p>Elt deigen godt samme i ca. 10 minutter, gjerne i en maskin til en smidig deig.&nbsp;Sett deigen til heving i vanlig romtemperatur et par timer.</p>",
			"sortOrder": 1
		},
		{
			"videoId": "",
			"description": "<p>Sm&oslash;r formene med en god olje &nbsp;og fordel deigen i br&oslash;dformene.&nbsp;Pensle litt olje p&aring; toppen av br&oslash;dene og dryss p&aring; litt havsalt. Etterhev br&oslash;dene i ca. 30 minutter.&nbsp;</p>",
			"sortOrder": 2
		},
		{
			"videoId": "",
			"description": "<p>Steke br&oslash;dene p&aring; nederste rille i varmluftsovn ved 170 grader i ca. 50 minutter.&nbsp;Ta br&oslash;dene ut av formene og avkj&oslash;l p&aring; rist.&nbsp;</p>\n<p>Obs! Oppskriften kan gjerne halveres, for at deigen skal bli lettere &aring; h&aring;ndtere p&aring; hjemmekj&oslash;kkenet.&nbsp;</p>\n<p>&nbsp;</p>",
			"sortOrder": 3
		}
	],
	"tags": [
		{
			"title": "Brød",
			"url": "https://www.dagbladet.no/mat/oppskrifter/tag/brod"
		},
		{
			"title": "Tag1",
			"url": "https://www.dagbladet.no/mat/oppskrifter/tag/brod"
		},		{
			"title": "Brød3",
			"url": "https://www.dagbladet.no/mat/oppskrifter/tag/brod"
		},
		{
			"title": "Brød",
			"url": "https://www.dagbladet.no/mat/oppskrifter/tag/brod"
		},
		{
			"title": "Brød5",
			"url": "https://www.dagbladet.no/mat/oppskrifter/tag/brod"
		},
		{
			"title": "Brød",
			"url": "https://www.dagbladet.no/mat/oppskrifter/tag/brod"
		},
		{
			"title": "Brød6",
			"url": "https://www.dagbladet.no/mat/oppskrifter/tag/brod"
		},
		{
			"title": "Brød8",
			"url": "https://www.dagbladet.no/mat/oppskrifter/tag/brod"
		},
		{
			"title": "Brød7",
			"url": "https://www.dagbladet.no/mat/oppskrifter/tag/brod"
		},
		{
			"title": "Brød9",
			"url": "https://www.dagbladet.no/mat/oppskrifter/tag/brod"
		}
	]
};

const MainRecipe = props => (
	<Wrapper>
		<Row>
			<Col md={7}>
				<MainRecipeImage src={fakeProp.images[0].largeLandscape} />
			</Col>
			<Col md={5}>
				<ComplexitySection headerTitle={fakeProp.title} entities={[{ slug: 'difficulty', value: fakeProp.difficulty }, { slug: 'activityTime', value: fakeProp.timeCooking }, { slug: 'totalTime', value: fakeProp.timeTotal }]} />
			</Col>
		</Row>
		<Row>
			<Col md={6}>
				<DetailsSection preferences={fakeProp.preferences} allergies={fakeProp.allergies} author={fakeProp.authors[0]} raiting={fakeProp.rating}/>
			</Col>
			<Col md={6}>
				<Description>
					<span>{ fakeProp.description.replace(/<\/?[^>]+>/g, '') }</span>
				</Description>
			</Col>
		</Row>
		<Row>
			<Col md={6}>
				<IngredientsSection servings={fakeProp.servings} ingredients={fakeProp.ingredients} />
			</Col>
			<Col md={6}>
				<StepsSection steps={fakeProp.steps} />
			</Col>
		</Row>
		<AdTags tags={fakeProp.tags} />
		<Related entities={[{ slug: 'difficulty', value: fakeProp.difficulty }, { slug: 'activityTime', value: fakeProp.timeCooking }, { slug: 'totalTime', value: fakeProp.timeTotal }]}  headerTitle={fakeProp.title}/>
		<Footer />
	</Wrapper>
);


export { MainRecipe };
