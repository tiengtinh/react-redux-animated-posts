import moment from 'moment'
import _ from 'lodash'

export const samplePosts = [
  {
    id: _.uniqueId(),
    title: 'Master Bath Reno - DIY project.',
    author: 'Iorishopaholic',
    cAt: moment().subtract(5, 'days').toDate(),
    uAt: moment().subtract(5, 'hours').toDate(),
    categories: ['cold'],
    content: `Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and monospace. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺
    `,
    comments: [{}, {}]
  },
  {
    id: _.uniqueId(),
    title: 'Kitchen table color?',
    author: 'auntjen',
    cAt: moment().subtract(5, 'years').subtract(2, 'months').subtract(50, 'minutes').toDate(),
    uAt: moment().subtract(1, 'days').toDate(),
    categories: ['hot', 'cold'],
    content: `Here's a definition list:

apples
  : Good for making applesauce.
oranges
  : Citrus!
tomatoes
  : There's no "e" in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each
term/definition pair to spread things out more.)
## Fuga ortus

Queant tuum iamque gramen in ut ab ducunt adsere struxerit fessa munera, una
pura non artus mors nautas nec. Ignes stillanti iussa sic tectis date illuc:
atras unam adgreditur. Mirabere gutture rapta, *nunc serpere*. Tuam alimentaque
tempora cornuaque corpus *genitus Crathis o* sonuit sunt pedum in.`,
    comments: [{}, {}, {}]
  },
  {
    id: _.uniqueId(),
    title: 'The 2 1/2x to 3x window width something long here',
    author: 'J.T.',
    cAt: new Date(),
    uAt: new Date(),
    categories: ['hot'],
    content: `Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.

Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.

Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.`,
    comments: []
  },
  {
    id: _.uniqueId(),
    title: 'How to raise table lamps',
    author: 'rockybird',
    cAt: new Date(),
    uAt: new Date(),
    categories: ['cold', 'hot'],
    content: `# Maesto oracula coepto suorum

## Nec nocte differt

Lorem markdownum modo palustris ipsum deceptam summo visus Thebis, **ferre**
nascitur, mox responde, in ab! Silvis invidiosa licentia Cocalus; cum in,
profuga has fetus arsit vidi, sit porrigit tenuit vidit, murmur. Caelo quod
inlustre mille, surrexere stravit rapite di opaca: mihi parva, instat. Superbum
sustinet, flebant cupiens causa participes caedis quaeras tu tenebant laudibus.

## Fluxerunt ingens deposcunt deducit est infusa artus

Qui Aeeta **templis Pico** insidiae et matris, ubi, nec hinc aliturque Cinyreia,
magno Capitolia esse! Ora medullis color concurreret somno, Hippomenen certaque
Idmoniae tamen. Interiit laesi ille: silvis duos Veneris **Talibus** componar
facientes Ausoniae nocti: visa. Videor prece; viri repetitum aequor, lucis
[delapsa tribulique](http://jaspervdj.be/) altera pauper.`,
    comments: []
  }
]
