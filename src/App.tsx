import React, { useState } from 'react';
import productosData from './data/productos.json'
import './App.css'

export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen: string;
    plataforma: string;
    genero: string;
    desarrollador: string;
    pegi: string;
    stock: number;
    destacado: boolean;
}

export interface ItemCarrito {
    producto: Producto;
    cantidad: number;
}

type PaginaActual = 'inicio' | 'productos' | 'detalle' | 'carrito';

export default function App() {
    const [pagina, setPagina] = useState<PaginaActual>('inicio');
    const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
    const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

    const [textoInput, setTextoInput] = useState<string>('');
    const [consultaBusqueda, setConsultaBusqueda] = useState<string>('');
    const [paginaActual, setPaginaActual] = useState<number>(1);
    const productosPorPagina = 6;

    const productos: Producto[] = productosData;

    const irADetalle = (prod: Producto) => {
        setProductoSeleccionado(prod);
        setPagina('detalle');
        window.scrollTo(0, 0);
    }


}