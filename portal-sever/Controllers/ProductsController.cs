using Microsoft.AspNetCore.Mvc;
using PosBackend.Data;

[ApiController]
[Route("api/products")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetProducts()
    {
        return Ok(InMemoryStore.Products);
    }
}
