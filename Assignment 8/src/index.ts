import {Weather} from './api'

// properties
const humidity = <HTMLSpanElement>document.getElementById('humidity');
const visibility = <HTMLSpanElement>document.getElementById('visibilty');
const pressure = <HTMLSpanElement>document.getElementById('pressure')
const uv = <HTMLSpanElement>document.getElementById('uv')
const cur_temp = <HTMLSpanElement>document.getElementById('cur_temp');
const feels_like = <HTMLSpanElement>document.getElementById('feels_like');

const cloudy = document.getElementById('cloudy');
const sun_cloud = document.getElementById('sun_cloud')
const clear = document.getElementById('clear')

// locations
const faridabad = <HTMLButtonElement>document.getElementById('faridabad');
const mumbai = <HTMLButtonElement>document.getElementById('mumbai');
const noida = <HTMLButtonElement>document.getElementById('noida');
const palwal = <HTMLButtonElement>document.getElementById('palwal');
const amritsar = <HTMLButtonElement>document.getElementById('amritsar');

const location = <HTMLButtonElement>document.getElementById('loc')


faridabad.addEventListener('click', getWeather)
mumbai.addEventListener('click', getWeather)
noida.addEventListener('click', getWeather)
palwal.addEventListener('click', getWeather)
amritsar.addEventListener('click', getWeather)



function getWeather(){
    location.innerText = this.innerText
    fetchApi(this.innerText);
}

async function fetchApi(t:string) {
    const wea = new Weather(t);

    const info = await wea.getDataa().then((d) =>{
        // console.log(d.current)
        return d.current
    }).catch(e => {
        console.log(e)
    })

    cur_temp.innerText = String(parseInt(info.temp_c))

    visibility.innerText = info.vis_km;
    humidity.innerText = info.humidity;
    pressure.innerText = info.pressure_mb + "hPa"
    uv.innerText = info.uv
    feels_like.innerText = `${info.feelslike_c} `

    const cloud = info.cloud;
    if(cloud < 50){
        cloudy.style.display = "none";
        sun_cloud.style.display = "none";
        clear.style.display = "unset";
    }
    else if(cloud < 80){
        cloudy.style.display = "none";
        sun_cloud.style.display = "unset";
        clear.style.display = "none";
    }
    else{
        cloudy.style.display = "unset";
        sun_cloud.style.display = "none";
        clear.style.display = "none";
    }
}
    
window.onload = function(){
    fetchApi("Palwal")
}