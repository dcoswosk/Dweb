const coresJavaScript = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", 
    "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", 
    "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", 
    "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", 
    "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", 
    "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", 
    "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", 
    "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", 
    "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", 
    "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", 
    "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", 
    "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", 
    "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", 
    "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", 
    "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", 
    "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", 
    "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
  ];

let coresEscolhidas = new Set();
let tentativas = 3;
let acertos = 0;
const showColorsButton = document.getElementById('showColorsButton');
const colorList = document.getElementById('colorList');
const colorListContainer = document.getElementById('colorListContainer');

document.getElementById('guessButton').addEventListener('click', fazerTentativa);
document.getElementById('restartButton').addEventListener('click', reiniciarJogo);
  
  // Preenche a lista com os nomes das cores
  colorListContainer.innerHTML = '';
  coresJavaScript.forEach(cor => {
    const listItem = document.createElement('li');
    listItem.textContent = cor;
    colorListContainer.appendChild(listItem);
  });


function iniciarJogo() {
  coresEscolhidas = new Set();
  for(let i = 0; i < 10; i++) {
    const corAleatoria = coresJavaScript[Math.floor(Math.random() * coresJavaScript.length)];
    coresEscolhidas.add(corAleatoria);
  }
    tentativas = 3;
    acertos = 0;
    document.getElementById('attemptsLeft').textContent = tentativas;
    document.getElementById('message').textContent = "";
    document.getElementById('resultMessage').textContent = "";
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById('colorDisplay').style.display = 'none';
    document.getElementById('colorInput').nodeValue = "";
}
function fazerTentativa() {
    const corDigitada = document.getElementById('colorInput').value.toLowerCase().trim();
    if (!corDigitada) {
        alert("Digite uma cor.");
        return;
      }
    if(coresEscolhidas.has(corDigitada)) {
        acertos++;
    document.getElementById('message').textContent = `Você acertou! Cor: ${corDigitada}`;
    document.body.style.backgroundColor = corDigitada;
    document.getElementById('colorDisplay').style.backgroundColor = corDigitada;
    document.getElementById('colorDisplay').style.display = 'block';
  } else {
    tentativas--;
    document.getElementById('message').textContent = `Errou! Tente novamente.`;
    document.getElementById('attemptsLeft').textContent = tentativas;
    dicaDeOrdemAlfabetica(corDigitada);
  }

  if (acertos === 10) {
    document.getElementById('resultMessage').textContent = "Você acertou todas as cores! Parabéns!";
    document.getElementById('restartButton').style.display = 'inline-block';
    document.getElementById('guessButton').style.display = 'none';
  }

  if (tentativas <= 0) {
    document.getElementById('message').textContent = '';
    document.getElementById('resultMessage').textContent = "Game Over! Você perdeu.";
    document.getElementById('restartButton').style.display = 'inline-block';
    document.getElementById('guessButton').style.display = 'none';
  }

  document.getElementById('colorInput').value = ""; // Limpar o campo de entrada
}

function dicaDeOrdemAlfabetica(corDigitada) {
  const coresEscolhidasArray = Array.from(coresEscolhidas).sort();
  const corCorreta = coresEscolhidasArray[acertos]; // A próxima cor correta que o jogador deve adivinhar

  if (corDigitada < corCorreta) {
    document.getElementById('message').textContent += " Dica: A cor correta vem depois da cor digitada na ordem alfabética.";
  } else {
    document.getElementById('message').textContent += " Dica: A cor correta vem antes da cor digitada na ordem alfabética.";
  }
}

function reiniciarJogo() {
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById('guessButton').style.display = 'inline-block';
    iniciarJogo();
  }
  iniciarJogo();