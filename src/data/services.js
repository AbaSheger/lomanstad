import hemstadningImg from '../assets/hemstadning.jpeg'
import flyttstadningImg from '../assets/flyttstadning.jpeg'
import kontorsstadningImg from '../assets/kontorsstadning.jpeg'
import storstadningImg from '../assets/storstadning.jpeg'
import trappstadningImg from '../assets/trappstadning.jpeg'
import fonsterputsningImg from '../assets/fonsterputsning.jpeg'

export const services = [
  {
    id: 'hemstadning',
    title: 'Hemstädning',
    icon: null,
    image: hemstadningImg,
    badge: 'RUT-avdrag',
    short: 'Återkommande städning hemma med RUT-avdrag.',
    details: [
      {
        heading: 'Alla rum',
        items: [
          'Dammsugning av golv, mattor, soffor',
          'Golven moppas',
          'Avtorkning av dörrar, karmar, fönsterbrädor, möbler, lampor',
          'Putsning av speglar',
          'Tömning av papperskorgar',
        ],
      },
      {
        heading: 'Kök',
        items: [
          'Avtorkning av köksluckor, utsidan av vitvaror',
          'Avtorkning av ugn, insidan av mikron',
          'Rengöring av kakel, köksbänk, spis och diskho',
          'Tömning av sopor',
        ],
      },
      {
        heading: 'Badrum',
        items: [
          'Rengöring av dusch och handfat',
          'Rengöring av toalett',
          'Putsning av speglar',
          'Moppning av golv',
        ],
      },
    ],
  },
  {
    id: 'flyttstadning',
    title: 'Flyttstädning',
    icon: null,
    image: flyttstadningImg,
    badge: 'Garanti',
    short: 'Komplett flyttstädning med garanti.',
    details: [
      {
        heading: 'Alla rum',
        items: [
          'Fönsterputs',
          'Rengöring av golvlister, dörrar, karmar',
          'Rengöring av garderober',
        ],
      },
      {
        heading: 'Kök',
        items: [
          'Rengöring av kyl, frys, spis, ugn, diskmaskin',
          'Rengöring av skåp och bänkar',
        ],
      },
      {
        heading: 'Badrum',
        items: [
          'Rengöring av toalett, dusch, badkar',
          'Rengöring av kakelväggar',
          'Rengöring av tvättmaskin, torktumlare',
        ],
      },
    ],
  },
  {
    id: 'storstadning',
    title: 'Storstädning',
    icon: null,
    image: storstadningImg,
    short: 'Grundlig rengöring av hela hemmet.',
    details: [
      {
        heading: 'Alla rum',
        items: [
          'Dammsugning och moppning',
          'Avtorkning av alla ytor även högt upp',
          'Skakning av mattor',
        ],
      },
      {
        heading: 'Badrum',
        items: [
          'Rengöring av väggar, badkar, toalett',
          'Rengöring av kranar och golvbrunn',
        ],
      },
      {
        heading: 'Kök',
        items: [
          'Rengöring av ugn, mikro, fläkt',
          'Rengöring av köksluckor, spis, kakel',
        ],
      },
    ],
  },
  {
    id: 'kontorsstadning',
    title: 'Kontorsstädning',
    icon: null,
    image: kontorsstadningImg,
    short: 'Regelbunden städning av kontorslokaler.',
    details: [
      {
        heading: 'Alla rum',
        items: [
          'Dammsuga och fuktmoppa',
          'Damma fria ytor',
          'Ta bort fläckar',
          'Tömma papperskorgar',
        ],
      },
      {
        heading: 'Toaletter',
        items: ['Rengöra invändigt och utvändigt'],
      },
      {
        heading: 'Kök/pentry',
        items: [
          'Rengöra kök och avtorkning av bänkar',
          'Tömning av diskmaskin',
          'Avtorkning av kyl',
        ],
      },
    ],
  },
  {
    id: 'fonsterputsning',
    title: 'Fönsterputsning',
    icon: null,
    image: fonsterputsningImg,
    short: 'Professionell rengöring av glasytor.',
    details: [
      {
        heading: 'Vad ingår',
        items: [
          'Rengöring av glasytor invändigt och/eller utvändigt',
          'Grundlig borttagning av fläckar och fingeravtryck',
          'Avtorkning av fönsterbrädor, spröjs, karmar och fönsterbleck',
          'Avlägsning av damm runt lister och kanter',
        ],
      },
    ],
  },
  {
    id: 'trappstadning',
    title: 'Trappstädning',
    icon: null,
    image: trappstadningImg,
    short: 'Städning av trapphus och gemensamma utrymmen.',
    details: [
      {
        heading: 'Vad ingår',
        items: [
          'Våttorkning av trappor och vilplan',
          'Rengöring av handledare, räcken och ledstänger',
          'Avtorkning av entrédörrar, glasytor och lister',
          'Rengöring av lampknappar och trappräcken',
        ],
      },
    ],
  },
]
