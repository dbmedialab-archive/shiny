import React from 'react';
import { Grid } from '../../src/atoms/Grid';
import { Paragraph } from '../../src/atoms/Paragraph';
import { ArticleHeader } from '../../src/molecules/Article/Header';
import { TrysilPlug } from '../../src/molecules/TrysilPlug';
import { FloatImage } from '../../src/molecules/FloatImage';
import {
	MediumDymoHeading,
} from '../../src/atoms/DymoHeading';

const basic = () => {
	return (
		<React.Fragment>
			<ArticleHeader
				intro="Prins Harry og hertuginne Meghan:"
				title="Harry og Meghan sjarmerte alle i senk"
				subtitle="Hertugparet delte ut klemmer på sitt offisielle besøk."
				imageText="HILSTE PÅ: Hertuginne Meghan og prins Harry tok seg god tid med folket da de besøkte den engelske byen Sussex. Foto: NTB scanpix"
				imageURL="//dbstatic.no/70279953.jpg?imageId=70279953&amp;x=4.0835707502374&amp;y=0&amp;cropw=93.06742640076&amp;croph=100&amp;width=980&amp;height=590"
				published="2018-10-04T05:02:33.000Z"
				modified="2018-10-04T05:02:33.000Z"
				bylines={[{
					firstName: 'Kine', lastName: 'Falch', email: 'kine.falch@aller.com', imageURL: '//dbstatic.no/68661363.jpg?imageId=68661363&x=0&y=0&cropw=100&croph=85.365853658537&width=140&height=140&compression=80',
				}, {
					firstName: 'Ola', lastName: 'Nordmann', email: 'ola.nordmann@aller.com', imageURL: '',
				}]}
			/>
			<Paragraph>
				Onsdag var <a href="https://www.seher.no/kongelig/disse-bildene-far-fansen-til-a-klo-seg-i-hodet/69993512">prins Harry (34) og hertuginne Meghan (37)</a> på et offisielt besøk i den engelske byen Sussex.
			</Paragraph>
			<Paragraph>
				Hertugparet ankom via helikopter, og startet dagen i Chichester -
				vest i Sussex. Lokalbefolkningen var i ekstase over det kongelige
				besøket, og sto på rekke og rad i gatene i håp om å hilse på
				ekteparet.
			</Paragraph>
			<TrysilPlug column={{ xs: 6 }} float="right" title="- Det må ligge misunnelse bak" placeholderUrl="//dbstatic.no/69647879.jpg?imageId=69647879&x=6.5633802816901&y=7.4919959266802&cropw=90.704225352113&croph=32.790224032587&width=202&height=101&compression=80" url="https://www.seher.no/kjendis/det-ma-ligge-misunnelse-bak-kritikken/69647852" image="//dbstatic.no/69647879.jpg?imageId=69647879&x=6.5633802816901&y=7.4919959266802&cropw=90.704225352113&croph=32.790224032587&width=202&height=101&compression=80" ratio={0.5} />
			<Paragraph>
				Hertuginne Meghan var ikledd en grønn bluse, et grønt skinnskjørt av Hugo Boss og en kremfarget kåpe fra Armani. Håret var <a href="https://www.seher.no/kjendis/det-ma-ligge-misunnelse-bak-kritikken/69647852">oppsatt i en løs knute, i kjent stil.</a>
			</Paragraph>
			<Paragraph>
				<strong>
					Ifølge <a href="https://www.hellomagazine.com/royalty/gallery/2018100363019/prince-harry-meghan-markle-sussex-live-updates/13/">Hello Magazine</a> kom hertugparet blant annet i prat med to ti år gamle klassekamerater, Thomas og Kieran. Sammen med klassen sin ved Westbourne House School hadde de laget en presentasjon av byen til paret, med blant annet bilder av kjente landemerker.
				</strong>
			</Paragraph>
			<Paragraph>
				Hertuginnen skal ha tatt imot gaven med et stort smil om munnen.
			</Paragraph>
			<Paragraph>
				- Tusen, tusen takk. Det er så kult. Dette vil være til stor
				hjelp neste gang vi kommer hit, sa hun til guttene, ifølge
				nettstedet.
			</Paragraph>
			<Paragraph>
				<i>Saken fortsetter nedenfor.</i>
			</Paragraph>
			<FloatImage url={'//dbstatic.no/70279894.jpg?imageId=70279894&x=0&y=3.202479338843&cropw=100&croph=41.838842975207&width=613&height=405'} figCaption={{ active: false, intro: 'SNAKKET MED BARNA:', text: 'Hertuginne Meghan tok seg god tid til å snakke med barna som hadde møtt opp utenfor Westbourne House School. Foto: NTB scanpix' }} />
			<Paragraph>
				<strong>
					Da prins Harry ble informert om at de to kameratene gikk glipp
					av en latinprøve på skolen for å møte dem, ga han dem en
					overraskende high five.
				</strong>
			</Paragraph>
			<Paragraph>
				<i>Saken fortsetter nedenfor.</i>
			</Paragraph>
			<FloatImage url={'//dbstatic.no/70279893.jpg?imageId=70279893&width=1024&height=615'} figCaption={{ active: false, intro: 'GA HIGH FIVE:', text: 'Prins Harry skal ha ledd godt da et par klassekamerater innrømmet å ha droppet en skoleprøve for å møte hertugparet. Foto: NTB scanpix' }} />
			<MediumDymoHeading>Ga klemmer</MediumDymoHeading>
			<Paragraph>
				Harry og Meghan skal begge ha vært i strålende humør under
				besøket i Sussex. Ifølge Hello skal de ha hilst på folket som kom
				ut i gatene for å se dem, og tok seg god tid til å snakke med så
				mange som mulig.
			</Paragraph>
			<Paragraph>
				De delte ut klemmer, og Meghan bøyde seg stadig ned på huk for å
				hilse på både hunder og barn som sto plassert bak avsperringene.
			</Paragraph>
			<Paragraph>
				<i>Saken fortsetter nedenfor.</i>
			</Paragraph>
			<FloatImage url={'//dbstatic.no/70279963.jpg?imageId=70279963&x=0&y=6.2355658198614&cropw=100&croph=84.988452655889&width=613&height=368'} figCaption={{ active: false, intro: 'FIKK KONGELIG VELKOMST:', text: 'Det var lite å si på humøret da hertugparet ankom Sussex onsdag formiddag. Foto: NTB scanpix' }} />
			<FloatImage url={'//dbstatic.no/70279911.jpg?imageId=70279911&width=1024&height=615'} figCaption={{ active: false, intro: 'DYREVENN:', text: 'Hertuginnen, som selv har to hunder, tok seg også tid til å hilse på de firbeinte som var til stede i gatene i forbindelse med hertugparets besøk. Foto: NTB scanpix' }} />
			<Paragraph>
				Parets første stopp var ved Edes House, hvor de ble vist en
				sjelden Sussex-kopi av den amerikanske uavhengighetserklæringen.
			</Paragraph>
			<Paragraph>
				<strong>
					Det er den ene av to håndskrevne eksemplarer, der den andre
					signerte kopien er plassert ved The National Archives i
					Washington D.C.
				</strong>
			</Paragraph>
			<Paragraph>
				Ifølge <a href="https://people.com/royals/meghan-markle-prince-travel-sussex/">People</a> skal de begge ha skrevet en hyggelig hilsen i
				husets gjestebok før de reiste videre langs kysten til Bognor
				Regis, hvor de blant annet besøkte universitetet.
			</Paragraph>
			<Paragraph>
				<i>Saken fortsetter nedenfor.</i>
			</Paragraph>
			<FloatImage url={'//dbstatic.no/70279918.jpg?imageId=70279918&x=18.292682926829&y=28.010471204188&cropw=74.680603948897&croph=67.247386759582&width=643&height=387'} figCaption={{ active: false, intro: 'IMPONERT:', text: 'Både prins Harry og hertuginne Meghan skal ha synes det var stor stas å se den sjeldne kopien av den amerikanske uavhengighetserklæringen. Foto: NTB scanpix' }} />
			<MediumDymoHeading>Tittelen kan dø ut</MediumDymoHeading>
			<Paragraph>
				Prins Harry og hertuginne Meghan fikk tildelt sine titler, hertug og hertuginne av Sussex, på bryllupsdagen sin 19. mai.
			</Paragraph>
			<Paragraph>
				Da prins William og Kate Middleton giftet seg i 2011, fikk de tildelt titlene hertug og hertuginne av Cambridge.
			</Paragraph>
			<Paragraph>
				<strong>Ifølge <a href="https://www.independent.ie/style/celebrity/celebrity-news/why-meghan-and-harrys-future-daughters-wont-inherit-a-royal-title-36974804.html">Independent</a> vil kun en sønn arve hertugdømmet og hertugtittelen dersom Harry og Meghan får barn i fremtiden. En eventuell datter vil få tittelen «lady».</strong>
			</Paragraph>
			<TrysilPlug
				column={{ xs: 6 }}
				float="right"
				title="- Tittelen vil kun gå videre hvis de får en sønn"
				placeholderUrl="//dbstatic.no/69871556.jpg?imageId=69871556&x=9.3088857545839&y=6.6666666666667&cropw=90.691114245416&croph=69.247311827957&width=322&height=162&compression=80"
				url="https://www.seher.no/kongelig/hertugtittelen-vil-kun-ga-videre-hvis-meghan-og-harry-far-en-sonn/69869896"
				image="//dbstatic.no/69871556.jpg?imageId=69871556&x=9.3088857545839&y=6.6666666666667&cropw=90.691114245416&croph=69.247311827957&width=322&height=162&compression=80"
				ratio={0.5}
			/>
			<Paragraph>
				Deres <a href="https://www.seher.no/kongelig/hertugtittelen-vil-kun-ga-videre-hvis-meghan-og-harry-far-en-sonn/69869896">nåværende tittel som hertug og hertuginne av Sussex vil altså dø ut</a> dersom de kun får døtre sammen.
			</Paragraph>
			<Paragraph>
				<strong>Se og Hørs kongehusekspert, Caroline Vagle, har tidligere uttalt at hun tror hertuginne Meghan synes denne problemstillingen er ubehagelig.</strong>
			</Paragraph>
			<Paragraph>- Jeg tenker at Meghan med sine sterke feministiske prinsipper garantert er ukomfortabel med at eventuelle døtre ikke har samme rettigheter som eventuelle sønner, sa hun og la til:</Paragraph>
			<Paragraph>- Hun har blant annet jobbet tett med FNs organ for likestilling og styrking av kvinners rettigheter i flere år, og som 11-åring skrev hun brev til den gang presidentfrue Hillary Clinton for å protestere mot at reklamen for et oppvaskmiddel hevdet at «mødre over hele USA kjemper mot skitne gryter». Det ble endret til: «folk over hele USA».</Paragraph>
		</React.Fragment>
	);
};

export default basic;
