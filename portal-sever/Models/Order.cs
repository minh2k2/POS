namespace PosBackend.Models;

public class OrderItem
{
    public int ProductId { get; set; }
    public int Quantity { get; set; }
    public decimal Price { get; set; }
}

public class Order
{
    public Guid OrderId { get; set; }
    public string? CustomerName { get; set; }
    public decimal TotalAmount { get; set; }
    public DateTime CreatedAt { get; set; }
    public List<OrderItem> Items { get; set; } = new List<OrderItem>();
}

public class OrderRequest
{
    public string? CustomerName { get; set; }
    public List<OrderItem> Items { get; set; } = new List<OrderItem>();
}
