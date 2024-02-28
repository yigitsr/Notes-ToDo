function renderMadeBy(){
    return `
        <!-- Made by -->
            <p>Made with ❤ by <a href="https://yigitsereflioglu.dev" target="_blank"> Yigit S</a></p>
    `;
}

function load(){
        document.getElementById('madeById').innerHTML = renderMadeBy();
}

load();

function notesFunc(){
    window.location.href='notes/'
}

function todoFunc(){
    window.location.href='todo/'
}