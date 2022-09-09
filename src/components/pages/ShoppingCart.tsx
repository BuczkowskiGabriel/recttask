import React from "react";
import Button from 'react-bootstrap/Button';
import {Col, Row} from "react-bootstrap";
import { Card } from "react-bootstrap";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type ShoppingItemProps = {
    id: number
    title: string
    author: string 
    pages: number 
    price: number 
}

export default function ShoppingCart({id, title, author, pages, price}: ShoppingItemProps) {
    const {
           getItemQuantity, 
           increaseCartQuantity,
           decreaseCartQuantity,
           removeFromCart,
        } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <Card className="h-100">
          <Card.Img
            variant="top"
            height="200px"
            style={{ objectFit: "cover" }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <span className="fs-2">{title}</span>
              <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
              {quantity === 0 ? (
                <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
                  + Add To Cart
                </Button>
              ) : (
                <div
                  className="d-flex align-items-center flex-column"
                  style={{ gap: ".5rem" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ gap: ".5rem" }}
                  >
                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                    <div>
                      <span className="fs-3">{quantity}</span> in cart
                    </div>
                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                  </div>
                  <Button
                    onClick={() => removeFromCart(id)}
                    variant="danger"
                    size="sm"
                  >
                    Remove
                  </Button>
                </div>
              )}
            </div>
          </Card.Body>
        </Card>
      )
}