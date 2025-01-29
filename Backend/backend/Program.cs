public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Register services
        builder.Services.AddSingleton<RegistrationExpiryService>();
        builder.Services.AddHostedService(sp => sp.GetRequiredService<RegistrationExpiryService>());
        builder.Services.AddSignalR();
        builder.Services.AddControllers();

        // Enable CORS
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowFrontend", policy =>
            {
                policy.WithOrigins("http://localhost:4200")
                      .AllowAnyHeader()
                      .AllowAnyMethod()
                      .AllowCredentials();
            });
        });

        var app = builder.Build();

        // Use CORS
        app.UseCors("AllowFrontend");

        // Configure HTTP request pipeline test
        app.UseRouting();
        app.MapControllers();
        app.MapHub<CarRegistrationHub>("/registration");

        app.Run();
    }
}