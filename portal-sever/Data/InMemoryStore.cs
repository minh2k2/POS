using PosBackend.Models;

namespace PosBackend.Data;

public static class InMemoryStore
{
    public static readonly List<Product> Products = new()
    {
        new Product
        {
            Id = 1,
            Name = "Coffee",
            Price = 20000,
        },
        new Product
        {
            Id = 2,
            Name = "Tea",
            Price = 21000,
        },
        new Product
        {
            Id = 3,
            Name = "Pizza",
            Price = 22000,
        },
        new Product
        {
            Id = 4,
            Name = "Burger",
            Price = 23000,
        },
        new Product
        {
            Id = 5,
            Name = "Sandwich",
            Price = 24000,
        },
    };
    public static List<Order> Orders = new();
}
