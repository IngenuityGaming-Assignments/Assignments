export class Weather{

    private city: string;
    constructor(city: string){
        this.city = city
    }
    private readonly apiKey = "92b3684ba5ec458580935427211911"


    public async getDataa(): Promise<any>{
        const url = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=no"`;
        
        const res = await fetch(url, {
            method: "GET",
            // headers: this.head,
        })
        return res.json();
    }
}
