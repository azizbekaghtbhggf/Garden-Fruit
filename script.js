const F=[
{e:"🍌",i:"images/banan.webp",n:"Banan",l:"Musa",c:"#ffe27a",g:"Issiq tropik",t:"9–12 oy (daraxt ekilgandan mevagacha)",v:["Kaliy","B6 vitamini","C vitamini"],k:89,f:"Banan tez energiya beradi va mushaklarni tinchlantiradi."},
{e:"🥭",i:"images/mango.webp",n:"Mango",l:"Mangifera indica",c:"#ffc15c",g:"Hindiston, issiq iqlim",t:"3–5 yil (mevaga kirishi), meva 3–4 oyda pishadi",v:["A vitamini","C vitamini","Folat"],k:60,f:"Mango ko'rish uchun foydali va terini yaxshilaydi."},
{e:"🥝",i:"images/kivi.webp",n:"Kivi",l:"Actinidia",c:"#b8e08a",g:"Xitoy, Yangi Zelandiya",t:"3–4 yil (mevaga kirishi), meva 6–7 oyda pishadi",v:["C vitamini","K vitamini","E vitamini"],k:61,f:"Kivida apelsinga qaraganda C vitamini ko'proq bo'ladi."},
{e:"🍓",i:"images/qulupnay.webp",n:"Qulupnay",l:"Fragaria",c:"#ff9aa8",g:"Butun dunyo, mo'tadil iqlim",t:"4–6 hafta (gulidan pishgunicha)",v:["C vitamini","Marganets","Folat"],k:32,f:"Qulupnay yurak uchun foydali va juda kam kaloriyali."},
{e:"🍊",i:"images/mandarin.webp",n:"Mandarin",l:"Citrus reticulata",c:"#ffb25c",g:"Xitoy, Yaponiya, Markaziy Osiyo",t:"3–5 yil (mevaga kirishi), meva 6–8 oyda pishadi",v:["C vitamini","A vitamini","Flavonoidlar"],k:53,f:"Mandarin immunitetni mustahkamlaydi, qishda ayniqsa foydali."},
{e:"🍍",i:"images/ananas.webp",n:"Ananas",l:"Ananas comosus",c:"#ffe066",g:"Janubiy Amerika, tropik",t:"18–24 oy (ekilgandan mevagacha)",v:["C vitamini","Bromelain","Marganets"],k:50,f:"Ananasdagi bromelain ovqat hazm qilishga yordam beradi."},
{e:"🍉",i:"images/tarvuz.webp",n:"Tarvuz",l:"Citrullus lanatus",c:"#ff8f8f",g:"Afrika, issiq yoz",t:"80–100 kun (urug'dan pishgunicha)",v:["C vitamini","A vitamini","Likopen"],k:30,f:"Tarvuzning 90% qismi suv, jazirama kunda chanqoqni bosadi."},
{e:"🍇",i:"images/uzum.webp",n:"Uzum",l:"Vitis vinifera",c:"#c9a7f0",g:"O'zbekiston, O'rta yer dengizi",t:"2–3 yil (mevaga kirishi), meva 4–5 oyda pishadi",v:["K vitamini","C vitamini","Resveratrol"],k:69,f:"Uzum antioksidantlarga boy va yurakni asraydi."},
{e:"🍎",i:"images/olma.webp",n:"Olma",l:"Malus domestica",c:"#ff9d8a",g:"Mo'tadil iqlim",t:"3–5 yil (mevaga kirishi), meva 5–6 oyda pishadi",v:["C vitamini","Kletchatka","Kaliy"],k:52,f:"Kuniga bitta olma hazmni yaxshilaydi."},
{e:"🍑",i:"images/shaftoli.webp",n:"Shaftoli",l:"Prunus persica",c:"#ffc3a0",g:"Xitoy, Markaziy Osiyo",t:"3–4 yil (mevaga kirishi), meva 4–5 oyda pishadi",v:["A vitamini","C vitamini","Kaliy"],k:39,f:"Shaftoli terini yumshoq qiladi va ko'zga foydali."}
];

const g=(id,a,b,cx=35,cy=30)=>`<radialGradient id="${id}" cx="${cx}%" cy="${cy}%" r="75%"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></radialGradient>`;
const S=b=>`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">${b}</svg>`;
const L=(d,c='#3f9a2d')=>`<path d="${d}" fill="${c}"/>`;
const R=(n,f)=>[...Array(n)].map((_,i)=>f(i,i/n*6.283)).join('');
const ART={
Mango:S(`<defs>${g('mg','#ffe36a','#f2622e')}</defs><path d="M60 62C95 25 165 40 172 100C178 150 130 182 88 172C45 160 25 110 60 62Z" fill="url(#mg)"/><path d="M72 72C95 52 130 54 150 74" stroke="#fff" stroke-opacity=".4" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M92 42C92 32 100 28 108 26" stroke="#5a3a1a" stroke-width="5" fill="none" stroke-linecap="round"/>${L('M104 32C125 8 155 14 160 22C145 36 120 40 104 32Z')}`),
Kivi:S(`<defs>${g('kw','#c8f27a','#5aa51f',50,50)}</defs><ellipse cx="100" cy="100" rx="84" ry="80" fill="#8a6a3c"/><ellipse cx="100" cy="100" rx="76" ry="72" fill="url(#kw)"/>${R(18,(i,a)=>`<line x1="${100+Math.cos(a)*26}" y1="${100+Math.sin(a)*24}" x2="${100+Math.cos(a)*68}" y2="${100+Math.sin(a)*64}" stroke="#e9f7b0" stroke-opacity=".45" stroke-width="2.5"/>`)}<ellipse cx="100" cy="100" rx="24" ry="22" fill="#f4f8d0"/>${R(22,(i,a)=>{const x=100+Math.cos(a)*38,y=100+Math.sin(a)*35;return `<ellipse cx="${x}" cy="${y}" rx="2.6" ry="5" fill="#1b1b12" transform="rotate(${a*57.3-90} ${x} ${y})"/>`})}`),
Qulupnay:S(`<defs>${g('st','#ff6b6b','#c4162a')}<clipPath id="sc"><path d="M100 180C48 150 26 105 38 74C50 46 88 50 100 64C112 50 150 46 162 74C174 105 152 150 100 180Z"/></clipPath></defs><path d="M100 180C48 150 26 105 38 74C50 46 88 50 100 64C112 50 150 46 162 74C174 105 152 150 100 180Z" fill="url(#st)"/><g clip-path="url(#sc)">${[0,1,2,3,4].map(r=>[0,1,2,3,4].map(c=>`<ellipse cx="${52+c*24+(r%2)*12}" cy="${82+r*20}" rx="2.6" ry="4" fill="#ffe9a8"/>`).join('')).join('')}</g>${L('M100 66C85 44 58 50 52 66C74 64 88 68 100 74C112 68 126 64 148 66C142 50 115 44 100 66Z')}<rect x="96" y="32" width="8" height="32" rx="4" fill="#3f9a2d"/>`),
Mandarin:S(`<defs>${g('md','#ffc15c','#f0731a')}</defs><ellipse cx="100" cy="112" rx="82" ry="72" fill="url(#md)"/><ellipse cx="72" cy="86" rx="22" ry="10" fill="#fff" fill-opacity=".3" transform="rotate(-25 72 86)"/><ellipse cx="100" cy="44" rx="11" ry="6" fill="#7a8f1f"/>${L('M104 42C125 16 156 22 162 30C146 44 122 48 104 42Z')}`),
Ananas:S(`<defs>${g('pn','#ffe45c','#f0a020',40,35)}<pattern id="pp" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0H24M0 0V24" stroke="#b8651b" stroke-width="3"/></pattern></defs><ellipse cx="100" cy="132" rx="54" ry="64" fill="url(#pn)"/><ellipse cx="100" cy="132" rx="54" ry="64" fill="url(#pp)" opacity=".55"/>${L('M100 74C88 44 92 14 100 2C108 14 112 44 100 74Z')}${L('M100 74C70 60 62 30 70 14C86 32 96 50 100 74Z')}<g transform="translate(200 0) scale(-1 1)">${L('M100 74C70 60 62 30 70 14C86 32 96 50 100 74Z')}</g>${L('M100 76C62 74 40 54 36 40C62 42 86 56 100 76Z','#4aa832')}<g transform="translate(200 0) scale(-1 1)">${L('M100 76C62 74 40 54 36 40C62 42 86 56 100 76Z','#4aa832')}</g>`),
Tarvuz:S(`<defs>${g('wm','#ff8a8a','#e0243a',50,40)}</defs><g transform="translate(0 28)"><path d="M10 70A90 90 0 0 0 190 70Z" fill="#2f7d2a"/><path d="M20 70A80 80 0 0 0 180 70Z" fill="#eaf5cf"/><path d="M27 70A73 73 0 0 0 173 70Z" fill="url(#wm)"/>${[[60,92],[90,108],[120,92],[150,100],[75,78],[110,80],[135,78]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="3" ry="5.5" fill="#222" transform="rotate(-20 ${x} ${y})"/>`).join('')}</g>`),
Uzum:S(`<defs>${g('gr','#b58be0','#5a2a99')}</defs><path d="M100 36C98 24 104 14 112 10" stroke="#5a3a1a" stroke-width="5" fill="none" stroke-linecap="round"/>${L('M104 22C125 4 156 10 162 20C146 34 122 36 104 22Z')}${[0,1,2,3].map(r=>[...Array(4-r)].map((_,c)=>{const x=100+(c-(3-r)/2)*34,y=62+r*33;return `<circle cx="${x}" cy="${y}" r="19" fill="url(#gr)"/><circle cx="${x-6}" cy="${y-7}" r="4.5" fill="#fff" fill-opacity=".5"/>`}).join('')).join('')}`),
Olma:S(`<defs>${g('ap','#ff7a6a','#c4161c')}</defs><path d="M100 64C80 44 30 54 32 112C34 156 70 186 100 174C130 186 166 156 168 112C170 54 120 44 100 64Z" fill="url(#ap)"/><ellipse cx="68" cy="94" rx="9" ry="22" fill="#fff" fill-opacity=".3" transform="rotate(15 68 94)"/><path d="M100 64C100 50 104 40 112 32" stroke="#5a3a1a" stroke-width="5" fill="none" stroke-linecap="round"/>${L('M108 44C126 22 154 26 160 34C146 50 122 54 108 44Z')}`),
Shaftoli:S(`<defs>${g('pc','#ffd48a','#ff6f5c')}</defs><path d="M100 54C60 42 22 80 32 122C42 162 80 182 100 174C120 182 158 162 168 122C178 80 140 42 100 54Z" fill="url(#pc)"/><path d="M100 57C86 92 90 140 100 174" stroke="#d94a3a" stroke-opacity=".35" stroke-width="4" fill="none"/><ellipse cx="68" cy="92" rx="10" ry="20" fill="#fff" fill-opacity=".3" transform="rotate(20 68 92)"/>${L('M102 56C124 30 156 34 164 44C148 60 122 64 102 56Z')}`)
};
F.push({e:"🍋",i:"images/limon.webp",n:"Limon",l:"Citrus limon",c:"#fff08a",g:"Hindiston, O'rta yer dengizi",t:"3–5 yil (mevaga kirishi), meva 6–9 oyda pishadi",v:["C vitamini","B6 vitamini","Kaliy"],k:29,f:"Limon immunitetni qo'llaydi va choyga ajoyib ta'm beradi."},{e:"🍒",i:"images/gilos.webp",n:"Gilos",l:"Prunus avium",c:"#ff9aa8",g:"Mo'tadil iqlim, Markaziy Osiyo",t:"3–5 yil (mevaga kirishi), gulidan 2 oyda pishadi",v:["C vitamini","Kaliy","Antosianlar"],k:63,f:"Gilos uyquni yaxshilaydi va yallig'lanishni kamaytiradi."},{e:"🍐",i:"images/nok.webp",n:"Nok",l:"Pyrus communis",c:"#d8e88a",g:"Mo'tadil iqlim",t:"4–6 yil (mevaga kirishi), meva 4–5 oyda pishadi",v:["Kletchatka","C vitamini","K vitamini"],k:57,f:"Nok hazmni yaxshilaydi va uzoq vaqt to'q tutadi."});
Object.assign(ART,{
Anor:S(`<defs>${g('an','#ff6a5a','#9c0f2a')}</defs><circle cx="100" cy="112" r="68" fill="url(#an)"/><path d="M72 54L80 36L92 46L100 28L108 46L120 36L128 54Z" fill="#b01a38"/><ellipse cx="76" cy="92" rx="10" ry="22" fill="#fff" fill-opacity=".28" transform="rotate(20 76 92)"/>`),
Behi:S(`<defs>${g('bh','#fff07a','#d6a21a')}</defs><path d="M100 46C86 46 76 60 70 78C60 100 32 112 38 148C44 178 80 188 100 184C120 188 156 178 162 148C168 112 140 100 130 78C124 60 114 46 100 46Z" fill="url(#bh)"/><ellipse cx="76" cy="120" rx="9" ry="22" fill="#fff" fill-opacity=".3" transform="rotate(15 76 120)"/><path d="M100 48C100 36 104 28 110 22" stroke="#5a3a1a" stroke-width="5" fill="none" stroke-linecap="round"/>${L('M106 34C124 14 150 18 156 26C142 42 120 44 106 34Z')}`),
Anjir:S(`<defs>${g('aj','#c48ae8','#4a1f6e')}</defs><path d="M100 36C112 36 118 46 122 64C130 94 168 114 160 148C152 182 120 190 100 190C80 190 48 182 40 148C32 114 70 94 78 64C82 46 88 36 100 36Z" fill="url(#aj)"/><path d="M100 64C98 104 92 144 90 184" stroke="#e6c4f8" stroke-opacity=".3" stroke-width="3" fill="none"/><path d="M100 64C112 100 126 140 130 184" stroke="#e6c4f8" stroke-opacity=".3" stroke-width="3" fill="none"/><rect x="96" y="22" width="8" height="18" rx="4" fill="#6a8a2a"/>`),
Xurmo:S(`<defs>${g('xr','#ffc060','#e8620f')}</defs><ellipse cx="100" cy="118" rx="76" ry="64" fill="url(#xr)"/><ellipse cx="70" cy="96" rx="16" ry="9" fill="#fff" fill-opacity=".3" transform="rotate(-30 70 96)"/>${L('M100 66C84 48 64 58 60 74C80 72 90 74 100 82C110 74 120 72 140 74C136 58 116 48 100 66Z','#5a9a2a')}<rect x="96" y="40" width="8" height="26" rx="4" fill="#5a9a2a"/>`),
Malina:S(`<defs>${g('ml','#ff7a9a','#b0123a')}</defs>${[3,4,4,3,2].map((n,r)=>[...Array(n)].map((_,c)=>`<circle cx="${100+(c-(n-1)/2)*27}" cy="${82+r*24}" r="15" fill="url(#ml)"/><circle cx="${94+(c-(n-1)/2)*27}" cy="${76+r*24}" r="4" fill="#fff" fill-opacity=".45"/>`).join("")).join("")}${L('M100 72C84 54 62 60 56 72C76 72 90 74 100 78C110 74 124 72 144 72C138 60 116 54 100 72Z')}`),
Papayya:S(`<defs>${g('pp2','#ffb347','#e8731a')}</defs><path d="M100 28C132 28 154 80 154 122C154 162 132 188 100 188C68 188 46 162 46 122C46 80 68 28 100 28Z" fill="#f0a02a"/><path d="M100 40C124 40 142 84 142 122C142 156 124 176 100 176C76 176 58 156 58 122C58 84 76 40 100 40Z" fill="url(#pp2)"/><ellipse cx="100" cy="122" rx="22" ry="46" fill="#ffd09a"/>${[0,1,2,3,4,5,6].map(i=>`<circle cx="${92+(i%2)*16}" cy="${90+i*14}" r="5" fill="#222"/>`).join("")}`),
Marakuya:S(`<circle cx="100" cy="100" r="82" fill="#5a2a7a"/><circle cx="100" cy="100" r="74" fill="#f6eedf"/><circle cx="100" cy="100" r="66" fill="#ffb21f"/>${R(26,(i,a)=>`<ellipse cx="${100+Math.cos(a)*(18+(i%3)*16)}" cy="${100+Math.sin(a)*(18+(i%3)*16)}" rx="5" ry="7" fill="#3a2a10" transform="rotate(${a*57.3} ${100+Math.cos(a)*(18+(i%3)*16)} ${100+Math.sin(a)*(18+(i%3)*16)})"/>`)}`),
"Ajdaho mevasi":S(`<defs>${g('dr','#ff5fae','#c4106a')}</defs><ellipse cx="100" cy="108" rx="60" ry="78" fill="url(#dr)"/><ellipse cx="100" cy="108" rx="48" ry="66" fill="#fff"/>${[...Array(40)].map((_,i)=>`<circle cx="${100+Math.cos(i*2.4)*Math.sqrt(i/40)*42}" cy="${108+Math.sin(i*2.4)*Math.sqrt(i/40)*60}" r="1.9" fill="#222"/>`).join("")}${L('M158 84C176 78 186 70 192 58C176 60 164 68 158 84Z','#3fae4a')}<g transform="translate(200 0) scale(-1 1)">${L('M158 84C176 78 186 70 192 58C176 60 164 68 158 84Z','#3fae4a')}</g>${L('M100 32C92 20 94 10 100 2C106 10 108 20 100 32Z','#3fae4a')}`),
Pomelo:S(`<defs>${g('pm','#f6f39a','#9cc238')}</defs><path d="M100 36C146 36 174 74 172 118C170 160 138 186 100 186C62 186 30 160 28 118C26 74 54 36 100 36Z" fill="url(#pm)"/><ellipse cx="72" cy="86" rx="14" ry="26" fill="#fff" fill-opacity=".3" transform="rotate(25 72 86)"/><path d="M100 36C100 28 104 22 110 18" stroke="#5a7a2a" stroke-width="5" fill="none" stroke-linecap="round"/>${L('M106 26C124 8 150 12 156 20C142 34 122 36 106 26Z')}`),
Lichi:S(`<defs>${g('lc','#ff6a6a','#a8132a')}${g('lw','#ffffff','#e6dccb')}</defs><circle cx="70" cy="110" r="50" fill="url(#lc)"/>${R(26,(i,a)=>`<circle cx="${70+Math.cos(a)*(i%2?32:16)}" cy="${110+Math.sin(a)*(i%2?32:16)}" r="3.2" fill="#6a0c1a" fill-opacity=".35"/>`)}<path d="M70 60C70 52 74 46 80 42" stroke="#5a7a2a" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="140" cy="128" r="42" fill="url(#lw)"/><ellipse cx="128" cy="116" rx="10" ry="6" fill="#fff" transform="rotate(-30 128 116)"/>`),
Guava:S(`<defs>${g('gv','#ffc4c8','#f07a8a',50,50)}</defs><circle cx="100" cy="104" r="80" fill="#8cc43a"/><circle cx="100" cy="104" r="72" fill="#f2f0b8"/><circle cx="100" cy="104" r="58" fill="url(#gv)"/>${R(26,(i,a)=>`<circle cx="${100+Math.cos(a)*(14+(i%2)*18)}" cy="${104+Math.sin(a)*(14+(i%2)*18)}" r="2.8" fill="#fff3c0"/>`)}`)
});
const thumb=x=>x.i?`<img src="${x.i}" alt="">`:(ART[x.n]||x.e);
F.push(
{e:"🔴",i:"images/anor.webp",n:"Anor",l:"Punica granatum",c:"#ff8a8a",g:"Eron, O'zbekiston, Hindiston",t:"3–4 yil (mevaga kirishi), meva 5–7 oyda pishadi",v:["C vitamini","K vitamini","Antioksidantlar"],k:83,f:"Anor qonni yaxshilaydi va yurakni mustahkamlaydi."},
{e:"🟡",i:"images/behi.webp",n:"Behi",l:"Cydonia oblonga",c:"#ffe27a",g:"Markaziy Osiyo, Kavkaz",t:"4–6 yil (mevaga kirishi), meva 5–6 oyda pishadi",v:["C vitamini","Kaliy","Mis"],k:57,f:"Behi xom holda qattiq, pishirilganda esa xushbo'y va shirin bo'ladi."},
{e:"🟣",i:"images/anjir.webp",n:"Anjir",l:"Ficus carica",c:"#d2a6f0",g:"O'rta yer dengizi, O'zbekiston",t:"2–3 yil (mevaga kirishi), meva 3–4 oyda pishadi",v:["Kaliy","Kalsiy","Kletchatka"],k:74,f:"Anjir kalsiyga boy va hazmni yaxshilaydi."},
{e:"🟠",i:"images/xurmo.webp",n:"Xurmo",l:"Diospyros kaki",c:"#ffb878",g:"Xitoy, Yaponiya, Markaziy Osiyo",t:"3–5 yil (mevaga kirishi), meva 6–7 oyda pishadi",v:["A vitamini","C vitamini","Marganets"],k:70,f:"Xurmo kuzda pishadi, juda shirin va ko'z uchun foydali."},
{e:"❤️",i:"images/malina.webp",n:"Malina",l:"Rubus idaeus",c:"#ff8fae",g:"Yevropa, Osiyo",t:"1–2 yil (mevaga kirishi), gulidan 1,5 oyda pishadi",v:["C vitamini","Marganets","Kletchatka"],k:52,f:"Malina shamollaganda terni chiqaradi va isitmani tushiradi."},
{e:"🥥",i:"images/kokos.webp",n:"Kokos",l:"Cocos nucifera",c:"#e8d9c0",g:"Janubi-Sharqiy Osiyo, orollar",t:"6–10 yil (mevaga kirishi), meva 12 oyda pishadi",v:["Marganets","Mis","Selen"],k:354,f:"Kokos suvi chanqoqni yaxshi bosadi, yog'i esa to'yimli."},
{e:"🥑",i:"images/avokado.webp",n:"Avokado",l:"Persea americana",c:"#b9dc7a",g:"Markaziy Amerika, Meksika",t:"3–5 yil (mevaga kirishi), meva 6–12 oyda pishadi",v:["K vitamini","E vitamini","Folat"],k:160,f:"Avokadoda foydali yog'lar ko'p, yurak uchun yaxshi."},
{e:"🟧",i:"images/papayya.webp",n:"Papayya",l:"Carica papaya",c:"#ffc07a",g:"Markaziy Amerika, tropiklar",t:"9–12 oy (ekilgandan mevagacha)",v:["C vitamini","A vitamini","Papain"],k:43,f:"Papaindagi ferment oqsilni hazm qilishga yordam beradi."},
{e:"🟪",i:"images/marakuya.webp",n:"Marakuya",l:"Passiflora edulis",c:"#c9a0e8",g:"Braziliya, tropiklar",t:"1–2 yil (mevaga kirishi), meva 2–3 oyda pishadi",v:["C vitamini","A vitamini","Kletchatka"],k:97,f:"Marakuyaning nordon-shirin ta'mi sharbat va shirinliklarga yarashadi."},
{e:"🩷",i:"images/ajdaho-mevasi.webp",n:"Ajdaho mevasi",l:"Hylocereus (pitaya)",c:"#ff8fc4",g:"Vetnam, Markaziy Amerika",t:"1–3 yil (mevaga kirishi), gulidan 1 oyda pishadi",v:["C vitamini","Magniy","Temir"],k:60,f:"Ajdaho mevasi kaktusda o'sadi va kaloriyasi juda kam."},
{e:"🟩",i:"images/pomelo.webp",n:"Pomelo",l:"Citrus maxima",c:"#d9e88a",g:"Xitoy, Janubi-Sharqiy Osiyo",t:"5–8 yil (mevaga kirishi), meva 6–8 oyda pishadi",v:["C vitamini","Kaliy","Kletchatka"],k:38,f:"Pomelo sitrus mevalarning eng kattasi, ta'mi shirin-nordon."},
{e:"🟥",i:"images/lichi.webp",n:"Lichi",l:"Litchi chinensis",c:"#ff9aa0",g:"Xitoy, Janubiy Osiyo",t:"5–7 yil (mevaga kirishi), gulidan 3 oyda pishadi",v:["C vitamini","Mis","Kaliy"],k:66,f:"Lichi sharbatli va xushbo'y, C vitaminiga juda boy."},
{e:"🟢",i:"images/guava.webp",n:"Guava",l:"Psidium guajava",c:"#ffb3b8",g:"Markaziy Amerika, tropiklar",t:"2–4 yil (mevaga kirishi), meva 3–5 oyda pishadi",v:["C vitamini","A vitamini","Likopen"],k:68,f:"Guavada C vitamini apelsinnikidan to'rt barobar ko'p."});
const grid=document.getElementById('grid');
grid.innerHTML=F.map(x=>`<section class="fruit" style="--c:${x.c};--w:${Math.min(100,x.k)}%">
<div class="pic" tabindex="0" role="button" aria-label="${x.n}"><i class="${x.i||ART[x.n]?'ph':''}">${x.i?`<img src="${x.i}" alt="${x.n}">`:(ART[x.n]||x.e)}</i></div>
<div class="info"><h2>${x.n}</h2><div class="lat">${x.l}</div>
<div class="row"><b>🌱 O'sish:</b><span>${x.t}</span></div>
<div class="row"><b>🌍 Qayerda:</b><span>${x.g}</span></div>
<div class="tags">${x.v.map(v=>`<span>${v}</span>`).join('')}</div>
<p class="f">${x.f}</p><div class="bar"><div></div></div><div class="cal">${x.k} kkal / 100 g</div></div></section>`).join('');
const cards=[...document.querySelectorAll('.fruit')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.35});
cards.forEach(c=>io.observe(c));
document.querySelectorAll('.pic').forEach(p=>{const go=()=>{p.classList.remove('pop');void p.offsetWidth;p.classList.add('pop')};p.onclick=go;p.onkeydown=e=>{if(e.key==='Enter')go()}});
document.querySelectorAll('.fruit').forEach((c,i)=>c.id='f'+i);
document.getElementById('top').innerHTML=F.map((x,i)=>`<a href="#f${i}"><b>${thumb(x)}</b>${x.n}</a>`).join('');
const links=[...document.querySelectorAll('.top a')];
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id));const a=links.find(l=>l.classList.contains('on'));if(a)a.scrollIntoView({inline:'center',block:'nearest'})}}),{threshold:.5}).observe&&document.querySelectorAll('.fruit').forEach(c=>{});
const io2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id))}}),{threshold:.5});
document.querySelectorAll('.fruit').forEach(c=>io2.observe(c));

(()=>{
const X={Banan:["1-12",20000,9,"Banan-sut smuzi: 1 banan, 200 ml sut va 1 choy qoshiq asalni blenderda 30 soniya aralashtiring."],
Mango:["5-8",70000,36,"Mango lassi: 1 mango, 150 g qatiq va muzni blenderda silliq qilib aralashtiring."],
Kivi:["10-12",45000,93,"Kivi kosasi: kivini to'g'rab qatiq ustiga qo'ying, ustidan yong'oq seping."],
Qulupnay:["5-6",60000,59,"Qulupnay va qaymoq: qulupnayni ikkiga bo'ling, qaymoq va shakar upasi bilan yeng."],
Mandarin:["11-2",18000,27,"Mandarin sharbati: 5 ta mandarinni siqing, muz qo'shib ichasiz."],
Ananas:["1-12",45000,48,"Ananas salati: ananas, tovuq go'shti, pishloq va qatiqni aralashtiring."],
Tarvuz:["7-9",4000,8,"Tarvuz sharbati: tarvuz bo'laklari va yalpizni blenderda aralashtirib, sovutib iching."],
Uzum:["8-10",20000,4,"Uzum salati: uzum, olma bo'laklari, qatiq va yong'oqni aralashtiring."],
Olma:["8-11",14000,5,"Pechdagi olma: yadrosini olib, asal va dolchin solib, 180° da 20 daqiqa pishiring."],
Shaftoli:["7-9",20000,7,"Shaftoli kompoti: 1 kg shaftoli, 2 l suv, 150 g shakarni 15 daqiqa qaynating."],
Limon:["11-3",30000,53,"Limonad: 2 limon sharbati, 1 l suv, 4 osh qoshiq asal va muz."],
Gilos:["6-7",50000,7,"Gilos kompoti: 500 g gilos, 1,5 l suv va 100 g shakarni 10 daqiqa qaynating."],
Nok:["8-11",18000,4,"Nok salati: nok, yong'oq va pishloq bo'laklariga ozgina asal quying."]};
Object.assign(X,{
Anor:["9-11",0,10,"Anor sharbati: anor donalarini blenderda aralashtirib, suzib oling."],
Behi:["9-11",0,15,"Behi murabbosi: behini to'g'rab, shakar bilan 40 daqiqa past olovda pishiring."],
Anjir:["8-9",0,2,"Anjir va yong'oq: anjirni ikkiga bo'lib, ichiga yong'oq solib, asal quying."],
Xurmo:["10-12",0,7,"Xurmo shirinligi: xurmoni qatiq va yong'oq bilan aralashtirib yeng."],
Malina:["6-8",0,26,"Malina mors: 200 g malinani ezib, 1 l suv va asal qo'shib sovuting."],
Kokos:["1-12",0,3,"Kokos smuzisi: kokos suti, banan va muzni blenderda aralashtiring."],
Avokado:["1-12",0,10,"Avokado tosti: avokadoni ezib non ustiga surting, tuz va limon sharbati seping."],
Papayya:["1-12",0,61,"Papayya kosasi: papayyani ikkiga bo'lib, ustiga qatiq va limon sharbati quying."],
Marakuya:["1-12",0,30,"Marakuya sharbati: mag'zini suv, asal va muz bilan aralashtiring."],
"Ajdaho mevasi":["6-10",0,3,"Pitaya kosasi: muzlatilgan pitayani blenderda ezib, ustiga banan va yong'oq qo'ying."],
Pomelo:["11-2",0,61,"Pomelo salati: pomelo bo'laklari, yalpiz va ozgina asalni aralashtiring."],
Lichi:["5-7",0,72,"Lichi sovutgichi: lichini tozalab, muz bilan sovutib yeng."],
Guava:["1-12",0,228,"Guava sharbati: guava, suv va asalni blenderda aralashtirib, suzib oling."]});
const CAT={Banan:"t",Mango:"t",Ananas:"t",Kivi:"t",Kokos:"t",Avokado:"t",Papayya:"t",Marakuya:"t","Ajdaho mevasi":"t",Lichi:"t",Guava:"t",Mandarin:"s",Limon:"s",Pomelo:"s",Qulupnay:"r",Malina:"r",Uzum:"r"};
let cat="all";
const mo=["Yan","Fev","Mar","Apr","May","Iyun","Iyul","Avg","Sen","Okt","Noy","Dek"];
const ins=(r,m)=>{const[a,b]=r.split("-").map(Number);return a<=b?m>=a&&m<=b:m>=a||m<=b};
const fmt=n=>n.toLocaleString("ru-RU")+" so'm";
const cm=new Date().getMonth()+1;
const C=[...document.querySelectorAll(".fruit")];
const fav=new Set();try{JSON.parse(localStorage.getItem("fav")||"[]").forEach(n=>fav.add(n))}catch(e){}
const save=()=>{try{localStorage.setItem("fav",JSON.stringify([...fav]))}catch(e){}};
const sel=[];
C.forEach((el,i)=>{const f=F[i],d=X[f.n];
el.querySelector(".info").insertAdjacentHTML("beforeend",`<div class="x"><div><div class="seas">${mo.map((_,k)=>`<i class="${ins(d[0],k+1)?"y":""}"></i>`).join("")}</div><div class="mon"><span>Yan</span><span>Iyun</span><span>Dek</span></div></div><details class="rc"><summary>🍹 Retsept</summary><p>${d[3]}</p></details><div class="acts"><button class="fv"></button><button class="cp">⚖️ Taqqoslash</button></div></div>`)});
const paint=()=>C.forEach((el,i)=>{const n=F[i].n;el.querySelector(".fv").textContent=fav.has(n)?"❤️ Yoqdi":"🤍 Yoqdi";el.querySelector(".cp").classList.toggle("on",sel.includes(n))});
const cb=document.getElementById("cmp");
const row=(l,a,b,low,u)=>{const wa=low?a<b:a>b,wb=low?b<a:b>a;return `<tr><td class="${wa?"w":""}">${u(a)}</td><td>${l}</td><td class="${wb?"w":""}">${u(b)}</td></tr>`};
const rc=()=>{if(!sel.length){cb.style.display="none";return}
const [a,b]=sel.map(n=>F.find(x=>x.n===n));cb.style.display="block";
cb.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><b>⚖️ Taqqoslash</b><button id="cx">✖ Yopish</button></div>`+(!b?`<p>${a.e} ${a.n} tanlandi. Yana bitta meva tanlang.</p>`:`<table><tr><th>${a.e} ${a.n}</th><th></th><th>${b.e} ${b.n}</th></tr>${row("C vitamini (mg)",X[a.n][2],X[b.n][2],0,v=>v)}${row("Kaloriya (kkal)",a.k,b.k,1,v=>v)}</table>`);
document.getElementById("cx").onclick=()=>{sel.length=0;rc();paint()}};
let snd=true;
const pop=()=>{if(!snd)return;try{const a=new(window.AudioContext||window.webkitAudioContext)(),o=a.createOscillator(),gn=a.createGain(),t=a.currentTime;o.frequency.setValueAtTime(500,t);o.frequency.exponentialRampToValueAtTime(900,t+.12);gn.gain.setValueAtTime(.2,t);gn.gain.exponentialRampToValueAtTime(.001,t+.18);o.connect(gn);gn.connect(a.destination);o.start();o.stop(t+.2)}catch(e){}};
grid.addEventListener("click",e=>{const el=e.target.closest(".fruit");if(!el)return;const n=F[C.indexOf(el)].n;
if(e.target.closest(".pic")){pop();burst(e,F[C.indexOf(el)].e)}
if(e.target.closest(".fv")){fav.has(n)?fav.delete(n):fav.add(n);save();paint();apply()}
if(e.target.closest(".cp")){const k=sel.indexOf(n);if(k>=0)sel.splice(k,1);else{if(sel.length>=2)sel.shift();sel.push(n)}paint();rc()}});
const se=document.getElementById("se"),so=document.getElementById("so"),fb=document.getElementById("fb");let onlyFav=false;
function apply(){const t=se.value.trim().toLowerCase();
const arr=C.map((el,i)=>({el,f:F[i],d:X[F[i].n],i}));
const key={c:o=>-o.d[2],k:o=>o.f.k,p:o=>o.d[1],a:o=>o.f.n,d:o=>o.i}[so.value];
arr.sort((x,y)=>{const A=key(x),B=key(y);return typeof A==="string"?A.localeCompare(B):A-B});
let vis=0;arr.forEach(o=>{grid.append(o.el);const ok=(!t||o.f.n.toLowerCase().includes(t))&&(!onlyFav||fav.has(o.f.n))&&(cat==="all"||(CAT[o.f.n]||"m")===cat);o.el.style.display=ok?"":"none";if(ok){vis++;o.el.classList.add("show")}});
document.getElementById("emp").style.display=vis?"none":"block";sync(arr)}
se.oninput=so.onchange=apply;
fb.onclick=()=>{onlyFav=!onlyFav;fb.classList.toggle("on",onlyFav);apply()};
let dk=matchMedia("(prefers-color-scheme: dark)").matches;
document.getElementById("th").onclick=()=>{dk=!dk;document.documentElement.dataset.theme=dk?"dark":"light"};
document.getElementById("sd").onclick=e=>{snd=!snd;e.target.classList.toggle("on",snd);e.target.textContent=snd?"🔊 Ovoz":"🔇 Ovoz"};
document.getElementById("calb").innerHTML=`<h2>📅 Mavsum taqvimi</h2><p style="color:var(--muted)">Qaysi meva qachon eng mazali va arzon bo'ladi (taxminiy). Hozirgi oy belgilangan.</p><div style="overflow-x:auto;padding:3px"><div class="cal" style="min-width:560px"><span></span>${mo.map((m,k)=>`<span class="${k+1===cm?"cur":""}">${m}</span>`).join("")}${F.map(f=>`<span style="text-align:left;white-space:nowrap">${f.e} ${f.n}</span>`+mo.map((_,k)=>`<span class="${ins(X[f.n][0],k+1)?"y":"n"} ${k+1===cm?"cur":""}"></span>`).join("")).join("")}</div></div>`;
const Q=document.getElementById("quiz");let qi=0,sc=0,qs=[];
const mk=()=>{qs=[];while(qs.length<6){const a=F[Math.random()*F.length|0],b=F[Math.random()*F.length|0];if(a===b)continue;const t=Math.random()<.5?"c":"k";const va=t==="c"?X[a.n][2]:a.k,vb=t==="c"?X[b.n][2]:b.k;if(va===vb)continue;qs.push({t,a,b,va,vb,ans:(t==="c"?va>vb:va<vb)?a:b})}qi=0;sc=0;draw()};
const draw=()=>{if(qi>=qs.length){ST.qbest=Math.max(ST.qbest||0,sc);saveST();Q.innerHTML=`<h2>🧠 Viktorina</h2><p style="font-size:1.4rem">Natija: <b>${sc} / ${qs.length}</b> ${sc>=5?"🏆 Ajoyib!":sc>=3?"👍 Yaxshi!":"🌱 Yana urinib ko'ring"}</p><button class="qb" id="qr">Qayta o'ynash</button>`;Q.querySelector("#qr").onclick=mk;return}
const q=qs[qi],u=q.t==="c"?" mg":" kkal";
Q.innerHTML=`<h2>🧠 Viktorina</h2><p>${qi+1} / ${qs.length}</p><p style="font-size:1.3rem">${q.t==="c"?"Qaysi mevada C vitamini ko'proq?":"Qaysi mevada kaloriya kamroq?"}</p><div class="qo">${[q.a,q.b].map((f,j)=>`<button class="qb" data-j="${j}">${f.e} ${f.n}</button>`).join("")}</div><div id="qf"></div>`;
Q.querySelectorAll(".qo .qb").forEach(b=>b.onclick=()=>{const ok=[q.a,q.b][b.dataset.j]===q.ans;if(ok)sc++;Q.querySelectorAll(".qo .qb").forEach(x=>x.disabled=true);b.classList.add(ok?"ok":"bad");pop();
Q.querySelector("#qf").innerHTML=`<p>${ok?"✅ To'g'ri!":"❌ Noto'g'ri."} ${q.a.n}: ${q.va}${u}, ${q.b.n}: ${q.vb}${u} (100 g da)</p><button class="qb" id="qn">Keyingisi</button>`;Q.querySelector("#qn").onclick=()=>{qi++;draw()}})};
const tp=document.getElementById("top");
tp.insertAdjacentHTML("afterbegin",'<button class="sa l" aria-label="Chapga">‹</button>');
tp.insertAdjacentHTML("beforeend",'<button class="sa r" aria-label="O\'ngga">›</button>');
tp.querySelector(".sa.l").onclick=()=>tp.scrollBy({left:-260,behavior:"smooth"});
tp.querySelector(".sa.r").onclick=()=>tp.scrollBy({left:260,behavior:"smooth"});
tp.addEventListener("wheel",e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){tp.scrollLeft+=e.deltaY;e.preventDefault()}},{passive:false});
const burst=(e,em)=>{for(let i=0;i<9;i++){const b=document.createElement("span");b.className="bu";b.textContent=em;const a=i/9*6.283,r=70+Math.random()*60;b.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;--dx:${Math.cos(a)*r}px;--dy:${Math.sin(a)*r}px`;document.body.appendChild(b);setTimeout(()=>b.remove(),900)}};
const CE=document.getElementById("cats");
CE.innerHTML=[["all","🍽️ Hammasi"],["t","🌴 Tropik"],["s","🍊 Sitrus"],["r","🍓 Rezavor"],["m","🏡 Mahalliy"]].map(([k,l])=>`<button data-c="${k}" class="${k==="all"?"on":""}">${l}</button>`).join("");
CE.onclick=e=>{const b=e.target.closest("button");if(!b)return;cat=b.dataset.c;CE.querySelectorAll("button").forEach(x=>x.classList.toggle("on",x===b));apply()};
const dd=Math.floor(Date.now()/864e5)%F.length,fd=F[dd];
document.querySelector(".intro p").insertAdjacentHTML("afterend",`<a class="fod" href="#f${dd}">🎉 Bugungi meva: <b>${fd.n}</b>. ${fd.f}</a>`);
const AL={s:"🤧 Shamollash va immunitet",h:"🍽️ Hazm va ich qotishi",y:"❤️ Yurak va qon bosimi",k:"👁️ Ko'z va ko'rish",t:"✨ Teri va soch",q:"🩸 Kamqonlik",m:"💪 Suyak va mushak",u:"😴 Uyqu va asab"};
const HD={
Banan:["ymu","Kaliy qon bosimini me'yorlashtirishga va mushak tortishishining oldini olishga yordam beradi, B6 vitamini kayfiyat va uyquga foydali.","Buyrak kasalligida kaliy cheklanishi mumkin."],
Mango:["kts","A vitamini ko'z va teri uchun, C vitamini immunitet uchun foydali.","Shakari ko'p, qandli diabetda me'yorda yeng."],
Kivi:["shy","C vitamini immunitetni qo'llaydi, kletchatka hazmni yaxshilaydi va ich qotishida yordam berishi mumkin.","Ba'zi odamlarda allergiya beradi."],
Qulupnay:["yts","Antioksidantlar yurak-qon tomirlar va terini asrashga yordam beradi, C vitamini ham ko'p.","Allergiya keltirishi mumkin."],
Mandarin:["st","C vitamini shamollash mavsumida immunitetni qo'llaydi, terini yaxshilaydi.","Gastrit yoki yarada nordon mevalar og'ritishi mumkin."],
Ananas:["hs","Bromelain fermenti oqsilli ovqatni hazm qilishga yordam beradi, C vitamini ham bor.","Oshqozon kislotaligi yuqori bo'lsa, ehtiyot bo'ling."],
Tarvuz:["yt","Suvi ko'p, jazirama kunda suyuqlik yetishmasligini to'ldiradi, likopen yurak uchun foydali.","Qandli diabetda me'yorda yeng."],
Uzum:["yh","Antioksidantlar yurak-qon tomirlarni asraydi, kletchatka hazmga yordam beradi.","Qandi yuqori, diabetda me'yorda yeng."],
Olma:["hy","Kletchatka hazmni yaxshilaydi va xolesterinni me'yorda tutishga yordam beradi.","Urug'ini ko'p chaynab yemang."],
Shaftoli:["kth","A vitamini ko'z va teri uchun, kletchatka hazm uchun foydali.","Ba'zi odamlarda allergiya beradi."],
Limon:["st","C vitamini shamollashda immunitetni qo'llaydi, issiq choyga solib ichish an'anaviy usul.","Tish emalini yemiradi, gastritda ehtiyot bo'ling."],
Gilos:["um","Tabiiy melatoninga boy, uyquga yordam berishi mumkin. Antioksidantlari bo'g'imlardagi og'riqda foydali bo'lishi mumkin.","Danagini yutmang, ko'p yesangiz ich ketishi mumkin."],
Nok:["hy","Kletchatka hazmni yaxshilaydi va to'qlik beradi.","Ko'p yesangiz ich ketishi mumkin."],
Anor:["qys","Temir va antioksidantlarga boy: kamqonlikda va yurak uchun qo'llab-quvvatlovchi meva.","Ba'zi dorilar (bosim, qon suyultirgichlar) bilan ta'sirlashishi mumkin."],
Behi:["hs","Pishirilgan behi an'anaviy ravishda hazm va yo'talda ishlatiladi.","Xom behi qovushtiruvchi, ich qotishida yemang."],
Anjir:["hmq","Kletchatka ich qotishida yordam beradi, kalsiy suyaklar uchun, temir qon uchun foydali.","Qandi ko'p, diabetda me'yorda yeng."],
Xurmo:["ksy","A vitamini ko'zga, C vitamini immunitetga, kaliy yurakka foydali.","Bo'sh qoringa ko'p yemang, diabetda ehtiyot bo'ling."],
Malina:["st","An'anaviy ravishda shamollashda choyga solib ichiladi, C vitamini va antioksidantlari bor.","Allergiya ehtimoli bor."],
Kokos:["mh","Kokos suvi suyuqlik va elektrolitlarni to'ldiradi, mushaklar uchun foydali.","Yog'i va kaloriyasi yuqori."],
Avokado:["ytk","Foydali yog'lar yurak va terini asraydi, E vitamini antioksidant.","Kaloriyasi yuqori, lateksga allergiyada ehtiyot bo'ling."],
Papayya:["htk","Papain fermenti hazmga yordam beradi, A vitamini ko'z va terini asraydi.","Homiladorlikda xom papayya xavfli bo'lishi mumkin."],
Marakuya:["uhs","Kletchatka va C vitamini bor. Xalq tabobatida tinchlantiruvchi sifatida tilga olinadi.","Ba'zi odamlarda allergiya beradi."],
"Ajdaho mevasi":["hq","Kletchatka hazmga, temir va C vitamini qonga yordam beradi.","Siydik rangini vaqtincha qizartirishi mumkin, bu zararsiz."],
Pomelo:["sy","C vitamini immunitetga, kaliy yurakka foydali, kaloriyasi kam.","Ba'zi dorilar (xolesterin, bosim) bilan ta'sirlashishi mumkin."],
Lichi:["st","C vitaminiga juda boy, immunitetni qo'llaydi.","Och qoringa ko'p yemang."],
Guava:["sh","C vitamini juda ko'p, kletchatka hazmga yordam beradi.","Me'yorida yeng, ko'p bo'lsa qorin og'rishi mumkin."]};
const SV={Banan:"Kuniga 1–2 dona; mashqdan oldin yoki keyin yaxshi.",Mango:"Kuniga yarim–1 dona (taxminan 150 g).",Kivi:"Kuniga 1–2 dona; ich qotganda kechqurun 2 dona.",Qulupnay:"Kuniga bir hovuch (taxminan 150 g).",Mandarin:"Kuniga 2–3 dona.",Ananas:"Ovqatdan keyin 1–2 bo'lak (100–150 g).",Tarvuz:"Kuniga 1–2 bo'lak (taxminan 300 g).",Uzum:"Kuniga bir hovuch (100–150 g).",Olma:"Kuniga 1–2 dona, po'sti bilan.",Shaftoli:"Kuniga 1–2 dona.",Limon:"Kuniga yarim limon, suv yoki choyga siqib.",Gilos:"Kuniga bir hovuch (100–150 g).",Nok:"Kuniga 1 dona, po'sti bilan.",Anor:"Kuniga yarim–1 dona yoki 1 stakan sharbat.",Behi:"Pishirib, kuniga 1 dona atrofida.",Anjir:"Kuniga 2–3 dona.",Xurmo:"Kuniga 1 dona, ovqatdan keyin.",Malina:"Kuniga bir hovuch (100–150 g).",Kokos:"Kokos suvidan kuniga 1 stakan, mag'zidan 30–40 g.",Avokado:"Kuniga yarim dona.",Papayya:"Kuniga 1–2 bo'lak (taxminan 150 g).",Marakuya:"Kuniga 1–2 dona.","Ajdaho mevasi":"Kuniga yarim–1 dona.",Pomelo:"Kuniga 3–5 bo'lak.",Lichi:"Kuniga 5–8 dona, ovqatdan keyin.",Guava:"Kuniga 1 dona."};
let al="all";
const RX=document.getElementById("rx");
RX.innerHTML=`<h2>🩺 Retsept va foydasi</h2><p style="color:var(--muted)">Har bir mevada <b>nima qilishi</b>, <b>qancha va qanday iste'mol qilish</b> kerakligi, retsepti va ehtiyot choralari yozilgan. Foydani sezish uchun mevani muntazam va me'yorida yeyish kerak. Natija odamdan odamga farq qiladi. Meva dori emas: bu ma'lumot umumiy tavsiya, kasallik bo'lsa shifokorga murojaat qiling.</p><div class="zc" id="ac"></div><div class="rxg" id="rxg"></div>`;
const ac=RX.querySelector("#ac");
ac.innerHTML=`<button class="zb on" data-a="all">🍽️ Hammasi</button>`+Object.entries(AL).map(([k,l])=>`<button class="zb" data-a="${k}">${l}</button>`).join("");
const drawRx=()=>{RX.querySelector("#rxg").innerHTML=F.filter(f=>al==="all"||HD[f.n][0].includes(al)).map(f=>{const h=HD[f.n];return `<div class="rxc" style="--c:${f.c}"><div class="rxh"><span class="rxi">${thumb(f)}</span><div><b style="font-size:1.25rem">${f.n}</b><div class="rxt">${[...h[0]].map(k=>`<span>${AL[k]}</span>`).join("")}</div></div></div><p>✅ <b>Nima qiladi:</b> ${h[1]}</p><p>📏 <b>Qancha yeyish:</b> ${SV[f.n]} <span style="color:var(--muted)">(taxminiy)</span></p><details class="rc"><summary>🍹 Retsept</summary><p>${X[f.n][3]}</p></details><p class="rxw">⚠️ ${h[2]}</p></div>`}).join("")};
ac.onclick=e=>{const b=e.target.closest(".zb");if(!b)return;al=b.dataset.a;ac.querySelectorAll(".zb").forEach(x=>x.classList.toggle("on",x===b));drawRx()};
drawRx();
const TP={"Banan": "Sarg'ish va mayda dog'li bo'lsa shirinroq. Xonada saqlang, sovutgichga qo'ymang.", "Mango": "Hidi shirin, bosganda sal yumshoq bo'lsin. Xomini xonada pishiring.", "Kivi": "Bosganda biroz yumshoq bo'lsin. Qattiq bo'lsa olma bilan xaltada qoldiring.", "Qulupnay": "To'q qizil, yashil bandi yangi bo'lsin. Yuvmasdan sovutgichda saqlang.", "Mandarin": "Og'ir va po'sti yupqa bo'lsa sharbatli. Sovutgichda 2 haftagacha turadi.", "Ananas": "Tagidan shirin hid kelsin, bargi oson uzilsin. Kesilgani sovutgichda 3 kun.", "Tarvuz": "Og'ir bo'lsin, urganda ichi bo'sh tovush bersin, yer tekkan joyi sariq bo'lsin.", "Uzum": "Poyasi yashil, donalari mustahkam bo'lsin. Yuvmasdan sovutgichda 1 hafta.", "Olma": "Qattiq va po'sti silliq bo'lsin. Sovutgichda 1 oygacha turadi.", "Shaftoli": "Hidi shirin, bosganda sal yumshoq. Pishmaganini xonada qoldiring.", "Limon": "Og'ir va po'sti yupqa bo'lsin. Sovutgichda 3–4 hafta.", "Gilos": "Bandi yashil, rangi to'q bo'lsin. Sovutgichda 3–5 kun.", "Nok": "Bandi yonida bosganda sal yumshoq bo'lsin. Pishmaganini xonada pishiring.", "Anor": "Og'ir, po'sti qattiq va tarang bo'lsin. Salqin joyda 1–2 oy.", "Behi": "Sariq va xushbo'y bo'lsin. Salqin joyda bir necha hafta turadi.", "Anjir": "Yumshoq, lekin ezilmagan bo'lsin. Tez buziladi, sovutgichda 2–3 kun.", "Xurmo": "Silliq, yaltiroq va yumshoq bo'lsin. Qattiq bo'lsa xonada pishiring.", "Malina": "Ezilmagan va mog'orsiz bo'lsin. Sovutgichda 1–2 kun, yoki muzlatib saqlang.", "Kokos": "Silkitganda ichida suv chayqalsin, yoriqsiz bo'lsin.", "Avokado": "Bosganda sal yumshoq bo'lsin. Pishgach sovutgichga qo'ying.", "Papayya": "Sarg'ish-to'q sariq rangda, bosganda sal yumshoq bo'lsin.", "Marakuya": "Po'sti ajin tushgan bo'lsa pishgan. Og'ir bo'lsin.", "Ajdaho mevasi": "Rangi yorqin, bosganda sal yumshoq bo'lsin.", "Pomelo": "Og'ir va xushbo'y bo'lsin. Xonada 1–2 hafta turadi.", "Lichi": "Po'sti qizil va yorilmagan bo'lsin. Sovutgichda 5 kun.", "Guava": "Hidi kuchli, bosganda sal yumshoq. Sovutgichda 3–4 kun."};
const rnd=a=>a[Math.random()*a.length|0];
const ts=document.getElementById("ts");let tt;
const toast=m=>{ts.textContent=m;ts.style.display="block";clearTimeout(tt);tt=setTimeout(()=>ts.style.display="none",2000)};
const copy=t=>{try{navigator.clipboard.writeText(t).catch(()=>{})}catch(e){}const a=document.createElement("textarea");a.value=t;document.body.appendChild(a);a.select();try{document.execCommand("copy")}catch(e){}a.remove()};
setTimeout(()=>{const sp=document.getElementById("sp");sp&&sp.remove()},1700);
const up=document.getElementById("up");addEventListener("scroll",()=>{up.style.display=scrollY>700?"block":"none"});up.onclick=()=>scrollTo({top:0,behavior:"smooth"});
C.forEach((el,i)=>{const f=F[i];const ac2=el.querySelector(".acts");ac2.insertAdjacentHTML("beforebegin",`<details class="rc"><summary>🛒 Qanday tanlash va saqlash</summary><p>${TP[f.n]}</p></details>`);ac2.insertAdjacentHTML("beforeend",'<button class="sh">📤 Ulashish</button>')});
grid.addEventListener("click",e=>{const b=e.target.closest(".sh");if(!b)return;const f=F[C.indexOf(b.closest(".fruit"))],t=f.e+" "+f.n+": "+f.f;if(navigator.share){navigator.share({title:f.n,text:t,url:location.href}).catch(()=>{})}else{copy(t+" "+location.href);toast("Nusxalandi 📋")}});
/* Savatga sol o'yini */
const GM=document.getElementById("gm"),BK=[["t","🌴","Tropik"],["s","🍊","Sitrus"],["r","🍓","Rezavor"],["m","🏡","Mahalliy"]];
let gb=0;try{gb=+localStorage.getItem("gbest")||0}catch(e){}
GM.innerHTML=`<h2>🧺 Mevani savatga sol</h2><p style="color:var(--muted)">Tepadan mevalar tushadi. Yerga tushmasidan oldin to'g'ri savatni bosing: Tropik, Sitrus, Rezavor yoki Mahalliy. Klaviaturada 1–4 tugmalari ham ishlaydi. 3 ta xato qilsangiz o'yin tugaydi.</p><div class="gst"><span>Ball: <b id="gp">0</b></span><span id="gl2">❤️❤️❤️</span><span>Eng yaxshi: <b id="gbx">${gb}</b></span></div><div class="fgm" id="fg"><div class="fo" id="fo"><button class="qb" id="fs">▶ Boshlash</button></div></div><div class="bsk" id="bs">${BK.map(b=>`<button data-k="${b[0]}"><span>${b[1]}</span>${b[2]}</button>`).join("")}</div><div id="gfb"></div>`;
const fg=GM.querySelector("#fg"),fo=GM.querySelector("#fo"),gfb=GM.querySelector("#gfb");
let run=false,sc2=0,lv=3,fr=null,raf=0,lastF=null;
const hud=()=>{GM.querySelector("#gp").textContent=sc2;GM.querySelector("#gl2").textContent="❤️".repeat(Math.max(0,lv))+"🖤".repeat(3-Math.max(0,lv));GM.querySelector("#gbx").textContent=gb};
const gstop=()=>{run=false;cancelAnimationFrame(raf);if(fr){fr.el.remove();fr=null}};
const gover=()=>{gstop();if(sc2>gb){gb=sc2;try{localStorage.setItem("gbest",gb)}catch(e){}}hud();fo.style.display="flex";fo.innerHTML=`<h3 style="margin:0">O'yin tugadi!</h3><p style="margin:0">Ball: <b>${sc2}</b></p><button class="qb" id="fs">🔄 Qayta o'ynash</button>`;fo.querySelector("#fs").onclick=gstart};
function spawn(){if(!run)return;let f;do{f=rnd(F)}while(f===lastF);lastF=f;const el=document.createElement("div");el.className="fall";el.style.left=(15+Math.random()*70)+"%";el.innerHTML=`<div class="em">${thumb(f)}</div><small>${f.n}</small>`;fg.appendChild(el);fr={f,el,t0:performance.now(),dur:Math.max(2600,6500-sc2*170)};raf=requestAnimationFrame(tick)}
function tick(now){if(!fr)return;if(cur!=="gm"){gstop();fo.style.display="flex";fo.innerHTML='<button class="qb" id="fs">▶ Qaytadan boshlash</button>';fo.querySelector("#fs").onclick=gstart;return}
const p=(now-fr.t0)/fr.dur;if(p>=1){resolve(null);return}fr.el.style.transform=`translateY(${p*(fg.clientHeight-100)}px)`;raf=requestAnimationFrame(tick)}
function resolve(code){if(!fr)return;cancelAnimationFrame(raf);const{f,el}=fr;fr=null;const need=CAT[f.n]||"m",ok=code===need,nm=BK.find(b=>b[0]===need)[2];
el.style.transition="left .3s,transform .3s,opacity .4s";
if(code)el.style.left=(12.5+BK.findIndex(b=>b[0]===code)*25)+"%";
el.style.transform=`translateY(${fg.clientHeight-100}px)`;
setTimeout(()=>el.style.opacity=0,300);setTimeout(()=>el.remove(),700);
if(ok){sc2++;pop();gfb.innerHTML=`✅ To'g'ri! ${f.n}: ${nm}.`}else{lv--;gfb.innerHTML=code?`❌ ${f.n} bu savatga emas, u ${nm} turkumiga kiradi.`:`⏰ Ulgurmadingiz! ${f.n}: ${nm}.`}
hud();if(lv<=0)setTimeout(gover,700);else setTimeout(spawn,800)}
function gstart(){gstop();sc2=0;lv=3;run=true;fo.style.display="none";gfb.textContent="";hud();spawn()}
fo.querySelector("#fs").onclick=gstart;
GM.querySelector("#bs").onclick=e=>{const b=e.target.closest("button");if(b&&run)resolve(b.dataset.k)};
addEventListener("keydown",e=>{if(cur!=="gm"||!run)return;const i="1234".indexOf(e.key);if(i>=0)resolve(BK[i][0])});
/* Mos meva testi */
const M=document.getElementById("mt");
const MQ=[["Hozir sizga nima kerak?",[["🤧 Immunitet, shamollash","s"],["🍽️ Hazm yaxshilash","h"],["❤️ Yurak va bosim","y"],["👁️ Ko'z va teri","kt"],["😴 Uyqu va asab","u"],["💪 Energiya va mushak","m"],["🩸 Kamqonlik","q"]]],["Qanday ta'm yoqadi?",[["🍬 Shirin","sw"],["🍋 Nordon-shirin","sr"],["🌿 Yumshoq, kam shirin","ml"]]],["Kaloriya haqida?",[["🥗 Kam bo'lsin","lo"],["🤷 Farqi yo'q","any"]]],["Qaysi tur yoqadi?",[["🌴 Tropik","t"],["🍊 Sitrus","s"],["🍓 Rezavor","r"],["🏡 Mahalliy","m"],["🤷 Farqi yo'q","any"]]]];
let ma=[],mi=0;
const taste=f=>f.k>=60?"sw":X[f.n][2]>=25?"sr":"ml";
const msc=f=>{let p=0;const[a,b,c,d]=ma;if([...a].some(ch=>HD[f.n][0].includes(ch)))p+=3;if(taste(f)===b)p+=2;if(c==="lo"&&f.k<=60)p+=2;if(d==="any"||(CAT[f.n]||"m")===d)p+=2;return p+Math.random()*.5};
const mdraw=()=>{if(mi<MQ.length){const q=MQ[mi];M.innerHTML=`<h2>🧩 Menga qaysi meva mos?</h2><p>${mi+1} / ${MQ.length}. <b>${q[0]}</b></p><div class="zc">${q[1].map(o=>`<button class="zb" data-v="${o[1]}">${o[0]}</button>`).join("")}</div>`;M.querySelector(".zc").onclick=e=>{const b=e.target.closest(".zb");if(!b)return;ma.push(b.dataset.v);mi++;mdraw()}}else{const top=[...F].sort((a,b)=>msc(b)-msc(a)).slice(0,3);M.innerHTML=`<h2>🧩 Sizga mos mevalar</h2>${top.map((f,i)=>`<div class="mr"><span style="font-size:2rem">${["🥇","🥈","🥉"][i]}</span><span class="rxi">${thumb(f)}</span><div><b>${f.n}</b><div style="color:var(--muted)">${HD[f.n][1]}</div><a href="#f${F.indexOf(f)}">Kartaga o'tish</a></div></div>`).join("")}<button class="qb" id="mre">Qayta topshirish</button>`;M.querySelector("#mre").onclick=()=>{ma=[];mi=0;mdraw()}}};
mdraw();
/* Kunlik hisob */
const T=document.getElementById("tr"),tk="t"+new Date().toISOString().slice(0,10);let tl=[];try{tl=JSON.parse(localStorage.getItem(tk)||"[]")}catch(e){}
T.innerHTML=`<h2>📊 Kunlik meva hisobi</h2><p style="color:var(--muted)">Bugun qaysi mevadan qancha yedingiz? Maqsad: kuniga taxminan 400 g meva.</p><div class="tools" style="padding:8px 0;justify-content:flex-start"><select id="tf">${F.map((f,i)=>`<option value="${i}">${f.n}</option>`).join("")}</select><input id="tg" type="number" min="10" step="10" value="100" style="flex:none;width:100px"><span>gramm</span><button id="ta">➕ Qo'shish</button></div><div id="tlst"></div>`;
const tdraw=()=>{const g=tl.reduce((a,x)=>a+x.g,0),k=Math.round(tl.reduce((a,x)=>a+x.g*F[x.i].k/100,0)),c=Math.round(tl.reduce((a,x)=>a+x.g*X[F[x.i].n][2]/100,0));T.querySelector("#tlst").innerHTML=`<div class="bar2"><div style="width:${Math.min(100,g/4)}%"></div></div><p><b>${g} g</b> / 400 g. ${g>=400?"Ajoyib, maqsadga yetdingiz 🎉":"Yana "+(400-g)+" g qoldi"}</p><p style="color:var(--muted)">Jami ≈ ${k} kkal, C vitamini ≈ ${c} mg</p>${tl.map((x,j)=>`<div class="tli"><span>${F[x.i].e} ${F[x.i].n}, ${x.g} g</span><button data-j="${j}">✖</button></div>`).join("")}`};
const tsave=()=>{try{localStorage.setItem(tk,JSON.stringify(tl))}catch(e){}};
T.querySelector("#ta").onclick=()=>{const g=+T.querySelector("#tg").value;if(g>0){tl.push({i:+T.querySelector("#tf").value,g});tsave();tdraw()}};
T.querySelector("#tlst").onclick=e=>{const b=e.target.closest("button");if(b){tl.splice(+b.dataset.j,1);tsave();tdraw()}};
tdraw();
/* Reyting */
const RK=document.getElementById("rk");let rm="c";
const RM={c:["C vitamini ko'p (mg / 100 g)",f=>X[f.n][2],1,"mg"],l:["Kaloriyasi kam (kkal / 100 g)",f=>f.k,0,"kkal"],h:["Kaloriyasi ko'p (kkal / 100 g)",f=>f.k,1,"kkal"]};
RK.innerHTML=`<h2>🏆 Mevalar reytingi</h2><div class="zc" id="rkc">${Object.entries(RM).map(([k,v])=>`<button class="zb ${k==="c"?"on":""}" data-k="${k}">${v[0]}</button>`).join("")}</div><div id="rkl"></div>`;
const rdraw=()=>{const[t,fn,desc,u]=RM[rm];const arr=[...F].sort((a,b)=>desc?fn(b)-fn(a):fn(a)-fn(b)).slice(0,10),mx=Math.max(...arr.map(fn));
RK.querySelector("#rkl").innerHTML=arr.map((f,i)=>`<div class="rkr"><span class="rkt">${thumb(f)}</span><b>${i+1}. ${f.n}</b><div class="rkb"><div data-w="${Math.max(4,fn(f)/mx*100)}"></div></div><span>${fn(f)} ${u}</span></div>`).join("");
setTimeout(()=>RK.querySelectorAll(".rkb div").forEach(d=>d.style.width=d.dataset.w+"%"),30)};
RK.querySelector("#rkc").onclick=e=>{const b=e.target.closest(".zb");if(!b)return;rm=b.dataset.k;RK.querySelectorAll(".zb").forEach(x=>x.classList.toggle("on",x===b));rdraw()};
rdraw();
/* Vitamin qidiruvchi */
const VT=document.getElementById("vt"),vl=[...new Set(F.flatMap(f=>f.v))].sort((a,b)=>a.localeCompare(b));let vsel=vl.includes("C vitamini")?"C vitamini":vl[0];
VT.innerHTML=`<h2>🔬 Vitamin qidiruvchi</h2><p style="color:var(--muted)">Vitamin yoki moddani tanlang, qaysi mevalarda borligini ko'ring.</p><div class="zc" id="vtc">${vl.map(v=>`<button class="zb ${v===vsel?"on":""}" data-v="${v}">${v}</button>`).join("")}</div><div class="wg" id="vtl"></div>`;
const vdraw=()=>{VT.querySelector("#vtl").innerHTML=F.filter(f=>f.v.includes(vsel)).map(f=>`<div class="wd"><span class="rxi">${thumb(f)}</span><b>${f.n}</b></div>`).join("")};
VT.querySelector("#vtc").onclick=e=>{const b=e.target.closest(".zb");if(!b)return;vsel=b.dataset.v;VT.querySelectorAll(".zb").forEach(x=>x.classList.toggle("on",x===b));vdraw()};
vdraw();
/* Faktlar */
const FC=document.getElementById("fc"),FA={"Banan": "Banan aslida o'tsimon o'simlik, daraxt emas. Botanik jihatdan u rezavor meva hisoblanadi.", "Mango": "Mango Hindistonning milliy mevasi hisoblanadi.", "Kivi": "Kivi o'simligi erkak va urg'ochi bo'ladi, meva berishi uchun ikkalasi ham kerak.", "Qulupnay": "Qulupnayning urug'lari mevaning ichida emas, tashqarisida joylashgan.", "Mandarin": "Mandarinning po'sti oson ajraladi, shuning uchun uni eng qulay sitrus mevalaridan biri deyishadi.", "Ananas": "Ananas bitta meva emas, o'nlab kichik gullarning qo'shilib pishgan to'plamidir.", "Tarvuz": "Tarvuzning taxminan 92 foizi suvdan iborat.", "Uzum": "Dunyoda uzumning minglab navi bor, quritilgan uzumdan mayiz olinadi.", "Olma": "Olma suvda suzadi, chunki hajmining chorak qismi havodan iborat.", "Shaftoli": "Shaftolining vatani Xitoy, u yerda 4000 yildan ko'proq vaqtdan beri o'stiriladi.", "Limon": "Bitta limon daraxti yiliga yuzlab limon berishi mumkin.", "Gilos": "Gilos daraxti gullagandan keyin taxminan 2 oyda pishadi.", "Nok": "Ba'zi nok daraxtlari 100 yildan ortiq yashab, meva beraveradi.", "Anor": "Anorning ichida yuzlab don bo'ladi, ba'zan 1000 tadan oshadi.", "Behi": "Behi xom holda juda qattiq, lekin pishirilganda pushti rangga kiradi.", "Anjir": "Anjirning mevasi aslida ichida mayda gullari bor sersuv shakldir.", "Xurmo": "Xurmoning ba'zi navlari pishmaganda og'izni bog'laydi, pishgach juda shirin bo'ladi.", "Malina": "Malina bitta meva emas, ko'plab mayda mevachalardan iborat.", "Kokos": "Kokos botanik jihatdan yong'oq emas, danakli mevadir.", "Avokado": "Avokado daraxtdan uzilgandan keyingina pisha boshlaydi.", "Papayya": "Papayya urug'lari qalampirga o'xshash achchiq ta'm beradi va yeyiladi.", "Marakuya": "Marakuya o'simligi tez o'sadigan liana, bir mavsumda bir necha metr o'sadi.", "Ajdaho mevasi": "Ajdaho mevasi kaktus oilasiga mansub, gullari faqat tunda ochiladi.", "Pomelo": "Pomelo sitruslarning eng kattasi, bitta mevasi 1–2 kg gacha bo'lishi mumkin.", "Lichi": "Lichi Xitoyda 2000 yildan ortiq vaqtdan beri yetishtiriladi.", "Guava": "Guavada C vitamini apelsinnikidan bir necha barobar ko'p."};let fi=Math.random()*F.length|0;
FC.innerHTML=`<h2>💡 Qiziqarli faktlar</h2><div id="fcw"></div><p style="text-align:center"><button class="qb" id="fpv">⬅️ Oldingisi</button> <button class="qb" id="fnx">Keyingisi ➡️</button></p>`;
const fdraw=()=>{const f=F[fi];FC.querySelector("#fcw").innerHTML=`<div class="fc2"><span class="rxi">${thumb(f)}</span><h3>${f.n}</h3><p style="font-size:1.15rem">${FA[f.n]}</p></div>`};
FC.querySelector("#fpv").onclick=()=>{fi=(fi+F.length-1)%F.length;fdraw()};FC.querySelector("#fnx").onclick=()=>{fi=(fi+1)%F.length;fdraw()};
fdraw();
/* Ekish va parvarish */
const CP={"Banan": "Mart–aprelda ekilsa, taxminan 9–12 oydan keyin, ya'ni keyingi yilning yanvar–mart oylarida pishadi.", "Mango": "Aprel–mayda ekilgan ko'chat 3–5 yildan keyin meva beradi; keyin har yili may–avgustda pishadi.", "Kivi": "Mart–aprelda ekilsa, 3–4 yildan keyin meva beradi; keyin har yili oktyabr–dekabrda pishadi.", "Qulupnay": "Aprelda ekilsa, ko'pincha keyingi yilning may–iyunida pishadi (ba'zi navlar o'sha yili iyul–sentyabrda). Avgust–sentyabrda ekilsa, keyingi yil may–iyunda pishadi.", "Mandarin": "Mart–aprelda ekilsa, 3–5 yildan keyin meva beradi; keyin har yili noyabr–fevralda pishadi.", "Ananas": "Aprel–iyunda ekilsa, taxminan 18–24 oydan keyin pishadi.", "Tarvuz": "Aprel oxiri–may boshida ekilsa, 80–100 kundan keyin, ya'ni iyul oxiri–sentyabrda pishadi.", "Uzum": "Mart–aprelda ekilsa, 2–3 yildan keyin meva beradi; keyin har yili avgust–oktyabrda pishadi.", "Olma": "Noyabr yoki martda ekilsa, 3–5 yildan keyin meva beradi; keyin har yili avgust–noyabrda pishadi.", "Shaftoli": "Noyabr yoki martda ekilsa, 3–4 yildan keyin meva beradi; keyin har yili iyul–sentyabrda pishadi.", "Limon": "Mart–mayda ekilsa, 3–5 yildan keyin meva beradi; mevasi 6–9 oyda pishadi (asosan noyabr–mart).", "Gilos": "Noyabr yoki martda ekilsa, 3–5 yildan keyin meva beradi; keyin har yili iyun–iyulda pishadi.", "Nok": "Noyabr yoki martda ekilsa, 4–6 yildan keyin meva beradi; keyin har yili avgust–noyabrda pishadi.", "Anor": "Mart–aprel yoki oktyabrda ekilsa, 3–4 yildan keyin meva beradi; keyin har yili sentyabr–noyabrda pishadi.", "Behi": "Noyabr yoki martda ekilsa, 4–6 yildan keyin meva beradi; keyin har yili sentyabr–noyabrda pishadi.", "Anjir": "Mart–aprelda ekilsa, 2–3 yildan keyin meva beradi; keyin har yili avgust–sentyabrda pishadi.", "Xurmo": "Mart–aprelda ekilsa, 3–5 yildan keyin meva beradi; keyin har yili oktyabr–dekabrda pishadi.", "Malina": "Oktyabr yoki mart–aprelda ekilsa, 1–2 yildan keyin meva beradi; keyin har yili iyun–avgustda pishadi.", "Kokos": "Bizda o'smaydi. Tropikda ekilgan ko'chat 6–10 yildan keyin meva beradi, mevasi 12 oyda pishadi.", "Avokado": "Mart–mayda ekilsa, 3–5 yildan keyin meva beradi; mevasi 6–12 oyda pishadi.", "Papayya": "Mart–aprelda ekilsa, 9–12 oydan keyin, ya'ni keyingi yilning yanvar–mart oylarida pishadi.", "Marakuya": "Aprel–mayda ekilsa, 1–2 yildan keyin meva beradi; gullagandan keyin 2–3 oyda pishadi.", "Ajdaho mevasi": "Mart–iyunda ekilsa, 1–3 yildan keyin meva beradi; keyin har yili iyun–oktyabrda pishadi.", "Pomelo": "Mart–mayda ekilsa, 5–8 yildan keyin meva beradi; mevasi 6–8 oyda pishadi (asosan noyabr–fevral).", "Lichi": "Aprel–mayda ekilsa, 5–7 yildan keyin meva beradi; keyin har yili may–iyulda pishadi.", "Guava": "Mart–mayda ekilsa, 2–4 yildan keyin meva beradi; mevasi 3–5 oyda pishadi."};
const CR=document.getElementById("cr"),CD={"Banan": ["Faqat issiqxonada o'sadi (ko'chat mart–aprelda)", "Haftasiga 2–3 marta, tuprog'i doim nam tursin", "O'rgimchakkana va shira: sovunli suv bilan yuving. Ko'p bo'lsa akaritsid yoki insektitsid ishlating.", "O'sishi 26–30°C, 15°C dan pastda to'xtaydi. Pishishi 20–25°C da."], "Mango": ["Issiqxona yoki katta tovoqda (ko'chat aprel–may)", "Haftasiga 1–2 marta, gullashdan oldin kamroq", "Shira va qalqondor: sovunli suv yoki neem moyi purkang.", "O'sishi 24–30°C, 10°C dan pastga chidamsiz. Pishishi 25–30°C da."], "Kivi": ["Ko'chat mart–aprelda yoki oktyabrda (tayanch kerak)", "Yozda haftasiga 2 marta, suv ko'p sevadi", "Barg o'rovchi qurt va shira: insektitsid yoki sovunli suv; tushgan barglarni yig'ing.", "O'sishi 20–28°C, qishda −10°C gacha chidaydi. Oktyabr–noyabrda pishadi."], "Qulupnay": ["Aprelda yoki avgust–sentyabrda (ko'chat)", "Haftasiga 2–3 marta, tomchilatib sug'orish yaxshi", "Shilliq qurt va kulrang chirish: zararlangan mevani terib tashlang, kerak bo'lsa fungitsid ishlating.", "O'sishi 15–25°C. Pishishi 18–22°C da, gullagandan keyin taxminan 30 kunda."], "Mandarin": ["Issiqxona yoki tovoqda (ko'chat mart–aprel)", "Haftasiga 1–2 marta, tuprog'i botqoq bo'lmasin", "Qalqondor va o'rgimchakkana: neem yoki mineral moy purkang.", "O'sishi 20–30°C, 0°C dan pastga chidamsiz. Kuzda 10–20°C da pishadi."], "Ananas": ["Issiqxona yoki uyda: mevaning tojini ekish (aprel–iyun)", "10–14 kunda bir marta, suvni barglar o'rtasiga quying", "Unsimon qurt: spirtli paxta bilan artib, sovunli suv purkang.", "O'sishi 22–30°C, 15°C dan pastga tushmasin. Pishishi 24–28°C da."], "Tarvuz": ["Urug'ni aprel oxiri–may boshida (tuproq 15°C ga isiganda)", "Haftasiga 1–2 marta, pishishdan oldin kamaytiring", "Shira va tarvuz pashshasi: sovunli suv yoki insektitsid. Un shudringda oltingugurtli preparat ishlating.", "O'sishi 25–30°C. Pishishi 25–32°C da, urug'dan taxminan 80–100 kunda."], "Uzum": ["Ko'chat mart–aprelda yoki oktyabrda", "Yozda 10–14 kunda bir marta, pishishdan oldin to'xtating", "Un shudring va uzum o'rovchi qurti: oltingugurt, feromon tuzoq yoki insektitsid.", "O'sishi 20–30°C. Pishishi avgust–sentyabrda 25–30°C da."], "Olma": ["Ko'chat noyabrda yoki martda", "Yozda 2–3 haftada bir marta, chuqur sug'oring", "Olma qurti: feromon tuzoq qo'ying, daraxt tagini tozalang, gullagandan keyin insektitsid purkang.", "O'sishi 18–24°C. Sentyabr–oktyabrda 15–20°C da pishadi, qishda −25°C gacha chidaydi."], "Shaftoli": ["Ko'chat noyabrda yoki martda", "Yozda 10–14 kunda bir marta", "Shira va barg buralishi: bahorda bordo suyuqligi, shiraga sovunli suv.", "O'sishi 20–28°C. Iyul–avgustda 25–30°C da pishadi."], "Limon": ["Tovoq yoki issiqxonada (ko'chat mart–may)", "Haftasiga 1–2 marta, suv to'planib qolmasin", "Qalqondor va o'rgimchakkana: sovunli suv yoki mineral moy.", "O'sishi 20–28°C, 5°C dan pastga chidamsiz. Pishishi 15–25°C da."], "Gilos": ["Ko'chat noyabrda yoki martda", "Gullagandan keyin 2–3 haftada bir marta; pishish paytida ko'p suv quymang, meva yorilib ketadi", "Gilos pashshasi va shira: sariq yopishqoq tuzoq, insektitsid; tushgan mevalarni yig'ing.", "O'sishi 15–25°C. May–iyunda 18–25°C da pishadi."], "Nok": ["Ko'chat noyabrda yoki martda", "Yozda 2–3 haftada bir marta", "Nok psillasi va nok qurti: gullashdan oldin va keyin insektitsid, tushgan mevani yig'ing.", "O'sishi 18–25°C. Avgust–oktyabrda 15–20°C da pishadi."], "Anor": ["Ko'chat mart–aprelda yoki oktyabrda", "Yozda 2 haftada bir marta; pishish paytida ko'p suv quysangiz meva yoriladi", "Anor kuyasi va shira: insektitsid, zararlangan mevalarni yig'ib yo'q qiling.", "O'sishi 25–35°C. Sentyabr–oktyabrda 25–30°C da pishadi; −12°C dan pastda qishda yopish kerak."], "Behi": ["Ko'chat noyabrda yoki martda", "Yozda 2–3 haftada bir marta", "Behi qurti va barg dog'i: bordo suyuqligi va insektitsid, tushgan barglarni yig'ing.", "O'sishi 18–25°C. Oktyabrda 15–20°C da pishadi."], "Anjir": ["Ko'chat mart–aprelda (qishda yopib qo'ying)", "Yozda 10–14 kunda bir marta", "Anjir kuyasi va shira: insektitsid yoki sovunli suv, zararlangan mevani yig'ing.", "O'sishi 25–35°C. Avgust–sentyabrda 25–30°C da pishadi; −10°C dan pastda yopish kerak."], "Xurmo": ["Ko'chat mart–aprelda", "Yozda 2 haftada bir marta", "Qalqondor va shira: neem yoki mineral moy, sovunli suv.", "O'sishi 20–28°C. Oktyabr–noyabrda 10–18°C da pishadi, −15°C gacha chidaydi."], "Malina": ["Ko'chat oktyabrda yoki mart–aprelda", "Haftasiga 1–2 marta, ildizi qurib qolmasin", "Malina qo'ng'izi va shira: gullashdan oldin insektitsid, zararlangan mevani yo'q qiling.", "O'sishi 15–25°C. Iyun–iyulda 18–25°C da pishadi."], "Kokos": ["Bizning iqlimda o'smaydi, faqat doim issiq tropik joyda", "Tropikda tuprog'i doim nam bo'ladi", "Kokos qo'ng'izlari: tropikda feromon tuzoq va insektitsid ishlatiladi.", "O'sishi 27–32°C, 20°C dan pastda to'xtaydi. Pishishi taxminan 12 oy."], "Avokado": ["Issiqxona yoki tovoqda (ko'chat mart–may)", "Haftasiga 1–2 marta, suv to'planmasin", "O'rgimchakkana va qalqondor: sovunli suv yoki mineral moy. Ildiz chirishi bo'lsa, suvni kamaytiring.", "O'sishi 20–28°C, 2°C dan pastga chidamsiz. Daraxtda emas, uzilgach 18–25°C da pishadi."], "Papayya": ["Issiqxonada urug'ni mart–aprelda", "Haftasiga 2 marta, suv to'planmasin", "Oqqanot va o'rgimchakkana: sovunli suv. Virus bo'lsa, o'simlikni olib tashlang.", "O'sishi 25–32°C, 15°C dan pastda to'xtaydi. Pishishi 25–30°C da."], "Marakuya": ["Issiqxona yoki tovoqda (ko'chat aprel–may)", "Haftasiga 2 marta", "Shira va o'rgimchakkana: sovunli suv yoki neem moyi.", "O'sishi 20–30°C, 5°C dan pastga chidamsiz. Pishishi 22–28°C da."], "Ajdaho mevasi": ["Qalamchani mart–iyunda (issiqxona yoki tovoq)", "10–14 kunda bir marta, kaktus kabi ko'p quymang", "Qalqondor: spirtli paxta yoki mineral moy. Ildiz chirishi bo'lsa, suvni kamaytiring.", "O'sishi 20–30°C, 5°C dan pastga chidamsiz. Pishishi 25–30°C da."], "Pomelo": ["Issiqxona yoki tovoqda (ko'chat mart–may)", "Haftasiga 1–2 marta", "Qalqondor va o'rgimchakkana: mineral moy yoki sovunli suv.", "O'sishi 23–30°C, 5°C dan pastga chidamsiz. Pishishi 20–27°C da."], "Lichi": ["Issiqxona yoki tovoqda (ko'chat aprel–may)", "Haftasiga 1–2 marta, gullashdan oldin kamroq", "Lichi qurti va o'rgimchakkana: insektitsid yoki sovunli suv.", "O'sishi 22–30°C, 0°C dan pastga chidamsiz. Pishishi 25–30°C da."], "Guava": ["Issiqxona yoki tovoqda (ko'chat mart–may)", "Haftasiga 2 marta", "Meva pashshasi va shira: sariq tuzoq, sovunli suv.", "O'sishi 23–30°C, 5°C dan pastga chidamsiz. Pishishi 25–30°C da."]};let ci=0;
CR.innerHTML=`<h2>🌱 Ekish va parvarish</h2><p style="color:var(--muted)">Mevani tanlang: qachon ekish, qanday sug'orish, qurt tushsa nima qilish va qaysi haroratda pishishi yozilgan. Bu taxminiy umumiy tavsiya, hudud va naviga qarab farq qiladi. Kimyoviy vositalarni faqat yorlig'idagi yo'riqnoma bo'yicha ishlating va bolalardan uzoq saqlang. Tropik mevalar bizning ochiq maydonda qishdan chiqmaydi, ularni faqat issiqxonada o'stirish mumkin.</p><div class="zc" id="crc">${F.map((f,i)=>`<button class="zb ${i===0?"on":""}" data-i="${i}">${f.n}</button>`).join("")}</div><div id="crd"></div>`;
const cdraw=()=>{const f=F[ci],d=CD[f.n];CR.querySelector("#crd").innerHTML=`<div class="rxh" style="margin:12px 0"><span class="rxi">${thumb(f)}</span><b style="font-size:1.6rem">${f.n}</b></div><div class="pk" style="background:${f.c}"><b>⏳ Shu oylarda ekilsa, shu oylarda pishadi (taxminiy):</b>${CP[f.n]}</div><div class="cr4"><div><b>📅 Qachon ekish</b>${d[0]}</div><div><b>💧 Qanday sug'orish</b>${d[1]}</div><div><b>🐛 Qurt tushsa nima qilish</b>${d[2]}</div><div><b>🌡️ Harorat va pishishi</b>${d[3]}</div></div>`};
CR.querySelector("#crc").onclick=e=>{const b=e.target.closest(".zb");if(!b)return;ci=+b.dataset.i;CR.querySelectorAll(".zb").forEach(x=>x.classList.toggle("on",x===b));cdraw()};
cdraw();
/* Meva ichida hamma ma'lumot */
C.forEach((el,i)=>{const f=F[i],h=HD[f.n],d=CD[f.n];
el.querySelectorAll(".info details.rc").forEach(x=>x.remove());
el.insertAdjacentHTML("beforeend",`<div class="all">
<div><b>✅ Nima qiladi</b>${h[1]}</div>
<div><b>🩺 Qaysi holatlarda foydali</b><div class="pl">${[...h[0]].map(k=>`<span>${AL[k]}</span>`).join("")}</div></div>
<div><b>📏 Qancha yeyish (taxminiy)</b>${SV[f.n]}</div>
<div><b>⚠️ Ehtiyot bo'ling</b>${h[2]}</div>
<div><b>🍹 Retsept</b>${X[f.n][3]}</div>
<div><b>🛒 Qanday tanlash va saqlash</b>${TP[f.n]}</div>
<div><b>⏳ Ekilgandan pishgunicha</b>${CP[f.n]}</div>
<div><b>📅 Qachon ekish</b>${d[0]}</div>
<div><b>💧 Qanday sug'orish</b>${d[1]}</div>
<div><b>🐛 Qurt tushsa nima qilish</b>${d[2]}</div>
<div><b>🌡️ Harorat va pishishi</b>${d[3]}</div>
<div><b>💡 Qiziq fakt</b>${FA[f.n]}</div>
<small>Foyda va parvarish ma'lumotlari taxminiy umumiy tavsiya, davo emas. Kasallik bo'lsa shifokorga murojaat qiling.</small></div>`)});
/* Umumiy holat */
let ST={coins:30,unl:["Banan","Olma","Limon","Qulupnay"],garden:[null,null,null],served:0,harv:0,cooked:0,seen:{},mx:0,mem:0,qbest:0,ach:{}};
try{Object.assign(ST,JSON.parse(localStorage.getItem("mv5")||"{}"))}catch(e){}
const saveST=()=>{try{localStorage.setItem("mv5",JSON.stringify(ST))}catch(e){}};
const FB=n=>F.find(f=>f.n===n);
/* 1. Mevalarni birlashtir */
const MG=document.getElementById("mg"),CHN=["Gilos","Malina","Qulupnay","Mandarin","Olma","Shaftoli","Ananas","Pomelo","Tarvuz"].map(FB);
MG.innerHTML=`<h2>🍉 Mevalarni birlashtir</h2><p style="color:var(--muted)">Barmoq bilan suring (yoki klaviaturadagi strelkalarni bosing). Ikkita bir xil meva to'qnashsa, kattaroq mevaga aylanadi. Tarvuzgacha yetkazing!</p><div class="gst"><span>Ball: <b id="mgs">0</b></span><button class="zb" id="mgn">🔄 Yangi o'yin</button></div><div class="mgb" id="mgb"></div><div class="mgc">${CHN.map((f,i)=>`<span>${i?"→ ":""}<i>${thumb(f)}</i></span>`).join("")}</div><p id="mgm" style="text-align:center;font-size:1.2rem"></p><div class="dp"><button class="zb" data-d="u">⬆️</button><button class="zb" data-d="l">⬅️</button><button class="zb" data-d="d">⬇️</button><button class="zb" data-d="r">➡️</button></div>`;
let mb=[],ms=0,mnew=-1,mover=false,mwin=false;
const mput=()=>{const e=[];mb.forEach((v,i)=>{if(!v)e.push(i)});if(!e.length)return;mnew=rnd(e);mb[mnew]=Math.random()<.9?1:2};
function mdr(){MG.querySelector("#mgb").innerHTML=mb.map((v,i)=>v?`<div class="mc ${i===mnew?"nw":""}" style="background:${CHN[v-1].c}">${thumb(CHN[v-1])}</div>`:`<div class="mc e"></div>`).join("");MG.querySelector("#mgs").textContent=ms;ST.mx=Math.max(ST.mx||0,...mb);saveST()}
function mnewgame(){mb=Array(16).fill(0);ms=0;mover=false;mwin=false;mput();mput();mdr();MG.querySelector("#mgm").textContent=""}
const mcan=()=>mb.includes(0)||mb.some((v,i)=>(i%4<3&&mb[i+1]===v)||(i<12&&mb[i+4]===v));
function mmove(d){if(mover)return;const idx=[];for(let k=0;k<4;k++){const line=[];for(let j=0;j<4;j++){let r,c;if(d==="l"){r=k;c=j}else if(d==="r"){r=k;c=3-j}else if(d==="u"){r=j;c=k}else{r=3-j;c=k}line.push(r*4+c)}idx.push(line)}
let moved=false;idx.forEach(line=>{const vals=line.map(i=>mb[i]).filter(x=>x),out=[];for(let i=0;i<vals.length;i++){if(vals[i]===vals[i+1]&&vals[i]<9){out.push(vals[i]+1);ms+=2**vals[i];i++}else out.push(vals[i])}while(out.length<4)out.push(0);line.forEach((p,j)=>{if(mb[p]!==out[j])moved=true;mb[p]=out[j]})});
if(!moved)return;pop();mput();mdr();const m=MG.querySelector("#mgm");
if(mb.includes(9)&&!mwin){mwin=true;m.textContent="🎉 Tarvuz yasadingiz! Davom etishingiz mumkin."}
if(!mcan()){mover=true;m.textContent="O'yin tugadi. Ball: "+ms}}
MG.querySelector(".dp").onclick=e=>{const b=e.target.closest("button");if(b)mmove(b.dataset.d)};
MG.querySelector("#mgn").onclick=mnewgame;
let tx=0,ty=0;const mgb=MG.querySelector("#mgb");
mgb.addEventListener("touchstart",e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY},{passive:true});
mgb.addEventListener("touchend",e=>{const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;if(Math.max(Math.abs(dx),Math.abs(dy))<24)return;mmove(Math.abs(dx)>Math.abs(dy)?(dx>0?"r":"l"):(dy>0?"d":"u"))},{passive:true});
addEventListener("keydown",e=>{if(cur!=="mg")return;const d={ArrowLeft:"l",ArrowRight:"r",ArrowUp:"u",ArrowDown:"d"}[e.key];if(d){e.preventDefault();mmove(d)}});
mnewgame();
/* 2. Xotira o'yini */
const MM=document.getElementById("mm");
MM.innerHTML=`<h2>🎴 Xotira o'yini</h2><p style="color:var(--muted)">Kartalarni oching va bir xil mevalarning juftini toping. Qancha kam urinsangiz, shuncha yaxshi.</p><div class="gst"><span>Urinish: <b id="mmt">0</b></span><span>Eng yaxshi: <b id="mmb">${ST.mem||"-"}</b></span><button class="zb" id="mmn">🔄 Qayta</button></div><div class="mmg" id="mmg"></div><p id="mmm" style="text-align:center;font-size:1.2rem"></p>`;
let mcs=[],mop=[],mtr=0,mlock=false,mdone=0;
function mmstart(){const fs=[...F].sort(()=>Math.random()-.5).slice(0,8);mcs=[...fs,...fs].sort(()=>Math.random()-.5);mop=[];mtr=0;mdone=0;mlock=false;MM.querySelector("#mmt").textContent=0;MM.querySelector("#mmm").textContent="";MM.querySelector("#mmg").innerHTML=mcs.map((f,i)=>`<button class="mk" data-i="${i}"><span class="fr">❓</span><span class="bk" style="background:${f.c}">${thumb(f)}</span></button>`).join("")}
MM.querySelector("#mmg").onclick=e=>{const b=e.target.closest(".mk");if(!b||mlock||b.classList.contains("on")||b.classList.contains("ok"))return;b.classList.add("on");mop.push(b);
if(mop.length===2){mtr++;MM.querySelector("#mmt").textContent=mtr;const[a,c]=mop;
if(mcs[+a.dataset.i]===mcs[+c.dataset.i]){a.classList.replace("on","ok");c.classList.replace("on","ok");mop=[];mdone++;pop();
if(mdone===8){if(!ST.mem||mtr<ST.mem){ST.mem=mtr;saveST();MM.querySelector("#mmb").textContent=mtr}MM.querySelector("#mmm").textContent="🎉 Yutdingiz! "+mtr+" ta urinishda."}}
else{mlock=true;setTimeout(()=>{a.classList.remove("on");c.classList.remove("on");mop=[];mlock=false},800)}}};
MM.querySelector("#mmn").onclick=mmstart;mmstart();
/* 3. Mevali do'kon (haqiqiyroq) */
const PRC={Banan:4,Mango:9,Kivi:7,Qulupnay:8,Mandarin:3,Ananas:7,Tarvuz:2,Uzum:4,Olma:3,Shaftoli:4,Limon:4,Gilos:7,Nok:3,Anor:5,Behi:3,Anjir:8,Xurmo:5,Malina:10,Kokos:7,Avokado:9,Papayya:6,Marakuya:10,"Ajdaho mevasi":11,Pomelo:5,Lichi:10,Guava:6};
ST.stock=ST.stock||{};ST.unl.forEach(n=>{if(!ST.stock[n])ST.stock[n]={kg:6,fr:100}});
const SP=document.getElementById("shp");
SP.innerHTML=`<h2>🏪 Mevali do'kon</h2><div class="store"><div class="awn">MEVALI DO'KON</div><div class="sbody"><p style="margin-top:0;color:var(--muted)">Mijoz necha kilo qaysi mevani so'rasa, rastadagi mevani bosib tarozida o'sha miqdorni tortasiz (har bosish 1 kg) va "Sotish" ni bosasiz. Meva vaqt o'tgan sari yangiligini yo'qotadi, eskisi arzon sotiladi. Ombor tugasa, yangi meva olib keling (🚚). Narx: 🪙 / kg.</p><div class="gst"><span>🪙 <b id="spc">0</b></span><span id="spr">❤️❤️❤️</span><span>Xizmat: <b id="sps">0</b></span></div><p><button class="qb" id="spb">▶ Do'konni ochish</button> <span id="spm"></span></p><div class="cust" id="spq"></div><div class="scl" id="scl"></div><h3>Rasta</h3><div class="crts" id="shf"></div><h3>Yangi mevalar ochish</h3><div class="shelf" id="shu"></div></div></div>`;
let sq=[],srun=false,srep=3,sspawn=0,stm=0,scl={n:null,kg:0};
const scost=()=>20+8*(ST.unl.length-4);
const sunit=n=>scl.n===n?scl.kg:0;
function sclr(){if(scl.n&&ST.stock[scl.n])ST.stock[scl.n].kg+=scl.kg;scl={n:null,kg:0}}
function sscl(){SP.querySelector("#scl").innerHTML=scl.n?`<span>⚖️</span>${thumb(FB(scl.n))}<b>${scl.n}: ${scl.kg} kg</b><button id="scs">💰 Sotish</button><button id="scr">↩ Bo'shatish</button>`:`<span>⚖️</span> Tarozi bo'sh. Rastadagi mevani bosing.`}
function sshelf(){SP.querySelector("#shf").innerHTML=ST.unl.map(n=>{const f=FB(n),s=ST.stock[n];return `<div class="crt" data-n="${n}"><button class="sh2" data-n="${n}"><span class="ci">${thumb(f)}</span><b>${n}</b></button><div class="fb"><div style="width:${s.fr}%"></div></div><small class="kg">${s.kg} kg · 🪙${PRC[n]}/kg</small><button class="rs" data-r="${n}">🚚 +5 kg (🪙${Math.round(PRC[n]*3)})</button></div>`}).join("");
SP.querySelector("#shu").innerHTML=F.filter(f=>!ST.unl.includes(f.n)).slice(0,10).map(f=>`<button class="sh2" data-u="${f.n}"><span class="ci">${thumb(f)}</span>${f.n}<small>🪙 ${scost()}</small></button>`).join("")||"Hamma meva ochilgan 🎉";sdr()}
function sfresh(){ST.unl.forEach(n=>{const c=SP.querySelector(`.crt[data-n="${n}"]`);if(!c)return;c.querySelector(".fb div").style.width=ST.stock[n].fr+"%";c.querySelector(".kg").textContent=ST.stock[n].kg+" kg · 🪙"+PRC[n]+"/kg"})}
function sdr(){SP.querySelector("#spc").textContent=ST.coins;SP.querySelector("#sps").textContent=ST.served;SP.querySelector("#spr").textContent="❤️".repeat(Math.max(0,srep))+"🖤".repeat(3-Math.max(0,srep));
const now=Date.now();SP.querySelector("#spq").innerHTML=sq.map(c=>`<div class="cu"><span class="who">${c.who}</span><div class="bub">🗣️ ${c.kg} kg ${c.f.n}, iltimos<div class="pb"><div style="width:${Math.max(0,100-(now-c.t0)/c.dur*100)}%"></div></div></div></div>`).join("")||(srun?"Mijoz kutilmoqda...":"")}
function sstop(msg){clearInterval(stm);srun=false;sq=[];sclr();sscl();SP.querySelector("#spm").textContent=msg||"";SP.querySelector("#spb").textContent="▶ Do'konni ochish";sdr();sfresh();saveST()}
function stick(){if(cur!=="shp"){sstop("Do'kon yopildi. Qayta oching.");return}const now=Date.now();
sq=sq.filter(c=>{if(now-c.t0>c.dur){srep--;return false}return true});
if(srep<=0){sstop("😞 Mijozlar ketib qoldi, do'kon yopildi. Xizmat: "+ST.served);return}
if(sq.length<3&&now-sspawn>3500&&Math.random()<.5){sspawn=now;sq.push({f:FB(rnd(ST.unl)),kg:1+(Math.random()*3|0),who:rnd(["👩","👨","👵","👴","🧑","👧","👦"]),t0:now,dur:15000})}
ST.unl.forEach(n=>{const s=ST.stock[n];s.fr=Math.max(20,s.fr-.04)});sdr()}
SP.querySelector("#spb").onclick=()=>{if(srun){sstop("Do'kon yopildi.");return}srun=true;srep=3;sq=[];sspawn=0;SP.querySelector("#spm").textContent="";SP.querySelector("#spb").textContent="⏹ Yopish";stm=setInterval(stick,250);setInterval(()=>{if(srun&&cur==="shp")sfresh()},1000);sdr()};
SP.querySelector("#shf").onclick=e=>{const r=e.target.closest(".rs");
if(r){const n=r.dataset.r,c=Math.round(PRC[n]*3),s=ST.stock[n];if(ST.coins<c){toast("Tanga yetmaydi: "+c+" 🪙");return}ST.coins-=c;s.fr=Math.round((s.kg*s.fr+500)/(s.kg+5));s.kg+=5;saveST();pop();sdr();sfresh();return}
const b=e.target.closest(".sh2");if(!b)return;if(!srun){toast("Avval do'konni oching");return}
const n=b.dataset.n,s=ST.stock[n];if(s.kg<=0){toast("Ombor bo'sh. 🚚 bilan yangi meva oling");return}
if(scl.n&&scl.n!==n)sclr();scl.n=n;scl.kg++;s.kg--;sscl();sfresh()};
SP.querySelector("#scl").onclick=e=>{const b=e.target.closest("button");if(!b)return;
if(b.id==="scr"){sclr();sscl();sfresh();return}
if(b.id==="scs"){const cs=sq.filter(x=>x.f.n===scl.n);if(!cs.length){toast("Hech kim "+scl.n+" so'ramadi");return}
const c=cs.find(x=>x.kg===scl.kg);if(!c){toast("Mijoz "+cs[0].kg+" kg so'ragan edi, siz "+scl.kg+" kg tortdingiz");return}
const s=ST.stock[scl.n],left=1-(Date.now()-c.t0)/c.dur,g=Math.round(PRC[scl.n]*scl.kg*(.5+.5*s.fr/100))+(left>.5?2:0);
ST.coins+=g;ST.served++;sq.splice(sq.indexOf(c),1);scl={n:null,kg:0};saveST();pop();toast("+"+g+" 🪙"+(left>.5?" (tez xizmat uchun +2)":""));sscl();sdr()}};
SP.querySelector("#shu").onclick=e=>{const b=e.target.closest("button");if(!b)return;const n=b.dataset.u,c=scost();if(ST.coins<c){toast("Tanga yetmaydi: "+c+" 🪙 kerak");return}ST.coins-=c;ST.unl.push(n);ST.stock[n]={kg:5,fr:100};saveST();pop();toast(n+" ochildi! 🎉");sshelf()};
sshelf();sscl();
/* 4. Virtual bog' (haqiqiyroq) */
const GD=document.getElementById("gd");
const GP={Banan:270,Mango:110,Kivi:200,Qulupnay:30,Mandarin:210,Ananas:300,Tarvuz:90,Uzum:140,Olma:150,Shaftoli:140,Limon:200,Gilos:60,Nok:150,Anor:170,Behi:150,Anjir:100,Xurmo:190,Malina:50,Kokos:300,Avokado:300,Papayya:270,Marakuya:80,"Ajdaho mevasi":40,Pomelo:200,Lichi:90,Guava:120};
ST.garden=(ST.garden||[null,null,null]).map(p=>p&&p.d!==undefined?p:null);
ST.gday=ST.gday||0;ST.gw=ST.gw||"sun";ST.gts=ST.gts||Date.now();
const WI={sun:["☀️","Quyoshli: tuproq tez quriydi"],cl:["☁️","Bulutli"],rn:["🌧️","Yomg'ir: tuproq namlanadi"]};
GD.innerHTML=`<h2>🌳 Virtual bog'</h2><p style="color:var(--muted)">Ko'chat ekib, 1 soniya = 1 kun hisobida o'stirasiz. Tuproq namligini kuzating: quyoshli kunda nam kamayadi, yomg'irda ko'payadi. Nam 0 bo'lsa o'simlik so'liydi va o'smaydi. Ba'zan 🐛 qurt tushadi, uni sovunli suv bilan davolamasangiz o'sish to'xtaydi. Pishgan mevani tersangiz 12 🪙 olasiz (do'kon ombori ochiq bo'lsa, +3 kg meva ham tushadi). Bog'ingiz saqlanadi va siz yo'qligingizda ham o'saveradi.</p><p>🪙 <b id="gdc">0</b> &nbsp; 🧺 Hosil: <b id="gdh">0</b> &nbsp; 📆 Kun: <b id="gdd">0</b> &nbsp; <span id="gdw"></span></p><div class="plots" id="plt"></div>`;
function gstep(){ST.gday++;if(ST.gday%8===0)ST.gw=rnd(["sun","sun","cl","rn"]);
ST.garden.forEach(p=>{if(!p)return;p.m=Math.max(0,Math.min(100,p.m+({sun:-5,cl:-3,rn:16}[ST.gw])));
if(p.d<GP[p.n]){if(!p.pest&&p.m>0)p.d+=p.m>=25?1:.3;if(!p.pest&&p.d>8&&Math.random()<.025)p.pest=true}})}
function gsim(){const now=Date.now();let n=Math.floor((now-ST.gts)/1000);if(n<=0)return;ST.gts+=n*1000;n=Math.min(n,600);while(n--)gstep()}
function gscene(p){const f=FB(p.n),pr=Math.min(1,p.d/GP[p.n]),ready=pr>=1,em=pr<.1?"🌰":pr<.3?"🌱":pr<.6?"🌿":"🌳",sz=ready?110:26+pr*84;
const fx=ready?[[-34,70],[10,100],[34,56]].map(([x,y])=>`<i class="fx" style="left:calc(50% + ${x}px);bottom:${y}px">${thumb(f)}</i>`).join(""):"";
return `<div class="scn ${ST.gw}"><span class="wx">${WI[ST.gw][0]}</span><div class="pln ${p.m===0?"wl":""}" style="font-size:${sz}px">${em}</div>${fx}${p.pest?'<span class="bug">🐛</span>':""}<div class="soil" style="filter:brightness(${1-p.m/260})"></div></div>`}
function ginf(p){const pr=Math.min(1,p.d/GP[p.n]),st=pr>=1?"🎉 Pishdi! Terib oling.":p.pest?"🐛 Qurt tushdi! Davolang.":p.m===0?"🥀 So'lmoqda, suv bering.":p.m<25?"⚠️ Suv kam, o'sish sekin.":"✅ Yaxshi o'syapti.";
return `<b>${p.n}</b> · ${Math.floor(Math.min(p.d,GP[p.n]))} / ${GP[p.n]} kun<div class="pb"><div style="width:${pr*100}%"></div></div>💧 Namlik: ${Math.round(p.m)}%<div class="pb"><div style="width:${p.m}%;background:#4aa3ff"></div></div>${st}`}
function gdr(){GD.querySelector("#plt").innerHTML=ST.garden.map((p,i)=>p?`<div class="pl2" data-i="${i}"><div class="sc">${gscene(p)}</div><div class="inf">${ginf(p)}</div><div class="btns"><button data-a="water" data-i="${i}">💧 Suv ber</button><button data-a="treat" data-i="${i}">🧴 Sovunli suv (3 🪙)</button><button data-a="pick" data-i="${i}">🧺 Terib ol (+12 🪙)</button></div></div>`:`<div class="pl2" data-i="${i}"><div class="scn sun"><span class="wx">🌱</span><div class="soil"></div></div><div class="inf">Bo'sh yer</div><select data-i="${i}">${F.map(f=>`<option>${f.n}</option>`).join("")}</select><br><button data-a="plant" data-i="${i}">🌱 Ko'chat ekish</button></div>`).join("");gtick(true)}
function gtick(force){gsim();GD.querySelector("#gdc").textContent=ST.coins;GD.querySelector("#gdh").textContent=ST.harv;GD.querySelector("#gdd").textContent=ST.gday;GD.querySelector("#gdw").textContent=WI[ST.gw][0]+" "+WI[ST.gw][1];
if(!force&&cur!=="gd")return;
ST.garden.forEach((p,i)=>{if(!p)return;const c=GD.querySelector(`.pl2[data-i="${i}"]`);if(!c)return;c.querySelector(".sc").innerHTML=gscene(p);c.querySelector(".inf").innerHTML=ginf(p);const rd=p.d>=GP[p.n];
c.querySelector('[data-a="water"]').hidden=rd;c.querySelector('[data-a="treat"]').hidden=!p.pest;c.querySelector('[data-a="pick"]').hidden=!rd})}
GD.querySelector("#plt").onclick=e=>{const b=e.target.closest("button");if(!b)return;const i=+b.dataset.i,a=b.dataset.a;
if(a==="plant"){ST.garden[i]={n:GD.querySelector(`select[data-i="${i}"]`).value,d:0,m:60,pest:false};pop()}
else if(a==="water"){const p=ST.garden[i];p.m=Math.min(100,p.m+45);pop()}
else if(a==="treat"){if(ST.coins<3){toast("Tanga yetmaydi");return}ST.coins-=3;ST.garden[i].pest=false;pop()}
else if(a==="pick"){const p=ST.garden[i];ST.garden[i]=null;ST.harv++;ST.coins+=12;if(ST.stock[p.n])ST.stock[p.n].kg+=3;pop();toast("+12 🪙 hosil!")}
saveST();gdr();sshelf()};
setInterval(()=>{gtick();if(Math.random()<.2)saveST()},1000);gdr();
/* 5. Yutuqlar */
const ACH=[["🔭","Tadqiqotchi","10 ta mevani oching",()=>Object.keys(ST.seen).length>=10],["🌍","Mevalar bilimdoni","Hamma mevalarni oching",()=>Object.keys(ST.seen).length>=F.length],["❤️","Sevimlilar","3 ta mevani yoqtiring",()=>fav.size>=3],["🧠","Viktorina ustasi","Viktorinada 6/6 oling",()=>ST.qbest>=6],["🧺","Tezkor yig'uvchi","Savatga solishda 10 ball",()=>gb>=10],["🥇","Savat ustasi","Savatga solishda 20 ball",()=>gb>=20],["🍉","Tarvuz yasovchi","Birlashtirishda tarvuzga yeting",()=>ST.mx>=9],["🎴","Xotira kuchi","Xotira o'yinini 12 urinishda tugating",()=>ST.mem>0&&ST.mem<=12],["🏪","Yaxshi sotuvchi","20 ta mijozga xizmat qiling",()=>ST.served>=20],["🌱","Bog'bon","Birinchi hosilni oling",()=>ST.harv>=1],["🌳","Katta bog'bon","10 ta hosil oling",()=>ST.harv>=10],["👨‍🍳","Oshpaz","3 ta retseptni tayyorlang",()=>ST.cooked>=3]];
const AE=document.getElementById("ach");
function achdr(){const n=ACH.filter((a,i)=>ST.ach[i]).length;AE.innerHTML=`<h2>🏅 Yutuqlar</h2><p style="color:var(--muted)">${n} / ${ACH.length} ta yutuq ochildi</p><div class="ag">${ACH.map((a,i)=>`<div class="${ST.ach[i]?"":"lk"}"><span>${a[0]}</span><b>${a[1]}</b>${a[2]}</div>`).join("")}</div>`}
function chk(){let ch=false;ACH.forEach((a,i)=>{if(!ST.ach[i]&&a[3]()){ST.ach[i]=1;ch=true;toast("🏅 Yangi yutuq: "+a[1]+"!");pop()}});if(ch){saveST();achdr()}}
setInterval(chk,2000);achdr();
/* 6. Retsept kitobi */
const RBK=[
{f:"Banan",t:"Banan-sut smuzisi",p:2,i:["2 ta banan","300 ml sut","1 osh qoshiq asal","Bir hovuch muz"],s:[["Bananni archib, bo'laklarga bo'ling."],["Hamma masalliqni blenderga soling."],["Blenderda silliq bo'lguncha aralashtiring.",0.5],["Stakanlarga quyib, darhol iching."]]},
{f:"Mango",t:"Mango lassi",p:2,i:["1 ta pishgan mango","200 g qatiq","100 ml sovuq suv","1 osh qoshiq asal","Muz"],s:[["Mangoni archib, go'shtini yirik bo'laklarga kesing."],["Mango, qatiq, suv va asalni blenderga soling."],["1 daqiqa aralashtiring.",1],["Muz qo'shib, sovuq holda iching."]]},
{f:"Shaftoli",t:"Shaftoli kompoti",p:6,i:["1 kg shaftoli","2 litr suv","150 g shakar"],s:[["Shaftolini yuvib, ikkiga bo'ling va danagini oling."],["Suvni qaynating, shakarni eritib, shaftolini soling."],["Past olovda qaynating.",15],["Olovdan oling va sovushini kuting.",30],["Sovutgichda sovutib iching."]]},
{f:"Olma",t:"Pechdagi olma",p:4,i:["4 ta olma","2 osh qoshiq asal","1 choy qoshiq dolchin","Bir hovuch yong'oq"],s:[["Pechni 180° ga qizdiring."],["Olmaning yadrosini oling, ichiga yong'oq, asal va dolchin soling."],["Pechda pishiring.",20],["Biroz sovitib, issiq holda yeng."]]},
{f:"Behi",t:"Behi murabbosi",p:8,i:["1 kg behi","800 g shakar","1 stakan suv"],s:[["Behini yuvib, archib, yupqa bo'laklarga kesing."],["Suv va shakardan sirop qaynating.",5],["Behini siropga solib, past olovda pishiring.",40],["Banka(lar)ga solib, sovutib saqlang."]]},
{f:"Limon",t:"Uy limonadi",p:4,i:["3 ta limon","1,5 litr suv","5 osh qoshiq asal","Muz va yalpiz"],s:[["Limonlarni siqib, sharbatini oling."],["Sharbat, asal va suvni aralashtiring."],["Sovutgichda sovuting.",30],["Muz va yalpiz qo'shib, stakanlarga quying."]]},
{f:"Anor",t:"Anor sharbati",p:2,i:["3 ta anor","1 osh qoshiq shakar (ixtiyoriy)"],s:[["Anorni archib, donalarini ajrating."],["Donalarni blenderda 20 soniya ezing.",0.3],["Elak orqali suzib, sharbatini oling."],["Sovutib iching."]]},
{f:"Qulupnay",t:"Qulupnay va qaymoq",p:2,i:["300 g qulupnay","100 ml qaymoq","1 osh qoshiq shakar upasi"],s:[["Qulupnayni yuvib, bandini oling va ikkiga bo'ling."],["Qaymoqni shakar upasi bilan ko'pirtiring.",3],["Kosaga qulupnayni solib, ustiga qaymoq qo'ying."]]},
{f:"Anjir",t:"Anjir va yong'oq",p:2,i:["6 ta anjir","6 ta yong'oq","2 osh qoshiq asal"],s:[["Anjirning bandini kesib, ustidan xoch shaklida kesing."],["Har birining ichiga yong'oq soling."],["Ustidan asal quying va yeng."]]},
{f:"Malina",t:"Malina mors",p:4,i:["300 g malina","1 litr suv","4 osh qoshiq asal"],s:[["Malinani yuvib, qoshiq bilan eting."],["Suvni qaynatib, malinani soling."],["Past olovda pishiring.",5],["Asal qo'shib, sovutib suzing."]]}];
const RB=document.getElementById("rb");let rbi=0,tmr={};
RB.innerHTML=`<h2>📖 Retsept kitobi</h2><p style="color:var(--muted)">Masalliqlarni belgilab boring, qadamlarni ketma-ket bajaring. Vaqti bor qadamlarda ⏱ tugmasi taymerni ishga tushiradi.</p><div class="rbl" id="rbl">${RBK.map((r,i)=>`<button class="zb ${i?"":"on"}" data-i="${i}">${FB(r.f).e} ${r.t}</button>`).join("")}</div><div class="rbd" id="rbd"></div>`;
function rbdr(){Object.values(tmr).forEach(clearInterval);tmr={};const r=RBK[rbi],f=FB(r.f);
RB.querySelector("#rbd").innerHTML=`<div class="rxh"><span class="rxi">${thumb(f)}</span><div><b style="font-size:1.5rem">${r.t}</b><br>👥 ${r.p} kishilik</div></div><h3>Masalliqlar</h3>${r.i.map(x=>`<label><input type="checkbox"> ${x}</label>`).join("")}<h3>Tayyorlash</h3><ol>${r.s.map((x,k)=>`<li>${x[0]}${x[1]?` <button class="tmb" data-k="${k}" data-m="${x[1]}">⏱ ${x[1]<1?Math.round(x[1]*60)+" soniya":x[1]+" daqiqa"}</button>`:""}</li>`).join("")}</ol><button class="qb" id="rbd2">✅ Tayyor bo'ldi</button>`}
RB.querySelector("#rbl").onclick=e=>{const b=e.target.closest(".zb");if(!b)return;rbi=+b.dataset.i;RB.querySelectorAll("#rbl .zb").forEach(x=>x.classList.toggle("on",x===b));rbdr()};
RB.querySelector("#rbd").onclick=e=>{const b=e.target.closest("button");if(!b)return;
if(b.id==="rbd2"){ST.cooked++;saveST();pop();toast("Ofiyat bo'lsin! 🍽️");return}
if(b.classList.contains("tmb")){const k=b.dataset.k;if(tmr[k]){clearInterval(tmr[k]);delete tmr[k];b.textContent="⏱ "+(b.dataset.m<1?Math.round(b.dataset.m*60)+" soniya":b.dataset.m+" daqiqa");return}
let left=Math.round(b.dataset.m*60);const up=()=>{b.textContent="⏳ "+String(Math.floor(left/60)).padStart(2,"0")+":"+String(left%60).padStart(2,"0")+" (to'xtatish)"};up();
tmr[k]=setInterval(()=>{left--;if(left<=0){clearInterval(tmr[k]);delete tmr[k];b.textContent="✅ Vaqt tugadi!";pop();setTimeout(pop,300);setTimeout(pop,600);toast("⏰ Vaqt tugadi!")}else up()},1000)}};
rbdr();

/* Ko'rinishlar: bir vaqtda bitta narsa */
const secs=[...document.querySelectorAll(".blk")],jl=[...document.querySelectorAll(".jl a")],intro=document.querySelector(".intro");
const gal=document.createElement("div");gal.id="gal";gal.className="gal";intro.after(gal);
gal.innerHTML=jl.filter(a=>a.getAttribute("href")!=="#home").map(a=>{const t=a.textContent.trim(),k=t.indexOf(" ");return `<a class="gt" href="${a.getAttribute("href")}"><span>${t.slice(0,k)}</span><b>${t.slice(k+1)}</b></a>`}).join("");
let cur="home";
const isF=v=>/^f\d+$/.test(v);
function show(v){cur=v;document.body.dataset.v=isF(v)?"fruit":v==="home"?"home":"sec";
C.forEach((el,i)=>el.classList.toggle("cur",v==="f"+i));
secs.forEach(b=>b.classList.toggle("on",b.id===v));
intro.style.display=gal.style.display=v==="home"?"":"none";
links.forEach(l=>l.classList.toggle("on",l.getAttribute("href")==="#"+v));
jl.forEach(l=>l.classList.toggle("on",l.getAttribute("href")==="#"+v));homeA.classList.toggle("on",v==="home");
if(isF(v)){ST.seen[F[+v.slice(1)].n]=1;saveST();const el=C[+v.slice(1)];el.classList.remove("show");void el.offsetWidth;requestAnimationFrame(()=>el.classList.add("show"));const a=links[+v.slice(1)];a&&a.scrollIntoView({inline:"center",block:"nearest"})}
scrollTo({top:0,behavior:"instant"});if(v!=="home"){const y=tp.getBoundingClientRect().top;if(y>0)scrollTo({top:y,behavior:"instant"})}}
function sync(arr){const rb=tp.querySelector(".sa.r");let first=-1;
arr.forEach(o=>{const ok=o.el.style.display!=="none";links[o.i].style.display=ok?"":"none";tp.insertBefore(links[o.i],rb);if(ok&&first<0)first=o.i});
if(isF(cur)){const k=+cur.slice(1);if(C[k].style.display==="none")show(first>=0?"f"+first:"home")}}
document.addEventListener("click",e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const h=a.getAttribute("href").slice(1);if(isF(h)||h==="home"||secs.some(b=>b.id===h)){e.preventDefault();show(h)}});
tp.querySelector(".sa.l").insertAdjacentHTML("afterend",'<a href="#home"><b>🏠</b>Bosh</a>');const homeA=tp.querySelector('a[href="#home"]');
show("home");
paint();apply();mk();
})();
