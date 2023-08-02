import dotenv from "dotenv";


type TConfig = {

    [Key: string]: EnvironmentConfig;
};

type EnvironmentConfig =  {

app : AppConfig

};

type AppConfig = {

    PORT: string | number;
};

if(process.env.NODE_ENV === 'production'){
    dotenv.config({path: '.env.production'});
} else {
    dotenv.config({path: '.env.development'})
}

const ENV = process.env.NODE_ENV ?? 'development';


const CONFIG:TConfig = {

   development : {

    app: {
        PORT: process.env.PORT || 5001
    }

   },

   production : {

    app: {

        PORT: process.env.PORT || 5001
    }
   }
}

export default CONFIG[ENV];