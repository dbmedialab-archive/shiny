import React from 'react';

import LeetTextarea from '../../src/atoms/LeetTextarea';

import Heading, { SmallHeading } from '../../src/atoms/Heading';
import BodyText from '../../src/atoms/BodyText';

export default () => (
	<section>
		<Heading>Body text</Heading>
		<SmallHeading>Preview</SmallHeading>
		<BodyText>
			SOS Rasisme er dømt for medlemsjuks i et privatsrettslig søksmål fra Landsrådet for norske
			barne- og ungdomsorganisasjoner (LNU). Dommen er anket. Rettssaken avdekket så omfattende juks
			at det senere ble åpnet politietterforskning mot SOS Rasisme og dens ledelse. Etterforskningen
			førte til razzia mot organisasjonens lokaler i Haugesund og i Oslo.
		</BodyText>

		<BodyText>
			Nedover bekken ser vi flere permer i ulike farger ligge strødd. De fleste er forvrengt av
			vannmasser. Innholdet i de fleste permene ser ut til å være vasket vekk. Lenger nedover er det
			bare hvite cellulosekuler igjen av det som en gang var innholdet i disse permene.
		</BodyText>

		<BodyText>
			På åstedet bar de fleste plastpermene preg av å ha vært i vannet over lang tid. De fleste
			inneholdt ikke lenger lesbare dokumenter, men er omgjort til forvridde plastrester. Nedover i
			elva ligger små og store papirbiter omgjort til celluloseklumper. Men et par av permene har
			fortsatt lesbare sider, hvor kun det ytterste laget av papirark er ødelagt.
		</BodyText>

		<SmallHeading>Usage</SmallHeading>
		<LeetTextarea>{`
import BodyText from '/path/to/shiny/atoms/BodyText';

<BodyText>SOS Rasisme er dømt for medlemsjuks i et privatsrettslig søksmål fra Landsrådet for norske
barne- og ungdomsorganisasjoner (LNU). Dommen er anket. Rettssaken avdekket så omfattende juks
at det senere ble åpnet politietterforskning mot SOS Rasisme og dens ledelse. Etterforskningen
førte til razzia mot organisasjonens lokaler i Haugesund og i Oslo.</BodyText>

<BodyText>Nedover bekken ser vi flere permer i ulike farger ligge strødd. De fleste er forvrengt av
vannmasser. Innholdet i de fleste permene ser ut til å være vasket vekk. Lenger nedover er det
bare hvite cellulosekuler igjen av det som en gang var innholdet i disse permene.</BodyText>

<BodyText>På åstedet bar de fleste plastpermene preg av å ha vært i vannet over lang tid. De fleste
inneholdt ikke lenger lesbare dokumenter, men er omgjort til forvridde plastrester. Nedover i
elva ligger små og store papirbiter omgjort til celluloseklumper. Men et par av permene har
fortsatt lesbare sider, hvor kun det ytterste laget av papirark er ødelagt.</BodyText>
   `}
		</LeetTextarea>
	</section>
);
