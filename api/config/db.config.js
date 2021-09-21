const db_cofig = {
    db_host : process.env.DB_HOST,
    db_port : process.env.DB_PORT,
    db_name : process.env.DB_NAME
}

const db_url = `mongodb://${db_cofig.db_host}:${db_cofig.db_port}/${db_cofig.db_name}`;

export { db_cofig, db_url };