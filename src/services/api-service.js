export default class ApiService {

    _apiBase = 'http://10.80.36.150:90/api';


    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (res.ok) {
            return await res.json();
        }
    };

    getDate = async (year, month, date) => {
        const res = await this.getResourse(`/${year}/${month}/${date}/`);
        // if (res !== undefined) {
            // console.log(res);
            return await res;
        // }

    };

    haveEvents = async (year, month) => {
        const res = await this.getResourse(`/have/${year}/${month}/`);
            return await res;
    }
}


    // _transformEvent = (event) => {
    //     return {
    //         id: event.id,
    //         category: event.category,
    //         description: event.description,
    //         period: event.period,
    //         purpose: event.purpose,
    //         title: event.title,
    //         to: event.to,
    //         type: event.type,
    //         who: event.who,
    //     };
    // };


