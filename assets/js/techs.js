'use strict';

$(() => {
    const cubes = $('.cube');
    const techName = $('#tech-text');
    const techDescription = $('#info-dropdown');
    const dropdownBtn = $('#tech-name');
    const dropdownSymbol = $('#tech-name i');
    let currentIndex = 0;
    let currentCube;
    let currentTech;

    const technologies = [
        {
            name: "HTML 5",
            description: "HTML (Hypertext Markup Language) é uma linguagem de marcação usada para criar páginas da web. Ela é usada para estruturar o conteúdo da página da web, incluindo texto, imagens, links, vídeos e outros tipos de mídia",
            defaultColor: "#e44d26",
            activeColor: "#ff572d"
        },
        {
            name: "CSS 3",
            description: "CSS (Cascading Style Sheets) é uma linguagem de folha de estilo usada para definir a aparência e o layout de elementos HTML em uma página da web. Em outras palavras, o CSS é usado para separar a estrutura e conteúdo de uma página da web de sua apresentação visual",
            defaultColor: "#3492cb",
            activeColor: "#57b8f5"
        },
        {
            name: "JavaScript",
            description: "JavaScript é uma linguagem de programação usada principalmente em páginas da web para adicionar recursos interativos, como animações e validação de formulários. É uma ferramenta importante para os desenvolvedores de sites, pois permite criar conteúdo mais dinâmico e envolvente para os usuários. O JavaScript é executado diretamente no navegador do usuário, o que significa que não é necessário instalar nenhum software adicional no computador",
            defaultColor: "#ead41c",
            activeColor: "#ffeb38"
        },
        {
            name: "jQuery",
            description: "jQuery é uma ferramenta muito útil para os desenvolvedores de sites, pois ajuda a simplificar a forma como as páginas da web interagem e se comportam em relação às ações dos usuários. É como uma coleção de recursos e funções que podem ser usados para fazer animações, criar efeitos visuais e fazer outras coisas legais com o site",
            defaultColor: "#0863a2",
            activeColor: "#2c97e4"
        }
    ];

    changeCurrent();
    updateAction();

    let cubeAnimation = setInterval(() => {
        changeCurrent();
        updateAction();
    }, 1250);

    function updateAction() {
        currentCube = $(cubes[currentIndex]);
        currentTech = technologies[currentIndex];

        changeTechName();
        changeDescription();

        cubes.each(i => {
            let cube = $(cubes[i]);
            let cubeIndex = cube.attr('id').split('-')[1] * 1;
            let faces = cube.children('div');

            changeActiveCube(cube, cubeIndex);

            cube.off().on('click', () => {
                currentCube = cube;
                currentIndex = cubeIndex;

                updateAction();
                clearInterval(cubeAnimation);
            });
        });
    }

    dropdownBtn.click(() => {
        let actualClass = $(dropdownSymbol).attr('class').split(' ')[1];

        $(dropdownSymbol).toggleClass('fa-xmark fa-caret-down');

        if (actualClass === 'fa-xmark') {
            $('#info-dropdown').removeClass('active');
        } else if (actualClass === 'fa-caret-down') {
            $('#info-dropdown').addClass('active');
        }

        clearInterval(cubeAnimation);
    });

    function changeCurrent() {
        currentIndex = currentIndex === cubes.length - 1 ? 0 : currentIndex + 1;
    }

    function changeActiveCube(cube, cubeIndex) {
        cube.toggleClass('active', cubeIndex === currentIndex);
    }

    function changeTechName() {
        techName.html(currentTech.name);
        techName.css('color', currentTech.defaultColor);
        dropdownBtn.css('color', currentTech.defaultColor);
    }

    function changeDescription() {
        techDescription.html(currentTech.description);
    }
});