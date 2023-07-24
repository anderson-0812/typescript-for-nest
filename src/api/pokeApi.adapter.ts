// los adaptadores se usan como buena practica (nombre.adapter) 
// para identificar que voy a adaptar funcionalidades de librerias terceros a mi codigo
// ejemplo si cambio axios por  fetch solo deberia cambiar esta calase y no en todos los lugares donde llame a axios 

import axios from "axios";

// video 20 interfaz para abtraer el get ys ea independiente de que tippo de libreria use esto ledara una estructura a mi clase
export interface HttpAdapter {
    // <T> valor generico : Promise<T> es el valor de retorno
    get<T>( url: string ): Promise<T>
}

// clase para hacer la demostracion de sustitucion  de liskov / con httpAdapter le doy una estructura a la clase
export class PokeApiFetchAdapter implements HttpAdapter {
    
    async get<T>(url: string):Promise<T> {
        const resp = await fetch(url);
        // ya que el fetch no funciona copmo el axios la data debo extraerla 
        // const data: T = resp.json();
        const data = resp.json();

        console.log("esto se hizo con fetch");

        return data;
    }
}

export class PokeApiAdapter implements HttpAdapter {

    // para tener mejor control de paquetes de terceros 
    private readonly axios = axios;

    // la T es un estandar q representa un tipo de dato (los genericos seimrpe x estandar el primero sera T ya q se puede tener varios) 
    // que espera recibir y devolver en este paso de tipo  PokeapiResponse 
    async get<T>( url: string ){
        const { data } = await this.axios.get<T>(url);

        console.log("esto se hizo con Axios");

        return data;

    }

    // async post( url: string, data any ){
        
    // }

    // async patch( url: string, data any ){
        
    // }
    
    // async delete( url: string, data any ){
        
    // }
}