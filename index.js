// Write your code here!
/* 1) no longer has DOM node 'main#main'
      2) has a 'newHeader' variable that points to an <h1> node
      3) the 'newHeader' variable that points to the <h1> node has an id of 'victory'
      4) the 'newHeader' variable that points to the <h1> node with an id of 'victory'
     has the text "YOUR-NAME is the champion" (with your name in place of YOUR-NAME) inside it*/

const removeMain = document.getElementById('main');
removeMain.remove();
const newHeader= document.createElement('h1');
newHeader.id = 'victory'
newHeader.textContent='YOUR-NAME is the champion'
document.body.append(newHeader);