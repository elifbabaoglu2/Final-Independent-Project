import React, { Component } from 'react';
import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';
import b from './image/b.jpg';
function App() {
    const productList = [
        {
            name: 'To Kill A Mockingbird',
            itemgroup: 'Book',
            price: 9.99,
            description: 'Genre: Courtroom Drama',
            priceRange: 'Less than 10',
            id: 0,
            imgId: '/GarageSaleItems/book1.png',
        },
        {
            name: '1984',
            itemgroup: 'Book',
            price: 19.99,
            description: 'Genre: Fiction',
            priceRange: '10-30',
            id: 1,
            imgId: '/GarageSaleItems/book2.png',
        },
        {
            name: 'Wooden Chair',
            itemgroup: 'Furniture',
            price: 39.99,
            description: "Child's chair 14' Height Seat",
            priceRange: '30-50',
            id: 2,
            imgId: '/GarageSaleItems/furniture1.png',
        },
        {
            name: 'Coach',
            itemgroup: 'Furniture',
            price: 59.99,
            description: 'Modern industrial coachFurtni',
            priceRange: '50 and above',
            id: 3,
            imgId: '/GarageSaleItems/furniture2.png',
        },
        {
            name: 'Cowboy Toy',
            itemgroup: 'Toy',
            price: 15.99,
            description: 'Woody Interactive Talking Action Figure – Toy Story',
            priceRange: '10-30',
            id: 4,
            imgId: '/GarageSaleItems/toy1.png',
        },
        {
            name: 'Things We Never Said',
            itemgroup: 'Book',
            price: 15.99,
            description: 'Genre: Romance',
            priceRange: '10-30',
            id: 5,
            imgId: '/GarageSaleItems/book3.png',
        },
        {
            name: 'Spoon Set',
            itemgroup: 'Household Items',
            price: 9.99,
            description: 'Silver stainless steel',
            priceRange: 'Less than 10',
            id: 6,
            imgId: '/GarageSaleItems/kitchen1.png',
        },
        {
            name: 'Instant Pot',
            itemgroup: 'Household Items',
            price: 59.99,
            description: 'Slow Cooker model:2190',
            priceRange: '50 and above',
            id: 7,
            imgId: '/GarageSaleItems/kitchen2.png',
        },
        {
            name: 'Bed Sheets',
            itemgroup: 'Household Items',
            price: 39.99,
            description: 'Comfortable cotton bed sheets',
            priceRange: '30-50',
            id: 8,
            imgId: '/GarageSaleItems/kitchen3.png',
        },
        {
            name: 'Shoe Holder',
            itemgroup: 'Household Items',
            price: 8.99,
            description: 'Shoe racks for closet organization, No assembly',
            priceRange: 'Less than 10',
            id: 9,
            imgId: '/GarageSaleItems/Shoe.png',
        },
        {
            name: 'Bear Toy',
            itemgroup: 'Toy',
            price: 17.99,
            description: 'FABLER BJORN soft toy',
            priceRange: '10-30',
            id: 10,
            imgId: '/GarageSaleItems/bear.png',
        },
        {
            name: 'Yoda Toy',
            itemgroup: 'Toy',
            price: 8.99,
            description: 'The Child Plush, Star Wars',
            priceRange: '10 and below',
            id: 11,
            imgId: '/GarageSaleItems/yoda.png',
        },
    ];
    return (
        <div style={{ backgroundImage: `url(${b})` }} className='App'>
            <FilteredList list={productList} />
        </div>
    );
}

export default App;
