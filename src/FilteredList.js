import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import DisplayList from './DisplayList.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.updateCart = this.updateCart.bind(this);
        this.onSelectFilterSize = this.onSelectFilterSize.bind(this);
        this.onSelectPriceRange = this.onSelectPriceRange.bind(this);
        this.onSelectSorted = this.onSelectSorted.bind(this);
        this.state = {
            itemgroup: 'Select Item Group',
            priceRange: 'Select Price Range',
            sorted: 'Sort By',
            cart: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            totalSpending: 0,
        };
    }
    onSelectFilterSize = (event) => {
        this.setState({
            itemgroup: event,
        });
    };

    matchesColorGroup = (item) => {
        // all items should be shown when no filter is selected
        if (
            this.state.itemgroup === 'All' ||
            this.state.itemgroup === 'Select Item Group'
        ) {
            return true;
        } else if (this.state.itemgroup === item.itemgroup) {
            return true;
        } else {
            return false;
        }
    };

    onSelectPriceRange = (event) => {
        this.setState({
            priceRange: event,
        });
    };

    matchesPriceRange = (item) => {
        // all items should be shown when no filter is selected
        if (
            this.state.priceRange === 'All' ||
            this.state.priceRange === 'Select Price Range'
        ) {
            return true;
        } else if (this.state.priceRange === item.priceRange) {
            return true;
        } else {
            return false;
        }
    };

    onSelectSorted = (event) => {
        this.setState({
            sorted: event,
        });
    };

    sortBy(list, currState) {
        if (currState === 'Price Low to High') {
            return list.sort((a, b) => {
                return a.price - b.price;
            });
        }
        if (currState === 'Price High to Low') {
            return list.sort((a, b) => {
                return b.price - a.price;
            });
        } else {
            return list;
        }
    }

    updateCart(index, operations) {
        if (operations === 'clear') {
            this.state.cart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            this.state.totalSpending = 0;
        }
        if (operations === 'remove' && this.state.cart[index] > 0) {
            this.state.totalSpending =
                this.state.totalSpending - this.props.list[index].price;
            this.state.cart[index] = this.state.cart[index] - 1;
        }
        if (operations === 'removeAll') {
            this.state.totalSpending =
                this.state.totalSpending -
                this.props.list[index].price * this.state.cart[index];
            this.state.cart[index] = 0;
        }
        if (operations === 'add') {
            this.state.cart[index] = this.state.cart[index] + 1;
            this.state.totalSpending =
                this.state.totalSpending + this.props.list[index].price;
        }
        this.setState({
            totalSpending: this.state.totalSpending,
            cart: this.state.cart,
        });
    }

    render() {
        return (
            <div>
                <HeaderBar
                    itemgroup={this.state.itemgroup}
                    priceRange={this.state.priceRange}
                    sorted={this.state.sorted}
                    onSelectFilterSize={this.onSelectFilterSize}
                    onSelectPriceRange={this.onSelectPriceRange}
                    onSelectSorted={this.onSelectSorted}
                />

                <div id='headboard'>
                    <div
                        style={{
                            margin: 30,
                            borderColor: 'pink',

                            borderBottom: '4px solid white',
                            borderTop: '4px solid white',
                        }}
                    >
                        <Container>
                            <h1
                                style={{
                                    fontFamily: 'Optima-bold',
                                    color: 'white',
                                }}
                            >
                                Garage Sale
                            </h1>
                            <p
                                style={{
                                    fontFamily: 'Optima',
                                    color: 'white',
                                }}
                            >
                                Welcome to our online garage sale. Her, you may
                                find items that you don't you needed!
                            </p>
                        </Container>
                    </div>
                </div>
                <DisplayList
                    list={this.sortBy(
                        this.props.list
                            .filter(this.matchesColorGroup)
                            .filter(this.matchesPriceRange),
                        this.state.sorted
                    )}
                    allGarageItems={this.props.list}
                    updateCart={this.updateCart}
                    cart={this.state.cart}
                    totalSpending={this.state.totalSpending}
                />
            </div>
        );
    }
}

class HeaderBar extends Component {
    render() {
        return (
            <div style={{ flexDirection: 'row-reverse' }}>
                <Navbar bg='dark' variant='dark'>
                    <Nav className='mr-auto'>
                        <NavDropdown
                            title={this.props.itemgroup}
                            id='nav-dropdown'
                            style={{
                                fontFamily: 'Optima-bold',
                                color: 'white',
                            }}
                        >
                            <NavDropdown.Item eventKey='disabled' disabled>
                                Select Item Group
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                eventKey='All'
                                onSelect={this.props.onSelectFilterSize}
                            >
                                All
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='Household Items'
                                onSelect={this.props.onSelectFilterSize}
                            >
                                Household Items
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='Toy'
                                onSelect={this.props.onSelectFilterSize}
                            >
                                Toys
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='Book'
                                onSelect={this.props.onSelectFilterSize}
                            >
                                Books
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title={this.props.priceRange}
                            id='nav-dropdown'
                            style={{
                                fontFamily: 'Optima-bold',
                                color: 'white',
                            }}
                        >
                            <NavDropdown.Item eventKey='disabled' disabled>
                                Select Price Range
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                eventKey='All'
                                onSelect={this.props.onSelectPriceRange}
                            >
                                All
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='Less than 10'
                                onSelect={this.props.onSelectPriceRange}
                            >
                                less than 10
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='10-30'
                                onSelect={this.props.onSelectPriceRange}
                            >
                                10-30
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='30-50'
                                onSelect={this.props.onSelectPriceRange}
                            >
                                30-50
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='50 and above'
                                onSelect={this.props.onSelectPriceRange}
                            >
                                50 and above
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title={this.props.sorted}
                            id='nav-dropdown'
                            style={{
                                fontFamily: 'Optima-bold',
                                color: 'white',
                            }}
                        >
                            <NavDropdown.Item eventKey='disabled' disabled>
                                Sort By
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                eventKey="Don't Sort"
                                onSelect={this.props.onSelectSorted}
                            >
                                Don't Sort
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='Price Low to High'
                                onSelect={this.props.onSelectSorted}
                            >
                                Price Low to High
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='Price High to Low'
                                onSelect={this.props.onSelectSorted}
                            >
                                Price High to Low
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Brand
                        style={{
                            fontFamily: 'Optima-bold',
                            color: 'white',
                        }}
                        href='#home'
                    >
                        Garage Sale Items
                    </Navbar.Brand>
                    `
                </Navbar>
            </div>
        );
    }
}

export default FilteredList;
