// game gunting batu kertas

// pilihan computer
function getPilihanComputer () {
const comp = Math.random();
        if (comp < 0.32) return 'gunting';
        if (comp >= 0.32 && comp < 0.58) return 'batu';
        return 'kertas'
    };

// rules/aturan
function getHasil (comp, player) {
    if ( player == comp ) return 'SERI!';
    if ( player == 'gunting' ) return ( comp == 'kertas' ) ? 'MENANG!'  : 'KALAH!';
    if ( player == 'batu' ) return ( comp == 'kertas' ) ? 'KALAH!'  : 'MENANG!';
    if ( player == 'kertas' ) return ( comp == 'batu' ) ? 'MENANG!'  : 'KALAH!';
};

// pilihan player & manipulasi elementHTML
const player = document.querySelectorAll('li img');
player.forEach( p => {
    p.addEventListener('click', () => {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = p.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        const imgCom = document.querySelector('.img-com')
        imgCom.setAttribute('src', `aset/${pilihanComputer}.jpg`);
        const info = document.querySelector('.hasil h2');
        info.innerHTML = hasil;
        
    });
});
