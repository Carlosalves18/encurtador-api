function encurtarUrl() {
    
    let url = document.getElementById("input-url").value;
    if(!url) {
        alert("É preciso inserir uma URL para encurtar");
        return;
    }


    
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "06e0ddfe37354c3881651f2030c7a4d0" 
    }

    
    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl;
        });
}

function copiar() {
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputUrl.value);

    alert(`URL copiada: ${inputUrl.value}`);
}


