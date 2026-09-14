
using Carter;
using Microsoft.AspNetCore.Builder;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCarter();

builder.Services.AddDbConnection(builder.Configuration);
builder.Services.AddIdbConnection(builder.Configuration);
builder.Services.AddAllServices();
DapperMappingExtensions.ConfigureDapperMapping();

var app = builder.Build();
Console.WriteLine($"Environment: {app.Environment.EnvironmentName}");
Console.WriteLine($"Cnn: {app.Configuration.GetConnectionString("DefaultConnection")}");


app.UseHttpsRedirection();
app.MapCarter();



app.Run();
