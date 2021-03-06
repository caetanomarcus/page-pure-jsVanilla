const div= (Class,content) => {
    const raiz = document.querySelector('#raiz')
    const div = document.createElement('div');
    div.classList.add(Class);
    raiz.appendChild(div);
    div.innerHTML = content;

}

const addCss = (href) => {
    const css = `<link rel="stylesheet" href=${href}>`;
    document.head.innerHTML = css;
}

addCss('style.css');


div('header',`
<header>
<div class="principal-header">
    <div class="principal-header-figures">
        <figure>
            <img src="assets/star.png" alt="star" class="star-img">
        </figure>
        <figure>
            <img src="assets/Kylo-Ren-banner sem fundo.png" alt="Kylo Kylo-Ren-banner" class="kylo-img">
        </figure>
        <figure>
            <img src="assets/wars.png" alt="wars" class="wars-img">
        </figure>
        <figure>
            <img src="assets/Grupo 4.png" alt="grupo 4" class="g4-img">
        </figure>
    </div>
</div>
<div class="secondary-header">
    <div class="header-bottom">
        <div class="red-box">
            <h2 class="red-box-h2">comece a jogar</h2>
            <p class="red-box-paragraph">Baixe o jogo, cadastre seu nome de usuário e comece a interagir com mais de um milhão de jogadores</p>
            <button class="red-box-button">DOWNLOAD</button>
        </div>
        <section class="about-game">
            <div class="about-game-text">
                <h2>sobre o jogo</h2>
                <span></span>
                <p>Star Wars Battlefront é um jogo eletrônico de tiro em primeira pessoa e terceira pessoa, produzido pela DICE e baseado na franquia Star Wars. Foi publicado pela Eletronic Arts com a chancela da LucasArts a 17 de novembro de 2015
                    para Microsoft Windows, PlayStation 4 e Xbox One.</p>
            </div>

            <img src="assets/star wars frente de batalha.png" alt="sobre o jogo" class="about-game-img">
        </section>
    </div>

</div>

</header>
    

`)

div('structureBox', `
<section class="structure-box">
<div class="structure-box-container">
    <figure class="sith2">
        <img src="assets/lord sifh 2.png" alt="" class="sith2-img">
    </figure>
    <section class="structure-text">
        <h2 class="h2-first">estrutura</h2>
        <h2 class="h2-de">de</h2>
        <h2 class="h2-second">jogo </h2>
        <p>jornada</p>
        <p>a batalha do guerreiro estelar</p>
        <p>heróis contra os vilões</p>
        <p>a batalha galáctica</p>
        <p>superioridade</p>
        <p>fliperama</p>
    </section>
    <figure class="rey">
        <img src="assets/rey star wars.png" alt="rey" class="rey-img">
    </figure>
</div>
</section>
`)

div('main', `
<main>
<section class="atributtes">
    <h2>atributos</h2>
    <div class="atributtes-box">
        <figure class="principal-figure" id="principalfigure">
            <img src="assets/134840-games-review-star-wars-battlefront-review-image1-NkRao9Jw12.png" alt="" class="principal-figure-img" id="principalimg" >
        </figure>
        <figure class="smaller-figure">
            <figure id="smallerfigure1">
                <img src="assets/Security_stormtrooper_HUC2-FF-003301.png" alt="" class="smaller-figure-img">
            </figure>
            <figure id="smallerfigure2">
                <img src="assets/star game.png" alt="" class="smaller-figure-img">
            </figure>
            <figure id="smallerfigure3">
                <img src="assets/naves em batalha star wars.png" alt="" class="smaller-figure-img">
            </figure>
            <figure id="smallerfigure4">
                <img src="assets/stormtrup.png" alt="" class="smaller-figure-img">
            </figure>
        </figure>
    </div>
    <figure class="hierarchy">
        <img src="assets/star-wars_stormtrooper_hierarquia.png" alt="">
    </figure>
    <div class="hierarchy-text">
        <p>Em normas especiais sobre o assunto, ressalta-se que a legislação é deliberadamente preceito judicial do faturamento dos negócios, excluindo o princípio da presunção de inocência.</p>
    </div>
</section>
<section class="how-to-play">
    <div class="how-to-play-text">
        <h2>como jogar?</h2>
    </div>
</section>
</main>
`)


div('mainButtons', `
<section class="main-buttons">
<figure class="black-cloack">
    <img src="assets/stortm_trooper_capa_preta-removebg-preview.png" alt="">
</figure>
<div class="buttons">
    <div class="buttons-download">
        <button>download</button>
        <h3>01</h3>
        <p>Baixe o jogo e crie o nome de usuário</p>
        <span></span>
    </div>
    <div class="buttons-choose">
        <button>escolher</button>
        <h3>02</h3>
        <p>Selecione o tipo de jogo</p>
        <span></span>
    </div>
    <div class="buttons-explore">
        <button>explorar</button>
        <h3>03</h3>
        <p>Conquista a galáxia</p>
        <span></span>
    </div>
</div>

</section>
`)

div('footer', `
<footer>
<div class="left-box">
    <div class="left-box-upper-text">
        <h2>aplicativo</h2>
        <p>Comunidade adversária, é claro, como sempre imprevisível. A competitividade, à primeira vista, cria um conjunto sociométrico de publicações leais.</p>
    </div>
    <figure class="download-app">
        <button><img src="assets/disponivel-google-play-badge.png" alt=""> </button>
        <button> <img src="assets/baixar-na-app-store-botao-2-1024x304.png" alt=""></button>
    </figure>
    <figure class="left-box-sw">
        <img src="assets/esta uo.png" alt="">
    </figure>
    <div class="left-box-final-paragraph">
        <p>Políticas internacionais, na verdade significa um funcional tipo de cultura política da Europa continental. É bem sabido que o nacionalismo democrático-cristão simboliza o existencial.</p>
    </div>
    <figure class="vader">
        <img src="assets/darth_vader-sem fundo@2x.png" alt="">
    </figure>
</div>
<div class="right-box">
    <p class="right-box-paragraph">
        Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://in.pinterest.com/pin/337347828330561824/
    </p>
</div>
</footer>
`)

