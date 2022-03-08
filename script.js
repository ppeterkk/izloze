const vardi = ['Baiba Krūmiņa', 'Jānis Bērziņš', 'Pēteris Liepa', 'Laura Ose', 'Artis Priede'];

const balvas = ['Dators', 'Telefons', 'Blenderis', 'Fotoaparāts', 'Kafijas automāts'];

const naudaKopa = 10000000;

let uzvaretajuSkaits = 5;

let rindas = document.querySelector('.rindas'); //pievieno mainīgo

for (let i=0;i<uzvaretajuSkaits; i++){
    let rand = Math.random()*vardi.length;
    rand = Math.floor(rand);
    //noapaļo uz leju
    let uzvaretajuSkaits = vardi[rand];
    let uzvaretajs = (vardi[rand]);
    //izvada konsolē
rindas.innerHTML +=`
//pievieno +, lai pieskaitītu nākamo
<tr>
    <td>${i+1}</td>
    <td>${uzvaretajs}</td>
</tr>` //izvade vairākās rindās
