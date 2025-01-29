using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/cars")]
public class CarController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAllCars()
    {
        var cars = GetMockData();
        return Ok(cars); // This serializes the list to JSON
    }

    public static List<Car> GetMockData()
    {
        return new List<Car>
        {
            new Car { Id = 1, Make = "Toyotaa", Model = "Corolla", RegistrationExpiry = DateTime.Parse("2025-02-15") },
            new Car { Id = 2, Make = "Honda", Model = "Civic", RegistrationExpiry = DateTime.Parse("2024-12-10") },
            new Car { Id = 3, Make = "Ford", Model = "Focus", RegistrationExpiry = DateTime.Parse("2025-01-30") },
            new Car { Id = 4, Make = "Tesla", Model = "Model 3", RegistrationExpiry = DateTime.Parse("2026-07-25") },
            new Car { Id = 5, Make = "Nissan", Model = "Altima", RegistrationExpiry = DateTime.Parse("2024-06-01") },
            new Car { Id = 6, Make = "Chevrolet", Model = "Malibu", RegistrationExpiry = DateTime.Parse("2025-05-12") },
            new Car { Id = 7, Make = "Hyundai", Model = "Elantra", RegistrationExpiry = DateTime.Parse("2024-11-18") },
            new Car { Id = 8, Make = "BMW", Model = "3 Series", RegistrationExpiry = DateTime.Parse("2025-03-21") },
            new Car { Id = 9, Make = "Audi", Model = "A4", RegistrationExpiry = DateTime.Parse("2024-01-05") },
            new Car { Id = 10, Make = "Kia", Model = "Optima", RegistrationExpiry = DateTime.Parse("2025-08-30") },
            new Car { Id = 11, Make = "Mercedes", Model = "C-Class", RegistrationExpiry = DateTime.Parse("2026-04-19") },
            new Car { Id = 12, Make = "Mazda", Model = "Mazda3", RegistrationExpiry = DateTime.Parse("2024-10-10") },
            new Car { Id = 13, Make = "Subaru", Model = "Impreza", RegistrationExpiry = DateTime.Parse("2025-12-07") },
            new Car { Id = 14, Make = "Volkswagen", Model = "Jetta", RegistrationExpiry = DateTime.Parse("2025-09-15") },
            new Car { Id = 15, Make = "Volvo", Model = "S60", RegistrationExpiry = DateTime.Parse("2024-12-20") },
            new Car { Id = 16, Make = "Jeep", Model = "Wrangler", RegistrationExpiry = DateTime.Parse("2026-01-01") },
            new Car { Id = 17, Make = "Chevrolet", Model = "Camaro", RegistrationExpiry = DateTime.Parse("2024-05-09") },
            new Car { Id = 18, Make = "Dodge", Model = "Charger", RegistrationExpiry = DateTime.Parse("2025-11-22") },
            new Car { Id = 19, Make = "Lexus", Model = "ES", RegistrationExpiry = DateTime.Parse("2025-07-13") },
            new Car { Id = 20, Make = "Acura", Model = "TLX", RegistrationExpiry = DateTime.Parse("2025-06-17") },
        };
    }

    // [HttpGet]
    // public ActionResult<IEnumerable<Car>> Get([FromQuery] string make)
    // {
    //     var cars = string.IsNullOrEmpty(make) ? _cars : _cars.Where(c => c.Make.Equals(make, StringComparison.OrdinalIgnoreCase)).ToList();
    //     return Ok(cars);
    // }
}
