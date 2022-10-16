const express   = require('express');
const Sequelize = require('sequelize');
const db        = require('./db');

const User = db.define('users', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true        
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//Criar a Tabela
// User.sync();

module.exports = User