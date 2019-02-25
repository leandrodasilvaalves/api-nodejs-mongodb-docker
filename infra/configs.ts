class Configs {
    secret: string = "batman batman batman";
    tokenExpiration: number = 15;
    api_version: string = 'v1';
    api_prefix: string = `/api/${this.api_version}`;
}

export default new Configs();