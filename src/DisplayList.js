import React, { Component } from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

class DisplayList extends Component {
    render() {
        return (
            <div id='productandcard'>
                <Row>
                    <Col xs={9}>
                        <ProductDisplay
                            list={this.props.list}
                            updateCart={this.props.updateCart}
                        />
                    </Col>
                    <Col xs={3}>
                        <CartComponent
                            allGarageItems={this.props.allGarageItems}
                            updateCart={this.props.updateCart}
                            cart={this.props.cart}
                            totalSpending={this.props.totalSpending}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

class ProductDisplay extends Component {
    render() {
        return (
            <div className='row'>
                {/* prettier-ignore */}
                {this.props.list.map((item) => (
                    <div className='col-md-6 col-lg-3' id='carCard'>
                        <Card
                            style={{
                                margin: 10,
                                borderRadius: 0,
                                backgroundColor: 'white',
                                border: '5px solid red',
                            }}
                        >
                            <Card.Img
                                style={{
                                    width: 200,
                                    height: 270,
                                    marginBottom: -20,
                                    marginLeft: 10,
                                }}
                                src={item.imgId}
                                id='productImg'
                            />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: 'Courier-Bold',
                                    }}
                                >
                                    {item.name}{' '}
                                </Card.Title>
                                {/* <Card.Text>{item.description}</Card.Text> */}
                                <Card.Text className='bodyText'>
                                    <ul
                                        style={{
                                            fontFamily: 'Courier',
                                        }}
                                    >
                                        <li> Item Group: {item.itemgroup}</li>
                                        <li> Price: ${item.price}</li>
                                        <li>
                                            {' '}
                                            Description: {item.description}
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{ backgroundColor: 'white' }}>
                                <Button
                                    color='red'
                                    style={{
                                        fontFamily: 'Courier-Bold',
                                        borderRadius: 15,
                                    }}
                                    variant='outline-danger'
                                    onClick={() =>
                                        this.props.updateCart(item.id, 'add')
                                    }
                                >
                                    Add to Cart
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                ))}
            </div>
        );
    }
}

class CartComponent extends Component {
    render() {
        return (
            <div className='rounded secondaryColor p-3 mb-2 text-dark'>
                {/* prettier-ignore */}
                <h1   style={{
                                            fontFamily: 'Courier-bold'}}>Cart</h1>
                <div class='list-group' id='cart'>
                    {this.props.allGarageItems
                        .filter((i) => this.props.cart[i.id] > 0)
                        .map((item) => (
                            <ListGroup.Item
                                style={{
                                    fontFamily: 'Courier-bold',
                                    borderRadius: 15,
                                    marginBottom: 10,
                                }}
                            >
                                <div className='d-flex w-100 justify-content-between'>
                                    <h5 className='mb-1'>{item.name}</h5>
                                    <h6
                                        className='mb-1'
                                        style={{ marginLeft: 30 }}
                                    >
                                        Price: ${item.price}
                                    </h6>
                                </div>
                                <div
                                    className='d-flex justify-content-center'
                                    style={{ margin: 10 }}
                                >
                                    <Button
                                        variant='danger'
                                        style={{
                                            borderRadius: 10,
                                            backgroundColor: 'white',
                                            borderColor: 'white',
                                            color: 'red',
                                        }}
                                        onClick={() =>
                                            this.props.updateCart(
                                                item.id,
                                                'remove'
                                            )
                                        }
                                    >
                                        -
                                    </Button>
                                    <div id='quantity' style={{ margin: 10 }}>
                                        {this.props.cart[item.id]}
                                    </div>
                                    <Button
                                        variant='danger'
                                        style={{
                                            borderRadius: 10,
                                            backgroundColor: 'white',
                                            borderColor: 'white',
                                            color: 'red',
                                        }}
                                        onClick={() =>
                                            this.props.updateCart(
                                                item.id,
                                                'add'
                                            )
                                        }
                                    >
                                        +
                                    </Button>
                                </div>
                                <div
                                    style={{ margin: 10 }}
                                    className='d-flex justify-content-center'
                                    id='removeFromCart'
                                >
                                    <Button
                                        variant='danger'
                                        style={{ borderRadius: 15 }}
                                        onClick={() =>
                                            this.props.updateCart(
                                                item.id,
                                                'removeAll'
                                            )
                                        }
                                    >
                                        Remove From Cart
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                </div>
                <ListGroup.Item
                    style={{ fontFamily: 'Courier', borderRadius: 15 }}
                >
                    <div className='d-flex w-100 justify-content-between'>
                        <CheckoutButton
                            style={{ fontFamily: 'Courier', borderRadius: 15 }}
                            totalSpending={this.props.totalSpending}
                        />
                        {this.props.totalSpending !== 0 && (
                            <h5 className='mb-1' id='quantity'>
                                Total: ${this.props.totalSpending.toFixed(2)}
                            </h5>
                        )}
                        {this.props.totalSpending === 0 && (
                            <h5 className='mb-1' id='quantity'>
                                Total: 0
                            </h5>
                        )}
                    </div>
                </ListGroup.Item>
            </div>
        );
    }
}

class CheckoutButton extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    displayText(totalSpending) {
        if (totalSpending > 0) {
            return 'Thanks for shopping with us!';
        }
        return 'Your card is empty!';
    }

    render() {
        return (
            <>
                {/* prettier-ignore */}
                <Button   style={{ fontFamily: 'Courier', borderRadius: 15}} variant="danger" onClick={this.handleShow}>
            Checkout
          </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title
                            style={{
                                fontFamily: 'Courier',
                            }}
                        >
                            Checkout
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ fontFamily: 'Courier' }}>
                        {this.displayText(this.props.totalSpending)}{' '}
                    </Modal.Body>
                    <Modal.Body style={{ fontFamily: 'Courier' }}>
                        {' '}
                        I hope you enjoyed this site! Don't forget to leave a
                        review.
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default DisplayList;
