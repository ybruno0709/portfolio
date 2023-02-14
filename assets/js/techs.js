$(() => {
    const cubes = $('.cube');
    const technology = $('#tech-text');
    const descriptionEl = $('#info-dropdown');
    const dropdownBtn = $('#tech-name');
    const dropdownSymbol = $('#tech-name i');
    let current = 0;


    const colorsDefault = ["#e44d26", "#3492cb", "#ead41c", "#0863a2"];
    const colorsActive = ["#ff572d", "#57b8f5", "#ffeb38", "#2c97e4"];
    const technologies = ["HTML 5", "CSS 3", "JavaScript", "jQuery"];
    const descriptionArr = ["HTML (Hypertext Markup Language) é uma linguagem de marcação usada para criar páginas da web. Ela é usada para estruturar o conteúdo da página da web, incluindo texto, imagens, links, vídeos e outros tipos de mídia",
        "CSS (Cascading Style Sheets) é uma linguagem de folha de estilo usada para definir a aparência e o layout de elementos HTML em uma página da web. Em outras palavras, o CSS é usado para separar a estrutura e conteúdo de uma página da web de sua apresentação visual",
        "JavaScript é uma linguagem de programação usada principalmente em páginas da web para adicionar recursos interativos, como animações e validação de formulários. É uma ferramenta importante para os desenvolvedores de sites, pois permite criar conteúdo mais dinâmico e envolvente para os usuários. O JavaScript é executado diretamente no navegador do usuário, o que significa que não é necessário instalar nenhum software adicional no computador",
        "jQuery é uma ferramenta muito útil para os desenvolvedores de sites, pois ajuda a simplificar a forma como as páginas da web interagem e se comportam em relação às ações dos usuários. É como uma coleção de recursos e funções que podem ser usados para fazer animações, criar efeitos visuais e fazer outras coisas legais com o site"
    ];

    animation();

    let delay = setInterval(() => {
        checkCurrent();
        animation();
    }, 1250);

    dropdownBtn.click(() => {
        let actualClass = $(dropdownSymbol).attr('class').split(' ')[1];

        $(dropdownSymbol).toggleClass('fa-xmark fa-caret-down');

        if (actualClass === 'fa-xmark') {
            $('#info-dropdown').hide();
        } else if (actualClass === 'fa-caret-down') {
            $('#info-dropdown').show();
        }

        clearInterval(delay);
    });

    function checkCurrent() {
        if (current < cubes.length - 1) {
            current++;
        } else {
            current = 0;
        }
    }

    function changeActiveCube() {
        cubes.each(i => {
            if ($(cubes[i]).attr('id').split('-')[1] * 1 === current) {
                $(cubes[i]).addClass('active');
            } else {
                $(cubes[i]).removeClass('active');
            }
        });
    }

    function changeDescription() {
        descriptionEl.html(descriptionArr[current]);
    }

    function changeCubeColor() {
        cubes.each(i => {
            const actual = $(cubes[i]).attr('id').split('-')[1] * 1;

            $(cubes[i]).mousedown(() => {
                $(cubes[i]).find('div').css('background-color', colorsActive[actual]);
            });

            $(cubes[i]).mouseup(() => {
                $(cubes[i]).find('div').css('background-color', colorsDefault[actual]);
            });
        });
    }

    function changeFaceColor() {
        cubes.each(i => {
            const actual = $(cubes[i]).attr('id').split('-')[1] * 1;
            const faces = $(cubes[i]).find('div');

            faces.each(idx => {
                $(faces[idx]).hover(() => {
                    $(faces[idx]).css('background-color', colorsActive[actual]);
                }, () => {
                    $(faces[idx]).css('background-color', colorsDefault[actual]);
                });
            });
        });
    }

    function cubeClick() {
        cubes.each(i => {
            $(cubes[i]).click(() => {
                current = i;
                $(cubes[i]).addClass('active');

                cubes.removeClass('active');

                animation();
                clearInterval(delay);
            });
        });
    }

    function textTransform() {
        technology.html(technologies[current]);
        technology.css('color', colorsDefault[current]);
    }

    function animation() {
        cubeClick();
        changeActiveCube();
        changeCubeColor();
        changeFaceColor();
        changeDescription();
        textTransform();
    }
});