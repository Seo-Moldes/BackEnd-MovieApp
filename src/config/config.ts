import dotenv from "dotenv";

dotenv.config();

type TConfig = {

    [Key: string]: EnvironmentConfig;
};

type EnvironmentConfig =  {

app : AppConfig

};

type AppConfig = {

    PORT: string | number;
};

const ENV = process.env.NODE_ENV ?? "development";

const CONFIG:TConfig = {

   development : {

    app: {
        PORT: process.env.PORT || 3001
    }

   },

   production : {

    app: {

        PORT: process.env.PORT || 3001
    }
   }
}

export default CONFIG[ENV];