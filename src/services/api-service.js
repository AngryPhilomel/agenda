export default class ApiService {

    _apiBase = 'http://18.220.208.49/api';


    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (res.ok) {
            return await res.json();
        }
    };

    getDate = async (year, month, date) => {
        const res = await this.getResourse(`/${year}/${month}/${date}/`);
        if (res !== undefined) {
            // console.log(res);
            return res;
        }

    };
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


