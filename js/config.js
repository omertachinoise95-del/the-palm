// ══════════════════════════════════════
// CONFIG SUPABASE — ne modifier qu'ici
// ══════════════════════════════════════
const SUPABASE_URL = 'https://maqtghwrzztscibzrbeh.supabase.co';
const SUPABASE_KEY = 'sb_publishable_OnTJml3M6Y2ouPqYAj_W6A_U19BOQSZ';

// ══════════════════════════════════════
// MENU DATA
// ══════════════════════════════════════
const PARFUMS_HOOKAH = [
  'Menthe','Mi Amor','Hawaï Love66','African Queen',
  'Menthe Sucrée (+5€)','Water Melon (+5€)'
];

const MENU = [
  {id:'entrees',label:'ENTRÉES',title:'ENTRÉES',items:[
    {id:'bur',name:'BURRATA',desc:'Fromage italien, tomates, balsamiques',price:12},
    {id:'car',name:'CARPACCIO',desc:'Fines tranches de boeuf, parmesan (supp. Buratta 6€)',price:11},
    {id:'foi',name:'FOIE GRAS',desc:'Foie gras de canard, confiture de figues, toasts',price:14},
  ]},
  {id:'plats',label:'PLATS',title:'PLATS',sub:'SERVIS AVEC ACCOMPAGNEMENT AU CHOIX',
   extra:'SUPPLEMENT GARNITURE 5€ — Frite maison, saute de legumes, puree maison',items:[
    {id:'esc',name:'ESCALOPE NORMANDE',desc:'Filet de poulet tendre, sauce forestiere',price:17},
    {id:'ent',name:'ENTRECOTE',desc:'Belle piece de boeuf grilee, servie avec sauce',price:25},
    {id:'fil',name:'FILET DE BOEUF',desc:'Piece de boeuf tendre et juteuse, servie avec sauce',price:26},
    {id:'sal',name:'PAVE DE SAUMON',desc:'Creme de citron, sauce pesto',price:20},
    {id:'carb',name:'PATES CARBONARA',desc:'Lardon, creme liquide, parmesan, oeuf',price:15},
    {id:'arr',name:'PATES PENNE ARRABBIATA',desc:'Sauce tomate epicee piquante, burrata',price:15},
    {id:'forr',name:'PATE FORESTIERE',desc:'Poulet, champignons, creme liquide, parmesan',price:15},
  ]},
  {id:'desserts',label:'DESSERTS',title:'DESSERTS',items:[
    {id:'tro',name:"TROMPE L'OEIL",desc:'Selon arrivage',price:12},
    {id:'pat',name:'PATISSERIE',desc:'Selon arrivage',price:10},
    {id:'pai',name:'PAIN PERDU',desc:'Fruits rouges, chocolat ou caramel beurre sale',price:10},
  ]},
  {id:'boissons',label:'SOFTS',title:'BOISSONS',items:[
    {id:'caf',name:'CAFE',desc:'',price:2},
    {id:'the2',name:'THE',desc:'',price:5},
    {id:'evi',name:'EVIAN 50CL',desc:'',price:6},
    {id:'san',name:'SANPELLEGRINO 65CL',desc:'',price:6},
    {id:'coc',name:'COCA 33CL',desc:'',price:6},
    {id:'coz',name:'COCA ZERO 33CL',desc:'',price:6},
    {id:'cch',name:'COCA CHERRY 33CL',desc:'',price:6},
    {id:'ice',name:'ICE TEA 33CL',desc:'',price:6},
    {id:'oas',name:'OASIS 33CL',desc:'',price:6},
    {id:'spr',name:'SPRITE 33CL',desc:'',price:6},
    {id:'ora',name:'ORANGINA 25CL',desc:'',price:6},
    {id:'red',name:'REDBULL 25CL',desc:'',price:6},
  ]},
  {id:'jus',label:'JUS',title:'JUS',items:[
    {id:'pom',name:'POMME',desc:'',price:5},
    {id:'jor',name:'ORANGE',desc:'',price:5},
    {id:'jan',name:'ANANAS',desc:'',price:5},
    {id:'jpa',name:'PASSION',desc:'',price:5},
    {id:'jcr',name:'CRANBERRY',desc:'',price:5},
    {id:'jma',name:'MANGUE',desc:'',price:5},
  ]},
  {id:'mocktails',label:'MOCKTAILS',title:'MOCKTAILS',items:[
    {id:'vm',name:'VIRGIN MOJITO 33CL',desc:'Menthe, citron vert, sucre de canne, limonade',price:10},
    {id:'cp',name:'COCO PINEAPPLE 50CL',desc:"Creme de coco, jus d'ananas, sucre de canne",price:10},
    {id:'ps',name:'PORN STAR 25CL',desc:"Jus de passion, jus d'orange, sirop vanille",price:10},
    {id:'rb',name:'RED BERRY 50CL',desc:'Cranberry, pomme, sirop myrtille, framboise',price:10},
    {id:'lm',name:"LE MINTS 50CL",desc:'Mangue, creme de coco, sirop cerise',price:10},
    {id:'vir',name:"VIRIDIS 50CL",desc:'Jus pomme, sirop banane, sirop kiwi',price:10},
  ]},
  {id:'cocktails',label:'COCKTAILS',title:'COCKTAILS',items:[
    {id:'moj',name:'MOJITO 33CL',desc:'Menthe, citron vert, sucre de canne, rhum 6cl',price:12},
    {id:'psc',name:'PORN STAR 20CL',desc:'Jus passion, liqueur passion 2cl, vodka 4cl',price:12},
    {id:'teq',name:'TEQUILA SUNRISE 30CL',desc:"Tequila 5cl, jus d'orange, grenadine",price:12},
    {id:'cos',name:'COSMOPOLITAN 30CL',desc:'Vodka 5cl, triple sec 2cl, cranberry, citron vert',price:12},
    {id:'jc',name:'JACK CHARM 30CL',desc:"Jack Daniels 4cl, triple sec 2cl, jus pomme",price:12},
  ]},
  {id:'alcool',label:'ALCOOL',title:'ALCOOL',items:[
    {id:'wh',name:'VERRE DE WHISKY',desc:'',price:10},
    {id:'vo',name:'VERRE DE VODKA',desc:'',price:10},
    {id:'supcoc',name:'SUPPLEMENT COCA / REDBULL',desc:'',price:2},
    {id:'bv',name:'BOUTEILLE DE VIN',desc:'',price:40},
    {id:'bc',name:'BOUTEILLE DE CHAMPAGNE',desc:'',price:80},
  ]},
  {id:'hookah',label:'HOOKAH',title:'HOOKAH',hookah:true,items:[
    {id:'qhs',name:'QUASAR HOMME — SEMAINE',desc:'Hookah Homme en semaine',price:15},
    {id:'qfs',name:'QUASAR FEMME — SEMAINE',desc:'Hookah Femme en semaine',price:10},
    {id:'qhw',name:'QUASAR HOMME — WEEK-END',desc:'Hookah Homme le week-end',price:20},
    {id:'qfw',name:'QUASAR FEMME — WEEK-END',desc:'Hookah Femme le week-end',price:15},
  ]},
];
