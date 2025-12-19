using Microsoft.AspNetCore.Mvc;
using PosBackend.Data;
using PosBackend.Models;

namespace PosBackend.Controllers;

[ApiController]
[Route("api/orders")]
public class OrdersController : ControllerBase
{
    // POST: tạo order
    [HttpPost]
    public IActionResult CreateOrder([FromBody] OrderRequest request)
    {
        if (request.Items == null || request.Items.Count == 0)
            return BadRequest("No items in order");

        var orderItems = new List<OrderItem>();

        foreach (var item in request.Items)
        {
            var product = InMemoryStore.Products.FirstOrDefault(p => p.Id == item.ProductId);
            if (product == null)
                return BadRequest($"Product {item.ProductId} not found");

            orderItems.Add(
                new OrderItem
                {
                    ProductId = product.Id,
                    Quantity = item.Quantity,
                    Price = product.Price,
                }
            );
        }

        var order = new Order
        {
            OrderId = Guid.NewGuid(),
            CustomerName = request.CustomerName,
            TotalAmount = orderItems.Sum(i => i.Price * i.Quantity),
            CreatedAt = DateTime.UtcNow,
            Items = orderItems,
        };

        InMemoryStore.Orders.Add(order);

        return Ok(order);
    }

    // GET: lấy danh sách order
    [HttpGet]
    public IActionResult GetOrders()
    {
        return Ok(InMemoryStore.Orders);
    }
}
