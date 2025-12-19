import { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  Snackbar,
  Alert,
} from '@mui/material'
import PosPageContent from './list'
import { getProducts, createOrder } from '../../api'

export default function PosPage() {
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [success, setSuccess] = useState(false)

  // Load product list
  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  // Add product to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => Number(item.productId) === Number(product.id)
      );

      if (existingIndex !== -1) {
        const newCart = [...prev];
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newCart[existingIndex].quantity + 1,
        };
        return newCart;
      }

      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  };



  // Calculate total
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )


  // Handle payment
  const handlePay = async () => {
    if (cart.length === 0) return


    await createOrder({
      customerName: 'Guest',
      items: cart.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price
      }))
    });


    setSuccess(true)
    setCart([])
    setOpen(false)
  }


  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        POS Screen
      </Typography>

      <Grid container spacing={3}>
        <PosPageContent
          addToCart={addToCart}
          products={products}
          open={open}
          setOpen={setOpen}
          handlePay={handlePay}
          totalAmount={totalAmount}
          cart={cart}
        />
      </Grid>
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success">Thanh toán thành công</Alert>
      </Snackbar>
    </Box>
  )
}
