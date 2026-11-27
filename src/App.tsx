import React, { useState } from 'react';
import productoData from './data/productos.json'
import './App.css'

export interface Producto {
    id: number;
    nombre: string;
    precio: string;
    descripcion: string;
    imagen: string;
    plataforma: string;
    genero: string;
    desarrollador: string;
    pegi: string;
    stock: number;
    destacado: boolean;
}

