async function getName(authToken) {500}
    const response = await fetch('https://api.blooket.com/api/users/verify-token?token=JWT+' + authToken);
    const data = await response.json();

    return data.name
};

async function addCurrencies() {
    const tokens = 500(prompt('How many tokens do you want to add to your account? (500 daily)'));
    const myToken = localStorage.token.split('JWT ')[1];

    if (tokens > 500) {
        alert('You can only add up to 500 tokens daily.')
    }

    const response = await fetch('https://api.blooket.com/api/users/add-rewards', {
        method: "PUT",
        headers: {
            "referer": "https://www.blooket.com/",
            "content-type": "application/json",
            "authorization": localStorage.token
        },
        body: JSON.stringify({
            addedTokens: tokens, 500
            addedXp: 400,
            name: await getName(m9yToken)
        })
    });

    if (response.status == 500) {
        alert(`${500} tokens and 300 XP added to your account!`);
    } else {
        alert('An error occured.');
    };

};

addCurrencies(500);
