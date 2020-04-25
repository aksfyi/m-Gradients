var datacolors;
async function colorgen()
{
    const url = "colors.json";
    const response = await fetch(url);
    const data= await response.json();
    return data;
}

function getrandom(min,max)
{
    return Math.floor(Math.random()*(max-min)) + min;
}

colorgen().then((data)=>{
   
    datacolors = data;
    generaterandom()

});


function generaterandom()
{
    var lightcolors = datacolors['light']
    var darkcolors = datacolors['dark']
    var allcolors = lightcolors.concat(darkcolors)
    
    var rand1 = []
    var rand2 = []
    var fullcard =""

    for(var i=0;i<50;i++)
    {
        var firstnum =  getrandom(0,allcolors.length)
        rand1.push(getrandom(0,allcolors.length))

        rand2.push(getrandom(0,allcolors.length))
    }

    for(var k=0;k<42;k++)
    {
        var card=`
        <div class="col s12 m6 l4 xl4">
          <div class="card"  style="border-radius: 10px;height: 250px; background: linear-gradient(45deg,${allcolors[rand1[k]]},${allcolors[rand2[k]]});overflow: visible">
              <div class="card-content">
                  <span class="card-title activator waves-effect" style="height: 200px;border-radius: 10px">
                      <i style="margin: 1%" class="material-icons right">more_vert</i></span>
                  </div>
                <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Colors<i class="material-icons right">close</i></span>
                    <div class="row">
                        <div class="col">
                                <p id="color1${k}">${allcolors[rand1[k]]}</p> <BUTTON  onclick="M.toast({html: 'Copied'})" class="btn waves-effect blue lighten-3 black-text" data-clipboard-target="#color1${k}">Copy</BUTTON>
    
                        </div>
                        <div class="col">
                                  <p id="color2${k}">${allcolors[rand2[k]]}</p> <BUTTON  onclick="M.toast({html: 'Copied'})" class="btn waves-effect blue lighten-3 black-text" data-clipboard-target="#color2${k}">Copy</BUTTON>
    
                        </div> </div>
                        CSS:
                       <textarea class="materialize-textarea" id="css${k}" >background: linear-gradient(45deg,${allcolors[rand1[k]]},${allcolors[rand2[k]]});</textarea>
    
    
                        <BUTTON  onclick="M.toast({html: 'Copied'})" class="btn waves-effect blue lighten-3 black-text" data-clipboard-target="#css${k}">Copy</BUTTON>
    
    
        </div>
          </div>
    
        </div>
        `
        fullcard+=card;

    }
    document.getElementById('randm').innerHTML =`<div class="flexbox" data-aos="fade-up" id="randm" style="display: flex;flex-wrap: wrap;justify-content: center;align-items: center">
    ${fullcard}</div>`
}


























