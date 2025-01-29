using Microsoft.AspNetCore.SignalR;

public class CarRegistrationHub : Hub
{
    // Broadcasts a message to all connected clients
    // public async Task SendRegistrationUpdate(string data)
    // {
    //     await Clients.All.SendAsync("UpdateCars", data);
    // }
}