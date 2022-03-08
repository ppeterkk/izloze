const vardi = ['Baiba Krūmiņa', 'Jānis Bērziņš', 'Pēteris Liepa', 'Laura Ose', 'Artis Priede'];

const balvas = ['Dators', 'Telefons', 'Blenderis', 'Fotoaparāts', 'Kafijas automāts'];

const naudaKopa = 10000000;

let uzvaretajuSkaits = 5;

for (let i=0;i<uzvaretajuSkaits; i++){
    let rand = Math.random()*vardi.length;
    rand = Math.floor(rand);
    //noapaļo uz leju
    let uzvaretajuSkaits = vardi[rand];
    console.log (vardi[rand]);
    //izvada konsolē
}
