/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import CartDialog from '../form/CartDialog';

const PosPageContent = ({ addToCart, products, open, setOpen, handlePay, totalAmount, cart }) => {

  return (
    <Grid item xs={8}>
      <Typography variant="h6">Products</Typography>
      <Box pb={2} pt={2}>
        <CartDialog
          open={open}
          setOpen={setOpen}
          handlePay={handlePay}
          totalAmount={totalAmount}
          cart={cart}
        />
      </Box>
      <Grid container spacing={2}>
        {products.map((products) => (
          <Grid item xs={4} key={products.id}>
            <Card>
              <CardContent style={{ width: 300 }}>
                <Typography>{products.name}</Typography>
                <Typography color="text.secondary">
                  {products.price.toLocaleString()} VND
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ mt: 1 }}
                  onClick={() => addToCart(products)}
                >
                  Add
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid >
  );
};
export default PosPageContent;
