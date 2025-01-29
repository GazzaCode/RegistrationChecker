using Microsoft.AspNetCore.SignalR;

public class RegistrationExpiryService : BackgroundService
{
    private readonly IHubContext<CarRegistrationHub> _hubContext;

    public RegistrationExpiryService(IHubContext<CarRegistrationHub> hubContext)
    {
        _hubContext = hubContext;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            // Simulate checking car registrations every 5 seconds
            try
            {
                await Task.Delay(5000, stoppingToken);
            }
            catch (TaskCanceledException)
            {
                // Handle the cancellation if needed
            }
            var data = CarController.GetMockData();
            // Serialize the list to JSON
            var jsonData = System.Text.Json.JsonSerializer.Serialize(data);


            // Notify frontend of the updates
            await _hubContext.Clients.All.SendAsync("UpdateCars", jsonData, stoppingToken);
        }
    }
}
