let cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "😭", "🚀"]
    let ayodouble = cards.concat(cards)
        let troll;
            let target1
            let target2
            let smazatpls
            let pocitadlo = 0
            let twotimes
            let modal
            let cudlikReset
            let cego
console.log(ayodouble)

let init = function () {
    cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "😭", "🚀"];
    ayodouble = cards.concat(cards);
    console.log(`Cards Doubled: ${ayodouble}`);
    troll = document.getElementById('troll');
    cudlikReset = document.getElementById('ResetButton');
    modal = document.getElementById('winscreenModal');
    cego = cards.length;
    shuffleFunc();
    htmlAdd();

    cudlikReset.addEventListener('click', reset);
}

let shuffleFunc = function () {
    for (let i = 0; i < ayodouble.length; i++) {
        let shuffle = Math.floor(Math.random() * i);
        let j = ayodouble[i];
        ayodouble[i] = ayodouble[shuffle];
        ayodouble[shuffle] = j;
    }
    console.log(`Cards Shuffled: ${ayodouble}`);
}

let htmlAdd = function () {
    for (let i = 0; i < ayodouble.length; i++) {
        let div = document.createElement('div');
        div.innerText = ayodouble[i].substring(0, 2);
        div.id = `id${i + 1}`;
        div.className = 'piece_unflipped';
        div.addEventListener('click', otocka);

        troll.appendChild(div);
    }
}
let otocka = function (e) {
    if (twotimes === true) return;
    let target = e.target;

    if (target.className === ('piece_solved')) return;

    if (pocitadlo < 1) {
        twotimes = true;
        target.className = 'piece_flipped';
        target1 = target;
        pocitadlo++;
        twotimes = false;
    } else {
        twotimes = true;
        target.className = 'piece_flipped';
        target2 = target;
        pocitadlo--;
        twotimes = false;
    }

    if (pocitadlo < 1 && target1.id === target2.id) {
        twotimes = true;
        target1.className = 'piece_unflipped'
        target1 = '';
        target2 = '';
        pocitadlo = 0;
        twotimes = false;
        return;
    }

    if (pocitadlo < 1) {
        if (target1.innerText === (target2.innerText)) {
            twotimes = true;
            target1.className = 'piece_solved';
            target2.className = 'piece_solved';
            twotimes = false;
            cego--;
            console.log(`Turns left to win: ${cego}`);
        } else {
            twotimes = true;
            setTimeout(function () {
                target1.className = 'piece_unflipped';
                target2.className = 'piece_unflipped';

                target1 = '';
                target2 = '';
                pocitadlo = 0;
                twotimes = false;
            }, 2000)
        }
    }

    console.log('Card Turn');

    if (pocitadlo > 0) {
            console.log(`TARGET 1 = ${target1.innerText}`);

    } else {
            console.log(`TARGET 2 = ${target2.innerText}`);
    }

    if (pocitadlo < 1) {
        if (target1.innerText === (target2.innerText)) {
            console.log(`${target1.innerText} === ${target2.innerText}`);
        } else {
            console.log(`${target1.innerText} =/= ${target2.innerText}`);
        }
    }


    if (cego < 1) {
        epicWin();
    }
}

let reset = function () {
    for (let i = 0; i < ayodouble.length; i++) {
        smazatpls = document.getElementById(`id${i + 1}`);
        smazatpls.remove();
    }
    target1 = '';
    target2 = '';
    pocitadlo = 0;
    twotimes = false;
    init();
}

let epicWin = function () {
    modal.style.display = 'block';
}

window.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}


window.onload = init