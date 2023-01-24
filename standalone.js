// ==UserScript==
// @name         Wolverine Health Organization (WHO) Revive Request
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Send revive requests to WHO
// @author       omeletron [2678064]
// @match        https://www.torn.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=redcrossblood.org
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// ==/UserScript==

/*
CHANGE LOG:
Version 0.1: initial build
*/

const webhook_url = 'https://discordapp.com/api/webhooks/1066541784588619806/ZK44eKqiV80jgcrYHhGMnigUbqU7-tsi20Rb2-U8YQ5J2siuTQlIBBE-NYJ-I7ZUfxsK',
      player_id = '2678064';

(function() {
    window.addEventListener('load', () => {
        addButton('WHO Revive');
    });

    function addButton(text, onclick, cssObj) {
        cssObj = cssObj || {
            position: 'fixed',
            top: '15%',
            right: '4%',
            'z-index': 3,
            fontWeight: '600',
            fontSize: '14px',
            backgroundColor: 'white',
            color: 'red',
            border: '2px solid red',
            padding: '10px 20px',
            borderRadius: '50%'
        };
        let button = document.createElement('button'),
            btnStyle = button.style;
        document.body.appendChild(button);
        button.innerHTML = text;
        // Settin function for button when it is clicked.
        button.onclick = requestRevive;
        Object.keys(cssObj).forEach(key => (btnStyle[key] = cssObj[key]));
        return button;
    }

    function requestRevive() {
        var txt = document.getElementById('who_revive');
        var request = new XMLHttpRequest();
        request.open('POST', webhook_url);

        request.setRequestHeader('Content-type', 'application/json');

        var params = {
            username: 'WHO Revive Request',
            avatar_url: '',
            content: 'Revive, please! \n https://www.torn.com/profiles.php?XID=' + player_id
        }

        request.send(JSON.stringify(params));
        // Just to show button is pressed
        this.innerHTML = 'Requested';
        setTimeout(function(){
            location.reload();
        },3000);
    }
})();
