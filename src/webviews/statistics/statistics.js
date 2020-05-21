window.onload = () => {
    let vscode = acquireVsCodeApi();
    vscode.postMessage({
        type: 'load'
    });
};

window.addEventListener('message', messageEvent => {
    const message = messageEvent.data;

    console.log('executed!');

    if (message.command !== 'updateStatistics') { return; }

    for (storyTitle of document.getElementsByClassName("story-title")) {
        storyTitle.textContent = message.storyName;
    }

    let tiles = [
        "words", "knots", "stitches", "functions",
        "choices", "gathers", "diverts"
    ];

    for (let name of tiles) {
        for (element of document.getElementsByClassName(`${name}-number`)) {
            element.textContent =message.statistics[name].toLocaleString('en-US');
        }
    }
});
