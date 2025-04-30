const cards = [`A`,1,2,3,4,5,6,7,8,9,10,`J`,`Q`,`K`];

const symbols = [`♥`,`♦`,`♠`,`♣`]

const getCardChoice = () =>{
    const cardChoice = Math.floor(Math.random() * cards.length);
    return cards[cardChoice];
}

const getSymbolChoice = () =>{
    const symbolChoice = symbols[Math.floor(Math.random() * symbols.length)];
    const colorChoice = (symbolChoice === '♥' || symbolChoice === '♦') ? 'red' : 'black';
    return {symbolChoice, colorChoice}
}

const displayResults= (symbolResult, cardResult) => {
    document.getElementById("symbolHigh").innerHTML = symbolResult.symbolChoice;
    document.getElementById("symbolHigh").style.color = symbolResult.colorChoice;

    document.getElementById("number").innerHTML = cardResult;

    document.getElementById("symbolLow").innerHTML = symbolResult.symbolChoice;
    document.getElementById("symbolLow").style.color = symbolResult.colorChoice;
}

const getWholeCard = () =>{
    const cardResult = getCardChoice();
    const symbolResult = getSymbolChoice();
    displayResults(symbolResult, cardResult)
}
