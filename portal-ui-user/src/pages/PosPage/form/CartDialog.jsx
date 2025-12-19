/* eslint-disable react/prop-types */
import {
    Box,
    Button,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
} from '@mui/material'
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import CloseIcon from '@mui/icons-material/Close'

export default function CartDialog({ open, setOpen, handlePay, totalAmount, cart }) {


    return (
        <>
            {/* Button mở dialog */}
            <Button
                variant="contained"
                onClick={() => setOpen(true)}
                startIcon={
                    <Badge badgeContent={cart.length} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                }
            >
                Đơn hàng
            </Button>


            {/* Dialog */}
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle>
                    Giỏ hàng
                    <IconButton
                        onClick={() => setOpen(false)}
                        sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent dividers>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell align="right">Qty</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Total</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {cart.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        Giỏ hàng trống
                                    </TableCell>
                                </TableRow>
                            ) : (
                                cart.map((item) => (
                                    <TableRow key={item.productId}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell align="right">{item.quantity}</TableCell>
                                        <TableCell align="right">
                                            {item.price.toLocaleString()} VND
                                        </TableCell>
                                        <TableCell align="right">
                                            {(item.price * item.quantity).toLocaleString()} VND
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>

                    </Table>

                    <Box mt={2}>
                        <Typography variant="subtitle1">
                            Total: <b>{totalAmount.toLocaleString()} VND</b>
                        </Typography>
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Đóng</Button>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handlePay}
                        disabled={cart.length === 0}
                    >
                        Thanh toán
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
