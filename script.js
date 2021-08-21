
    let tBody=document.querySelector('#tableBody')
    let indiaCard=document.querySelector("#indiaCard")
    let franceCard=document.querySelector("#franceCard")
    let ukCard=document.querySelector("#ukCard")
    let chinaCard=document.querySelector("#chinaCard")
    let cnum=0;
function initailData()
{
    fetch("https://api.covid19api.com/summary")
.then(data=>data.json())
.then(data=>dashboard(data.Countries))
}
initailData();

function dashboard(country)
{
    
    // country.forEach(element => {
    //     tBody.innerHTML +=
    //         ` <tr class="table-" id="row">
    //                         <th id='countryName'>${element.Country}</th>
    //                         <td id="confirmed">${element.TotalConfirmed}</td>
    //                         <td id="death">${element.TotalDeaths}</td>
    //                         <td id="recovered">${element.TotalRecovered}</td>
    //                         <td id="newConfirmed">${element.NewConfirmed}</td>
    //                     </tr>`
    // });
    tBody.innerHTML =" ";
    console.log("in",cnum,country)
    for(i=cnum;i<=(cnum+10);i++)
    { 
        if(i < 192)
        {
        tBody.innerHTML +=
            ` <tr class="table-" id="row">
                            <th id='countryName'>${country[i].Country}</th>
                            <td id="confirmed">${country[i].TotalConfirmed}</td>
                            <td id="death">${country[i].TotalDeaths}</td>
                            <td id="recovered">${country[i].TotalRecovered}</td>
                            <td id="newConfirmed">${country[i].NewConfirmed}</td>
                        </tr>`
                    }
    }
}

fetch("https://covid-api.mmediagroup.fr/v1/cases?country=India")
.then(data=>data.json())
.then(data=>cardIndia(data.All))

function cardIndia(data)
{
   console.log(data)
   indiaCard.innerHTML +=
            `<div><p >Confirmed:${data.confirmed}</p></div>
                          <div><p>Recovered:${data.recovered}</p></div>
                          <div><p>Deaths:${data.deaths}</p></div>`
}

fetch("https://covid-api.mmediagroup.fr/v1/cases?country=France")
.then(data=>data.json())
.then(data=>cardFrance(data.All))

function cardFrance(data)
{
   console.log(data)
   franceCard.innerHTML +=
            `<div><p >Confirmed:${data.confirmed}</p></div>
                          <div><p>Recovered:${data.recovered}</p></div>
                          <div><p>Deaths:${data.deaths}</p></div>`
}

fetch("https://covid-api.mmediagroup.fr/v1/cases?country=United Kingdom")
.then(data=>data.json())
.then(data=>cardUk(data.All))

function cardUk(data)
{
   console.log(data)
   ukCard.innerHTML +=
            `<div><p >Confirmed:${data.confirmed}</p></div>
                          <div><p>Recovered:${data.recovered}</p></div>
                          <div><p>Deaths:${data.deaths}</p></div>`
}

fetch("https://covid-api.mmediagroup.fr/v1/cases?country=China")
.then(data=>data.json())
.then(data=>cardChina(data.All))

function cardChina(data)
{
   console.log(data)
   chinaCard.innerHTML +=
            `<div><p >Confirmed:${data.confirmed}</p></div>
                          <div><p>Recovered:${data.recovered}</p></div>
                          <div><p>Deaths:${data.deaths}</p></div>`
}

function next()
{
    if(cnum < 190)
    {
        cnum += 10;
        initailData();
    }
}
function prev()
{
    if(cnum >= 10)
    {
        cnum -= 10;
        initailData();
    }
}

