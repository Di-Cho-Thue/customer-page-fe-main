import CategoryItem from "./CategoryItem";
import { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import { Link } from "react-router-dom";
import axios from 'axios';
function Categories({ categories }) {


    return (
        <section className="categories" style={{ marginBottom: 24 }}>
            <div className="container">
                <div className="row">
                    {categories && categories.map((category) => (
                        <CategoryItem category={category} />

                    ))}
                </div>
            </div>
        </section>
    );
}

export default Categories;