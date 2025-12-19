/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material'

const BASE_URL = 'http://localhost:5108/api'

export default function RealtimeScreen() {
  const [orders, setOrders] = useState([])

  const groupOrders = (orders) => {
    const map = {}

    orders.forEach((o) => {
      if (!map[o.orderId]) {
        map[o.orderId] = {
          orderId: o.orderId,
          totalAmount: 0,
          createdAt: o.createdAt,
        }
      }

      map[o.orderId].totalAmount += o.totalAmount
    })

    return Object.values(map)
  }

  const fetchOrders = async () => {
    const res = await fetch(`${BASE_URL}/orders`)
    const data = await res.json()
    setOrders(groupOrders(data))
  }

  useEffect(() => {
    fetchOrders()
    const interval = setInterval(fetchOrders, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Box p={3}>
      <Typography variant="h4">Realtime Orders</Typography>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell>Payment Time</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell>{order.orderId}</TableCell>
                <TableCell align="right">
                  {order.totalAmount.toLocaleString()} VND
                </TableCell>
                <TableCell>
                  {new Date(order.createdAt).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  )
}
